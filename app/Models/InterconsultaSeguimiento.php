<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InterconsultaSeguimiento extends Model
{
    protected $table = 'interconsultas_seguimiento';
    public $timestamps = false;

    protected $fillable = [
        'tipo',
        'motivo',
        'professional_id',
        'ficha_seguimiento_id',
    ];

    public function professional()
    {
        return $this->belongsTo(Professional::class);
    }

    public function fichaSeguimiento()
    {
        return $this->belongsTo(FichaSeguimiento::class);
    }
}
