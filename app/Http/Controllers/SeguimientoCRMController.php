<?php

namespace App\Http\Controllers;
use App\Models\SeguimientoCRM;
use App\Models\Patient;
use App\Models\Appointment;
use App\Models\Precio;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class SeguimientoCRMController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->query('search');
        
        $query = Patient::has("appointments");
        
        if ($search) {
            $query->where(function($q) use ($search) {
                $q->whereRaw("CONCAT(COALESCE(name, ''), ' ', COALESCE(nombres, '')) LIKE ?", ["%{$search}%"])
                  ->orWhereRaw("CONCAT(COALESCE(nombres, ''), ' ', COALESCE(name, '')) LIKE ?", ["%{$search}%"])
                  ->orWhere('dni', 'LIKE', "%{$search}%")
                  ->orWhere('phone', 'LIKE', "%{$search}%");
            });
            $patients = $query->orderBy("created_at", "desc")->get();
        } else {
            //Pacientes con citas (Obtener los ultimos 10)
            $patients = $query->orderBy("created_at", "desc")->limit(10)->get();
        }
        
        foreach ($patients as $patient) {
            //Ultima cita del paciente
            $lastAppointment = Appointment::with('professional')->where("patient_id", $patient->id)->orderBy("date", "desc")->first();
            $patient->lastAppointment = $lastAppointment;

            if ($lastAppointment) {
                $precio = Precio::where("id", $lastAppointment->type)->first();

                if ($precio) {
                    $precio_clasificacion = DB::table("precios_clasificacion")
                        ->where("id", $precio->IdClasificacion)
                        ->first();

                    $patient->servicio = $precio_clasificacion->descripcion ?? "Sin servicio.";
                } else {
                    $patient->servicio = "Sin servicio.";
                }

                $patient->profesional = $lastAppointment->professional->name ?? "Sin profesional";
            } else {
                $patient->servicio = "Sin servicio.";
                $patient->profesional = "Sin profesional";
            }

            //Total membresias
            $patient->total_membresias = DB::table("membresias")
                ->where("patient_id", $patient->id)
                ->count();

            //Total Citas
            $patient->total_citas = DB::table("appointments")
                ->where("patient_id", $patient->id)
                ->count();

            //Total Citas Reprogramadas
            $patient->total_citas_reprogramadas = DB::table("appointments")
                ->where("patient_id", $patient->id)
                ->where("status", "4")
                ->count();
            
            //Determinar tipo de paciente, si tiene 0 o 1 cita el tipo es Nuevo, si tiene mas de una cita, el tipo es continuo.
            $patient->tipo_paciente = $patient->total_citas <= 1 ? "Nuevo" : "Continuo";

            //Obtener seguimientos del paciente ()
            $seguimientos = SeguimientoCRM::where("patient_id", $patient->id)->get();
            $patient->seguimientos = $seguimientos;

            $ultimaRespuesta = SeguimientoCRM::where("patient_id", $patient->id)->orderBy("fecha", "desc")->first();
            $patient->ultimaRespuesta = $ultimaRespuesta;

            //Si estado de la ultima respuesta es "Interesado" entonces el paciente esta en estado "Activo", si es "No Responde" o "Fx. Economico" estado es pausa, si no es ninguno de los anteriores es perdido.
            if($ultimaRespuesta){
                if($ultimaRespuesta->respuesta == "Interesado") {
                    $patient->estado = "Activo";
                } elseif($ultimaRespuesta->respuesta == "No Responde" || $ultimaRespuesta->respuesta == "Fx. Economico") {
                    $patient->estado = "Pausa";
                } else {
                    $patient->estado = "Perdido";
                }
            } else {
                $patient->estado = "Activo";
            }
        }

        return response()->json($patients);
    }

    public function store(Request $request)
    {
        //Validar.
        $request->validate([
            "patient_id" => "required|exists:patients,id",
            "respuesta" => "nullable|string",
            "canal" => "nullable|string",
            "proxima_accion" => "nullable|string",
            "comentarios" => "nullable|string",
            "numero_seguimiento" => "required|integer",
            "fecha" => "nullable|date"
        ]);

        $seguimiento = SeguimientoCRM::create([
            "patient_id" => $request->patient_id,
            "respuesta" => $request->respuesta,
            "canal" => $request->canal,
            "proxima_accion" => $request->proxima_accion,
            "comentarios" => $request->comentarios,
            "numero_seguimiento" => $request->numero_seguimiento,
            "fecha" => $request->fecha
        ]);

        return response()->json([
            "success" => true,
            "message" => "Seguimiento creado exitosamente",
            "seguimiento" => $seguimiento
        ]);
    }

    public function show($patient_id)
    {
        $seguimientos = SeguimientoCRM::where("patient_id", $patient_id)->orderBy("numero_seguimiento", "asc")->get();
        
        return response()->json($seguimientos);
    }

    public function update(Request $request, $id)
    {
        //Validar.
        $request->validate([
            "patient_id" => "required|exists:patients,id",
            "respuesta" => "nullable|string",
            "canal" => "nullable|string",
            "proxima_accion" => "nullable|string",
            "comentarios" => "nullable|string",
            "numero_seguimiento" => "required|integer",
            "fecha" => "nullable|date"
        ]);

        $seguimiento = SeguimientoCRM::where("id", $id)->first();
        $seguimiento->patient_id = $request->patient_id;
        $seguimiento->respuesta = $request->respuesta;
        $seguimiento->canal = $request->canal;
        $seguimiento->proxima_accion = $request->proxima_accion;
        $seguimiento->comentarios = $request->comentarios;
        $seguimiento->numero_seguimiento = $request->numero_seguimiento;
        $seguimiento->fecha = $request->fecha;
        $seguimiento->save();

        return response()->json([
            "success" => true,
            "message" => "Seguimiento actualizado exitosamente",
            "seguimiento" => $seguimiento
        ]);
    }

    public function destroy($id)
    {
        $seguimiento = SeguimientoCRM::where("id", $id)->first();
        $seguimiento->delete();

        return response()->json([
            "success" => true,
            "message" => "Seguimiento eliminado exitosamente"
        ]);
    }

}
