<template>
	<div class="modal fade" :id="idModal" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content border-0 shadow-lg" style="border-radius: 20px; overflow: hidden;">
        <div class="modal-header border-0 pb-0 pt-4 px-4 d-flex align-items-start justify-content-between">
          <div class="d-flex align-items-center">
            <div class="icon-header-container mr-3">
              <i class="fas fa-stopwatch text-info h4 mb-0"></i>
            </div>
            <div>
              <h5 class="modal-title font-weight-bold text-dark mb-1">Tiempos de Espera</h5>
              <div class="d-flex gap-2 mt-1">
                <span class="badge-status status-badge-info" v-if="cita && cita.id">
                  <i class="fas fa-calendar-check mr-1"></i> Asignación de Horarios
                </span>
              </div>
            </div>
          </div>
          <button type="button" class="btn-close-custom" data-bs-dismiss="modal" aria-label="Close">
            <i class="fas fa-times"></i>
          </button>
        </div>

				<div class="modal-body px-4 pt-4">
          <div v-if="cita && cita.id">
					<p class="text-muted small mb-4">Seleccione una opción para registrar la hora actual en el sistema.</p>
          
          <div class="time-control-container p-3 mb-4">
            <div class="row">
              <div class="col-4 border-right">
                <div class="text-center px-2">
                  <div class="time-icon mb-2"><i class="fa-solid fa-location-dot text-primary h5"></i></div>
                  <label class="section-label d-block mb-1">Hora de llegada</label>
                  
                  <div v-if="cita.entrance?.length>0">
                    <div class="time-value text-dark mb-1 font-weight-bold">{{ horaLatam(cita.entrance) }}</div>
                    <span class="badge status-badge-success badge-status"><i class="fas fa-check"></i> Registrado</span>
                  </div>
                  <button v-else class="btn btn-action btn-outline-primary btn-sm w-100" @click="registrar('llegada')" data-bs-dismiss="modal">
                    <i class="fa-solid fa-clock mr-1"></i> Asignar
                  </button>
                  
                  <div class="mt-3">
                    <small class="text-muted d-block" style="font-size: 0.7rem; line-height: 1.1;">
                      Faltan <span class="font-weight-bold text-capitalize text-dark">{{calcularFaltante}}</span>
                    </small>
                  </div>
                </div>
              </div>
              
              <div class="col-4 border-right">
                <div class="text-center px-2">
                  <div class="time-icon mb-2"><i class="fa-solid fa-stethoscope text-info h5"></i></div>
                  <label class="section-label d-block mb-1">Hora de atención</label>
                  
                  <div v-if="cita.attention?.length>0">
                    <div class="time-value text-dark mb-1 font-weight-bold">{{ horaLatam(cita.attention) }}</div>
                    <span class="badge status-badge-success badge-status"><i class="fas fa-check"></i> Registrado</span>
                  </div>
                  <button v-else class="btn btn-action btn-outline-info btn-sm w-100" @click="registrar('atención')" data-bs-dismiss="modal">
                    <i class="fa-solid fa-clock mr-1"></i> Asignar
                  </button>
                </div>
              </div>

              <div class="col-4">
                <div class="text-center px-2">
                  <div class="time-icon mb-2"><i class="fa-solid fa-flag-checkered text-success h5"></i></div>
                  <label class="section-label d-block mb-1">Hora de fin</label>
                  
                  <div v-if="cita.hora_fin?.length>0">
                    <div class="time-value text-dark mb-1 font-weight-bold">{{ horaLatam(cita.hora_fin) }}</div>
                    <span class="badge status-badge-success badge-status"><i class="fas fa-check"></i> Registrado</span>
                  </div>
                  <div v-else>
                    <input type="time" v-model="departureTime" class="form-control form-control-sm mb-2 text-center font-weight-bold" />
                    <button class="btn btn-action btn-outline-success btn-sm w-100" @click="registrar('fin')" data-bs-dismiss="modal" :disabled="!departureTime">
                      <i class="fa-solid fa-check mr-1"></i> Finalizar
                    </button>
                  </div>
                </div>
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
import alertify from 'alertifyjs';
import moment from 'moment'
export default{
	name: 'modalTiemposEspera',
	props:{
		cita: Object,
		idModal: { type: String, default: 'modalTiemposEspera' }
	},
	
	data(){ return{
		entrance: null, attention: null, departureTime: null
	}},
	methods:{
		async registrar(tipo){
			let payload = {
				idCita: this.cita.id,
				entrance: this.cita.entrance,
				attention: this.cita.attention
			};

			switch (tipo) {
				case 'llegada': 
					this.cita.entrance = moment().format('HH:mm:ss'); 
					payload.entrance = this.cita.entrance;
					break;
				case 'atención': 
					this.cita.attention = moment().format('HH:mm:ss'); 
					payload.attention = this.cita.attention;
					if (!this.cita.hora_fin && this.cita.precio && this.cita.precio.duracion) {
						this.departureTime = moment(this.cita.attention, 'HH:mm:ss').add(this.cita.precio.duracion, 'minutes').format('HH:mm');
					}
					break;
				case 'fin':
					payload.departure = this.departureTime;
					break;
				default: break;
			}
			await this.axios.post('/api/registrarHora', payload)
				.then(response => {
					if(response.data?.mensaje == 'Ok'){
						if (tipo === 'fin') {
							this.cita.hora_fin = this.departureTime;
							this.cita.status = 5; // Atendido
						}
						this.$emit('actualizar', 'sksks')
						alertify.notify('<i class="fa-regular fa-calendar-check"></i> Datos actualizados' , 'success', 5);
					}
				})
		},
		fechaLatam(fecha){
			return moment(fecha).format('DD/MM/YYYY');
		},
		horaLatam(hora){
			return moment(hora, 'HH:mm:ss').format('hh:mm a');
		},
	},
	computed:{
			calcularFaltante(){
					if(!this.cita || !this.cita.schedule || !this.cita.schedule.check_time){
							return '---'
					}
					moment.locale('es')
					let horaCita = moment(this.cita.date + ' ' + this.cita.schedule.check_time)
					return horaCita.fromNow();
			},
	},
	watch: {
		cita: {
			handler(newCita) {
				if (newCita && newCita.attention && !newCita.hora_fin && newCita.precio && newCita.precio.duracion) {
					this.departureTime = moment(newCita.attention, 'HH:mm:ss').add(newCita.precio.duracion, 'minutes').format('HH:mm');
				} else if (newCita && newCita.hora_fin) {
					this.departureTime = moment(newCita.hora_fin, 'HH:mm:ss').format('HH:mm');
				} else {
					this.departureTime = null;
				}
			},
			immediate: true,
			deep: true
		}
	}
}
</script>

<style scoped>
/* Main Layout */
.modal-content {
  background: #ffffff;
}

/* Header */
.icon-header-container {
  background: #e7f5ff;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}
.btn-close-custom {
  background: #f8f9fa;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #adb5bd;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  cursor: pointer;
}
.btn-close-custom:hover { background: #e9ecef; color: #495057; }

/* Badges */
.badge-status {
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
}
.status-badge-info { background: #e7f5ff; color: #1971c2; border: 1px solid #d0ebff; }
.status-badge-success { background: #e7fcf3; color: #0ca678; border: 1px solid #c3fae8; }

/* Sections */
.section-label {
  font-size: 0.7rem;
  font-weight: 800;
  color: #adb5bd;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.time-control-container {
  background: #f8f9fc;
  border-radius: 16px;
  border: 1px solid #f1f3f9;
}
.time-icon {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

/* Action Buttons */
.btn-action {
  border-radius: 12px;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-action:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.05); }
.border-right { border-right: 1px solid #e9ecef!important; }
.gap-2 { gap: 0.5rem; }
.mr-1 { margin-right: 0.25rem; }
.mr-3 { margin-right: 0.75rem; }
</style>