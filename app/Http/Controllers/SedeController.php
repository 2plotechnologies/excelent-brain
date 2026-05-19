<?php

namespace App\Http\Controllers;

use App\Models\Sede;
use Illuminate\Http\Request;

class SedeController extends Controller
{
    /**
     * Listar todas las sedes (activas por defecto, o todas si se solicita).
     */
    public function index(Request $request)
    {
        $query = Sede::query();

        // Si no se pide explícitamente 'todas', solo devolver activas
        if (!$request->has('todas')) {
            $query->where('activo', 1);
        }

        $sedes = $query->orderBy('id', 'asc')->get();

        return response()->json($sedes);
    }

    /**
     * Crear nueva sede.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:100',
            'direccion' => 'nullable|string|max:255',
            'telefono' => 'nullable|string|max:20',
            'codigo' => 'nullable|string|max:20|unique:sedes,codigo',
        ]);

        $sede = Sede::create([
            'nombre' => $request->nombre,
            'direccion' => $request->direccion,
            'telefono' => $request->telefono,
            'codigo' => $request->codigo,
            'activo' => 1,
        ]);

        return response()->json([
            'mensaje' => 'Sede creada exitosamente',
            'sede' => $sede,
        ], 201);
    }

    /**
     * Mostrar una sede específica.
     */
    public function show($id)
    {
        $sede = Sede::findOrFail($id);
        return response()->json($sede);
    }

    /**
     * Actualizar una sede.
     */
    public function update(Request $request, $id)
    {
        $sede = Sede::findOrFail($id);

        $request->validate([
            'nombre' => 'sometimes|required|string|max:100',
            'direccion' => 'nullable|string|max:255',
            'telefono' => 'nullable|string|max:20',
            'codigo' => 'nullable|string|max:20|unique:sedes,codigo,' . $id,
        ]);

        $sede->update($request->only(['nombre', 'direccion', 'telefono', 'codigo']));

        return response()->json([
            'mensaje' => 'Sede actualizada exitosamente',
            'sede' => $sede,
        ]);
    }

    /**
     * Desactivar una sede (soft-delete).
     */
    public function destroy($id)
    {
        $sede = Sede::findOrFail($id);
        $sede->activo = 0;
        $sede->save();

        return response()->json([
            'mensaje' => 'Sede desactivada exitosamente',
        ]);
    }

    /**
     * Reactivar una sede.
     */
    public function reactivar($id)
    {
        $sede = Sede::findOrFail($id);
        $sede->activo = 1;
        $sede->save();

        return response()->json([
            'mensaje' => 'Sede reactivada exitosamente',
            'sede' => $sede,
        ]);
    }
}
