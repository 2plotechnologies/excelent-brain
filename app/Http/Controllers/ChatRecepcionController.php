<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChatRecepcion;

class ChatRecepcionController extends Controller
{
    public function getChat($patient_id)
    {
        $chat = ChatRecepcion::where('patient_id', $patient_id)->with('user')->get();
        return response()->json($chat);
    }

    public function addMessage(Request $request)
    {
        //Validar que vengan los campos y sean correctos.
        $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'mensaje' => 'required',
        ]);
        
        $chat = ChatRecepcion::create([
            'patient_id' => $request->patient_id,
            'user_id' => auth()->user()->id,
            'mensaje' => $request->mensaje,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Mensaje enviado correctamente.',
            'data' => $chat,
        ]);
    }
}
