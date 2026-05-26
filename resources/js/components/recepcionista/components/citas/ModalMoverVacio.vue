<template>
  <div class="modal fade" id="modalMoverVacio" tabindex="-1" role="dialog" aria-labelledby="modalMoverVacioLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content p-2 shadow" style="border-radius: 16px; border: none;">
        <div class="modal-header border-0 pb-0">
          <div class="d-flex align-items-center">
            <i class="fas fa-share-square text-primary fs-5 me-2"></i> 
            <h5 class="modal-title fw-bold" id="modalMoverVacioLabel" style="color: #1e293b;">Mover a sitio Vacio</h5>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body border-0 pt-3">
          
          <form action="" @submit.prevent="moverVacio">
            
            <div class="p-3 mb-4 rounded-3" style="background-color: #f8fafc; border: 1px solid #f1f5f9;">
              <h6 class="mb-1 fw-semibold text-capitalize" style="color: #334155; font-size: 15px;">
                {{ dataCit.patient ? dataCit.patient.name + ' ' + dataCit.patient.nombres : 'Paciente' }}
              </h6>
              <div style="color: #64748b; font-size: 13px;">
                Actual: {{ dataCit.date || '...' }} · 
                {{ dataCit.schedule ? horaLatam1(dataCit.schedule.check_time) : '...' }} - {{ dataCit.schedule ? horaLatam1(dataCit.schedule.departure_date) : '...' }} · 
                {{ dataCit.professional ? dataCit.professional.name : 'Profesional' }}
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label mb-1" style="color: #475569; font-size: 14px;">Nueva Fecha</label>
              <div class="input-group">
                <input 
                  type="date" 
                  class="form-control custom-input shadow-none" 
                  v-model="fechaNueva"
                  :min="getDateNow()"
                  @change="buscarHorariosManual"
                >
              </div>
            </div>
               
            <div class="mb-3">
              <label class="form-label mb-1" style="color: #475569; font-size: 14px;">Nueva Hora</label>
              
              <div v-if="cargandoHorarios" class="text-center py-2 text-primary">
                <i class="fas fa-spinner fa-spin"></i> Cargando horarios...
              </div>
              
              <div v-else class="d-flex flex-wrap gap-2" :key="keyHorarios">
                <button 
                  type="button" 
                  class="schedule-chip"
                  :class="{'active-chip': horaNuevaId === hora.id}"
                  v-for="hora in horariosDisponibles" :key="hora.id"
                  @click="horaNuevaId = hora.id"
                >
                  {{ horaLatam1(hora.check_time) }}
                </button>
                <div v-if="horariosDisponibles.length === 0" class="text-muted small w-100">
                  No hay horarios libres para esta fecha
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-end gap-2 mt-4">
              <button type="button" class="btn custom-btn-cancel" data-bs-dismiss="modal" id="cerrarModalVacio">Cancelar</button>
              <button type="submit" class="btn btn-primary custom-btn-submit d-flex align-items-center" :disabled="isProcessing || !horaNuevaId">
                <i class="fas fa-save me-2" v-if="!isProcessing"></i>
                <i class="fas fa-spinner fa-spin me-2" v-if="isProcessing"></i>
                Mover Cita
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dateNow } from '../../../../helpers/Time.js'
import alertify from 'alertifyjs'
import moment from 'moment'

export default {
  name: "ModalMoverVacio",

  data() {
    return {
      fechaNueva: '',
      horaNuevaId: '',
      horariosDisponibles: [],
      cargandoHorarios: false,
      isProcessing: false,
      keyHorarios: 0,
    }
  },
  props: {
    dataCit: Object, 
    idUsuario: null
  },  

  methods: {
    async buscarHorariosManual() {
      if (!this.fechaNueva || !this.dataCit.professional_id) return;
      
      let diaManual = parseInt(moment(this.fechaNueva).format('d')) - 1;
      if (diaManual === -1) diaManual = 6;
      let diaSemana = this.dayWeek(diaManual);
      
      this.cargandoHorarios = true;
      this.horariosDisponibles = [];
      this.horaNuevaId = '';

      await this.axios.get(`/api/horarioCuadernoOcupado/${this.fechaNueva}/${diaSemana}`)
        .then(res => {
          let solos = res.data.solos.filter(h => h.professional_id == this.dataCit.professional_id);
          let invalidos = res.data.invalidos;
          
          this.horariosDisponibles = solos.filter(h => {
            // Si el id del slot inválido coincide con el horario, NO lo incluimos.
            // PERO si el horario inválido es la cita actual que estamos moviendo, SÍ lo incluimos (porque se desocupará).
            let invalido = invalidos.find(i => i.schedule_id == h.id);
            if (!invalido) return true;
            if (invalido.id === this.dataCit.id) return true;
            return false;
          });
          
          this.keyHorarios++;
        })
        .finally(() => this.cargandoHorarios = false);
    },

    async moverVacio() {
      if (!this.horaNuevaId) {
        alertify.notify('El horario no puede estar vacío', 'danger', 10);
        return;
      }
      
      this.isProcessing = true;
      
      let payload = {
        id: this.dataCit.id,
        date: this.fechaNueva,
        schedule_id: this.horaNuevaId,
        user_id: this.idUsuario
      };

      await this.axios.put(`/api/mandarVacio/${this.dataCit.id}`, payload)
        .then(res => {
          this.closeModal();
          this.$emit('ocultarCita');
          this.$swal({icon:'success', title: 'Cita movida con éxito'});
        })
        .catch(err => {
          console.error(err);
          this.$swal({icon:'error', title: 'Error al mover la cita'});
        })
        .finally(() => this.isProcessing = false);
    },

    closeModal() {
      document.getElementById('cerrarModalVacio').click();
    },

    dayWeek (day) {
      switch (day) {
        case 0: return "Lunes"; break;
        case 1: return "Martes"; break;
        case 2: return "Miercoles"; break;
        case 3: return "Jueves"; break;
        case 4: return "Viernes"; break;
        case 5: return "Sabado"; break;
        case 6: return "Domingo"; break;
      }
    },

    getDateNow () {
      return dateNow()
    },
		horaLatam1(horita){ return moment(horita, 'HH:mm:ss').format('hh:mm') },
  },

  watch: {
    dataCit: {
      immediate: true,
      handler(newVal) {
        if(newVal && newVal.date) {
          this.fechaNueva = newVal.date;
          this.buscarHorariosManual();
        }
      }
    }
  },
}
</script>

<style scoped>
.schedule-chip {
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background-color: #ffffff;
  color: #475569;
  padding: 0.5rem 1rem;
  font-weight: 500;
  transition: all 0.2s;
  font-size: 14px;
}
.schedule-chip:hover {
  background-color: #f8fafc;
  border-color: #94a3b8;
}
.schedule-chip.active-chip {
  background-color: #eff6ff;
  border-color: #3b82f6;
  color: #2563eb;
  font-weight: 600;
}
.custom-input {
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  padding: 0.6rem 1rem;
  font-size: 14px;
}
.custom-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 0.2rem rgba(59, 130, 246, 0.15);
  outline: none;
}
.custom-btn-cancel {
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background-color: #ffffff;
  color: #475569;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  font-size: 14px;
}
.custom-btn-cancel:hover {
  background-color: #f1f5f9;
}
.custom-btn-submit {
  border-radius: 8px;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  background-color: #79a6fa; 
  border: none;
  font-size: 14px;
  color: #fff;
}
.custom-btn-submit:hover {
  background-color: #5c91f9;
}
</style>
