<template>
  <div class="mt-4">
    <div class="card shadow mb-4">
      <div class="card-header bg-dark py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 class="m-0 font-weight-bold text-white">Gestión de Horarios</h6>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-4">
            <div class="card rounded border border-primary p-4">
              <h5 class="text-success font-weight-bold">Agregar Horario</h5>
              <form @submit.prevent="insertSchedule">
                <div class="form-group">
                  <label>Fecha Específica</label>
                  <input type="date" class="form-control" v-model="schedule.date" required>
                </div>
                <div class="form-group">
                  <label>Hora de Inicio</label>
                  <input class="form-control" type="time" v-model="schedule.check_time" required>
                </div>
                <div class="form-group">
                  <label>Hora de Salida</label>
                  <input class="form-control" type="time" v-model="schedule.departure_date" required>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-success">Registrar horario</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card rounded border border-primary p-4">
              <h5 class="text-success font-weight-bold">Horarios Registrados</h5>
              <div class="table-responsive mt-3">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Día / Fecha</th>
                      <th>Hora Inicio</th>
                      <th>Hora Fin</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="horario in horarios" :key="horario.id">
                      <td>
                        <span v-if="horario.date">{{ horario.date }}</span>
                        <span v-else>{{ horario.day }} (Recurrente)</span>
                      </td>
                      <td>{{ horaHumana(horario.check_time) }}</td>
                      <td>{{ horaHumana(horario.departure_date) }}</td>
                      <td>
                        <span v-if="horario.active" class="badge badge-success bg-success">Activo</span>
                        <span v-else class="badge badge-danger bg-danger">Inactivo</span>
                      </td>
                      <td>
                        <button class="btn btn-sm" :class="horario.active ? 'btn-danger' : 'btn-success'" @click="toggleActive(horario.id)">
                          {{ horario.active ? 'Desactivar' : 'Activar' }}
                        </button>
                        <button class="btn btn-sm btn-outline-danger ml-2" @click="deleteSchedule(horario.id)">
                          <i class="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr v-if="horarios.length === 0">
                      <td colspan="5" class="text-center">No hay horarios registrados.</td>
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
</template>

<script>
export default {
  props: {
    profId: {
      required: true
    }
  },
  data() {
    return {
      horarios: [],
      schedule: {
        date: '',
        check_time: '',
        departure_date: '',
        professional_id: this.profId
      }
    };
  },
  mounted() {
    this.getSchedules();
  },
  methods: {
    getSchedules() {
      this.axios.get(`/api/professional/${this.profId}/schedules/all`)
        .then(res => {
          this.horarios = res.data;
        })
        .catch(err => console.error(err));
    },
    insertSchedule() {
      this.schedule.professional_id = this.profId;
      this.axios.post('/api/schedule', this.schedule)
        .then(result => {
          if (result.data.mensaje === 'Exito') {
            this.$swal('Horario insertado');
            this.getSchedules();
            this.schedule.date = '';
            this.schedule.check_time = '';
            this.schedule.departure_date = '';
          } else {
            this.$swal({ icon: 'error', title: 'El horario insertado se cruzaba con otro' });
          }
        })
        .catch(err => console.error(err));
    },
    toggleActive(id) {
      this.axios.put(`/api/schedule/${id}/toggle`)
        .then(res => {
          if (res.data.mensaje === 'success') {
            this.getSchedules();
          }
        })
        .catch(err => console.error(err));
    },
    deleteSchedule(id) {
      this.$swal({
        title: '¿Quieres eliminar este horario?',
        showDenyButton: true,
        confirmButtonText: 'Sí',
        denyButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios.delete('/api/schedule/' + id)
            .then(res => {
              this.$swal('Horario eliminado con éxito');
              this.getSchedules();
            });
        }
      });
    },
    horaHumana(hora) {
      if (!hora) return '...';
      let minutos = parseInt(hora.substring(3, 5));
      let hr = parseInt(hora.substring(0, 2));
      if (hr > 12) {
        return `${hr - 12}:${minutos.toString().padStart(2, '0')} PM`;
      } else {
        if (hr === 12 && minutos >= 0) {
          return `${hr}:${minutos.toString().padStart(2, '0')} PM`;
        }
        if (hr === 0) {
          return `12:${minutos.toString().padStart(2, '0')} AM`;
        }
        return `${hr}:${minutos.toString().padStart(2, '0')} AM`;
      }
    }
  }
};
</script>

<style scoped>
.badge {
  font-size: 0.9em;
}
.ml-2 {
  margin-left: 0.5rem;
}
</style>
