<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sede extends Model
{
    use HasFactory;

    protected $table = 'sedes';

    protected $fillable = [
        'nombre',
        'direccion',
        'telefono',
        'codigo',
        'activo'
    ];

    protected $casts = [
        'activo' => 'integer',
    ];

    /**
     * Usuarios de esta sede
     */
    public function users()
    {
        return $this->hasMany(User::class, 'idSede');
    }
}
