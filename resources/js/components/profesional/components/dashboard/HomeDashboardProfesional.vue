<template>
    <div class="p-4" style="background-color: #f8f9fc; min-height: 100vh;">
        <!-- HEADER -->
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h4 class="m-0 font-weight-bold text-dark">¡Hola, {{ userLastName }}!</h4>
                <small class="text-muted">Tu resumen del día &middot; Hoy, {{ currentDateFormatted }}</small>
            </div>
            <div>
                <i class="far fa-bell text-muted" style="font-size: 1.2rem; cursor: pointer;"></i>
            </div>
        </div>

        <!-- WELCOME CARD -->
        <div class="card border-0 shadow-sm mb-4" style="border-radius: 10px; background-color: #f0f4fa;">
            <div class="card-body py-4">
                <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-stethoscope text-primary mr-3" style="font-size: 1.5rem;"></i>
                    <h5 class="m-0 font-weight-bold text-dark">Bienvenido/a, {{ titulo }} {{ nombreUser }}</h5>
                </div>
                <p class="mb-0 text-muted" style="font-size: 0.95rem; margin-left: 2.5rem;">
                    Tienes <span class="font-weight-bold text-dark">{{ dashboardData.totalCitas || 0 }} citas</span> programadas para hoy.
                </p>
            </div>
        </div>

        <!-- STATS ROW 1 -->
        <div class="row mb-4">
            <!-- Citas Hoy -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card h-100 py-2 border-0 shadow-sm" style="border-left: 4px solid #4e73df !important; border-radius: 10px;">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-muted mb-1" style="font-size: 0.8rem;">Citas Hoy</div>
                                <div class="h3 mb-0 font-weight-bold text-gray-800">{{ dashboardData.totalCitas || 0 }}</div>
                            </div>
                            <div class="col-auto">
                                <div class="icon-circle bg-primary-light">
                                    <i class="far fa-calendar text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Confirmadas (Asumiremos que completadas = confirmadas o atendidas, o dependemos de la logica) -->
            <!-- En este mock: Atendidas = completadas, Confirmadas = x. Vamos a mapear -->
            <!-- La logica muestra completadas, canceladas, pendientes. -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card h-100 py-2 border-0 shadow-sm" style="border-left: 4px solid #1cc88a !important; border-radius: 10px;">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-muted mb-1" style="font-size: 0.8rem;">Confirmadas</div>
                                <div class="h3 mb-0 font-weight-bold text-gray-800">{{ confirmadasCount }}</div>
                            </div>
                            <div class="col-auto">
                                <div class="icon-circle bg-success-light">
                                    <i class="far fa-check-circle text-success"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pendientes -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card h-100 py-2 border-0 shadow-sm" style="border-left: 4px solid #f6c23e !important; border-radius: 10px;">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-muted mb-1" style="font-size: 0.8rem;">Pendientes</div>
                                <div class="h3 mb-0 font-weight-bold text-gray-800">{{ dashboardData.totalCitasPendientes || 0 }}</div>
                            </div>
                            <div class="col-auto">
                                <div class="icon-circle bg-warning-light">
                                    <i class="far fa-clock text-warning"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Atendidas / Completadas -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card h-100 py-2 border-0 shadow-sm" style="border-left: 4px solid #858796 !important; border-radius: 10px;">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-muted mb-1" style="font-size: 0.8rem;">Atendidas</div>
                                <div class="h3 mb-0 font-weight-bold text-gray-800">{{ dashboardData.totalCitasCompletadas || 0 }}</div>
                            </div>
                            <div class="col-auto">
                                <div class="icon-circle bg-secondary-light">
                                    <i class="fas fa-check-double text-secondary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- LIST ROW -->
        <div class="row">
            <!-- Mis Citas de Hoy list -->
            <div class="col-12 mb-4 d-flex">
                <div class="card border-0 shadow-sm w-100" style="border-radius: 10px;">
                    <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
                        <h6 class="m-0 font-weight-bold text-dark">
                            <i class="far fa-clock text-primary mr-2"></i> Mis Citas de Hoy
                        </h6>
                    </div>
                    <div class="card-body">
                        <div v-if="dashboardData.citasHoy && dashboardData.citasHoy.length > 0">
                            <div class="citas-container pr-2" style="max-height: 500px; overflow-y: auto;">
                                <div v-for="(cita, index) in dashboardData.citasHoy" :key="index" class="mb-3 border-bottom pb-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <p class="mb-0 font-weight-bold text-dark" v-if="cita.patient">{{ cita.patient.nombres }} {{ cita.patient.name }}</p>
                                            <p class="mb-0 font-weight-bold text-dark" v-else>Paciente Sin Nombre</p>
                                            <small class="text-muted">{{ cita.motivo || 'Cita Programada' }}</small>
                                        </div>
                                        <div class="text-right">
                                            <span class="badge" :class="statusBadge(cita.status).class" >
                                                {{ statusBadge(cita.status).text }}
                                            </span><br>
                                            <small class="text-muted"><i class="far fa-clock mr-1"></i>{{ cita.time || cita.hora_inicio || cita.date }}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="text-center py-5 d-flex flex-column align-items-center justify-content-center" style="min-height: 200px;">
                            <p class="text-muted mb-0">No tienes citas programadas para hoy.</p>
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
    name: "HomeDashboardProfesional",
    props: ['dataUser', 'nombreUser'],
    data() {
        return {
            dashboardData: {
                citasHoy: [],
                totalCitas: 0,
                totalCitasPendientes: 0,
                totalCitasCompletadas: 0,
                totalCitasCanceladas: 0,
            },
            loading: true
        }
    },
    computed: {
        currentDateFormatted() {
            return moment().format('D MMM YYYY');
        },
        userLastName() {
            if (this.dataUser && this.dataUser.lastname) return this.dataUser.lastname;
            if (this.nombreUser) {
                let parts = this.nombreUser.split(' ');
                return parts.length > 1 ? parts[parts.length - 1] : parts[0];
            }
            return 'Profesional';
        },
        titulo() {
            // Asumiremos Dra. o Dr. según la logica (por defecto intentaremos ver genero o simplemente mostramos el titulo).
            // Aca lo dejamos harcodeado como tu ejemplo si tienes un campo en dataUser.
            return this.dataUser && this.dataUser.gender == 0 ? 'Dra.' : 'Dr.';
        },
        confirmadasCount() {
            // Segun dashboard controller, tenemos: pendientes(1), completadas(2), canceladas(3).
            // "Confirmadas" podria ser la suma de citas restando las canceladas, o podria ser 'totalCitas'.
            // Vamos a usar 'totalCitas - totalCitasCanceladas'
            return (this.dashboardData.totalCitas || 0) - (this.dashboardData.totalCitasCanceladas || 0);
        }
    },
    mounted() {
        this.fetchDashboardData();
    },
    methods: {
        fetchDashboardData() {
            this.loading = true;
            axios.get('/api/dashboardProfesional')
                .then(res => {
                    let data = res.data;
                    this.dashboardData = {
                        citasHoy: data.citasHoy || [],
                        totalCitas: data.totalCitas || 0,
                        totalCitasPendientes: data.totalCitasPendientes || 0,
                        totalCitasCompletadas: data.totalCitasCompletadas || 0,
                        totalCitasCanceladas: data.totalCitasCanceladas || 0,
                    };
                })
                .catch(err => {
                    console.error("Error al obtener datos del dashboard profesional:", err);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        statusBadge(status) {
            // 1: Pendiente, 2: Completado (Atendida), 3: Cancelada
            switch(status) {
                case '1':
                case 1:
                    return { text: 'Pendiente', class: 'badge-warning text-dark' };
                case '2':
                case 2:
                    return { text: 'Atendida', class: 'badge-success' };
                case '3':
                case 3:
                    return { text: 'Cancelada', class: 'badge-danger' };
                default:
                    return { text: 'Programada', class: 'badge-primary' };
            }
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
.bg-warning-light { background-color: #fdf3d8; }
.bg-danger-light { background-color: #fbe3e4; }
.bg-info-light { background-color: #eaf3ff; }

/* Custom scrollbar para listas largas */
.citas-container::-webkit-scrollbar {
    width: 6px;
}
.citas-container::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 4px;
}
.citas-container::-webkit-scrollbar-thumb {
    background: #d1d3e2; 
    border-radius: 4px;
}
.citas-container::-webkit-scrollbar-thumb:hover {
    background: #b7b9cc; 
}
</style>
