<template>
	<main>
		<h1>Gestor de datos</h1>
		<div class="row">
			<div class="col-sm-3" @click="cargarDatos('avisos')">
				<div class="card mb-0 py-0 border-left-primary cursor" :class="{'active': activoAviso}">
					<div class="card-body"><i class="fas fa-mobile-alt"></i> Recordatorios</div>
				</div>
			</div>

			<div class="col-sm-3" @click="cargarDatos('deudas')">
				<div class="card mb-0 py-0 border-left-warning cursor" :class="{'active': activoDeudas}">
					<div class="card-body"><i class="fas fa-money-bill-wave-alt"></i> Deudas</div>
				</div>
			</div>
			<div class="col-sm-3" @click="cargarDatos('cumpleaños')">
				<div class="card mb-0 py-0 border-left-info cursor" :class="{'active': activoCumple}">
					<div class="card-body"><i class="fas fa-birthday-cake"></i> Cumpleaños</div>
				</div>
			</div>
			<div class="col-sm-3"></div>
		</div>
		<section v-if="tipo == 'cumpleaños'">
			<div class="card px-1 my-4 p-2">
				<div class=" card-body">
					<p class="lead">Cumpleaños</p>

					<div class="input-group mb-3 col-sm-4">
						<span class="input-group-text" id="basic-addon1">Mes de cumpleaños:</span>
						<input type="date" class="form-control" v-model="fechaCumple" id="fechaCumple" @change="cambiarFecha('cumpleaños')">
					</div>
					<table class="table table-striped mt-4">
						<thead>
							<tr>
								<th>N°</th>
								<th>Nombres</th>
								<th>Fecha Cumpleaños</th>
								<th>Edad</th>
								<th>Citas confirmadas</th>
								<th>@</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(cliente, index) in clientes">
								<td>{{ index + 1 }}</td>
								<td @click="dataProps(cliente)" data-bs-toggle="modal" data-bs-target="#patientModal" style="cursor:pointer">{{ (cliente.name.toUpperCase()) }} {{ cliente.nombres.toUpperCase() }}</td>
								<td>{{ fechaLatam(cliente.birth_date) }}</td>
								<td>{{ edad(cliente.birth_date) }} años</td>
								<td>{{ cliente.confirmados }}</td>
								<td><a v-if="cliente.phone!=''" :href="`https://wa.me/51${cliente.phone.replace(/\s+/g, '')}?text=Feliz cumpleaños 🎂 ${cliente.name} ${cliente.nombres}, recuerda que el que piensa positivo, ve lo invisible, siente lo intangible y logra lo imposible. Te desea la clínica Excelentemente 🤗`" target="_blank"><i class="fab fa-whatsapp"></i></a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
		<section v-if="tipo== 'avisos'">
			<div class="card px-1 my-4 p-2">
				<div class="card-body">
					<p class="lead">Avisos</p>

					<p>Avisos pendientes hasta la fecha</p>
					<table class="table table-hover" v-if="avisosAnteriores.length>0">
						<thead>
							<tr>
								<th>N°</th>
								<th>Fecha</th>
								<th>Hora</th>
								<th>Actividad</th>
								<th>Responsable</th>
								<th>Creador</th>
								<th>Tipo</th>
								<th>Estado</th>
								<th>@</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(anterior, indice) in avisosAnteriores">
								<td> {{ indice+1 }} </td>
								<td>{{fechaLatam(anterior.fecha)}}</td>
								<td>{{horaLatam(anterior.fecha)}}</td>
								<td class="text-capitalize">
									<span>{{anterior.actividad}}</span>
									<span v-if="anterior.respuesta">{{ anterior.respuesta }}</span>
								</td>
								<td class="text-capitalize">{{anterior.responsable}}</td>
								<td>{{anterior.nomCreador}}</td>
								<td>
									<span v-if="anterior.tipo=='1'"><span class="badge rounded-pill text-bg-primary p-2" title="Aviso"><i class="fas fa-paperclip"></i></span></span>
									<span v-if="anterior.tipo=='2'"><span class="badge rounded-pill text-ligth bg-warning p-2" title="Llamada"><i class="fas fa-phone"></i></span></span>
									<span v-if="anterior.tipo=='3'"><span class="badge rounded-pill text-bg-success p-2" title="Recordatorio"><i class="fas fa-brain"></i></span></span>
								</td>
								<td>
									<span class="text-muted" v-if="anterior.estado=='1'"><span title="Recién creado"><i class="far fa-circle"></i></span></span>
									<span class="text-success" v-if="anterior.estado=='2'"><span title="Atendido"><i class="fas fa-shield-alt"></i></span></span>
									<span class="text-success" v-if="anterior.estado=='3'"><span title="Solucionado"><i class="fas fa-check"></i></span></span>
									<span class="text-warning" v-if="anterior.estado=='4'"><span title="Pendiente aún"><i class="fas fa-water"></i></span></span>
									<span class="text-danger" v-if="anterior.estado=='5'"><span title="Cancelado"><i class="fas fa-user-slash"></i></span></span>
								</td>
								<td>
									<button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editarAviso" @click="queAviso=anterior"><i class="fas fa-edit"></i></button>
								</td>
							</tr>
						</tbody>
					</table>
					<p class="text-mute" v-else>Listado de avisos pendientes limpio hasta el día de hoy</p>

					<p>Avisos por fecha</p>

					<div class="d-flex justify-content-between">
						<div class="input-group mb-3 col-sm-4">
							<span class="input-group-text" id="basic-addon1">Mostrando avisos de:</span>
							<input type="date" class="form-control" v-model="fechaAviso" @change="cargarDatos('avisos')">
						</div>
						<div class="d-grid gap-2 d-block">
							<button class="btn btn-outline-primary mx-2" data-bs-toggle="modal" data-bs-target="#nuevoAviso"><i class="fa-regular fa-note-sticky"></i> Nuevo aviso</button>
							<button class="btn btn-outline-success mx-2" @click="actualizarAvisos()"><i class="fas fa-sync"></i> Actualizar lista</button>
						</div>
					</div>
					<table class="table table-hover" v-if="avisos.length>0">
						<thead>
							<tr>
								<th>N°</th>
								<th>Fecha</th>
								<th>Hora</th>
								<th>Actividad</th>
								<th>Responsable</th>
								<th>Creador</th>
								<th>Tipo</th>
								<th>Estado</th>
								<th>@</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(aviso, indice) in avisos">
								<td> {{ indice+1 }} </td>
								<td>{{fechaLatam(aviso.fecha)}}</td>
								<td>{{horaLatam(aviso.fecha)}}</td>
								<td class="text-capitalize">
									<span>{{aviso.actividad}}</span>
									<span v-if="aviso.respuesta"><br><i class="fas fa-user-alt"></i>	{{ aviso.respuesta }}</span>
								</td>
								<td>{{aviso.responsable}}</td>
								<td>{{aviso.nomCreador}}</td>
								<td>
									<span v-if="aviso.tipo=='1'"><span class="badge rounded-pill text-bg-primary p-2" title="Aviso"><i class="fas fa-paperclip"></i></span></span>
									<span v-if="aviso.tipo=='2'"><span class="badge rounded-pill text-ligth bg-warning p-2" title="Llamada"><i class="fas fa-phone"></i></span></span>
									<span v-if="aviso.tipo=='3'"><span class="badge rounded-pill text-bg-success p-2" title="Recordatorio"><i class="fas fa-brain"></i></span></span>
								</td>
								<td>
									<span class="text-muted" v-if="aviso.estado=='1'"><span title="Recién creado"><i class="far fa-circle"></i></span></span>
									<span class="text-success" v-if="aviso.estado=='2'"><span title="Atendido"><i class="fas fa-shield-alt"></i></span></span>
									<span class="text-success" v-if="aviso.estado=='3'"><span title="Solucionado"><i class="fas fa-check"></i></span></span>
									<span class="text-warning" v-if="aviso.estado=='4'"><span title="Pendiente aún"><i class="fas fa-water"></i></span></span>
									<span class="text-danger" v-if="aviso.estado=='5'"><span title="Cancelado"><i class="fas fa-user-slash"></i></span></span>
								</td>
								<td>
									<button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editarAviso" @click="queAviso=aviso"><i class="fas fa-edit"></i></button>
								</td>
							</tr>
						</tbody>
					</table>
					<p class="text-mute" v-else>Listado de avisos pendientes limpio hasta el día de hoy</p>
				</div>
			</div>
		</section>

		<section v-if="tipo=='deudas'">
			<div class="card px-1 my-4 p-2">
				<div class="card-body">
					<div class="card-body">
						<p class="lead">Deudas por cobrar</p>
						<div class="input-group mb-3 col-sm-4">
							<span class="input-group-text" id="basic-addon1">Cambiar fecha:</span>
							<input type="date" class="form-control" v-model="nFecha" id="fechaDeudas" @change="cargarDatos('deudas')">
						</div>
					<table class="table table-hover">
						<thead>
							<tr>
								<th>N°</th>
								<th>Nombre</th>
								<th>Motivo</th>
								<th>Monto</th>
								<th>Fecha de deuda</th>
								<th>Estado</th>
								<th>@</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(deuda, index) in deudas">
								<td>{{ index+1 }}</td>
								<td class="text-capitalize" @click="dataProps(deuda)" data-bs-toggle="modal" data-bs-target="#patientModal" style="cursor:pointer">{{ deuda.name }} {{ deuda.nombres }}</td>
								<td class="text-capitalize">{{ deuda.motivo }}
									<small v-if="deuda.observaciones || deuda.observaciones!=''"><br>{{deuda.observaciones}}</small>
								</td>
								<td>S/ {{ parseFloat(deuda.monto).toFixed(2) }}</td>
								<td>{{ fechaLatam(deuda.fecha) }} <small>({{ fechaFrom(deuda.fecha) }})</small></td>
								<td>
									<span class="puntero" :title="getEstadoDeuda(deuda.estado)" data-bs-target="#modalCambiarDeudas" data-bs-toggle="modal" @click="queId= deuda.patient_id; idRegistro = deuda.idDeuda"> 
									{{ colorDeuda(deuda.estado) }}
									</span>
									<!-- <span v-if="deuda.estado == 1"><span title="Deuda pendiente">⚪</span></span>
									<span v-if="deuda.estado == 2"><span title="Deuda cobrada">🟢</span></span>
									<span v-if="deuda.estado == 3"><span title="Deuda perdida">🔴</span></span>
									<span v-if="deuda.estado == 4"><span title="Deuda con plazo extendido">🟡</span></span> -->
								</td>
								<td >
									<button v-if="deuda.estado!=2 && deuda.estado!=3" class="btn btn-outline-primary btn-sm" title="Cambiar pago" @click="queDeuda = deuda" data-bs-target="#modalPagarDeuda" data-bs-toggle="modal"><i class="fas fa-hand-holding-usd"></i></button>
								</td>
							</tr>
						</tbody>
					</table>
					<p v-if="deudas.length==0">No hay datos</p>


					<p class="lead">Deudas finalizadas</p>
					<table class="table table-hover">
						<thead>
							<tr>
								<th>N°</th>
								<th>Nombre</th>
								<th>Motivo y Comentarios</th>
								<th>Monto</th>
								<th>Fecha de actualización</th>
								<th>Estado</th>
								<th>@</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(deuda, index) in cobrados">
								<td>{{ index+1 }}</td>
								<td class="text-capitalize" @click="dataProps(deuda)" data-bs-toggle="modal" data-bs-target="#patientModal" style="cursor:pointer">{{ deuda.name }}</td>
								<td class="text-capitalize">{{ deuda.motivo }}
									<span v-if="deuda.observaciones!=''"><br>
										{{ deuda.observaciones }}
									</span>
								</td>
								<td>S/ {{ parseFloat(deuda.monto).toFixed(2) }}</td>
								<td>{{ fechaLatam(deuda.fechaActualizacion) }} </td>
								<td>
									<span v-if="deuda.estado == 1"><span title="Deuda pendiente">⚪</span></span>
									<span v-if="deuda.estado == 2"><span title="Deuda cobrada">🟢</span></span>
									<span v-if="deuda.estado == 3"><span title="Deuda perdida">🔴</span></span>
								</td>
								<td >
									<button v-if="deuda.estado==1" class="btn btn-outline-primary btn-sm" title="Cambiar pago" @click="queDeuda = deuda" data-bs-target="#modalPagarDeuda" data-bs-toggle="modal"><i class="fas fa-hand-holding-usd"></i></button>
								</td>
							</tr>
						</tbody>
					</table>
					<p v-if="cobrados.length==0">No hay datos</p>

					</div>
				</div>
			</div></section>

		<ModalNuevoAviso :usuario="idUsuario"></ModalNuevoAviso>
		<ModalEditarAviso :queAviso="queAviso" :usuario="idUsuario"></ModalEditarAviso>
		<ModalEditarPaciente v-if="data" :dataPatient="data"></ModalEditarPaciente>
		<ModalPagarDeuda :deuda="queDeuda" :usuario="idUsuario"></ModalPagarDeuda>
		<ModalCambiarSeguimiento :seguimientos="seguimientos" :idPaciente="queId" :idUsuario="$attrs.idUser" :idRegistro="idRegistro" @cambiar="actualizar()"></ModalCambiarSeguimiento>
		<ModalCambiarDeudas :seguimientos="seguimientos" :idPaciente="queId" :idUsuario="$attrs.idUser" :idRegistro="idRegistro" @cambiar="actualizar()"></ModalCambiarDeudas>
		
	</main>
	
</template>
<script>
import ModalNuevoAviso from './ModalNuevoAviso.vue'
import ModalEditarAviso from './ModalEditarAviso.vue'
import ModalEditarPaciente from '../pacientes/ModalEditPatient.vue'
import ModalPagarDeuda from './ModalPagarDeuda.vue'
import ModalCambiarSeguimiento from '../adicionales/ModalCambiarSeguimiento.vue'
import ModalCambiarDeudas from './ModalCambiarDeudas.vue'

import moment from 'moment';

export default {
	components:{ ModalNuevoAviso, ModalEditarAviso, ModalEditarPaciente, ModalPagarDeuda, ModalCambiarSeguimiento, ModalCambiarDeudas },
	name: 'HomeRecordatorios',
	data() {
		return {
			mes: moment().format('M'), tipo: null, clientes: [], avisos:[], deudas:[], cobrados:[], idUsuario:null, queAviso:null, interesados:[], fechaCumple:moment().format('YYYY-MM-DD'), activoCumple: false, activoAviso: false, activoInteresado: false, activoDeudas: false, nFecha:moment().format('YYYY-MM-DD'), data: null, fechaAviso: moment().format('YYYY-MM-DD'), avisosAnteriores:[], queInteresado:[], filtro:'todos', filtroDoc:-1, fechaInteresados: moment().format('YYYY-MM-DD'), queDeuda:null, anteriores:[], seguimientos:[], queId:null, idRegistro:null,
			referencias:[{1:'Ninguno', 2:'Recomendación', 3:'Publicidad de internet', 4:'Publicidad Escrita',5:'Publicidad de TV/Radio',6:'Referido',7:'Sist. Recepción',}],
			
		}
	},
	mounted(){
		this.axios.get('/api/user').
		then(res=> this.idUsuario = res.data.user.id )
		this.listarProfesionales();
		this.axios.get('/api/pedirSeguimientos')
		.then(response => this.seguimientos = response.data )
	},
	methods: {
		async cargarDatos(tipo) {
			this.activoCumple = false;
			this.activoAviso = false;
			this.activoInteresado = false;
			this.tipo = tipo;
			switch (tipo) {
				case 'cumpleaños':
					this.activoCumple = true;
					await this.axios.get(`/api/listarCumpleanos/${this.fechaCumple}`)
						.then(response => { //console.log(response.data);
							this.clientes = response.data
						});
					break;
					case 'avisos':
						this.activoAviso = true;
						await this.axios.get(`/api/listarAvisos/${this.fechaAviso}`)
						.then(response => {this.avisos = response.data.avisos; this.avisosAnteriores = response.data.anteriores})
						break;

					case 'deudas':
						this.activoDeudas = true;
						await this.axios.get(`/api/listarDeudas/`+this.nFecha)
						.then(response => {this.deudas = response.data.deudas; this.cobrados = response.data.cobrados;})
						break;
				default:
					break;
			}
		},
		dataProps(data){
			this.$emit('cambioDato');
			this.data= data
		},
		actualizarAvisos(){ this.cargarDatos('avisos') },
		fechaLatam(fecha) {
			return moment(fecha).format('DD/MM/YYYY');
		},
		horaLatam(fecha) {
			return moment(fecha).format('hh:mm a');
		},
		edad(fecha) {
			let miEdad = moment(fecha);
			return moment().diff(miEdad, 'years');
		},
		cambiarFecha(tipo){
			let queMes = moment(document.getElementById('fechaCumple').value).format('M')
			if(queMes != this.mes && queMes !='Invalid date'){
				this.mes = queMes;				
			}
			switch(tipo){
				case 'avisos': this.cargarDatos('avisos'); break;
				case 'cumpleaños': this.cargarDatos('cumpleaños'); break;
			}
		},

		actualizar(){ this.queId=null, this.cargarDatos() },
		fechaFrom(fecha){
			moment.locale('es')
			return moment(fecha, 'YYYY-MM-DD').fromNow(true);
		},
		async listarProfesionales() {
			await this.axios.get('/api/profesional')
				.then(response => {
					this.doctores = response.data;
				})
		},
		colorDeuda(id){
			switch (id) {
				case 1: case '1': return '⚪';
				case 2: case '2': return '🟢';
				case 3: case '3': return '🔴';
				case 4: case '4': return '🟡';
				default: break;
			}	
		},
		getEstadoDeuda(estado){
			switch (estado) {
				case 1: case '1': return 'Deuda pendiente';
				case 2: case '2': return 'Deuda cobrada';
				case 3: case '3': return 'Deuda perdida';
				case 4: case '4': return 'Deuda con plazo extendido';
				default: break;
			}	
		}
	}
	
}
</script>
<style scoped>
.cursor:hover {
	cursor: pointer;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.card.active{font-weight: bold; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; }
.btn-group>.btn:first-child{
	border-top-left-radius: 5px!important;
	border-bottom-left-radius: 6px!important;
}
.puntero{ cursor: pointer; }
.text-amarillo{ color: yellow}

</style>