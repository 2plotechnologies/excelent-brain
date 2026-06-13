<template>
<div class="p-4" style="background-color: #f8f9fc; min-height: 100vh;">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <div>
            <h4 class="m-0 font-weight-bold text-dark"><i class="fas fa-file-prescription text-primary mr-2"></i> Recetas Médicas</h4>
            <small class="text-muted">Gestión de recetas y medicamentos (Kairos)</small>
        </div>
        <div class="d-flex gap-2">
            <a href="#" data-bs-toggle="modal" data-bs-target="#kairosModal" class="btn btn-light border-0 shadow-sm rounded-pill font-weight-bold text-primary px-3">
                <i class="fas fa-plus-circle mr-1"></i> Agregar Kairos
            </a>
            <a href="../kairostable" class="btn btn-primary border-0 shadow-sm rounded-pill font-weight-bold px-3 ml-2">
                <i class="fas fa-table mr-1"></i> Tabla Kairos
            </a>
        </div>
    </div>

    <kairos-modal></kairos-modal>

    <div class="row">
        <div class="col-xl-12 col-lg-12">
            <div class="card border-0 shadow-sm mb-4" style="border-radius: 10px;">
                <div class="card-header bg-white py-3 d-flex flex-row align-items-center justify-content-between" style="border-bottom: 1px solid #e3e6f0; border-top: 4px solid #f6c23e !important; border-radius: 10px 10px 0 0;">
                    <h6 class="m-0 font-weight-bold text-dark text-uppercase small"><i class="fas fa-prescription-bottle-alt text-warning mr-1"></i> Nueva Receta</h6>
                    <!-- Dropdown ultima receta -->
                    <li v-if="last_recipes.length != 0" class="nav-item dropdown no-arrow mx-1 list-unstyled">
                        <a class="nav-link dropdown-toggle p-0" href="#" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="badge bg-warning text-dark px-2 py-1 shadow-sm"><i class="fas fa-history mr-1"></i> Últimas Recetas</span>
                        </a>
                        <!-- Dropdown - Messages -->
                        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in border-0"
                            aria-labelledby="alertsDropdown" style="border-radius: 10px; overflow: hidden;">
                            <h6 class="dropdown-header bg-warning text-dark border-0">
                                Historial de Recetas
                            </h6>

                            <a v-for="recipe in last_recipes" :key="recipe.id" class="dropdown-item d-flex align-items-center py-3 border-bottom" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-warning-light d-flex align-items-center justify-content-center" style="width: 40px; height: 40px; border-radius: 50%; background-color: #fdf3d8;">
                                        <i class="fas fa-pills text-warning"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">{{recipe.pivot.indications}} - {{recipe.pivot.way}} - {{recipe.pivot.amount}} - {{recipe.presentation}}</div>
                                    <span class="font-weight-bold text-dark">{{recipe.name}} - {{recipe.tradename}} - {{recipe.concentration}}</span>
                                </div>
                            </a>
                        </div>
                    </li>
                </div>
                <!-- Card Body -->
                <div class="card-body p-4">
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <label class="small fw-bold text-muted text-uppercase">Paciente</label>
                            <div class="input-group shadow-sm" style="border-radius: 8px; overflow: hidden;">
                                <span class="input-group-text bg-white border-0 text-muted"><i class="fas fa-user"></i></span>
                                <input type="text" class="form-control border-0 text-capitalize bg-light" v-model="full_patient_name" placeholder="Apellidos y Nombres" :readonly="prescription.patient_id !== 0">
                            </div>
                        </div>
                    </div>
                    <div class="form-row mb-4">
                        <div class="col-md-4 mb-3">
                            <label class="small fw-bold text-muted text-uppercase">Fecha Actual</label>
                            <div class="input-group shadow-sm" style="border-radius: 8px; overflow: hidden;">
                                <span class="input-group-text bg-white border-0 text-muted"><i class="far fa-calendar-alt"></i></span>
                                <input type="date" class="form-control border-0 bg-light" v-model="prescription.attention_date">
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="small fw-bold text-muted text-uppercase">Fecha de Vencimiento</label>
                            <div class="input-group shadow-sm" style="border-radius: 8px; overflow: hidden;">
                                <span class="input-group-text bg-white border-0 text-muted"><i class="far fa-calendar-times"></i></span>
                                <input type="date" class="form-control border-0 bg-light" v-model="prescription.effective_date">
                            </div>
                        </div>
                        <div class="col-md-4 mb-3 d-flex align-items-end pb-2">
                            <div class="form-check custom-checkbox">
                                <input class="form-check-input shadow-sm" type="checkbox" v-model="prescription.signature" id="signatureCheck" style="width: 20px; height: 20px; margin-top: 2px;">
                                <label class="form-check-label ml-2 font-weight-bold text-dark" for="signatureCheck">
                                    Incluir Firma
                                </label>
                            </div>
                        </div>
                        <div class="col-md-12 mt-2">
                            <label class="small fw-bold text-muted text-uppercase">Buscar Medicamento</label>
                            <div class="input-group shadow-sm position-relative" style="border-radius: 8px; overflow: visible;">
                                <span class="input-group-text bg-white border-0 text-primary"><i class="fas fa-search"></i></span>
                                <input v-model="buscar" autocomplete="off" type="text" class="form-control border-0 py-2" placeholder="Escribe el nombre del medicamento para buscar en Kairos..." name="" id="via" />
                                
                                <div v-show="showResults" class="position-absolute w-100 bg-white shadow-lg rounded" style="top: 100%; left: 0; z-index: 1000; max-height: 300px; overflow-y: auto;">
                                    <div @click="callModal(medicamento,'Agregar')" data-bs-toggle="modal" data-bs-target="#recetaModal" class="p-3 border-bottom text-dark" style="cursor: pointer;" onmouseover="this.style.backgroundColor='#f8f9fc';" onmouseout="this.style.backgroundColor='white';" v-for="medicamento in filtro" :key="medicamento.id">
                                        <div class="font-weight-bold"><i class="fas fa-pills text-warning mr-2"></i>{{medicamento.name}} <span class="text-muted font-weight-normal ml-1">{{medicamento.tradename}}</span></div>
                                        <div class="small text-muted ml-4">{{medicamento.concentration}} - {{medicamento.presentation}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-row mt-4">
                        <div class="col-md-12">
                            <div class="table-responsive border rounded-4 shadow-sm mb-4">
                                <table class="table table-hover align-middle mb-0">
                                    <thead class="table-light text-muted text-uppercase small" style="font-size: 0.75rem;">
                                        <tr>
                                            <th scope="col" class="ps-4 py-3">#</th>
                                            <th scope="col">Medicamento</th>
                                            <th scope="col">Vía</th>
                                            <th scope="col">Frecuencia</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col" class="text-end pe-4">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-if="selected.length === 0">
                                            <td colspan="6" class="text-center py-4 text-muted">No se han añadido medicamentos a la receta</td>
                                        </tr>
                                        <tr v-for="(select,key) in selected" :key="select.id">
                                            <th scope="row" class="ps-4">{{key+1}}</th>
                                            <td class="font-weight-bold text-dark">{{select.name}}</td>
                                            <td><span class="badge bg-light text-dark border px-2 py-1">{{select.way}}</span></td>
                                            <td class="text-muted">{{select.indications}}</td>
                                            <td><span class="badge bg-primary text-white rounded-pill">{{select.amount}}</span></td>
                                            <td class="text-end pe-4">
                                                <div class="btn-group shadow-sm rounded-pill">
                                                    <button @click="callModal(select,'Editar')" data-bs-toggle="modal" data-bs-target="#recetaModal" class="btn btn-sm btn-light text-primary" title="Editar"><i class="fas fa-pencil-alt"></i></button>
                                                    <button @click="deleteSelected(key)" class="btn btn-sm btn-light text-danger" title="Eliminar"><i class="fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div v-if="usuario && usuario.professional.profession!='Psicólogo'" class="col-12 text-right border-top pt-4">
                            <button @click="insertPrescription" class="btn btn-success rounded-pill px-4 shadow-sm font-weight-bold mr-2"><i class="far fa-save mr-2"></i> Registrar receta</button>
                            <button @click="print" id="printBtn" class="btn btn-danger rounded-pill px-4 shadow-sm font-weight-bold" disabled><i class="fas fa-file-pdf mr-2"></i> Imprimir PDF</button>
                            <button @click="prueba" id="btnPrueba" class="btn btn-warning rounded-pill px-4 shadow-sm font-weight-bold d-none ml-2"><i class="fas fa-print mr-2"></i> Prueba demo</button>
                        </div>
                    </div>

  </div>
  </div>

</div>
<recetas-modal v-if="medicamento" :med="medicamento" :type="this.tipo"></recetas-modal>
</div>
</div>

</template>

<script>
import KairosModal from './KairosModal.vue'
import RecetasModal from './RecetasModal.vue'
import { dateNow } from '../../../../helpers/Time.js'

export default{
    data(){
        return{
            showResults:false,
            buscar:'', usuario:null,
            medicamentos:[],
            selected:[],
            medicamento:{
                name: '',
                way: '',
                indications: '',
                amount: '',
                kairo_id : ''
            },
            prescription:{
                patient_name:'',
                effective_date: null,
                attention_date: dateNow(),
                patient_id: this.$route.params.patientId,
                medicines: [],
                signature: '', professional_id:-1
            },
            tipo: this.type,
            id_receta : '',
            name_patient: '', // Apellidos
            nombres_patient: '', // Nombres
            prescription: {
                patient_id: this.$route.params.patientId,
            },
            last_recipes:[]
        }
    },
    props:{
        med: {
            type: Object,
            default: () => ({})
        },
        type: String
    },
    components:{RecetasModal, KairosModal},
    methods:{
        getNamePatient(){
            if (this.$route.params.patientId != 0) {
            this.axios.get(`/api/getNamePatient/${this.$route.params.patientId}`)
            .then((result) => {
                console.log(result);
                if (result.data.last_recipe) {
                    this.name_patient = result.data.patient.name; // Apellidos
                    this.nombres_patient = result.data.patient.nombres; // Nombres
                    this.last_recipes = result.data.last_recipe;
                } else {
                    this.name_patient = result.data.name; // Apellidos
                    this.nombres_patient = result.data.nombres; // Nombres
                }


            }).catch((err) => {
                console.log(err)
            });
            }
        },
        cleanFields(){
            this.name_patient = ''
            //document.getElementById('messagesDropdown').style.display = 'none'
        },
        getKairos(){
            this.axios.get('/api/kairos')
            .then((result) => {
                this.medicamentos = result.data
            })
        },
        callModal(medicamento, tipo){
            this.medicamento = medicamento
            this.tipo = tipo
            this.buscar = ''
        },
        pushSelected(medicamento){
            this.selected.push({...medicamento})
            console.log(this.selected)
        },
        deleteSelected(key){
            this.selected.splice(key,1)
            console.log(key)
        },
        updateSelected(select){
            this.medicamento = select
        },
				prueba(){
					this.axios.post('/api/agregarPrescription', this.prescription)
					.then(response =>{
						console.log(response.data);						
					})
				},
        insertPrescription(){
					this.prescription.medicines = this.selected
					this.prescription.patient_name = this.name_patient + ', ' + this.nombres_patient
					this.axios.post('/api/agregarPrescription', this.prescription)
					.then((result) => { //console.log(result.data);
						if(result.data.id_receta>0){
							this.$swal({
								icon: "success",
								title: 'Receta insertada. Ahora puede imprimir'
							})
							this.id_receta = result.data.id_receta
							document.getElementById('printBtn').disabled = false
						}else{
							this.$swal({
								icon: "error",
								title: 'No se pudo procesar el pedido. Genere una receta nueva'
							})
						}
					});
        },
        print(){
            window.open('/api/pdf/'+this.id_receta+'?token='+localStorage.getItem('token'))
        },
				queUsuario(){
					this.axios.get('/api/user')
        	.then((res) => { //console.log('soy', res.data.user.professional.id)
						this.usuario = res.data.user;
						this.prescription.professional_id = res.data.user.professional.id
					}).catch((err) => {
							console.log(err)
					});
				}
        
    },
    computed:{
        filtro(){
            if(!this.buscar){
                this.showResults = false
                return null
            }else{
                this.showResults = true
                return this.medicamentos.filter(medicamento => medicamento.name.toLowerCase().includes(this.buscar) || medicamento.tradename.toLowerCase().includes(this.buscar)).splice(0,6)
            }
        },
    
    full_patient_name() {
        return `${this.name_patient} ${this.nombres_patient}`.trim();
    }
    },
    beforeMount(){
        this.getNamePatient()
        this.getKairos()
				this.queUsuario()
    },
    beforeRouteUpdate(to, from, next){
        this.name_patient = '',
        this.last_recipes = [],
        this.prescription.patient_id = 0
        next()
    },
    updated(){
        //console.log('updateando')
        /* if(this.name_patient != ''){
            alert('hay nombre de paciente')
        }else{
            alert('no hay nombre de paciente')
        } */
    }

}
</script>
