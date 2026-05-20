<template>
	<!-- Modal -->
	<div class="modal fade" id="modalMembresias" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-lg">
			<div class="modal-content border-0 shadow">
				<div class="modal-header border-bottom-0 pb-0 pt-4 px-4">
					<h5 class="modal-title fw-bold d-flex align-items-center" style="color: #1e293b;">
						<i class="fa-solid fa-cube text-primary me-2"></i> Nuevo Paquete
					</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body px-4 pb-4">
					
					<!-- Paciente. -->
					<div class="mb-4 mt-2">
						<label class="form-label text-secondary small fw-medium mb-1">Paciente <span class="text-danger">*</span></label>
						<div class="position-relative" v-if="!pacienteElegido.id">
							<div class="input-group">
								<span class="input-group-text bg-white border-end-0"><i class="fas fa-search text-muted"></i></span>
								<input type="text" class="form-control border-start-0 ps-0" placeholder="Buscar por nombre o DNI..." v-model="txtBusqueda" @keyup.enter="searchHistoria()" @input="activaResultados = false; pacientes = []">
							</div>
							<div class="list-group position-absolute w-100 mt-1 shadow z-3" v-if="pacientes.length > 0" style="max-height: 250px; overflow-y: auto;">
								<button type="button" class="list-group-item list-group-item-action py-2" v-for="(paciente, index) in pacientes" @click="seleccionarPaciente(index)">
									<div class="d-flex justify-content-between align-items-center mb-1">
										<span class="fw-medium text-capitalize text-dark">{{ paciente.name }} {{ paciente.nombres }}</span>
										<span class="badge bg-secondary bg-opacity-10 text-white border border-secondary border-opacity-25 rounded-pill fw-normal">{{ paciente.etiqueta }}</span>
									</div>
									<div class="small text-muted"><i class="fa-solid fa-id-card ms-1"></i> {{ paciente.dni }} • <i class="fa-solid fa-mobile-screen ms-1"></i> {{ paciente.phone }}</div>
								</button>
							</div>
							<div class="mt-2 text-muted small" v-if="activaResultados && pacientes.length === 0">No se encontraron resultados para "{{ txtBusqueda }}"</div>
						</div>
						<div class="card border-primary border-opacity-50 bg-primary bg-opacity-10" v-else>
							<div class="card-body py-2 px-3 d-flex justify-content-between align-items-center">
								<div>
									<div class="fw-bold text-capitalize text-white">{{ pacienteElegido.name }} {{ pacienteElegido.nombres }}</div>
									<div class="small text-opacity-75 text-white"><i class="fa-solid fa-id-card ms-1"></i> {{ pacienteElegido.dni }} • <i class="fa-solid fa-mobile-screen ms-1"></i> {{ pacienteElegido.phone }}</div>
								</div>
								<button class="btn btn-sm btn-link text-white text-decoration-none fw-medium" @click="limpiarPaciente()">Cambiar</button>
							</div>
						</div>
					</div>

					<!-- Tipo de Paquete -->
					<div class="mb-4">
						<label class="form-label text-secondary small fw-medium mb-2">Tipo de Paquete <span class="text-danger">*</span></label>
						<div class="row g-3">
							<div class="col-md-4">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedTipoPaquete === 'sesiones' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarTipo('sesiones')" style="cursor: pointer;">
									<div class="card-body text-center py-3">
										<i class="fa-solid fa-cube fs-4 mb-2" :class="selectedTipoPaquete === 'sesiones' ? 'text-primary' : 'text-muted'"></i>
										<div class="fw-medium" :class="selectedTipoPaquete === 'sesiones' ? 'text-primary' : 'text-dark'">Por Sesiones</div>
										<div class="small text-muted mt-1" style="font-size: 0.75rem;">4, 6 u 8 sesiones</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedTipoPaquete === 'tiempo' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarTipo('tiempo')" style="cursor: pointer;">
									<div class="card-body text-center py-3">
										<i class="fa-solid fa-stopwatch fs-4 mb-2" :class="selectedTipoPaquete === 'tiempo' ? 'text-primary' : 'text-muted'"></i>
										<div class="fw-medium" :class="selectedTipoPaquete === 'tiempo' ? 'text-primary' : 'text-dark'">Por Tiempo</div>
										<div class="small text-muted mt-1" style="font-size: 0.75rem;">15 o 30 días</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedTipoPaquete === 'sucamec' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarTipo('sucamec')" style="cursor: pointer;">
									<div class="card-body text-center py-3">
										<i class="fa-solid fa-shield-halved fs-4 mb-2" :class="selectedTipoPaquete === 'sucamec' ? 'text-primary' : 'text-muted'"></i>
										<div class="fw-medium" :class="selectedTipoPaquete === 'sucamec' ? 'text-primary' : 'text-dark'">Sucamec</div>
										<div class="small text-muted mt-1" style="font-size: 0.75rem;">Nuevo o Renovación</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Especialidad (Solo para Sesiones y Tiempo) -->
					<div class="mb-4" v-if="selectedTipoPaquete === 'sesiones' || selectedTipoPaquete === 'tiempo'">
						<label class="form-label text-secondary small fw-medium mb-2">Especialidad del Paquete <span class="text-danger">*</span></label>
						<div class="row g-3">
							<div class="col-md-4">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedEspecialidadPaquete === 'psicologica' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarEspecialidad('psicologica')" style="cursor: pointer;">
									<div class="card-body text-center py-3">
										<div class="fw-medium" :class="selectedEspecialidadPaquete === 'psicologica' ? 'text-primary' : 'text-dark'">Psicológica</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedEspecialidadPaquete === 'psiquiatrica' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarEspecialidad('psiquiatrica')" style="cursor: pointer;">
									<div class="card-body text-center py-3">
										<div class="fw-medium" :class="selectedEspecialidadPaquete === 'psiquiatrica' ? 'text-primary' : 'text-dark'">Psiquiátrica</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedEspecialidadPaquete === 'nutricional' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarEspecialidad('nutricional')" style="cursor: pointer;">
									<div class="card-body text-center py-3">
										<div class="fw-medium" :class="selectedEspecialidadPaquete === 'nutricional' ? 'text-primary' : 'text-dark'">Nutricional</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Opciones de Subtipo (Sesiones, Tiempo o Sucamec) -->
					<div class="mb-4" v-if="selectedTipoPaquete">
						<label class="form-label text-secondary small fw-medium mb-2">
							{{ selectedTipoPaquete === 'sesiones' ? 'Número de Sesiones' : (selectedTipoPaquete === 'tiempo' ? 'Duración' : 'Trámite') }}
							<span class="text-danger">*</span>
						</label>
						
						<!-- Opciones para Sesiones -->
						<div class="row g-3" v-if="selectedTipoPaquete === 'sesiones'">
							<div class="col-md-4" v-for="sesion in ['4', '6', '8']" :key="sesion">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedSubtipoPaquete === sesion ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarSubtipo(sesion)" style="cursor: pointer;">
									<div class="card-body text-center py-3">
										<div class="fw-bold fs-5 mb-1" :class="selectedSubtipoPaquete === sesion ? 'text-primary' : 'text-dark'">{{ sesion }}</div>
										<div class="small text-muted" v-if="obtenerPrecioSubtipo(sesion)">S/ {{ obtenerPrecioSubtipo(sesion) }}</div>
									</div>
								</div>
							</div>
						</div>
						
						<!-- Opciones para Tiempo -->
						<div class="row g-3" v-if="selectedTipoPaquete === 'tiempo'">
							<div class="col-md-6" v-for="dia in ['15', '30']" :key="dia">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedSubtipoPaquete === dia ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarSubtipo(dia)" style="cursor: pointer;">
									<div class="card-body text-center py-3">
										<div class="fw-bold fs-5 mb-1" :class="selectedSubtipoPaquete === dia ? 'text-primary' : 'text-dark'">{{ dia }} Días</div>
										<div class="small text-muted" v-if="obtenerPrecioSubtipo(dia)">S/ {{ obtenerPrecioSubtipo(dia) }}</div>
									</div>
								</div>
							</div>
						</div>
						
						<!-- Opciones para Sucamec -->
						<div class="row g-3" v-if="selectedTipoPaquete === 'sucamec'">
							<div class="col-md-6">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedSubtipoPaquete === 'nuevo' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarSubtipo('nuevo')" style="cursor: pointer;">
									<div class="card-body text-center py-3">
										<div class="fw-bold fs-5 mb-1" :class="selectedSubtipoPaquete === 'nuevo' ? 'text-primary' : 'text-dark'">Nuevo</div>
										<div class="small text-muted" v-if="obtenerPrecioSubtipo('nuevo')">S/ {{ obtenerPrecioSubtipo('nuevo') }}</div>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedSubtipoPaquete === 'renovacion' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarSubtipo('renovacion')" style="cursor: pointer;">
									<div class="card-body text-center py-3">
										<div class="fw-bold fs-5 mb-1" :class="selectedSubtipoPaquete === 'renovacion' ? 'text-primary' : 'text-dark'">Renovación</div>
										<div class="small text-muted" v-if="obtenerPrecioSubtipo('renovacion')">S/ {{ obtenerPrecioSubtipo('renovacion') }}</div>
									</div>
								</div>
							</div>
						</div>
						
						<!-- Alerta de no encontrado -->
						<div class="alert alert-warning mt-3 py-2 small d-flex align-items-center" v-if="!membresia.tipo && selectedSubtipoPaquete && (selectedTipoPaquete === 'sucamec' || selectedEspecialidadPaquete)">
							<i class="fa-solid fa-triangle-exclamation me-2"></i> No se encontró un precio configurado para esta combinación en la base de datos.
						</div>
					</div>

					<!-- Profesional. -->
					<div class="mb-4">
						<label class="form-label text-secondary small fw-medium mb-1">Profesional <span class="text-danger">*</span></label>
						<select class="form-select" id="sltDoctor" v-model="doctorSeleccionado" @change="listarhorario()">
							<option value="-1">Seleccione un profesional</option>
							<option v-for="doctor in doctores" :value="doctor.id">{{ doctor.nombre }}</option>
						</select>
					</div>

					<!-- Precio y Cuotas. -->
					<div class="card border-0 mb-4" style="background-color: #f8f9fa; border-radius: 1rem;">
						<div class="card-body p-4">
							<h6 class="fw-bold mb-4 d-flex align-items-center" style="color: #2b3b5a;">
								<i class="fa-solid fa-dollar-sign text-primary me-2"></i> Precio y Cuotas
							</h6>
							
							<div class="row g-3">
								<div class="col-md-6">
									<label class="form-label small text-muted mb-1">Precio Regular</label>
									<div class="input-group">
										<span class="input-group-text bg-white text-muted border-end-0">S/</span>
										<input type="text" class="form-control border-start-0 bg-white text-muted" readonly :value="mostrarPrecio">
									</div>
								</div>
								<div class="col-md-6">
									<label class="form-label small text-muted mb-1">Descuento (S/)</label>
									<input type="number" class="form-control bg-white" v-model="membresia.descuento" @change="calcularFechas()" min="0">
								</div>
								
								<div class="col-md-6">
									<label class="form-label small text-muted mb-1">Nro. de Cuotas</label>
									<select class="form-select bg-white" v-model="membresia.cuotas" @change="calcularFechas()">
										<option v-for="n in 5" :value="n">{{ n }} cuota{{ n > 1 ? 's' : '' }}</option>
									</select>
								</div>
								<div class="col-md-6" v-if="membresia.cuotas > 0 && fechas.length > 0">
									<label class="form-label small text-muted mb-1">1ra Cuota (S/) — editable</label>
									<input type="number" class="form-control bg-white" v-model="fechas[0].monto" @keyup="balancearMontos(0)">
								</div>
							</div>

							<div class="mt-4" v-if="fechas.length > 0">
								<label class="form-label small fw-medium mb-3 d-flex align-items-center text-secondary">
									<i class="fa-regular fa-calendar me-2"></i> Fechas de vencimiento de cuotas
								</label>
								<div class="row g-3">
									<div class="col-md-6" v-for="(fecha, index) in fechas" :key="index">
										<div class="d-flex justify-content-between align-items-end mb-1">
											<label class="small text-muted mb-0">
												Cuota {{ index + 1 }} <span v-if="index === 0 && membresia.cuotas > 1" class="text-black-50">(editable)</span>
											</label>
											<div class="form-check form-check-inline mb-0 me-0" title="¿Paga?">
												<input class="form-check-input" type="checkbox" v-model="fecha.pago" :id="'pago' + index">
												<label class="form-check-label small" :for="'pago' + index" style="font-size: 0.75rem;">¿Pagado?</label>
											</div>
										</div>
										<div class="position-relative">
											<input type="date" class="form-control bg-white" v-model="fecha.dia">
										</div>
									</div>
								</div>
							</div>

							<!-- Summary -->
							<div class="bg-white rounded-3 p-3 mt-4 border shadow-sm">
								<div class="d-flex justify-content-between mb-2 small">
									<span class="text-muted">Precio regular ({{ cantSesiones }} sesiones)</span>
									<span class="fw-medium text-dark">S/ {{ parseFloat(mostrarPrecio).toFixed(2) }}</span>
								</div>
								<div class="d-flex justify-content-between mb-2 small text-success" v-if="membresia.descuento > 0">
									<span>Descuento</span>
									<span>-S/ {{ parseFloat(membresia.descuento).toFixed(2) }}</span>
								</div>
								<hr class="my-2 border-secondary border-opacity-25">
								<div class="d-flex justify-content-between mb-1 fw-bold text-dark">
									<span>Total Paquete</span>
									<span>S/ {{ parseFloat(mostrarPrecio - membresia.descuento).toFixed(2) }}</span>
								</div>
								<div class="d-flex justify-content-between small text-muted" v-if="membresia.cuotas > 1">
									<span>Cuota estimada</span>
									<span>S/ {{ (parseFloat(mostrarPrecio - membresia.descuento) / membresia.cuotas).toFixed(2) }} × {{ membresia.cuotas }}</span>
								</div>
							</div>
						</div>
					</div>


					<div class="mt-4">
						<label class="form-label text-secondary small fw-medium mb-1">Comentarios adicionales</label>
						<textarea class="form-control" id="txtComentarios" v-model="comentarios" rows="2" placeholder="Opcional..."></textarea>
					</div>

				</div>
				<div class="modal-footer border-top-0 pt-0 px-4 pb-4">
					<button type="button" class="btn btn-light px-4" data-bs-dismiss="modal">Cancelar</button>
					<button type="button" class="btn btn-primary px-4" @click="guardar()" :disabled="guardando">
						<i class="fa-solid fa-circle-notch fa-spin me-2" v-if="guardando"></i>
						<i class="fa-solid fa-cube me-2" v-else></i>
						Crear Paquete
					</button>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
import moment from 'moment'
import alertify from 'alertifyjs';
import { TimeScale } from 'chart.js';
export default {
	name: 'ModalMembresias',
	data() {
		return { // vista: 'buscar',
			txtBusqueda: '', pacientes: [], indexGlobal: null, pacienteElegido: {}, precios: [],
			membresia: { tipo: null, cuotas: 1, precio: 0, fin: moment().add(1, 'month').format('YYYY-MM-DD'), descuento:0, conDescuento:false },
			fechas: [], activaResultados: false, nuevaFecha: { fecha: moment().format('YYYY-MM-DD') },
			doctores: [], horarios: [], horariosAll: [], hoursProfessional: [], schedulesInvalid: {}, horasSolas: [], horasMalas: [], dayWeek: { 0: 'Lunes', 1: "Martes", 2: "Miercoles", 3: "Jueves", 4: "Viernes", 5: "Sabado", 6: "Domingo", }, doctorSeleccionado: -1, sesionesAcumuladas:[], idHorario:'', comentarios:'',
			selectedTipoPaquete: '', selectedEspecialidadPaquete: '', selectedSubtipoPaquete: '', guardando: false
		}
	},
	props: ['idUsuario', 'vista'],
	methods: {
		async searchHistoria() {
			let search = this.txtBusqueda.split('/'),
				nombre = search[0],
				profesional = search[1] || null,
				fecha = search[2] || null,
				dni = search[0]
				;

			if (nombre === '') return this.listar();
			if (dni) dni = dni.trim();

			await this.axios.get(`/api/searchPatientByNameDni/${this.txtBusqueda}`)
				.then(res => {
					//console.log(res.data);
					this.pacientes = res.data;
					this.activaResultados = true;
				})
				.catch(err => {
					console.error(err)
				})

		},
		cambiarVista(vista, index) {
			this.vista = vista;
			if (index > -1) {
				this.indexGlobal = index;
				this.pacienteElegido = this.pacientes[index];
				this.calcularFechas();
			}
		},
		seleccionarPaciente(index) {
			this.indexGlobal = index;
			this.pacienteElegido = this.pacientes[index];
			this.pacientes = [];
			this.txtBusqueda = '';
			this.activaResultados = false;
			this.calcularFechas();
		},
		limpiarPaciente() {
			this.pacienteElegido = {};
			this.indexGlobal = null;
		},
		async preciosMembresias() {
			const servidor = await fetch('/api/preciosMembresias')
			this.precios = await servidor.json();
		},
		calcularFechas() {
			this.fechas = [];
			if (!this.membresia.tipo) return;
			const precioBase = this.mostrarPrecio ;
			const precioParcial = Math.ceil((precioBase / this.membresia.cuotas)*10)/10
			var hoy = moment()
			this.membresia.precio = precioBase;
			for (let i = 0; i < this.membresia.cuotas; i++) {
				this.fechas.push({
					dia: hoy.format('YYYY-MM-DD'),
					monto: parseFloat(precioParcial).toFixed(2),
					total: precioBase,
					pago: false
				})
				// Original code modified the readonly attr of inputs via DOM. We handle it via Vue bindings now.
				hoy = moment(hoy).add(1, 'month')
			}
			this.membresia.fin = this.membresia.tipo==47 ?  moment().add(1,'year').format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')
			this.balancearMontos(0);
		},
		seleccionarTipo(tipo) {
			if (this.selectedTipoPaquete !== tipo) {
				this.selectedTipoPaquete = tipo;
				this.selectedEspecialidadPaquete = '';
				this.selectedSubtipoPaquete = '';
				this.evaluarPaqueteSeleccionado();
			}
		},
		seleccionarEspecialidad(especialidad) {
			if (this.selectedEspecialidadPaquete !== especialidad) {
				this.selectedEspecialidadPaquete = especialidad;
				this.evaluarPaqueteSeleccionado();
			}
		},
		seleccionarSubtipo(subtipo) {
			if (this.selectedSubtipoPaquete !== subtipo) {
				this.selectedSubtipoPaquete = subtipo;
				this.evaluarPaqueteSeleccionado();
			}
		},
		evaluarPaqueteSeleccionado() {
			let buscar = false;
			if (this.selectedTipoPaquete === 'sesiones' || this.selectedTipoPaquete === 'tiempo') {
				if (this.selectedEspecialidadPaquete && this.selectedSubtipoPaquete) buscar = true;
			} else if (this.selectedTipoPaquete === 'sucamec') {
				if (this.selectedSubtipoPaquete) buscar = true;
			}
			
			if (buscar) {
				let paqueteEncontrado = this.precios.find(p => 
					p.paquete_tipo === this.selectedTipoPaquete &&
					(p.paquete_especialidad === this.selectedEspecialidadPaquete || p.paquete_tipo === 'sucamec') &&
					p.paquete_subtipo === this.selectedSubtipoPaquete
				);
				
				if (paqueteEncontrado) {
					this.membresia.tipo = paqueteEncontrado.id;
					this.calcularFechas();
				} else {
					this.membresia.tipo = null;
					this.fechas = [];
				}
			} else {
				this.membresia.tipo = null;
				this.fechas = [];
			}
		},
		obtenerPrecioSubtipo(subtipo) {
			let paquete = null;
			if (this.selectedTipoPaquete === 'sucamec') {
				paquete = this.precios.find(p => p.paquete_tipo === 'sucamec' && p.paquete_subtipo === subtipo);
			} else if (this.selectedEspecialidadPaquete) {
				paquete = this.precios.find(p => 
					p.paquete_tipo === this.selectedTipoPaquete &&
					p.paquete_especialidad === this.selectedEspecialidadPaquete &&
					p.paquete_subtipo === subtipo
				);
			}
			return paquete ? parseFloat(paquete.nuevos).toFixed(2) : null;
		},
		balancearMontos(editedIndex) {
			const descuento = 0//this.membresia.descuento ?? 0;
			if (parseInt(this.membresia.cuotas) >1) {
				if (editedIndex === 0) {
					// Si se editó la primera cuota, balanceamos desde la segunda
					let cantidadFechasABalancear = this.fechas.length - 1;
					let montoRestante = (parseFloat(this.fechas[0].total) - parseFloat(this.fechas[0].monto) - descuento) / cantidadFechasABalancear;
					
					this.fechas.forEach((fecha, index) => {
							if (index > 0) { // Balanceamos desde la segunda cuota
									fecha.monto = montoRestante.toFixed(2);
							}
					});
				} else if(editedIndex<= this.fechas.length-2) {
					// Si se editó la segunda cuota, respetamos la primera y balanceamos desde la tercera
					let cantidadFechasABalancear = this.fechas.length - editedIndex+1;
					let sumaAnteriores = this.fechas.filter( (_,index) => index<= editedIndex )
					.reduce( (acc, item) => acc + parseFloat(item.monto), 0 )

					let montoRestante = (parseFloat(this.fechas[0].total) - sumaAnteriores - descuento) / cantidadFechasABalancear;

					for(let i=editedIndex+1; i<this.fechas.length; i++)
						this.fechas[i].monto = montoRestante.toFixed(2)
						
				}
			}
		},
		async guardar() {
			if(!this.pacienteElegido.id) {
				alertify.notify('<i class="fa-solid fa-bomb"></i> Seleccione un paciente', 'danger', 10);
				return false;
			}
			if(!this.membresia.tipo) {
				alertify.notify('<i class="fa-solid fa-bomb"></i> Seleccione un paquete válido', 'danger', 10);
				return false;
			}
			if (this.membresia.cuotas <= 0){
				alertify.notify('<i class="fa-solid fa-bomb"></i> El número de cuotas mínimo debe ser 1', 'danger', 10);
				return false;
			}
			if (!this.membresia.fin){
				alertify.notify('<i class="fa-solid fa-bomb"></i> Ingrese el último día del paquete', 'danger', 10);
				return false;
			}

			if(this.membresia.descuento >0 && this.comentarios ==''){
				alertify.notify('<i class="fa-solid fa-bomb"></i> Debe agregar un motivo por el descuento', 'danger', 10);
				return false;
			}else{
				this.comentarios = (this.membresia.descuento >0) ? 'Descuento por: S/ ' + this.membresia.descuento + ' '+ this.comentarios: this.comentarios
			}
				
			this.guardando = true;

			let nombreMembresiaSeleccionada = '';
			let pkg = this.precios.find(p => p.id == this.membresia.tipo);
			if (pkg) nombreMembresiaSeleccionada = pkg.descripcion;

			let datos = new FormData();
			datos.append('idPaciente', this.pacienteElegido.id)
			datos.append('customer', this.pacienteElegido.name+ ' '+ this.pacienteElegido.nombres)
			datos.append('motivo', this.pacienteElegido.id)
			datos.append('membresia', JSON.stringify(this.membresia))
			datos.append('user_id', this.idUsuario)
			datos.append('nombreMembresia', nombreMembresiaSeleccionada )
			datos.append('fechas', JSON.stringify(this.fechas))
			datos.append('fechas_membresias', JSON.stringify(this.sesionesAcumuladas))
			datos.append('comentarios', this.comentarios )
			datos.append('meses', this.cantMeses )
			datos.append('num_sesion', 0 )
			datos.append('descuento', this.membresia.descuento )

			try {
				const servidor = await fetch('/api/guardarMembresia', {
								method: 'POST',
								body: datos,
								headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
				})
				
				const respuesta = await servidor.json();
				this.guardando = false;
				if (respuesta.mensaje) {
					this.pacienteElegido = {}
					this.fechas = []
					this.$swal({
						title: 'Se guardó el paquete',
						showConfirmButton: false,
						icon:'success',
						timer: 1000
					});
					alertify.notify('<i class="fa-regular fa-calendar-check"></i> Paquete guardado', 'success', 10);
					this.$emit('membresiaGuardada');
				} else {
					alertify.notify('<i class="fa-regular fa-bomb"></i> Hubo un error guardando', 'danger', 10);
				}
			} catch (error) {
				console.error(error);
				this.guardando = false;
				alertify.notify('<i class="fa-regular fa-bomb"></i> Hubo un error de conexión', 'danger', 10);
			}
		},
		async listarProfesionales() {
			await this.axios.get('/api/profesional')
				.then(response => {
					this.doctores = response.data;
					this.listarhorario();
				})
		},
		async listarhorario() {
			let id = this.doctorSeleccionado;

			await this.axios.get(`/api/horario/${id}`)
				.then(res => {
					this.horarios = res.data.schedulesInvalid;
					this.horariosAll = res.data.schedules;
					this.hoursProfessional = this.horarios;

					this.emitSchedule(this.nuevaFecha.fecha);

					this.schedulesInvalid = []
					this.hoursProfessional.forEach(el => {
						this.schedulesInvalid.push(el.schedule_id)
					});
				})
				.catch(err => {
					console.error(err)
				})
		},

		emitSchedule(info = this.nuevaFecha.fecha) {
			this.horarios = []

			let arraySchedulesInvalid = []
			this.hoursProfessional.forEach(el => {
				if (!arraySchedulesInvalid.includes(el.schedule_id)) {
					arraySchedulesInvalid.push(el.schedule_id)
				}
			})

			let dayIndex = parseInt(moment(info).format('d')) - 1;
			if (dayIndex === -1) dayIndex = 6;
			let targetDay = this.dayWeek[dayIndex];

			this.horariosAll.forEach(el => {
				if (el.active !== 0 && el.day && targetDay && el.day.toLowerCase() === targetDay.toLowerCase()) {
					if (el.date && el.date !== info) {
						return;
					}
					if (arraySchedulesInvalid.includes(el.id)) {
						// Hay cita
						if (el.appointments.find(el => el.date === info && el.status != 3) ? true : false) {
						} else {
							this.horarios.push(el)
						}
					} else {
						// No hay cita
						this.horarios.push(el)
					}
				}
			})
		},
		fechaLatam(fecha) { return moment(fecha).format('DD/MM/YYYY'); },
		horaLatam1(horita) { return moment(horita, 'HH:mm:ss').format('hh:mm') },
		horaLatam2(horita) { return moment(horita, 'HH:mm:ss').format('hh:mm a') },
		notifica(){ console.info('notificado');}
	},
	computed: {
		descripcionPaqueteElegido() {
			const paquete = this.precios.find(x => x.id == this.membresia.tipo);
			return paquete ? paquete.descripcion : '';
		},
		mostrarPrecio() { 
			const nuevos = this.precios.find(x => x.id == this.membresia.tipo)
			return nuevos ? parseFloat(nuevos.nuevos).toFixed(2) : 0;
		},
		subTotal(){
			if (this.membresia.cuotas == '1') {
				return this.membresia.precio;
			}else{
				const sum = this.fechas.reduce( (acc, item) => {return acc + parseFloat(item.monto)} ,0)
				return sum.toFixed(2)
			}
		},
		cuentaMes() {
			moment.locale('es')
			return moment(this.membresia.fin).fromNow()
		},
		cantSesiones() { 
			const precio = this.precios.find(x => x.id == this.membresia.tipo)
			return precio ? precio.sesiones :''
		},
		cantMeses() { 
			const precio = this.precios.find(x => x.id == this.membresia.tipo)
			return precio ? precio.meses : 0
		},
		
	},
	mounted() {
		this.preciosMembresias();
		this.listarProfesionales();
		this.$on('alertaSimple', this.notifica())
	}
}
</script>
<style scoped>
.card-paquete-selected {
	background-color: #f0f7ff !important;
	box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
}
.cursor-pointer {
	cursor: pointer;
}
.transition-all {
	transition: all 0.2s ease-in-out;
}
</style>
