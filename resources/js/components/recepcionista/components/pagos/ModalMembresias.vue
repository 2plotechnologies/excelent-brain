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
									 @click="seleccionarTipo('sesiones')">
									<div class="card-body text-center py-3">
										<i class="fa-solid fa-cube fs-4 mb-2" :class="selectedTipoPaquete === 'sesiones' ? 'text-primary' : 'text-muted'"></i>
										<div class="fw-medium" :class="selectedTipoPaquete === 'sesiones' ? 'text-primary' : 'text-dark'">Por Sesiones</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedTipoPaquete === 'tiempo' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarTipo('tiempo')">
									<div class="card-body text-center py-3">
										<i class="fa-solid fa-stopwatch fs-4 mb-2" :class="selectedTipoPaquete === 'tiempo' ? 'text-primary' : 'text-muted'"></i>
										<div class="fw-medium" :class="selectedTipoPaquete === 'tiempo' ? 'text-primary' : 'text-dark'">Por Tiempo</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedTipoPaquete === 'otros' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarTipo('otros')">
									<div class="card-body text-center py-3">
										<i class="fa-solid fa-box-open fs-4 mb-2" :class="selectedTipoPaquete === 'otros' ? 'text-primary' : 'text-muted'"></i>
										<div class="fw-medium" :class="selectedTipoPaquete === 'otros' ? 'text-primary' : 'text-dark'">Otros Paquetes</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Especialidad -->
					<div class="mb-4" v-if="selectedTipoPaquete">
						<label class="form-label text-secondary small fw-medium mb-2">Especialidad del Paquete <span class="text-danger">*</span></label>
						<div class="row g-3">
							<div class="col-md-3">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedEspecialidadPaquete === 'psicologica' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarEspecialidad('psicologica')">
									<div class="card-body text-center py-3">
										<div class="fw-medium" :class="selectedEspecialidadPaquete === 'psicologica' ? 'text-primary' : 'text-dark'">Psicológica</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedEspecialidadPaquete === 'psiquiatrica' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarEspecialidad('psiquiatrica')">
									<div class="card-body text-center py-3">
										<div class="fw-medium" :class="selectedEspecialidadPaquete === 'psiquiatrica' ? 'text-primary' : 'text-dark'">Psiquiátrica</div>
									</div>
								</div>
							</div>
							<div class="col-md-3" v-if="selectedTipoPaquete === 'otros'">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedEspecialidadPaquete === 'hibrida' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarEspecialidad('hibrida')">
									<div class="card-body text-center py-3">
										<div class="fw-medium" :class="selectedEspecialidadPaquete === 'hibrida' ? 'text-primary' : 'text-dark'">Híbrida</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedEspecialidadPaquete === 'otros' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarEspecialidad('otros')">
									<div class="card-body text-center py-3">
										<div class="fw-medium" :class="selectedEspecialidadPaquete === 'otros' ? 'text-primary' : 'text-dark'">Otros</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Público (Solo para Sesiones y Tiempo) -->
					<div class="mb-4" v-if="(selectedTipoPaquete === 'sesiones' || selectedTipoPaquete === 'tiempo') && selectedEspecialidadPaquete">
						<label class="form-label text-secondary small fw-medium mb-2">Público <span class="text-danger">*</span></label>
						<div class="row g-3">
							<div class="col-md-6">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedPublicoPaquete === 'adultos' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarPublico('adultos')">
									<div class="card-body text-center py-3">
										<div class="fw-medium" :class="selectedPublicoPaquete === 'adultos' ? 'text-primary' : 'text-dark'">Adultos</div>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedPublicoPaquete === 'ninos' ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarPublico('ninos')">
									<div class="card-body text-center py-3">
										<div class="fw-medium" :class="selectedPublicoPaquete === 'ninos' ? 'text-primary' : 'text-dark'">Niños</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Opciones de Subtipo -->
					<div class="mb-4" v-if="mostrarOpciones">
						<label class="form-label text-secondary small fw-medium mb-2">
							Opción / Duración <span class="text-danger">*</span>
						</label>
						
						<div class="row g-3" v-if="opcionesDisponibles.length > 0">
							<div class="col-md-6 col-lg-4" v-for="opcion in opcionesDisponibles" :key="opcion">
								<div class="card h-100 cursor-pointer transition-all" 
									 :class="selectedSubtipoPaquete === opcion ? 'border-primary card-paquete-selected' : 'border-secondary border-opacity-25'"
									 @click="seleccionarSubtipo(opcion)">
									<div class="card-body text-center py-3">
										<div class="fw-bold mb-1" :class="selectedSubtipoPaquete === opcion ? 'text-primary' : 'text-dark'">
											{{ opcion }}<span v-if="selectedTipoPaquete === 'sesiones' && !isNaN(Number(opcion))"> sesiones</span>
										</div>
										<div class="small text-muted fw-medium" v-if="obtenerPrecioSubtipo(opcion)">S/ {{ obtenerPrecioSubtipo(opcion) }}</div>
									</div>
								</div>
							</div>
						</div>
						
						<div class="alert alert-light border mt-2 text-center text-muted" v-else>
							<i class="fa-solid fa-folder-open mb-2 d-block fs-4 text-secondary opacity-50"></i>
							No hay paquetes configurados para esta selección actualmente.
						</div>
						
						<!-- Alerta de no encontrado -->
						<div class="alert alert-warning mt-3 py-2 small d-flex align-items-center" v-if="!membresia.tipo && selectedSubtipoPaquete">
							<i class="fa-solid fa-triangle-exclamation me-2"></i> No se encontró un precio configurado para esta combinación en la base de datos.
						</div>
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
												<input class="form-check-input" type="checkbox" :id="'pago' + index" v-model="fechas[index].pago" @change="alCambiarPago(fechas[index], index)">
												<label class="form-check-label small" :for="'pago' + index" style="font-size: 0.75rem;">¿Pagado?</label>
											</div>
										</div>
										<div class="position-relative">
											<input type="date" class="form-control bg-white" v-model="fechas[index].dia">
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
			sesionesAcumuladas:[], idHorario:'', comentarios:'',
			selectedTipoPaquete: '', selectedEspecialidadPaquete: '', selectedPublicoPaquete: '', selectedSubtipoPaquete: '', guardando: false,
			monedas: []
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
		async cargarMonedas() {
			try {
				const response = await this.axios.get("/api/listarMonedas");
				this.monedas = response.data;
			} catch (error) {
				console.error("Error cargando monedas:", error);
			}
		},
		async alCambiarPago(fecha, index) {
			if (fecha.pago) {
				if (!this.monedas || this.monedas.length === 0) {
					await this.cargarMonedas();
				}
				if (!this.monedas || this.monedas.length === 0) {
					this.monedas = [
						{ id: 1, tipo: 'Efectivo' },
						{ id: 2, tipo: 'Depósito bancario' },
						{ id: 4, tipo: 'Yape' },
						{ id: 10, tipo: 'Aplicativo Plin' }
					];
				}
				// Opciones para el select de métodos de pago
				let opcionesMetodos = '';
				this.monedas.forEach(m => {
					const selectedAttr = m.id == 1 ? 'selected' : '';
					opcionesMetodos += `<option value="${m.id}">${m.tipo}</option>`;
				});

				const { value: formValues } = await this.$swal({
					title: 'Registrar Pago de Cuota',
					target: '#modalMembresias',
					html:
						`<div class="text-start mb-3">` +
						`  <p class="mb-2">Cuota: <strong>#${index + 1}</strong></p>` +
						`  <p class="mb-3">Monto a pagar: <strong class="text-success fs-5">S/ ${parseFloat(fecha.monto).toFixed(2)}</strong></p>` +
						`  <div class="mb-3">` +
						`    <label class="form-label small fw-bold text-muted text-uppercase mb-1">Método de Pago <span class="text-danger">*</span></label>` +
						`    <select id="swal-pago-metodo" class="form-select">${opcionesMetodos}</select>` +
						`  </div>` +
						`  <div class="mb-3">` +
						`    <label class="form-label small fw-bold text-muted text-uppercase mb-1">Motivo / Concepto <span class="text-danger">*</span></label>` +
						`    <input id="swal-pago-motivo" class="form-control" type="text" value="Pago de cuota #${index + 1}">` +
						`  </div>` +
						`  <div class="mb-3">` +
						`    <label class="form-label small fw-bold text-muted text-uppercase mb-1">Número de Operación <span class="text-muted">(Yape, Plin, Transferencia, etc.)</span></label>` +
						`    <input id="swal-pago-voucher" class="form-control" type="text" placeholder="Ej: 123456">` +
						`  </div>` +
						`</div>`,
					focusConfirm: false,
					showCancelButton: true,
					confirmButtonText: '<i class="fas fa-hand-holding-usd me-1"></i> Confirmar Pago',
					cancelButtonText: 'Cancelar',
					preConfirm: () => {
						const metodoId = document.getElementById('swal-pago-metodo').value;
						const motivo = document.getElementById('swal-pago-motivo').value;
						const voucher = document.getElementById('swal-pago-voucher').value;
						if (!metodoId) {
							this.$swal.showValidationMessage('Debe seleccionar un método de pago');
							return false;
						}
						if (!motivo) {
							this.$swal.showValidationMessage('Debe ingresar un motivo/concepto');
							return false;
						}
						return { metodoId: parseInt(metodoId), motivo: motivo, voucher: voucher };
					}
				});

				if (formValues) {
					this.$set(fecha, 'metodo_pago_id', formValues.metodoId);
					this.$set(fecha, 'motivo', formValues.motivo);
					this.$set(fecha, 'voucher', formValues.voucher);
				} else {
					fecha.pago = false;
				}
			} else {
				// Si se desmarca, limpiar los campos de pago
				this.$delete(fecha, 'metodo_pago_id');
				this.$delete(fecha, 'motivo');
				this.$delete(fecha, 'voucher');
			}
		},
		limpiarFormulario() {
			this.txtBusqueda = '';
			this.pacientes = [];
			this.indexGlobal = null;
			this.pacienteElegido = {};
			this.membresia = { 
				tipo: null, 
				cuotas: 1, 
				precio: 0, 
				fin: moment().add(1, 'month').format('YYYY-MM-DD'), 
				descuento: 0, 
				conDescuento: false 
			};
			this.fechas = [];
			this.activaResultados = false;
			this.nuevaFecha = { fecha: moment().format('YYYY-MM-DD') };
			this.sesionesAcumuladas = [];
			this.idHorario = '';
			this.comentarios = '';
			this.selectedTipoPaquete = '';
			this.selectedEspecialidadPaquete = '';
			this.selectedPublicoPaquete = '';
			this.selectedSubtipoPaquete = '';
		},
		calcularFechas() {
			this.fechas = [];
			if (!this.membresia.tipo) return;
			const precioBase = parseFloat(this.mostrarPrecio) || 0;
			const descuento = parseFloat(this.membresia.descuento) || 0;
			const precioTotal = parseFloat(Math.max(0, precioBase - descuento).toFixed(2));
			this.membresia.precio = precioBase;
			
			const numCuotas = parseInt(this.membresia.cuotas) || 1;
			var hoy = moment();
			
			for (let i = 0; i < numCuotas; i++) {
				this.fechas.push({
					dia: hoy.format('YYYY-MM-DD'),
					monto: '0.00',
					total: precioTotal,
					pago: false
				});
				hoy = moment(hoy).add(1, 'month');
			}
			this.membresia.fin = this.membresia.tipo==47 ?  moment().add(1,'year').format('YYYY-MM-DD') : moment().format('YYYY-MM-DD');
			
			// Balancear inicialmente
			if (numCuotas === 1) {
				this.fechas[0].monto = precioTotal.toFixed(2);
			} else {
				const baseCuota = parseFloat((precioTotal / numCuotas).toFixed(2));
				let suma = 0;
				for (let i = 0; i < numCuotas - 1; i++) {
					this.fechas[i].monto = baseCuota.toFixed(2);
					suma += baseCuota;
				}
				const ultimaCuota = parseFloat((precioTotal - suma).toFixed(2));
				this.fechas[numCuotas - 1].monto = ultimaCuota.toFixed(2);
			}
		},
		seleccionarTipo(tipo) {
			if (this.selectedTipoPaquete !== tipo) {
				this.selectedTipoPaquete = tipo;
				this.selectedEspecialidadPaquete = '';
				this.selectedPublicoPaquete = '';
				this.selectedSubtipoPaquete = '';
				this.evaluarPaqueteSeleccionado();
			}
		},
		seleccionarEspecialidad(especialidad) {
			if (this.selectedEspecialidadPaquete !== especialidad) {
				this.selectedEspecialidadPaquete = especialidad;
				this.selectedPublicoPaquete = '';
				this.selectedSubtipoPaquete = '';
				this.evaluarPaqueteSeleccionado();
			}
		},
		seleccionarPublico(publico) {
			if (this.selectedPublicoPaquete !== publico) {
				this.selectedPublicoPaquete = publico;
				this.selectedSubtipoPaquete = '';
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
				if (this.selectedEspecialidadPaquete && this.selectedPublicoPaquete && this.selectedSubtipoPaquete) buscar = true;
			} else if (this.selectedTipoPaquete === 'otros') {
				if (this.selectedEspecialidadPaquete && this.selectedSubtipoPaquete) buscar = true;
			}
			
			if (buscar) {
				let paqueteEncontrado = this.precios.find(p => 
					p.paquete_tipo === this.selectedTipoPaquete &&
					p.paquete_especialidad === this.selectedEspecialidadPaquete &&
					(this.selectedTipoPaquete === 'otros' || p.paquete_publico === this.selectedPublicoPaquete || p.paquete_publico === 'ambos' || !p.paquete_publico) &&
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
			let paquete = this.precios.find(p => 
				p.paquete_tipo === this.selectedTipoPaquete &&
				p.paquete_especialidad === this.selectedEspecialidadPaquete &&
				(this.selectedTipoPaquete === 'otros' || p.paquete_publico === this.selectedPublicoPaquete || p.paquete_publico === 'ambos' || !p.paquete_publico) &&
				p.paquete_subtipo === subtipo
			);
			return paquete ? parseFloat(paquete.nuevos).toFixed(2) : null;
		},
		balancearMontos(editedIndex) {
			const precioBase = parseFloat(this.mostrarPrecio) || 0;
			const descuento = parseFloat(this.membresia.descuento) || 0;
			const precioTotal = parseFloat(Math.max(0, precioBase - descuento).toFixed(2));
			const numCuotas = this.fechas.length;
			
			if (numCuotas <= 1) return;
			
			// Sumar las cuotas hasta la editada inclusive
			let sumaAnteriores = 0;
			for (let i = 0; i <= editedIndex; i++) {
				sumaAnteriores += parseFloat(this.fechas[i].monto) || 0;
			}
			
			let cantidadFechasABalancear = numCuotas - (editedIndex + 1);
			if (cantidadFechasABalancear > 0) {
				let montoRestanteTotal = precioTotal - sumaAnteriores;
				let baseRestante = parseFloat((montoRestanteTotal / cantidadFechasABalancear).toFixed(2));
				let suma = sumaAnteriores;
				
				for (let i = editedIndex + 1; i < numCuotas - 1; i++) {
					this.fechas[i].monto = baseRestante.toFixed(2);
					suma += baseRestante;
				}
				
				// El restante se asigna a la última cuota para evitar pérdida de centavos
				let ultimaMonto = parseFloat((precioTotal - suma).toFixed(2));
				this.fechas[numCuotas - 1].monto = ultimaMonto.toFixed(2);
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

			console.log('--- ENVIANDO MEMBRESÍA DESDE EL FRONTEND ---');
			console.log('idPaciente:', this.pacienteElegido.id);
			console.log('membresia:', this.membresia);
			console.log('fechas:', this.fechas);

			try {
				const servidor = await fetch('/api/guardarMembresia', {
								method: 'POST',
								body: datos,
								headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
				})
				
				const respuesta = await servidor.json();
				this.guardando = false;
				if (respuesta.mensaje) {
					this.limpiarFormulario();
					$('#modalMembresias').modal('hide');
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
		mostrarOpciones() {
			if (this.selectedTipoPaquete === 'otros' && this.selectedEspecialidadPaquete) return true;
			if ((this.selectedTipoPaquete === 'sesiones' || this.selectedTipoPaquete === 'tiempo') && this.selectedEspecialidadPaquete && this.selectedPublicoPaquete) return true;
			return false;
		},
		opcionesDisponibles() {
			if (!this.selectedTipoPaquete || !this.selectedEspecialidadPaquete) return [];
			if (this.selectedTipoPaquete !== 'otros' && !this.selectedPublicoPaquete) return [];
			
			// Filtrar todos los precios que coincidan con la combinación actual
			let paquetes = this.precios.filter(p => 
				p.paquete_tipo === this.selectedTipoPaquete &&
				p.paquete_especialidad === this.selectedEspecialidadPaquete &&
				(this.selectedTipoPaquete === 'otros' || p.paquete_publico === this.selectedPublicoPaquete || p.paquete_publico === 'ambos' || !p.paquete_publico)
			);
			
			// Extraer los subtipos únicos ignorando nulos/indefinidos
			let subtipos = [...new Set(paquetes.map(p => p.paquete_subtipo))].filter(Boolean);
			
			// Ordenamiento inteligente
			subtipos.sort((a, b) => {
				let numA = parseInt(a);
				let numB = parseInt(b);
				if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
				return String(a).localeCompare(String(b));
			});
			
			return subtipos;
		}
		
	},
	mounted() {
		this.preciosMembresias();
		this.cargarMonedas();
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
