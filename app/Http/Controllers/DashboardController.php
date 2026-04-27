<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;
use App\Models\Appointment;
use App\Models\Payment;
use App\Models\Professional;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function dashboardRecepcion(){
        //Pacientes activos count.
        $pacientesActivos = Patient::where('activo', true)->count();

        //Citas de hoy count.
        $citasHoy = Appointment::whereDate('date', today())->count();

        //Ingresos del dia count.
        $ingresosHoy = Payment::whereDate('created_at', today())->sum('price');

        //Alertas SOS.
        $alertasSOS = Patient::where('sos', true)->count();

        //Alertas deudas (No existe el modelo, usar sql crudo).
        //Solo deudas del mes actual.
        $alertasDeudas = DB::table('deudas')->where('estado', '1')->whereYear('fecha', today()->year)->whereMonth('fecha', today()->month)->count();

        //Total Alertas.
        $totalAlertas = $alertasSOS + $alertasDeudas;

        //Listar citas de hoy.
        $citasHoy = Appointment::with('patient')->whereDate('date', today())->get();

        //Alertas activas (No existe el modelo, usar sql crudo).
        $sos = DB::table('sos')->join('patients', 'sos.IdPaciente', '=', 'patients.id')->where('sos.activo', true)->get();
        //Solo deudas del mes actual.
        $deudas = DB::table('deudas')->join('patients', 'deudas.patient_id', '=', 'patients.id')->where('deudas.estado', '1')->whereYear('deudas.fecha', today()->year)->whereMonth('deudas.fecha', today()->month)->get();



        //Retornar los datos al dashboard en JSON.
        return response()->json([
            'pacientesActivos' => $pacientesActivos,
            'citasHoy' => $citasHoy,
            'ingresosHoy' => $ingresosHoy,
            'alertasSOS' => $alertasSOS,
            'alertasDeudas' => $alertasDeudas,
            'totalAlertas' => $totalAlertas,
            'citasHoy' => $citasHoy,
            'sos' => $sos,
            'deudas' => $deudas,
        ]);
        
    }

    public function dashboardProfesional(){
        //Obtener el profesional autenticado.
        $current_profesional = Professional::where('user_id', auth()->user()->id)->first();

        //Citas hoy por profesional autenticado.
        $citasHoy = Appointment::with('patient')->whereDate('date', today())->where('professional_id', $current_profesional->id)->get();
        $totalCitas = Appointment::whereDate('date', today())->where('professional_id', $current_profesional->id)->count();
        $totalCitasPendientes = Appointment::whereDate('date', today())->where('professional_id', $current_profesional->id)->where('status', '1')->count();
        $totalCitasCompletadas = Appointment::whereDate('date', today())->where('professional_id', $current_profesional->id)->where('status', '2')->count();
        $totalCitasCanceladas = Appointment::whereDate('date', today())->where('professional_id', $current_profesional->id)->where('status', '3')->count();

        //Retornar los datos al dashboard en JSON.
        return response()->json([
            'citasHoy' => $citasHoy,
            'totalCitas' => $totalCitas,
            'totalCitasPendientes' => $totalCitasPendientes,
            'totalCitasCompletadas' => $totalCitasCompletadas,
            'totalCitasCanceladas' => $totalCitasCanceladas,
        ]);
    }

    public function dashboardModuloPacientes(){
        //Pacientes activos count.
        $pacientesActivos = Patient::where('activo', true)->count();

        //Nuevos del mes.
        $nuevosDelMes = Patient::whereDate('created_at', '>=', now()->startOfMonth())->count();

        //Ingresos del dia count.
        $ingresosHoy = Payment::whereDate('created_at', today())->sum('price');

        //Con cita hoy.
        $conCitaHoy = Appointment::whereDate('date', today())->count();

        //Con deuda.
        $conDeuda = DB::table('deudas')->where('estado', '1')->whereYear('fecha', today()->year)->whereMonth('fecha', today()->month)->count();

        //Casos SOS.
        $casosSOS = DB::table('sos')->join('patients', 'sos.IdPaciente', '=', 'patients.id')->where('sos.activo', true)->count();

        //Tasa de retencion.
        $activos = Patient::where('activo', true)->count();
        //Total de pacientes.
        $totalPacientes = Patient::count();
        //Tasa de retencion.
        $tasaRetencion = $activos / $totalPacientes * 100;

        //Estados de citas (Pendientes, Completadas, Canceladas, reprogramadas) Solo del mes actual.
        $pendientes = Appointment::where('status', '1')->where('date', '>=', now()->startOfMonth())->count();
        $completadas = Appointment::where('status', '2')->where('date', '>=', now()->startOfMonth())->count();
        $canceladas = Appointment::where('status', '3')->where('date', '>=', now()->startOfMonth())->count();
        $reprogramadas = Appointment::where('status', '4')->where('date', '>=', now()->startOfMonth())->count();

        //Tipos de atencion (Tabla precio_clasificacion, obtener cantdades de medical_evolutions).
        //Ejemplo Psicologia: 100(Total de registros con esa clasificacion en medical_evolutions).
        $tiposAtencion = DB::table('precios_clasificacion as pc')
            ->join('medical_evolutions as me', 'pc.id', '=', 'me.type')
            ->select('pc.clasificacion as descripcion', DB::raw('count(*) as total'))
            ->groupBy('pc.clasificacion')
            ->where('me.date', '>=', now()->startOfMonth())
            ->get();
       

        //Retornar los datos al dashboard en JSON.
        return response()->json([
            'pacientesActivos' => $pacientesActivos,
            'nuevosDelMes' => $nuevosDelMes,
            'ingresosHoy' => $ingresosHoy,
            'conCitaHoy' => $conCitaHoy,
            'conDeuda' => $conDeuda,
            'casosSOS' => $casosSOS,
            'tasaRetencion' => $tasaRetencion,
            'pendientes' => $pendientes,
            'completadas' => $completadas,
            'canceladas' => $canceladas,
            'reprogramadas' => $reprogramadas,
            'tiposAtencion' => $tiposAtencion,
        ]);
    }

    public function dashboardModuloCitas(){
        //Total de citas hoy.
        $totalCitasHoy = Appointment::whereDate('date', today())->count();

        //Total de citas pendientes.
        $totalCitasPendientes = Appointment::where('status', '1')->where('date', today())->count();

        //Total de citas completadas.
        $totalCitasCompletadas = Appointment::where('status', '2')->where('date', today())->count();

        //Total de citas canceladas.
        $totalCitasCanceladas = Appointment::where('status', '3')->where('date', today())->count();

        //Total de citas reprogramadas.
        $totalCitasReprogramadas = Appointment::where('status', '4')->where('date', today())->count();

        //Total de citas no asistidas (Hora inicio = null, Estado = 1, Hora pasada la actual).
        $totalCitasNoAsistidas = Appointment::where('hora_inicio', null)->where('status', '1')->where('date', '<', today())->count();

        //Numero de citas semanales por tipo (Mostrar descripcion del tipo, hacer join a tabla precios).
        $citasSemanalesPorTipo = DB::table('appointments as a')
            ->join('precios as p', 'a.type', '=', 'p.id')
            ->select('p.descripcion', DB::raw('count(*) as total'))
            ->where('a.date', '>=', today()->startOfWeek())
            ->where('a.date', '<=', today()->endOfWeek())
            ->groupBy('p.descripcion')
            ->get();

        //Ocupación Semanal por Profesional
        $data = DB::table('schedules as s')
            ->join('professionals as p', 's.professional_id', '=', 'p.id')
            ->where('p.activo', 1)
            ->select(
                's.day as dia',
                'p.nombre as profesional',
                DB::raw('COUNT(s.id) as total')
            )
            ->groupBy('s.day', 'p.id', 'p.nombre')
            ->orderByRaw("
                FIELD(s.day, 
                    'Lunes', 
                    'Martes', 
                    'Miercoles', 
                    'Jueves', 
                    'Viernes', 
                    'Sabado', 
                    'Domingo'
                )
            ")
            ->orderBy('p.nombre')
            ->get();

            //Listar citas de hoy con relaciones.
            $citasHoy = Appointment::with(['patient', 'professional', 'precio', 'payment', 'membresia', 'schedule', 'faltas'])->whereDate('date', today())->orderBy('date', 'asc')->get();

        //Retornar los datos al dashboard en JSON.
        return response()->json([
            'totalCitasHoy' => $totalCitasHoy,
            'totalCitasPendientes' => $totalCitasPendientes,
            'totalCitasCompletadas' => $totalCitasCompletadas,
            'totalCitasCanceladas' => $totalCitasCanceladas,
            'totalCitasReprogramadas' => $totalCitasReprogramadas,
            'totalCitasNoAsistidas' => $totalCitasNoAsistidas,
            'citasSemanalesPorTipo' => $citasSemanalesPorTipo,
            'ocupacionSemanalPorProfesional' => $data,
            'citasHoy' => $citasHoy,
        ]);
        
    }

}