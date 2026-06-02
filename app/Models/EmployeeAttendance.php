<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class EmployeeAttendance extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'professional_id',
        'attendance_date',
        'check_in',
        'check_out',
        'worked_hours',
        'late_minutes',
        'status',
        'notes'
    ];

    protected $casts = [
        'attendance_date' => 'date',
        'check_in' => 'datetime',
        'check_out' => 'datetime',
        'worked_hours' => 'float',
    ];

    /*
    |--------------------------------------------------------------------------
    | RELACIONES
    |--------------------------------------------------------------------------
    */

    // Relación con usuario logístico
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relación con profesional
    public function professional()
    {
        return $this->belongsTo(Professional::class);
    }

    /*
    |--------------------------------------------------------------------------
    | HELPERS
    |--------------------------------------------------------------------------
    */

    // Obtener nombre del empleado (usuario o profesional)
    public function getEmployeeNameAttribute()
    {
        if ($this->professional) {
            return $this->professional->name . ' ' . $this->professional->lastname;
        }

        if ($this->user) {
            return $this->user->name;
        }

        return 'Sin empleado';
    }

    // Verifica si tiene check-in
    public function hasCheckIn()
    {
        return !is_null($this->check_in);
    }

    // Verifica si tiene check-out
    public function hasCheckOut()
    {
        return !is_null($this->check_out);
    }

    // Calcular horas trabajadas automáticamente
    public function calculateWorkedHours()
    {
        if ($this->check_in && $this->check_out) {

            $checkIn = Carbon::parse($this->check_in);
            $checkOut = Carbon::parse($this->check_out);

            $minutes = $checkIn->diffInMinutes($checkOut);

            $this->worked_hours = round($minutes / 60, 2);

            return $this->worked_hours;
        }

        return 0;
    }

    // Calcular minutos de tardanza
    public function calculateLateMinutes($expectedHour = '08:00:00')
    {
        if (!$this->check_in) {
            return 0;
        }

        $expected = Carbon::parse(
            $this->attendance_date->format('Y-m-d') . ' ' . $expectedHour
        );

        $checkIn = Carbon::parse($this->check_in);

        if ($checkIn->greaterThan($expected)) {

            $this->late_minutes = $expected->diffInMinutes($checkIn);

            return $this->late_minutes;
        }

        $this->late_minutes = 0;

        return 0;
    }

    // Detectar estado automático
    public function detectStatus()
    {
        if (!$this->check_in) {

            $this->status = 'Ausente';

            return $this->status;
        }

        if ($this->late_minutes > 0) {

            $this->status = 'Tardanza';

            return $this->status;
        }

        $this->status = 'Presente';

        return $this->status;
    }
}
// End of file EmployeeAttendance.php .
//..
