<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReportePaqueteExtra extends Model
{
    protected $table = 'reportes_paquete_extra';
    public $timestamps = false;

    protected $fillable = [
        'fecha',
        'resumen',
        'logros',
        'recomendaciones',
        'proximos_pasos',
        'membresia_id',
    ];

    public function membresia()
    {
        return $this->belongsTo(Membresia::class);
    }
}
