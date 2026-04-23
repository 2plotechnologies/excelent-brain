<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChatRecepcion extends Model
{
    protected $table = 'chat_recepcion';
    protected $fillable = [
        'patient_id',
        'user_id',
        'mensaje',
        'created_at',
        'updated_at',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
