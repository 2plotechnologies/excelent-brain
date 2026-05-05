<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotaCredito extends Model
{
    use HasFactory;

    protected $table = 'notas_credito';

    protected $fillable = [
        'patient_id',
        'idMembresia_origen',
        'monto_original',
        'monto_disponible',
        'estado',
        'observaciones',
        'fecha_emision'
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function membresiaOrigen()
    {
        return $this->belongsTo(Membresia::class, 'idMembresia_origen');
    }
}
