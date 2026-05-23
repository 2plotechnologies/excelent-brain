<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentSatisfactionsTable extends Migration
{
    public function up()
    {
        Schema::create('appointment_satisfactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('appointment_id')->unique();
            $table->unsignedBigInteger('patient_id')->nullable();
            $table->unsignedBigInteger('professional_id')->nullable();
            $table->unsignedBigInteger('service_id')->nullable();
            $table->string('token', 80)->unique();
            $table->unsignedTinyInteger('rating')->nullable();
            $table->text('comment')->nullable();
            $table->string('patient_name')->nullable();
            $table->string('patient_dni', 30)->nullable();
            $table->string('patient_phone', 40)->nullable();
            $table->string('professional_name')->nullable();
            $table->string('service_description')->nullable();
            $table->date('appointment_date')->nullable();
            $table->timestamp('sent_at')->nullable();
            $table->timestamp('answered_at')->nullable();
            $table->timestamps();

            $table->foreign('appointment_id')->references('id')->on('appointments')->onDelete('cascade');
            $table->foreign('patient_id')->references('id')->on('patients')->onDelete('set null');
            $table->foreign('professional_id')->references('id')->on('professionals')->onDelete('set null');
            $table->index(['appointment_date', 'professional_id', 'service_id', 'rating'], 'appt_satisfaction_report_idx');
        });
    }

    public function down()
    {
        Schema::dropIfExists('appointment_satisfactions');
    }
}
