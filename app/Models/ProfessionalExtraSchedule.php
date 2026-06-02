<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class ProfessionalExtraSchedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'professional_id',
        'schedule_date',
        'start_time',
        'end_time',
        'total_hours',
        'status',
        'notes'
    ];

    protected $casts = [
        'schedule_date' => 'date',
        'total_hours' => 'float',
    ];

    /*
    |--------------------------------------------------------------------------
    | RELACIONES
    |--------------------------------------------------------------------------
    */

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

    // Calcular horas automáticamente
    public function calculateTotalHours()
    {
        if (!$this->start_time || !$this->end_time) {
            return 0;
        }

        $start = Carbon::parse($this->start_time);
        $end = Carbon::parse($this->end_time);

        $minutes = $start->diffInMinutes($end);

        $this->total_hours = round($minutes / 60, 2);

        return $this->total_hours;
    }

    // Verificar si ya terminó el horario
    public function isCompleted()
    {
        $endDateTime = Carbon::parse(
            $this->schedule_date->format('Y-m-d') . ' ' . $this->end_time
        );

        return now()->greaterThan($endDateTime);
    }

    // Actualizar estado automáticamente
    public function updateStatusAutomatically()
    {
        if ($this->status === 'Cancelado') {
            return $this->status;
        }

        if ($this->isCompleted()) {

            $this->status = 'Completado';

            return $this->status;
        }

        $this->status = 'Pendiente';

        return $this->status;
    }

    // Obtener rango horario bonito
    public function getScheduleRangeAttribute()
    {
        return Carbon::parse($this->start_time)->format('h:i A')
            . ' - ' .
            Carbon::parse($this->end_time)->format('h:i A');
    }

    // Obtener fecha formateada
    public function getFormattedDateAttribute()
    {
        return $this->schedule_date->format('d/m/Y');
    }
}
