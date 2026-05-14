<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class QuestionnaireController extends Controller
{
    public function generarLinkApi($id)
    {
        $token = Str::random(64);

        DB::table('patient_questionnaire_links')->insert([
            'patient_id' => $id,
            'token' => $token,
            'expires_at' => now()->addHour(),
            'created_at' => now()
        ]);

        return response()->json([
            'link' => url("/cuestionario/$token")
        ]);
    }

    public function show($token)
    {
        $link = DB::table('patient_questionnaire_links')
            ->where('token', $token)
            ->first();

        if (!$link) {
            abort(404);
        }

        if (now()->gt($link->expires_at)) {
            return response()->json([
                'status' => 'error',
                'message' => 'El enlace ha expirado.'
            ], 403);
        }

        if ($link->used_at) {
            return response()->json([
                'status' => 'error',
                'message' => 'El enlace ya ha sido usado.'
            ], 403);
        }

        // Obtener datos del paciente
        $patient = \App\Models\Patient::with('relative')->find($link->patient_id);

        return response()->json([
            'link' => $link,
            'patient' => $patient
        ]);
    }

    public function store(Request $request, $token)
    {
        $link = DB::table('patient_questionnaire_links')
            ->where('token', $token)
            ->first();

        if (!$link || now()->gt($link->expires_at)) {
            return response()->json(['error' => 'Link inválido'], 403);
        }

        DB::table('patient_questionnaire_answers')->insert([
            'patient_id' => $link->patient_id,
            'link_id' => $link->id,
            'answers' => json_encode($request->all()),
            'created_at' => now()
        ]);

        // Marcar como usado
        DB::table('patient_questionnaire_links')
            ->where('id', $link->id)
            ->update(['used_at' => now()]);

        return response()->json(['success' => true]);
    }

    public function ultimoAutoTriaje($id)
    {
        $answer = DB::table('patient_questionnaire_answers')
            ->where('patient_id', $id)
            ->orderBy('created_at', 'desc')
            ->first();

        if (!$answer) {
            return response()->json(['status' => 'error', 'message' => 'No se encontraron respuestas para este paciente.'], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => json_decode($answer->answers)
        ]);
    }
}
