<template>
	<div class="container-fluid p-2">
		<!-- Controles superiores -->
		<div class="row mb-3 gx-3 align-items-center">
			<div class="col-auto"><input type="date" class="form-control shadow-sm font-weight-bold" v-model="fecha" @change="obtenerHorarios()"></div>
			<div class="col-auto"><button class="btn btn-outline-primary mx-1 border-0 font-weight-bold" @click="verHorariosAyer()"><i class="fas fa-chevron-left"></i> Ayer</button></div>
			<div class="col-auto"><button class="btn btn-outline-primary mx-1 border-0 font-weight-bold" @click="verHorariosHoy()"><i class="fa-regular fa-clock"></i> Hoy</button></div>
			<div class="col-auto"><button class="btn btn-outline-primary mx-1 border-0 font-weight-bold" @click="verHorariosMañana()">Mañana <i class="fas fa-chevron-right"></i></button></div>
			<div class="col-auto"><button class="btn btn-outline-secondary mx-2 border-0" @click="refrescarHorarios()"><i class="fas fa-sync"></i> Actualizar</button></div>
		</div>

		<!-- Filtros por profesión (Opcional, si existen en los datos) -->
		<div class="d-flex mb-3 gap-2 flex-wrap">
			<button class="btn btn-sm rounded-pill font-weight-bold" 
							:class="filtroActual == 'Todos' ? 'btn-primary' : 'btn-light text-muted border'" 
							@click="filtroActual = 'Todos'">Todos</button>
			<button v-for="prof in profesionesUnicas" :key="prof" class="btn btn-sm rounded-pill font-weight-bold" 
							:class="filtroActual == prof ? 'btn-primary' : 'btn-light text-muted border'" 
							@click="filtroActual = prof">{{ prof }}</button>
		</div>

		<!-- Contenedor del Calendario Grid -->
		<div class="calendar-wrapper bg-white shadow-sm rounded border">
			
			<div class="calendar-header d-flex border-bottom bg-light">
				<!-- Cabecera Esquina (Eje Y) -->
				<div class="time-axis-header text-center py-3 border-right text-muted font-weight-bold" style="min-width: 60px;">
					<i class="far fa-clock"></i>
				</div>
				<!-- Cabecera Doctores (Eje X scrolleable) -->
				<div class="doctors-header-container d-flex flex-grow-1 overflow-hidden" ref="headerScroll">
					<div class="doctor-header text-center py-2 border-right text-dark" v-for="doctor in doctoresFiltrados" :key="'h-'+doctor.id">
						<div>
							<span class="badge badge-pill mt-1" :style="'background-color: ' + stringToColor(doctor.name)"> &nbsp; </span>
							<strong class="mx-1">{{doctor.profession}}</strong>
						</div>
						<div class="font-weight-bold text-truncate px-1" :title="doctor.name">{{doctor.name.split(' ')[0]}} {{doctor.name.split(' ')[1] || ''}}</div>
						<small class="text-muted">{{ citasPorDoctor(doctor.id) }} citas</small>
					</div>
					<div v-if="doctoresFiltrados.length == 0" class="py-3 px-3 text-muted">No hay profesionales para mostrar</div>
				</div>
			</div>

			<!-- Cuerpo del Calendario -->
			<div class="calendar-body d-flex" style="height: 600px; overflow-y: auto;" @scroll="syncScroll">
				<!-- Eje Y Horas -->
				<div class="time-axis border-right bg-white" style="min-width: 60px;">
					<div class="time-slot-label text-center border-bottom text-muted small position-relative" v-for="hora in horasGrid" :key="'lbl-'+hora">
						<span style="position: absolute; top: -10px; right: 8px; background: white; padding: 0 4px;">{{ hora }}:00</span>
					</div>
				</div>
				<!-- Columnas de doctores locales -->
				<div class="doctors-body-container d-flex flex-grow-1" style="overflow-x: auto; position: relative;" ref="bodyScroll" @scroll="syncScrollX">
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
								title="Click para nueva cita">
						</div>

						<!-- Slots Ocupados (Citas) -->
						<div v-for="(horaOcup, hIndex) in getHorasOcupadas(doctor.id)" :key="'ocup-'+horaOcup.id" 
								class="booked-slot shadow-sm p-1" 
								:style="[slotStyle(horaOcup.schedule ? horaOcup.schedule.check_time : null, horaOcup.schedule ? horaOcup.schedule.departure_date : null, horaOcup), { borderLeft: '4px solid ' + stringToColor(doctor.name) }]"
								@click="abrirDetallesCita(horaOcup)"
								data-bs-toggle="modal" data-bs-target="#modalAccionesCita">
							
							<div class="booked-content h-100 position-relative overflow-hidden" :class="bgPorSemaforo(horaOcup)">
								<div class="font-weight-bold text-truncate small lh-1 pt-1"><i :class="horaOcup.mode == 1 ? 'far fa-user' : 'fas fa-desktop'"></i> {{ horaOcup.patient.name.split(' ')[0] }} {{ horaOcup.patient.nombres.split(' ')[0] }}</div>
								<div class="text-muted small mt-1" style="font-size: 0.7rem;">{{ formatHora(horaOcup.schedule ? horaOcup.schedule.check_time : '') }} - {{ formatHora(horaOcup.schedule ? horaOcup.schedule.departure_date : '') }}</div>
								
								<!-- Iconos estado -->
								<div class="position-absolute" style="bottom: 2px; right: 4px;">
									<i class="fas fa-wallet small" :class="horaOcup.payment && horaOcup.payment.pay_status == 1 ? 'text-danger':'text-success'"></i>
								</div>
							</div>

						</div>

					</div>
				</div>
			</div>

		</div>

		<!-- Modales -->
		<ModalNuevaCita :profesionalElegido="profesionalElegido" :horaElegida="horaElegida" :idUsuario="idUsuario" :fechaElegida='fecha' @actualizarListadoCitas="actualizarListadoCitas" :idSede="idSede"></ModalNuevaCita>
		
		<!-- Nuevo modal de acciones centralizado -->
		<ModalAccionesCita v-if="cita" :cita="cita" :indiceElegido="indexElegido" :precios="precios"
			@changeMode="changeMode"
			@openModal="distribuirAperturaModal"
			@intercambiar="intercambiarHorario"
			@eliminar="validarYEliminar"
			@buscarRecetas="buscarRecetas"
			@tiemposEspera="abrirTiemposEspera"
		/>

    <modal-estado v-if="cita" :dataCit="cita" :idUsuario="idUsuario"></modal-estado>
    <pago-modal v-if="cita" :cita="cita" :idUsuario="idUsuario" :idSede="idSede" @actualizarAdelanto="actualizarAdelanto"></pago-modal>
		<modal-patient v-if="cita" :dataCit="cita"></modal-patient>
    <reprog-modal v-if="cita" :dataCit="cita" :idUsuario="idUsuario" @ocultarCita="actualizarListadoCitas"></reprog-modal>
		<info-modal v-if="cita" :dataCit="cita" :precios="precios"></info-modal>
		<modal-search-patient></modal-search-patient>
		<ModalIntercambio :posibles="posibles" :primero="primero" @actualizar="actualizarListadoCitas"></ModalIntercambio>
		
		<modalVerRecetas :prescriptions="recetas"></modalVerRecetas>
		<modalTiemposEspera :cita="citaTemp" @actualizar="actualizarListadoCitas"></modalTiemposEspera>

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
			horasGrid: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
			horaInicioGrid: 8,
			pixelsPorMinuto: 1.5,
			filtroActual: 'Todos',
		}},
		props:[ 'nombreUser', 'idSede'],
		components: { PagoModal, ModalEstadoCita, ModalNuevaCita, ModalPatient, InfoModal, ReprogModal, ModalSearchPatient, ModalIntercambio, modalVerRecetas, modalTiemposEspera, ModalAccionesCita },
		computed: {
			profesionesUnicas() {
				const profesiones = this.doctores.map(d => d.profession).filter(p => p != null && p.trim() != '');
				return [...new Set(profesiones)];
			},
			doctoresFiltrados() {
				if(this.filtroActual === 'Todos') return this.doctores;
				return this.doctores.filter(d => d.profession === this.filtroActual);
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
				let dia = this.dayWeek(moment(this.fecha).format('d')-1)
				
				await this.axios.get(`/api/horarioCuadernoOcupado/${this.fecha}/${dia}`)
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
					let ocupado = false;
					this.doctores.forEach(profesional=>{
						profesional.horarios.forEach(horario=>{
							ocupado = this.horasMalas.findIndex(hora => hora.schedule_id == horario.id)
							if(ocupado>-1){
								// Ya no agregamos indexOcupado en horario porque iteraremos directamente horasMalas
								horario.libre=0;
								horario.indexOcupado=ocupado;
							}
						})
					})
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
				let ocupadas = this.horasMalas.filter(h => h.professional_id == idProf && parseInt(h.status) !== 5);
				
				// Ordenar por hora de inicio
				ocupadas.sort((a, b) => {
					let t1 = a.schedule && a.schedule.check_time ? a.schedule.check_time : '23:59:59';
					let t2 = b.schedule && b.schedule.check_time ? b.schedule.check_time : '23:59:59';
					return t1.localeCompare(t2);
				});

				// Agrupar superposiciones (Clusters) para evitar que una cita tape a otra
				let clusters = [];
				let currentCluster = [];
				let clusterEnd = '00:00:00';
				
				ocupadas.forEach(cita => {
					let start = cita.schedule && cita.schedule.check_time ? cita.schedule.check_time : '00:00:00';
					let end = cita.schedule && cita.schedule.departure_date ? cita.schedule.departure_date : '00:00:00';
					
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
			crearCitaEnSlot(doctor, horaLibre) {
				// Buscar el indice en el array para compatibilidad con el v-for de la logica original
				let hIndex = doctor.horarios.findIndex(h => h.id == horaLibre.id);
				let dIndex = this.doctores.findIndex(d => d.id == doctor.id);
				this.prepararAutomaticos(dIndex, hIndex);
			},
			abrirDetallesCita(citaMalas) {
				this.cita = citaMalas;
				this.indexElegido = this.horasMalas.findIndex(x => x.id == citaMalas.id);
			},
			bgPorSemaforo(horaOcup) {
				if(!horaOcup.patient || !horaOcup.patient.ultimoSemaforo) return 'bg-white';
				let cod = horaOcup.patient.ultimoSemaforo.codigo;
				if([1].includes(cod)) return 'bg-white';
				if([2,3,4].includes(cod)) return 'bg-success text-white';
				if([5,6,7].includes(cod)) return 'bg-warning text-dark';
				if([8,9,10].includes(cod)) return 'bg-danger text-white';
				return 'bg-white';
			},
			distribuirAperturaModal(data, tModalId, indexG){
				this.cita = data;
				this.indexElegido = indexG;
				// El modal de bootstrap 5 ya maneja la transición por los atributos data-bs, pero asignamos datos.
			},

			// ----- METODOS VIEJOS COMPATIBILIDAD -----
			actualizarAdelanto(adelanto){
				this.horasMalas[this.indexElegido].payment.price = parseFloat(this.horasMalas[this.indexElegido].payment.price) - parseFloat(adelanto)
				this.horasMalas[this.indexElegido].payment.adelanto = parseFloat(this.horasMalas[this.indexElegido].payment.adelanto) + parseFloat(adelanto)
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
			prepararAutomaticos(indexProfesional, indexHorario){
				this.profesionalElegido = this.doctores[indexProfesional];
				this.horaElegida = this.profesionalElegido.horarios[indexHorario];
				this.$emit('limpiarDescuentos')
			},
			async listarPrecios(){
				await this.axios.get('/api/listarPreciosTodos')
				.then( response => this.precios = response.data)
			},
			actualizarListadoCitas(){ this.obtenerHorarios(); },
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
			}
		},
		mounted(){
			this.axios.get('/api/user')
			.then((res) => {
				this.idUsuario = parseInt(res.data.user.id)
			})
			this.listarProfesionales();
			this.listarPrecios();
		}
	}
</script>

<style scoped>
	.calendar-wrapper { display: flex; flex-direction: column; overflow: hidden; }
	.doctor-header { min-width: 250px; flex: 1; }
	.doctor-column { min-width: 250px; flex: 1; }
	.time-slot-label { height: 90px; } /* 60 minutos * 1.5px/min = 90px */
	.grid-line { height: 90px; box-sizing: border-box; }
	.free-slot { position: absolute; width: calc(100% - 10px); left: 5px; opacity: 0; cursor: pointer; transition: opacity 0.2s; background: rgba(28, 200, 138, 0.1); border-radius: 4px; box-sizing: border-box;}
	.free-slot:hover { opacity: 1; border: 1px dashed #1cc88a; }
	
	.booked-slot { position: absolute; width: calc(100% - 10px); left: 5px; cursor: pointer; transition: transform 0.1s; border-radius: 6px; overflow: hidden; background-color: #f8f9fc;}
	.booked-slot:hover { transform: scale(1.02); z-index: 10!important; }
	.booked-content { padding: 4px; border-radius: 4px; }
	.doctors-header-container::-webkit-scrollbar { display: none; }
</style>
<style>
	.alertify-notifier .ajs-message{width: 400px!important;}
	.alertify-notifier.ajs-right .ajs-message.ajs-visible { right: 400px!important; }
	.alertify-notifier .ajs-message.ajs-success{
		background: rgb(22 205 65 / 95%)!important;
    text-shadow: none!important;
	}
</style>