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
            $table->string('paquete_publico')->nullable()->after('paquete_especialidad');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('precios', function (Blueprint $table) {
            $table->dropColumn('paquete_publico');
        });
    }
};
