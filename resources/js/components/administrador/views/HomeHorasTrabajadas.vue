<template>
  <div class="container-fluid py-4">
    <div class="d-flex justify-content-between mb-4">
        <h3 class="font-weight-bold text-dark">Horas Trabajadas y Bloqueos</h3>
    </div>

    <!-- Filtros -->
    <div class="row mb-4 bg-white p-3 shadow-sm rounded">
        <div class="col-md-4">
            <label class="form-label font-weight-bold">Profesional</label>
            <select class="form-select form-control" v-model="selectedProf" @change="fetchReporte">
                <option value="">Seleccione Profesional</option>
                <option v-for="prof in professionals" :key="prof.id" :value="prof.id">
                    {{ prof.name }}
                </option>
            </select>
        </div>
        <div class="col-md-3">
            <label class="form-label font-weight-bold">Mes</label>
            <input type="month" class="form-control" v-model="selectedMonth" @change="fetchReporte">
        </div>
        <div class="col-md-3 d-flex align-items-end">
            <button class="btn btn-primary w-100" @click="fetchReporte" :disabled="!selectedProf || !selectedMonth">
                <i class="fas fa-search me-2"></i> Consultar
            </button>
        </div>
        <div class="col-md-2 d-flex align-items-end">
            <button class="btn btn-danger w-100" data-bs-toggle="modal" data-bs-target="#modalBloqueo" :disabled="!selectedProf">
                <i class="fas fa-ban me-2"></i> Bloquear
            </button>
        </div>
    </div>

    <!-- Resultados -->
    <div class="row mb-4" v-if="reporte">
        <div class="col-md-4">
            <div class="card bg-info text-white shadow h-100 border-0 rounded-lg">
                <div class="card-body">
                    <h5 class="text-uppercase mb-2" style="font-size: 0.9rem; letter-spacing: 0.5px; opacity: 0.9;">Horas Programadas</h5>
                    <h2 class="mb-0 font-weight-bold">{{ reporte.horas_programadas }} <small style="font-size: 1rem; font-weight: normal;">hrs</small></h2>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-success text-white shadow h-100 border-0 rounded-lg">
                <div class="card-body">
                    <h5 class="text-uppercase mb-2" style="font-size: 0.9rem; letter-spacing: 0.5px; opacity: 0.9;">Horas Trabajadas</h5>
                    <h2 class="mb-0 font-weight-bold">{{ reporte.horas_trabajadas }} <small style="font-size: 1rem; font-weight: normal;">hrs</small></h2>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-warning text-dark shadow h-100 border-0 rounded-lg">
                <div class="card-body">
                    <h5 class="text-uppercase mb-2" style="font-size: 0.9rem; letter-spacing: 0.5px; opacity: 0.9;">Horas No Trabajadas</h5>
                    <h2 class="mb-0 font-weight-bold">{{ reporte.horas_no_trabajadas }} <small style="font-size: 1rem; font-weight: normal;">hrs</small></h2>
                </div>
            </div>
        </div>
    </div>

    <!-- Tabla Bloqueos -->
    <div class="card shadow border-0 rounded-lg mb-4" v-if="reporte && reporte.bloqueos.length > 0">
        <div class="card-header bg-white py-3 border-bottom-0">
            <h6 class="m-0 font-weight-bold text-primary">Bloqueos Registrados en el Mes</h6>
        </div>
        <div class="card-body pt-0">
            <div class="table-responsive">
                <table class="table table-hover align-middle">
                    <thead class="table-light text-muted">
                        <tr>
                            <th class="border-0">Fecha</th>
                            <th class="border-0">Horario</th>
                            <th class="border-0">Motivo</th>
                            <th class="border-0 text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="b in reporte.bloqueos" :key="b.id">
                            <td><span class="badge bg-light text-dark border">{{ b.date }}</span></td>
                            <td>
                                <span v-if="b.hora_inicio && b.hora_fin">
                                    <i class="far fa-clock text-muted me-1"></i> {{ formatTime(b.hora_inicio) }} - {{ formatTime(b.hora_fin) }}
                                </span>
                                <span v-else class="text-muted">Día Completo</span>
                            </td>
                            <td>{{ b.recomendation }}</td>
                            <td class="text-end">
                                <button class="btn btn-sm btn-outline-danger" @click="desbloquear(b.id)">
                                    <i class="fas fa-unlock-alt"></i> Desbloquear
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Modal Bloqueo -->
    <div class="modal fade" id="modalBloqueo" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg">
          <div class="modal-header bg-danger text-white border-0">
            <h5 class="modal-title font-weight-bold"><i class="fas fa-ban me-2"></i> Registrar Bloqueo</h5>
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" @click="cerrarModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-3">
                <label class="form-label font-weight-bold">Fecha a bloquear</label>
                <input type="date" class="form-control" v-model="bloqueo.date" @change="fetchSchedulesForDate">
            </div>
            <div class="mb-3">
                <label class="form-label font-weight-bold">Horario (Opcional)</label>
                <select class="form-select form-control" v-model="bloqueo.schedule_id" :disabled="!bloqueo.date">
                    <option value="">Todo el día</option>
                    <option v-for="s in schedulesForDate" :key="s.id" :value="s.id">
                        {{ formatTime(s.check_time) }} - {{ formatTime(s.departure_date) }}
                    </option>
                </select>
                <small class="text-danger mt-1 d-block" v-if="bloqueo.date && schedulesForDate.length === 0">
                    <i class="fas fa-exclamation-circle"></i> El profesional no tiene horarios en esta fecha.
                </small>
            </div>
            <div class="mb-3">
                <label class="form-label font-weight-bold">Motivo</label>
                <select class="form-select form-control" v-model="bloqueo.motivo">
                    <option value="" disabled>Seleccione un motivo</option>
                    <option value="CUMPLEAÑOS --> RETRIBUIDO">CUMPLEAÑOS --> RETRIBUIDO</option>
                    <option value="PERMISOS --> NO RETRIBUIDO">PERMISOS --> NO RETRIBUIDO</option>
                    <option value="VACACIONES --> RETRIBUIDO">VACACIONES --> RETRIBUIDO</option>
                    <option value="APOYO A GRABACIONES --> RETRIBUIDO">APOYO A GRABACIONES --> RETRIBUIDO</option>
                    <option value="APOYO A GRUPOS TERAPEUTICOS --> RETRIBUIDO">APOYO A GRUPOS TERAPEUTICOS --> RETRIBUIDO</option>
                    <option value="OTROS APOYOS --> RETRIBUIDO">OTROS APOYOS --> RETRIBUIDO</option>
                </select>
            </div>
          </div>
          <div class="modal-footer border-0 bg-light">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="cerrarModal">Cancelar</button>
            <button type="button" class="btn btn-danger" @click="guardarBloqueo" :disabled="bloqueo.date && schedulesForDate.length === 0 && !bloqueo.schedule_id">
                <i class="fas fa-save me-1"></i> Guardar Bloqueo
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            professionals: [],
            selectedProf: '',
            selectedMonth: new Date().toISOString().slice(0, 7), // YYYY-MM
            reporte: null,
            bloqueo: {
                date: '',
                schedule_id: '',
                motivo: ''
            },
            schedulesForDate: []
        }
    },
    mounted() {
        this.fetchProfessionals();
    },
    methods: {
        formatTime(timeStr) {
            if (!timeStr) return '';
            const [hours, minutes] = timeStr.split(':');
            return `${hours}:${minutes}`;
        },
        async fetchProfessionals() {
            try {
                const res = await axios.get('/api/profesional');
                this.professionals = res.data;
            } catch (error) {
                console.error(error);
            }
        },
        async fetchReporte() {
            if (!this.selectedProf || !this.selectedMonth) return;
            try {
                const res = await axios.get('/api/reporte-horas-trabajadas', {
                    params: {
                        professional_id: this.selectedProf,
                        month: this.selectedMonth
                    }
                });
                this.reporte = res.data;
            } catch (error) {
                console.error(error);
                Swal.fire('Error', 'No se pudo cargar el reporte', 'error');
            }
        },
        async fetchSchedulesForDate() {
            this.schedulesForDate = [];
            this.bloqueo.schedule_id = '';
            if (!this.bloqueo.date || !this.selectedProf) return;
            try {
                const res = await axios.get(`/api/horarioOcupado/${this.selectedProf}/${this.bloqueo.date}`);
                
                const dateParts = this.bloqueo.date.split('-');
                const dateObj = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
                const diasSemana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
                const diaNombre = diasSemana[dateObj.getDay()];
                
                if (res.data && res.data.solos) {
                    this.schedulesForDate = res.data.solos.filter(s => String(s.day).toLowerCase() === diaNombre);
                }
            } catch (error) {
                console.error(error);
            }
        },
        async guardarBloqueo() {
            if (!this.bloqueo.date || !this.bloqueo.motivo) {
                Swal.fire('Atención', 'Debe indicar la fecha y el motivo', 'warning');
                return;
            }
            try {
                const res = await axios.post('/api/bloquear-horarios', {
                    professional_id: this.selectedProf,
                    date: this.bloqueo.date,
                    schedule_id: this.bloqueo.schedule_id,
                    motivo: this.bloqueo.motivo
                });
                
                Swal.fire('Éxito', res.data.message, 'success');
                this.cerrarModal();
                
                this.bloqueo.date = '';
                this.bloqueo.schedule_id = '';
                this.bloqueo.motivo = '';
                this.fetchReporte();
            } catch (error) {
                console.error(error);
                if(error.response && error.response.data && error.response.data.message){
                    Swal.fire('Error', error.response.data.message, 'error');
                } else {
                    Swal.fire('Error', 'Ocurrió un error al guardar el bloqueo', 'error');
                }
            }
        },
        async desbloquear(id) {
            const confirm = await Swal.fire({
                title: '¿Eliminar bloqueo?',
                text: "El horario volverá a estar disponible.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sí, desbloquear',
                cancelButtonText: 'Cancelar'
            });

            if (confirm.isConfirmed) {
                try {
                    const res = await axios.delete(`/api/desbloquear-horario/${id}`);
                    Swal.fire('Desbloqueado', res.data.message, 'success');
                    this.fetchReporte();
                } catch (error) {
                    console.error(error);
                    Swal.fire('Error', 'No se pudo eliminar el bloqueo', 'error');
                }
            }
        },
        cerrarModal() {
            // Compatibilidad con Bootstrap 4/5 para cerrar modales manualmente
            const modalElement = document.getElementById('modalBloqueo');
            if (modalElement) {
                modalElement.classList.remove('show');
                modalElement.style.display = 'none';
                modalElement.setAttribute('aria-hidden', 'true');
            }
            
            const backdrops = document.getElementsByClassName('modal-backdrop');
            while(backdrops.length > 0){
                backdrops[0].parentNode.removeChild(backdrops[0]);
            }
            document.body.classList.remove('modal-open');
            document.body.style.paddingRight = '';
        }
    }
}
</script>

<style scoped>
.rounded-lg {
    border-radius: 12px;
}
.table th {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
}
.badge {
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0.4em 0.6em;
}
</style>
