<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeSalaryConfig extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'professional_id',
        'base_salary',
        'discount_percentage',
        'afp_percentage',
        'late_discount_amount',
        'absence_discount_amount',
    ];

    protected $casts = [
        'base_salary' => 'float',
        'discount_percentage' => 'float',
        'afp_percentage' => 'float',
        'late_discount_amount' => 'float',
        'absence_discount_amount' => 'float',
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

    // Obtener nombre del empleado
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

    // Calcular AFP
    public function calculateAFP($amount = null)
    {
        $salary = $amount ?? $this->base_salary;

        if ($this->afp_percentage <= 0) {
            return 0;
        }

        return round(
            ($salary * $this->afp_percentage) / 100,
            2
        );
    }

    // Calcular descuento por tardanza
    public function calculateLateDiscount($lateCount = 1)
    {
        return round(
            $this->late_discount_amount * $lateCount,
            2
        );
    }

    // Calcular descuento por ausencia
    public function calculateAbsenceDiscount($absenceCount = 1)
    {
        return round(
            $this->absence_discount_amount * $absenceCount,
            2
        );
    }

    // Aplicar descuento porcentual general
    public function calculateGeneralDiscount($amount = null)
    {
        $salary = $amount ?? $this->base_salary;

        if ($this->discount_percentage <= 0) {
            return 0;
        }

        return round(
            ($salary * $this->discount_percentage) / 100,
            2
        );
    }

    // Obtener salario después de descuentos generales
    public function getNetBaseSalaryAttribute()
    {
        $discount = $this->calculateGeneralDiscount();

        return round(
            $this->base_salary - $discount,
            2
        );
    }
}
