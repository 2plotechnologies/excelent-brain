<?php

namespace App\Services;

use App\Models\EmployeeAttendance;
use App\Models\EmployeePayroll;
use App\Models\EmployeeSalaryConfig;
use App\Models\ProfessionalExtraSchedule;
use Carbon\Carbon;

class PayrollCalculationService
{
    /*
    |--------------------------------------------------------------------------
    | GENERAR PLANILLA COMPLETA.
    |--------------------------------------------------------------------------
    */

    public function generatePayroll(
        $month,
        $year,
        $userId = null,
        $professionalId = null,
        $extraData = []
    ) {

        /*
        |--------------------------------------------------------------------------
        | CONFIGURACIÓN SALARIAL.
        |--------------------------------------------------------------------------
        */

        $salaryConfig = EmployeeSalaryConfig::query()
            ->when($userId, function ($query) use ($userId) {

                $query->where('user_id', $userId);
            })
            ->when($professionalId, function ($query) use ($professionalId) {

                $query->orWhere(
                    'professional_id',
                    $professionalId
                );
            })
            ->first();

        if (!$salaryConfig) {

            throw new \Exception(
                'No existe configuración salarial.'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | VALIDAR SI YA EXISTE.
        |--------------------------------------------------------------------------
        */

        $exists = EmployeePayroll::query()
            ->where('payroll_month', $month)
            ->where('payroll_year', $year)

            ->when($userId, function ($query) use ($userId) {

                $query->where('user_id', $userId);
            })

            ->when($professionalId, function ($query) use ($professionalId) {

                $query->orWhere(
                    'professional_id',
                    $professionalId
                );
            })

            ->exists();

        if ($exists) {

            throw new \Exception(
                'La planilla ya existe.'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | RANGO DE FECHAS.
        |--------------------------------------------------------------------------
        */

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
        | ASISTENCIAS.
        |--------------------------------------------------------------------------
        */

        $attendanceQuery = EmployeeAttendance::query()
            ->whereBetween(
                'attendance_date',
                [$startDate, $endDate]
            );

        if ($userId) {

            $attendanceQuery->where(
                'user_id',
                $userId
            );
        }

        if ($professionalId) {

            $attendanceQuery->where(
                'professional_id',
                $professionalId
            );
        }

        $attendances = $attendanceQuery->get();

        /*
        |--------------------------------------------------------------------------
        | MÉTRICAS.
        |--------------------------------------------------------------------------
        */

        $workedDays = $attendances
            ->whereIn('status', [
                'Presente',
                'Tardanza'
            ])
            ->count();

        $lateCount = $attendances
            ->where('status', 'Tardanza')
            ->count();

        $absenceCount = $attendances
            ->where('status', 'Ausente')
            ->count();

        /*
        |--------------------------------------------------------------------------
        | HORAS EXTRA.
        |--------------------------------------------------------------------------
        */

        $extraHours = 0;

        if ($professionalId) {

            $extraHours = ProfessionalExtraSchedule::query()
                ->where(
                    'professional_id',
                    $professionalId
                )
                ->whereBetween(
                    'schedule_date',
                    [$startDate, $endDate]
                )
                ->where(
                    'status',
                    'Completado'
                )
                ->sum('total_hours');
        }

        /*
        |--------------------------------------------------------------------------
        | CREAR PLANILLA.
        |--------------------------------------------------------------------------
        */

        $payroll = new EmployeePayroll();

        $payroll->user_id = $userId;
        $payroll->professional_id = $professionalId;

        $payroll->payroll_month = $month;
        $payroll->payroll_year = $year;

        /*
        |--------------------------------------------------------------------------
        | SUELDO BASE.
        |--------------------------------------------------------------------------
        */

        $payroll->base_salary =
            $salaryConfig->base_salary;

        /*
        |--------------------------------------------------------------------------
        | ASISTENCIAS.
        |--------------------------------------------------------------------------
        */

        $payroll->worked_days =
            $workedDays;

        $payroll->late_count =
            $lateCount;

        $payroll->absence_count =
            $absenceCount;

        /*
        |--------------------------------------------------------------------------
        | DESCUENTOS.
        |--------------------------------------------------------------------------
        */

        $payroll->late_discount =
            $salaryConfig
                ->calculateLateDiscount($lateCount);

        $payroll->absence_discount =
            $salaryConfig
                ->calculateAbsenceDiscount($absenceCount);

        /*
        |--------------------------------------------------------------------------
        | HORAS EXTRA.
        |--------------------------------------------------------------------------
        */

        $payroll->extra_hours =
            $extraHours;

        // Valor simple por hora
        $hourValue =
            $salaryConfig->base_salary / 240;

        $payroll->extra_hours_amount =
            round(
                $extraHours * $hourValue,
                2
            );

        /*
        |--------------------------------------------------------------------------
        | EXTRAS MANUALES.
        |--------------------------------------------------------------------------
        */

        $payroll->bonuses =
            $extraData['bonuses'] ?? 0;

        $payroll->conciliation =
            $extraData['conciliation'] ?? 0;

        $payroll->other_discounts =
            $extraData['other_discounts'] ?? 0;

        /*
        |--------------------------------------------------------------------------
        | AFP.
        |--------------------------------------------------------------------------
        */

        $payroll->afp_percentage =
            $salaryConfig->afp_percentage;

        $payroll->calculateAFP();

        /*
        |--------------------------------------------------------------------------
        | NETO.
        |--------------------------------------------------------------------------
        */

        $payroll->calculateNetSalary();

        /*
        |--------------------------------------------------------------------------
        | ESTADO.
        |--------------------------------------------------------------------------
        */

        $payroll->payment_status =
            'No Pagado';

        $payroll->save();

        return $payroll->load([
            'user',
            'professional'
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | RECALCULAR PLANILLA.
    |--------------------------------------------------------------------------
    */

    public function recalculatePayroll(
        EmployeePayroll $payroll
    ) {

        $payroll->calculateAFP();

        $payroll->calculateNetSalary();

        $payroll->save();

        return $payroll;
    }

    /*
    |--------------------------------------------------------------------------
    | MARCAR COMO PAGADO.
    |--------------------------------------------------------------------------
    */

    public function markAsPaid(
        EmployeePayroll $payroll
    ) {

        $payroll->payment_status =
            'Pagado';

        $payroll->paid_at = now();

        $payroll->save();

        return $payroll;
    }

    /*
    |--------------------------------------------------------------------------
    | MARCAR COMO NO PAGADO.
    |--------------------------------------------------------------------------
    */

    public function markAsUnpaid(
        EmployeePayroll $payroll
    ) {

        $payroll->payment_status =
            'No Pagado';

        $payroll->paid_at = null;

        $payroll->save();

        return $payroll;
    }

    /*
    |--------------------------------------------------------------------------
    | CALCULAR VALOR HORA.
    |--------------------------------------------------------------------------
    */

    public function calculateHourValue(
        $baseSalary,
        $monthlyHours = 240
    ) {

        if ($monthlyHours <= 0) {
            return 0;
        }

        return round(
            $baseSalary / $monthlyHours,
            2
        );
    }

    /*
    |--------------------------------------------------------------------------
    | CALCULAR HORAS EXTRA.
    |--------------------------------------------------------------------------
    */

    public function calculateExtraHoursAmount(
        $extraHours,
        $hourValue
    ) {

        return round(
            $extraHours * $hourValue,
            2
        );
    }

    /*
    |--------------------------------------------------------------------------
    | CALCULAR AFP.
    |--------------------------------------------------------------------------
    */

    public function calculateAFP(
        $baseSalary,
        $percentage
    ) {

        if ($percentage <= 0) {
            return 0;
        }

        return round(
            ($baseSalary * $percentage) / 100,
            2
        );
    }

    /*
    |--------------------------------------------------------------------------
    | CALCULAR SALARIO NETO.
    |--------------------------------------------------------------------------
    */

    public function calculateNetSalary(
        $baseSalary,
        $bonuses,
        $conciliation,
        $extraHoursAmount,
        $lateDiscount,
        $absenceDiscount,
        $afpAmount,
        $otherDiscounts
    ) {

        $grossSalary =
            $baseSalary
            + $bonuses
            + $conciliation
            + $extraHoursAmount;

        $totalDiscounts =
            $lateDiscount
            + $absenceDiscount
            + $afpAmount
            + $otherDiscounts;

        return round(
            $grossSalary - $totalDiscounts,
            2
        );
    }
}
