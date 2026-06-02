<?php

namespace App\Http\Controllers;

use App\Models\EmployeeAttendance;
use App\Services\AttendanceCalculationService;
use Illuminate\Http\Request;
use Carbon\Carbon;


class EmployeeAttendanceController extends Controller
{
    protected $attendanceService;

    public function __construct(
        AttendanceCalculationService $attendanceService
    )
    {
        $this->attendanceService = $attendanceService;
    }

    /*
    |--------------------------------------------------------------------------
    | LISTAR ASISTENCIAS.
    |--------------------------------------------------------------------------
    */

    public function index(Request $request)
    {
        $query = EmployeeAttendance::with([
            'user',
            'professional'
        ]);

        // Filtro por fechas
        if ($request->filled('start_date')) {

            $query->whereDate(
                'attendance_date',
                '>=',
                $request->start_date
            );
        }

        if ($request->filled('end_date')) {

            $query->whereDate(
                'attendance_date',
                '<=',
                $request->end_date
            );
        }

        // Filtro por profesional
        if ($request->filled('professional_id')) {

            $query->where(
                'professional_id',
                $request->professional_id
            );
        }

        // Filtro por usuario
        if ($request->filled('user_id')) {

            $query->where(
                'user_id',
                $request->user_id
            );
        }

        // Filtro por estado
        if ($request->filled('status')) {

            $query->where(
                'status',
                $request->status
            );
        }

        $attendances = $query
            ->orderBy('attendance_date', 'desc')
            ->paginate(20);

        return response()->json([
            'success' => true,
            'data' => $attendances
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | REGISTRAR ASISTENCIA.
    |--------------------------------------------------------------------------
    */

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'nullable|exists:users,id',
            'professional_id' => 'nullable|exists:professionals,id',

            'attendance_date' => 'required|date',

            'check_in' => 'nullable|date',
            'check_out' => 'nullable|date',

            'notes' => 'nullable|string'
        ]);

        // Debe existir usuario o profesional
        if (
            !$request->user_id &&
            !$request->professional_id
        ) {
            return response()->json([
                'success' => false,
                'message' => 'Debe seleccionar un empleado.'
            ], 422);
        }

        // Evitar duplicados
        $exists = EmployeeAttendance::whereDate(
                'attendance_date',
                $request->attendance_date
            )
            ->where(function ($query) use ($request) {

                if ($request->user_id) {
                    $query->where(
                        'user_id',
                        $request->user_id
                    );
                }

                if ($request->professional_id) {
                    $query->orWhere(
                        'professional_id',
                        $request->professional_id
                    );
                }
            })
            ->exists();

        if ($exists) {

            return response()->json([
                'success' => false,
                'message' => 'Ya existe asistencia registrada para este empleado en esta fecha.'
            ], 422);
        }

        $attendance = new EmployeeAttendance();

        $attendance->user_id = $request->user_id;
        $attendance->professional_id = $request->professional_id;

        $attendance->attendance_date = $request->attendance_date;

        $attendance->check_in = $request->check_in;
        $attendance->check_out = $request->check_out;

        $attendance->notes = $request->notes;

        /*
        |--------------------------------------------------------------------------
        | CÁLCULOS AUTOMÁTICOS.
        |--------------------------------------------------------------------------
        */

        $this->attendanceService->processAttendance($attendance);

        $attendance->save();

        return response()->json([
            'success' => true,
            'message' => 'Asistencia registrada correctamente.',
            'data' => $attendance->load([
                'user',
                'professional'
            ])
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | VER DETALLE.
    |--------------------------------------------------------------------------
    */

    public function show($id)
    {
        $attendance = EmployeeAttendance::with([
            'user',
            'professional'
        ])->find($id);

        if (!$attendance) {

            return response()->json([
                'success' => false,
                'message' => 'Asistencia no encontrada.'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $attendance
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | ACTUALIZAR ASISTENCIA.
    |--------------------------------------------------------------------------
    */

    public function update(Request $request, $id)
    {
        $attendance = EmployeeAttendance::find($id);

        if (!$attendance) {

            return response()->json([
                'success' => false,
                'message' => 'Asistencia no encontrada.'
            ], 404);
        }

        $request->validate([
            'check_in' => 'nullable|date',
            'check_out' => 'nullable|date',

            'status' => 'nullable|in:Presente,Tardanza,Ausente,Descanso,Permiso',

            'notes' => 'nullable|string'
        ]);

        $attendance->check_in = $request->check_in;
        $attendance->check_out = $request->check_out;

        $attendance->notes = $request->notes;

        /*
        |--------------------------------------------------------------------------
        | RECALCULAR.
        |--------------------------------------------------------------------------
        */

        $this->attendanceService->processAttendance($attendance);

        // Si envían estado manual usar ese
        if ($request->filled('status')) {

            $attendance->status = $request->status;

        } else {

            $attendance->detectStatus();
        }

        $attendance->save();

        return response()->json([
            'success' => true,
            'message' => 'Asistencia actualizada correctamente.',
            'data' => $attendance->load([
                'user',
                'professional'
            ])
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | ELIMINAR.
    |--------------------------------------------------------------------------
    */

    public function destroy($id)
    {
        $attendance = EmployeeAttendance::find($id);

        if (!$attendance) {

            return response()->json([
                'success' => false,
                'message' => 'Asistencia no encontrada.'
            ], 404);
        }

        $attendance->delete();

        return response()->json([
            'success' => true,
            'message' => 'Asistencia eliminada correctamente.'
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | CHECK-IN RÁPIDO.
    |--------------------------------------------------------------------------
    */

    public function quickCheckIn(Request $request)
    {
        $request->validate([
            'user_id' => 'nullable|exists:users,id',
            'professional_id' => 'nullable|exists:professionals,id',
        ]);

        $today = now()->format('Y-m-d');

        $attendance = EmployeeAttendance::firstOrNew([
            'user_id' => $request->user_id,
            'professional_id' => $request->professional_id,
            'attendance_date' => $today
        ]);

        $attendance->check_in = now();

        $attendance->calculateLateMinutes();

        $attendance->detectStatus();

        $attendance->save();

        return response()->json([
            'success' => true,
            'message' => 'Entrada registrada correctamente.',
            'data' => $attendance
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | CHECK-OUT RÁPIDO.
    |--------------------------------------------------------------------------
    */

    public function quickCheckOut(Request $request)
    {
        $request->validate([
            'attendance_id' => 'required|exists:employee_attendances,id'
        ]);

        $attendance = EmployeeAttendance::find(
            $request->attendance_id
        );

        $attendance->check_out = now();

        $attendance->calculateWorkedHours();

        $attendance->save();

        return response()->json([
            'success' => true,
            'message' => 'Salida registrada correctamente.',
            'data' => $attendance
        ]);
    }
}
