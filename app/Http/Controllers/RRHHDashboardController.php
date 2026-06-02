<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Professional;
use App\Models\EmployeeAttendance;
use App\Models\EmployeePayroll;
use App\Models\ProfessionalExtraSchedule;
use Carbon\Carbon;
use DB;


class RRHHDashboardController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | DASHBOARD GENERAL RRHH.
    |--------------------------------------------------------------------------
    */

    public function index(Request $request)
    {
        $month = $request->month ?? now()->month;
        $year = $request->year ?? now()->year;

        $startDate = Carbon::create(
            $year,
            $month,
            1
        )->startOfMonth();

        $endDate = Carbon::create(
            $year,
            $month,
            1
        )->endOfMonth();

        /*
        |--------------------------------------------------------------------------
        | KPIs GENERALES.
        |--------------------------------------------------------------------------
        */

        // Profesionales
        $totalProfessionals = Professional::count();

        // Empleados logísticos
        $totalEmployees = User::whereDoesntHave(
            'professional'
        )->count();

        // Total RRHH
        $totalHumanResources =
            $totalProfessionals + $totalEmployees;

        /*
        |--------------------------------------------------------------------------
        | ASISTENCIAS.
        |--------------------------------------------------------------------------
        */

        $attendances = EmployeeAttendance::whereBetween(
            'attendance_date',
            [$startDate, $endDate]
        )->get();

        $totalAttendances =
            $attendances->count();

        $presentCount =
            $attendances
                ->where('status', 'Presente')
                ->count();

        $lateCount =
            $attendances
                ->where('status', 'Tardanza')
                ->count();

        $absenceCount =
            $attendances
                ->where('status', 'Ausente')
                ->count();

        /*
        |--------------------------------------------------------------------------
        | HORAS TRABAJADAS.
        |--------------------------------------------------------------------------
        */

        $totalWorkedHours =
            round(
                $attendances->sum('worked_hours'),
                2
            );

        /*
        |--------------------------------------------------------------------------
        | HORAS EXTRA.
        |--------------------------------------------------------------------------
        */

        $extraHours =
            ProfessionalExtraSchedule::whereBetween(
                'schedule_date',
                [$startDate, $endDate]
            )
            ->where('status', 'Completado')
            ->sum('total_hours');

        /*
        |--------------------------------------------------------------------------
        | PLANILLAS.
        |--------------------------------------------------------------------------
        */

        $payrolls = EmployeePayroll::where(
                'payroll_month',
                $month
            )
            ->where(
                'payroll_year',
                $year
            )
            ->get();

        $totalPayrolls =
            $payrolls->count();

        $paidPayrolls =
            $payrolls
                ->where('payment_status', 'Pagado')
                ->count();

        $pendingPayrolls =
            $payrolls
                ->where('payment_status', 'No Pagado')
                ->count();

        /*
        |--------------------------------------------------------------------------
        | MONTOS.
        |--------------------------------------------------------------------------
        */

        $totalNetPayroll =
            round(
                $payrolls->sum('net_salary'),
                2
            );

        $totalBonuses =
            round(
                $payrolls->sum('bonuses'),
                2
            );

        $totalDiscounts =
            round(
                $payrolls->sum(function ($payroll) {

                    return
                        $payroll->late_discount
                        + $payroll->absence_discount
                        + $payroll->other_discounts
                        + $payroll->afp_amount;
                }),
                2
            );

        /*
        |--------------------------------------------------------------------------
        | PUNTUALIDAD.
        |--------------------------------------------------------------------------
        */

        $punctualityPercentage = 0;

        if ($totalAttendances > 0) {

            $punctualityPercentage = round(
                (
                    (
                        $presentCount /
                        $totalAttendances
                    ) * 100
                ),
                2
            );
        }

        /*
        |--------------------------------------------------------------------------
        | TOP PROFESIONALES POR HORAS.
        |--------------------------------------------------------------------------
        */

        $topProfessionals =
            Professional::with([
                'attendances' => function ($query)
                use ($startDate, $endDate) {

                    $query->whereBetween(
                        'attendance_date',
                        [$startDate, $endDate]
                    );
                }
            ])
            ->get()
            ->map(function ($professional) {

                return [
                    'id' => $professional->id,

                    'name' =>
                        $professional->name
                        . ' ' .
                        $professional->lastname,

                    'worked_hours' =>
                        round(
                            $professional
                                ->attendances
                                ->sum('worked_hours'),
                            2
                        )
                ];
            })
            ->sortByDesc('worked_hours')
            ->take(10)
            ->values();

        /*
        |--------------------------------------------------------------------------
        | GRÁFICO DE ASISTENCIAS POR DÍA.
        |--------------------------------------------------------------------------
        */

        $attendanceChart =
            EmployeeAttendance::select(
                DB::raw('DATE(attendance_date) as date'),
                DB::raw('COUNT(*) as total')
            )
            ->whereBetween(
                'attendance_date',
                [$startDate, $endDate]
            )
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        /*
        |--------------------------------------------------------------------------
        | RESPUESTA.
        |--------------------------------------------------------------------------
        */

        return response()->json([
            'success' => true,

            'kpis' => [

                'total_professionals' =>
                    $totalProfessionals,

                'total_employees' =>
                    $totalEmployees,

                'total_human_resources' =>
                    $totalHumanResources,

                'total_attendances' =>
                    $totalAttendances,

                'present_count' =>
                    $presentCount,

                'late_count' =>
                    $lateCount,

                'absence_count' =>
                    $absenceCount,

                'total_worked_hours' =>
                    $totalWorkedHours,

                'extra_hours' =>
                    round($extraHours, 2),

                'total_payrolls' =>
                    $totalPayrolls,

                'paid_payrolls' =>
                    $paidPayrolls,

                'pending_payrolls' =>
                    $pendingPayrolls,

                'total_net_payroll' =>
                    $totalNetPayroll,

                'total_bonuses' =>
                    $totalBonuses,

                'total_discounts' =>
                    $totalDiscounts,

                'punctuality_percentage' =>
                    $punctualityPercentage,
            ],

            'charts' => [

                'attendance_chart' =>
                    $attendanceChart,
            ],

            'top_professionals' =>
                $topProfessionals,
        ]);
    }
}
