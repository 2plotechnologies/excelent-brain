<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        // 1. Crear tabla sedes
        if (!Schema::hasTable('sedes')) {
            Schema::create('sedes', function (Blueprint $table) {
                $table->id();
                $table->string('nombre', 100);
                $table->string('direccion', 255)->nullable();
                $table->string('telefono', 20)->nullable();
                $table->string('codigo', 20)->nullable()->comment('Código interno (ej: eltambo, sancarlos)');
                $table->tinyInteger('activo')->default(1);
                $table->timestamps();
            });

            // Datos iniciales
            DB::table('sedes')->insert([
                ['id' => 1, 'nombre' => 'El Tambo', 'codigo' => 'eltambo', 'activo' => 1, 'created_at' => now(), 'updated_at' => now()],
                ['id' => 2, 'nombre' => 'San Carlos', 'codigo' => 'sancarlos', 'activo' => 1, 'created_at' => now(), 'updated_at' => now()],
            ]);
        }

        // 2. Agregar idSede a tablas faltantes
        if (!Schema::hasColumn('appointments', 'idSede')) {
            Schema::table('appointments', function (Blueprint $table) {
                $table->integer('idSede')->default(1)->after('active_slot');
            });
        }

        if (!Schema::hasColumn('schedules', 'idSede')) {
            Schema::table('schedules', function (Blueprint $table) {
                $table->integer('idSede')->default(1)->after('professional_id');
            });
        }

        if (!Schema::hasColumn('limbos', 'idSede')) {
            Schema::table('limbos', function (Blueprint $table) {
                $table->integer('idSede')->default(1)->after('motivo');
            });
        }

        if (!Schema::hasColumn('membresias', 'idSede')) {
            Schema::table('membresias', function (Blueprint $table) {
                $table->integer('idSede')->default(1)->after('activo');
            });
        }

        if (!Schema::hasColumn('sos', 'idSede')) {
            Schema::table('sos', function (Blueprint $table) {
                $table->integer('idSede')->default(1)->after('activo');
            });
        }

        if (!Schema::hasColumn('discharges', 'idSede')) {
            Schema::table('discharges', function (Blueprint $table) {
                $table->integer('idSede')->default(1)->after('status');
            });
        }

        // 3. Backfill: Actualizar registros existentes basados en el profesional/usuario
        DB::statement("
            UPDATE appointments a
            INNER JOIN professionals p ON a.professional_id = p.id
            INNER JOIN users u ON p.user_id = u.id
            SET a.idSede = u.idSede
            WHERE a.idSede = 1 AND u.idSede != 1
        ");

        DB::statement("
            UPDATE schedules s
            INNER JOIN professionals p ON s.professional_id = p.id
            INNER JOIN users u ON p.user_id = u.id
            SET s.idSede = u.idSede
            WHERE s.idSede = 1 AND u.idSede != 1
        ");

        DB::statement("
            UPDATE limbos l
            INNER JOIN appointments a ON l.appointment_id = a.id
            SET l.idSede = a.idSede
            WHERE l.idSede = 1 AND a.idSede != 1
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('appointments', function (Blueprint $table) {
            if (Schema::hasColumn('appointments', 'idSede')) {
                $table->dropColumn('idSede');
            }
        });
        Schema::table('schedules', function (Blueprint $table) {
            if (Schema::hasColumn('schedules', 'idSede')) {
                $table->dropColumn('idSede');
            }
        });
        Schema::table('limbos', function (Blueprint $table) {
            if (Schema::hasColumn('limbos', 'idSede')) {
                $table->dropColumn('idSede');
            }
        });
        Schema::table('membresias', function (Blueprint $table) {
            if (Schema::hasColumn('membresias', 'idSede')) {
                $table->dropColumn('idSede');
            }
        });
        Schema::table('sos', function (Blueprint $table) {
            if (Schema::hasColumn('sos', 'idSede')) {
                $table->dropColumn('idSede');
            }
        });
        Schema::table('discharges', function (Blueprint $table) {
            if (Schema::hasColumn('discharges', 'idSede')) {
                $table->dropColumn('idSede');
            }
        });

        Schema::dropIfExists('sedes');
    }
};
