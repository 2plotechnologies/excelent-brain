<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Membresia;
use App\Models\Appointment;
use App\Models\Extra_payment;
use App\Models\Patient;
use App\Models\Professional;
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
            
            switch($membresia->estado) {
                case 1: $membresia->status_name = 'Pendiente'; break;
                case 2: $membresia->status_name = 'Activo'; break;
                case 3: $membresia->status_name = 'Completado'; break;
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
        ];

        $pdf = PDF::loadView('admin.pdf_reporte_paquete', $data);
        return $pdf->download('reporte_paquete.pdf');
    }
}
