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
					
					<!-- Paciente -->
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
						<label class="form-label text-secondary small fw-medium mb-1">Especialidad del Paquete <span class="text-danger">*</span></label>
						<select class="form-select" id="sltMembresia" v-model="membresia.tipo" @change="calcularFechas()">
							<option v-for="precio in precios" :value="precio.id">{{ precio.descripcion }}</option>
						</select>
						
						<!-- Card estilo imagen cuando se selecciona -->
						<div class="row mt-3" v-if="membresia.tipo">
							<div class="col-md-4">
								<div class="card border-primary shadow-sm h-100" style="background-color: #f0f7ff;">
									<div class="card-body text-center py-3 d-flex flex-column justify-content-center">
										<div class="text-primary fw-medium mb-1">{{ descripcionPaqueteElegido }}</div>
										<div class="small text-muted" v-if="cantSesiones">S/ {{ (mostrarPrecio / cantSesiones).toFixed(2) }}/sesión</div>
									</div>
								</div>
							</div>
							<div class="col-md-4" v-if="cantSesiones">
								<div class="card border-primary shadow-sm h-100" style="background-color: #f0f7ff;">
									<div class="card-body text-center py-3 d-flex flex-column justify-content-center">
										<div class="text-primary fw-bold fs-5 mb-0">{{ cantSesiones }}</div>
										<div class="small text-muted mt-1">S/ {{ mostrarPrecio }} en total</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Profesional -->
					<div class="mb-4">
						<label class="form-label text-secondary small fw-medium mb-1">Profesional <span class="text-danger">*</span></label>
						<select class="form-select" id="sltDoctor" v-model="doctorSeleccionado" @change="listarhorario()">
							<option value="-1">Seleccione un profesional</option>
							<option v-for="doctor in doctores" :value="doctor.id">{{ doctor.nombre }}</option>
						</select>
					</div>

					<!-- Precio y Cuotas -->
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

					<!-- Programación de Sesiones -->
					<div class="mt-4 border-top pt-4">
						<h6 class="fw-bold mb-3 d-flex align-items-center text-secondary">
							<i class="fa-solid fa-clipboard-list me-2"></i> Programación de Sesiones
						</h6>
						<div class="row g-3" v-show="sesionesAcumuladas.length < cantSesiones">
							<div class="col-12">
								<div class="alert alert-info py-2 small mb-0 d-flex align-items-center">
									<i class="fas fa-info-circle me-2"></i> Rellene los datos indispensables para autorrellenar las citas.
								</div>
							</div>
							<div class="col-md-6">
								<label class="form-label small text-muted mb-1">Seleccionar fecha</label>
								<input type="date" class="form-control" v-model="nuevaFecha.fecha" @change="listarhorario()">
							</div>
							<div class="col-md-6">
								<label class="form-label small text-muted mb-1">Horario</label>
								<select class="form-select" id="sltProfesionalHorarioID" v-model="idHorario">
									<option value="" disabled selected>Selecciona un horario</option>
									<option v-for="hora in horarios" :key="hora.id" :value="hora.id">
										{{ horaLatam1(hora.check_time) }} - {{ horaLatam2(hora.departure_date) }}
									</option>
								</select>
							</div>
							<div class="col-12 text-end mt-2">
								<button class="btn btn-sm btn-outline-success" @click="agregarUnaCita()">
									<i class="far fa-arrow-alt-circle-down me-1"></i> Agregar cita
								</button>
							</div>
						</div>

						<div class="mt-3" v-if="sesionesAcumuladas.length > 0">
							<label class="form-label small text-muted fw-medium">Sesiones programadas ({{sesionesAcumuladas.length}} de {{cantSesiones}})</label>
							<div class="table-responsive">
								<table class="table table-sm table-hover align-middle border">
									<thead class="table-light text-muted small">
										<tr>
											<th class="fw-medium px-3">N°</th>
											<th class="fw-medium">Profesional</th>
											<th class="fw-medium">Fecha y Hora</th>
											<th class="fw-medium text-end px-3">Acción</th>
										</tr>
									</thead>
									<tbody class="small">
										<tr v-for="(sesion, index) in sesionesAcumuladas">
											<td class="px-3">{{ index + 1 }}</td>
											<td>{{ sesion.doctor }}</td>
											<td>{{ fechaLatam(sesion.fecha) }} <br><span class="text-muted">{{ sesion.hora }}</span></td>
											<td class="text-end px-3">
												<button class="btn btn-sm btn-light text-danger border-0" @click="borrarSesionAcumulada(index)"><i class="fas fa-times"></i></button>
											</td>
										</tr>
									</tbody>
								</table>
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
					<button type="button" class="btn btn-primary px-4" @click="guardar()">
						<i class="fa-solid fa-cube me-2"></i> Crear Paquete
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
			membresia: { tipo: 15, cuotas: 1, precio: 0, fin: moment().add(1, 'month').format('YYYY-MM-DD'), descuento:0, conDescuento:false },
			fechas: [], activaResultados: false, nuevaFecha: { fecha: moment().format('YYYY-MM-DD') },
			doctores: [], horarios: [], horariosAll: [], hoursProfessional: [], schedulesInvalid: {}, horasSolas: [], horasMalas: [], dayWeek: { 0: 'Lunes', 1: "Martes", 2: "Miercoles", 3: "Jueves", 4: "Viernes", 5: "Sabado", 6: "Domingo", }, doctorSeleccionado: -1, sesionesAcumuladas:[], idHorario:'', comentarios:'',
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
		agregarUnaCita(){
			
			var selec = document.getElementById("sltDoctor");
			var selectHora = document.getElementById("sltProfesionalHorarioID");

			if( selec.value>0 && selectHora.value>0)
				this.sesionesAcumuladas.push({ idHorario: this.idHorario, idProfesional: this.doctorSeleccionado, fecha: this.nuevaFecha.fecha, idPaciente: this.pacienteElegido.id, doctor: selec.options[selec.selectedIndex].text, hora: selectHora.options[selectHora.selectedIndex].text })
			else
				alertify.notify('<i class="fas fa-skull-crossbones"></i> Hay un dato no rellenado', 'danger', 10)

		},
		calcularFechas() {
			this.fechas = [];
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
		borrarSesionAcumulada(index){
			this.sesionesAcumuladas.splice(index,1)
		},
		async guardar() {
			if(!this.pacienteElegido.id) {
				alertify.notify('<i class="fa-solid fa-bomb"></i> Seleccione un paciente', 'danger', 10);
				return false;
			}
			if (this.membresia.cuotas <= 0){
				alertify.notify('<i class="fa-solid fa-bomb"></i> El número de cuotas mínimo debe ser 1', 'danger', 10);
				return false;
			}
			if (!this.membresia.fin){
				alertify.notify('<i class="fa-solid fa-bomb"></i> Ingrese el último día de la memebresía', 'danger', 10);
				return false;
			}

			if(this.membresia.descuento >0 && this.comentarios ==''){
				alertify.notify('<i class="fa-solid fa-bomb"></i> Debe agregar un motivo por el descuento', 'danger', 10);
				return false;
			}else{
				this.comentarios = (this.membresia.descuento >0) ? 'Descuento por: S/ ' + this.membresia.descuento + ' '+ this.comentarios: this.comentarios
			}
				
			var mem = document.getElementById("sltMembresia");

			let datos = new FormData();
			datos.append('idPaciente', this.pacienteElegido.id)
			datos.append('customer', this.pacienteElegido.name+ ' '+ this.pacienteElegido.nombres)
			datos.append('motivo', this.pacienteElegido.id)
			datos.append('membresia', JSON.stringify(this.membresia))
			datos.append('user_id', this.idUsuario)
			datos.append('nombreMembresia', mem.options[mem.selectedIndex].text )
			datos.append('fechas', JSON.stringify(this.fechas))
			datos.append('fechas_membresias', JSON.stringify(this.sesionesAcumuladas))
			datos.append('comentarios', this.comentarios )
			datos.append('meses', this.cantMeses )
			datos.append('num_sesion', 0 )
			datos.append('descuento', this.membresia.descuento )

			const servidor = await fetch('/api/guardarMembresia', {
							method: 'POST',
							body: datos,
							headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
			})
			
			const respuesta = await servidor.json();
			if (respuesta.mensaje) {
				this.pacienteElegido = {}
				this.fechas = []
				this.$swal({
					title: 'Se guardó la membresía',
					showConfirmButton: false,
					icon:'success',
					timer: 1000
				});
				alertify.notify('<i class="fa-regular fa-calendar-check"></i> Membresía guardada', 'success', 10);
				this.$emit('membresiaGuardada');
			} else
				alertify.notify('<i class="fa-regular fa-bomb"></i> Hubo un error guardando', 'danger', 10);
			
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

			this.horariosAll.forEach(el => {
				if (el.day === this.dayWeek[new Date(info).getDay()]) {
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
<style></style>
