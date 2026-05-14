<template>
	<div class="modal fade" id="modalEdicionPaciente" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
			<div class="modal-content border-0 shadow-lg" style="border-radius: 20px; overflow: hidden;">
				<!-- Header -->
				<div class="modal-header border-0 pb-0 pt-4 px-4 d-flex align-items-start justify-content-between">
					<div class="d-flex align-items-center">
						<div class="icon-header-container mr-3">
							<i class="fas fa-user-edit text-primary h4 mb-0"></i>
						</div>
						<div>
							<h5 class="modal-title font-weight-bold text-dark mb-1">Editar Datos del Paciente</h5>
							<p class="small text-muted mb-0">Actualiza la información personal y de contacto</p>
						</div>
					</div>
					<button type="button" class="btn-close-custom" data-bs-dismiss="modal" aria-label="Close" id="btnCerrarEdPac">
						<i class="fas fa-times"></i>
					</button>
				</div>

				<div class="modal-body px-4 pt-4">
					<form @submit.prevent="updatePatient">
						
						<!-- SECTION: DATOS PERSONALES -->
						<div class="section-container mb-4">
							<div class="section-label mb-3">
								<i class="fas fa-user-circle mr-2 text-primary"></i> DATOS PERSONALES
							</div>
							<div class="row g-3">
								<div class="col-md-6">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">DNI / DOCUMENTO</label>
										<input type="text" class="form-control" v-model="dataPatient.dni" placeholder="DNI del paciente">
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">TELÉFONO</label>
										<input type="text" class="form-control" v-model="dataPatient.phone" placeholder="Celular">
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">APELLIDOS</label>
										<input type="text" class="form-control text-uppercase" v-model="dataPatient.name" placeholder="Apellidos">
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">NOMBRES</label>
										<input type="text" class="form-control text-uppercase" v-model="dataPatient.nombres" placeholder="Nombres">
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">FECHA DE NACIMIENTO</label>
										<input type="date" class="form-control" v-model="dataPatient.birth_date">
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">GÉNERO</label>
										<select class="form-select" v-model="dataPatient.gender">
											<option :value="2">Sin definir</option>
											<option :value="0">Femenino</option>
											<option :value="1">Masculino</option>
											<option :value="3">LGTB+</option>
										</select>
									</div>
								</div>
							</div>
						</div>

						<!-- SECTION: UBICACIÓN Y CONTACTO -->
						<div class="section-container mb-4">
							<div class="section-label mb-3">
								<i class="fas fa-map-marker-alt mr-2 text-primary"></i> UBICACIÓN Y CONTACTO
							</div>
							<div class="row g-3">
								<div class="col-md-12">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">DIRECCIÓN</label>
										<input type="text" class="form-control" v-model="dataPatient.address.address" placeholder="Dirección completa">
									</div>
								</div>
								<div class="col-md-12">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">CORREO ELECTRÓNICO</label>
										<input type="email" class="form-control" v-model="dataPatient.email" placeholder="email@ejemplo.com">
									</div>
								</div>
								<div class="col-md-4">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">DEPARTAMENTO</label>
										<select v-model="dataPatient.address.department" class="form-select" @change="moverProvincias(true)">
											<option v-for="departamento in ubigeo.departamentos" :key="departamento.idDepa" :value="departamento.idDepa">{{ departamento.departamento }}</option>
										</select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">PROVINCIA</label>
										<select v-model="dataPatient.address.province" class="form-select" @change="moverDistritos()">
											<option v-for="provincia in provincias" :key="provincia.idProv" :value="provincia.idProv">{{ provincia.provincia }}</option>
										</select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">DISTRITO</label>
										<select v-model="dataPatient.address.district" class="form-select">
											<option v-for="distrito in distritos" :key="distrito.idDist" :value="distrito.idDist">{{ distrito.distrito }}</option>
										</select>
									</div>
								</div>
							</div>
						</div>

						<!-- SECTION: OTROS DATOS -->
						<div class="section-container mb-4">
							<div class="section-label mb-3">
								<i class="fas fa-info-circle mr-2 text-primary"></i> INFORMACIÓN ADICIONAL
							</div>
							<div class="row g-3">
								<div class="col-md-4">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">OCUPACIÓN</label>
										<input type="text" class="form-control" v-model="dataPatient.occupation" placeholder="Ocupación">
									</div>
								</div>
								<div class="col-md-4">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">ESTADO CIVIL</label>
										<select class="form-select" v-model="dataPatient.marital_status">
											<option value="1">Soltero</option>
											<option value="2">Casado</option>
											<option value="3">Viudo</option>
											<option value="4">Divorciado</option>
											<option value="5">Conviviente</option>
										</select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">GRADO INSTRUCCIÓN</label>
										<select class="form-select" v-model="dataPatient.instruction_degree">
											<option value="1">Inicial</option>
											<option value="2">Primaria</option>
											<option value="3">Secundaria</option>
											<option value="4">Superior</option>
											<option value="5">Técnico</option>
											<option value="6">Sin instrucción</option>
										</select>
									</div>
								</div>
							</div>
						</div>

						<!-- SECTION: CONTACTOS DE EMERGENCIA -->
						<div class="section-container mb-4">
							<div class="section-label mb-3">
								<i class="fas fa-phone-alt mr-2 text-primary"></i> CONTACTOS DE EMERGENCIA
							</div>
							<div v-if="dataPatient.relative && dataPatient.relative.length > 0" class="row g-3 mb-3 p-3 rounded-4 bg-light border-0 mx-0">
								<div class="col-md-12">
									<label class="small font-weight-bold text-primary mb-1">PRIMER CONTACTO</label>
								</div>
								<div class="col-md-12">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">NOMBRE COMPLETO</label>
										<input type="text" class="form-control" v-model="dataPatient.relative[0].name" placeholder="Nombre">
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">TELÉFONO</label>
										<input type="text" class="form-control" v-model="dataPatient.relative[0].phone" placeholder="Celular">
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">PARENTESCO</label>
										<input type="text" class="form-control" v-model="dataPatient.relative[0].kinship" placeholder="Ej: Madre, Padre...">
									</div>
								</div>
							</div>

							<div v-if="dataPatient.relative && dataPatient.relative.length > 1" class="row g-3 p-3 rounded-4 bg-light border-0 mx-0">
								<div class="col-md-12">
									<label class="small font-weight-bold text-primary mb-1">SEGUNDO CONTACTO</label>
								</div>
								<div class="col-md-12">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">NOMBRE COMPLETO</label>
										<input type="text" class="form-control" v-model="dataPatient.relative[1].name" placeholder="Nombre">
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">TELÉFONO</label>
										<input type="text" class="form-control" v-model="dataPatient.relative[1].phone" placeholder="Celular">
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-group-modern">
										<label class="small font-weight-bold text-muted">PARENTESCO</label>
										<input type="text" class="form-control" v-model="dataPatient.relative[1].kinship" placeholder="Ej: Amigo, Tío...">
									</div>
								</div>
							</div>
						</div>

					</form>
				</div>

				<div class="modal-footer border-0 pb-4 px-4 pt-0">
					<button type="button" class="btn btn-light rounded-pill px-4 font-weight-bold" data-bs-dismiss="modal">Cancelar</button>
					<button type="button" @click="updatePatient()" class="btn btn-primary rounded-pill px-5 font-weight-bold shadow-sm">
						<i class="fas fa-save mr-2"></i> Actualizar Datos
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'ModalEditarPaciente',
  
  props: {
    dataPatient: Object
  },

  data () {
    return {
      datos: '',
			ubigeo: {departamentos:[], provincias:[], distritos:[]},
			provincias:[], distritos:[],relacion:[]
    }
  },

  methods: {
    async updatePatient() {
      await this.axios.put(`/api/patient/${this.dataPatient.id}`, this.dataPatient) 
      .then(res => {
        console.log(res)
        this.closeModal()
        this.$swal.fire('Éxito', 'Datos de paciente actualizados con éxito', 'success')
        this.$emit('actualizar')
      })
      .catch(err => {
        console.error(err)        
      })
    },

    closeModal() {
      document.getElementById('btnCerrarEdPac').click();
    },

		async listarDepartamentos(){
			if (this.ubigeo.departamentos.length > 0) {
				this.moverProvincias(false);
				this.moverDistritos();
				return;
			}
			await this.axios.get('/api/departamentos')
			.then(response => {
				this.ubigeo.departamentos = response.data['departamentos'];
				this.ubigeo.provincias = response.data['provincias'];
				this.ubigeo.distritos = response.data['distritos'];

				this.provincias = this.ubigeo.provincias.filter(provincia=> provincia.idDepa == 12)
				this.distritos = this.ubigeo.distritos.filter(distrito=> distrito.idProv == 103)
	
				this.moverProvincias(false)
				this.moverDistritos()
			})
		},

		moverProvincias(borrar){
				if (this.dataPatient.address) {
				let idDepa= this.dataPatient.address.department ;
				this.provincias = this.ubigeo.provincias.filter(provincia=> provincia.idDepa == idDepa)
				if(borrar) {
					this.dataPatient.address.province = -1;
					this.dataPatient.address.district = -1;
					this.distritos = [];
				}
			}
		},
		moverDistritos(){			
			if (this.dataPatient.address) {
				let idProv= this.dataPatient.address.province;
				this.distritos = this.ubigeo.distritos.filter(distrito=> distrito.idProv == idProv)
			}
		},
		capturaSeñal() {
      if(this.dataPatient.relative && this.dataPatient.relative.length==0){
        this.dataPatient.relative.push({ id:-1, name: '', nombres: '', phone:'' })
      }
			this.listarDepartamentos(false);
    },
  },

  watch: {
    dataPatient: {
      handler(newVal) {
        if (newVal) {
          if (!newVal.address) {
            newVal.address = { address: '', department: -1, province: -1, district: -1 };
          }
          this.datos = newVal;
          if (this.ubigeo.departamentos.length > 0) {
            this.moverProvincias(false);
            this.moverDistritos();
          } else {
            this.listarDepartamentos();
          }
        }
      },
      deep: true,
      immediate: true,
    }
  }
} 
</script>

<style scoped>
.icon-header-container {
  background: #f0f7ff;
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

.section-label {
  font-size: 0.75rem;
  font-weight: 800;
  color: #adb5bd;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}

.input-group-modern {
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.input-group-modern label {
	margin-bottom: 0;
	margin-left: 4px;
}

.input-group-modern .form-control, 
.input-group-modern .form-select {
	border-radius: 12px!important;
	border: 1px solid #e9ecef!important;
	padding: 10px 15px!important;
	background: #fcfdfe!important;
	font-size: 0.9rem!important;
	transition: all 0.2s;
}

.input-group-modern .form-control:focus, 
.input-group-modern .form-select:focus {
	border-color: #0d6efd!important;
	background: #fff!important;
	box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.05)!important;
}

.bg-light {
	background-color: #f8f9fc!important;
}

.mr-3 { margin-right: 1rem; }
.mr-2 { margin-right: 0.5rem; }
.font-weight-bold { font-weight: 700!important; }
</style>