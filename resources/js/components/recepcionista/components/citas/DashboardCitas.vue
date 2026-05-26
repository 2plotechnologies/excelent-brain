<template>
  <div class="px-3" style="background-color: #f8f9fc; min-height: 100vh;">
      
      <!-- DASHBOARD CARDS ROW -->
      <div class="d-flex flex-wrap mb-4" style="gap: 15px;">
          <!-- Citas Hoy -->
          <div class="card flex-fill py-1 shadow-sm border-0" style="border-left: 4px solid #4e73df; border-radius:10px;">
              <div class="card-body py-2 px-3">
                  <div class="d-flex justify-content-between align-items-center">
                      <div>
                          <div class="text-xs text-muted mb-1">Citas Hoy</div>
                          <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.totalCitasHoy }}</div>
                      </div>
                      <div class="icon-circle bg-primary-light p-2 rounded" style="background:#eaf2ff">
                          <i class="far fa-calendar-alt text-primary"></i>
                      </div>
                  </div>
              </div>
          </div>
          <!-- Confirmadas -->
          <div class="card flex-fill py-1 shadow-sm border-0" style="border-left: 4px solid #1cc88a; border-radius:10px;">
              <div class="card-body py-2 px-3">
                  <div class="d-flex justify-content-between align-items-center">
                      <div>
                          <div class="text-xs text-muted mb-1">Confirmadas</div>
                          <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.totalCitasCompletadas }}</div>
                      </div>
                      <div class="icon-circle bg-success-light p-2 rounded" style="background:#e8fdf5">
                          <i class="far fa-check-circle text-success"></i>
                      </div>
                  </div>
              </div>
          </div>
          <!-- Pendientes -->
          <div class="card flex-fill py-1 shadow-sm border-0" style="border-left: 4px solid #f6c23e; border-radius:10px;">
              <div class="card-body py-2 px-3">
                  <div class="d-flex justify-content-between align-items-center">
                      <div>
                          <div class="text-xs text-muted mb-1">Pendientes</div>
                          <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.totalCitasPendientes }}</div>
                      </div>
                      <div class="icon-circle bg-warning-light p-2 rounded" style="background:#fef6e5">
                          <i class="far fa-clock text-warning"></i>
                      </div>
                  </div>
              </div>
          </div>
          <!-- Canceladas -->
          <div class="card flex-fill py-1 shadow-sm border-0" style="border-left: 4px solid #e74a3b; border-radius:10px;">
              <div class="card-body py-2 px-3">
                  <div class="d-flex justify-content-between align-items-center">
                      <div>
                          <div class="text-xs text-muted mb-1">Canceladas</div>
                          <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.totalCitasCanceladas }}</div>
                      </div>
                      <div class="icon-circle bg-danger-light p-2 rounded" style="background:#fbe3e4">
                          <i class="far fa-times-circle text-danger"></i>
                      </div>
                  </div>
              </div>
          </div>
          <!-- Reprogramadas -->
          <div class="card flex-fill py-1 shadow-sm border-0" style="border-left: 4px solid #36b9cc; border-radius:10px;">
              <div class="card-body py-2 px-3">
                  <div class="d-flex justify-content-between align-items-center">
                      <div>
                          <div class="text-xs text-muted mb-1">Reprogramadas</div>
                          <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.totalCitasReprogramadas }}</div>
                      </div>
                      <div class="icon-circle bg-info-light p-2 rounded" style="background:#eaf8fa">
                          <i class="fas fa-sync-alt text-info"></i>
                      </div>
                  </div>
              </div>
          </div>
          <!-- No Asistencias -->
          <div class="card flex-fill py-1 shadow-sm border-0" style="border-left: 4px solid #858796; border-radius:10px;">
              <div class="card-body py-2 px-3">
                  <div class="d-flex justify-content-between align-items-center">
                      <div>
                          <div class="text-xs text-muted mb-1">No Asistencias</div>
                          <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.totalCitasNoAsistidas }}</div>
                      </div>
                      <div class="icon-circle bg-secondary-light p-2 rounded" style="background:#f8f9fc">
                          <i class="fas fa-user-times text-secondary"></i>
                      </div>
                  </div>
              </div>
          </div>
          <!-- Ocupacion -->
          <div class="card flex-fill py-1 shadow-sm border-0" style="border-left: 4px solid #eaecf4; border-radius:10px;">
              <div class="card-body py-2 px-3">
                  <div class="d-flex justify-content-between align-items-center">
                      <div>
                          <div class="text-xs text-muted mb-1">Profesionales</div>
                          <div class="h4 mb-0 font-weight-bold text-dark">{{ profesionalesCount }}</div>
                          <div class="text-xs text-muted mt-1">Activos esta sem.</div>
                      </div>
                      <div class="icon-circle bg-light p-2 rounded" style="background:#f8f9fc">
                          <i class="fas fa-user-md text-secondary"></i>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- CHART HEADER -->
        <div class="d-flex justify-content-between align-items-center mb-2">
            <h5 class="mb-0 font-weight-bold text-dark">
                <i class="fas fa-chart-pie text-primary mr-2"></i> Análisis de Citas
            </h5>

            <button 
                class="btn btn-sm btn-toggle-charts"
                @click="showCharts = !showCharts"
            >
                <i :class="showCharts ? 'fas fa-eye-slash mr-1' : 'fas fa-eye mr-1'"></i>
                {{ showCharts ? 'Ocultar' : 'Mostrar' }}
            </button>
        </div>

      <!-- CHARTS ROW -->
      <transition name="fade-slide">
      <div class="row mb-4" v-if="showCharts">
          <!-- Estado Citas Hoy (Donut) -->
          <div class="col-md-4 mb-3 mb-md-0">
              <div class="card h-100 border-0 shadow-sm" style="border-radius:10px;">
                  <div class="card-body">
                      <h6 class="font-weight-bold text-dark mb-4">Estado de Citas - Hoy</h6>
                      <div style="position: relative; height: 100%; width: 100%;" v-if="estadosCitasHoyObj.labels.length">
                          <Doughnut :chart-data="estadosCitasHoyObj" :chart-options="donutOptions" />
                      </div>
                      <div v-else class="text-center text-muted d-flex h-100 align-items-center justify-content-center">Sin datos hoy</div>
                  </div>
              </div>
          </div>

          <!-- Ocupacion Semanal por Profesional (Bar) -->
          <div class="col-md-4 mb-3 mb-md-0">
              <div class="card h-100 border-0 shadow-sm" style="border-radius:10px;">
                  <div class="card-body">
                      <h6 class="font-weight-bold text-dark mb-4">Ocupación Semanal por Profesional</h6>
                      <div style="position: relative; height: 100%; width: 100%;" v-if="ocupacionObj.labels.length">
                          <Bar :chart-data="ocupacionObj" :chart-options="barOptions" />
                      </div>
                      <div v-else class="text-center text-muted d-flex h-100 align-items-center justify-content-center">Sin datos</div>
                  </div>
              </div>
          </div>

          <!-- Tipos de Citas Semana (Donut) -->
          <div class="col-md-4">
              <div class="card h-100 border-0 shadow-sm" style="border-radius:10px;">
                  <div class="card-body">
                      <h6 class="font-weight-bold text-dark mb-4">Tipos de Citas - Semana</h6>
                      <div style="position: relative; height: 100%; width: 100%;" v-if="tiposSemanaObj.labels.length">
                          <Doughnut :chart-data="tiposSemanaObj" :chart-options="donutOptions" />
                      </div>
                      <div v-else class="text-center text-muted d-flex h-100 align-items-center justify-content-center">Sin datos de tipos</div>
                  </div>
              </div>
          </div>
      </div>
      </transition>

      <!-- Citas del Dia List -->
      <div class="row">
          <div class="col-12">
              <div class="card border-0 shadow-sm" style="border-radius:10px;">
                  <div class="card-header bg-white border-0 pt-4 pb-0 d-flex align-items-center">
                      <h5 class="mb-0 font-weight-bold text-dark w-100">
                          <i class="far fa-clock text-primary"></i> Agenda del Día
                          <span class="badge badge-primary bg-primary text-white ml-2" style="font-size:0.8rem;">{{ dashData.citasHoy ? dashData.citasHoy.length : 0 }} citas</span>
                      </h5>
                  </div>
                  <div class="card-body">
                      <div v-if="dashData.citasHoy && dashData.citasHoy.length > 0">
                          <div class="list-group list-group-flush">
                              <div v-for="(cita, index) in dashData.citasHoy" :key="index" class="list-group-item px-0 py-3 d-flex justify-content-between align-items-center border-bottom">
                                  <div class="d-flex align-items-center w-50">
                                      <div class="text-center mr-4" style="min-width: 60px;">
                                          <strong class="text-dark d-block mb-1">{{ formatHora(cita.schedule ? cita.schedule.check_time : '') }}</strong>
                                          <small class="text-muted">{{ formatHora(cita.schedule ? cita.schedule.departure_date : '') }}</small>
                                      </div>
                                      <div class="mr-3 text-center" style="min-width: 40px;">
                                          <div class="icon-circle p-2 mx-auto" :class="getTypeColor(cita.precio ? cita.precio.descripcion : '').bg" style="width: 2.2rem; height: 2.2rem;">
                                              <i :class="getTypeColor(cita.precio ? cita.precio.descripcion : '').icon"></i>
                                          </div>
                                          <small class="font-weight-bold mt-1 d-block" :class="getTypeColor(cita.precio ? cita.precio.descripcion : '').text">{{ formatCode(cita.precio ? cita.precio.descripcion : '') }}</small>
                                      </div>
                                      <div>
                                          <h6 class="mb-1 font-weight-bold text-dark">{{ cita.patient ? cita.patient.name + ' ' + cita.patient.nombres : 'Sin datos' }}</h6>
                                          <small class="text-muted d-block">{{ cita.professional ? cita.professional.nombre || cita.professional.name : '...' }} <i class="fas fa-video ml-1" v-if="cita.mode == 2"></i></small>
                                      </div>
                                  </div>
                                  <div class="d-flex align-items-center justify-content-end w-50">
                                      <span class="text-warning font-weight-bold" title="Pendiente de pago" v-if="cita.payment && cita.payment.pay_status == 1"><i class="fas fa-dollar-sign"></i></span>
                                      <span class="text-success font-weight-bold" title="Cancelado" v-else-if="cita.payment && cita.payment.pay_status == 2"><i class="fas fa-dollar-sign"></i></span>
                                      
                                      <!-- status badge -->
                                      <span class="badge py-2 px-3 mx-3" style="font-size: 0.8rem; border-radius:15px;" :class="getStatusBadge(cita.status).class">
                                          <i :class="getStatusBadge(cita.status).icon" class="mr-1"></i> {{ getStatusBadge(cita.status).text }}
                                      </span>
                                      
                                      <a href="#" class="text-primary mr-3 text-decoration-none" v-if="cita.status != 3" @click.prevent="abrirReprogramar(cita)" data-bs-toggle="modal" data-bs-target="#reprogModal"><i class="fas fa-sync-alt mr-1"></i> Reprogramar</a>
                                      <div class="dropdown d-inline-block">
                                          <button class="btn btn-link text-muted p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                              <i class="fas fa-ellipsis-h"></i>
                                          </button>
                                          <ul class="dropdown-menu dropdown-menu-right shadow border-0" style="border-radius: 10px; min-width: 200px;">
                                              <li><a class="dropdown-item py-2" href="#" @click.prevent="abrirDetallesCita(cita)"><i class="fas fa-eye text-primary mr-2" style="width: 16px;"></i> Ver Detalle</a></li>
                                              <li><a class="dropdown-item py-2" href="#" @click.prevent="intercambiarHorario(cita)" data-bs-toggle="modal" data-bs-target="#modalIntercambio"><i class="fas fa-retweet text-warning mr-2" style="width: 16px;"></i> Cambiar Horario</a></li>
                                              <li><a class="dropdown-item py-2" href="#" @click.prevent="prepararLimbo(cita)" data-bs-toggle="modal" data-bs-target="#reprogModal"><i class="fas fa-archive text-secondary mr-2" style="width: 16px;"></i> Enviar al Limbo</a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div v-else class="text-center py-5 text-muted">
                          <p class="mb-0">No hay citas programadas para el día de hoy.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- Modales -->
      <ModalAccionesCita v-if="cita && cita.id" :key="cita.id" :cita="cita" :indiceElegido="indexElegido" :precios="precios"
          @changeMode="changeMode"
          @openModal="distribuirAperturaModal"
          @intercambiar="intercambiarHorario"
          @eliminar="validarYEliminar"
          @buscarRecetas="buscarRecetas"
          @tiemposEspera="abrirTiemposEspera"
          @actualizar="actualizarListadoCitas"
      />
      <reprog-modal ref="reprogModal" v-if="cita && cita.id" :key="'reprog-'+cita.id" :dataCit="cita" :idUsuario="idUsuario" @ocultarCita="actualizarListadoCitas"></reprog-modal>
      <info-modal v-if="cita && cita.id" :key="'info-'+cita.id" :dataCit="cita" :precios="precios"></info-modal>
      <ModalIntercambio :posibles="posibles" :primero="primero" @actualizar="actualizarListadoCitas"></ModalIntercambio>
      <modalVerRecetas v-if="cita && cita.id" :key="'recetas-'+cita.id" :prescriptions="recetas"></modalVerRecetas>
      <modalTiemposEspera v-if="cita && cita.id" :key="'tiempos-'+cita.id" :cita="cita" @actualizar="actualizarListadoCitas"></modalTiemposEspera>
      <modal-estado v-if="cita && cita.id" :key="'estado-'+cita.id" :dataCit="cita" :idUsuario="idUsuario" @actualizar="actualizarListadoCitas"></modal-estado>
      <pago-modal v-if="cita && cita.id" :key="'pago-'+cita.id" :cita="cita" :idUsuario="idUsuario" :idSede="idSede" @actualizarAdelanto="actualizarAdelanto" @actualizar="actualizarListadoCitas"></pago-modal>
      <modal-patient v-if="cita && cita.id" :key="'patient-'+cita.id" :dataCit="cita"></modal-patient>

  </div>
</template>

<script>
import { Doughnut, Bar } from 'vue-chartjs/legacy'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js'
import alertify from 'alertifyjs'

import ModalAccionesCita from './ModalAccionesCita.vue'
import ReprogModal from './ReprogModal.vue'
import ModalIntercambio from './ModalIntercambio.vue'
import PagoModal from './PagoModal.vue'
import ModalEstadoCita from './ModalEstadoCita.vue'
import InfoModal from './ModalInfo.vue'
import modalTiemposEspera from './ModalTiemposEspera.vue'
import modalVerRecetas from './ModalVerRecetas.vue'
import ModalPatient from './ModalPatient.vue'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement, ChartDataLabels)

export default {
  name: 'DashboardCitas',
  components: { 
      Doughnut, Bar,
      ModalAccionesCita,
      ReprogModal,
      ModalIntercambio,
      PagoModal,
      'modal-estado': ModalEstadoCita,
      InfoModal,
      modalTiemposEspera,
      modalVerRecetas,
      ModalPatient
  },
  data() {
      return {
          showCharts: true,
          cita: null,
          indexElegido: -1,
          precios: [],
          idUsuario: null,
          idSede: null,
          posibles: [],
          primero: {patient:[]},
          citaTemp: [],
          recetas: [],
          dashData: {
              totalCitasHoy: 0,
              totalCitasPendientes: 0,
              totalCitasCompletadas: 0,
              totalCitasCanceladas: 0,
              totalCitasReprogramadas: 0,
              totalCitasNoAsistidas: 0,
              citasSemanalesPorTipo: [],
              ocupacionSemanalPorProfesional: []
          },
          profesionalesCount: 0,
          estadosCitasHoyObj: { labels: [], datasets: [{ backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#0ea5e9'], data: [] }] },
          tiposSemanaObj: { labels: [], datasets: [{ backgroundColor: ['#3b82f6', '#0ea5e9', '#10b981', '#a855f7', '#f59e0b'], data: [] }] },
          ocupacionObj: { labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'], datasets: [] },
          
          donutOptions: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                  legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8 } },
                  datalabels: { display: false }
              },
              cutout: '65%'
          },
          barOptions: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                  legend: { display: false },
                  datalabels: { display: false }
              },
              scales: {
                  x: { grid: { display: false } },
                  y: { beginAtZero: true, border: { dash: [4, 4] }, grid: { borderDash: [4, 4] } }
              }
          }
      }
  },
  mounted() {
      this.axios.get('/api/user').then((res) => {
          this.idUsuario = parseInt(res.data.user.id)
      })
      this.listarPrecios();
      this.fetchDashboardData();
      setInterval(this.fetchDashboardData, 300000); // 5 minutes reload
  },
  methods: {
      async listarPrecios() {
          await this.axios.get('/api/listarPreciosTodos')
          .then(response => this.precios = response.data)
      },
      abrirReprogramar(cita) {
          this.cita = cita;
          this.indexElegido = this.dashData.citasHoy.findIndex(x => x.id === cita.id);
          this.$nextTick(() => {
              if(this.$refs.reprogModal) {
                  this.$refs.reprogModal.caso = 'reprogramar';
              }
          });
      },
      prepararLimbo(cita) {
          this.cita = cita;
          this.indexElegido = this.dashData.citasHoy.findIndex(x => x.id === cita.id);
          this.$nextTick(() => {
              if(this.$refs.reprogModal) {
                  this.$refs.reprogModal.caso = 'limbo';
              }
          });
      },
       abrirDetallesCita(cita) {
          this.cita = cita;
          this.indexElegido = this.dashData.citasHoy.findIndex(x => x.id === cita.id);
          this.$nextTick(() => {
              const el = document.getElementById('modalAccionesCita');
              if (el && window.bootstrap) {
                  const modalInstance = window.bootstrap.Modal.getOrCreateInstance(el);
                  modalInstance.show();
              }
          });
      },
      changeMode(id, indiceP) {
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
                  .then(res => {
                      this.fetchDashboardData();
                  })
              }
          })
      },
      distribuirAperturaModal(data, tModalId, indexG) {
          this.cita = data;
          this.indexElegido = indexG;
      },
      intercambiarHorario(laCita) {
          this.cita = laCita;
          let idProf = laCita.professional_id;
          this.primero = laCita;
          this.posibles = this.dashData.citasHoy.filter(posible => posible.professional_id == idProf && posible.id != laCita.id);
      },
      validarYEliminar(id) {
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
                      this.axios.post('/api/eliminarCita/'+id, {razon: result.value, usuario: this.idUsuario })
                      .then((res) => {
                          this.$swal('Cita eliminada con exito')
                          this.fetchDashboardData();
                      });
                  }
          })
      },
      buscarRecetas(id) {
          this.axios(`/api/verRecetaPorId/${id}`)
          .then(res => {
              this.recetas = res.data;
          })
      },
      abrirTiemposEspera(cita) {
          this.citaTemp = cita;
      },
      actualizarAdelanto(adelanto, citaId) {
          this.fetchDashboardData();
      },
      actualizarListadoCitas() {
          this.fetchDashboardData();
      },
      async fetchDashboardData() {
          try {
              let { data } = await this.axios.get('/api/dashboardModuloCitas');
              if (data && data.citasHoy) {
                  data.citasHoy = data.citasHoy.filter(c => c.status !== 7 && (!c.patient || c.patient.dni !== 'BLOQUEO'));
              }
              this.dashData = data;
              
              // Estado de citas hoy
              this.estadosCitasHoyObj.labels = ['Confirmadas', 'Programadas/Pendientes', 'Canceladas', 'Reprogramadas'];
              this.estadosCitasHoyObj.datasets[0].data = [
                  data.totalCitasCompletadas || 0,
                  data.totalCitasPendientes || 0,
                  data.totalCitasCanceladas || 0,
                  data.totalCitasReprogramadas || 0
              ];
              // Si no hay citas hoy, limpiamos para que renderize "Sin datos" (o dejamos el chart vacio)
              if (this.estadosCitasHoyObj.datasets[0].data.every(v => v === 0)) {
                  this.estadosCitasHoyObj.labels = []; // trigger fallback
              }

              // Tipos semana
              if (data.citasSemanalesPorTipo && data.citasSemanalesPorTipo.length > 0) {
                  this.tiposSemanaObj.labels = data.citasSemanalesPorTipo.map(c => c.descripcion);
                  this.tiposSemanaObj.datasets[0].data = data.citasSemanalesPorTipo.map(c => c.total);
              }

              // Ocupacion semanal
              if (data.ocupacionSemanalPorProfesional && data.ocupacionSemanalPorProfesional.length > 0) {
                  const diasBase = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
                  const mapProf = {};
                  const uniqueProfs = new Set();
                  
                  data.ocupacionSemanalPorProfesional.forEach(row => {
                      uniqueProfs.add(row.profesional);
                      if(!mapProf[row.profesional]) {
                          mapProf[row.profesional] = [0,0,0,0,0,0,0];
                      }
                      let indexDia = diasBase.indexOf(row.dia);
                      if(indexDia !== -1) {
                          mapProf[row.profesional][indexDia] = row.total;
                      }
                  });
                  this.profesionalesCount = uniqueProfs.size;

                  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'];
                  let dsets = [];
                  let cId = 0;
                  
                  for(let prof in mapProf) {
                      dsets.push({
                          label: prof,
                          data: mapProf[prof],
                          backgroundColor: colors[cId % colors.length],
                          barThickness: 6,
                          borderRadius: 2
                      });
                      cId++;
                  }
                  
                  this.ocupacionObj.datasets = dsets;
              } else {
                  this.profesionalesCount = 0;
                  this.ocupacionObj.datasets = [];
              }

              // Force Vue to re-render charts internally if needed
              this.ocupacionObj = Object.assign({}, this.ocupacionObj);
              this.estadosCitasHoyObj = Object.assign({}, this.estadosCitasHoyObj);
              this.tiposSemanaObj = Object.assign({}, this.tiposSemanaObj);

          } catch(e) {
              console.error("Error fetching Dashboard Citas:", e);
          }
      },
      formatHora(hora) {
          if(!hora) return '';
          let hs = hora.split(':');
          if(hs.length >= 2) {
              return hs[0] + ':' + hs[1];
          }
          return hora;
      },
      formatCode(desc) {
          if(!desc) return 'GEN';
          let str = desc.toLowerCase();
          if(str.includes('psiqui')) return 'PSQ';
          if(str.includes('psicol') || str.includes('terapia')) return 'PSI';
          if(str.includes('nutri')) return 'NUT';
          if(str.includes('taller')) return 'TAL';
          if(str.includes('paquete')) return 'PAQ';
          return 'GEN';
      },
      getTypeColor(desc) {
          let code = this.formatCode(desc);
          if(code === 'PSQ') return { bg: 'bg-info-light', text: 'text-info', icon: 'fas fa-stethoscope text-info' };
          if(code === 'NUT') return { bg: 'bg-success-light', text: 'text-success', icon: 'fas fa-apple-alt text-success' };
          if(code === 'PSI') return { bg: 'bg-primary-light', text: 'text-primary', icon: 'fas fa-brain text-primary' };
          return { bg: 'bg-secondary-light', text: 'text-secondary', icon: 'fas fa-notes-medical text-secondary' };
      },
      getStatusBadge(status) {
          // 1: Sin confirmar, 2: Confirmado, 3: Anulado/Cancelado, 4: Reprogramado
          if(status == 1) return { class: 'badge-warning text-dark', icon: 'far fa-clock', text: 'Pendiente' };
          if(status == 2) return { class: 'badge-success', icon: 'far fa-check-circle', text: 'Confirmada' };
          if(status == 3) return { class: 'badge-danger', icon: 'far fa-times-circle', text: 'Cancelada' };
          if(status == 4) return { class: 'badge-info', icon: 'fas fa-sync-alt', text: 'Reprogramada' };
          return { class: 'badge-secondary', icon: 'far fa-circle', text: 'N/A' };
      }
  }
}
</script>

<style scoped>
    .icon-circle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 10px;
    }
    .card {
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
    .card:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.1) !important;
    }

    /* FAB BUTTON */
    .fab-toggle {
        position: fixed;
        bottom: 25px;
        right: 25px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, #4e73df, #224abe);
        color: white;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .fab-toggle:hover {
        transform: scale(1.1);
        box-shadow: 0 10px 20px rgba(78, 115, 223, 0.3);
    }

    /* ANIMATION */
    .fade-slide-enter-active,
    .fade-slide-leave-active {
        transition: all 0.3s ease;
    }

    .fade-slide-enter-from {
        opacity: 0;
        transform: translateY(20px);
    }

    .fade-slide-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }

    .btn-toggle-charts {
        border: none;
        background: #eef2ff;
        color: #4e73df;
        font-weight: 600;
        border-radius: 20px;
        padding: 6px 14px;
        transition: all 0.25s ease;
    }

    .btn-toggle-charts:hover {
        background: #4e73df;
        color: #fff;
        box-shadow: 0 4px 12px rgba(78, 115, 223, 0.25);
    }
</style>
