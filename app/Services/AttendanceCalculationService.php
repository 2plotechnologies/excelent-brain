<?php

namespace App\Services;

use App\Models\EmployeeAttendance;
use Carbon\Carbon;

class AttendanceCalculationService
{
    /*
    |--------------------------------------------------------------------------
    | CALCULAR HORAS TRABAJADAS.
    |--------------------------------------------------------------------------
    */

    public function calculateWorkedHours(
        $checkIn,
        $checkOut
    ) {
        if (!$checkIn || !$checkOut) {
            return 0;
        }

        $checkInCarbon = Carbon::parse($checkIn);

        $checkOutCarbon = Carbon::parse($checkOut);

        $minutes = $checkInCarbon
            ->diffInMinutes($checkOutCarbon);

        return round($minutes / 60, 2);
    }

    /*
    |--------------------------------------------------------------------------
    | CALCULAR MINUTOS DE TARDANZA.
    |--------------------------------------------------------------------------
    */

    public function calculateLateMinutes(
        $attendanceDate,
        $checkIn,
        $expectedHour = '08:00:00'
    ) {
        if (!$checkIn) {
            return 0;
        }

        $dateStr = Carbon::parse($attendanceDate)->format('Y-m-d');
        $expectedDateTime = Carbon::parse(
            $dateStr . ' ' . $expectedHour
        );

        $checkInCarbon = Carbon::parse($checkIn);

        if (
            $checkInCarbon->greaterThan($expectedDateTime)
        ) {

            return $expectedDateTime
                ->diffInMinutes($checkInCarbon);
        }

        return 0;
    }

    /*
    |--------------------------------------------------------------------------
    | DETECTAR ESTADO AUTOMÁTICO.
    |--------------------------------------------------------------------------
    */

    public function detectStatus(
        $checkIn,
        $lateMinutes
    ) {
        if (!$checkIn) {
            return 'Ausente';
        }

        if ($lateMinutes > 0) {
            return 'Tardanza';
        }

        return 'Presente';
    }

    /*
    |--------------------------------------------------------------------------
    | CALCULAR TODO.
    |--------------------------------------------------------------------------
    */

    public function processAttendance(
        EmployeeAttendance $attendance,
        $expectedHour = '08:00:00'
    ) {

        /*
        |--------------------------------------------------------------------------
        | HORAS.
        |--------------------------------------------------------------------------
        */

        $attendance->worked_hours =
            $this->calculateWorkedHours(
                $attendance->check_in,
                $attendance->check_out
            );

        /*
        |--------------------------------------------------------------------------
        | TARDANZA.
        |--------------------------------------------------------------------------
        */

        $attendance->late_minutes =
            $this->calculateLateMinutes(
                $attendance->attendance_date,
                $attendance->check_in,
                $expectedHour
            );

        /*
        |--------------------------------------------------------------------------
        | ESTADO.
        |--------------------------------------------------------------------------
        */

        $attendance->status =
            $this->detectStatus(
                $attendance->check_in,
                $attendance->late_minutes
            );

        return $attendance;
    }

    /*
    |--------------------------------------------------------------------------
    | VERIFICAR SI ES TARDANZA.
    |--------------------------------------------------------------------------
    */

    public function isLate($lateMinutes)
    {
        return $lateMinutes > 0;
    }

    /*
    |--------------------------------------------------------------------------
    | VERIFICAR SI ES AUSENTE.
    |--------------------------------------------------------------------------
    */

    public function isAbsent($checkIn)
    {
        return is_null($checkIn);
    }

    /*
    |--------------------------------------------------------------------------
    | FORMATEAR HORAS.
    |--------------------------------------------------------------------------
    */

    public function formatWorkedHours($hours)
    {
        return number_format(
            $hours,
            2
        ) . ' hrs';
    }

    /*
    |--------------------------------------------------------------------------
    | CALCULAR PORCENTAJE DE PUNTUALIDAD.
    |--------------------------------------------------------------------------
    */

    public function calculatePunctualityPercentage(
        $totalAttendances,
        $lateAttendances
    ) {
        if ($totalAttendances <= 0) {
            return 100;
        }

        $punctualAttendances =
            $totalAttendances - $lateAttendances;

        return round(
            ($punctualAttendances / $totalAttendances) * 100,
            2
        );
    }

    /*
    |--------------------------------------------------------------------------
    | CALCULAR HORAS TOTALES.
    |--------------------------------------------------------------------------
    */

    public function calculateTotalWorkedHours(
        $attendances
    ) {
        return round(
            $attendances->sum('worked_hours'),
            2
        );
    }

    /*
    |--------------------------------------------------------------------------
    | CONTAR TARDANZAS.
    |--------------------------------------------------------------------------
    */

    public function countLateAttendances(
        $attendances
    ) {
        return $attendances
            ->where('status', 'Tardanza')
            ->count();
    }

    /*
    |--------------------------------------------------------------------------
    | CONTAR AUSENCIAS
    |--------------------------------------------------------------------------
    */

    public function countAbsences(
        $attendances
    ) {
        return $attendances
            ->where('status', 'Ausente')
            ->count();
    }
}
