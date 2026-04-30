<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FichaSeguimiento extends Model
{
    protected $table = 'fichas_seguimiento';
    public $timestamps = false;

    protected $fillable = [
        'fecha',
        'tipo',
        'frecuencia',
        'motivo',
        'recomendaciones',
        'professional_id',
    ];

    public function professional()
    {
        return $this->belongsTo(Professional::class);
    }

    public function interconsultas()
    {
        return $this->hasMany(InterconsultaSeguimiento::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}
