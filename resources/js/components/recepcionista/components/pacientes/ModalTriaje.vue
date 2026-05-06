<template>
<!-- Modal -->
<div class="modal fade" id="modalTriaje" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content border-0 shadow">
      <div class="modal-header border-bottom-0 pb-0 pt-4 px-4">
        <h5 class="modal-title text-primary fw-bold d-flex align-items-center gap-2" id="exampleModalLabel">
          <i class="fas fa-clipboard-check text-primary fs-4"></i> Nuevo Triaje
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-light-custom pt-4 px-4">
				
        <h6 class="section-title text-primary mb-3"><i class="fas fa-user text-secondary me-2"></i> Datos de Afiliación</h6>
        
        <div class="row g-3 mb-4">
					<div class="col-md-3">
						<label for="dni" class="form-label">DNI</label>
						<input type="text" class="form-control bg-white" name="dni" id="dni" v-model="dataPatient.dni" placeholder="Número de DNI" readonly>
					</div>
					<div class="col-md-9">
						<label for="apellidos_nombres" class="form-label">Apellidos y Nombres</label>
						<input type="text" class="form-control bg-white" name="apellidos" id="apellidos_nombres" v-model="fullName" placeholder="Nombre completo del paciente">
					</div>
					<div class="col-md-3">
						<label for="phone" class="form-label">Celular</label>
						<input type="text" class="form-control bg-white" name="phone" id="phone" v-model="dataPatient.phone" placeholder="Ej. 987654321">
					</div>
					<div class="col-md-3">
						<label for="sexo" class="form-label">Género</label>
						<select class="form-select bg-white" id="sexo" v-model="dataPatient.gender">
							<option value="">Seleccione...</option>
							<option value="0">Femenino</option>
							<option value="1">Masculino</option>
							<option value="3">LGTB+</option>
						</select>
					</div>
					<div class="col-md-3">
						<label for="birth_date" class="form-label">Fecha Nacimiento</label>
						<input type="date" class="form-control bg-white" name="birth_date" id="birth_date" v-model="dataPatient.birth_date">
					</div>
					<div class="col-md-3">
						<label for="ocupacion" class="form-label">Ocupación</label>
						<input type="text" class="form-control bg-white" name="ocupacion" id="ocupacion" v-model="dataPatient.occupation" placeholder="Ej. Estudiante">
					</div>
				</div>

				<h6 class="section-title text-primary mb-3"><i class="fas fa-notes-medical text-secondary me-2"></i> Signos Vitales y Medidas</h6>
				
				<div class="row g-3 mb-4">
					<div class="col-md-3">
						<label for="pa" class="form-label">Presión Arterial</label>
						<input type="text" class="form-control bg-white" name="pa" id="pa" v-model="consulta.pa" placeholder="120/80" autocomplete="off">
					</div>
					<div class="col-md-3">
						<label for="fc" class="form-label">Frec. Cardíaca</label>
						<input type="text" class="form-control bg-white" name="fc" id="fc" v-model="consulta.fc" placeholder="72 bpm" autocomplete="off">
					</div>
					<div class="col-md-3">
						<label for="t" class="form-label">Temperatura</label>
						<input type="text" class="form-control bg-white" name="t" id="t" v-model="consulta.t" placeholder="36.5 °C" autocomplete="off">
					</div>
					<div class="col-md-3">
						<label for="peso" class="form-label">Peso</label>
						<input type="text" class="form-control bg-white" name="peso" id="peso" v-model="consulta.peso" placeholder="kg" autocomplete="off">
					</div>
					<div class="col-md-4">
						<label for="fr" class="form-label">Frec. Respiratoria</label>
						<input type="text" class="form-control bg-white" name="fr" id="fr" v-model="consulta.fr" placeholder="16 rpm" autocomplete="off">
					</div>
					<div class="col-md-4">
						<label for="saturacion" class="form-label">Saturación (SpO2)</label>
						<input type="number" class="form-control bg-white" name="saturacion" id="saturacion" v-model="consulta.saturacion" placeholder="%" autocomplete="off">
					</div>
					<div class="col-md-4">
						<label for="talla" class="form-label">Talla</label>
						<input type="text" class="form-control bg-white" name="talla" id="talla" v-model="consulta.talla" placeholder="cm/m" autocomplete="off">
					</div>
				</div>

				<h6 class="section-title text-primary mb-3"><i class="fas fa-stethoscope text-secondary me-2"></i> Evaluación Clínica</h6>

				<div class="row g-3 mb-4">
					<div class="col-md-12">
						<label for="Motivo" class="form-label">Motivo de la consulta</label>
						<textarea class="form-control bg-white" id="Motivo" name="Motivo" rows="2" v-model="consulta.motivo" placeholder="Describa el motivo de consulta"></textarea>
					</div>
					<div class="col-md-12">
						<label for="sintomatologia" class="form-label">Sintomatología</label>
						<textarea class="form-control bg-white" id="sintomatologia" name="sintomatologia" rows="2" v-model="consulta.sintomatologia" placeholder="Describa los síntomas que presenta el paciente"></textarea>
					</div>
					<div class="col-md-12">
						<label for="antecedentes" class="form-label">Antecedentes</label>
						<textarea class="form-control bg-white" id="antecedentes" name="antecedentes" rows="2" v-model="consulta.antecedentes" placeholder="Antecedentes médicos o psicológicos relevantes"></textarea>
					</div>
					<div class="col-md-12">
						<label for="pruebas" class="form-label">Tipos de pruebas aplicadas</label>
						<textarea class="form-control bg-white" id="pruebas" name="pruebas" rows="2" v-model="consulta.pruebas" placeholder="Mencione si se aplicó alguna prueba o instrumento"></textarea>
					</div>
				</div>

				<h6 class="section-title text-primary mb-3"><i class="fas fa-clipboard-list text-secondary me-2"></i> Detalles de Atención</h6>

				<div class="row g-3">
					<div class="col-md-4">
						<label for="fecha" class="form-label">Fecha de atención</label>
						<input type="datetime-local" class="form-control bg-white" name="fecha" id="fecha" v-model="consulta.fecha">
					</div>
					<div class="col-md-8">
						<label for="responsable" class="form-label">Personal responsable</label>
						<input type="text" class="form-control bg-white" name="responsable" id="responsable" v-model="consulta.responsable" placeholder="Nombres del Personal Responsable" autocomplete="off">
					</div>
					<div class="col-md-4">
						<label for="especialista" class="form-label">Especialista Asignado</label>
						<select class="form-select bg-white" id="especialista" v-model="consulta.especialista">
							<option v-for="profesional in profesionales" :value="profesional.id" :key="profesional.id">{{profesional.name}}</option>
						</select>
					</div>
					<div class="col-md-4">
						<label for="prioridad" class="form-label">Prioridad</label>
						<select class="form-select bg-white" id="prioridad" v-model="consulta.prioridad">
							<option value="1">I - Urgencia inmediata (Psiq)</option>
							<option value="2">II - Urgencia moderada (Psiq)</option>
							<option value="3">III - Riesgo alto (Psic)</option>
							<option value="4">IV - Riesgo medio (Psic)</option>
							<option value="5">V - Riesgo bajo (Psic)</option>
						</select>
					</div>
					<div class="col-md-4">
						<label for="referencia" class="form-label">Referencia</label>
						<select class="form-select bg-white" id="referencia" v-model="consulta.referencia">
							<option value="1">PSICOLOGÍA</option>
							<option value="2">PSIQUIATRÍA</option>
							<option value="3">AMBOS</option>
						</select>
					</div>
				</div>

      </div>
			
      <div class="modal-footer border-top-0 pt-0 bg-light-custom pb-4 pe-4">
				<button type="button" class="btn btn-light custom-btn-cancel" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary custom-btn-save" data-bs-dismiss="modal" @click="insertarTriaje()">
					<i class="fas fa-save me-1"></i> Registrar Triaje
				</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import moment from "moment"
export default {
	name: 'modalTriaje',
	props: {
		dataPatient: [], profesionales:[]
	},
	data(){
		return {
			datos:'', consulta:{
				fecha: moment().format('YYYY-MM-DD HH:mm'),
				patient_id: -1,
				motivo:'', sintomatologia:'',antecedentes:'', especialista:2, prioridad:1,
				responsable: '', fv: '', fc: '', fr: '', pa: '', t: '', referencia:1, pruebas:'', peso:'', talla:'', saturacion:''
			}
		}
	},
	methods:{
		async insertarTriaje(){
			this.consulta.patient_id = this.dataPatient.id
			await axios.post(`/api/insertarTriaje/${this.dataPatient.id}`,[this.dataPatient, this.consulta] )
			.then(res => {
				console.log(res.data)
        if(res.data['mensaje']>0){
					this.$swal.fire({title: 'Registrado el triaje ',
						text:'¿Deseas abrir el PDF de este registro?',
						showCancelButton: true,
						confirmButtonText: 'Si, ver el PDF!',
						cancelButtonText: 'No, salir'
					}).then((result) => {
						if (result.isConfirmed) {
							//abrir en una nueva ventana el PDF.
							window.open("/api/triajePDF/"+res.data['mensaje']+"?token="+localStorage.getItem('token'), "_blank");
						}
						this.$emit('actualizar')
					})
				}else{
					this.$swal.fire({title: 'Hubo un error, reintenta luego', icon:'error'})
				}
      })
      .catch(err => {
        console.error(err)        
      })
		},
		limpiarModal(){
			this.datos=''
			this.consulta = {
				fecha: moment().format('YYYY-MM-DD HH:mm'),
				patient_id: -1,
				motivo:'', sintomatologia:'',antecedentes:'', especialista:2, prioridad:1,
				responsable: '', fv: '', fc: '', fr: '', pa: '', t: '', referencia:1, pruebas:'', peso:'', talla:''
			}
		}
	},
	watch:{
		dataPatient(){
			this.limpiarModal();
			//this.datos = this.dataPatient;
		}
	},
	computed: {		
		fullName: {
        get() {
					//console.log('asignar',JSON.stringify(this.dataPatient))
          return `${this.dataPatient.name} ${this.dataPatient.nombres}`;
        },
        set(value) {
            const parts = value.split(" ");
            this.dataPatient.name = parts.slice(0, -1).join(" "); // Apellidos
            this.dataPatient.nombres = parts.slice(-1).join(" "); // Nombres
        }
    },
  },
	updated() {
    //this.updateValues;
  },
  created () {
    //this.updateValues;
  },
	
}
</script>
<style scoped>
.modal-content {
	border-radius: 12px;
	overflow: hidden;
}
.bg-light-custom {
	background-color: #f8fafc;
}
.section-title {
	font-size: 0.95rem;
	font-weight: 600;
	margin-top: 1rem;
	border-bottom: 2px solid #e2e8f0;
	padding-bottom: 0.5rem;
	display: flex;
	align-items: center;
}
.form-label {
	font-size: 0.85rem;
	font-weight: 500;
	color: #475569;
	margin-bottom: 0.3rem;
}
.form-control, .form-select {
	border: 1px solid #cbd5e1;
	border-radius: 6px;
	padding: 0.5rem 0.75rem;
	font-size: 0.9rem;
	color: #334155;
	box-shadow: none;
	transition: all 0.2s;
}
.form-control:focus, .form-select:focus {
	border-color: #3b82f6;
	box-shadow: 0 0 0 0.2rem rgba(59, 130, 246, 0.15);
}
.form-control::placeholder {
	color: #94a3b8;
}
.form-control:read-only {
	background-color: #f1f5f9 !important;
	color: #64748b;
}
.custom-btn-cancel {
	background-color: #ffffff;
	border: 1px solid #cbd5e1;
	color: #475569;
	font-weight: 500;
	padding: 0.5rem 1.25rem;
	border-radius: 6px;
	transition: all 0.2s;
}
.custom-btn-cancel:hover {
	background-color: #f1f5f9;
}
.custom-btn-save {
	background-color: #0d6efd;
	border-color: #0d6efd;
	color: #ffffff;
	font-weight: 500;
	padding: 0.5rem 1.25rem;
	border-radius: 6px;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	transition: all 0.2s;
}
.custom-btn-save:hover {
	background-color: #0b5ed7;
	border-color: #0a58ca;
}
</style>