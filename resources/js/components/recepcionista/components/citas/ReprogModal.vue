<template>
  <div class="modal fade" :id="idModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content p-2 shadow" style="border-radius: 16px; border: none;">
        <div class="modal-header border-0 pb-0">
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-rotate text-primary fs-5 me-2"></i> 
            <h5 class="modal-title fw-bold" id="exampleModalLabel" style="color: #1e293b;">Reprogramar Cita</h5>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body border-0 pt-3">
          
          <div class="d-none">
            <input class="form-check-input" type="radio" name="radioTipo" id="exampleRadios1" value="reprogramar" v-model="caso">
            <input class="form-check-input" type="radio" name="radioTipo" id="exampleRadios2" value="limbo" v-model="caso">
            <input class="form-check-input" type="radio" name="radioTipo" id="exampleRadios3" value="vacio" v-model="caso">
          </div>

          <form action="" id="reproCita" @submit.prevent="onSubmit">
            
            <div class="p-3 mb-4 rounded-3" style="background-color: #f8fafc; border: 1px solid #f1f5f9;">
              <h6 class="mb-1 fw-semibold text-capitalize" style="color: #334155; font-size: 15px;">
                {{ dataCit.patient ? dataCit.patient.name + ' ' + dataCit.patient.nombres : 'Paciente' }}
              </h6>
              <div style="color: #64748b; font-size: 13px;">
                {{ dataCit.date || '...' }} · 
                {{ dataCit.schedule ? horaLatam1(dataCit.schedule.check_time) : '...' }} - {{ dataCit.schedule ? horaLatam1(dataCit.schedule.departure_date) : '...' }} · 
                {{ dataCit.professional ? dataCit.professional.name : 'Profesional' }}
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label mb-1" style="color: #475569; font-size: 14px;">Profesional</label>
              <select class="form-select custom-input text-secondary shadow-none" name="professional_id" v-model="data.professional_id" @change="listarhorario()">
                 <option v-for="(professional, index) in filteredProfessionals" :key="index" :value="professional.id">{{professional.name}}</option>
              </select>
            </div>

            <div class="mb-3">
              <label class="form-label mb-1" style="color: #475569; font-size: 14px;">Nueva Fecha</label>
              <div class="input-group">
                <input 
                  type="date" 
                  class="form-control emit-fecha custom-input shadow-none" 
                  name="date" 
                  id="date" 
                  v-model="data.date"
                  :min="getDateNow()"
                  @change="listarhorario()"
                >
              </div>
            </div>
               
            <div class="mb-3">
              <label class="form-label mb-1" style="color: #475569; font-size: 14px;">Nueva Hora</label>
              <div class="d-flex flex-wrap gap-2">
                <button 
                  type="button" 
                  class="schedule-chip"
                  :class="{'active-chip': dataCit.schedule_id === hora.id}"
                  v-for="hora in horarios" :key="hora.id"
                  @click="dataCit.schedule_id = hora.id"
                >
                  {{ horaLatam1(hora.check_time) }}
                </button>
                <div v-if="horarios.length === 0" class="text-muted small w-100">No hay horarios disponibles para esta fecha</div>
              </div>
              
              <select class="d-none" id="sltProfesionalHorarioID" v-model="dataCit.schedule_id">
                <option value="" disabled selected>Selecciona un horario</option>
                <option v-for="hora in horarios" :key="hora.id" :value="hora.id">
                  {{ hora.id }}
                </option>
              </select>
            </div>

            <div class="mb-4">
              <label class="form-label mb-1" style="color: #475569; font-size: 14px;">Motivo <span class="text-danger">*</span></label>
              <select class="form-select custom-input text-secondary shadow-none" v-model="data.reschedule">
                <option value="" disabled>Seleccionar motivo...</option>
                <option value="A petición del paciente">A petición del paciente</option>
                <option value="Inconveniente del profesional">Inconveniente del profesional</option>
                <option value="Cruce de horarios">Cruce de horarios</option>
                <option value="Fuerza mayor">Fuerza mayor</option>
                <option value="Otro">Otro</option>
              </select>
              <textarea v-if="data.reschedule === 'Otro'" class="form-control custom-input mt-2 shadow-none" v-model="motivo_otro" placeholder="Especifique el motivo..." rows="2"></textarea>
            </div>

            <div class="mb-4 d-flex align-items-center">
              <input class="form-check-input mt-0 me-2 shadow-none custom-checkbox" type="checkbox" id="enviarMensaje" v-model="enviar_whatsapp">
              <label class="form-check-label d-flex align-items-center" for="enviarMensaje" style="color: #475569; font-size: 14px; cursor: pointer;">
                <i class="fa-brands fa-whatsapp text-success me-1" style="font-size: 18px;"></i> Enviar mensaje al paciente
              </label>
            </div>

            <div class="d-flex justify-content-end gap-2">
              <button type="button" class="btn custom-btn-cancel" data-bs-dismiss="modal" id="cerrModal">Cancelar</button>
              <button type="submit" class="btn btn-primary custom-btn-submit d-flex align-items-center" @click="update($event)">
                <i class="fa-regular fa-circle-check me-2"></i> Reprogramar
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
  name: "modal-reprogramacion",

  data() {
    return{
      data: null,
      professionals: {},
      horarios: [],
      horariosAll: [],
      hoursProfessional: [],
      schedulesInvalid: [],
      caso: 'reprogramar',
      enviar_whatsapp: true,
      motivo_otro: ''
    }
  },
  props:{
    dataCit:Object, idUsuario:null, idModal: { type: String, default: 'reprogModal' }
  },  

  methods: {
    async getProfessional () {
      await this.axios.get(`/api/professional`)
      .then(res => {
        this.professionals = res.data
				this.professionals.sort()
      })
      .catch(err => {
        console.error(err)

      })
    },
    
    async update ($event) {			
      $event.preventDefault();
      if(this.caso=='reprogramar') this.reprogramar()
      else if(this.caso=='vacio') this.mandarVacio()
      else this.irALimbo()
    },
    irALimbo(){
      if( this.data.reschedule =='' ){
				alertify.notify('Debe haber un motivo de reprogramación', 'danger', 10)
        return;
      }

      this.axios.post('/api/limbos',{
        appointment_id: this.dataCit.id,
        user_id: this.idUsuario,
        motivo: this.data.reschedule
      }).then(res => { //console.log(res.data);
					this.closeModal()
					this.$emit('ocultarCita')
					this.$swal({icon:'sucess', title: 'Cita reprogramada con éxito'})
					//this.$parent.searchHistoria()
				})
    },

    async reprogramar(){
      let scheduleId = this.dataCit.schedule_id;
      if ( !scheduleId ) 
				alertify.notify('El horario no puede estar vacío', 'danger', 10)
			else if( this.data.reschedule =='' )
				alertify.notify('Debe haber un motivo de reprogramación', 'danger', 10)
      else{
        let motivoFinal = this.data.reschedule === 'Otro' ? this.motivo_otro : this.data.reschedule;
        let payload = { ...this.data, user_id: this.idUsuario, reschedule: motivoFinal, enviar_whatsapp: this.enviar_whatsapp };
        
				await this.axios.put(`/api/reprogramado/${this.dataCit.id}`, payload)
				.then(res => { console.log(res.data);
					this.closeModal()
					this.$emit('ocultarCita')
					this.$swal({icon:'success', title: 'Cita reprogramada con éxito'})
					//this.$parent.searchHistoria()
				})
				.catch(err => {
					console.error(err)
				})
			}
    },
    async mandarVacio(){
      const selectHorario = this.$el.querySelector('#sltProfesionalHorarioID');
      if ( !selectHorario || selectHorario.value=='' ) 
				alertify.notify('El horario no puede estar vacío', 'danger', 10)
      else{
				this.data.user_id = this.idUsuario;
				await this.axios.put(`/api/mandarVacio/${this.dataCit.id}`, this.data)
				.then(res => { console.log(res.data);
					this.closeModal()
					this.$emit('ocultarCita')
					this.$swal({icon:'sucess', title: 'Cita cambiada con éxito'})
					//this.$parent.searchHistoria()
				})
				.catch(err => {
					console.error(err)
				})
			}
    },

    async listarhorario () {
      if (!this.data || !this.data.professional_id) return;
      let id = this.data.professional_id
      
      await this.axios.get(`/api/horario/${id}`)
      .then(res => { 
        this.horarios = res.data.schedulesInvalid;       
        this.horariosAll = res.data.schedules;       
        this.hoursProfessional = this.horarios;

        this.emitSchedule(this.data.date);

        this.schedulesInvalid = []
        this.hoursProfessional.forEach(el => {
          this.schedulesInvalid.push(el.schedule_id)
        });
      }) 
      .catch(err => {
        console.error(err)
      })
    },

    emitSchedule (info = this.data ? this.data.date : '') {
      this.horarios = []

      let arraySchedulesInvalid = []
      this.hoursProfessional.forEach(el => {
        if (!arraySchedulesInvalid.includes(el.schedule_id)) {
          arraySchedulesInvalid.push(el.schedule_id)
        }
      })

      let dayIndex = parseInt(moment(info).format('d')) - 1;
      if (dayIndex === -1) dayIndex = 6;
      let targetDay = this.dayWeek(dayIndex);

      this.horariosAll.forEach(el => {
        if (el.active !== 0 && el.day && targetDay && el.day.toLowerCase() === targetDay.toLowerCase()) {
          if (el.date && el.date !== info) {
            return;
          }
          if (arraySchedulesInvalid.includes(el.id)) {
            // Hay cita
            //console.log("Hya citas")

            //console.log(el.appointments.forEach(el => console.log(el.date, info, el.status)))
            if (el.appointments.find(el => el.date === info && el.status != 3) ? true : false) {
              
            } else {
              this.horarios.push(el)
            }
          } else {
            //console.log("No Hya citas")
            // No hay cita
            this.horarios.push(el)
          }
        }
      })
    },
    
    closeModal() {
      const closeBtn = this.$el.querySelector('[data-bs-dismiss="modal"]');
      if (closeBtn) {
        closeBtn.click();
      } else {
        document.getElementById('cerrModal').click();
      }
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
		horaLatam2(horita){ return moment(horita, 'HH:mm:ss').format('hh:mm a') },
  },
 
  
  computed : {
    repromingSchedule () {
      this.data = this.dataCit
      return this.data.reschedule = ''
    },
    filteredProfessionals() {
      if (!this.dataCit || !this.dataCit.professional || !this.professionals) return [];
      const profession = this.dataCit.professional.profession;
      return Object.values(this.professionals).filter(p => p.profession === profession);
    }
  },
	watch:{
		data(){
			this.listarhorario();
		}
	},

  created () {
    this.repromingSchedule
    this.getProfessional()
  },  

  mounted () {
    this.listarhorario()
  },
  
  updated () {
    this.repromingSchedule
  }
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
.custom-checkbox {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
  cursor: pointer;
}
.custom-checkbox:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
}
</style>
