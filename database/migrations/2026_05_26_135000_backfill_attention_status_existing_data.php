<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. If status = 5, set attention_status = 'atendido'
        DB::table('appointments')
            ->whereNull('attention_status')
            ->where('status', 5)
            ->update(['attention_status' => 'atendido']);

        // 2. If status != 5 and attention is not null, set attention_status = 'atencion'
        DB::table('appointments')
            ->whereNull('attention_status')
            ->where('status', '!=', 5)
            ->whereNotNull('hora_inicio')
            ->update(['attention_status' => 'atencion']);

        // 3. If status != 5 and attention is null and entrance is not null, set attention_status = 'espera'
        DB::table('appointments')
            ->whereNull('attention_status')
            ->where('status', '!=', 5)
            ->whereNull('hora_inicio')
            ->whereNotNull('hora_fin')
            ->update(['attention_status' => 'espera']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('appointments')
            ->update(['attention_status' => null]);
    }
};
