<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppointmentSatisfaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'appointment_id',
        'patient_id',
        'professional_id',
        'service_id',
        'token',
        'rating',
        'comment',
        'patient_name',
        'patient_dni',
        'patient_phone',
        'professional_name',
        'service_description',
        'appointment_date',
        'answered_at',
        'sent_at',
    ];

    public function appointment()
    {
        return $this->belongsTo(Appointment::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function professional()
    {
        return $this->belongsTo(Professional::class);
    }
}
