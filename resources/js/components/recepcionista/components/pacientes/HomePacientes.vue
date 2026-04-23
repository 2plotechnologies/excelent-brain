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

		<p class="mt-4 mb-3 font-weight-bold text-dark" style="font-size: 1.1rem;">Últimos pacientes registrados</p>
    
    <div class="table-responsive custom-table-container">
      <table class="table table-hover align-middle">
        <thead>
          <tr>
            <th class="text-uppercase text-xs font-weight-bolder opacity-7 ps-4">Paciente</th>
            <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-center">Estado</th>
            <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-center">Próxima Cita</th>
            <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-center">Deuda</th>
            <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-center">Última Visita</th>
            <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-end pe-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(paciente, index) in busqueda" :key="index" class="patient-row">
            <!-- PACIENTE -->
            <td class="ps-4 py-3">
              <div class="d-flex align-items-center">
                <div class="avatar-circle me-3" :class="getAvatarBg(index)">
                  {{ getInitials(paciente.name || paciente.nombres) }}
                </div>
                <div class="d-flex flex-column">
                  <h6 class="mb-0 text-sm font-weight-bold text-dark text-capitalize clickable-name" @click="abrirDetallePaciente(paciente)">
                    <i v-if="paciente.vivo==0" class="fas fa-cross me-1 text-muted"></i>
                    {{ (paciente.name + ' ' + (paciente.nombres || '')).trim().toLowerCase() }}
                  </h6>
                  <p class="text-xs text-secondary mb-0">
                    {{ calculateAge(paciente.birth_date) }} años • {{ paciente.gender == 1 ? 'Masculino' : (paciente.gender == 0 ? 'Femenino' : 'Other') }}
                  </p>
                </div>
              </div>
            </td>

            <!-- ESTADO -->
            <td class="text-center">
              <span class="badge badge-pill badge-status-active">
                <i class="fas fa-heart me-1"></i> Activo
              </span>
            </td>

            <!-- PRÓXIMA CITA -->
            <td class="text-center">
              <span v-if="paciente.proximaCita && paciente.proximaCita.length > 0" class="text-xs font-weight-bold text-secondary"> {{ formatDate(paciente.proximaCita[0].date) }}</span>
              <span v-else class="text-xs font-weight-bold text-secondary">Sin cita</span>
            </td>

            <!-- DEUDA -->
            <td class="text-center">
              <span v-if="paciente.deudaTotal > 0" class="text-xs font-weight-bold text-danger">S/ {{ paciente.deudaTotal.toFixed(2) }}</span>
              <span v-else class="text-xs font-weight-bold text-secondary">S/ 0.00</span>
            </td>

            <!-- ÚLTIMA VISITA -->
            <td class="text-center">
              <span class="text-xs font-weight-bold text-secondary">{{ formatDate(paciente.created_at) }}</span>
            </td>

            <!-- ACCIONES -->
            <td class="text-end pe-4">
              <div class="d-flex justify-content-end align-items-center gap-2">
                <!-- Quick View -->
                <button class="btn btn-link text-secondary p-0 mb-0" @click="abrirDetallePaciente(paciente)" title="Ver detalle">
                  <i class="far fa-eye text-lg"></i>
                </button>
                
                <!-- Quick Chat -->
                <button class="btn btn-link text-secondary p-0 mb-0" data-bs-toggle="modal" data-bs-target="#modalChat" @click="dataPaciente=paciente" title="Enviar mensaje">
                  <i class="far fa-comment-dots text-lg"></i>
                </button>

                <!-- More Actions Dropdown -->
                <div class="dropdown">
                  <button class="btn btn-link text-secondary p-0 mb-0" type="button" :id="'dropdownMenu' + index" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-ellipsis-v text-lg"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end shadow-lg border-0" :aria-labelledby="'dropdownMenu' + index">
                    <li><h6 class="dropdown-header">Acciones del Paciente</h6></li>
                    
                    <!-- Acuerdos -->
                    <li>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalAcuerdos" @click="dataPaciente = paciente">
                        <i class="fa-solid fa-handshake-angle me-2 text-primary"></i> Acuerdos
                      </a>
                    </li>

                    <!-- Hobbies -->
                    <li v-if="paciente.vivo==1">
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalVerHobbies" @click="misHobbies=JSON.parse(paciente.hobbies); queId = paciente.id; this.$emit('cargarHobbies')">
                        <i class="fa-solid fa-baseball-bat-ball me-2 text-info"></i> Hobbies
                      </a>
                    </li>

                    <!-- Club -->
                    <li v-if="paciente.vivo==1">
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#editarClub" @click="datosLike(paciente.club, paciente.id)">
                        <template v-if="paciente.club=='0'"><i class="fa-regular fa-hand-back-fist me-2"></i> Club: Neutro</template>
                        <template v-if="paciente.club=='1'"><i class="fa-solid fa-thumbs-up me-2 text-success"></i> Club: Like</template>
                        <template v-if="paciente.club=='2'"><i class="fa-solid fa-thumbs-down me-2 text-danger"></i> Club: Dislike</template>
                      </a>
                    </li>

                    <!-- Membresías -->
                    <li v-if="paciente.vivo==1">
                      <a class="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offVerMembresias" @click="queId = paciente.id; nombrePaciente= paciente.name + ' ' + paciente.nombres; dataPaciente = paciente">
                        <i class="far fa-star me-2 text-warning"></i> Paquetes / Membresías
                      </a>
                    </li>

                    <!-- Semáforo / Actitud -->
                    <li v-if="paciente.vivo==1">
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalVerEstados" @click="dataProps(paciente)">
                        <i class="fas fa-traffic-light me-2"></i> Estado de Actitud
                      </a>
                    </li>

                    <li><hr class="dropdown-divider"></li>
                    <li><h6 class="dropdown-header">Clínica</h6></li>

                    <!-- Triaje -->
                    <li>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalVerTriajesViejos" @click="verTriajesViejos(index)">
                        <i class="fa-solid fa-clipboard-list me-2"></i> Historial Triajes ({{ paciente.triajes.length }})
                      </a>
                    </li>
                    <li v-if="paciente.vivo==1">
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalTriaje" @click="dataProps(paciente)">
                        <i class="fa-solid fa-lungs me-2 text-info"></i> Nuevo Triaje
                      </a>
                    </li>

                    <!-- Faltas -->
                    <li>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalVerFaltas" @click="queId=paciente.id; cantFaltas = paciente.faults;">
                        <i class="fas fa-user-times me-2 text-danger"></i> Faltas ({{ paciente.faults }})
                      </a>
                    </li>

                    <!-- Reprogramaciones -->
                    <li>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalVerReprogramacionesViejos" @click="verReprogramacionesViejos(paciente.id)">
                        <i class="fas fa-calendar-alt me-2 text-warning"></i> Reprogramaciones ({{ paciente.reprogramaciones }})
                      </a>
                    </li>

                    <!-- Recetas -->
                    <li>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#recetasModal" @click="dataProps(paciente)">
                        <i class="fa-solid fa-flask-vial me-2 text-primary"></i> Recetas
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
    <ModalChat :patient="dataPaciente"></ModalChat>
		
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
import ModalChat from './ModalChat.vue';
//Code.
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

  components: { Doughnut, Bar, DetallePaciente, ModalEdicionPaciente, ModalRecetas, ModalFaltas, ModalTriaje, ModalVerTriajesViejos, ModalNewPatient, ModalVerEstados, ModalCambiarLike, ModalVerFaltas, ModalVerHobbies, ModalVerReprogramacionesViejos, OffVerMembresias, ModalAcuerdos, ModalChat },

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
		},
    calculateAge(birthday) {
      if (!birthday) return '0';
      const birthDate = new Date(birthday);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    getInitials(name) {
      if (!name) return '??';
      const parts = name.trim().split(' ');
      let initials = '';
      for (let i = 0; i < parts.length && i < 2; i++) {
        if (parts[i].length > 0 && parts[i] !== '') {
          initials += parts[i][0].toUpperCase();
        }
      }
      return initials || '??';
    },
    getAvatarBg(index) {
      const bgs = ['bg-primary-soft', 'bg-success-soft', 'bg-info-soft', 'bg-warning-soft', 'bg-danger-soft'];
      return bgs[index % bgs.length];
    },
    formatDate(dateStr) {
      if (!dateStr) return '-';
      const options = { day: '2-digit', month: 'short', year: 'numeric' };
      return new Date(dateStr).toLocaleDateString('es-ES', options);
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
  },
}
</script>

<style scoped>
.custom-table-container {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  padding: 1rem;
}

.table thead th {
  border-bottom: 1px solid #f0f2f5;
  color: #8392ab;
  font-weight: 700;
  padding: 1rem 0.5rem;
}

.patient-row {
  transition: all 0.2s ease;
}

.patient-row:hover {
  background-color: #f8fafc !important;
}

.clickable-name {
  cursor: pointer;
  transition: color 0.2s;
}

.clickable-name:hover {
  color: #1e60ff !important;
}

.avatar-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: #1e60ff;
}

.bg-primary-soft { background-color: #eaf2ff; color: #1e60ff; }
.bg-success-soft { background-color: #e8fdf5; color: #10b981; }
.bg-info-soft { background-color: #e0f2fe; color: #0ea5e9; }
.bg-warning-soft { background-color: #fef6e5; color: #f59e0b; }
.bg-danger-soft { background-color: #fbe3e4; color: #ef4444; }

.badge-status-active {
  background-color: #e8fdf5;
  color: #10b981;
  font-weight: 600;
  padding: 0.5em 1em;
  border-radius: 30px;
  font-size: 0.75rem;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.text-xs { font-size: 0.75rem !important; }
.text-sm { font-size: 0.875rem !important; }
.text-lg { font-size: 1.1rem !important; }

.dropdown-item {
  padding: 0.6rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #4a5568;
  display: flex;
  align-items: center;
}

.dropdown-item:hover {
  background-color: #f7fafc;
  color: #1e60ff;
}

.dropdown-header {
  font-size: 0.65rem;
  text-transform: uppercase;
  font-weight: 800;
  color: #cbd5e0;
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem;
}

.gap-2 { gap: 0.5rem !important; }
</style>
