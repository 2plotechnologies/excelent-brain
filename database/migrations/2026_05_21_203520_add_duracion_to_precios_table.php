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
            $table->integer('duracion')->nullable();
        });

        \Illuminate\Support\Facades\DB::table('precios')->where('servicio', 0)->update(['duracion' => 0]);
        \Illuminate\Support\Facades\DB::table('precios')->where('servicio', 1)->where('idClasificacion', 2)->update(['duracion' => 60]);
        \Illuminate\Support\Facades\DB::table('precios')->where('servicio', 1)->where('idClasificacion', 1)->update(['duracion' => 45]);
        \Illuminate\Support\Facades\DB::table('precios')->where('servicio', 1)->where('idClasificacion', 1)->where('descripcion', 'like', '%Lectura de resultados%')->update(['duracion' => 15]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('precios', function (Blueprint $table) {
            $table->dropColumn('duracion');
        });
    }
};
