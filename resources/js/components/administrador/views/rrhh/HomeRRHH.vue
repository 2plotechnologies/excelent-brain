<template>
  <div class="container-fluid py-4 bg-light">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 class="font-weight-bold text-dark mb-0">Recursos Humanos</h2>
        <p class="text-muted mb-0">Gestión del personal, asistencia, turnos y permisos</p>
      </div>
      <div>
        <i class="fas fa-bell text-muted" style="font-size: 1.5rem; position: relative;">
          <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
            <span class="visually-hidden">New alerts</span>
          </span>
        </i>
      </div>
    </div>

    <!-- KPI Cards -->
    <div class="row mb-4">
      <div class="col-md-3">
        <div class="card shadow-sm border-0 border-left-primary h-100 py-2" style="border-left: 4px solid #4e73df !important; border-radius: 10px;">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col-auto mr-3">
                <div class="icon-circle bg-primary-light text-primary" style="background-color: #e3e6f0; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                  <i class="fas fa-users"></i>
                </div>
              </div>
              <div class="col">
                <div class="h5 mb-0 font-weight-bold text-gray-800">{{ kpis.total_human_resources || 0 }}</div>
                <div class="text-xs font-weight-bold text-muted text-uppercase mb-1">Total Personal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card shadow-sm border-0 border-left-success h-100 py-2" style="border-left: 4px solid #1cc88a !important; border-radius: 10px;">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col-auto mr-3">
                <div class="icon-circle bg-success-light text-success" style="background-color: #e3f2fd; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                  <i class="fas fa-check-circle"></i>
                </div>
              </div>
              <div class="col">
                <div class="h5 mb-0 font-weight-bold text-gray-800">{{ kpis.total_human_resources || 0 }}</div>
                <div class="text-xs font-weight-bold text-muted text-uppercase mb-1">Activos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card shadow-sm border-0 border-left-info h-100 py-2" style="border-left: 4px solid #36b9cc !important; border-radius: 10px;">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col-auto mr-3">
                <div class="icon-circle bg-info-light text-info" style="background-color: #e0f8f1; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                  <i class="fas fa-stopwatch"></i>
                </div>
              </div>
              <div class="col">
                <div class="h5 mb-0 font-weight-bold text-gray-800">{{ kpis.present_count || 0 }}</div>
                <div class="text-xs font-weight-bold text-muted text-uppercase mb-1">Presentes Hoy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card shadow-sm border-0 border-left-warning h-100 py-2" style="border-left: 4px solid #f6c23e !important; border-radius: 10px;">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col-auto mr-3">
                <div class="icon-circle bg-warning-light text-warning" style="background-color: #fdf6e3; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                  <i class="fas fa-exclamation-circle"></i>
                </div>
              </div>
              <div class="col">
                <div class="h5 mb-0 font-weight-bold text-gray-800">{{ kpis.late_count || 0 }}</div>
                <div class="text-xs font-weight-bold text-muted text-uppercase mb-1">Tardanzas Hoy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs Navigation -->
    <div class="card shadow-sm border-0 mb-4" style="border-radius: 15px;">
      <div class="card-body p-2">
        <ul class="nav nav-pills nav-fill" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link rounded-pill text-dark font-weight-bold cursor-pointer" :class="{ active: activeTab === 'directorio' }" @click.prevent="activeTab = 'directorio'">
              <i class="fas fa-address-book mr-2"></i> Directorio
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link rounded-pill text-dark font-weight-bold cursor-pointer" :class="{ active: activeTab === 'asistencia' }" @click.prevent="activeTab = 'asistencia'">
              <i class="far fa-clock mr-2"></i> Asistencia
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link rounded-pill text-dark font-weight-bold cursor-pointer" :class="{ active: activeTab === 'turnos' }" @click.prevent="activeTab = 'turnos'">
              <i class="far fa-calendar-alt mr-2"></i> Salarios
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Tabs Content -->
    <div class="tab-content bg-white p-4 rounded shadow-sm">
      <div class="tab-pane fade" :class="{ 'show active': activeTab === 'directorio' }">
        <directorio-tab></directorio-tab>
      </div>
      <div class="tab-pane fade" :class="{ 'show active': activeTab === 'asistencia' }">
        <asistencias-tab></asistencias-tab>
      </div>
      <div class="tab-pane fade" :class="{ 'show active': activeTab === 'turnos' }">
        <salarios-tab></salarios-tab>
      </div>
    </div>
  </div>
</template>

<script>
import DirectorioTab from './tabs/DirectorioTab.vue';
import AsistenciasTab from './tabs/AsistenciasTab.vue';
import SalariosTab from './tabs/SalariosTab.vue';

export default {
  components: {
    DirectorioTab,
    AsistenciasTab,
    SalariosTab
  },
  data() {
    return {
      activeTab: 'directorio',
      kpis: {},
      loading: false
    };
  },
  created() {
    this.fetchDashboardData();
  },
  methods: {
    fetchDashboardData() {
      this.loading = true;
      axios.get('/api/rrhh/dashboard')
        .then(response => {
          if (response.data.success) {
            this.kpis = response.data.kpis;
          }
        })
        .catch(error => {
          console.error("Error fetching RRHH dashboard data:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
  background-color: #f8f9fa;
  color: #4e73df !important;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
.nav-pills .nav-link {
  color: #6c757d;
  transition: all 0.3s ease;
}
.nav-pills .nav-link:hover {
  background-color: #f8f9fa;
}
</style>
