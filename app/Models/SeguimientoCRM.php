<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SeguimientoCRM extends Model
{
    protected $table = "seguimientos_crm";

    public $timestamps = false;

    protected $fillable = [
        "fecha",
        "respuesta",
        "canal",
        "proxima_accion",
        "comentarios",
        "numero_seguimiento",
        "patient_id"
    ];

    public function patient()
    {
        return $this->belongsTo("App\Models\Patient");
    }
}
