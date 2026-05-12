<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ReporteController extends Controller
{
     /* =========================
        MEDIOS DE PAGO
    ========================= */
    public function mediosPago(Request $request)
    {
        return DB::table('extra_payments as ep')
            ->selectRaw("
                CASE 
                    WHEN ep.moneda = 1 THEN 'Efectivo'
                    WHEN ep.moneda = 4 THEN 'Yape'
                    WHEN ep.moneda = 10 THEN 'Aplicativo Plin'
                    WHEN ep.moneda = 13 THEN 'Culqi'
                    WHEN ep.moneda = 5 THEN 'Banco: BCP'
                    WHEN ep.moneda = 12 THEN 'Open pay'
                    ELSE 'Efectivo' 
                END AS metodo_pago,
                COUNT(*) as registros,
                SUM(ep.price) as monto
            ")
            //Mes enviado desde front. No envia start y end, solo el mes...
            ->whereBetween('ep.date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->where('ep.idSede', 1)
            ->where('ep.activo', 1)
            ->whereNotIn('ep.type', [6,16])
            ->where('ep.price', '>', 0)
            ->groupByRaw("
                CASE 
                    WHEN ep.moneda = 1 THEN 'Efectivo'
                    WHEN ep.moneda = 4 THEN 'Yape'
                    WHEN ep.moneda = 10 THEN 'Aplicativo Plin'
                    WHEN ep.moneda = 13 THEN 'Culqi'
                    WHEN ep.moneda = 5 THEN 'Banco: BCP'
                    WHEN ep.moneda = 12 THEN 'Open pay'
                    ELSE 'Efectivo' 
                END
            ")
            ->orderByRaw("SUM(ep.price) DESC")
            ->get();
    }

    /* =========================
        INGRESOS
    ========================= */
    public function ingresos(Request $request)
    {
        $sub = DB::table('extra_payments as ep')
            ->leftJoin('appointments as app', 'ep.appointment_id', '=', 'app.id')
            ->leftJoin('professionals as p', 'app.professional_id', '=', 'p.id')
            ->selectRaw("
                CASE WHEN ep.type = 6 THEN (ep.price * -1) ELSE ep.price END as monto,
                CASE 
                    WHEN ep.type = 6 THEN 'EGRESOS (Gastos/Salidas)'
                    WHEN ep.type IN (1,4) THEN 'Otros Ingresos'
                    WHEN UPPER(p.profession) LIKE '%PSIQUIATRA%' OR ep.type = 15 THEN 'Psiquiatría'
                    WHEN UPPER(p.profession) LIKE '%PSICOLOGO%' OR ep.type = 5 THEN 'Psicología'
                    ELSE 'Pago de paquete: Terapia inicial niño / adolescente'
                END as servicio
            ")
            ->whereBetween('ep.date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->where('ep.idSede', 1)
            ->where('ep.activo', 1)
            ->where('ep.price', '>', 0);

        return DB::query()
            ->fromSub($sub, 'ReporteUniversal')
            ->selectRaw("
                servicio,
                COUNT(*) as registros,
                SUM(monto) as monto_total
            ")
            ->groupBy('servicio')
            ->orderByRaw("
                CASE WHEN servicio = 'EGRESOS (Gastos/Salidas)' THEN 1 ELSE 0 END ASC,
                SUM(monto) DESC
            ")
            ->get();
    }

    /* =========================
        CONTEO POR PROFESIONAL
    ========================= */
    public function conteoProfesional(Request $request)
    {
        $total = DB::table('appointments')
            ->join('patients', 'appointments.patient_id', '=', 'patients.id')
            ->where('patients.dni', '<>', 'BLOQUEO')
            ->whereBetween('appointments.date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->whereIn('appointments.status', [1,2])
            ->count();

        return DB::table('appointments as app')
            ->join('professionals as p', 'app.professional_id', '=', 'p.id')
            ->join('patients as pat', 'app.patient_id', '=', 'pat.id')
            ->selectRaw("
                p.name as profesional,
                COUNT(CASE WHEN app.status IN (1,2) THEN 1 END) as atenciones,
                COUNT(DISTINCT CASE WHEN app.status = 2 THEN app.patient_id END) as atendidos,
                COUNT(CASE WHEN app.status = 3 THEN 1 END) as anulados,
                COUNT(CASE WHEN app.status = 4 THEN 1 END) as reprogramados,
                CONCAT(ROUND(COUNT(CASE WHEN app.status IN (1,2) THEN 1 END) * 100.0 / ?,1),'%') as porcentaje
            ", [$total])
            ->where('pat.dni', '<>', 'BLOQUEO')
            ->whereBetween('app.date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->groupBy('p.id','p.name')
            ->havingRaw("atenciones > 0 OR anulados > 0 OR reprogramados > 0")
            ->orderByDesc('atenciones')
            ->get();
    }

    /* =========================
        CONTINUIDAD
    ========================= */
    public function continuidad(Request $request)
    {
        $total = DB::table('appointments')
            ->join('patients', 'appointments.patient_id', '=', 'patients.id')
            ->where('patients.dni', '<>', 'BLOQUEO')
            ->whereBetween('appointments.date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->whereIn('appointments.status', [1,2])
            ->distinct('appointments.patient_id')
            ->count('appointments.patient_id');

        $base = DB::table('appointments')
            ->join('patients', 'appointments.patient_id', '=', 'patients.id')
            ->select('appointments.patient_id', DB::raw('MIN(appointments.patient_condition) as condicion_final'))
            ->where('patients.dni', '<>', 'BLOQUEO')
            ->whereBetween('appointments.date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->whereIn('appointments.status', [1,2])
            ->groupBy('appointments.patient_id');

        $data = DB::query()->fromSub($base, 'resumen')
            ->selectRaw("
                CASE 
                    WHEN condicion_final = 1 THEN 'Nuevos'
                    WHEN condicion_final = 2 THEN 'Contínuos'
                    ELSE 'Contínuos'
                END as condicion,
                COUNT(*) as cantidad,
                CONCAT(ROUND(COUNT(*) * 100.0 / ?,1),'%') as porcentaje
            ", [$total])
            ->groupByRaw("
                CASE 
                    WHEN condicion_final = 1 THEN 'Nuevos'
                    WHEN condicion_final = 2 THEN 'Contínuos'
                    ELSE 'Contínuos'
                END
            ")
            ->get();

        $totalRow = DB::table('appointments')
            ->join('patients', 'appointments.patient_id', '=', 'patients.id')
            ->where('patients.dni', '<>', 'BLOQUEO')
            ->selectRaw("'Atendidos únicos' as condicion, COUNT(DISTINCT appointments.patient_id) as cantidad, '100%' as porcentaje")
            ->whereBetween('appointments.date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->whereIn('appointments.status', [1,2])
            ->first();

        return $data->push($totalRow);
    }

    /* =========================
        ESPECIALIDAD
    ========================= */
    public function especialidad(Request $request)
    {
        $total = DB::table('appointments')
            ->join('patients', 'appointments.patient_id', '=', 'patients.id')
            ->where('patients.dni', '<>', 'BLOQUEO')
            ->whereBetween('appointments.date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->where('appointments.status', 2)
            ->count();

        return DB::table('appointments as app')
            ->join('precios as p', 'app.type', '=', 'p.id')
            ->join('precios_clasificacion as c', 'p.idClasificacion', '=', 'c.id')
            ->selectRaw("
                c.clasificacion as especialidad,
                COUNT(app.id) as atenciones,
                COUNT(DISTINCT app.patient_id) as atendidos,
                CONCAT(ROUND(COUNT(app.id) * 100.0 / ?,1),'%') as porcentaje
            ", [$total])
            ->join('patients as pat', 'app.patient_id', '=', 'pat.id')
            ->where('pat.dni', '<>', 'BLOQUEO')
            ->whereBetween('app.date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->where('app.status', 2)
            ->groupBy('c.id','c.clasificacion')
            ->orderByDesc('atenciones')
            ->get();
    }

    /* =========================
        MEDICAMENTOS
    ========================= */
    public function medicamentos(Request $request)
    {
        return DB::table('kairo_prescription as kp')
            ->join('prescriptions as p', 'kp.prescription_id', '=', 'p.id')
            ->join('kairos as k', 'kp.kairo_id', '=', 'k.id')
            ->selectRaw("
                UPPER(CONCAT(COALESCE(k.name,''),' ',COALESCE(k.concentration,''),' ',COALESCE(k.presentation,''))) as medicamento,
                SUM(kp.amount) as cantidad_total,
                COUNT(kp.id) as veces
            ")
            ->whereBetween('p.attention_date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->groupBy('k.id','k.name','k.concentration','k.presentation')
            ->orderByDesc('cantidad_total')
            ->get();
    }

    /* =========================
        PRODUCCION
    ========================= */
    public function produccion(Request $request)
    {
        return DB::table('appointments as app')
            ->join('professionals as prf', 'app.professional_id','=','prf.id')
            ->selectRaw("
                prf.profession,
                prf.name,
                SUM(CASE WHEN app.patient_condition = 1 THEN 1 ELSE 0 END) as nuevos,
                SUM(CASE WHEN app.patient_condition = 2 THEN 1 ELSE 0 END) as continuos,
                SUM(CASE WHEN app.patient_condition = 3 THEN 1 ELSE 0 END) as reevaluaciones,
                COUNT(app.id) as total
            ")
            ->join('patients as pat', 'app.patient_id', '=', 'pat.id')
            ->where('pat.dni', '<>', 'BLOQUEO')
            ->whereBetween('app.date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->whereIn('app.status',[1,2])
            ->groupBy('prf.profession','prf.name')
            ->orderBy('prf.profession')
            ->get();
    }

    /* =========================
        RECETAS PROFESIONAL
    ========================= */
    public function recetasProfesional(Request $request)
    {
        return DB::table('professionals as prf')
            ->join('prescriptions as p', 'p.professional_id','=','prf.id')
            ->selectRaw("
                prf.profession,
                prf.name,
                COUNT(p.id) as recetas
            ")
            ->whereBetween('p.attention_date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->groupBy('prf.id','prf.name','prf.profession')
            ->orderByDesc('recetas')
            ->get();
    }

    /* =========================
        SEXO
    ========================= */
    public function sexo(Request $request)
    {
        $total = DB::table('patients as p')
            ->join('appointments as app','app.patient_id','=','p.id')
            ->where('p.dni', '<>', 'BLOQUEO')
            ->whereBetween('app.date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->whereIn('app.status',[1,2])
            ->distinct('p.id')
            ->count('p.id');

        return DB::table('patients as p')
            ->join('appointments as app','app.patient_id','=','p.id')
            ->selectRaw("
                CASE 
                    WHEN p.gender = 0 THEN 'Femenino'
                    WHEN p.gender = 1 THEN 'Masculino'
                    ELSE 'Otros'
                END as genero,
                COUNT(DISTINCT p.id) as cantidad,
                CONCAT(ROUND(COUNT(DISTINCT p.id)*100/? ,2),'%') as porcentaje
            ",[$total])
            ->where('p.dni', '<>', 'BLOQUEO')
            ->whereBetween('app.date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->whereIn('app.status',[1,2])
            ->groupBy('genero')
            ->get();
    }

    /* =========================
        REPROGRAMACIONES
    ========================= */
    public function reprogramaciones(Request $request)
    {
        return DB::table('professionals as prf')
            ->join('appointments as app','app.professional_id','=','prf.id')
            ->join('reschedules as r','r.appointment_id','=','app.id')
            ->selectRaw("
                prf.profession,
                prf.name,
                COUNT(r.id) as total
            ")
            ->whereBetween('r.created_at', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->groupBy('prf.id','prf.name','prf.profession')
            ->orderByDesc('total')
            ->get();
    }

    /* =========================
        ALTAS
    ========================= */
    public function altas(Request $request)
    {
        return DB::table('patients as p')
            ->join('appointments as app','app.patient_id','=','p.id')
            ->join('professionals as prf','app.professional_id','=','prf.id')
            ->selectRaw("
                prf.profession,
                prf.name,
                COUNT(DISTINCT p.id) as altas
            ")
            ->where('p.discharge',1)
            ->where('p.dni', '<>', 'BLOQUEO')
            ->whereBetween('app.date', [Carbon::parse($request->date)->startOfMonth(), Carbon::parse($request->date)->endOfMonth()])
            ->whereIn('app.status',[1,2])
            ->groupBy('prf.id','prf.name','prf.profession')
            ->orderByDesc('altas')
            ->get();
    }
}
