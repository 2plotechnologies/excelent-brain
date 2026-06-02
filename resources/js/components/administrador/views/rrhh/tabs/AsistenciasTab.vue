<template>
  <div>
    <div class="row mb-4">
      <div class="col-md-3">
        <label class="text-muted small font-weight-bold">Filtro de fechas</label>
        <div class="d-flex">
          <input type="date" class="form-control form-control-sm mr-2" v-model="filters.start_date" @change="fetchAttendances">
          <input type="date" class="form-control form-control-sm" v-model="filters.end_date" @change="fetchAttendances">
        </div>
      </div>
      <div class="col-md-3">
        <label class="text-muted small font-weight-bold">Nombre del empleado</label>
        <input type="text" class="form-control form-control-sm" placeholder="Buscar..." v-model="filters.employee_name" @input="filterByName">
      </div>
      <div class="col-md-2">
        <label class="text-muted small font-weight-bold">Estado</label>
        <select class="form-control form-control-sm" v-model="filters.status" @change="fetchAttendances">
          <option value="">Todos</option>
          <option value="Presente">Presente</option>
          <option value="Tardanza">Tardanza</option>
          <option value="Ausente">Ausente</option>
          <option value="Descanso">Descanso</option>
          <option value="Permiso">Permiso</option>
        </select>
      </div>
      <div class="col-md-4 d-flex align-items-end justify-content-end">
        <button class="btn btn-primary btn-sm" @click="openNewAttendanceModal">
          <i class="fas fa-plus"></i> Agregar Asistencia
        </button>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-hover align-middle text-center">
        <thead class="bg-light text-muted">
          <tr>
            <th class="text-left font-weight-bold border-0">Empleado</th>
            <th class="font-weight-bold border-0">Fecha</th>
            <th class="font-weight-bold border-0">Entrada</th>
            <th class="font-weight-bold border-0">Salida</th>
            <th class="font-weight-bold border-0">Horas Trabajadas</th>
            <th class="font-weight-bold border-0">Estado</th>
            <th class="font-weight-bold border-0">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="attendance in filteredAttendances" :key="attendance.id">
            <td class="text-left">
              <div class="font-weight-bold text-dark">{{ getEmployeeName(attendance) }}</div>
              <div class="small text-muted">{{ getEmployeeType(attendance) }}</div>
            </td>
            <td>{{ formatDate(attendance.attendance_date) }}</td>
            <td>
              <input type="time" class="form-control form-control-sm text-center border-0 bg-light" v-model="attendance.check_in_time" @change="updateAttendance(attendance)">
            </td>
            <td>
              <input type="time" class="form-control form-control-sm text-center border-0 bg-light" v-model="attendance.check_out_time" @change="updateAttendance(attendance)">
            </td>
            <td>{{ attendance.worked_hours || '0' }} h</td>
            <td>
              <span class="badge badge-pill px-3 py-2" :class="getStatusClass(attendance.status)">
                {{ attendance.status }}
              </span>
            </td>
            <td>
              <button class="btn btn-sm btn-outline-danger border-0" @click="deleteAttendance(attendance.id)" title="Eliminar">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
          <tr v-if="filteredAttendances.length === 0">
            <td colspan="7" class="text-center py-4 text-muted">No se encontraron registros.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="d-flex justify-content-center mt-3" v-if="pagination.last_page > 1">
      <nav>
        <ul class="pagination pagination-sm">
          <li class="page-item" :class="{ disabled: pagination.current_page === 1 }">
            <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page - 1)">Anterior</a>
          </li>
          <li class="page-item" v-for="page in pagination.last_page" :key="page" :class="{ active: pagination.current_page === page }">
            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: pagination.current_page === pagination.last_page }">
            <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page + 1)">Siguiente</a>
          </li>
        </ul>
      </nav>
    </div>

      <!-- Add Attendance Modal -->
      <div class="modal fade" id="addAttendanceModal" tabindex="-1" role="dialog" aria-labelledby="addAttendanceModalLabel" aria-hidden="true" data-backdrop="static">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content border-0 shadow-lg" style="border-radius: 15px; overflow: hidden;">
            <div class="modal-header bg-primary text-white border-0 py-3">
              <h5 class="modal-title font-weight-bold" style="letter-spacing: 0.5px;">
                <i class="fas fa-calendar-check mr-2"></i> Registrar Asistencia
              </h5>
              <button type="button" class="close text-white" @click="closeModal" aria-label="Close" style="opacity: 0.8; text-shadow: none;">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-4 bg-light">
              
              <!-- Tipo de Empleado -->
              <div class="form-group mb-4 bg-white p-3 rounded shadow-sm border">
                <label class="text-muted small font-weight-bold text-uppercase mb-2"><i class="fas fa-user-tag mr-1 text-primary"></i> Tipo de Empleado</label>
                <select class="form-control form-control-lg border-0 bg-light" v-model="newAttendance.type" style="border-radius: 8px;">
                  <option value="profesional">⚕️ Profesional Médico</option>
                  <option value="logistico">🏢 Usuario Logístico</option>
                </select>
              </div>

              <!-- Selector Profesional -->
              <div class="form-group mb-4 bg-white p-3 rounded shadow-sm border" v-if="newAttendance.type === 'profesional'">
                <label class="text-muted small font-weight-bold text-uppercase mb-2"><i class="fas fa-user-md mr-1 text-primary"></i> Seleccionar Profesional</label>
                <select class="form-control form-control-lg border-0 bg-light" v-model="newAttendance.professional_id" style="border-radius: 8px;">
                  <option value="">Seleccione un Profesional...</option>
                  <option v-for="prof in professionals" :key="prof.id" :value="prof.id">
                    {{ prof.name }} {{ prof.lastname }}
                  </option>
                </select>
              </div>

              <!-- Selector Logístico -->
              <div class="form-group mb-4 bg-white p-3 rounded shadow-sm border" v-if="newAttendance.type === 'logistico'">
                <label class="text-muted small font-weight-bold text-uppercase mb-2"><i class="fas fa-user-tie mr-1 text-primary"></i> Seleccionar Usuario</label>
                <select class="form-control form-control-lg border-0 bg-light" v-model="newAttendance.user_id" style="border-radius: 8px;">
                  <option value="">Seleccione un Usuario...</option>
                  <option v-for="user in users" :key="user.id" :value="user.id">
                    {{ user.nombre }} ({{ user.rol }})
                  </option>
                </select>
              </div>

              <!-- Fecha -->
              <div class="form-group mb-4 bg-white p-3 rounded shadow-sm border">
                <label class="text-muted small font-weight-bold text-uppercase mb-2"><i class="far fa-calendar-alt mr-1 text-primary"></i> Fecha de Asistencia</label>
                <input type="date" class="form-control form-control-lg border-0 bg-light" v-model="newAttendance.attendance_date" required style="border-radius: 8px;">
              </div>

              <!-- Toggle Asistió -->
              <div class="form-group mb-4 bg-white p-3 rounded shadow-sm border d-flex align-items-center justify-content-between">
                <label class="text-muted small font-weight-bold text-uppercase mb-0"><i class="fas fa-clipboard-check mr-1 text-primary"></i> ¿El empleado asistió?</label>
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="asistioSwitch" v-model="newAttendance.asistio">
                  <label class="custom-control-label font-weight-bold" :class="newAttendance.asistio ? 'text-success' : 'text-danger'" for="asistioSwitch">
                    {{ newAttendance.asistio ? 'SÍ, ASISTIÓ' : 'NO (FALTA)' }}
                  </label>
                </div>
              </div>

              <!-- Horas (Solo si asistió) -->
              <div class="form-row bg-white p-3 rounded shadow-sm border mx-0" v-if="newAttendance.asistio">
                <div class="form-group col-md-6 mb-0 pr-md-2">
                  <label class="text-muted small font-weight-bold text-uppercase mb-2"><i class="fas fa-sign-in-alt mr-1 text-success"></i> Entrada</label>
                  <input type="time" class="form-control form-control-lg border-0 bg-light" v-model="newAttendance.check_in_time" style="border-radius: 8px;">
                </div>
                <div class="form-group col-md-6 mb-0 pl-md-2">
                  <label class="text-muted small font-weight-bold text-uppercase mb-2"><i class="fas fa-sign-out-alt mr-1 text-danger"></i> Salida</label>
                  <input type="time" class="form-control form-control-lg border-0 bg-light" v-model="newAttendance.check_out_time" style="border-radius: 8px;">
                </div>
              </div>

            </div>
            <div class="modal-footer bg-white border-0 py-3">
              <button type="button" class="btn btn-light font-weight-bold px-4" @click="closeModal" style="border-radius: 8px;">
                <i class="fas fa-times mr-1"></i> Cancelar
              </button>
              <button type="button" class="btn btn-primary font-weight-bold px-4 shadow-sm" @click="saveNewAttendance" style="border-radius: 8px;">
                <i class="fas fa-save mr-1"></i> Guardar Registro
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      attendances: [],
      filteredAttendances: [],
      filters: {
        start_date: moment().startOf('month').format('YYYY-MM-DD'),
        end_date: moment().endOf('month').format('YYYY-MM-DD'),
        employee_name: '',
        status: ''
      },
      pagination: {
        current_page: 1,
        last_page: 1
      },
      newAttendance: {
        type: 'profesional',
        user_id: '',
        professional_id: '',
        attendance_date: moment().format('YYYY-MM-DD'),
        check_in_time: '',
        check_out_time: ''
      },
      professionals: [],
      users: []
    };
  },
  mounted() {
    this.fetchAttendances();
    this.fetchEmployees();
  },
  methods: {
    fetchEmployees() {
      axios.get('/api/professional').then(res => {
        if (res.data) {
          this.professionals = res.data;
        }
      });
      axios.get('/api/cargarUsuarios').then(res => {
        if (res.data) {
          this.users = res.data;
        }
      });
    },
    fetchAttendances(page = 1) {
      this.pagination.current_page = page;
      axios.get(`/api/employee-attendances`, {
        params: {
          page: this.pagination.current_page,
          start_date: this.filters.start_date,
          end_date: this.filters.end_date,
          status: this.filters.status
        }
      }).then(res => {
        if (res.data.success) {
          this.attendances = res.data.data.data.map(att => {
            // Convert datetime to time string for input
            att.check_in_time = att.check_in ? moment(att.check_in).format('HH:mm') : null;
            att.check_out_time = att.check_out ? moment(att.check_out).format('HH:mm') : null;
            return att;
          });
          this.pagination.last_page = res.data.data.last_page;
          this.filterByName();
        }
      }).catch(err => {
        console.error(err);
      });
    },
    changePage(page) {
      if (page >= 1 && page <= this.pagination.last_page) {
        this.fetchAttendances(page);
      }
    },
    filterByName() {
      if (!this.filters.employee_name) {
        this.filteredAttendances = this.attendances;
        return;
      }
      const query = this.filters.employee_name.toLowerCase();
      this.filteredAttendances = this.attendances.filter(att => {
        const name = this.getEmployeeName(att).toLowerCase();
        return name.includes(query);
      });
    },
    getEmployeeName(attendance) {
      if (attendance.professional) {
        let name = attendance.professional.name || '';
        let lastname = attendance.professional.lastname || '';
        return `${name} ${lastname}`.trim();
      } else if (attendance.user) {
        return attendance.user.nombre || attendance.user.name || 'Desconocido';
      }
      return 'Desconocido';
    },
    getEmployeeType(attendance) {
      if (attendance.professional) {
        return attendance.professional.profesion || 'Profesional';
      } else if (attendance.user) {
        return attendance.user.rol || 'Usuario Logístico';
      }
      return '';
    },
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY');
    },
    getStatusClass(status) {
      switch (status) {
        case 'Presente': return 'badge-success bg-success text-white';
        case 'Tardanza': return 'badge-warning bg-warning text-dark';
        case 'Ausente': return 'badge-danger bg-danger text-white';
        case 'Descanso': return 'badge-secondary bg-secondary text-white';
        case 'Permiso': return 'badge-info bg-info text-white';
        default: return 'badge-light text-dark';
      }
    },
    updateAttendance(attendance) {
      if (attendance.check_in_time && attendance.check_out_time) {
        if (attendance.check_in_time >= attendance.check_out_time) {
          this.$swal.fire('Error', 'La hora de salida no puede ser anterior o igual a la hora de entrada.', 'error');
          this.fetchAttendances(this.pagination.current_page); // Revertir el valor en la UI
          return;
        }
      }

      let dateStr = moment(attendance.attendance_date).format('YYYY-MM-DD');
      let data = {
        check_in: attendance.check_in_time ? `${dateStr} ${attendance.check_in_time}:00` : null,
        check_out: attendance.check_out_time ? `${dateStr} ${attendance.check_out_time}:00` : null
      };

      axios.put(`/api/employee-attendances/${attendance.id}`, data)
        .then(res => {
          if (res.data.success) {
            this.$swal.fire({
              icon: 'success',
              title: 'Actualizado',
              text: 'Se actualizaron las horas correctamente',
              timer: 1500,
              showConfirmButton: false
            });
            this.fetchAttendances(this.pagination.current_page);
          }
        }).catch(err => {
          this.$swal.fire('Error', 'No se pudo actualizar', 'error');
        });
    },
    deleteAttendance(id) {
      this.$swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/api/employee-attendances/${id}`)
            .then(res => {
              if (res.data.success) {
                this.$swal.fire('Eliminado', 'El registro ha sido eliminado.', 'success');
                this.fetchAttendances(this.pagination.current_page);
              }
            });
        }
      });
    },
    openNewAttendanceModal() {
      this.newAttendance = {
        type: 'profesional',
        user_id: '',
        professional_id: '',
        attendance_date: moment().format('YYYY-MM-DD'),
        asistio: true,
        check_in_time: '',
        check_out_time: ''
      };
      $('#addAttendanceModal').modal('show');
    },
    closeModal() {
      $('#addAttendanceModal').modal('hide');
    },
    saveNewAttendance() {
      if (this.newAttendance.asistio && this.newAttendance.check_in_time && this.newAttendance.check_out_time) {
        if (this.newAttendance.check_in_time >= this.newAttendance.check_out_time) {
          this.$swal.fire('Error', 'La hora de salida no puede ser anterior o igual a la hora de entrada.', 'error');
          return;
        }
      }

      let dateStr = moment(this.newAttendance.attendance_date).format('YYYY-MM-DD');
      
      // Si no asistió, limpiamos las horas para que el backend lo marque como Ausente.
      let checkIn = null;
      let checkOut = null;
      
      if (this.newAttendance.asistio) {
        checkIn = this.newAttendance.check_in_time ? `${dateStr} ${this.newAttendance.check_in_time}:00` : null;
        checkOut = this.newAttendance.check_out_time ? `${dateStr} ${this.newAttendance.check_out_time}:00` : null;
      }

      let data = {
        user_id: this.newAttendance.type === 'logistico' ? (this.newAttendance.user_id || null) : null,
        professional_id: this.newAttendance.type === 'profesional' ? (this.newAttendance.professional_id || null) : null,
        attendance_date: dateStr,
        check_in: checkIn,
        check_out: checkOut
      };

      axios.post('/api/employee-attendances', data)
        .then(res => {
          if (res.data.success) {
            $('#addAttendanceModal').modal('hide');
            this.$swal.fire('Guardado', 'Asistencia registrada con éxito', 'success');
            this.fetchAttendances();
          }
        }).catch(err => {
          this.$swal.fire('Error', err.response?.data?.message || 'No se pudo guardar la asistencia', 'error');
        });
    }
  }
};
</script>

<style scoped>
.table th {
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
}
.badge-pill {
  font-size: 0.85rem;
}
input[type="time"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  opacity: 0.6;
  transition: 0.2s;
}
input[type="time"]::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}
</style>
