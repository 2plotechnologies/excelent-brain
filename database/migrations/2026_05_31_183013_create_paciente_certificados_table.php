<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('paciente_certificados', function (Blueprint $table) {

            $table->id();

            $table->string('nombres');
            $table->string('apellidos');

            $table->string('dni', 20)->unique();

            $table->string('telefono', 20);

            $table->string('correo')->nullable();

            $table->enum('tipo_certificado', [
                'trabajo',
                'estudios'
            ]);

            $table->timestamps();

            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('paciente_certificados');
    }
};