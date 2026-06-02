<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeePayroll extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'professional_id',

        'payroll_month',
        'payroll_year',

        'base_salary',

        'worked_days',

        'late_count',
        'absence_count',

        'late_discount',
        'absence_discount',

        'extra_hours',
        'extra_hours_amount',

        'bonuses',

        'afp_percentage',
        'afp_amount',

        'other_discounts',

        'conciliation',

        'net_salary',

        'payment_status',
        'paid_at',
    ];

    protected $casts = [
        'base_salary' => 'float',

        'late_discount' => 'float',
        'absence_discount' => 'float',

        'extra_hours' => 'float',
        'extra_hours_amount' => 'float',

        'bonuses' => 'float',

        'afp_percentage' => 'float',
        'afp_amount' => 'float',

        'other_discounts' => 'float',

        'conciliation' => 'float',

        'net_salary' => 'float',

        'paid_at' => 'datetime',
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

    // Obtener periodo formateado
    public function getPeriodAttribute()
    {
        return str_pad($this->payroll_month, 2, '0', STR_PAD_LEFT)
            . '/' .
            $this->payroll_year;
    }

    // Verificar si está pagado
    public function isPaid()
    {
        return $this->payment_status === 'Pagado';
    }

    // Marcar como pagado
    public function markAsPaid()
    {
        $this->payment_status = 'Pagado';
        $this->paid_at = now();

        return $this;
    }

    // Marcar como no pagado
    public function markAsUnpaid()
    {
        $this->payment_status = 'No Pagado';
        $this->paid_at = null;

        return $this;
    }

    /*
    |--------------------------------------------------------------------------
    | CÁLCULOS
    |--------------------------------------------------------------------------
    */

    // Calcular AFP
    public function calculateAFP()
    {
        if ($this->afp_percentage <= 0) {
            return 0;
        }

        $this->afp_amount = round(
            ($this->base_salary * $this->afp_percentage) / 100,
            2
        );

        return $this->afp_amount;
    }

    // Calcular salario neto
    public function calculateNetSalary()
    {
        $grossSalary =
            $this->base_salary
            + $this->bonuses
            + $this->conciliation
            + $this->extra_hours_amount;

        $totalDiscounts =
            $this->late_discount
            + $this->absence_discount
            + $this->afp_amount
            + $this->other_discounts;

        $this->net_salary = round(
            $grossSalary - $totalDiscounts,
            2
        );

        return $this->net_salary;
    }

    // Calcular total de descuentos
    public function getTotalDiscountsAttribute()
    {
        return round(
            $this->late_discount
            + $this->absence_discount
            + $this->afp_amount
            + $this->other_discounts,
            2
        );
    }

    // Calcular salario bruto
    public function getGrossSalaryAttribute()
    {
        return round(
            $this->base_salary
            + $this->bonuses
            + $this->conciliation
            + $this->extra_hours_amount,
            2
        );
    }

    // Obtener estado bonito
    public function getStatusBadgeAttribute()
    {
        return $this->payment_status === 'Pagado'
            ? 'success'
            : 'warning';
    }
}
