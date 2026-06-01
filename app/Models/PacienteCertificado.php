<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PacienteCertificado extends Model
{
    use SoftDeletes;

    protected $table = 'paciente_certificados';

    protected $fillable = [
        'nombres',
        'apellidos',
        'dni',
        'telefono',
        'correo',
        'tipo_certificado'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    protected $appends = [
        'nombre_completo'
    ];

    public function getNombreCompletoAttribute()
    {
        return trim($this->nombres . ' ' . $this->apellidos);
    }   
}
