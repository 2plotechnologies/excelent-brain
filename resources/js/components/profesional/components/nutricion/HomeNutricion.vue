<template>
	<div class="p-4" style="background-color: #f8f9fc; min-height: 100vh;">
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
			<div>
				<h4 class="m-0 font-weight-bold text-dark"><i class="fas fa-apple-alt text-primary mr-2"></i> Nutrición</h4>
				<small class="text-muted">Gestión de planes nutricionales e historial</small>
			</div>
			<div>
				<button class="btn btn-primary shadow-sm rounded-pill font-weight-bold px-4" data-bs-target="#nuevoHistorialNutricion" data-bs-toggle="modal">
					<i class="fas fa-plus-circle mr-1"></i> Agregar historia nutricional
				</button>
			</div>
		</div>

		<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 my-4 g-4">
			<div class="col" v-for="(nutrition, index) in nutriciones" :key="index">
				<div class="card border-0 shadow-sm h-100" style="border-radius: 10px; border-top: 4px solid #1cc88a !important;">
					<div class="card-body p-4 d-flex flex-column">
						<div class="d-flex align-items-center mb-3">
							<div class="icon-circle bg-success-light mr-3 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px; border-radius: 50%; background-color: #e3fbed;">
								<i class="fas fa-leaf text-success"></i>
							</div>
							<div>
								<h6 class="m-0 font-weight-bold text-dark">Sesión Nutricional</h6>
								<small class="text-muted">{{ fechaLatam(nutrition.creado) }}</small>
							</div>
						</div>
						<button class="btn btn-sm btn-light border mt-auto text-primary font-weight-bold rounded-pill shadow-sm" @click="verDetalleNutricion(index)">
							<i class="fas fa-eye mr-1"></i> Ver detalles
						</button>
					</div>
				</div>
			</div>
			<div v-if="nutriciones.length === 0" class="col-12 text-center py-5">
				<p class="text-muted">No hay historias nutricionales registradas.</p>
			</div>
		</div>


		<!-- Modal de examenes -->
		<div class="modal fade" id="nuevoHistorialNutricion" tabindex="-1" aria-labelledby="modalEvolution" aria-hidden="true">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header border-0 pb-0 px-4 pt-4">
						<h5 class="modal-title font-weight-bold text-dark" id="infoModalLabel">
							<i class="fas fa-apple-alt text-primary mr-2"></i> Historia Nutricional
						</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body p-4">
						<h6 class="font-weight-bold text-primary mb-3"><i class="fas fa-ruler-vertical mr-1"></i> 1. Antecedentes</h6>
						<div class="row g-3 mb-4">
							<div class="col-md-6">
								<label class="form-label small fw-bold text-muted text-uppercase">Peso (kg)</label>
								<div class="input-group shadow-sm" style="border-radius: 8px; overflow: hidden;">
									<span class="input-group-text bg-white border-0 text-muted"><i class="fas fa-weight"></i></span>
									<input type="number" class="form-control border-0" v-model="nutricion.peso">
								</div>
							</div>
							<div class="col-md-6">
								<label class="form-label small fw-bold text-muted text-uppercase">Talla (cm)</label>
								<div class="input-group shadow-sm" style="border-radius: 8px; overflow: hidden;">
									<span class="input-group-text bg-white border-0 text-muted"><i class="fas fa-ruler"></i></span>
									<input type="number" class="form-control border-0" v-model="nutricion.talla">
								</div>
							</div>
							<div class="col-md-6">
								<label class="form-label small fw-bold text-muted text-uppercase">IMC</label>
								<div class="input-group shadow-sm" style="border-radius: 8px; overflow: hidden;">
									<span class="input-group-text bg-white border-0 text-muted"><i class="fas fa-calculator"></i></span>
									<input type="number" class="form-control border-0" v-model="nutricion.imc">
								</div>
							</div>
							<div class="col-md-6">
								<label class="form-label small fw-bold text-muted text-uppercase">Perímetro</label>
								<div class="input-group shadow-sm" style="border-radius: 8px; overflow: hidden;">
									<span class="input-group-text bg-white border-0 text-muted"><i class="fas fa-tape"></i></span>
									<input type="number" class="form-control border-0" v-model="nutricion.perimetro">
								</div>
							</div>
							<div class="col-md-6">
								<label class="form-label small fw-bold text-muted text-uppercase">% de Grasa Corporal</label>
								<div class="input-group shadow-sm" style="border-radius: 8px; overflow: hidden;">
									<span class="input-group-text bg-white border-0 text-muted"><i class="fas fa-percentage"></i></span>
									<input type="number" class="form-control border-0" v-model="nutricion.grasa">
								</div>
							</div>
						</div>

						<h6 class="font-weight-bold text-primary mb-3 mt-2"><i class="fas fa-utensils mr-1"></i> 2. Hábitos Alimenticios</h6>
						<div class="row g-3 mb-4">
							<div class="col-md-6">
								<label class="form-label small fw-bold text-muted text-uppercase">N° de comidas al día</label>
								<input type="number" class="form-control shadow-sm border-0" style="border-radius: 8px;" v-model="nutricion.comidas">
							</div>
							<div class="col-md-6">
								<label class="form-label small fw-bold text-muted text-uppercase">Intolerancia alimentaria</label>
								<select class="form-select shadow-sm border-0" style="border-radius: 8px;" v-model="nutricion.intolerancia">
									<option value="0">No</option>
									<option value="1">Si</option>
								</select>
							</div>
							<div class="col-md-4">
								<label class="form-label small fw-bold text-muted text-uppercase">Alergias</label>
								<select class="form-select shadow-sm border-0" style="border-radius: 8px;" v-model="nutricion.alergias">
									<option value="0">No</option>
									<option value="1">Si</option>
								</select>
							</div>
							<div class="col-md-4">
								<label class="form-label small fw-bold text-muted text-uppercase">Fuma</label>
								<select class="form-select shadow-sm border-0" style="border-radius: 8px;" v-model="nutricion.fuma">
									<option value="0">No</option>
									<option value="1">Si</option>
								</select>
							</div>
							<div class="col-md-4">
								<label class="form-label small fw-bold text-muted text-uppercase">Bebe</label>
								<select class="form-select shadow-sm border-0" style="border-radius: 8px;" v-model="nutricion.bebe">
									<option value="0">No</option>
									<option value="1">Si</option>
								</select>
							</div>
						</div>
						
						<h6 class="font-weight-bold text-primary mb-3 mt-2"><i class="fas fa-stethoscope mr-1"></i> 3. Signos y síntomas</h6>
						<textarea rows="3" class="form-control shadow-sm border-0 mb-4" style="border-radius: 8px;" v-model="nutricion.signos" placeholder="Describa los signos y síntomas..."></textarea >
						
						<h6 class="font-weight-bold text-primary mb-3"><i class="fas fa-notes-medical mr-1"></i> 4. Diagnóstico Nutricional</h6>
						<textarea rows="3" class="form-control shadow-sm border-0 mb-4" style="border-radius: 8px;" v-model="nutricion.diagnostico" placeholder="Diagnóstico..."></textarea>
						
						<h6 class="font-weight-bold text-primary mb-3"><i class="fas fa-clipboard-list mr-1"></i> 5. Plan Nutricional</h6>
						<div class="mb-3">
							<label class="form-label small fw-bold text-muted text-uppercase">Dieta</label>
							<textarea rows="3" class="form-control shadow-sm border-0" style="border-radius: 8px;" v-model="nutricion.dieta" placeholder="Descripción de la dieta..."></textarea>
						</div>
						<div class="mb-4">
							<label class="form-label small fw-bold text-muted text-uppercase">Suplemento o complemento nutricional</label>
							<textarea rows="3" class="form-control shadow-sm border-0" style="border-radius: 8px;" v-model="nutricion.suplemento" placeholder="Suplementos requeridos..."></textarea>
						</div>

						<div class="text-end">
							<button class="btn btn-primary rounded-pill px-4 shadow font-weight-bold" @click="guardar()" data-bs-dismiss="modal"><i class="far fa-save mr-1"></i> Crear plan inicial</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import moment from 'moment'
export default{
	name: 'Nutricion',
	props:['dataCies'],
	data(){ return {
		nutricion:{
			idPaciente:null, peso:0, talla:0, imc:0, perimetro:0, grasa:0, comidas:1, intolerancia:0, alergias:0, fuma:0, bebe:0, signos:'', diagnostico:'', dieta:'', suplemento:''
		}, nutriciones:[]
	}},
	mounted(){
		this.nutricion.idPaciente = this.$route.params.idPaciente
		this.cargarDatos()
	},
	methods: {
		guardar(){
			this.axios.post(`/api/crearNutricionPrimera`, this.nutricion)
			.then(resp => console.log(resp.data) )
		},
		cargarDatos(){
			this.axios.post('/api/listarNutriciones', {idPaciente: this.nutricion.idPaciente })
			.then(resp => {
				this.nutriciones = resp.data
				console.log('datas', resp.data);
			})
		},
		fechaLatam(fecha) {
			return fecha ? moment(fecha).format('DD/MM/YYYY [a las] h:mm a') : 'Sin registro';
		},
	},
}
</script>