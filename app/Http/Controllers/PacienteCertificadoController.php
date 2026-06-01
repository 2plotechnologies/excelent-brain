<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PacienteCertificado;

class PacienteCertificadoController extends Controller
{
    public function index(Request $request)
    {
        $query = PacienteCertificado::query();

        if ($request->filled('search')) {

            $search = $request->search;

            $query->where(function ($q) use ($search) {

                $q->where('nombres', 'like', "%{$search}%")
                  ->orWhere('apellidos', 'like', "%{$search}%")
                  ->orWhere('dni', 'like', "%{$search}%");
            });
        }

        return $query
            ->latest()
            ->paginate(20);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nombres' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'dni' => 'required|string|max:20|unique:paciente_certificados,dni',
            'telefono' => 'required|string|max:20',
            'correo' => 'nullable|email|max:255',
            'tipo_certificado' => 'required|in:trabajo,estudios'
        ]);

        $paciente = PacienteCertificado::create($data);

        return response()->json($paciente, 201);
    }

    public function show($id)
    {
        return PacienteCertificado::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $paciente = PacienteCertificado::findOrFail($id);

        $data = $request->validate([
            'nombres' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'dni' => 'required|string|max:20|unique:paciente_certificados,dni,' . $id,
            'telefono' => 'required|string|max:20',
            'correo' => 'nullable|email|max:255',
            'tipo_certificado' => 'required|in:trabajo,estudios'
        ]);

        $paciente->update($data);

        return response()->json($paciente);
    }

    public function destroy($id)
    {
        PacienteCertificado::findOrFail($id)->delete();

        return response()->json([
            'message' => 'Registro eliminado correctamente'
        ]);
    }
}
