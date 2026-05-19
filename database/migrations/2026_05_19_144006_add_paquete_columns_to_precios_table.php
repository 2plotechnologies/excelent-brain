<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('precios', function (Blueprint $table) {
            $table->string('paquete_tipo')->nullable()->comment('Ej: sesiones, tiempo, sucamec');
            $table->string('paquete_especialidad')->nullable()->comment('Ej: psicologica, psiquiatrica, nutricional');
            $table->string('paquete_subtipo')->nullable()->comment('Ej: 4, 6, 8, 15, 30, nuevo, renovacion');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('precios', function (Blueprint $table) {
            $table->dropColumn(['paquete_tipo', 'paquete_especialidad', 'paquete_subtipo']);
        });
    }
};
