<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\AppointmentSatisfaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AppointmentSatisfactionController extends Controller
{
    public function createLink($appointmentId)
    {
        $appointment = Appointment::with('patient', 'professional', 'precio')->findOrFail($appointmentId);

        if ((int) $appointment->status !== 5 || !$appointment->hora_fin) {
            return response()->json([
                'message' => 'La cita debe estar marcada como atendida para enviar satisfaccion.',
            ], 422);
        }

        $satisfaction = AppointmentSatisfaction::firstOrNew([
            'appointment_id' => $appointment->id,
        ]);

        if (!$satisfaction->exists) {
            $satisfaction->token = Str::uuid()->toString();
        }

        $patientName = trim(($appointment->patient->name ?? '') . ' ' . ($appointment->patient->nombres ?? ''));

        $satisfaction->fill([
            'patient_id' => $appointment->patient_id,
            'professional_id' => $appointment->professional_id,
            'service_id' => $appointment->type,
            'patient_name' => $patientName,
            'patient_dni' => $appointment->patient->dni ?? null,
            'patient_phone' => $appointment->patient->phone ?? null,
            'professional_name' => $appointment->professional->name ?? null,
            'service_description' => $appointment->precio->descripcion ?? null,
            'appointment_date' => $appointment->date,
            'sent_at' => $satisfaction->sent_at ?: now(),
        ]);

        $satisfaction->save();

        return response()->json([
            'url' => url('/satisfaccion/' . $satisfaction->token),
            'satisfaction' => $satisfaction,
        ]);
    }

    public function showPublic($token)
    {
        $satisfaction = AppointmentSatisfaction::where('token', $token)->firstOrFail();

        return response()->json([
            'id' => $satisfaction->id,
            'rating' => $satisfaction->rating,
            'answered_at' => $satisfaction->answered_at,
            'patient_name' => $satisfaction->patient_name,
            'professional_name' => $satisfaction->professional_name,
            'service_description' => $satisfaction->service_description,
            'appointment_date' => $satisfaction->appointment_date,
        ]);
    }

    public function storePublic($token, Request $request)
    {
        $request->validate([
            'rating' => 'required|integer|min:1|max:10',
            'comment' => 'nullable|string|max:1000',
        ]);

        $satisfaction = AppointmentSatisfaction::where('token', $token)->firstOrFail();
        $satisfaction->update([
            'rating' => $request->rating,
            'comment' => $request->comment,
            'answered_at' => now(),
        ]);

        return response()->json([
            'message' => 'Gracias por registrar su satisfaccion.',
            'satisfaction' => $satisfaction,
        ]);
    }

    public function report(Request $request)
    {
        $query = AppointmentSatisfaction::query()
            ->whereNotNull('rating')
            ->orderBy('answered_at', 'desc');

        if ($request->filled('date_from')) {
            $query->whereDate('appointment_date', '>=', Carbon::parse($request->date_from)->format('Y-m-d'));
        }

        if ($request->filled('date_to')) {
            $query->whereDate('appointment_date', '<=', Carbon::parse($request->date_to)->format('Y-m-d'));
        }

        if ($request->filled('professional_id')) {
            $query->where('professional_id', $request->professional_id);
        }

        if ($request->filled('service_id')) {
            $query->where('service_id', $request->service_id);
        }

        if ($request->filled('rating')) {
            $query->where('rating', $request->rating);
        }

        $rows = $query->get();

        return response()->json([
            'summary' => [
                'total' => $rows->count(),
                'average' => $rows->count() ? round($rows->avg('rating'), 2) : 0,
                'promoters' => $rows->where('rating', '>=', 9)->count(),
                'neutral' => $rows->whereBetween('rating', [7, 8])->count(),
                'detractors' => $rows->where('rating', '<=', 6)->count(),
            ],
            'data' => $rows->values(),
        ]);
    }
}
