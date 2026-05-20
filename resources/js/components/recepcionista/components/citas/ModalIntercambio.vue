<template>
	<div class="modal fade" id="modalIntercambio" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content p-2 shadow" style="border-radius: 16px; border: none;">
				<div class="modal-header border-0 pb-0">
					<div class="d-flex align-items-center">
						<i class="fas fa-retweet text-primary fs-5 me-2"></i> 
						<h5 class="modal-title fw-bold" id="exampleModalLabel" style="color: #1e293b;">Intercambiar Horario</h5>
					</div>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body border-0 pt-3">
					
					<!-- Cita Original a intercambiar -->
					<div class="p-3 mb-3 rounded-3" style="background-color: #f8fafc; border: 1px solid #f1f5f9;">
						<div class="small text-muted mb-1" style="font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Cita de Origen:</div>
						<h6 class="mb-1 fw-bold text-capitalize" style="color: #334155; font-size: 15px;">
							{{ primero.patient ? primero.patient.name + ' ' + primero.patient.nombres : 'Paciente' }}
						</h6>
						<div style="color: #64748b; font-size: 13px;">
							<i class="fa-regular fa-calendar me-1"></i> {{ primero.date || '...' }} · 
							<i class="fa-regular fa-clock me-1"></i> {{ primero.schedule ? horaLatam1(primero.schedule.check_time) : '...' }} - {{ primero.schedule ? horaLatam1(primero.schedule.departure_date) : '...' }} · 
							<i class="fa-solid fa-user-md me-1"></i> {{ primero.professional ? (primero.professional.name || primero.professional.nombre) : 'Profesional' }}
						</div>
					</div>

					<div class="mb-3">
						<label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">Seleccione paciente para el intercambio <span class="text-danger">*</span></label>
						<select class="form-select custom-input text-capitalize shadow-none" id="sltIntercambio" v-model="idCambio">
							<option value="-1" disabled selected>Seleccionar paciente...</option>
							<option class="text-capitalize" v-for="(posible, index) in posibles" :key="index" :value="index">
								{{ posible.patient ? posible.patient.name.toLowerCase() + ' ' + (posible.patient.nombres || '').toLowerCase() : 'Paciente' }} 
								({{ posible.schedule ? horaLatam1(posible.schedule.check_time) : '' }})
							</option>
						</select>
					</div>

					<!-- Advertencia de falta de citas para intercambiar -->
					<div v-if="posibles.length === 0" class="alert alert-warning py-2 px-3 small border-0 rounded-3 mb-3 d-flex align-items-center">
						<i class="fa-solid fa-triangle-exclamation me-2 fs-6"></i>
						<span>No hay otras citas programadas con este profesional en este día para realizar un intercambio.</span>
					</div>

					<!-- Previsualización del intercambio elegido -->
					<div v-if="idCambio !== -1 && posibles[idCambio]" class="p-3 mb-4 rounded-3" style="background-color: #eff6ff; border: 1px solid #dbeafe;">
						<div class="small text-primary fw-bold mb-1" style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Cita de Destino (Intercambio):</div>
						<h6 class="mb-1 fw-bold text-capitalize" style="color: #1e3a8a; font-size: 15px;">
							{{ posibles[idCambio].patient ? posibles[idCambio].patient.name + ' ' + posibles[idCambio].patient.nombres : 'Paciente' }}
						</h6>
						<div style="color: #1e40af; font-size: 13px;">
							<i class="fa-regular fa-calendar me-1"></i> {{ posibles[idCambio].date || '...' }} · 
							<i class="fa-regular fa-clock me-1"></i> {{ posibles[idCambio].schedule ? horaLatam1(posibles[idCambio].schedule.check_time) : '...' }} - {{ posibles[idCambio].schedule ? horaLatam1(posibles[idCambio].schedule.departure_date) : '...' }} · 
							<i class="fa-solid fa-user-md me-1"></i> {{ posibles[idCambio].professional ? (posibles[idCambio].professional.name || posibles[idCambio].professional.nombre) : 'Profesional' }}
						</div>
					</div>

					<div class="d-flex justify-content-end gap-2 mt-4">
						<button type="button" class="btn custom-btn-cancel" data-bs-dismiss="modal">Cancelar</button>
						<button type="button" class="btn btn-primary custom-btn-submit d-flex align-items-center" :disabled="idCambio === -1" data-bs-dismiss="modal" @click="intercambiar()">
							<i class="fas fa-retweet me-2"></i> Confirmar Intercambio
						</button>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment'

export default {
	name: 'ModalIntercambio',
	props: ['posibles', 'primero'],
	data() {
		return {
			idCambio: -1
		}
	},
	methods: {
		intercambiar() {
			if (this.idCambio === -1) return;
			let elegido = this.posibles[this.idCambio]
			this.axios.post('/api/intercambiar', { 
				idElegido: elegido.id, 
				horaElegido: elegido.schedule_id, 
				idPrimero: this.primero.id, 
				horaPrimero: this.primero.schedule_id 
			})
			.then(response => {
				this.$emit('actualizar')
			})
		},
		horaLatam1(horita) { 
			return moment(horita, 'HH:mm:ss').format('hh:mm') 
		},
		horaLatam2(horita) { 
			return moment(horita, 'HH:mm:ss').format('hh:mm a') 
		}
	},
	watch: {
		posibles() {
			this.idCambio = -1
		}
	}
}
</script>

<style scoped>
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
.custom-btn-submit:hover:not(:disabled) {
	background-color: #5c91f9;
}
.custom-btn-submit:disabled {
	background-color: #cbd5e1;
	cursor: not-allowed;
	color: #94a3b8;
}
</style>