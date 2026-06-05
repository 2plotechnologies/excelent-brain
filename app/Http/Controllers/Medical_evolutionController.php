<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Medical_evolution;
use App\Models\Patient;
use App\Models\Prescription;
use Barryvdh\DomPDF\Facade\Pdf as PDF;
use Illuminate\Support\Facades\DB;


class Medical_evolutionController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{

	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$evolution = Medical_evolution::create($request->all());
		return response()->json($evolution);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id)
	{
		$medical_evolution = Medical_evolution::where('id', $id)->update($request->all());
		return response()->json($medical_evolution);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		//
	}

	/**
	 * Generar pdf de paciente
	 * a trves de su id
	 */

	public function pdfEvolutionCompleto ($id){
		$historia = Patient::where('id', $id)
			->with('initial_psychiatric_history.professional', 'initial_psychological_history', 'medical_evolutions.professional')
			->first();

		$autotriaje = DB::table('patient_questionnaire_answers')->where('patient_id', $id)->orderBy('created_at', 'desc')->first();
		if ($autotriaje) {
			$historia->autotriaje = json_decode($autotriaje->answers);
			if ($historia->autotriaje) $historia->autotriaje->fecha_registro = $autotriaje->created_at;
		}

		// Procesamiento de firmas a Base64 para dompdf
		$historia = $this->procesarFirmasBase64($historia);

		// Calcular edad (puedes simplificarlo con Carbon)
		$age = \Carbon\Carbon::parse($historia->birth_date)->age;
		
		$historia->full = 'si';

		$pdf = PDF::loadView('profesional.pdf_paciente', compact('historia', 'age'));
		$pdf->setPaper('a4', 'portrait');
		
		return $pdf->stream('mi-archivo.pdf');
	}


	public function pdfEvolutionRestringido ($id){
		$threeMonthsAgo = now()->subMonths(6);

		$historia = Patient::where('id', $id)
			->with('initial_psychiatric_history.professional', 'initial_psychological_history','medical_evolutions.professional')
			->with(['medical_evolutions'=> function($query) use($threeMonthsAgo) {
				$query->where('activo','=', 1)
				->whereBetween('date', [ $threeMonthsAgo, now() ]);
			}])
			->first();

		$autotriaje = DB::table('patient_questionnaire_answers')->where('patient_id', $id)->orderBy('created_at', 'desc')->first();
		if ($autotriaje) {
			$historia->autotriaje = json_decode($autotriaje->answers);
			if ($historia->autotriaje) $historia->autotriaje->fecha_registro = $autotriaje->created_at;
		}

		// Procesamiento de firmas
		$historia = $this->procesarFirmasBase64($historia);
		
		// Cálculo de edad (Simplificado)
		$age = \Carbon\Carbon::parse($historia->birth_date)->age;
		
		$historia->full = 'no';

		$pdf = PDF::loadView('profesional.pdf_paciente', compact('historia', 'age'));
		$pdf->setPaper('a4', 'portrait');
		
		return $pdf->stream('mi-archivo.pdf');
	}

	private function _convertirImagenBase64($signingPath) {
		if (!$signingPath || $signingPath === '-' || $signingPath === '') return $signingPath;

		$path = storage_path('app/public/' . ltrim($signingPath, '/'));
		
		// Búsqueda en rutas alternativas donde puede estar la imagen
		if (!file_exists($path)) {
			$pathAlt1 = public_path(ltrim($signingPath, '/')); 
			$pathAlt2 = public_path('img/' . ltrim($signingPath, '/'));
			$pathAlt3 = public_path('firmas/' . basename($signingPath));
			
			if (file_exists($pathAlt1)) {
				$path = $pathAlt1;
			} elseif (file_exists($pathAlt2)) {
				$path = $pathAlt2;
			} elseif (file_exists($pathAlt3)) {
				$path = $pathAlt3;
			}
		}

		if (file_exists($path)) {
			try {
				$type = pathinfo($path, PATHINFO_EXTENSION);
				$data = file_get_contents($path);
				return 'data:image/' . $type . ';base64,' . base64_encode($data);
			} catch (\Exception $e) {
				return ''; 
			}
		}
		return '';
	}

	private function procesarFirmasBase64($historia) {
		// 1. Historia Psiquiátrica Inicial
		if ($historia->initial_psychiatric_history && $historia->initial_psychiatric_history->professional) {
			$prof = $historia->initial_psychiatric_history->professional;
			$prof->signing = $this->_convertirImagenBase64($prof->signing);
		}

		// 2. Historia Psicológica Inicial
		if ($historia->initial_psychological_history && $historia->initial_psychological_history->professional) {
			$prof = $historia->initial_psychological_history->professional;
			$prof->signing = $this->_convertirImagenBase64($prof->signing);
		}

		// 3. Evoluciones Médicas
		if ($historia->medical_evolutions) {
			foreach ($historia->medical_evolutions as $evolucion) {
				if ($evolucion->professional) {
					$evolucion->professional->signing = $this->_convertirImagenBase64($evolucion->professional->signing);
				}
			}
		}

		return $historia;
	}

	/**
	 * Update auth for medical evolution after one day
	 */

	public function authEvol(Request $request){
		$medical_evolution =  Medical_evolution::where('id', $request->medical_evolution)
			->update([
				'auth' => $request->auth
			]);

		return response()->json(['Actualizado']);
	}

	public function editEvolution(Request $request){
	$medical_evolution =  Medical_evolution::where('id', $request->get('id'));
	   
	$medical_evolution->update([
		'content' => $request->get('content')
	]);

	return response()->json([
		'msg' => 'Contenido de Evolución actualizado correctamente'
	]);

	}

	public function getPatientsWhitEvolution($date){
		$medical_evolution = Medical_evolution::where('next', $date)
												->where('content','!=',null)
												->where('professional_id','!=',5)
												->with('patient')
												->with('professional')
												->get();
		return response()->json($medical_evolution);
	}

	public function getPatientsPsiq($date){
		$prescriptions = Prescription::where('effective_date', $date)
										->with('patient')
										->get();
								
		return response()->json($prescriptions);
	}
}
