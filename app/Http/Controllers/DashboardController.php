<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;
use App\Models\Appointment;
use App\Models\Payment;
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
}
