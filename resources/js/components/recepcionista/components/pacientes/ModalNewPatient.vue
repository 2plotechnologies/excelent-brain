<template>
  <div class="modal fade" id="modalNewPatient" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content p-2 shadow" style="border-radius: 16px; border: none;">
        <div class="modal-header border-0 pb-0">
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-user-plus text-primary fs-5 me-2"></i> 
            <h5 class="modal-title fw-bold" id="exampleModalLabel" style="color: #1e293b;">Datos del Nuevo Paciente</h5>
          </div>
          <button type="button" id="cerrModalPatient" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
        <div class="modal-body border-0 pt-3">
          <form action="" @submit.prevent>
            
            <!-- SECCIÓN 1: IDENTIFICACIÓN Y DATOS BÁSICOS -->
            <div class="section-container">
              <div class="section-title">
                <i class="fa-solid fa-address-card text-primary me-2"></i> Datos Personales y de Identificación
              </div>
              <div class="row g-3">
                <!-- DNI -->
                <div class="col-md-6">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-solid fa-id-card text-muted me-1"></i> DNI <span class="text-danger">*</span>
                  </label>
                  <div class="input-group">
                    <input 
                      type="text" 
                      class="form-control custom-input shadow-none" 
                      name="dni" 
                      id="dni" 
                      v-model="paciente.dni" 
                      placeholder="DNI del paciente" 
                      @keypress.enter="reniec()"
                    >
                    <button 
                      class="btn btn-primary btn-search-reniec btnReniec d-flex align-items-center justify-content-center" 
                      type="button" 
                      id="button-addon2" 
                      @click="reniec()"
                      title="Buscar en RENIEC"
                    >
                      <i class="fas fa-search me-1"></i> Buscar
                    </button>
                  </div>
                </div>
                
                <!-- Celular -->
                <div class="col-md-6">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-solid fa-phone text-muted me-1"></i> Celular <span class="text-danger">*</span>
                  </label>
                  <input 
                    type="text" 
                    class="form-control custom-input shadow-none" 
                    name="phone" 
                    id="phone" 
                    v-model="paciente.phone" 
                    placeholder="Celular del paciente"
                  >
                </div>          
                
                <!-- Apellidos -->
                <div class="col-md-6">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-solid fa-user text-muted me-1"></i> Apellidos <span class="text-danger">*</span>
                  </label>
                  <input 
                    type="text" 
                    class="form-control custom-input shadow-none"  
                    name="name" 
                    id="name" 
                    v-model="paciente.name" 
                    placeholder="Apellidos"
                  >
                </div>
                
                <!-- Nombres -->
                <div class="col-md-6">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-solid fa-user text-muted me-1"></i> Nombres <span class="text-danger">*</span>
                  </label>
                  <input 
                    type="text" 
                    class="form-control custom-input shadow-none"  
                    name="nombres" 
                    id="nombres" 
                    v-model="paciente.nombres" 
                    placeholder="Nombres"
                  >
                </div>

                <!-- Fecha de nacimiento -->
                <div class="col-md-6">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-solid fa-calendar-days text-muted me-1"></i> Fecha de nacimiento
                  </label>
                  <input 
                    type="date" 
                    class="form-control custom-input shadow-none" 
                    name="birth_date" 
                    id="birth_date" 
                    v-model="paciente.birth_date"
                  >
                </div>

                <!-- Género -->
                <div class="col-md-6">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-solid fa-venus-mars text-muted me-1"></i> Género
                  </label>
                  <select class="form-select custom-input text-secondary shadow-none" id="sexo" v-model="paciente.gender">
                    <option value="2">Sin definir</option>
                    <option value="0">Femenino</option>
                    <option value="1">Masculino</option>
                    <option value="3">LGTB+</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- SECCIÓN 2: UBICACIÓN Y PERFIL SOCIO-DEMOGRÁFICO -->
            <div class="section-container">
              <div class="section-title">
                <i class="fa-solid fa-map-location-dot text-primary me-2"></i> Ubicación y Datos Demográficos
              </div>
              <div class="row g-3">                   
                <!-- Dirección -->
                <div class="col-md-12">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-solid fa-location-dot text-muted me-1"></i> Dirección
                  </label>
                  <input 
                    type="text" 
                    class="form-control custom-input shadow-none" 
                    name="address" 
                    id="address" 
                    v-model="paciente.address.address" 
                    placeholder="Dirección del paciente"
                  >
                </div>

                <!-- Correo electrónico (d-none) -->
                <div class="col-sm-6 d-none">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">Correo electrónico</label>
                  <input type="email" class="form-control custom-input" name="email" id="email" v-model="paciente.email" placeholder="Correo electrónico"> 
                </div>

                <!-- Departamento -->
                <div class="col-md-4">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-solid fa-map text-muted me-1"></i> Departamento
                  </label>
                  <select v-model="paciente.address.department" class="form-select custom-input text-secondary shadow-none" id="department" @change="moverProvincias(true)">
                    <option v-for="departamento in ubigeo.departamentos" :key="departamento.idDepa" :value="departamento.idDepa">{{ departamento.departamento }}</option>
                  </select>
                </div>

                <!-- Provincia -->
                <div class="col-md-4">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-solid fa-map text-muted me-1"></i> Provincia
                  </label>
                  <select v-model="paciente.address.province" class="form-select custom-input text-secondary shadow-none" id="provincia" @change="moverDistritos()">
                    <option v-for="provincia in provincias" :key="provincia.idProv" :value="provincia.idProv">{{ provincia.provincia }}</option>
                  </select>
                </div>

                <!-- Distrito -->
                <div class="col-md-4">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-solid fa-map text-muted me-1"></i> Distrito
                  </label>
                  <select v-model="paciente.address.district" class="form-select custom-input text-secondary shadow-none" id="distrito">
                    <option v-for="distrito in distritos" :key="distrito.idDist" :value="distrito.idDist">{{ distrito.distrito }}</option>
                  </select>
                </div>

                <!-- Ocupación -->
                <div class="col-md-4">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-solid fa-briefcase text-muted me-1"></i> Ocupación
                  </label>
                  <input 
                    type="text" 
                    class="form-control custom-input shadow-none" 
                    name="occupation" 
                    id="occupation" 
                    v-model="paciente.occupation"  
                    placeholder="Ocupación del paciente"
                  > 
                </div>

                <!-- Estado Civil -->
                <div class="col-md-4">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-solid fa-heart text-muted me-1"></i> Estado Civil
                  </label>
                  <select class="form-select custom-input text-secondary shadow-none" name="marital_status" id="marital_status" v-model="paciente.marital_status">
                    <option value="1">Soltero</option>
                    <option value="2">Casado</option>
                    <option value="3">Viudo</option>
                    <option value="4">Divorciado</option>
                    <option value="5">Conviviente</option>
                  </select>
                </div>

                <!-- Grado de instrucción -->
                <div class="col-md-4">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-solid fa-graduation-cap text-muted me-1"></i> Grado de instrucción
                  </label>
                  <select class="form-select custom-input text-secondary shadow-none" name="instruction_degree" id="instruction_degree" v-model="paciente.instruction_degree">
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

            <!-- SECCIÓN 3: REFERENCIA Y CONTACTOS DE EMERGENCIA -->
            <div class="section-container">
              <div class="section-title">
                <i class="fa-solid fa-share-nodes text-primary me-2"></i> Origen y Referencia
              </div>
              <div class="row g-3">
                <div class="col-md-4">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-solid fa-bullhorn text-muted me-1"></i> Tipo Recomendación
                  </label>
                  <select class="form-select custom-input text-capitalize text-secondary shadow-none" name="tipo_recomendacion" id="tipo_recomendacion" v-model="paciente.recomendation">
                    <option value="" selected>Ninguno</option>
                    <option class="text-capitalize" v-for="reco in recomendaciones" :key="reco" :value="reco">{{ reco }}</option>
                  </select>
                </div>
                <div class="col-md-8">
                  <label class="form-label mb-1" style="color: #475569; font-size: 14px; font-weight: 500;">
                    <i class="fa-regular fa-comment-dots text-muted me-1"></i> Comentario de Recomendación
                  </label>
                  <input 
                    type="text" 
                    class="form-control custom-input text-capitalize shadow-none" 
                    v-model="paciente.recomendacion_comentario" 
                    placeholder="¿Comentario extra sobre la recomendación?"
                  >
                </div>
              </div>
            </div>
            
            <div class="section-container">
              <div class="section-title">
                <i class="fa-solid fa-phone-flip text-primary me-2"></i> Contactos de Emergencia
              </div>

              <!-- Contacto 1 -->
              <div class="p-3 mb-3 bg-white border rounded-3">
                <div class="fw-semibold text-secondary mb-2" style="font-size: 13px;">
                  <span class="badge bg-secondary me-1">1</span> Primer Contacto de Emergencia
                </div>
                <div class="row g-3">
                  <div class="col-md-4">
                    <label class="form-label mb-1" style="color: #475569; font-size: 13px;">Nombre Completo</label>
                    <input type="text" class="form-control custom-input shadow-none" name="contacto" id="contacto" v-model="paciente.contacto" placeholder="Nombre de contacto" autocomplete="off">
                  </div>
                  <div class="col-md-4">
                    <label class="form-label mb-1" style="color: #475569; font-size: 13px;">Celular Emergencia</label>
                    <input type="text" class="form-control custom-input shadow-none" name="contacto_celular" id="contacto_celular" v-model="paciente.contacto_celular" placeholder="Celular" autocomplete="off">
                  </div>
                  <div class="col-md-4">
                    <label class="form-label mb-1" style="color: #475569; font-size: 13px;">Parentesco</label>
                    <input type="text" class="form-control custom-input shadow-none" name="parentezco" id="parentezco" v-model="paciente.parentezco" placeholder="Parentesco" autocomplete="off">
                  </div>
                </div>
              </div>

              <!-- Contacto 2 -->
              <div class="p-3 bg-white border rounded-3">
                <div class="fw-semibold text-secondary mb-2" style="font-size: 13px;">
                  <span class="badge bg-secondary me-1">2</span> Segundo Contacto de Emergencia
                </div>
                <div class="row g-3">
                  <div class="col-md-4">
                    <label class="form-label mb-1" style="color: #475569; font-size: 13px;">Nombre Completo</label>
                    <input type="text" class="form-control custom-input shadow-none" name="contacto2" id="contacto2" v-model="paciente.contacto2" placeholder="Nombre de contacto" autocomplete="off">
                  </div>
                  <div class="col-md-4">
                    <label class="form-label mb-1" style="color: #475569; font-size: 13px;">Celular Emergencia</label>
                    <input type="text" class="form-control custom-input shadow-none" name="contacto_celular2" id="contacto_celular2" v-model="paciente.contacto_celular2" placeholder="Celular" autocomplete="off">
                  </div>
                  <div class="col-md-4">
                    <label class="form-label mb-1" style="color: #475569; font-size: 13px;">Parentesco</label>
                    <input type="text" class="form-control custom-input shadow-none" name="parentezco2" id="parentezco2" v-model="paciente.parentezco2" placeholder="Parentesco" autocomplete="off">
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
        
        <div class="modal-footer border-0 pt-0">
          <button type="button" class="btn custom-btn-cancel" data-bs-dismiss="modal">Cancelar</button>
          <button @click="createDataPatient()" type="button" class="btn btn-primary custom-btn-submit d-flex align-items-center">
            <i class="fa-regular fa-circle-check me-2"></i> Crear Paciente
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import alertify from 'alertifyjs'
  export default {
    name: "modal_new_patient",
    props:{
    }, 

    data () {
      return {
				ubigeo: {departamentos:[], provincias:[], distritos:[]},
				token:'087d16c0688f5150268342d085a55d54b5064c7649596011f03b35b935899a50',
				provincias:[], distritos:[], paciente:{
					dni:'', name:'', phone:'',
					relative:{}, address:{},
					recomendation:'', recomendacion_comentario:'',
					contacto: '', contacto_celular:'', parentezco:'',
					contacto2: '', contacto_celular2:'', parentezco2:'',
				},
				recomendaciones:['Facebook', 'Instagram', 'TikTok', 'Linkedin', 'Youtube', 'Spotify', 'TV', 'Amigos o familiares', 'Referencia profesional', 'Publicidad escrita', 'Campañas de salud', 'Convenio', 'Paciente Antiguo', 'Otros Centros de Salud', 'Google Maps / Business', 'Referencia del Establecimiento', 'Sucamec', 'Página Web']
      }
    },

    methods:{
			reniec(){
				this.$swal.fire({
					title: 'Buscando paciente',
					timer: 2500,
					timerProgressBar: true,
					didOpen: () => {
						timerProgressBar: true,
						this.$swal.showLoading()
					},
				})

				this.axios.get("/api/buscar/"+this.paciente.dni)
				.then(res => {
					if (res.data.patient == null) { //Buscar en reniec
						//window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
						this.axios.get("/api/buscarDni/"+this.paciente.dni)
						.then(response => {
							console.log(response.data)
							this.paciente.name = (`${response.data.apellido_paterno} ${response.data.apellido_materno}`).trim();
							this.paciente.nombres = (`${response.data.nombres}`).trim()
							if (response.data.apellido_paterno) {
								this.patientNew = false
	
								this.$swal.fire({
									icon: 'success',
									title: 'Okey',
									text: 'Paciente nuevo',
								})
							} else {
								this.$swal.fire({
									icon: 'error',
									title: 'Oops...',
									text: 'DNI no encontrado!',
									footer: 'Vuelve a intentarlo'
								})
							}
						})
						.catch(err => {
							console.error(err)
						})
					}else{ //encontro en la DB
						this.$swal.fire({
							title: 'Buscando paciente',
							timer: 10,
						})
						console.log('datos del paciente',res.data);

						this.paciente.name = res.data.patient.name;
						this.paciente.nombres = res.data.patient.nombres;
						this.paciente.phone = res.data.patient.phone;
						this.paciente.email = res.data.patient.email;
						this.paciente.address.address = res.data.address.address;
						this.paciente.birth_date = res.data.patient.birth_date;
						this.paciente.marital_status = res.data.patient.marital_status;
						this.paciente.instruction_degree = res.data.patient.instruction_degree;
						this.paciente.gender = typeof parseInt(res.data.patient.gender) === 'number' && res.data.patient.gender !==null ? res.data.patient.gender : 2;
						this.paciente.occupation = res.data.patient.occupation;
						this.paciente.address = res.data.patient.address.address;
						this.paciente.department = res.data.patient.address.department;
						this.paciente.province = res.data.patient.address.province;
						this.paciente.district = res.data.patient.address.district;
						//datos del contacto de emergencia
						this.paciente.contacto = res.data.relacion[0]?.name ?? '' ;
						this.paciente.contacto2 = res.data.relacion[1]?.name ?? '' ;
												
						this.paciente.contacto_celular = res.data.relacion[0]?.phone ?? '';
						this.paciente.contacto_celular2 = res.data.relacion[1]?.phone ?? ''; 
												
						this.paciente.parentezco = res.data.relacion[0]?.kinship ?? '';
						this.paciente.parentezco2 = res.data.relacion[1]?.kinship ?? '';
						this.paciente.recomendation = res.data.patient.recomendation;
						this.paciente.recomendacion_comentario = res.data.patient.recomendacion_comentario;
						
						//this.paciente.name = res.data.relacion.name =='null' ? '' : res.data.relacion.name;
						//this.paciente.phone = res.data.relacion.phone =='null' ? '' : res.data.relacion.phone;
						//this.paciente.kinship = res.data.relacion.kinship =='null' ? '' : res.data.relacion.kinship;
					}
				})
				.catch(err => {
					console.error(err)
				})
				.finally(result => {
					this.switchReciec = 1;
					try {
						let btn = document.querySelector(".btnReniec");
						if (btn) {
							btn.classList.replace('btn-danger', 'btn-info');
						}
					} catch(e) {
						console.error(e);
					}
				})
			},
      createDataPatient(){
				if(this.paciente.dni.length<8){
					alertify.notify('El DNI debe ser de 8 dígitos.', 'danger', 10);
				}
				else if( this.paciente.name=='' || this.paciente.nombres == '' || this.paciente.dni =='' || this.paciente.phone=='' ){
					alertify.notify('Datos mínimos DNI, nombre y celular del paciente', 'danger', 10);
				}
				else{
					this.axios.post(`/api/patient/new`, {paciente: this.paciente})
					.then(res => { console.log(res.data);
						this.closeModal()
						if(res.data.status === 'success'){
							this.$swal('Datos de paciente guardados con éxito')
						}else{
							this.$swal({icon: 'error', text: res.data.message || 'El dni ya está registrado'})
						}
					})
					.catch(error => {
							console.log('error'+error)
					})
					this.$emit('cargarPacienteSimpleNuevo')
				}
      },

      closeModal() {
        document.getElementById('cerrModalPatient').click();
      },
			async listarDepartamentos(){
				await this.axios.get('/api/departamentos')
				.then(response => { //console.log(response.data);
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
				let idDepa= this.paciente.address.department;
				this.provincias = this.ubigeo.provincias.filter(provincia=> provincia.idDepa == idDepa)
				if(borrar) this.paciente.address.district=-1;
			},
			moverDistritos(){
				let idProv= this.paciente.address.province;
				this.distritos = this.ubigeo.distritos.filter(distrito=> distrito.idProv == idProv)
			}
    },
		created () {
			this.listarDepartamentos();
			this.paciente.address.department = 12;
			this.paciente.address.province = 103;
			this.paciente.address.district = 1006;
			this.paciente.gender =2;
			this.paciente.marital_status =1;
			this.paciente.instruction_degree = 6;
			this.recomendaciones.sort();
    }

  }
</script>

<style>
.ajs-message{border-radius: 5px!important;}
.ajs-success { background-color: rgb(33, 201, 89)!important; }
.ajs-danger { background-color: rgb(232, 27, 0)!important; color:white!important; }
</style>

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
.custom-btn-submit:hover {
  background-color: #5c91f9;
}
.btn-search-reniec {
  border-radius: 0 8px 8px 0;
  padding: 0.6rem 1.25rem;
  background-color: #3b82f6;
  border: 1px solid #3b82f6;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
}
.btn-search-reniec:hover {
  background-color: #2563eb;
  border-color: #2563eb;
}
.input-group > .custom-input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.section-container {
  background-color: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
}
.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.5rem;
}
.section-title i {
  font-size: 16px;
}
</style>