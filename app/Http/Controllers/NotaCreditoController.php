<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NotaCredito;
use App\Models\Extra_payment;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class NotaCreditoController extends Controller
{
    public function index(Request $request)
    {
        $notas = NotaCredito::with(['patient', 'membresiaOrigen'])
            ->orderBy('id', 'desc')
            ->get();

        foreach ($notas as $nota) {
            switch($nota->estado) {
                case 1: $nota->status_name = 'Disponible'; break;
                case 2: $nota->status_name = 'Gastado'; break;
                case 3: $nota->status_name = 'Devuelto'; break;
                case 4: $nota->status_name = 'Anulado'; break;
                default: $nota->status_name = 'Desconocido'; break;
            }
        }

        return response()->json($notas);
    }

    public function devolverDinero(Request $request, $id)
    {
        DB::beginTransaction();
        try {
            $nota = NotaCredito::findOrFail($id);

            if ($nota->estado != 1) {
                return response()->json(['error' => 'La nota de crédito no está disponible'], 400);
            }

            // Crear egreso
            $pagoExtra = new Extra_payment;
            $pagoExtra->price = $nota->monto_disponible;
            $pagoExtra->type = 6; // Egreso
            $pagoExtra->observation = 'Devolución de Nota de Crédito #' . $nota->id . ' - ' . $request->input('observacion', '');
            $pagoExtra->voucher = '';
            $pagoExtra->voucher_issued = '';
            $pagoExtra->user_id = $request->input('idUsuario');
            $pagoExtra->idSede = $request->input('idSede');
            $pagoExtra->save();

            // Actualizar nota
            $nota->estado = 3; // Devuelto
            $nota->monto_disponible = 0;
            $nota->save();

            DB::commit();
            return response()->json(['message' => 'Dinero devuelto y registrado como egreso con éxito']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function usarNota(Request $request, $id)
    {
        try {
            $nota = NotaCredito::findOrFail($id);

            if ($nota->estado != 1) {
                return response()->json(['error' => 'La nota de crédito no está disponible'], 400);
            }

            $monto_usar = floatval($request->input('monto', $nota->monto_disponible));
            
            if ($monto_usar > $nota->monto_disponible) {
                return response()->json(['error' => 'El monto supera el saldo disponible'], 400);
            }

            $nota->monto_disponible -= $monto_usar;
            
            if ($nota->monto_disponible <= 0) {
                $nota->estado = 2; // Gastado
            }

            $nota->observaciones .= "\n Usado: S/" . $monto_usar . " - " . $request->input('observacion', '');
            $nota->save();

            return response()->json(['message' => 'Nota de crédito usada con éxito', 'nota' => $nota]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
