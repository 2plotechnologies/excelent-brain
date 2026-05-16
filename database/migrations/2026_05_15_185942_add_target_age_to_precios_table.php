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
            $table->tinyInteger('target_age')->default(0)->comment('0: Ambos, 1: Niños, 2: Adultos');
        });

        // Auto-asignar target_age basado en la descripción
        \Illuminate\Support\Facades\DB::statement("UPDATE precios SET target_age = 1 WHERE descripcion LIKE '%niño%' OR descripcion LIKE '%niña%' OR descripcion LIKE '%infantil%'");
        \Illuminate\Support\Facades\DB::statement("UPDATE precios SET target_age = 2 WHERE descripcion LIKE '%adulto%'");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('precios', function (Blueprint $table) {
            $table->dropColumn('target_age');
        });
    }
};
