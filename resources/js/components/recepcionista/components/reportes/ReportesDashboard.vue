<template>
  <div class="reportes-dashboard container-fluid px-0">
    <div class="d-flex flex-wrap justify-content-between align-items-center mb-4">
      <div>
        <h3 class="mb-0 font-weight-bold" style="color: #1e293b;">Reportes</h3>
        <p class="text-muted mb-0" style="font-size: 0.9rem;">Análisis clínico, productividad y financiero</p>
      </div>
      <div class="d-flex align-items-center mt-3 mt-md-0 gap-3">
        <div class="input-group" style="width: auto; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div class="input-group-prepend">
            <span class="input-group-text bg-white border-0 text-muted" style="border-radius: 8px 0 0 8px;"><i class="fas fa-calendar-alt"></i></span>
          </div>
          <input type="month" v-model="selectedDate" @change="fetchData" class="form-control border-0" style="border-radius: 0 8px 8px 0; box-shadow: none; font-weight: 500; color: #475569;" />
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <ul class="nav nav-pills custom-tabs mb-4" id="reportes-tabs" role="tablist">
      <li class="nav-item flex-fill text-center" role="presentation">
        <a class="nav-link active" id="clinico-tab" data-bs-toggle="tab" href="#clinico" role="tab" @click="currentTab = 'clinico'">
          <i class="fas fa-stethoscope mr-2"></i> Clínico
        </a>
      </li>
      <li class="nav-item flex-fill text-center" role="presentation">
        <a class="nav-link" id="productividad-tab" data-bs-toggle="tab" href="#productividad" role="tab" @click="currentTab = 'productividad'">
          <i class="fas fa-chart-line mr-2"></i> Productividad
        </a>
      </li>
      <li class="nav-item flex-fill text-center" role="presentation">
        <a class="nav-link" id="financiero-tab" data-bs-toggle="tab" href="#financiero" role="tab" @click="currentTab = 'financiero'">
          <i class="fas fa-dollar-sign mr-2"></i> Financiero
        </a>
      </li>
    </ul>

    <div class="tab-content" id="reportes-tabContent">
      
      <!-- TABS CLÍNICO -->
      <div class="tab-pane fade show active" id="clinico" role="tabpanel">
        
        <!-- KPIs Clínicos -->
        <div class="row mb-4">
          <div class="col-md-3 mb-3">
            <div class="kpi-card border-blue">
              <div class="kpi-icon text-primary bg-primary-light">
                <i class="fas fa-users"></i>
              </div>
              <div class="kpi-details">
                <h3 class="kpi-value">{{ totalPacientesAtendidos }}</h3>
                <span class="kpi-label">Pacientes Atendidos</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="kpi-card border-green">
              <div class="kpi-icon text-success bg-success-light">
                <i class="fas fa-user-check"></i>
              </div>
              <div class="kpi-details">
                <h3 class="kpi-value">{{ totalAltas }}</h3>
                <span class="kpi-label">Altas este mes</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Distribución de Género (Sexo) -->
          <div class="col-lg-5 mb-4">
            <div class="custom-card h-100">
              <div class="card-header bg-white border-0 pt-4 pb-0">
                <h6 class="font-weight-bold" style="color: #1e293b;">Distribución por Género</h6>
              </div>
              <div class="card-body position-relative d-flex justify-content-center align-items-center" style="min-height: 300px;">
                <div v-if="loading.sexo" class="spinner-border text-primary" role="status"></div>
                <div v-else-if="!chartData.sexo || chartData.sexo.labels.length === 0" class="text-muted">No hay datos suficientes</div>
                <div v-else style="position: relative; height: 100%; width: 100%; max-height: 280px; display:flex; justify-content:center;">
                   <Pie :chart-data="chartData.sexo" :chart-options="pieOptions" />
                </div>
              </div>
            </div>
          </div>

          <!-- Medicamentos -->
          <div class="col-lg-7 mb-4">
            <div class="custom-card h-100">
              <div class="card-header bg-white border-0 pt-4 pb-0">
                <h6 class="font-weight-bold" style="color: #1e293b;">Medicamentos más Frecuentes</h6>
              </div>
              <div class="card-body p-0">
                <div v-if="loading.medicamentos" class="d-flex justify-content-center my-5">
                  <div class="spinner-border text-primary" role="status"></div>
                </div>
                <div v-else-if="data.medicamentos.length === 0" class="text-center text-muted my-5">No hay datos suficientes</div>
                <div v-else class="table-responsive">
                  <table class="table custom-table mb-0">
                    <thead>
                      <tr>
                        <th class="border-top-0 border-bottom-0 text-muted" style="font-weight: 500;">Medicamento</th>
                        <th class="border-top-0 border-bottom-0 text-muted text-center" style="font-weight: 500;">Veces</th>
                        <th class="border-top-0 border-bottom-0 text-muted text-center" style="font-weight: 500;">Proporción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(med, index) in topMedicamentos" :key="index">
                        <td class="font-weight-bold align-middle" style="color: #334155; font-size: 0.9rem;">{{ med.medicamento }}</td>
                        <td class="text-center font-weight-bold align-middle" style="color: #0f172a;">{{ med.veces }}</td>
                        <td class="align-middle" style="width: 30%;">
                          <div class="d-flex align-items-center">
                            <div class="progress w-100" style="height: 6px; border-radius: 10px; background-color: #f1f5f9;">
                              <div class="progress-bar bg-primary" role="progressbar" :style="`width: ${getMedProportion(med.veces)}%; border-radius: 10px;`"></div>
                            </div>
                            <span class="ml-2 text-muted" style="font-size: 0.8rem; min-width: 35px;">{{ getMedProportion(med.veces) }}%</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- TABS PRODUCTIVIDAD -->
      <div class="tab-pane fade" id="productividad" role="tabpanel">
        
        <!-- KPIs Productividad -->
        <div class="row mb-4">
          <div class="col-md-3 mb-3">
            <div class="kpi-card border-orange">
              <div class="kpi-icon text-warning bg-warning-light">
                <i class="fas fa-user-plus"></i>
              </div>
              <div class="kpi-details">
                <h3 class="kpi-value">{{ totalNuevos }}</h3>
                <span class="kpi-label">Nuevos Ingresos</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="kpi-card border-indigo">
              <div class="kpi-icon text-indigo bg-indigo-light">
                <i class="fas fa-sync-alt"></i>
              </div>
              <div class="kpi-details">
                <h3 class="kpi-value">{{ totalReprogramaciones }}</h3>
                <span class="kpi-label">Reprogramaciones</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
           <!-- Especialidad -->
           <div class="col-lg-5 mb-4">
            <div class="custom-card h-100">
              <div class="card-header bg-white border-0 pt-4 pb-0">
                <h6 class="font-weight-bold" style="color: #1e293b;">Atenciones por Especialidad</h6>
              </div>
              <div class="card-body position-relative d-flex justify-content-center align-items-center" style="min-height: 300px;">
                <div v-if="loading.especialidad" class="spinner-border text-primary" role="status"></div>
                <div v-else-if="!chartData.especialidad || chartData.especialidad.labels.length === 0" class="text-muted">No hay datos suficientes</div>
                <div v-else style="position: relative; height: 100%; width: 100%; max-height: 280px; display:flex; justify-content:center;">
                   <Pie v-if="currentTab === 'productividad'" :chart-data="chartData.especialidad" :chart-options="pieOptions" />
                </div>
              </div>
            </div>
          </div>

          <!-- Productividad -->
          <div class="col-lg-7 mb-4">
            <div class="custom-card h-100">
              <div class="card-header bg-white border-0 pt-4 pb-0">
                <h6 class="font-weight-bold" style="color: #1e293b;">Productividad por Profesional</h6>
              </div>
              <div class="card-body p-0">
                <div v-if="loading.conteoProfesional" class="d-flex justify-content-center my-5">
                  <div class="spinner-border text-primary" role="status"></div>
                </div>
                <div v-else-if="data.conteoProfesional.length === 0" class="text-center text-muted my-5">No hay datos suficientes</div>
                <div v-else class="table-responsive">
                  <table class="table custom-table mb-0">
                    <thead>
                      <tr>
                        <th class="border-top-0 border-bottom-0 text-muted" style="font-weight: 500;">Profesional</th>
                        <th class="border-top-0 border-bottom-0 text-muted text-center" style="font-weight: 500;">Atenciones</th>
                        <th class="border-top-0 border-bottom-0 text-muted text-center" style="font-weight: 500;">Atendidos</th>
                        <th class="border-top-0 border-bottom-0 text-muted text-center" style="font-weight: 500;">% del Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(prof, index) in data.conteoProfesional" :key="index">
                        <td class="font-weight-bold align-middle text-capitalize" style="color: #334155; font-size: 0.9rem;">{{ prof.profesional.toLowerCase() }}</td>
                        <td class="text-center font-weight-bold align-middle" style="color: #0f172a;">{{ prof.atenciones }}</td>
                        <td class="text-center font-weight-bold align-middle" style="color: #0f172a;">{{ prof.atendidos }}</td>
                        <td class="align-middle" style="width: 30%;">
                          <div class="d-flex align-items-center">
                            <div class="progress w-100" style="height: 6px; border-radius: 10px; background-color: #f1f5f9;">
                              <div class="progress-bar bg-info" role="progressbar" :style="`width: ${parseFloat(prof.porcentaje)}%; border-radius: 10px;`"></div>
                            </div>
                            <span class="ml-2 text-muted" style="font-size: 0.8rem; min-width: 45px;">{{ prof.porcentaje }}</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- TABS FINANCIERO -->
      <div class="tab-pane fade" id="financiero" role="tabpanel">
        <div class="row mb-4">
          <div class="col-md-3 mb-3">
            <div class="kpi-card border-green">
              <div class="kpi-icon text-success bg-success-light">
                <i class="fas fa-coins"></i>
              </div>
              <div class="kpi-details">
                <h3 class="kpi-value">S/ {{ totalIngresos.toFixed(2) }}</h3>
                <span class="kpi-label">Ingresos Totales</span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
           <!-- Medios de Pago -->
           <div class="col-lg-5 mb-4">
            <div class="custom-card h-100">
              <div class="card-header bg-white border-0 pt-4 pb-0">
                <h6 class="font-weight-bold" style="color: #1e293b;">Medios de Pago</h6>
              </div>
              <div class="card-body position-relative d-flex justify-content-center align-items-center" style="min-height: 300px;">
                <div v-if="loading.mediosPago" class="spinner-border text-primary" role="status"></div>
                <div v-else-if="!chartData.mediosPago || chartData.mediosPago.labels.length === 0" class="text-muted">No hay datos suficientes</div>
                <div v-else style="position: relative; height: 100%; width: 100%; max-height: 280px; display:flex; justify-content:center;">
                   <Pie v-if="currentTab === 'financiero'" :chart-data="chartData.mediosPago" :chart-options="pieOptions" />
                </div>
              </div>
            </div>
          </div>

          <!-- Ingresos por Servicio -->
          <div class="col-lg-7 mb-4">
            <div class="custom-card h-100">
              <div class="card-header bg-white border-0 pt-4 pb-0">
                <h6 class="font-weight-bold" style="color: #1e293b;">Ingresos por Servicio</h6>
              </div>
              <div class="card-body p-0">
                <div v-if="loading.ingresos" class="d-flex justify-content-center my-5">
                  <div class="spinner-border text-primary" role="status"></div>
                </div>
                <div v-else-if="data.ingresos.length === 0" class="text-center text-muted my-5">No hay datos suficientes</div>
                <div v-else class="table-responsive">
                  <table class="table custom-table mb-0">
                    <thead>
                      <tr>
                        <th class="border-top-0 border-bottom-0 text-muted" style="font-weight: 500;">Servicio</th>
                        <th class="border-top-0 border-bottom-0 text-muted text-center" style="font-weight: 500;">Registros</th>
                        <th class="border-top-0 border-bottom-0 text-muted text-right" style="font-weight: 500;">Monto (S/)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(ingreso, index) in data.ingresos" :key="index">
                        <td class="font-weight-bold align-middle" style="color: #334155; font-size: 0.9rem;">
                          <span :class="{'text-danger': ingreso.servicio === 'EGRESOS (Gastos/Salidas)'}">
                            {{ ingreso.servicio }}
                          </span>
                        </td>
                        <td class="text-center font-weight-bold align-middle" style="color: #0f172a;">{{ ingreso.registros }}</td>
                        <td class="text-right font-weight-bold align-middle" :class="{'text-danger': ingreso.servicio === 'EGRESOS (Gastos/Salidas)', 'text-success': ingreso.servicio !== 'EGRESOS (Gastos/Salidas)'}">
                           {{ parseFloat(ingreso.monto_total).toFixed(2) }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, ChartDataLabels);

export default {
  name: 'ReportesDashboard',
  components: { Pie },
  data() {
    return {
      selectedDate: moment().format('YYYY-MM'),
      currentTab: 'clinico',
      
      loading: {
        altas: false,
        sexo: false,
        medicamentos: false,
        continuidad: false,
        conteoProfesional: false,
        especialidad: false,
        reprogramaciones: false,
        mediosPago: false,
        ingresos: false,
      },

      data: {
        altas: [],
        sexo: [],
        medicamentos: [],
        continuidad: [],
        conteoProfesional: [],
        especialidad: [],
        reprogramaciones: [],
        mediosPago: [],
        ingresos: [],
      },

      chartData: {
        sexo: null,
        especialidad: null,
        mediosPago: null
      },

      pieOptions: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: 20
        },
        plugins: {
          legend: {
            position: 'right',
            labels: {
              usePointStyle: true,
              padding: 20,
              font: { family: "'Inter', sans-serif", size: 12 },
              color: '#475569'
            }
          },
          tooltip: {
            backgroundColor: '#0f172a',
            titleFont: { family: "'Inter', sans-serif", size: 13 },
            bodyFont: { family: "'Inter', sans-serif", size: 13 },
            padding: 10,
            cornerRadius: 8,
            displayColors: true
          },
          datalabels: {
            color: '#fff',
            font: { weight: 'bold', size: 11 },
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map(data => { sum += Number(data); });
              let percentage = (value * 100 / sum).toFixed(0) + "%";
              if (value == 0) return null;
              return percentage;
            }
          }
        }
      },

      colors: [
        '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', 
        '#ec4899', '#06b6d4', '#14b8a6', '#f97316', '#6366f1'
      ]
    };
  },
  computed: {
    totalPacientesAtendidos() {
      if (!this.data.continuidad) return 0;
      const totalRow = this.data.continuidad.find(item => item.condicion === 'Atendidos únicos');
      return totalRow ? totalRow.cantidad : 0;
    },
    totalAltas() {
      if (!this.data.altas) return 0;
      return this.data.altas.reduce((sum, item) => sum + Number(item.altas), 0);
    },
    totalNuevos() {
      if (!this.data.continuidad) return 0;
      const nuevosRow = this.data.continuidad.find(item => item.condicion === 'Nuevos');
      return nuevosRow ? nuevosRow.cantidad : 0;
    },
    totalReprogramaciones() {
      if (!this.data.reprogramaciones) return 0;
      return this.data.reprogramaciones.reduce((sum, item) => sum + Number(item.total), 0);
    },
    totalIngresos() {
      if (!this.data.ingresos) return 0;
      return this.data.ingresos.reduce((sum, item) => {
        return item.servicio !== 'EGRESOS (Gastos/Salidas)' ? sum + Number(item.monto_total) : sum;
      }, 0);
    },
    topMedicamentos() {
      if (!this.data.medicamentos) return [];
      // Get top 8 to avoid massive table
      return this.data.medicamentos.slice(0, 8);
    },
    maxMedicamentosVeces() {
      if (this.topMedicamentos.length === 0) return 1;
      return Math.max(...this.topMedicamentos.map(m => Number(m.veces)));
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    getMedProportion(veces) {
      if (this.maxMedicamentosVeces === 0) return 0;
      return Math.round((Number(veces) / this.maxMedicamentosVeces) * 100);
    },
    fetchData() {
      const dateParam = `${this.selectedDate}-01`;
      
      this.fetchEndpoint('altas', dateParam);
      this.fetchEndpoint('sexo', dateParam, this.processSexoChart);
      this.fetchEndpoint('medicamentos', dateParam);
      
      this.fetchEndpoint('continuidad', dateParam);
      this.fetchEndpoint('conteoProfesional', dateParam);
      this.fetchEndpoint('especialidad', dateParam, this.processEspecialidadChart);
      this.fetchEndpoint('reprogramaciones', dateParam);
      
      this.fetchEndpoint('mediosPago', dateParam, this.processMediosPagoChart);
      this.fetchEndpoint('ingresos', dateParam);
    },
    
    fetchEndpoint(endpoint, date, callback = null) {
      this.loading[endpoint] = true;
      let urlMap = {
        'altas': '/api/reportes/altas',
        'sexo': '/api/reportes/sexo',
        'medicamentos': '/api/reportes/medicamentos',
        'continuidad': '/api/reportes/continuidad',
        'conteoProfesional': '/api/reportes/conteo-profesional',
        'especialidad': '/api/reportes/especialidad',
        'reprogramaciones': '/api/reportes/reprogramaciones',
        'mediosPago': '/api/reportes/medios-pago',
        'ingresos': '/api/reportes/ingresos'
      };

      this.axios.get(urlMap[endpoint], { params: { date: date, idSede: this.$attrs.idSede } })
        .then(res => {
          this.data[endpoint] = res.data;
          if (callback) callback(res.data);
        })
        .catch(err => {
          console.error(`Error fetching ${endpoint}:`, err);
        })
        .finally(() => {
          this.loading[endpoint] = false;
        });
    },

    processSexoChart(data) {
      this.chartData.sexo = {
        labels: data.map(item => item.genero),
        datasets: [{
          data: data.map(item => item.cantidad),
          backgroundColor: [ '#f43f5e', '#3b82f6', '#8b5cf6', '#10b981' ],
          borderWidth: 0,
          hoverOffset: 4
        }]
      };
    },

    processEspecialidadChart(data) {
      this.chartData.especialidad = {
        labels: data.map(item => item.especialidad),
        datasets: [{
          data: data.map(item => Number(item.atendidos)),
          backgroundColor: this.colors,
          borderWidth: 0,
          hoverOffset: 4
        }]
      };
    },

    processMediosPagoChart(data) {
      this.chartData.mediosPago = {
        labels: data.map(item => item.metodo_pago),
        datasets: [{
          data: data.map(item => parseFloat(item.monto)),
          backgroundColor: this.colors,
          borderWidth: 0,
          hoverOffset: 4
        }]
      };
    }
  }
}
</script>

<style scoped>
.reportes-dashboard {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  padding: 20px;
}

.custom-tabs {
  background: white;
  border-radius: 12px;
  padding: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.custom-tabs .nav-link {
  border-radius: 8px;
  color: #64748b;
  font-weight: 500;
  padding: 12px 20px;
  transition: all 0.2s ease;
  border: none;
}

.custom-tabs .nav-link:hover {
  background: #f8fafc;
  color: #3b82f6;
}

.custom-tabs .nav-link.active {
  background: #eff6ff;
  color: #2563eb;
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
}

.custom-card {
  border-radius: 16px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.02);
  background: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
}

.custom-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.03), 0 4px 6px -2px rgba(0,0,0,0.02);
}

.kpi-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  border-left: 4px solid #e2e8f0;
  transition: all 0.2s ease;
}

.kpi-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.04);
}

.kpi-card.border-blue { border-left-color: #3b82f6; }
.kpi-card.border-green { border-left-color: #10b981; }
.kpi-card.border-orange { border-left-color: #f59e0b; }
.kpi-card.border-indigo { border-left-color: #6366f1; }

.kpi-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 16px;
}

.bg-primary-light { background: #eff6ff; }
.bg-success-light { background: #ecfdf5; }
.bg-warning-light { background: #fffbeb; }
.bg-indigo-light { background: #eef2ff; }
.text-indigo { color: #6366f1; }

.kpi-details {
  display: flex;
  flex-direction: column;
}

.kpi-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 2px;
}

.kpi-label {
  font-size: 0.85rem;
  font-weight: 500;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.custom-table th {
  background-color: #f8fafc;
  padding: 12px 16px;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.custom-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #f1f5f9;
}

.custom-table tr:hover td {
  background-color: #f8fafc;
}
</style>
