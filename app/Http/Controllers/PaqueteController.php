<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Membresia;
use App\Models\Appointment;
use App\Models\Extra_payment;
use App\Models\Patient;
use App\Models\Professional;
use App\Models\ReportePaqueteExtra;
use App\Models\Payment;
use App\Models\NotaCredito;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Barryvdh\DomPDF\Facade\Pdf as PDF;

class PaqueteController extends Controller
{
    public function listarPaquetes(Request $request)
    {
        $estado = $request->input('estado', 0);
        $tipo = $request->input('tipo', -1);
        $busqueda = $request->input('busqueda', '');

        $query = Membresia::where('membresias.activo', 1)
            ->whereNotNull('membresias.patient_id')
            ->with(['reporte_extra', 'appointments' => function($q) {
                $q->where('status', '!=', 6); // Omitir cancelados si es necesario
            }])
            ->withCount(['appointments as sesiones_programadas' => function($q) {
                $q->where('status', '!=', 6);
            }])
            ->join('patients as pt', 'pt.id', '=', 'membresias.patient_id')
            ->join('precios as p', 'p.id', '=', 'membresias.tipo')
            ->leftJoin('users as u', 'u.id', '=', 'membresias.user_id')
            ->select(
                'membresias.*',
                'membresias.cuotas as total_cuotas_reales',
                'pt.name as patient_name',
                'pt.nombres as patient_nombres',
                'pt.dni as patient_dni',
                'p.descripcion as paquete_nombre',
                'p.sesiones as total_sesiones',
                'p.servicio as tipo_servicio',
                'p.idClasificacion',
                'u.nombre as registrado_por'
            );

        // Filters matching frontend logic
        if ($estado != 0) {
            $query->where('membresias.estado', $estado);
        }
        if ($tipo != -1) {
            // El front filtra si es 1 (Psicológica/Consulta) o 0 (Ext.)
            // Podrías ajustar este campo según qué guardas en la BD (ej. p.servicio, p.idClasificacion)
            // Asumiré p.servicio según lo que usaste en la vista
            $query->where('p.servicio', $tipo); 
        }
        if (!empty($busqueda)) {
            $query->where(function($q) use ($busqueda) {
                $q->where('pt.name', 'LIKE', "%{$busqueda}%")
                  ->orWhere('pt.nombres', 'LIKE', "%{$busqueda}%")
                  ->orWhere('pt.dni', 'LIKE', "%{$busqueda}%")
                  ->orWhere('p.descripcion', 'LIKE', "%{$busqueda}%");
            });
        }

        // Global metrics computation using clones to avoid N+1 over limits
        $metricas = [
            'totales' => (clone $query)->count(),
            'activos' => (clone $query)->where('membresias.estado', 2)->count(),
            'completados' => (clone $query)->where('membresias.estado', 3)->count(),
        ];

        $hoy = Carbon::now()->format('Y-m-d');

        // Contar deudas vencidas globalmente buscando en la tabla de deudas
        $membresiasIds = clone $query;
        $vencidas = DB::table('deudas')
            ->joinSub($membresiasIds->select('membresias.id'), 'm', function ($join) {
                $join->on('deudas.idMembresia', '=', 'm.id');
            })
            ->where('deudas.estado', 1) // 1 = pendiente
            ->where('deudas.activo', 1)
            ->where('deudas.fecha', '<', $hoy)
            ->count();

        $metricas['vencidas'] = $vencidas;

        // Paginate results to 15 per page to fix timeout
        $paginated = $query->orderBy('membresias.inicio', 'desc')->paginate(15);

        foreach ($paginated as $membresia) {
            $citas = Appointment::where('idMembresia', $membresia->id)
                ->with('professional')
                ->orderBy('date', 'desc')
                ->get();
            
            $membresia->historial_citas = $citas;
            $membresia->sesiones_usadas = $citas->where('status', '<>', 3)->count();

            $pagos = Extra_payment::where('idMembresia', $membresia->id)->where('activo', 1)->get();
            $membresia->pagado = $pagos->sum('price');

            $deudas = DB::table('deudas')->where('idMembresia', $membresia->id)->where('activo', 1)->get();
            
            $cuotas_vencidas = 0;
            $deuda_total = 0;
            foreach($deudas as $d) {
                if ($d->estado == 1) { // pendiente
                    $deuda_total += floatval($d->monto);
                    if ($d->fecha < $hoy) {
                        $cuotas_vencidas++;
                    }
                }
            }
            $membresia->debe = $deuda_total;
            $membresia->cuotas_vencidas = $cuotas_vencidas;
            $membresia->total_cuotas = $membresia->total_cuotas_reales; 
            $membresia->deudas = clone $deudas;
            
            // La primera cita está al final de la colección (ya que está ordenada por fecha desc)
            $firstAppt = $citas->last();
            $membresia->professional = $firstAppt && $firstAppt->professional ? $firstAppt->professional->name : '';
            
            // Evaluación dinámica de estados:
            if ($membresia->estado == 1) { // Inactivo/Pendiente
                if ($membresia->pagado > 0 || $citas->count() > 0) {
                    $membresia->estado = 2; // Pasa a Activo
                    Membresia::where('id', $membresia->id)->update(['estado' => 2]);
                }
            } elseif ($membresia->estado == 2) { // Activo
                $sesionesEfectivas = $citas->where('status', 2)->count();
                if ($membresia->total_sesiones > 0 && $sesionesEfectivas >= $membresia->total_sesiones && floatval($membresia->pagado) >= floatval($membresia->monto)) {
                    $membresia->estado = 3; // Completado
                    Membresia::where('id', $membresia->id)->update(['estado' => 3]);
                }
            }

            switch($membresia->estado) {
                case 1: $membresia->status_name = 'Inactivo'; break;
                case 2: $membresia->status_name = 'Activo'; break;
                case 3: $membresia->status_name = 'Concluido'; break;
                case 4: $membresia->status_name = 'Prorrateado'; break;
                case 5: $membresia->status_name = 'Congelado'; break;
                case 6: $membresia->status_name = 'Cancelado'; break;
                default: $membresia->status_name = 'Desconocido'; break;
            }
        }

        return response()->json([
            'paquetes' => $paginated,
            'metricas' => $metricas
        ]);
    }

    public function storeReportePaqueteExtra(Request $request){

        $validated = $request->validate([
            'resumen' => 'required|string',
            'logros' => 'required|string',
            'recomendaciones' => 'required|string',
            'proximos_pasos' => 'required|string',
            'membresia_id' => 'required|integer|exists:membresias,id',
        ]);

        $reportePaqueteExtra = ReportePaqueteExtra::create([
            'resumen' => $validated['resumen'],
            'logros' => $validated['logros'],
            'recomendaciones' => $validated['recomendaciones'],
            'proximos_pasos' => $validated['proximos_pasos'],
            'membresia_id' => $validated['membresia_id'],
            'fecha' => Carbon::now()->format('Y-m-d'),
        ]);

        return response()->json([
            'message' => 'Reporte de paquete extra creado exitosamente.',
            'reporte' => $reportePaqueteExtra,
        ]);
    }

    public function getReportesPaquetesExtra($membresia_id){
        $reportePaqueteExtra = ReportePaqueteExtra::with([
            'membresia',
            'membresia.patient',
        ])->where('membresia_id', $membresia_id)->orderBy('fecha', 'desc')->get();
        return response()->json($reportePaqueteExtra);
    }

    public function pdfReportePaquete($id)
    {
        $membresia = DB::table('membresias as m')
            ->join('patients as pt', 'm.patient_id', '=', 'pt.id')
            ->select(
                'm.id',
                'm.patient_id',
                'm.inicio',
                'm.fin',
                'm.estado',
                'm.cuotas',
                'm.descuento',
                'm.monto as precio_base',
                'm.registro',
                'pt.name as patient_name',
                'pt.nombres as patient_nombres',
                'pt.dni as patient_dni'
            )
            ->where('m.id', $id)
            ->first();

        $reporteExtra = \App\Models\ReportePaqueteExtra::where('membresia_id', $id)->first();

        if (!$membresia) {
            return response()->json([
                'message' => 'Membresía no encontrada'
            ], 404);
        }

        $citas = Appointment::where('idMembresia', $membresia->id)
            ->with('professional')
            ->orderBy('date', 'desc')
            ->get();
        
        $membresia->historial_citas = $citas;
        $membresia->sesiones_usadas = $citas->where('status', '<>', 3)->count();

        $pagos = Extra_payment::where('idMembresia', $membresia->id)->where('activo', 1)->get();
        $membresia->pagado = $pagos->sum('price');

        $deudas = DB::table('deudas')->where('idMembresia', $membresia->id)->where('activo', 1)->get();
        
        $cuotas_vencidas = 0;
        $deuda_total = 0;

        $hoy = Carbon::now()->format('Y-m-d');

        foreach($deudas as $d) {
            if ($d->estado == 1) { // pendiente
                $deuda_total += floatval($d->monto);
                if ($d->fecha < $hoy) {
                    $cuotas_vencidas++;
                }
            }
        }
        
        $membresia->debe = $deuda_total;
        $membresia->cuotas_vencidas = $cuotas_vencidas;
        $membresia->total_cuotas = $membresia->cuotas; 
        $membresia->deudas = clone $deudas;
        
        // La primera cita está al final de la colección (ya que está ordenada por fecha desc)
        $firstAppt = $citas->last();
        $membresia->professional = $firstAppt && $firstAppt->professional ? $firstAppt->professional->name : '';
        
        switch($membresia->estado) {
            case 1: $membresia->status_name = 'Pendiente'; break;
            case 2: $membresia->status_name = 'Activo'; break;
            case 3: $membresia->status_name = 'Completado'; break;
            case 4: $membresia->status_name = 'Prorrateado'; break;
            case 5: $membresia->status_name = 'Congelado'; break;
            case 6: $membresia->status_name = 'Cancelado'; break;
            default: $membresia->status_name = 'Desconocido'; break;
        }

        $data = [
            'membresia' => $membresia,
            'paciente' => Patient::where('id', $membresia->patient_id)->first(),
            'citas' => $citas,
            'pagos' => $pagos,
            'deudas' => $deudas,
            'cuotas_vencidas' => $cuotas_vencidas,
            'deuda_total' => $deuda_total,
            'total_cuotas' => $membresia->cuotas,
            'total_citas' => $citas->count(),
            'total_pagado' => $pagos->sum('price'),
            'status_name' => $membresia->status_name,
            'reporte_extra' => $reporteExtra
        ];

        $pdf = PDF::loadView('admin.pdf_reporte_paquete', $data);
        return $pdf->download('reporte_paquete.pdf');
    }

    public function agendarCitaPaquete(Request $request)
    {
        try {
            $cita = Appointment::create([
                'date' => $request->input('date'),
                'patient_condition' => $request->input('patient_condition', 2), 
                'type' => $request->input('type'),
                'mode' => $request->input('mode', 1),
                'status' => $request->input('status', 1),
                'clasification' => $request->input('clasification'),
                'professional_id' => $request->input('professional_id'),
                'patient_id' => $request->input('patient_id'),
                'schedule_id' => $request->input('schedule_id'),
                'formato_nuevo' => $request->input('formato_nuevo', 1),
                'byDoctor' => 0,
                'num_sesion' => $request->input('num_sesion'),
                'idMembresia' => $request->input('idMembresia')
            ]);

            // Crear el pago ficticio para la cita
            Payment::create([
                'observation' => '',
                'bank' => '',
                'voucher' => '',
                'pay_status' => 1,
                'price' => 0,
                'appointment_id' => $cita->id,
                'continuo' => 2,
                'user_id' => $request->input('user_id'),
                'rebaja' => 0,
                'motivoRebaja' => 'Agendado desde paquete',
                'descuento' => 0,
                'motivoDescuento' => ''
            ]);

            return response()->json(['cita' => $cita, 'estado' => 'ok']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function prorratearPaquete(Request $request, $id)
    {
        DB::beginTransaction();
        try {
            $membresia = Membresia::findOrFail($id);
            $precio = DB::table('precios')->where('id', $membresia->tipo)->first();
            
            if (!$precio || $precio->sesiones <= 0) {
                return response()->json(['error' => 'No se puede prorratear porque no se definió el número de sesiones.'], 400);
            }

            // Cancelar citas futuras o pendientes (1 = Agendado, 4 = Reprogramado)
            Appointment::where('idMembresia', $id)
                ->whereIn('status', [1, 4])
                ->update(['status' => 3]); // 3 = Anulado

            // Anular deudas pendientes
            DB::table('deudas')
                ->where('idMembresia', $id)
                ->where('estado', 1) // Pendiente
                ->update(['activo' => 0]);

            // Calcular sesiones efectivas (status 2 = Atendido)
            $sesiones_efectivas = Appointment::where('idMembresia', $id)
                ->where('status', 2)
                ->count();

            // Costo por sesión
            $costo_por_sesion = floatval($membresia->monto) / floatval($precio->sesiones);
            
            // Total pagado
            $total_pagado = Extra_payment::where('idMembresia', $id)
                ->where('activo', 1)
                ->sum('price');

            // Dinero a favor
            $dinero_a_favor = $total_pagado - ($costo_por_sesion * $sesiones_efectivas);

            if ($dinero_a_favor > 0) {
                NotaCredito::create([
                    'patient_id' => $membresia->patient_id,
                    'idMembresia_origen' => $id,
                    'monto_original' => $dinero_a_favor,
                    'monto_disponible' => $dinero_a_favor,
                    'estado' => 1, // Disponible
                    'observaciones' => $request->input('observaciones', 'Prorrateo de paquete'),
                    'fecha_emision' => Carbon::now()->format('Y-m-d')
                ]);
            }

            $membresia->estado = 4; // Prorrateado
            $membresia->save();

            DB::commit();
            return response()->json(['message' => 'Paquete prorrateado correctamente', 'dinero_a_favor' => $dinero_a_favor]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function cancelarPaquete(Request $request, $id)
    {
        DB::beginTransaction();
        try {
            $membresia = Membresia::findOrFail($id);
            
            // Cancelar citas pendientes
            Appointment::where('idMembresia', $id)
                ->whereIn('status', [1, 4])
                ->update(['status' => 3]);

            // Anular deudas pendientes
            DB::table('deudas')
                ->where('idMembresia', $id)
                ->where('estado', 1)
                ->update(['activo' => 0]);

            $membresia->estado = 6; // Cancelado
            $membresia->save();

            DB::commit();
            return response()->json(['message' => 'Paquete cancelado correctamente']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function congelarPaquete(Request $request, $id)
    {
        try {
            $membresia = Membresia::findOrFail($id);
            $membresia->estado = 5; // Congelado
            $membresia->save();

            return response()->json(['message' => 'Paquete congelado correctamente']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function actualizarDeuda(Request $request)
    {
        try {
            DB::beginTransaction();
            $idDeuda = $request->input('idDeuda');
            $nuevoMotivo = $request->input('motivo');
            $nuevaFecha = $request->input('fecha');
            $usuarioId = $request->input('user_id') ?? auth()->id() ?? 1;

            $deuda = DB::table('deudas')->where('id', $idDeuda)->first();
            if (!$deuda) {
                return response()->json(['error' => 'Deuda no encontrada'], 404);
            }

            $user = DB::table('users')->where('id', $usuarioId)->first();
            $nombreUsuario = $user ? $user->nombre : 'Sistema';
            
            $cambios = [];
            if ($deuda->motivo != $nuevoMotivo) {
                $cambios[] = "Motivo cambiado de '{$deuda->motivo}' a '{$nuevoMotivo}'";
            }
            if ($deuda->fecha != $nuevaFecha) {
                $cambios[] = "Fecha cambiada de '{$deuda->fecha}' a '{$nuevaFecha}'";
            }

            $nuevaObs = $deuda->observaciones;
            if (count($cambios) > 0) {
                $fechaHoraActual = \Carbon\Carbon::now()->format('Y-m-d H:i:s');
                $textoCambios = implode(", ", $cambios);
                $notaAdicional = "\n[$fechaHoraActual] Modificado por $nombreUsuario: $textoCambios";
                $nuevaObs = $deuda->observaciones . $notaAdicional;
                
                DB::table('deudas')
                    ->where('id', $idDeuda)
                    ->update([
                        'motivo' => $nuevoMotivo,
                        'fecha' => $nuevaFecha,
                        'observaciones' => trim($nuevaObs)
                    ]);
            }

            DB::commit();
            return response()->json(['message' => 'Cuota actualizada correctamente']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function fraccionarDeuda(Request $request)
    {
        try {
            DB::beginTransaction();
            $idDeuda = $request->input('idDeuda');
            $montoSeparar = floatval($request->input('monto_fraccion'));
            $nuevaFecha = $request->input('nueva_fecha');
            $usuarioId = $request->input('user_id') ?? auth()->id() ?? 1;

            $deuda = DB::table('deudas')->where('id', $idDeuda)->first();
            if (!$deuda) {
                return response()->json(['error' => 'Deuda no encontrada'], 404);
            }

            if ($montoSeparar <= 0 || $montoSeparar >= $deuda->monto) {
                return response()->json(['error' => 'Monto a separar inválido'], 400);
            }

            $user = DB::table('users')->where('id', $usuarioId)->first();
            $nombreUsuario = $user ? $user->nombre : 'Sistema';

            $nuevoMontoOriginal = $deuda->monto - $montoSeparar;

            $fechaHoraActual = \Carbon\Carbon::now()->format('Y-m-d H:i:s');
            
            // Actualizar deuda original
            $notaOriginal = "\n[$fechaHoraActual] Fraccionado por $nombreUsuario: Se separó S/ {$montoSeparar} para el {$nuevaFecha}.";
            DB::table('deudas')
                ->where('id', $idDeuda)
                ->update([
                    'monto' => $nuevoMontoOriginal,
                    'observaciones' => trim($deuda->observaciones . $notaOriginal)
                ]);

            // Crear la nueva fracción
            DB::table('deudas')->insert([
                'patient_id' => $deuda->patient_id,
                'motivo' => $deuda->motivo . " (Fracción)",
                'user_id' => $deuda->user_id,
                'fecha' => $nuevaFecha,
                'monto' => $montoSeparar,
                'estado' => $deuda->estado,
                'activo' => 1,
                'idMembresia' => $deuda->idMembresia,
                'observaciones' => "[$fechaHoraActual] Cuota fraccionada de la deuda original por $nombreUsuario."
            ]);

            DB::commit();
            return response()->json(['message' => 'Cuota fraccionada correctamente']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
