<template>
	<div class="container-fluid p-2">
		<!-- Controles superiores -->
		<div class="row mb-3 gx-3 align-items-center">
			<div class="col-auto"><input type="date" class="form-control shadow-sm font-weight-bold" v-model="fecha" @change="obtenerHorarios()"></div>
			<div class="col-auto"><button class="btn btn-outline-primary mx-1 border-0 font-weight-bold" @click="verHorariosAyer()"><i class="fas fa-chevron-left"></i> Ayer</button></div>
			<div class="col-auto"><button class="btn btn-outline-primary mx-1 border-0 font-weight-bold" @click="verHorariosHoy()"><i class="fa-regular fa-clock"></i> Hoy</button></div>
			<div class="col-auto"><button class="btn btn-outline-primary mx-1 border-0 font-weight-bold" @click="verHorariosMañana()">Mañana <i class="fas fa-chevron-right"></i></button></div>
			<div class="col-auto"><button class="btn btn-outline-secondary mx-2 border-0" @click="refrescarHorarios()"><i class="fas fa-sync"></i> Actualizar</button></div>
			
			<div class="col-auto ms-auto d-flex align-items-center gap-3">
				<!-- Leyendas de estados -->
				<div class="d-flex align-items-center text-muted small font-weight-bold" style="gap: 15px;">
					<span class="d-flex align-items-center gap-1">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-warning"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
						En espera
					</span>
					<span class="d-flex align-items-center gap-1">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-info"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
						En atención
					</span>
					<span class="d-flex align-items-center gap-1">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-success"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
						Atendido
					</span>
				</div>
				<button class="btn btn-primary font-weight-bold shadow-sm" data-bs-toggle="modal" data-bs-target="#modalNuevaCita" @click="prepararNuevaCitaManual()"><i class="fas fa-plus"></i> Nueva Cita</button>
				<router-link to="/recepcionista/paquetes" class="btn btn-primary font-weight-bold shadow-sm"><i class="fas fa-box-open"></i> Paquetes</router-link>
			</div>
		</div>

		<!-- Filtros por profesión (Opcional, si existen en los datos) -->
		<div class="d-flex mb-3 gap-2 flex-wrap align-items-center">
			<span class="text-muted small font-weight-bold me-1">Filtrar:</span>
			<button class="btn btn-sm rounded-pill font-weight-bold" 
							:class="filtroActual == 'Todos' ? 'btn-primary' : 'btn-light text-muted border'" 
							@click="filtroActual = 'Todos'">Todos</button>
			<button v-for="prof in profesionesUnicas" :key="prof" class="btn btn-sm rounded-pill font-weight-bold" 
							:class="filtroActual == prof ? 'btn-primary' : 'btn-light text-muted border'" 
							@click="filtroActual = prof">{{ prof }}</button>
		</div>

		<!-- Contenedor del Calendario Grid -->
		<div class="calendar-wrapper bg-white shadow-sm border" style="border-radius: 8px; height: calc(100vh - 170px); overflow-y: auto; overflow-x: hidden;">
			
			<div class="calendar-header d-flex border-bottom bg-light" style="border-top-left-radius: 8px; border-top-right-radius: 8px;">
				<!-- Cabecera Esquina (Eje Y) -->
				<div class="time-axis-header text-center py-3 border-right text-muted font-weight-bold" style="min-width: 60px; border-top-left-radius: 8px;">
					<i class="far fa-clock"></i>
				</div>
				<!-- Cabecera Doctores (Eje X scrolleable) -->
				<div class="doctors-header-container d-flex flex-grow-1" ref="headerScroll"
					style="overflow-x: auto; overflow-y: hidden; min-width: 0;">
					<!-- Estado: cargando -->
					<div v-if="cargando" key="header-cargando" class="py-3 px-3 w-100 text-center text-primary align-self-center my-4">
						<i class="fas fa-circle-notch fa-spin fa-2x mb-2"></i><br>
						<span class="font-weight-bold">Obteniendo agenda...</span>
					</div>
					<!-- Estado: sin profesionales -->
					<div v-else-if="doctoresFiltrados.length === 0" key="header-vacio" class="py-3 px-3 w-100 text-center text-muted align-self-center my-4 font-weight-bold">
						No hay profesionales para mostrar el día de hoy.
					</div>
					<!-- Estado: profesionales disponibles -->
					<template v-else>
						<div class="doctor-header text-center py-2 border-right text-dark" v-for="doctor in doctoresFiltrados" :key="'h-'+doctor.id">
							<div>
								<span class="badge badge-pill mt-1" :style="'background-color: ' + stringToColor(doctor.name)"> &nbsp; </span>
								<strong class="mx-1">{{doctor.profession}}</strong>
							</div>
							<div class="font-weight-bold text-truncate px-1" :title="doctor.name">{{doctor.name.split(' ')[0]}} {{doctor.name.split(' ')[1] || ''}}</div>
							<small class="text-muted">{{ citasPorDoctor(doctor.id) }} citas</small>
						</div>
					</template>
				</div>
			</div>

			<!-- Cuerpo del Calendario -->
			<div class="calendar-body d-flex" @scroll="syncScroll">
				<!-- Eje Y Horas -->
				<div class="time-axis border-right bg-white" style="min-width: 60px;">
					<div class="time-slot-label text-center text-muted small position-relative" v-for="hora in horasGrid" :key="'lbl-'+hora">
						<span style="position: absolute; top: -10px; right: 8px; background: white; padding: 0 4px; z-index: 2;">{{ hora }}:00</span>
					</div>
				</div>
				<!-- Columnas de doctores locales -->
				<div class="doctors-body-container d-flex flex-grow-1"
					style="overflow-x: auto; overflow-y: hidden; position: relative; min-width: 0;"
					ref="bodyScroll"
					@scroll="syncScrollX">
					<!-- Malla de fondo (grid lines) -->
					<div class="grid-lines-container" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; z-index: 0;">
						<div class="grid-line border-bottom" v-for="hora in horasGrid" :key="'gl-'+hora"></div>
					</div>

					<div class="doctor-column border-right position-relative" v-for="(doctor, dIndex) in doctoresFiltrados" :key="'col-'+doctor.id" style="z-index: 1;">
						
						<!-- Slots Libres (Clickeables para crear cita) -->
						<div v-for="(horaFree, hIndex) in getHorasLibres(doctor.id)" :key="'free-'+horaFree.id" 
								class="free-slot" 
								:style="slotStyle(horaFree.check_time, horaFree.departure_date)"
								@click="crearCitaEnSlot(doctor, horaFree)" 
								data-bs-toggle="modal" data-bs-target="#modalNuevaCita"
								:title="'Nueva cita: ' + formatHora(horaFree.check_time) + ' - ' + formatHora(horaFree.departure_date)"
								@mouseover="mostrarTooltip($event, horaFree, doctor, true)"
								@mouseleave="ocultarTooltip"
								@mousemove="moverTooltip($event)">
						</div>

						<!-- Slots Ocupados (Citas) -->
						<div v-for="(horaOcup, hIndex) in getHorasOcupadas(doctor.id)" :key="'ocup-'+horaOcup.id+'-pay-'+(horaOcup.payment ? horaOcup.payment.pay_status : 0)" 
								class="booked-slot shadow-sm p-1" 
								:style="[slotStyle(horaOcup._computed_start, horaOcup._computed_end, horaOcup), { borderLeft: isBlocked(horaOcup) ? '4px solid #dc3545' : '4px solid ' + stringToColor(doctor.name) }]"
								@click="abrirDetallesCita(horaOcup)"
								@mouseover="mostrarTooltip($event, horaOcup, doctor)"
								@mouseleave="ocultarTooltip"
								@mousemove="moverTooltip($event)">
							
							<!-- Blocked Slot View -->
							<div v-if="isBlocked(horaOcup)" class="booked-content h-100 position-relative overflow-hidden d-flex flex-column bg-light" style="background: repeating-linear-gradient(45deg, #f8f9fc, #f8f9fc 10px, #eaecf4 10px, #eaecf4 20px) !important;">
								<div class="d-flex justify-content-between align-items-center w-100">
									<div class="font-weight-bold text-truncate lh-1" style="font-size: 0.75rem; color: #dc3545;">
										<i class="fas fa-ban me-1"></i> Bloqueado
									</div>
								</div>
								<div class="text-dark mt-1 text-truncate font-weight-bold" style="font-size: 0.7rem; line-height: 1.1;">
									{{ horaOcup.recomendation || 'Bloqueo' }}
								</div>
								<div class="text-muted mt-1 text-truncate" style="font-size: 0.65rem; line-height: 1;">
									{{ formatHora(horaOcup._computed_start) }} - {{ formatHora(horaOcup._computed_end) }}
								</div>
							</div>

							<!-- Standard Appointment View -->
							<div v-else class="booked-content h-100 position-relative overflow-hidden d-flex flex-column" :class="bgPorSemaforo(horaOcup)">
								<!-- Primera línea siempre visible: Nombre y Pago -->
								<div class="d-flex justify-content-between align-items-center w-100">
									<div class="font-weight-bold text-truncate lh-1" style="font-size: 0.75rem;">
										<i :class="horaOcup.mode == 1 ? 'far fa-user' : 'fas fa-desktop'"></i> 
										{{ horaOcup.patient.name.split(' ')[0] }} {{ horaOcup.patient.nombres.split(' ')[0] }}
									</div>
									<div class="d-flex align-items-center">
										<!-- Iconos de estado de atención (En espera, En atención, Atendido) -->
										<svg v-if="horaOcup.attention_status === 'atendido' || (!horaOcup.attention_status && horaOcup.status == 5)" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-success me-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
										<svg v-else-if="horaOcup.attention_status === 'atencion' || (!horaOcup.attention_status && horaOcup.status == 2)" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-info me-1"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
										<svg v-else-if="horaOcup.attention_status === 'espera' || (!horaOcup.attention_status && horaOcup.status == 1)" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-warning me-1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
										
										<i class="fas fa-dollar-sign" style="font-size: 0.75rem;" :class="horaOcup.payment && horaOcup.payment.pay_status == 2 ? 'text-success':'text-danger'"></i>
									</div>
								</div>
								
								<!-- Segunda línea: Tiempo (se cortará si no hay alto suficiente) -->
								<div class="text-muted mt-1 text-truncate" style="font-size: 0.65rem; line-height: 1;">
									{{ formatHora(horaOcup._computed_start) }} - {{ formatHora(horaOcup._computed_end) }}
								</div>
							</div>

						</div>

					</div>
				</div>
			</div>

		</div>

		<!-- Tooltip Flotante -->
		<div v-show="tooltipData" class="custom-tooltip shadow-lg p-2 rounded bg-white text-dark border border-secondary" :style="tooltipStyle">
			<div class="font-weight-bold text-uppercase border-bottom pb-1 mb-1" style="font-size: 0.85rem;">{{ tooltipData ? tooltipData.paciente : '' }}</div>
			<div class="small"><i class="far fa-clock"></i> {{ tooltipData ? tooltipData.hora : '' }}</div>
			<div class="small"><i class="fas fa-user-md"></i> {{ tooltipData ? tooltipData.doctor : '' }}</div>
			<div class="small mt-1 px-1 bg-light rounded text-center border font-weight-bold" style="font-size: 0.75rem;">{{ tooltipData ? tooltipData.estado : '' }}</div>
		</div>

		<!-- Modales -->
		<ModalNuevaCita :doctores="doctores" :profesionalElegido="profesionalElegido" :horaElegida="horaElegida" :idUsuario="idUsuario" :fechaElegida='fecha' @actualizarListadoCitas="actualizarListadoCitas" :idSede="idSede"></ModalNuevaCita>
		
		<!-- Nuevo modal de acciones centralizado -->
		<ModalAccionesCita v-if="cita && cita.id" :key="cita.id" :cita="cita" :indiceElegido="indexElegido" :precios="precios"
			idModal="modalAccionesCitaCuaderno"
			targetPago="#pagoModalCuaderno"
			targetEstado="#modalEstadoCuaderno"
			targetInfo="#infoModalCuaderno"
			targetReprog="#reprogModalCuaderno"
			targetIntercambio="#modalIntercambioCuaderno"
			targetRecetas="#recetasModalCuaderno"
			@changeMode="changeMode"
			@openModal="distribuirAperturaModal"
			@intercambiar="intercambiarHorario"
			@eliminar="validarYEliminar"
			@buscarRecetas="buscarRecetas"
			@tiemposEspera="abrirTiemposEspera"
			@actualizar="actualizarListadoCitas"
		/>

    <modal-estado v-if="cita && cita.id" :key="'estado-'+cita.id" :dataCit="cita" :idUsuario="idUsuario" @actualizar="actualizarListadoCitas" idModal="modalEstadoCuaderno"></modal-estado>
    <pago-modal v-if="cita && cita.id" :key="'pago-'+cita.id" :cita="cita" :idUsuario="idUsuario" :idSede="idSede" @actualizarAdelanto="actualizarAdelanto" @actualizar="actualizarListadoCitas" idModal="pagoModalCuaderno"></pago-modal>
		<modal-patient v-if="cita && cita.id" :key="'patient-'+cita.id" :dataCit="cita"></modal-patient>
    <reprog-modal v-if="cita && cita.id" :key="'reprog-'+cita.id" :dataCit="cita" :idUsuario="idUsuario" @ocultarCita="actualizarListadoCitas" idModal="reprogModalCuaderno"></reprog-modal>
		<info-modal v-if="cita && cita.id" :key="'info-'+cita.id" :dataCit="cita" :precios="precios" idModal="infoModalCuaderno"></info-modal>
		<modal-search-patient></modal-search-patient>
		<ModalIntercambio :posibles="posibles" :primero="primero" @actualizar="actualizarListadoCitas" idModal="modalIntercambioCuaderno"></ModalIntercambio>
		
		<modalVerRecetas v-if="cita && cita.id" :key="'recetas-'+cita.id" :prescriptions="recetas" idModal="recetasModalCuaderno"></modalVerRecetas>
		<modalTiemposEspera v-if="cita && cita.id" :key="'tiempos-'+cita.id" :cita="cita" @actualizar="actualizarListadoCitas" idModal="modalTiemposEsperaCuaderno"></modalTiemposEspera>
    <ModalMoverVacio v-if="cita && cita.id" :key="'movervacio-'+cita.id" :dataCit="cita" :idUsuario="idUsuario" @ocultarCita="actualizarListadoCitas"></ModalMoverVacio>

	</div>
</template>

<script>
	import moment from 'moment'
	import PagoModal from './PagoModal.vue'
	import ModalEstadoCita from './ModalEstadoCita.vue'
	import ModalNuevaCita from './ModalNuevaCita.vue'
	import InfoModal from './ModalInfo.vue'
	import ReprogModal from './ReprogModal.vue'
	import ModalPatient from './ModalPatient.vue'
	import ModalSearchPatient from './ModalSearchPatient.vue'
	import ModalIntercambio from './ModalIntercambio.vue'
	import modalVerRecetas from './ModalVerRecetas.vue'
	import modalTiemposEspera from './ModalTiemposEspera.vue'
	import ModalAccionesCita from './ModalAccionesCita.vue'
	import ModalMoverVacio from './ModalMoverVacio.vue'
		
	import alertify from 'alertifyjs'
	
	export default{
		name: 'VistaCuaderno',
		data(){ return{
			fecha: moment().format('YYYY-MM-DD'), 
			doctores:[], 
			horasSolas:[], 
			horasMalas:[], 
			profesionalElegido:[], 
			horaElegida:[], 
			precios:[], 
			recetas:[],
			indexElegido:-1, 
			idUsuario:-1,
			cita: {
				address:{patient:{address:{}}, patient:[]},
				patient:{address:[], relative:[]}
			}, 
			posibles:[], 
			primero:{patient:[]}, 
			citaTemp:[],
			
			// Variables de Calendario Grid
			cargando: true,
			horasGrid: [8, 9, 10, 11, 12, 13, 14],
			horaInicioGrid: 8,
			pixelsPorMinuto: 1.5,
			filtroActual: 'Todos',
			tooltipData: null,
			tooltipStyle: { top: '0px', left: '0px', position: 'fixed', zIndex: 1055, pointerEvents: 'none', minWidth: '150px', maxWidth: '250px' },
		}},
		props:[ 'nombreUser', 'idSede'],
		components: { PagoModal, ModalEstadoCita, ModalNuevaCita, ModalPatient, InfoModal, ReprogModal, ModalSearchPatient, ModalIntercambio, modalVerRecetas, modalTiemposEspera, ModalAccionesCita, ModalMoverVacio },
		computed: {
			profesionesUnicas() {
				const profesiones = this.doctores.map(d => d.profession).filter(p => p != null && p.trim() != '');
				return [...new Set(profesiones)];
			},
			doctoresFiltrados() {
				let filtrados = this.doctores;
				if(this.filtroActual !== 'Todos') filtrados = this.doctores.filter(d => d.profession === this.filtroActual);
				return filtrados.filter(d => d.horarios && d.horarios.length > 0);
			}
		},
		methods:{
			dayWeek (day) {
				switch (day) {
					case 0: return "Lunes"; break;
					case 1: return "Martes"; break;
					case 2: return "Miercoles"; break;
					case 3: return "Jueves"; break;
					case 4: return "Viernes"; break;
					case 5: return "Sabado"; break;
					case 6: return "Domingo"; break;
				}
			},
			async listarProfesionales(){
				await this.axios.get('/api/profesional')
				.then(response => {
					this.doctores=response.data;
					this.obtenerHorarios();
				})
			},
			async obtenerHorarios(){
				this.cargando = true;
				let dia = this.dayWeek(moment(this.fecha).format('d')-1)
				
				await this.axios.get(`/api/horarioCuadernoOcupado/${this.fecha}/${dia}`, { params: { idSede: this.idSede } })
				.then(res => { 
					moment.locale('es')
					alertify.notify('<i class="fa-regular fa-calendar-check"></i> Datos del ' + moment(this.fecha).format('DD [de] MMMM') , 'success', 5);
					this.horasSolas = res.data.solos;
					this.horasMalas = res.data.invalidos;

					// Filtrar horas solas por doctor
					this.doctores.forEach(profesional =>{
						profesional.horarios = this.horasSolas
						.filter( horaSola => parseInt(horaSola.professional_id) == parseInt(profesional.id) )
						.map(horaSola=> ({...horaSola, libre:1, indexOcupado:-1}) )
					});

					// Cruzar con horas malas
					const timeToMinutes = (t) => {
						if (!t) return 0;
						let p = t.split(':').map(Number);
						return p[0] * 60 + (p[1] || 0);
					};

					this.doctores.forEach(profesional=>{
						this.$set(profesional, 'horariosOcupados', this.horasMalas.filter( horaMala => parseInt(horaMala.professional_id) == parseInt(profesional.id) ));
						profesional.horarios.forEach(horario=>{
							let appOcupada = this.horasMalas.find(hora => {
								if (parseInt(hora.professional_id) !== parseInt(profesional.id)) return false;

								let appStart = hora.hora_inicio ? hora.hora_inicio : (hora.schedule && hora.schedule.check_time ? hora.schedule.check_time : '00:00:00');
								let duracion = 60; // Fallback
								if (hora.duracion && !isNaN(parseInt(hora.duracion))) {
									duracion = parseInt(hora.duracion);
								} else if (hora.precio && hora.precio.duracion && !isNaN(parseInt(hora.precio.duracion))) {
									duracion = parseInt(hora.precio.duracion);
								} else if (hora.membresia && hora.membresia.precio && hora.membresia.precio.duracion && !isNaN(parseInt(hora.membresia.precio.duracion))) {
									duracion = parseInt(hora.membresia.precio.duracion);
								}

								let sStart = timeToMinutes(horario.check_time);
								let sEnd = timeToMinutes(horario.departure_date);
								let aStart = timeToMinutes(appStart);
								let aEnd = aStart + duracion;

								return sStart < aEnd && sEnd > aStart;
							});

							if(appOcupada){
								horario.libre=0;
								horario.indexOcupado=this.horasMalas.indexOf(appOcupada);
							}
						})
					})

					// Calcular horas max y min para el Grid
					let minHora = 8;
					let maxHora = 21;
					if (this.horasSolas.length > 0) {
						let horasInicio = this.horasSolas.map(h => parseInt(h.check_time.split(':')[0]));
						let horasFin = this.horasSolas.map(h => parseInt(h.departure_date.split(':')[0]) + (parseInt(h.departure_date.split(':')[1]) > 0 ? 1 : 0));
						minHora = Math.min(...horasInicio);
						maxHora = Math.max(...horasFin);
						// Validar limites
						if(minHora < 0 || isNaN(minHora)) minHora = 8;
						if(maxHora > 24 || isNaN(maxHora)) maxHora = 21;
					}
					
					this.horaInicioGrid = minHora;
					this.horasGrid = [];
					for (let i = minHora; i <= maxHora; i++) {
						this.horasGrid.push(i);
					}

				}).finally(() => {
					this.cargando = false;
				}).catch(() => {
					this.cargando = false;
				})
			},

			// ----- METODOS CALENDARIO -----
			citasPorDoctor(id) {
				return this.horasMalas.filter(h => h.professional_id == id).length;
			},
			getHorasLibres(idProf) {
				let doc = this.doctores.find(d => d.id == idProf);
				if(!doc || !doc.horarios) return [];
				return doc.horarios.filter(h => h.libre == 1);
			},
			getHorasOcupadas(idProf) {
				let ocupadas = this.horasMalas.filter(h => h.professional_id == idProf);
				
				// Map computed properties first (attention shift removed as requested)
				ocupadas.forEach(cita => {
					let start = cita.hora_inicio ? cita.hora_inicio : (cita.schedule && cita.schedule.check_time ? cita.schedule.check_time : '00:00:00');
					cita._computed_start = start;

					let duracion = 60; // Fallback predeterminado en minutos
					if (cita.precio && cita.precio.duracion && !isNaN(parseInt(cita.precio.duracion))) {
						duracion = parseInt(cita.precio.duracion);
					} else if (cita.membresia && cita.membresia.precio && cita.membresia.precio.duracion && !isNaN(parseInt(cita.membresia.precio.duracion))) {
						duracion = parseInt(cita.membresia.precio.duracion);
					}

					let end = '00:00:00';
					if (start !== '00:00:00') {
						end = moment(start, 'HH:mm:ss').add(duracion, 'minutes').format('HH:mm:ss');
					}
					cita._computed_end = end;
				});

				// Ordenar por hora de inicio (_computed_start)
				ocupadas.sort((a, b) => {
					let t1 = a._computed_start || '23:59:59';
					let t2 = b._computed_start || '23:59:59';
					return t1.localeCompare(t2);
				});

				// Agrupar superposiciones (Clusters) para evitar que una cita tape a otra
				let clusters = [];
				let currentCluster = [];
				let clusterEnd = '00:00:00';
				
				ocupadas.forEach(cita => {
					let start = cita._computed_start;
					let end = cita._computed_end;
					
					if(currentCluster.length === 0) {
						currentCluster.push(cita);
						clusterEnd = end;
					} else {
						if(start < clusterEnd) { // Hay superposición
							currentCluster.push(cita);
							if(end > clusterEnd) clusterEnd = end;
						} else { // No hay superposición, cerrar cluster
							clusters.push(currentCluster);
							currentCluster = [cita];
							clusterEnd = end;
						}
					}
				});
				if(currentCluster.length > 0) clusters.push(currentCluster);
				
				// Asignar los anchos y posiciones basados en el tamaño del cluster
				clusters.forEach(cluster => {
					let len = cluster.length;
					cluster.forEach((cita, idx) => {
						cita._width = 95 / len;
						cita._left = (95 / len) * idx;
					});
				});

				return ocupadas;
			},
			slotStyle(check_time, departure_date, citaData = null) {
				if(!check_time || !departure_date) return {};
				let [h1, m1] = check_time.split(':').map(Number);
				let [h2, m2] = departure_date.split(':').map(Number);

				let iniMinutos = (h1 * 60 + m1) - (this.horaInicioGrid * 60);
				let finMinutos = (h2 * 60 + m2) - (this.horaInicioGrid * 60);
				
				let topPx = iniMinutos * this.pixelsPorMinuto;
				let heightPx = (finMinutos - iniMinutos) * this.pixelsPorMinuto;
				
				let stl = {
					top: topPx + 'px',
					height: Math.max(heightPx, 20) + 'px' // min-height de seguridad
				};

				if(citaData && citaData._width !== undefined) {
					stl.width = `calc(${citaData._width}% - 8px)`;
					stl.left = `calc(${citaData._left}% + 4px)`;
					stl.position = 'absolute';
				}

				return stl;
			},
			stringToColor(str) {
				if(!str) return '#1cc88a';
				let hash = 0;
				for (let i = 0; i < str.length; i++) {
					hash = str.charCodeAt(i) + ((hash << 5) - hash);
				}
				const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
				return '#' + "00000".substring(0, 6 - c.length) + c;
			},
			formatHora(h) {
				if(!h) return '';
				return moment(h, 'HH:mm:ss').format('HH:mm');
			},
			syncScrollX(e) {
        if(this.$refs.headerScroll) {
            this.$refs.headerScroll.scrollLeft = e.target.scrollLeft;
        }
      },
			syncScroll(e){
				// Para si quisieramos sincronizar etiquetas Y al moverse, en este layout CSS grid-lines abarca todo
			},
			isBlocked(cita) {
				return cita && (cita.status == 7 || (cita.patient && cita.patient.dni === 'BLOQUEO'));
			},
			mostrarTooltip(e, cita, doctor, esLibre = false) {
				let horaRango = "";
				if(esLibre){
					horaRango = this.formatHora(cita.check_time) + ' - ' + this.formatHora(cita.departure_date);
					this.tooltipData = {
						paciente: 'HORARIO DISPONIBLE',
						hora: horaRango,
						doctor: doctor.name,
						estado: 'Libre'
					};
				} else if (this.isBlocked(cita)) {
					horaRango = this.formatHora(cita.hora_inicio || (cita.schedule ? cita.schedule.check_time : '')) + ' - ' + this.formatHora(cita.hora_fin || (cita.schedule ? cita.schedule.departure_date : ''));
					this.tooltipData = {
						paciente: 'HORARIO BLOQUEADO',
						hora: horaRango,
						doctor: doctor.name,
						estado: cita.recomendation || 'Bloqueo'
					};
				} else {
					horaRango = this.formatHora(cita.hora_inicio || (cita.schedule ? cita.schedule.check_time : '')) + ' - ' + this.formatHora(cita._computed_end);
					
					let estado = 'Sin Confirmar';
					if(cita.status == 2) estado = 'Confirmado';
					if(cita.status == 3) estado = 'Anulado';
					if(cita.status == 4) estado = 'Reprogramado';
					if(cita.status == 5) estado = 'Atendida';

					this.tooltipData = {
						paciente: cita.patient.name.split(' ')[0] + ' ' + cita.patient.nombres.split(' ')[0],
						hora: horaRango,
						doctor: doctor.name,
						estado: estado
					};
				}
				this.moverTooltip(e);
			},
			moverTooltip(e) {
				if(this.tooltipData) {
					this.tooltipStyle.top = (e.clientY + 15) + 'px';
					this.tooltipStyle.left = (e.clientX + 15) + 'px';
				}
			},
			ocultarTooltip() {
				this.tooltipData = null;
			},
			crearCitaEnSlot(doctor, horaLibre) {
				// Buscar el indice en el array para compatibilidad con el v-for de la logica original.
				let hIndex = doctor.horarios.findIndex(h => h.id == horaLibre.id);
				let dIndex = this.doctores.findIndex(d => d.id == doctor.id);
				this.prepararAutomaticos(dIndex, hIndex);
			},
			abrirDetallesCita(citaMalas) {
				if (this.isBlocked(citaMalas)) {
					this.$swal.fire({
						title: 'Horario Bloqueado',
						text: `Este horario está bloqueado: ${citaMalas.recomendation || 'Bloqueo de horario'}`,
						icon: 'info',
						confirmButtonColor: '#4e73df',
						confirmButtonText: 'Aceptar'
					});
					return;
				}
				this.cita = citaMalas;
				this.indexElegido = this.horasMalas.findIndex(x => x.id == citaMalas.id);
				this.$nextTick(() => {
					const el = document.getElementById('modalAccionesCitaCuaderno');
					if (el && window.bootstrap) {
						const modalInstance = window.bootstrap.Modal.getOrCreateInstance(el);
						modalInstance.show();
					}
				});
			},
			bgPorSemaforo(horaOcup) {
				if(!horaOcup.patient || !horaOcup.patient.ultimoSemaforo) return 'bg-transparent';
				let cod = horaOcup.patient.ultimoSemaforo.codigo;
				if([1].includes(cod)) return 'bg-transparent';
				if([2,3,4].includes(cod)) return 'bg-success text-white';
				if([5,6,7].includes(cod)) return 'bg-warning text-dark';
				if([8,9,10].includes(cod)) return 'bg-danger text-white';
				return 'bg-transparent'; //hacer transparente por defecto.
			},
			distribuirAperturaModal(data, tModalId, indexG){
				this.cita = data;
				this.indexElegido = indexG;
				// El modal de bootstrap 5 ya maneja la transición por los atributos data-bs, pero asignamos datos.
			},

			// ----- METODOS VIEJOS COMPATIBILIDAD -----
			actualizarAdelanto(adelanto, citaId){
				const cita = this.horasMalas.find(h => h.id === citaId || h.payment?.id === citaId);
				if(cita && cita.payment){
					cita.payment.price = parseFloat(cita.payment.price) - parseFloat(adelanto)
					cita.payment.adelanto = parseFloat(cita.payment.adelanto || 0) + parseFloat(adelanto)
				}
			},
			validarYEliminar(id){
				this.$swal({
						title: '¿Quieres eliminar esta cita?',
						html: 'Ingrese un motivo para eliminar la cita. <br> <small>No se generará falta</small>',
						input: 'text',
						showCancelButton: true,
						confirmButtonText: 'Si',
						cancelButtonText: `No`,
				}).then((result) => {
					if( result.value =='')
						alertify.notify('No eliminado, falta rellenar un motivo' , 'danger', 5);
					else
						if(result.isConfirmed){
								this.axios.post('/api/eliminarCita/'+id, {razon: result.value, usuario: this.nombreUser })
								.then((res) => {
									this.$swal('Cita eliminada con exito')
									this.obtenerHorarios();
								});
						}
				})
			},
			prepararNuevaCitaManual(){
				this.profesionalElegido = null;
				this.horaElegida = null;
				this.$emit('limpiarDescuentos')
			},
			prepararAutomaticos(indexProfesional, indexHorario){
				this.profesionalElegido = this.doctores[indexProfesional];
				this.horaElegida = this.profesionalElegido.horarios[indexHorario];
				this.$emit('limpiarDescuentos')
			},
			async listarPrecios(){
				await this.axios.get('/api/listarPreciosTodos')
				.then( response => this.precios = response.data)
			},
			async actualizarListadoCitas(paymentInfo){ 
				// Función auxiliar: reemplaza horasMalas con nuevo array donde la cita pagada
				// tiene un nuevo objeto payment. Nueva referencia = Vue 2 detecta el cambio garantizadamente.
				const aplicarPago = () => {
					if (paymentInfo && typeof paymentInfo === 'object' && paymentInfo.id && paymentInfo.payStatus !== undefined) {
						this.horasMalas = this.horasMalas.map(h => {
							if (h.id == paymentInfo.id && h.payment) {
								return Object.assign({}, h, { payment: Object.assign({}, h.payment, { pay_status: paymentInfo.payStatus }) });
							}
							return h;
						});
					}
				};

				// 1. Actualización inmediata antes del request
				aplicarPago();

				// 2. Recarga completa del servidor
				await this.obtenerHorarios(); 

				// 3. Re-aplicar después del request (por si el servidor devuelve datos desactualizados)
				aplicarPago();

				this.$emit('actualizarListadoCitas');
			},
			verHorariosAyer(){ this.fecha = moment().subtract(1, 'day').format('YYYY-MM-DD'); this.obtenerHorarios(); },
			verHorariosHoy(){ this.fecha = moment().format('YYYY-MM-DD'); this.obtenerHorarios(); },
			verHorariosMañana(){ this.fecha = moment().add(1, 'day').format('YYYY-MM-DD'); this.obtenerHorarios(); },
			refrescarHorarios(){ this.obtenerHorarios(); },
			
			changeMode(id, indiceP){
				let targetIndex = this.indexElegido > -1 ? this.indexElegido : indiceP; 
				this.$swal.fire({
					title: 'Actualizar',
					text: "¿Está seguro de cambiar el modo de la cita?",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Sí',
					cancelButtonText: 'No'
				}).then((result) => {
					if (result.isConfirmed) {
						this.axios.get(`/api/updateModeAppoinment/${id}`)
						.then(res =>{
							//this.horasMalas[targetIndex].mode==1? this.horasMalas[targetIndex].mode=0: this.horasMalas[targetIndex].mode=1
							this.obtenerHorarios();
						})
					}
				})
			},
			buscarRecetas(id){
				this.axios(`/api/verRecetaPorId/${id}`)
				.then(res =>{
					this.recetas = res.data;
					this.$parent.recetas = this.recetas;
				})
			},
			intercambiarHorario(laCita){
				let idProf = laCita.professional_id
				this.primero = laCita;
				this.posibles = this.horasMalas.filter(posible=> posible.professional_id == idProf && posible.date == this.fecha && laCita.id != posible.id )
			},
			abrirTiemposEspera(cita) {
				this.citaTemp = cita;
			},
			handleKeyDown(e) {
				const activeEl = document.activeElement;
				if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'SELECT' || activeEl.isContentEditable)) {
					return;
				}
				if (e.key === 'ArrowLeft') {
					const body = this.$refs.bodyScroll;
					if (body) {
						body.scrollLeft -= 150;
						e.preventDefault();
					}
				} else if (e.key === 'ArrowRight') {
					const body = this.$refs.bodyScroll;
					if (body) {
						body.scrollLeft += 150;
						e.preventDefault();
					}
				}
			}
		},
		mounted(){
			this.axios.get('/api/user')
			.then((res) => {
				this.idUsuario = parseInt(res.data.user.id)
			})
			this.listarProfesionales();
			this.listarPrecios();

			this.$nextTick(() => {
				if (this.$refs.bodyScroll && this.$refs.headerScroll) {
					this.$refs.headerScroll.scrollLeft = this.$refs.bodyScroll.scrollLeft;
				}
			});
			window.addEventListener('keydown', this.handleKeyDown);
		},
		beforeDestroy() {
			window.removeEventListener('keydown', this.handleKeyDown);
		}
	}
</script>

<style scoped>
	.calendar-wrapper { 
		display: flex; 
		flex-direction: column; 
		border-radius: 8px; 
		position: relative; 
		background: white;
		width: 100%;
	}
	.calendar-header {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 100;
		background-color: #f8f9fc !important;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		box-shadow: 0 2px 4px rgba(0,0,0,0.05);
		width: 100%;
	}
	.doctor-header,
	.doctor-column {
		min-width: 250px;
		max-width: 250px;
		flex: 0 0 250px;
		background-color: rgba(0,0,0,0.03);
	}
	.time-slot-label { height: 90px; } /* 60 minutos * 1.5px/min = 90px */
	.grid-line { height: 90px; box-sizing: border-box; }
	.free-slot { position: absolute; width: calc(100% - 10px); left: 5px; opacity: 1; cursor: pointer; transition: opacity 0.2s, background 0.2s; background: #ffffff; border-radius: 4px; box-sizing: border-box; border: 1px solid rgba(0,0,0,0.05); }
	.free-slot:hover { background: rgba(28, 200, 138, 0.1); border: 1px dashed #1cc88a; }
	
	.booked-slot { position: absolute; width: calc(100% - 10px); left: 5px; cursor: pointer; transition: transform 0.1s; border-radius: 6px; overflow: hidden; background-color: rgba(248, 249, 252, 0.7);}
	.booked-slot:hover { transform: scale(1.02); z-index: 10!important; }
	.booked-content { padding: 4px; border-radius: 4px; }
	.doctors-header-container::-webkit-scrollbar { display: none; }
</style>
<style>
	#content-wrapper { overflow-x: hidden !important; overflow-y: visible !important; }
	.alertify-notifier .ajs-message{width: 400px!important;}
	.alertify-notifier.ajs-right .ajs-message.ajs-visible { right: 400px!important; }
	.alertify-notifier .ajs-message.ajs-success{
		background: rgb(22 205 65 / 95%)!important;
    text-shadow: none!important;
	}
</style>