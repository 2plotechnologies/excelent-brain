<template>
	<div class="p-4" style="background-color: #f8f9fc; min-height: 100vh;">
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
			<div>
				<h4 class="m-0 font-weight-bold text-dark"><i class="fas fa-users text-primary mr-2"></i> Resumen de Visitas por Paciente</h4>
				<small class="text-muted">Gestión de cartera de pacientes del Dr. {{ dataUser.nombre }}</small>
			</div>
		</div>
		
		<div class="card border-0 shadow-sm mb-4" style="border-radius: 10px; border-top: 4px solid #4e73df !important;">
			<div class="card-body p-4">
				<h6 class="font-weight-bold text-primary mb-3 text-uppercase small"><i class="fas fa-filter mr-1"></i> Filtros de Búsqueda</h6>
				<div class="row g-3 align-items-end">
					<div class="col-md-4">
						<label class="small fw-bold text-muted text-uppercase">Buscar paciente</label>
						<div class="input-group shadow-sm" style="border-radius: 8px; overflow: hidden;">
							<span class="input-group-text bg-light border-0 text-muted"><i class="fas fa-search"></i></span>
							<input type="text" class="form-control bg-light border-0" v-model="filtro.texto" placeholder="DNI o Nombres">
						</div>
					</div>
					<div class="col-md-3">
						<label class="small fw-bold text-muted text-uppercase">Año</label>
						<select class="form-select bg-light border-0 shadow-sm" style="border-radius: 8px;" v-model="filtro.año">
							<option v-for="año in años" :value="año">{{año}}</option>
						</select>
					</div>
					<div class="col-md-3">
						<label class="small fw-bold text-muted text-uppercase">Mes</label>
						<select class="form-select bg-light border-0 shadow-sm text-capitalize" style="border-radius: 8px;" v-model="filtro.mes">
							<option value="-1">Todo el año</option>
							<option class="text-capitalize" v-for="(mes, index) in meses" :value="index+1">{{ capitalizar(mes) }}</option>
						</select>
					</div>
					<div class="col-md-2">
						<button class="btn btn-primary w-100 shadow-sm font-weight-bold" style="border-radius: 8px; padding-top: 10px; padding-bottom: 10px;" @click="buscarCartera()">
							<i class="fa-solid fa-magnifying-glass mr-1"></i> Filtrar
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="card border-0 shadow-sm" style="border-radius: 10px;">
			<div class="card-body p-0">
				<div class="table-responsive">
				<table class="table table-hover align-middle mb-0">
					<thead class="table-light text-muted text-uppercase small" style="font-size: 0.75rem;">
						<tr>
							<th>N°</th>
							<th>Nombre y Apellidos</th>
							<th>Celular</th>
							<th class="d-none">Antigüedad</th>
							<th>N° Citas</th>
							<th>N° Conf.</th>
							<!-- <th>N° Faltas</th> -->
							<th>No asistieron</th>
							<th>N° Anulados</th>
							<th>N° Reprogramados</th>
							<th class="d-none">Actual</th>
							<th class="d-none">@</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(cita, index) in citasResumidas">
							<td>{{ index+1 }}</td>	
							<td class="text-capitalize">{{ cita.patient.name.toLowerCase() }}</td>
							<td>{{ cita.patient.phone }}</td>
							<td class="d-none">{{queViejoEs(cita.patient.id)}}</td>
							<!-- <td>{{ ultimaFecha(cita.patient.id) }}</td> -->
							<td class="puntero" data-bs-toggle="modal" data-bs-target="#modalCitasPreview" @click="cargarCitas('visitas', cita.patient.id)">{{ cita.visitas }}</td>
							<td class="puntero" data-bs-toggle="modal" data-bs-target="#modalCitasPreview" @click="cargarCitas('confirmar', cita.patient.id)">{{ cita.confirmar }}</td>
							<!-- <td class="puntero" data-bs-toggle="modal" data-bs-target="#modalCitasPreview" @click="cargarCitas('faltas', cita.patient.id)">{{ cita.faltas }}</td> -->
							<td class="puntero" data-bs-toggle="modal" data-bs-target="#modalCitasPreview" @click="cargarCitas('sinconfirmar', cita.patient.id)">{{ cita.sinconfirmar }}</td>
							<td class="puntero" data-bs-toggle="modal" data-bs-target="#modalCitasPreview" @click="cargarCitas('anulados', cita.patient.id)">{{ cita.anulados }}</td>
							<td class="puntero" data-bs-toggle="modal" data-bs-target="#modalCitasPreview" @click="cargarCitas('reprogramados', cita.patient.id)">{{ cita.reprogramados }}</td>
							<td class="d-none">{{ cita.actual }}</td>
							<td class="puntero d-none" @click="idGlobal = cita.patient_id; indexGlobal = index" data-bs-toggle="modal" data-bs-target="#modalCambiarSeguimiento">
								<span v-if="cita.patient.seguimiento==1" title="Sin acción"><i class="fa-regular fa-circle"></i></span>
								<span v-else :class=" queColor(cita.patient.seguimiento)" :title="queSeguimiento(cita.patient.seguimiento)"><i class="fas fa-circle"></i></span>
							</td>
						</tr>
					</tbody>
				</table>
				</div>
			</div>
		</div>
		<!-- Modal -->
	<div class="modal fade" id="modalCitasPreview" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content border-0 shadow-lg" style="border-radius: 15px;">
				<div class="modal-header border-0 pb-0 px-4 pt-4">
					<h5 class="modal-title font-weight-bold text-primary" id="exampleModalLabel">
						<i class="fas fa-calendar-check mr-2"></i>{{titulo}}
					</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body p-4">
					<div class="table-responsive border rounded-4 shadow-sm">
					<table class="table table-hover align-middle mb-0">
						<thead>
							<tr>
								<th>N°</th>
								<th>Fecha</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(preview, index) in previewCitas">
								<td>{{ index+1 }}</td>
								<td>{{ fechaLatam(preview.date) }}</td>
							</tr>
							<tr v-if="previewCitas.length==0">
								<td colspan="2">No se encontraron datos</td>
							</tr>
						</tbody>
					</table>
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
	name: 'HomeCartera',
	data(){ return {
		profesionales:[], años:[], meses:['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
		filtro: {texto:'', idProfesional: -1, año: moment().format('YYYY'), mes:-1}, citasResumidas:[], citasCompletas:[], previewCitas:[], titulo:'', idGlobal:-1, indexGlobal:-1,
		seguimientos:[], elegido:[]
	}},
	props:['dataUser'],
	
	methods:{
		async listarProfesional(){
			await this.axios.get('/api/profesional')
			.then(response => {
				this.profesionales=response.data;
			});

			await this.axios.get('/api/pedirSeguimientos')
			.then(response => this.seguimientos = response.data )
			this.seguimientos.sort()
		},
		buscarCartera(){
			let condicion

			this.axios.post('/api/buscarCartera', this.filtro)
			.then(res => { console.log(res.data);
				let hoy=moment().format('YYYY-MM-DD')
				this.citasResumidas = res.data.resumidas;
				this.citasCompletas = res.data.completas;
				this.citasResumidas.forEach((cita, index )=> {
					cita.visitas = Object.values(this.citasCompletas).filter(item => item.patient_id === cita.patient_id).length;
					cita.sinconfirmar = Object.values(this.citasCompletas).filter(item => item.patient_id === cita.patient_id && item.status==1 && moment(item.date).diff(hoy)>0 ).length;
					cita.confirmar = Object.values(this.citasCompletas).filter(item => item.patient_id === cita.patient_id && item.status==2 ).length;
					cita.anulados = Object.values(this.citasCompletas).filter(item => item.patient_id === cita.patient_id && item.status==3 ).length;
					cita.reprogramados = Object.values(this.citasCompletas).filter(item => item.patient_id === cita.patient_id && item.status==4 ).length;
					cita.fatas = cita.patient.faults;
					if(cita.patient?.alta_psicologica == 1 && cita.patient?.alta_psiquiatrica == 1) cita.actual = 'Alta Psicológica y Psiquiátrica'
					else if(cita.patient?.alta_psicologica == 1) cita.actual = 'Alta Psicológica'
					else if(cita.patient?.alta_psiquiatrica == 1) cita.actual = 'Alta Psiquiátrica'
					else{
						condicion =  Object.values(this.citasCompletas).filter(item => item.patient_id === cita.patient_id && item.patient_condition==2 ).length;
						if(condicion>0) cita.actual = 'Continuante'
						else cita.actual = 'Nuevo'
					}
					if(index==0){
						//cita.
					}
					/* this.citasCompletas.filter(x=> {
						if( x.patient_id==id && x.status ==1 ) ''
					}) */
					
				})
			})
		},
		fechaLatam(fecha){
			return moment(fecha).format('DD/MM/YYYY');
		},
		async cargarCitas(caso, id){
			let hoy=moment().format('YYYY-MM-DD')
			switch(caso){
				case 'visitas':
					this.titulo = 'Total de Citas'
					this.previewCitas = this.citasCompletas.filter(item=> item.patient_id == id ); break;
				case 'confirmar':
					this.titulo = 'Citas confirmadas'
					this.previewCitas = this.citasCompletas.filter(item=> item.patient_id == id && item.status==2 ); break;
				case 'sinconfirmar':
					this.titulo = 'Citas sin confirmar'
					this.previewCitas = this.citasCompletas.filter(item=> item.patient_id == id && item.status==1 && moment(item.date).diff(hoy)>0 ); break;
				case 'anulados':
					this.titulo = 'Citas anuladas'
					this.previewCitas = this.citasCompletas.filter(item=> item.patient_id == id && item.status==3 ); break;
				case 'reprogramados':
					this.titulo = 'Citas reprogramadas'
					this.previewCitas = this.citasCompletas.filter(item=> item.patient_id == id && item.status==4 ); break;
			}
		},
		queSeguimiento(item){ if(item) return this.seguimientos.find(x=> x.id == item).seguimiento },
		queColor(item){ if(item)  return this.seguimientos.find(x=> x.id == item).color },
		cambiarItem(item){ this.citasResumidas[this.indexGlobal].patient.seguimiento = item },
		queViejoEs(id){
			moment.locale('es')
			let fechaMasAntigua = new Date();

			let citas = this.citasCompletas.filter(item=> item.patient_id == id );
			citas.forEach(cita=>{
				const fechaItem = new Date(cita.created_at);
				if (fechaItem < fechaMasAntigua) {
					fechaMasAntigua = fechaItem;
				}
			})
			return moment(fechaMasAntigua).fromNow();
		},
		capitalizar(texto) {
			const primeraLetra = texto.charAt(0);
			const primeraLetraMayuscula = primeraLetra.toUpperCase();
			return primeraLetraMayuscula + texto.slice(1);
		}
		
	},
	mounted(){
		//this.idUsuario = this.
		this.filtro.idProfesional = this.dataUser.id
		for(let i=moment().format('YYYY'); i>=2020 ; i--){
			this.años.push(i)
		}
		this.listarProfesional()
	}
}
</script>

<style >
	.puntero{ cursor: pointer; }
	.text-amarillo{ color: yellow}
</style>