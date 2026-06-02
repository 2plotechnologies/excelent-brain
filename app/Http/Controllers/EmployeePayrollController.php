<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EmployeeAttendance;
use App\Models\EmployeePayroll;
use App\Models\EmployeeSalaryConfig;
use App\Models\ProfessionalExtraSchedule;
use App\Services\PayrollCalculationService;

class EmployeePayrollController extends Controller
{
    protected $payrollService;
    public function __construct(
        PayrollCalculationService $payrollService
    )
    {
        $this->payrollService = $payrollService;
    }
        /*
    |--------------------------------------------------------------------------
    | LISTAR PLANILLAS.
    |--------------------------------------------------------------------------
    */

    public function index(Request $request)
    {
        $query = EmployeePayroll::with([
            'user',
            'professional'
        ]);

        // Filtro por mes
        if ($request->filled('payroll_month')) {

            $query->where(
                'payroll_month',
                $request->payroll_month
            );
        }

        // Filtro por año
        if ($request->filled('payroll_year')) {

            $query->where(
                'payroll_year',
                $request->payroll_year
            );
        }

        // Filtro por estado
        if ($request->filled('payment_status')) {

            $query->where(
                'payment_status',
                $request->payment_status
            );
        }

        // Filtro por profesional
        if ($request->filled('professional_id')) {

            $query->where(
                'professional_id',
                $request->professional_id
            );
        }

        // Filtro por usuario
        if ($request->filled('user_id')) {

            $query->where(
                'user_id',
                $request->user_id
            );
        }

        $payrolls = $query
            ->orderBy('payroll_year', 'desc')
            ->orderBy('payroll_month', 'desc')
            ->paginate(20);

        return response()->json([
            'success' => true,
            'data' => $payrolls
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | GENERAR PLANILLA.
    |--------------------------------------------------------------------------
    */

   public function generatePayroll(Request $request)
    {
        $request->validate([
            'payroll_month' => 'required|integer|min:1|max:12',
            'payroll_year' => 'required|integer',

            'user_id' => 'nullable|exists:users,id',
            'professional_id' => 'nullable|exists:professionals,id',
        ]);

        try {
            if (!$request->user_id && !$request->professional_id) {
                // Bulk generation
                $configs = EmployeeSalaryConfig::all();
                $generated = 0;
                foreach ($configs as $config) {
                    try {
                        $this->payrollService->generatePayroll(
                            $request->payroll_month,
                            $request->payroll_year,
                            $config->user_id,
                            $config->professional_id,
                            [
                                'bonuses' => $request->bonuses,
                                'conciliation' => $request->conciliation,
                                'other_discounts' => $request->other_discounts,
                            ]
                        );
                        $generated++;
                    } catch (\Exception $e) {
                        // Skip if already exists or other error
                    }
                }
                
                return response()->json([
                    'success' => true,
                    'message' => "Planillas generadas: $generated"
                ]);
            } else {
                // Single generation
                $payroll = $this->payrollService
                    ->generatePayroll(
                        $request->payroll_month,
                        $request->payroll_year,
                        $request->user_id,
                        $request->professional_id,
                        [
                            'bonuses' => $request->bonuses,
                            'conciliation' => $request->conciliation,
                            'other_discounts' => $request->other_discounts,
                        ]
                    );

                return response()->json([
                    'success' => true,
                    'message' => 'Planilla generada correctamente.',
                    'data' => $payroll
                ]);
            }
        } catch (\Exception $e) {

            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 422);
        }
    }

    /*
    |--------------------------------------------------------------------------
    | VER DETALLE.
    |--------------------------------------------------------------------------
    */

    public function show($id)
    {
        $payroll = EmployeePayroll::with([
            'user',
            'professional'
        ])->find($id);

        if (!$payroll) {

            return response()->json([
                'success' => false,
                'message' => 'Planilla no encontrada.'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $payroll
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | ACTUALIZAR PLANILLA.
    |--------------------------------------------------------------------------
    */

    public function update(Request $request, $id)
    {
        $payroll = EmployeePayroll::find($id);

        if (!$payroll) {

            return response()->json([
                'success' => false,
                'message' => 'Planilla no encontrada.'
            ], 404);
        }

        $request->validate([
            'base_salary' => 'nullable|numeric|min:0',
            'afp_percentage' => 'nullable|numeric|min:0|max:100',
            'bonuses' => 'nullable|numeric|min:0',
            'conciliation' => 'nullable|numeric|min:0',
            'other_discounts' => 'nullable|numeric|min:0',
        ]);

        if ($request->has('base_salary')) {
            $payroll->base_salary = $request->base_salary;
        }
        
        if ($request->has('afp_percentage')) {
            $payroll->afp_percentage = $request->afp_percentage;
        }

        $payroll->bonuses =
            $request->bonuses ?? $payroll->bonuses;

        $payroll->conciliation =
            $request->conciliation ?? $payroll->conciliation;

        $payroll->other_discounts =
            $request->other_discounts ?? $payroll->other_discounts;

        /*
        |--------------------------------------------------------------------------
        | RECALCULAR.
        |--------------------------------------------------------------------------
        */

        $payroll->calculateAFP();

        $payroll->calculateNetSalary();

        $payroll->save();

        return response()->json([
            'success' => true,
            'message' => 'Planilla actualizada correctamente.',
            'data' => $payroll
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | CAMBIAR ESTADO DE PAGO.
    |--------------------------------------------------------------------------
    */

    public function togglePaymentStatus($id)
    {
        $payroll = EmployeePayroll::find($id);

        if (!$payroll) {

            return response()->json([
                'success' => false,
                'message' => 'Planilla no encontrada.'
            ], 404);
        }

        if ($payroll->isPaid()) {

            $payroll->markAsUnpaid();

        } else {

            $payroll->markAsPaid();
        }

        $payroll->save();

        return response()->json([
            'success' => true,
            'message' => 'Estado actualizado correctamente.',
            'data' => $payroll
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | ELIMINAR.
    |--------------------------------------------------------------------------
    */

    public function destroy($id)
    {
        $payroll = EmployeePayroll::find($id);

        if (!$payroll) {

            return response()->json([
                'success' => false,
                'message' => 'Planilla no encontrada.'
            ], 404);
        }

        $payroll->delete();

        return response()->json([
            'success' => true,
            'message' => 'Planilla eliminada correctamente.'
        ]);
    }
}
