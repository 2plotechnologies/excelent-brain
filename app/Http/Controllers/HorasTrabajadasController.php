<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Patient;
use App\Models\Schedule;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class HorasTrabajadasController extends Controller
{
    public function getReporte(Request $request)
    {
        $request->validate([
            'professional_id' => 'required|exists:professionals,id',
            'month' => 'required|date_format:Y-m', // e.g. "2026-05"
        ]);

        $prof_id = $request->professional_id;
        $dateObj = Carbon::createFromFormat('Y-m', $request->month);
        $startOfMonth = $dateObj->copy()->startOfMonth();
        $endOfMonth = $dateObj->copy()->endOfMonth();

        // Obtener todos los horarios fijos del profesional
        $schedules = Schedule::where('professional_id', $prof_id)->get();
        $diasSemanaStr = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

        $horasProgramadasMinutos = 0;
        
        // Calcular total de horas programadas del mes basado en los schedules
        for ($date = $startOfMonth->copy(); $date->lte($endOfMonth); $date->addDay()) {
            $diaSemana = $diasSemanaStr[$date->dayOfWeek];
            $schedulesDelDia = $schedules->filter(function($s) use ($diaSemana) {
                return strtolower($s->day) === strtolower($diaSemana);
            });
            foreach ($schedulesDelDia as $schedule) {
                if ($schedule->check_time && $schedule->departure_date) {
                    $inicio = Carbon::parse($schedule->check_time);
                    $fin = Carbon::parse($schedule->departure_date);
                    $horasProgramadasMinutos += $inicio->diffInMinutes($fin);
                }
            }
        }

        // Obtener citas trabajadas (status 1 y 2) en el mes
        $citasTrabajadas = Appointment::where('professional_id', $prof_id)
            ->whereBetween('date', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')])
            ->whereIn('status', [1, 2])
            ->get();

        $horasTrabajadasMinutos = 0;
        foreach ($citasTrabajadas as $cita) {
            if ($cita->duracion) {
                $horasTrabajadasMinutos += $cita->duracion;
            } else if ($cita->hora_inicio && $cita->hora_fin) {
                $inicio = Carbon::parse($cita->hora_inicio);
                $fin = Carbon::parse($cita->hora_fin);
                $horasTrabajadasMinutos += $inicio->diffInMinutes($fin);
            } else if ($cita->schedule_id) {
                $sch = $schedules->where('id', $cita->schedule_id)->first();
                if ($sch && $sch->check_time && $sch->departure_date) {
                    $inicio = Carbon::parse($sch->check_time);
                    $fin = Carbon::parse($sch->departure_date);
                    $horasTrabajadasMinutos += $inicio->diffInMinutes($fin);
                }
            }
        }

        // Obtener citas que son bloqueos (status 7)
        $bloqueos = Appointment::where('professional_id', $prof_id)
            ->whereBetween('date', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')])
            ->where('status', 7)
            ->with('schedule')
            ->orderBy('date', 'desc')
            ->get();

        $horasNoTrabajadasMinutos = max(0, $horasProgramadasMinutos - $horasTrabajadasMinutos);

        return response()->json([
            'horas_programadas' => round($horasProgramadasMinutos / 60, 2),
            'horas_trabajadas' => round($horasTrabajadasMinutos / 60, 2),
            'horas_no_trabajadas' => round($horasNoTrabajadasMinutos / 60, 2),
            'minutos_programados' => $horasProgramadasMinutos,
            'minutos_trabajados' => $horasTrabajadasMinutos,
            'minutos_no_trabajados' => $horasNoTrabajadasMinutos,
            'bloqueos' => $bloqueos
        ]);
    }

    public function bloquearHorario(Request $request)
    {
        $request->validate([
            'professional_id' => 'required|exists:professionals,id',
            'date' => 'required|date',
            'schedule_id' => 'nullable|exists:schedules,id',
            'motivo' => 'nullable|string'
        ]);

        // Asegurar que el paciente BLOQUEO existe
        $patient = Patient::firstOrCreate(
            ['dni' => 'BLOQUEO'],
            [
                'name' => 'Bloqueo',
                'nombres' => 'Horario',
                'email' => 'bloqueo@system.com',
                'gender' => 1,
                'phone' => '000000000'
            ]
        );

        $prof_id = $request->professional_id;
        $fecha = Carbon::parse($request->date)->format('Y-m-d');
        $motivo = $request->motivo ?? 'Bloqueo de horario';

        if ($request->has('schedule_id') && $request->schedule_id) {
            $schedule = Schedule::find($request->schedule_id);
            if (!$schedule) {
                return response()->json(['message' => 'Horario no encontrado.'], 404);
            }

            // Crear bloqueo individual
            $this->crearCitaBloqueo($prof_id, $fecha, $schedule, $patient->id, $motivo);
            
            return response()->json(['message' => 'Horario bloqueado exitosamente.']);
        } else {
            // Bloquear todo el día: iterar sobre todos los schedules del día para ese profesional
            $diasSemanaStr = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            $diaSemana = $diasSemanaStr[Carbon::parse($fecha)->dayOfWeek];
            
            $schedules = Schedule::where('professional_id', $prof_id)
                ->where(DB::raw('LOWER(day)'), strtolower($diaSemana))
                ->get();

            if ($schedules->isEmpty()) {
                return response()->json(['message' => 'El profesional no tiene horarios programados para este día.'], 404);
            }

            foreach ($schedules as $schedule) {
                // Verificar si ya está bloqueado
                $existe = Appointment::where('professional_id', $prof_id)
                    ->where('date', $fecha)
                    ->where('schedule_id', $schedule->id)
                    ->where('status', 7)
                    ->exists();

                if (!$existe) {
                    $this->crearCitaBloqueo($prof_id, $fecha, $schedule, $patient->id, $motivo);
                }
            }

            return response()->json(['message' => 'Día completo bloqueado exitosamente.']);
        }
    }

    public function desbloquearHorario($id)
    {
        $appointment = Appointment::findOrFail($id);
        if ($appointment->status == 7) {
            $appointment->delete();
            return response()->json(['message' => 'Bloqueo eliminado exitosamente.']);
        }
        return response()->json(['message' => 'No es un bloqueo válido.'], 400);
    }

    private function crearCitaBloqueo($prof_id, $fecha, $schedule, $patient_id, $motivo)
    {
        $inicio = $schedule->check_time ? Carbon::parse($schedule->check_time) : null;
        $fin = $schedule->departure_date ? Carbon::parse($schedule->departure_date) : null;
        $duracion = ($inicio && $fin) ? $inicio->diffInMinutes($fin) : null;

        Appointment::create([
            'professional_id' => $prof_id,
            'date' => $fecha,
            'schedule_id' => $schedule->id,
            'patient_id' => $patient_id,
            'status' => 7, // 7 = Bloqueo
            'active_slot' => 1,
            'type' => 1, // fallback
            'patient_condition' => 1, // fallback
            'hora_inicio' => $schedule->check_time,
            'hora_fin' => $schedule->departure_date,
            'duracion' => $duracion,
            'recomendation' => $motivo
        ]);
    }
}
