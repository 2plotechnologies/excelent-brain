<template>
    <div class="p-4" style="background-color: #f8f9fc; min-height: 100vh;">
        <!-- HEADER -->
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h4 class="m-0 font-weight-bold text-dark">Dashboard General</h4>
                <small class="text-muted">Vista consolidada &middot; Hoy, {{ currentDateFormatted }}</small>
            </div>
            <div>
                <i class="far fa-bell text-muted" style="font-size: 1.2rem; cursor: pointer;"></i>
            </div>
        </div>

        <!-- STATS ROW 1 -->
        <div class="row mb-4">
            <!-- Pacientes Activos -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card h-100 py-2 border-0 shadow-sm" style="border-left: 4px solid #4e73df !important; border-radius: 10px;">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-muted mb-1" style="font-size: 0.8rem;">Pacientes Activos</div>
                                <div class="h3 mb-0 font-weight-bold text-gray-800">{{ dashboardData.pacientesActivos || 0 }}</div>
                                <div class="text-xs text-muted mt-1">Total en sistema</div>
                            </div>
                            <div class="col-auto">
                                <div class="icon-circle bg-primary-light">
                                    <i class="fas fa-users text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Citas de Hoy -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card h-100 py-2 border-0 shadow-sm" style="border-left: 4px solid #858796 !important; border-radius: 10px;">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-muted mb-1" style="font-size: 0.8rem;">Citas de Hoy</div>
                                <div class="h3 mb-0 font-weight-bold text-gray-800">{{ dashboardData.citasHoy ? dashboardData.citasHoy.length : 0 }}</div>
                                <div class="text-xs text-muted mt-1">0 completadas</div>
                            </div>
                            <div class="col-auto">
                                <div class="icon-circle bg-secondary-light">
                                    <i class="far fa-calendar text-secondary" style="color: #858796;"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Ingresos del Día -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card h-100 py-2 border-0 shadow-sm" style="border-left: 4px solid #1cc88a !important; border-radius: 10px;">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-muted mb-1" style="font-size: 0.8rem;">Ingresos del Día</div>
                                <div class="h3 mb-0 font-weight-bold text-gray-800">S/ {{ dashboardData.ingresosHoy || 0 }}</div>
                            </div>
                            <div class="col-auto">
                                <div class="icon-circle bg-success-light">
                                    <i class="fas fa-dollar-sign text-success"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Alertas Activas -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card h-100 py-2 border-0 shadow-sm" style="border-left: 4px solid #e74a3b !important; border-radius: 10px;">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-muted mb-1" style="font-size: 0.8rem;">Alertas Activas</div>
                                <div class="h3 mb-0 font-weight-bold text-gray-800">{{ dashboardData.totalAlertas || 0 }}</div>
                                <div class="text-xs text-danger mt-1">{{ dashboardData.alertasSOS || 0 }} SOS, {{ dashboardData.alertasDeudas || 0 }} sin pagar</div>
                            </div>
                            <div class="col-auto">
                                <div class="icon-circle bg-danger-light">
                                    <i class="fas fa-exclamation-triangle text-danger"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- STATS ROW 2 -->
        <div class="row mb-4">
            <!-- Pacientes -->
            <div class="col-xl-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100" style="border-radius: 10px;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <div class="icon-circle bg-primary-light mr-3">
                                <i class="fas fa-users text-primary" style="font-size: 1.1rem;"></i>
                            </div>
                            <div>
                                <h6 class="mb-0 font-weight-bold text-dark">Pacientes</h6>
                                <small class="text-muted">Gestión de pacientes</small>
                            </div>
                        </div>
                        <div class="row text-center mt-4 pt-2">
                            <div class="col-6 text-left">
                                <small class="text-muted d-block font-weight-bold">Activos</small>
                                <span class="font-weight-bold text-dark" style="font-size: 1.25rem;">{{ dashboardData.pacientesActivos || 0 }}</span>
                            </div>
                            <div class="col-6 text-left">
                                <small class="text-muted d-block font-weight-bold">En sistema</small>
                                <i class="fas fa-check text-success mt-2" style="font-size: 1.2rem;"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Citas -->
            <div class="col-xl-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100" style="border-radius: 10px;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <div class="icon-circle bg-info-light mr-3">
                                <i class="far fa-calendar text-info" style="font-size: 1.1rem; color: #36b9cc !important;"></i>
                            </div>
                            <div>
                                <h6 class="mb-0 font-weight-bold text-dark">Citas</h6>
                                <small class="text-muted">Agendamiento</small>
                            </div>
                        </div>
                        <div class="row text-center mt-4 pt-2">
                            <div class="col-6 text-left">
                                <small class="text-muted d-block font-weight-bold">Hoy</small>
                                <span class="font-weight-bold text-dark" style="font-size: 1.25rem;">{{ dashboardData.citasHoy ? dashboardData.citasHoy.length : 0 }}</span>
                            </div>
                            <div class="col-6 text-left">
                                <small class="text-muted d-block font-weight-bold">Pendientes</small>
                                <span class="font-weight-bold text-warning" style="font-size: 1.25rem;">{{ citasPendientes }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Caja -->
            <div class="col-xl-4 col-md-12 mb-4">
                <div class="card border-0 shadow-sm h-100" style="border-radius: 10px;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <div class="icon-circle bg-success-light mr-3">
                                <i class="fas fa-credit-card text-success" style="font-size: 1.1rem;"></i>
                            </div>
                            <div>
                                <h6 class="mb-0 font-weight-bold text-dark">Caja</h6>
                                <small class="text-muted">Pagos y cobros</small>
                            </div>
                        </div>
                        <div class="row text-center mt-4 pt-2">
                            <div class="col-6 text-left">
                                <small class="text-muted d-block font-weight-bold">Ingresos hoy</small>
                                <span class="font-weight-bold text-success" style="font-size: 1.25rem;">S/ {{ dashboardData.ingresosHoy || 0 }}</span>
                            </div>
                            <div class="col-6 text-left">
                                <small class="text-muted d-block font-weight-bold">Por cobrar</small>
                                <span class="font-weight-bold text-warning" style="font-size: 1.25rem;">{{ dashboardData.alertasDeudas || 0 }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- LIST ROW -->
        <div class="row row-cols-1 row-cols-md-2" style="display: flex;">
            <!-- Próximas citas list -->
            <div class="col-md-6 mb-4 d-flex">
                <div class="card border-0 shadow-sm w-100" style="border-radius: 10px;">
                    <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
                        <h6 class="m-0 font-weight-bold text-dark">
                            <i class="far fa-clock text-primary mr-2"></i> Próximas Citas
                        </h6>
                    </div>
                    <div class="card-body">
                        <div v-if="dashboardData.citasHoy && dashboardData.citasHoy.length > 0">
                            <div class="citas-container pr-2" style="max-height: 400px; overflow-y: auto;">
                                <div v-for="(cita, index) in dashboardData.citasHoy" :key="index" class="mb-3 border-bottom pb-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <p class="mb-0 font-weight-bold text-dark" v-if="cita.patient">{{ cita.patient.nombres }} {{ cita.patient.name }}</p>
                                            <p class="mb-0 font-weight-bold text-dark" v-else>Paciente Sin Nombre</p>
                                            <small class="text-muted">{{ cita.motivo || 'Cita Programada' }}</small>
                                        </div>
                                        <div class="text-right">
                                            <span class="badge badge-primary px-2 py-1 mb-1">{{ cita.time || cita.date }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="text-center py-5 d-flex flex-column align-items-center justify-content-center h-100">
                            <p class="text-muted mb-0">No hay citas pendientes para hoy.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Alertas Activas list -->
            <div class="col-md-6 mb-4 d-flex">
                <div class="card border-0 shadow-sm w-100" style="border-radius: 10px;">
                    <div class="card-header bg-white border-bottom-0 pt-4 pb-0 d-flex align-items-center">
                        <i class="fas fa-exclamation-triangle text-danger mr-2"></i>
                        <h6 class="m-0 font-weight-bold text-dark">Alertas Activas</h6>
                    </div>
                    <div class="card-body">
                        <div v-if="dashboardData.totalAlertas > 0">
                            
                            <div class="alertas-container pr-2" style="max-height: 400px; overflow-y: auto;">
                                <!-- DEUDAS ALERTS -->
                                <div v-if="dashboardData.deudas && dashboardData.deudas.length > 0">
                                    <h6 class="text-warning font-weight-bold border-bottom pb-2 mb-3">Alertas Deudas Recientes</h6>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item px-0" v-for="(deuda, i) in dashboardData.deudas" :key="'deuda-'+i">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h6 class="mb-1 text-dark font-weight-bold">{{ deuda.nombres }} {{ deuda.name }}</h6>
                                                <small class="text-danger font-weight-bold">S/ {{ deuda.monto }}</small>
                                            </div>
                                            <p class="mb-1 text-muted small">
                                                <i class="fas fa-file-invoice-dollar mr-1"></i>{{ deuda.motivo || 'Membresía / Servicio' }}
                                            </p>
                                            <small class="text-muted"><i class="far fa-calendar-alt mr-1"></i>Vence: {{ deuda.fecha }}</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div v-else class="text-center py-5 d-flex flex-column align-items-center justify-content-center h-100">
                            <p class="text-muted mb-0">Sin alertas activas hoy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
moment.locale('es');

export default {
    name: "HomeDashboardRecepcionista",
    data() {
        return {
            dashboardData: {
                pacientesActivos: 0,
                citasHoy: [],
                ingresosHoy: 0,
                alertasSOS: 0,
                alertasDeudas: 0,
                totalAlertas: 0,
                sos: [],
                deudas: []
            },
            loading: true
        }
    },
    computed: {
        currentDateFormatted() {
            return moment().format('D MMM YYYY');
        },
        citasPendientes() {
            if (!this.dashboardData.citasHoy || this.dashboardData.citasHoy.length === 0) return 0;
            // Se puede extender usando la lógica de completada: 
            // e.g., this.dashboardData.citasHoy.filter(c => c.status !== 'completada').length
            return this.dashboardData.citasHoy.length; 
        }
    },
    mounted() {
        this.fetchDashboardData();
    },
    methods: {
        fetchDashboardData() {
            this.loading = true;
            axios.get('/api/dashboardRecepcion')
                .then(res => {
                    let data = res.data;
                    this.dashboardData = {
                        pacientesActivos: data.pacientesActivos || 0,
                        citasHoy: data.citasHoy || [],
                        ingresosHoy: data.ingresosHoy || 0,
                        alertasSOS: data.alertasSOS || 0,
                        alertasDeudas: data.alertasDeudas || 0,
                        totalAlertas: data.totalAlertas || 0,
                        sos: data.sos || [],
                        deudas: data.deudas || []
                    };
                })
                .catch(err => {
                    console.error("Error al obtener datos del dashboard:", err);
                })
                .finally(() => {
                    this.loading = false;
                });
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
.bg-primary-light { background-color: #e3e6f0; }
.bg-secondary-light { background-color: #f8f9fc; }
.bg-success-light { background-color: #e3fbed; }
.bg-danger-light { background-color: #fbe3e4; }
.bg-info-light { background-color: #eaf3ff; }

/* Custom scrollbar para listas largas */
.citas-container::-webkit-scrollbar,
.alertas-container::-webkit-scrollbar {
    width: 6px;
}
.citas-container::-webkit-scrollbar-track,
.alertas-container::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 4px;
}
.citas-container::-webkit-scrollbar-thumb,
.alertas-container::-webkit-scrollbar-thumb {
    background: #d1d3e2; 
    border-radius: 4px;
}
.citas-container::-webkit-scrollbar-thumb:hover,
.alertas-container::-webkit-scrollbar-thumb:hover {
    background: #b7b9cc; 
}
</style>