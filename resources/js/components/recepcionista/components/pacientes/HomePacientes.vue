<template>
  <main>
    <div v-if="vistaActual === 'lista'">
        <!-- DASHBOARD CARDS -->
        <div class="row mt-4 mb-3">
            <div class="col-xl-2 col-md-4 mb-2">
                <div class="card h-100 py-1" style="border-left: 4px solid #4e73df; border-radius:10px;">
                    <div class="card-body py-2 px-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="text-xs text-muted mb-1">Pacientes Activos</div>
                                <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.pacientesActivos }}</div>
                                <div class="text-xs text-muted mt-1">Total registrados</div>
                            </div>
                            <div class="icon-circle bg-primary-light p-2 rounded" style="background:#eaf2ff">
                                <i class="fas fa-users text-primary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-md-4 mb-2">
                <div class="card h-100 py-1" style="border-left: 4px solid #1cc88a; border-radius:10px;">
                    <div class="card-body py-2 px-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="text-xs text-muted mb-1">Nuevos del Mes</div>
                                <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.nuevosDelMes }}</div>
                                <div class="text-xs text-muted mt-1">Este mes</div>
                            </div>
                            <div class="icon-circle bg-success-light p-2 rounded" style="background:#e8fdf5">
                                <i class="fas fa-user-plus text-success"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-md-4 mb-2">
                <div class="card h-100 py-1" style="border-left: 4px solid #eaecf4; border-radius:10px;">
                    <div class="card-body py-2 px-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="text-xs text-muted mb-1">Con Cita Hoy</div>
                                <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.conCitaHoy }}</div>
                                <div class="text-xs text-muted mt-1">Pacientes agendados</div>
                            </div>
                            <div class="icon-circle bg-light p-2 rounded" style="background:#f8f9fc">
                                <i class="far fa-calendar text-secondary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-md-4 mb-2">
                <div class="card h-100 py-1" style="border-left: 4px solid #f6c23e; border-radius:10px;">
                    <div class="card-body py-2 px-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="text-xs text-muted mb-1">Pacientes con Deuda</div>
                                <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.conDeuda }}</div>
                                <div class="text-xs text-muted mt-1">Sin pago hoy</div>
                            </div>
                            <div class="icon-circle bg-warning-light p-2 rounded" style="background:#fef6e5">
                                <i class="fas fa-dollar-sign text-warning"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-md-4 mb-2">
                <div class="card h-100 py-1" style="border-left: 4px solid #e74a3b; border-radius:10px;">
                    <div class="card-body py-2 px-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="text-xs text-muted mb-1">Casos SOS</div>
                                <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.casosSOS }}</div>
                                <div class="text-xs text-muted mt-1">Emergencias activas</div>
                            </div>
                            <div class="icon-circle bg-danger-light p-2 rounded" style="background:#fbe3e4">
                                <i class="fas fa-exclamation-triangle text-danger"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-md-4 mb-2">
                <div class="card h-100 py-1" style="border-left: 4px solid #1cc88a; border-radius:10px;">
                    <div class="card-body py-2 px-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="text-xs text-muted mb-1">Tasa Retención</div>
                                <div class="h4 mb-0 font-weight-bold text-dark">{{ parseInt(dashData.tasaRetencion) }}%</div>
                                <div class="text-xs text-muted mt-1">Pacientes recurrentes</div>
                            </div>
                            <div class="icon-circle bg-success-light p-2 rounded" style="background:#e8fdf5">
                                <i class="far fa-check-circle text-success"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- SEARCH AND BUTTONS -->
        <div class="row align-items-center mb-3">
            <div class="col-lg-6 mb-2 mb-lg-0">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <button class="btn btn-white bg-white border-right-0 border" type="button" @click="searchPatients()">
                            <i class="fas fa-search text-muted"></i>
                        </button>
                    </div>
                    <input type="text" class="form-control bg-white border-left-0 border" id="searchNamePatient"
                    placeholder="Buscar por DNI, nombre o celular..." autocomplete="off" @keyup.enter="searchPatients()" style="box-shadow:none;">
                </div>
            </div>
            <div class="col-lg-6 text-lg-right text-center">
                <button class="btn btn-primary shadow-sm mr-1" data-bs-toggle="modal" data-bs-target="#modalNewPatient"><i class="fas fa-user-plus"></i> Nuevo Paciente</button>
                <router-link to="/recepcionista/home" class="btn shadow-sm text-white mr-1" style="background-color: #f97316;"><i class="fas fa-plus"></i> Nueva Cita</router-link>
                <button class="btn btn-white border shadow-sm mr-1"><i class="far fa-credit-card"></i> Cobrar Deuda</button>
                <router-link to="/recepcionista/paquetes" class="btn btn-white border shadow-sm"><i class="fas fa-box"></i> Nuevo Paquete</router-link>
            </div>
        </div>

        <!-- CHARTS -->
        <div class="row mb-4">
            <div class="col-md-6 mb-3 mb-md-0">
                <div class="card h-100 border-0 shadow-sm" style="border-radius:10px;">
                    <div class="card-body" style="overflow: scroll;">
                        <h6 class="font-weight-bold text-dark mb-4">Tipos de Atención</h6>
                        <div style="position: relative; height: 250px; width: 100%;" v-if="tiposDataLoaded">
                            <Doughnut :chart-data="donutObj" :chart-options="pieOptions" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card h-100 border-0 shadow-sm" style="border-radius:10px;">
                    <div class="card-body" style="overflow: scroll;">
                        <h6 class="font-weight-bold text-dark mb-4">Estados de Pacientes</h6>
                        <div 
                          :style="{ height: (barObj.labels.length * 50) + 'px', position: 'relative', width: '100%' }"
                          v-if="dashData.completadas !== undefined"
                        >
                            <Bar :chart-data="barObj" :chart-options="barOptions" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

		<p class="mt-3 mb-1 font-weight-bold text-dark">Últimos pacientes registrados</p>
    <table class="table table-hover mt-4">
      <thead>
        <tr>
          <th>N°</th>
          <th>Nombre y apellidos</th>
          <th>Acuerdos</th>
          <th>Hobbie</th>
          <th>Club</th>
          <th>Paquete</th>
          <th>Semáforo</th>
          <th>Triaje</th>
          <th>Faltas</th>
          <th>Reprog.</th>
          <th>Recetas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(paciente, index) in busqueda" :key = "index">
          <th>{{ index+1 }}</th>

					<td class="text-capitalize" @click="abrirDetallePaciente(paciente)" style="cursor:pointer">
						<span v-if="paciente.vivo==0"><i class="fas fa-cross"></i></span>  
						{{ paciente.name ? paciente.name.toUpperCase() : 'SIN NOMBRE' }} {{ paciente.nombres ? paciente.nombres.toUpperCase() : '' }}
					</td>
					<td>
						<button class="btn btn-outline-primary btn-circle btn-md" title="Ver acuerdos" data-bs-toggle="modal" data-bs-target="#modalAcuerdos"
						@click="dataPaciente = paciente" ><i class="fa-solid fa-handshake-angle"></i></button>
					</td>

<!--			
<td class="text-capitalize" @click="dataProps(paciente)" data-bs-toggle="modal" data-bs-target="#patientModal" style="cursor:pointer"><span v-if="paciente.vivo==0"><i class="fas fa-cross"></i></span>  {{ paciente.name ? lowerCase(paciente.name) : 'Sin nombre' }} {{ lowerCase(paciente.nombres) }}</td>
-->
					<td>
						<button v-if="paciente.vivo==1"  class="btn btn-outline-primary btn-circle btn-md" title="Panel de Hobbies" data-bs-toggle="modal" data-bs-target="#modalVerHobbies" @click="misHobbies=JSON.parse(paciente.hobbies); queId = paciente.id; this.$emit('cargarHobbies')">
							<i class="fa-solid fa-baseball-bat-ball"></i>
						</button>
					</td>
					<td v-if="paciente.vivo==1" >
						<button class="btn btn-light" v-if="paciente.club=='0'" data-bs-toggle="modal" data-bs-target="#editarClub" @click="datosLike(paciente.club, paciente.id)"><i class="fa-regular fa-hand-back-fist"></i></button>
						<button class="btn btn-primary" v-if="paciente.club=='1'" data-bs-toggle="modal" data-bs-target="#editarClub" @click="datosLike(paciente.club, paciente.id)"><i class="fa-solid fa-thumbs-up"></i></button>
						<button class="btn btn-danger" v-if="paciente.club=='2'" data-bs-toggle="modal" data-bs-target="#editarClub" @click="datosLike(paciente.club, paciente.id)"><i class="fa-solid fa-thumbs-down"></i></button>
					</td>
					<td v-else></td>
					<td>
						<button v-if="paciente.vivo==1" class="btn btn-outline-primary btn-circle"  data-bs-toggle="offcanvas" data-bs-target="#offVerMembresias" @click="queId = paciente.id; nombrePaciente= paciente.name + ' ' + paciente.nombres; dataPaciente = paciente"><i class="far fa-star"></i></button>
					</td>
					<td v-if="paciente.vivo==1" >
						<div v-if="paciente.semaforo[0]">
							<button v-if="paciente.semaforo[0].codigo==1" class="btn btn-primary btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerEstados" @click="dataProps(paciente)">
								<span  title="Neutro"><i class="fas fa-smile"></i></span>
							</button>
							<button v-if="paciente.semaforo[0].codigo==2" class="btn btn-success btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerEstados" @click="dataProps(paciente)">
								<span title="Cumplidor"> <i class="fas fa-laugh-wink"></i> </span>
							</button>
							<button v-if="paciente.semaforo[0].codigo==3" class="btn btn-success btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerEstados" @click="dataProps(paciente)">
								<span title="Promotor"> <i class="fas fa-laugh-wink"></i> </span>
							</button>
							<button v-if="paciente.semaforo[0].codigo==4" class="btn btn-success btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerEstados" @click="dataProps(paciente)">
								<span title="Wow"> <i class="fas fa-laugh-wink"></i> </span>
							</button>
							<button v-if="paciente.semaforo[0].codigo==5" class="btn btn-warning btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerEstados" @click="dataProps(paciente)">
								<span title="Reprogramador"> <i class="fas fa-meh"></i> </span> 
							</button>
							<button v-if="paciente.semaforo[0].codigo==6" class="btn btn-warning btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerEstados" @click="dataProps(paciente)">
								<span title="Exigente"> <i class="fas fa-meh"></i> </span>
							</button>
							<button v-if="paciente.semaforo[0].codigo==7" class="btn btn-danger btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerEstados" @click="dataProps(paciente)">
								<span title="Deudor"> <i class="fas fa-angry"></i> </span>
							</button>
							<button v-if="paciente.semaforo[0].codigo==8" class="btn btn-warning btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerEstados" @click="dataProps(paciente)">
								<span title="Insatisfecho"> <i class="fas fa-frown"></i> </span>
							</button>
							<button v-if="paciente.semaforo[0].codigo==9" class="btn btn-danger btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerEstados" @click="dataProps(paciente)">
								<span title="Paciente de riesgo"> <i class="fas fa-frown"></i> </span>
							</button>
							<button v-if="paciente.semaforo[0].codigo==10" class="btn btn-danger btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerEstados" @click="dataProps(paciente)">
								<span title="Problemático"> <i class="fas fa-frown"></i> </span>
							</button>
						</div>
						<div v-else>
							<button class="btn btn-secondary btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerEstados" @click="dataProps(paciente)">
								<span title="Normal sin registro"><i class="fas fa-smile"></i></span>
							</button>
						</div>
					</td>
					<td v-else></td>
					<td>
						<button class="btn btn-outline-secondary btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerTriajesViejos" title="Historial de Triajes" @click="verTriajesViejos(index)">{{ paciente.triajes.length }}</button>
						<button v-if="paciente.vivo==1"  class="btn btn-outline-info btn-circle btn-md" data-bs-toggle="modal" @click="dataProps(paciente)" data-bs-target="#modalTriaje" title="Nuevo triaje"><i class="fa-solid fa-lungs"></i></button>
					</td>
          <td>
            <button class="btn btn-outline-info btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerFaltas" @click="queId=paciente.id; cantFaltas = paciente.faults;" >{{ paciente.faults }} </button>
          </td>
					<td>
						<button class="btn btn-outline-secondary btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerReprogramacionesViejos" title="Historial de Reprogramaciones" @click="verReprogramacionesViejos(paciente.id)">{{ paciente.reprogramaciones }}</button>
					</td>
          <td>
            <button
            class="btn btn-outline-info btn-circle btn-md"
            @click="dataProps(paciente)"
            data-bs-toggle="modal"
            data-bs-target="#recetasModal"
            >
            <i class="fa-solid fa-flask-vial"></i></button>
          </td>
         
        </tr>
      </tbody>
    </table>
    </div>
    
    <DetallePaciente 
      v-else 
      :pacienteId="dataPaciente.id" 
      @volver="vistaActual = 'lista'" 
      @editarPaciente="dataPaciente = $event" 
    />

		<ModalEdicionPaciente :dataPatient="dataPaciente"></ModalEdicionPaciente>
    <modal-recetas v-if="data" :dataPatient="data"></modal-recetas>
    <modal-faltas v-if="data" :dataPatient="data"></modal-faltas>
    <modal-triaje v-if="data" :dataPatient="data" :profesionales="profesionales"></modal-triaje>
		<modal-ver-triajes-viejos :triajes="dataTriajes"></modal-ver-triajes-viejos>
		<ModalVerReprogramacionesViejos :reprogramaciones="reprogramaciones"></ModalVerReprogramacionesViejos>
    <modal-new-patient @cargarPacienteSimpleNuevo="getPatients"></modal-new-patient>
		<modal-ver-estados :dataPatient="data" :estados="estados"></modal-ver-estados>
		<ModalCambiarLike :like="like" :id="id" @updateLike="Like"></ModalCambiarLike>
		<ModalVerFaltas :queId="queId" :cantFaltas="cantFaltas"></ModalVerFaltas>
		<ModalVerHobbies :hobbies="hobbies" :id="queId" :misHobbies="misHobbies" ></ModalVerHobbies>
		<OffVerMembresias :queId="queId" :nombrePaciente="nombrePaciente" :idUser="$attrs.idUser" :profesional="profesionales" :paciente="dataPaciente"></OffVerMembresias>
		<ModalAcuerdos :paciente="dataPaciente" :idUser="$attrs.idUser"></ModalAcuerdos>
		
  </main>
</template>

<script>
import { Doughnut, Bar } from 'vue-chartjs/legacy'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement, ChartDataLabels)

import DetallePaciente from './DetallePaciente.vue';
import ModalEdicionPaciente from './ModalEditarPaciente.vue';
import ModalRecetas from './ModalRecetas.vue';
import ModalFaltas from './ModalFaltas.vue';
import ModalTriaje from './ModalTriaje.vue';
import ModalVerTriajesViejos from './ModalVerTriajesViejos.vue'
import ModalVerReprogramacionesViejos from './ModalVerReprogramacionesViejos.vue'
import ModalNewPatient from './../pacientes/ModalNewPatient.vue'
import ModalVerEstados from './ModalVerEstados.vue'
import ModalCambiarLike from './ModalCambiarLike.vue'
import ModalVerFaltas from './reportes/ModalVerFaltas.vue'
import ModalVerHobbies from './reportes/ModalVerHobbies.vue'
import OffVerMembresias from './OffVerMembresias.vue';
import ModalAcuerdos from './ModalAcuerdos.vue';

export default {
  name: 'HomePacientes',

  data () {
    return {
      dataPatients: [], queId:null, vistaActual: 'lista',
      data: null, dataTriajes:null,
      dashData: { pacientesActivos:0, nuevosDelMes:0, conCitaHoy:0, conDeuda:0, casosSOS:0, tasaRetencion:0, pendientes:0, completadas:0, canceladas:0, reprogramadas:0, tiposAtencion:[] },
      tiposDataLoaded: false,
      donutObj: {
          labels: [],
          datasets: [{ backgroundColor: ['#1e60ff','#f97316','#10b981','#a855f7', '#ff0000', '#00ff00', '#ff00ff', '#00ffff'], data: [] }]
      },
      barObj: {
        labels: ['Confirmadas','Pendientes','Canceladas','Reprogramadas'],
        datasets: [{
          label: 'Pacientes',
          backgroundColor: ['#10b981', '#f59e0b', '#ef4444', '#0ea5e9'],
          borderWidth: 0,
          data: [0, 0, 0, 0],
          categoryPercentage: 0.9, // 🔥 menos espacio entre categorías
          barPercentage: 0.9,// 🔥 barras más gruesas
          barThickness: undefined,       
        }]
      },
      pieOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          },
          datalabels: {
            display: false // 🔥 CLAVE
          }
        }
      },
      barOptions: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        layout: {
          padding: 0 // 🔥 elimina espacio extra
        },
        plugins: {
          legend: { display: false },
          datalabels: { display: false }
        },
        scales: {
          x: {
            display: false,
            beginAtZero: true
          },
          y: {
            grid: { display: false, drawBorder: false },
            ticks: {
              color: '#6b7280',
              padding: 5
            }
          }
        }
      },
      busqueda: [], like:0, id:-1, cantFaltas:-1, reprogramaciones:[],
      totalPatients:[], nombrePaciente:'',
			estados:[
				{id: 1, valor: 'Neutro', detalle: 'No tiene ningún registro de actitud'},
				{id: 2, valor: 'cumplidor', detalle: 'es un paciente exclente'},
				{id: 3, valor: 'promotor', detalle: 'promueve actividades entre sus compañeros o la empresa'},
				{id: 4, valor: 'wow', detalle: 'es involucrado en actividades, participativo'},
				{id: 5, valor: 'reprogramador', detalle: 'suele aplazarcitas y actividades'},
				{id: 6, valor: 'exigente', detalle: 'un paciente/cliente que siempre pide un trato especial'},
				{id: 7, valor: 'deudor', detalle: 'paciente con deudas'},
				{id: 8, valor: 'insatisfecho', detalle: 'suele quejarse de los servicios'},
				{id: 9, valor: 'paciente de riesgo', detalle: 'paciente con amenazas o actos de violencia.'},
				{id: 10, valor: 'problemático', detalle: 'paciente con problemas.'},
			],
			hobbies:['pintura','dibujo', 'fotografía', 'tejido', 'costura', 'joyería', 'senderismo', 'acampar', 'jardinería', 'pesca', 'ciclismo', 'deportes', 'fútbol', 'basket', 'tenis', 'ajedrez', 'juegos de mesa', 'billar', 'música', 'tocar un instrumento', 'canto', 'composición musical', 'producción musical', 'gastronomía', 'cocina', 'recetas', 'horneado', 'postres', 'manualidades', 'origami', 'modelodo en arcilla', 'creación', 'natación', 'surf', 'kayac', 'buceo', 'esquí', 'tecnología', 'programación', 'robótica', 'computación', 'edición de videos', 'diseño gráfico', 'coleccionismo', 'monedas', 'vinilos', 'baile', 'danzas', 'escritura', 'periodismo', 'poesía', 'libros', 'lectura', 'cuentos', 'idiomas', 'viajes', 'exploración de lugares', 'fitnes', 'gym', 'yoga', 'pilates', 'entrenamiento', 'meditación', 'voluntariado', 'mascotas', 'animalista', 'astronomía', 'jardinería', 'plantas', 'huertos', 'paisajes', 'cine', 'series', 'novelas'], misHobbies:[], dataPaciente:{dni:'', phone:'',name:'',nombres:'',email:'',birth_date:'',occupation:'',marital_status:'',instruction_degree:'',
				relative:[{}, {}],
				address:[{}],
			}

    }
  },

  components: { Doughnut, Bar, DetallePaciente, ModalEdicionPaciente, ModalRecetas, ModalFaltas, ModalTriaje, ModalVerTriajesViejos, ModalNewPatient, ModalVerEstados, ModalCambiarLike, ModalVerFaltas, ModalVerHobbies, ModalVerReprogramacionesViejos, OffVerMembresias, ModalAcuerdos },

  props: {
    profesionales:null
  },

  methods: {

    async fetchDashboardPacientes() {
        try {
            let res = await this.axios.get('/api/dashboardModuloPacientes');
            let data = res.data;
            this.dashData = data;
            if(data.tiposAtencion && data.tiposAtencion.length > 0) {
                this.donutObj.labels = data.tiposAtencion.map(t => t.descripcion);
                this.donutObj.datasets[0].data = data.tiposAtencion.map(t => t.total);
                this.tiposDataLoaded = true;
            }
            this.barObj.datasets[0].data = [
                data.completadas || 0,
                data.pendientes || 0,
                data.canceladas || 0,
                data.reprogramadas || 0
            ];
        } catch(e) { console.error(e) }
    },

    updateFaults(id,faults){
      if(confirm('Estás seguro de agregar una falta a este usuario?')){
        this.axios.get(`/api/updateFaults/${id}/${faults}`)
          .then(res => {
            this.getPatients()
          })
        }
    },
    async getPatients () {
      this.busqueda = []
      await this.axios.get(`/api/getLast10Patients`)
      .then(res => { //console.log(res.data);
        this.dataPatients = res.data;
        this.busqueda = this.dataPatients;

        this.busqueda = [];
        this.dataPatients.forEach((el, index) => {
          //if (index < 5) {
            this.busqueda.push(el);
          //}
        })

      })
      .catch(err => {
        console.error(err)
      })
    },
		Like(valores){
			let index = this.busqueda.findIndex(b=> b.id ==valores.id)
			this.busqueda[index].club = valores.seleccionado;
		},
    async searchPatients () {
      let valueInput = document.getElementById("searchNamePatient").value; 
      if(valueInput === ''){
        this.getPatients()
      }else{
        let coincidenceDni = []

				await this.axios.get(`/api/searchPatientByNameDni/${valueInput}`)
				.then(res => {
					this.totalPatients = res.data;

					coincidenceDni = this.totalPatients.filter(el => el.dni == valueInput)        

					if(coincidenceDni.length > 0){
						this.busqueda = coincidenceDni
					}else{
					const words = valueInput.split(' ')
					words.forEach((word)=>{
						if(/[0-9]/.test(word)){
							this.totalPatients = this.totalPatients.filter(el => el.dni != null && el.dni.matches(word) ? el : null)
							this.busqueda.push(...this.totalPatients)
						}
						this.totalPatients = this.totalPatients.filter(el => el.name.match(new RegExp(`${word}`,'ig')) ? el : null)
						this.busqueda.push(...this.totalPatients)
						//const coincidence = this.dataPatients.filter(el => el.name.match(new RegExp(`${word}`,'ig')).split(' ') ? el : null)
						//
					})        
					this.busqueda = this.totalPatients    
					}
				})
				.catch(err => {
					console.error(err)
				})
      }
    },

    dataProps (data) {
			this.data = data;
			//this.$emit('cambioDato');
    },
		datosLike(like, id){
			this.like = like;
			this.id = id;
		},

    lowerCase (text = '...') {
      return text.toLowerCase();
    },
		async listarprofesional(){
      await this.axios.get('/api/profesional')
      .then(response => {
        this.profesionales=response.data;
      })
    },
    abrirDetallePaciente(paciente) {
      this.prepararPaciente(paciente);
      this.vistaActual = 'detalle';
    },
		prepararPaciente(paciente){
			if(!paciente.relative[0]) paciente.relative[0]={
				name:'', address:[], kinship:'', id:-1
			}
			if(!paciente.relative[1]) paciente.relative[1]={
				name:'', address:[], kinship:'', id:-1
			}
			this.dataPaciente = paciente
		},
		verTriajesViejos(index){
			this.dataTriajes = this.busqueda[index].triajes;
		},
		async verReprogramacionesViejos(id){
			await this.axios.get('/api/verReprogramaciones/'+id)
			.then(response=>{
				this.reprogramaciones = response.data;
			})
		}
  },
	updated () {
		this.actualizarDatos
	},
  created () {
    this.getPatients();
		this.listarprofesional();
		this.hobbies.sort();
    this.fetchDashboardPacientes();
  }
}
</script>
