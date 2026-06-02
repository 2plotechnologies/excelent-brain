<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use App\Models\Schedule;
use App\Models\Professional;
use Illuminate\Support\Carbon;
use App\Models\Patient;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Stmt\TryCatch;
use stdClass;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
    }

    public function getschedules($id){   
        
        $time = date('H:i:s', time());
        $date = date('Y-m-d');

        $appointment = Appointment::where('professional_id', $id)
            ->where('appointments.date', '>=', date('Y-m-d'))
						->where('appointments.status', '<>', 6) //limbo
						->where('appointments.status', '<>', 4)
            ->with('schedule')
            ->get();
        
				$schedules = Schedule::where('professional_id', $id)
				->orderBy('check_time', 'asc')
            ->with('appointments')
            ->get();
				
        // ->with(['schedule' => function ($q1) { $q1->where('schedules.check_time', '>', date('H:i:s', time())); }])
        // return $appointment; 
        // return $appointment;
        return response()->json([
            'schedulesInvalid' => $appointment,
            'schedules' => $schedules
        ]);
    }
    public function horarioOcupado($id, $fecha){
      $appointment = Appointment::where('professional_id', $id)
			->whereDate('appointments.date', '=', $fecha)
			->where('appointments.status', '<>', 6) // limbo
			->where('appointments.status', '<>', 4)
			->where('appointments.status', '<>', 3)
			->with('schedule')
			->get();
        
			$schedules = Schedule::where('professional_id', $id)
            ->where(function($query) use ($fecha) {
                $query->whereNull('date')
                      ->orWhereDate('date', $fecha);
            })
			->orderBy('check_time', 'asc')
			->get();
            
            $resolved = collect();
            $grouped = $schedules->groupBy(function($item) {
                return $item->check_time . '-' . $item->idSede;
            });
            
            foreach ($grouped as $group) {
                $specific = $group->firstWhere('date', '!=', null);
                $finalSchedule = $specific ? $specific : $group->first();
                if ($finalSchedule->active == 1) {
                    $resolved->push($finalSchedule);
                }
            }
        
			return response()->json([
				'invalidos' => $appointment,
				'solos' => $resolved->values(),
			]);
    }
		public function horarioLibre($id, $fecha){
			$dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
			$carbonFecha = Carbon::parse(	$fecha);
			$indice = $carbonFecha->dayOfWeek; // Retorna 0=Domingo, 1=Lunes...
			$dia = $dias[$indice];

			//Lista el día y el id de profesional, luego compara con appointments y saca los que NO estan en appointments
			$schedules = Schedule::where('day', $dia)
			->where('professional_id', $id)
            ->where(function($query) use ($fecha) {
                $query->whereNull('date')
                      ->orWhereDate('date', $fecha);
            })
			->whereNotExists(function ($query) use ($fecha) {
				$query->select(DB::raw(1)) //lo mismo que select *
				->from('appointments')
				->whereColumn('appointments.professional_id', 'schedules.professional_id')
				->whereDate('appointments.date', $fecha)
				->whereColumn('appointments.schedule_id', 'schedules.id')
				->whereIn('appointments.status', [1,2,5]);
			})
			->get();
            
            $resolved = collect();
            $grouped = $schedules->groupBy(function($item) {
                return $item->check_time . '-' . $item->idSede;
            });
            
            foreach ($grouped as $group) {
                $specific = $group->firstWhere('date', '!=', null);
                $finalSchedule = $specific ? $specific : $group->first();
                if ($finalSchedule->active == 1) {
                    $resolved->push($finalSchedule);
                }
            }

			return $resolved->values();
		}
    public function horarioCuadernoOcupado($fecha, $dia, Request $request){
			$idSede = $request->query('idSede', null);

        $appointmentQuery = Appointment::whereDate('appointments.date', '=', $fecha)
        ->where('appointments.status', '<>', 6) //limbo
        ->where('appointments.status', '<>', 4)
        ->where('appointments.status', '<>', 3)
        ->with('schedule')
        ->with(['patient', 'patient.ultimoSemaforo'])
        ->with('payment')
        ->with('professional')
        ->with('membresia')
        ->with('precio');

        if ($idSede) {
            $appointmentQuery->where('appointments.idSede', $idSede);
        }

        $appointment = $appointmentQuery->get();
        //return $appointment; die();
        
        foreach ($appointment as $cita) {
            $direccion = DB::table('addresses')->where('patient_id', '=', $cita->patient_id)->get();
            if ( count($direccion)>0 )
                $cita->patient->address= $direccion[0];
            else
             $cita->patient->address= [];

            //$cita->address = $direccion[0];
            
            $relacion = DB::table('relatives')->where('patient_id', '=', $cita->patient_id)->get();
            if( count($relacion)>0 )
                $cita->patient->relative= $relacion[0];
            else
                $cita->patient->relative= [];

            
					//$cita->patient->semaforo = DB::table('semaforo')->where('patient_id', $cita->patient_id )->where('activo',1)->orderBy('registro', 'desc')->first();

					/* $semaforo = DB::table('semaforo')
						->where('patient_id', $cita->patient_id)
						->where('activo', 1)
						->orderBy('registro', 'desc')
						->first();

					if ($semaforo) {
							$semaforo->codigo = (int) $semaforo->codigo;
					}

					$cita->patient->semaforo = $semaforo; */
        }


       $solosQuery = Schedule::where('day', '=', $dia)
        ->where(function($query) use ($fecha) {
            $query->whereNull('date')
                  ->orWhereDate('date', $fecha);
        })
        ->whereNotNull('check_time')
        ->whereNotNull('departure_date');

        if ($idSede) {
            $solosQuery->where('idSede', $idSede);
        }

        $schedules = $solosQuery->orderBy('professional_id', 'asc')
        ->orderBy('check_time', 'asc')
        ->get();
        
        $resolved = collect();
        $grouped = $schedules->groupBy(function($item) {
            return $item->professional_id . '-' . $item->check_time . '-' . $item->idSede;
        });
        
        foreach ($grouped as $group) {
            $specific = $group->firstWhere('date', '!=', null);
            $finalSchedule = $specific ? $specific : $group->first();
            if ($finalSchedule->active == 1) {
                $resolved->push($finalSchedule);
            }
        }
        $solos = $resolved->values();

        return response()->json([
            'invalidos' => $appointment,
            'solos' => $solos,
        ]);
    }

    public function validateSchedule($check_time, $departure_date, $professional_id, $dia, $idSede = 1, $date = null, $ignore_id = null){
        $query = Schedule::where('professional_id', $professional_id)
            ->where('day', $dia)
            ->where('idSede', $idSede)
            ->where(function($q) use ($check_time, $departure_date) {
                $q->where('check_time', '<', $departure_date)
                  ->where('departure_date', '>', $check_time);
            });
            
        if ($date) {
            $query->where(function($q) use ($date) {
                $q->whereNull('date')->orWhere('date', $date);
            });
        }
        
        if ($ignore_id) {
            $query->where('id', '!=', $ignore_id);
        }
        
        $conflicts = $query->count();
        return $conflicts === 0;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $check_time = $request->get('check_time');
        $departure_date = $request->get('departure_date');
        $professional_id = $request->get('professional_id');
        $dias = $request->get('daysSelected', []);
        $date = $request->get('date', null);

        $idSede = $request->get('idSede', 1);

        if ($date && empty($dias)) {
            $carbonFecha = Carbon::parse($date);
            $diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            $dias = [$diasSemana[$carbonFecha->dayOfWeek]];
        }

        $res = 'No Success';

        foreach ($dias as $dia)
        {
            if($this->validateSchedule($check_time, $departure_date, $professional_id, $dia, $idSede, $date)){
                Schedule::create([
                    'check_time' => $check_time,
                    'departure_date' => $departure_date,
                    'day' => $dia,
                    'date' => $date,
                    'active' => 1,
                    'professional_id' => $professional_id,
                    'idSede' => $idSede
                ]);

                $res = 'Exito';
            }else{
                $res = 'No Success';
            }

        }

        return response()->json([
            'mensaje' => $res
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $schedules = Schedule::where('professional_id', $id)->orderBy('check_time',)->get();
        return response()->json($schedules);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $scheduleToUpdate = Schedule::find($id);
        if (!$scheduleToUpdate) {
            return response()->json(['mensaje' => 'failed', 'error' => 'Not found'], 404);
        }
        
        $check_time = $request->get('check_time');
        $departure_date = $request->get('departure_date');
        $date = $request->get('date');
        
        $dias = $request->get('daysSelected', []);
        $day = null;
        if (!empty($dias)) {
            $day = $dias[0];
        } elseif ($date) {
            $carbonFecha = Carbon::parse($date);
            $diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            $day = $diasSemana[$carbonFecha->dayOfWeek];
        } else {
            $day = $request->get('daySelected') ?? $scheduleToUpdate->day; // Fallback
        }
        
        $idSede = $request->get('idSede', $scheduleToUpdate->idSede);

        if($this->validateSchedule($check_time, $departure_date, $scheduleToUpdate->professional_id, $day, $idSede, $date, $id)){
            Schedule::where('id',$id)->update([
                'check_time' => $check_time,
                'departure_date' => $departure_date,
                'day' => $day,
                'date' => $date,
                'idSede' => $idSede
            ]);

            Appointment::where('schedule_id', $id)->update([
                'hora_inicio' => $check_time
            ]);

            return response()->json([
                'mensaje' => 'success'
            ]);
        }else{
            return response()->json([
                'mensaje' => 'failed'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Schedule::where('id', $id)->delete();
        return response()->json([
            'mensaje'=>'Profesional eliminado'
        ]);
    }

    public function getProfesionalSchedules($id){
        Schedule::where('professional_id', $id)->get();
        return response()->json([
            'mensaje' => 'Horarios de prof'
        ]);
    }

    public function getAllSchedules($id)
    {
        $schedules = Schedule::where('professional_id', $id)->orderBy('check_time', 'asc')->get();
        return response()->json($schedules);
    }

    public function toggleActive($id)
    {
        $schedule = Schedule::find($id);
        if ($schedule) {
            $schedule->active = !$schedule->active;
            $schedule->save();
            return response()->json(['mensaje' => 'success', 'active' => $schedule->active]);
        }
        return response()->json(['mensaje' => 'failed'], 404);
    }

    public function createException(Request $request)
    {
        $base_id = $request->get('schedule_id');
        $date = $request->get('date');
        
        $baseSchedule = Schedule::find($base_id);
        if (!$baseSchedule) {
            return response()->json(['mensaje' => 'failed', 'error' => 'Base schedule not found'], 404);
        }

        // Check if exception already exists
        $existing = Schedule::where('professional_id', $baseSchedule->professional_id)
            ->where('idSede', $baseSchedule->idSede)
            ->where('check_time', $baseSchedule->check_time)
            ->where('date', $date)
            ->first();

        if ($existing) {
            // Toggle it
            $existing->active = !$existing->active;
            $existing->save();
            return response()->json(['mensaje' => 'success', 'active' => $existing->active]);
        }

        // Create new exception
        $exception = Schedule::create([
            'check_time' => $baseSchedule->check_time,
            'departure_date' => $baseSchedule->departure_date,
            'day' => $baseSchedule->day,
            'date' => $date,
            'active' => !$baseSchedule->active,
            'professional_id' => $baseSchedule->professional_id,
            'idSede' => $baseSchedule->idSede
        ]);

        return response()->json(['mensaje' => 'success', 'active' => $exception->active]);
    }
}
