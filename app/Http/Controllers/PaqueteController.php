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

        // Filtrar por sede
        if ($request->has('idSede') && $request->idSede) {
            $query->where('membresias.idSede', $request->idSede);
        }

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
                $q->where(DB::raw("CONCAT(pt.name, ' ', IFNULL(pt.nombres, ''))"), 'LIKE', "%{$busqueda}%")
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
        // But allow returning all if requested for the Deudas tab
        if ($request->has('all') && $request->input('all') == 1) {
            $results = $query->orderBy('membresias.inicio', 'desc')->get();
            $paginated = new \Illuminate\Pagination\LengthAwarePaginator($results, $results->count(), $results->count() ?: 1, 1);
        } else {
            $paginated = $query->orderBy('membresias.inicio', 'desc')->paginate(15);
        }

        foreach ($paginated as $membresia) {
            $citas = Appointment::where('idMembresia', $membresia->id)
                ->with('professional')
                ->orderBy('date', 'desc')
                ->get();

            $membresia->historial_citas = $citas;
            $membresia->sesiones_usadas = $citas->filter(function($cita) {
                return in_array($cita->status, [1, 2]) || $cita->attention_status === 'atendido';
            })->count();

            $pagos = Extra_payment::where('idMembresia', $membresia->id)->where('activo', 1)->get();
            $membresia->pagado = $pagos->sum('price');

            $deudas = DB::table('deudas')
                ->where('idMembresia', $membresia->id)
                ->where('activo', 1)
                ->select('deudas.*')
                ->addSelect(['metodo_pago_nombre' => DB::table('extra_payments')
                    ->join('payment_method', 'extra_payments.moneda', '=', 'payment_method.id')
                    ->whereColumn('extra_payments.numero_cuota', 'deudas.numero_cuota')
                    ->where('extra_payments.idMembresia', $membresia->id)
                    ->where('extra_payments.activo', 1)
                    ->select('payment_method.tipo')
                    ->orderBy('extra_payments.id', 'desc')
                    ->take(1)
                ])
                ->addSelect(['extra_payment_id' => DB::table('extra_payments')
                    ->whereColumn('extra_payments.numero_cuota', 'deudas.numero_cuota')
                    ->where('extra_payments.idMembresia', $membresia->id)
                    ->where('extra_payments.activo', 1)
                    ->select('extra_payments.id')
                    ->orderBy('extra_payments.id', 'desc')
                    ->take(1)
                ])
                ->orderBy('numero_cuota', 'asc')
                ->orderBy('fecha', 'asc')
                ->get();

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
                $sesionesEfectivas = $citas->filter(function($cita) {
                    return $cita->status == 2 || $cita->attention_status === 'atendido';
                })->count();
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
        $membresia->sesiones_usadas = $citas->filter(function($cita) {
            return in_array($cita->status, [1, 2]) || $cita->attention_status === 'atendido';
        })->count();

        $pagos = Extra_payment::where('idMembresia', $membresia->id)->where('activo', 1)->get();
        $membresia->pagado = $pagos->sum('price');

        $deudas = DB::table('deudas')
            ->where('idMembresia', $membresia->id)
            ->where('activo', 1)
            ->select('deudas.*')
            ->addSelect(['metodo_pago_nombre' => DB::table('extra_payments')
                ->join('payment_method', 'extra_payments.moneda', '=', 'payment_method.id')
                ->whereColumn('extra_payments.numero_cuota', 'deudas.numero_cuota')
                ->where('extra_payments.idMembresia', $membresia->id)
                ->where('extra_payments.activo', 1)
                ->select('payment_method.tipo')
                ->orderBy('extra_payments.id', 'desc')
                ->take(1)
            ])
            ->addSelect(['extra_payment_id' => DB::table('extra_payments')
                ->whereColumn('extra_payments.numero_cuota', 'deudas.numero_cuota')
                ->where('extra_payments.idMembresia', $membresia->id)
                ->where('extra_payments.activo', 1)
                ->select('extra_payments.id')
                ->orderBy('extra_payments.id', 'desc')
                ->take(1)
            ])
            ->orderBy('numero_cuota', 'asc')
            ->orderBy('fecha', 'asc')
            ->get();

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
            $schedule_id = $request->input('schedule_id');
            $scheduleInfo = \App\Models\Schedule::find($schedule_id);
            $hora_inicio = $scheduleInfo ? $scheduleInfo->check_time : null;
            $duracion = 60; // Fallback
            $precio = \App\Models\Precio::find($request->input('type'));
            if ($precio && $precio->duracion) {
                $duracion = intval($precio->duracion);
            } elseif ($request->input('idMembresia')) {
                $membresia = Membresia::with('precio')->find($request->input('idMembresia'));
                if ($membresia && $membresia->precio && $membresia->precio->duracion) {
                    $duracion = intval($membresia->precio->duracion);
                }
            }
            $duracion = abs($duracion);
            $hora_fin = $hora_inicio ? \Carbon\Carbon::parse($hora_inicio)->addMinutes($duracion)->format('H:i:s') : null;

            // Verificar cruce de horarios para agendar cita de paquete
            if ($hora_inicio && $hora_fin) {
                $existing = Appointment::where('professional_id', $request->input('professional_id'))
                    ->where('date', $request->input('date'))
                    ->whereIn('status', [1, 2])
                    ->with(['schedule', 'precio', 'membresia.precio'])
                    ->get()
                    ->filter(function($cita) {
                        return in_array($cita->status, [1, 2]) || $cita->attention_status === 'atendido';
                    });

                foreach ($existing as $ext) {
                    $extStart = $ext->hora_inicio ?? ($ext->schedule ? $ext->schedule->check_time : null);
                    if (!$extStart) continue;

                    $extDuration = $ext->duracion;
                    if (!$extDuration) {
                        if ($ext->precio && $ext->precio->duracion) {
                            $extDuration = intval($ext->precio->duracion);
                        } elseif ($ext->membresia && $ext->membresia->precio && $ext->membresia->precio->duracion) {
                            $extDuration = intval($ext->membresia->precio->duracion);
                        } else {
                            $extDuration = 60;
                        }
                    }
                    $extDuration = abs($extDuration);
                    $extEnd = $ext->hora_fin ?? \Carbon\Carbon::parse($extStart)->addMinutes($extDuration)->format('H:i:s');

                    if ($hora_inicio < $extEnd && $hora_fin > $extStart) {
                        return response()->json(['error' => 'El horario ya fue reservado o tiene un cruce con otra cita.'], 409);
                    }
                }
            }

            $user_id = $request->input('user_id');
            $idSede = $request->input('idSede');
            if (!$idSede && $user_id) {
                $idSede = DB::table('users')->where('id', $user_id)->value('IdSede');
            }
            if (!$idSede) {
                $idSede = 1;
            }

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
                'idMembresia' => $request->input('idMembresia'),
                'idSede' => $idSede,
                'hora_inicio' => $hora_inicio,
                'hora_fin' => $hora_fin,
                'duracion' => $duracion,
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
                'user_id' => $user_id,
                'rebaja' => 0,
                'motivoRebaja' => 'Agendado desde paquete',
                'descuento' => 0,
                'motivoDescuento' => '',
                'idSede' => $idSede,
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

            // 1. Asegurar que las citas que sí se dieron (tienen evolución médica) tengan status 2 (Atendido/Confirmado)
            Appointment::where('idMembresia', $id)
                ->whereIn('status', [1, 4])
                ->whereHas('medical_evolutions')
                ->update(['status' => 2]);

            // 2. Cancelar citas futuras o pendientes reales (1 = Agendado, 4 = Reprogramado) que NO tengan evoluciones médicas
            Appointment::where('idMembresia', $id)
                ->whereIn('status', [1, 4])
                ->whereDoesntHave('medical_evolutions')
                ->update(['status' => 3]); // 3 = Anulado

            // 3. Anular deudas pendientes (mantenemos activo = 1 y ponemos estado = 3 para que se muestren en el modal de pagos)
            DB::table('deudas')
                ->where('idMembresia', $id)
                ->where('estado', 1) // Pendiente
                ->update(['estado' => 3]);

            // Calcular sesiones efectivas
            $citasMembresia = Appointment::where('idMembresia', $id)->get();
            $sesiones_efectivas = $citasMembresia->filter(function($cita) {
                return $cita->status == 2 || $cita->attention_status === 'atendido';
            })->count();

            // El prorrateo se basa en el precio base de la membresía (monto + descuento).
            $precio_base = floatval($membresia->monto) + floatval($membresia->descuento);
            $costo_por_sesion = $precio_base / floatval($precio->sesiones);
            $monto_proporcional = round($costo_por_sesion * $sesiones_efectivas, 2);

            // Total pagado actualmente
            $total_pagado = floatval(Extra_payment::where('idMembresia', $id)
                ->where('activo', 1)
                ->sum('price'));

            // Calcular diferencia (dinero a favor del paciente si es positivo, saldo deudor si es negativo).
            $diferencia = round($total_pagado - $monto_proporcional, 2);

            $user_id = auth()->id() ?: $membresia->user_id;

            if ($diferencia > 0) {
                // Caso A: El paciente pagó de más -> Generar Nota de Crédito y pago de ajuste negativo.
                $dinero_a_favor = $diferencia;
                NotaCredito::create([
                    'patient_id' => $membresia->patient_id,
                    'idMembresia_origen' => $id,
                    'monto_original' => $dinero_a_favor,
                    'monto_disponible' => $dinero_a_favor,
                    'estado' => 1, // Disponible
                    'observaciones' => $request->input('observaciones', 'Prorrateo de paquete'),
                    'fecha_emision' => Carbon::now()->format('Y-m-d')
                ]);

                // Generar pago de ajuste negativo
                $patient = Patient::find($membresia->patient_id);
                $customer_name = $patient ? trim($patient->name . ' ' . $patient->nombres) : '';

                $pagoAjuste = new Extra_payment;
                $pagoAjuste->customer = $customer_name;
                $pagoAjuste->price = -$dinero_a_favor;
                $pagoAjuste->moneda = 1;
                $pagoAjuste->voucher = '';
                $pagoAjuste->appointment_id = 0;
                $pagoAjuste->patient_id = $membresia->patient_id;
                $pagoAjuste->type = 7; // pago de membresía
                $pagoAjuste->observation = 'Ajuste Prorrateo - Devolución';
                $pagoAjuste->continuo = 3;
                $pagoAjuste->idMembresia = $id;
                $pagoAjuste->user_id = $user_id;
                $pagoAjuste->numero_cuota = 0;
                $pagoAjuste->idSede = $membresia->idSede ?: (DB::table('users')->where('id', $user_id)->value('IdSede') ?: 1);
                $pagoAjuste->save();
            } elseif ($diferencia < 0) {
                // Caso B: El paciente pagó de menos -> Generar cuota de saldo deudor pendiente
                $saldo_deudor = abs($diferencia);
                DB::table('deudas')->insert([
                    'patient_id' => $membresia->patient_id,
                    'motivo' => 'Saldo Deudor Prorrateo - ' . ($precio->descripcion ?: 'Paquete'),
                    'user_id' => $user_id,
                    'fecha' => Carbon::now()->format('Y-m-d'),
                    'monto' => $saldo_deudor,
                    'idMembresia' => $id,
                    'idPago' => $membresia->tipo,
                    'numero_cuota' => 1,
                    'estado' => 1, // pendiente
                    'activo' => 1
                ]);
            }

            // Actualizar el monto de la membresía al valor proporcional consumido y setear descuento a 0
            $membresia->monto = $monto_proporcional;
            $membresia->descuento = 0;
            $membresia->estado = 4; // Prorrateado
            $membresia->save();

            DB::commit();
            return response()->json([
                'message' => 'Paquete prorrateado correctamente',
                'dinero_a_favor' => $diferencia > 0 ? $diferencia : 0,
                'saldo_deudor' => $diferencia < 0 ? abs($diferencia) : 0
            ]);
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

                if ($deuda->fecha != $nuevaFecha) {
                    $todasDeudas = DB::table('deudas')
                        ->where('idMembresia', $deuda->idMembresia)
                        ->where('activo', 1)
                        ->orderBy('fecha', 'asc')
                        ->orderBy('id', 'asc')
                        ->get();

                    $num = 1;
                    foreach($todasDeudas as $d) {
                        DB::table('deudas')->where('id', $d->id)->update(['numero_cuota' => $num]);
                        $num++;
                    }
                }
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
                'idPago' => property_exists($deuda, 'idPago') ? $deuda->idPago : null,
                'numero_cuota' => $deuda->numero_cuota,
                'observaciones' => "[$fechaHoraActual] Cuota fraccionada de la deuda original por $nombreUsuario."
            ]);

            $nuevaFraccionId = DB::getPdo()->lastInsertId();

            // Reordenar numero_cuota para este paquete
            $todasDeudas = DB::table('deudas')
                ->where('idMembresia', $deuda->idMembresia)
                ->where('activo', 1)
                ->orderBy('fecha', 'asc')
                ->orderByRaw("CASE WHEN id = ? THEN 0 ELSE 1 END", [$nuevaFraccionId])
                ->orderBy('id', 'asc')
                ->get();

            $num = 1;
            foreach($todasDeudas as $d) {
                DB::table('deudas')->where('id', $d->id)->update(['numero_cuota' => $num]);
                $num++;
            }

            DB::commit();
            return response()->json(['message' => 'Cuota fraccionada correctamente']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
