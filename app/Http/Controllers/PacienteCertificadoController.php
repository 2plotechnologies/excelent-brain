<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PacienteCertificado;
use App\Models\Extra_payment;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class PacienteCertificadoController extends Controller
{
    public function index(Request $request)
    {
        $query = PacienteCertificado::withCount('pagos');

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
            'dni' => 'required|string|max:20',
            'telefono' => 'required|string|max:20',
            'correo' => 'nullable|email|max:255',
            'tipo_certificado' => 'required|string'
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
            'dni' => 'required|string|max:20',
            'telefono' => 'required|string|max:20',
            'correo' => 'nullable|email|max:255',
            'tipo_certificado' => 'required|string'
        ]);

        $paciente->update($data);

        return response()->json($paciente);
    }

    public function destroy($id)
    {
        $paciente = PacienteCertificado::findOrFail($id);
        
        if ($paciente->pagos()->exists()) {
            return response()->json([
                'message' => 'No se puede eliminar el registro porque tiene pagos asociados'
            ], 422);
        }

        $paciente->delete();

        return response()->json([
            'message' => 'Registro eliminado correctamente'
        ]);
    }

    public function buscarPorDni($dni)
    {
        $paciente = PacienteCertificado::where('dni', $dni)->first();
        if ($paciente) {
            return response()->json([
                'encontrado_bd' => true,
                'paciente' => $paciente
            ]);
        }
        return response()->json([
            'encontrado_bd' => false
        ]);
    }

    public function cambiarEstado(Request $request, $id)
    {
        $paciente = PacienteCertificado::findOrFail($id);
        
        $request->validate([
            'estado' => 'required|in:En proceso,Recepcionado,Entregado'
        ]);
        
        $paciente->estado = $request->estado;
        $paciente->save();
        
        return response()->json($paciente);
    }

    public function pagar(Request $request, $id)
    {
        $paciente = PacienteCertificado::findOrFail($id);
        
        $request->validate([
            'moneda_id' => 'required',
            'voucher' => 'required',
            'motivo' => 'required',
            'precio' => 'required|numeric',
            'tipo_comprobante' => 'required'
        ]);

        $user = auth()->user();
        
        $servicio = \App\Models\Precio::find($paciente->tipo_certificado);
        $servicio_nombre = $servicio ? $servicio->descripcion : 'Certificado';
        
        $observacionCompleta = $servicio_nombre . ' - ' . $request->motivo;

        $pagoExtra = new Extra_payment;
        $pagoExtra->customer = $paciente->nombres . ' ' . $paciente->apellidos;
        $pagoExtra->price = $request->precio;
        $pagoExtra->type = 0; // "Certificado" ID en tipo_pagos
        $pagoExtra->moneda = $request->moneda_id;
        $pagoExtra->voucher = $request->voucher;
        $pagoExtra->observation = $observacionCompleta;
        $pagoExtra->paciente_certificado_id = $paciente->id;
        $pagoExtra->user_id = $user->id;
        $pagoExtra->idSede = $user->idSede;
        $pagoExtra->tipo = $request->tipo_comprobante; // Boleta/Factura
        $pagoExtra->date = Carbon::now()->format('Y-m-d');
        $pagoExtra->save();

        return response()->json([
            'message' => 'Pago registrado con éxito',
            'pago' => $pagoExtra,
            'paciente' => $paciente
        ]);
    }
}
