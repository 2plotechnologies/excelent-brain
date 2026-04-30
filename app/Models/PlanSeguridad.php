<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlanSeguridad extends Model
{
    protected $table = 'planes_seguridad';
    public $timestamps = false;

    protected $fillable = [
        'fecha',
        'senales_advertencia',
        'estrategias',
        'personas_dis',
        'personas_ayuda',
        'razones_vivir',
        'medidas',
        'contactos_emergencia',
        'patient_id',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}
