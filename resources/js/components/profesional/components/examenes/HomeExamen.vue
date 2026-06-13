<template>
<div class="p-4" style="background-color: #f8f9fc; min-height: 100vh;">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <div>
            <h4 class="m-0 font-weight-bold text-dark"><i class="fas fa-microscope text-primary mr-2"></i> Exámenes Médicos</h4>
            <small class="text-muted">Registro y órdenes de exámenes</small>
        </div>
    </div>
    
    <div class="row">
        <div class="col-xl-12 col-lg-12">
            <div class="card border-0 shadow-sm mb-4" style="border-radius: 10px;">
                <div class="card-body p-4">
                <div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label class="small fw-bold text-muted text-uppercase">Paciente</label>
                            <div class="input-group">
                                <span class="input-group-text bg-light border-0 text-muted"><i class="fas fa-user"></i></span>
                                <input type="text" class="form-control bg-light border-0" v-model="exam.name_patient" placeholder="Nombre del Paciente">
                            </div>
                        </div>

                        <div class="form-group col-md-6">
                            <label class="small fw-bold text-muted text-uppercase">Fecha Actual</label>
                            <div class="input-group">
                                <span class="input-group-text bg-light border-0 text-muted"><i class="far fa-calendar-alt"></i></span>
                                <input type="date" class="form-control bg-light border-0" v-model="exam.attention_date">
                            </div>
                        </div>
                    </div>

                    <div class="form-row mt-3">
                        <div class="form-group col-12">
                            <label class="small fw-bold text-muted text-uppercase d-flex justify-content-between align-items-center">
                                <span>Tipo de examen</span>
                                <button type="button" class="btn btn-light btn-sm shadow-sm rounded-pill text-primary fw-bold px-3" data-bs-target="#modalAddExamen" data-bs-toggle="modal"> 
                                    <i class="fa-solid fa-plus mr-1"></i> Nuevo Elemento
                                </button>
                            </label>
                            <select name="" id="typeExam" @change="typeExamenSelect" class="form-select bg-light border-0" style="height: 45px;">
                                <option value="1">Laboratorio</option>
                                <option value="2">Imagenología</option>
                                <option value="3">Otros</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-row mt-3">
                        <div class="form-group col-12 position-relative">
                            <label class="small fw-bold text-muted text-uppercase">Buscar Examen</label>
                            <div class="input-group shadow-sm" style="border-radius: 8px; overflow: hidden;">
                                <span class="input-group-text bg-white border-0 text-primary"><i class="fas fa-search"></i></span>
                                <input 
                                autocomplete="off" 
                                type="text" 
                                class="form-control border-0 py-2" 
                                placeholder="Escribe el nombre del estudio..." 
													name="" 
													id="diagnostico" 
													@keyup="searchExam"
													/>

													<div class="cie-content rounded">
														<div 
														v-for="(exam, index) in dataSearchExam" :key="index">
																<span 
																class="w-100 px-2 py-2 cie--hover d-inline-block pointer cie-item" 
																:data-id="exam.id"																
																@click="insertExam(exam)">
																		{{ exam.name }}
																</span>
																<!-- :class="{ 'cie-danger': selected.find(el => el.id == `${exam.id}`) }" -->
														</div>
													</div>
                        </div>
                    </div>
                </div>

                <div class="form-row mt-4">
                    <div class="col-md-12">
                        <div class="table-responsive border rounded-4 shadow-sm">
                            <table class="table table-hover align-middle mb-0">
                                <thead class="table-light text-muted text-uppercase small" style="font-size: 0.75rem;">
                                    <tr>
                                        <th scope="col" class="ps-4 py-3">#</th>
                                        <th scope="col">Tipo de examen</th>
                                        <th scope="col">Examen</th>
                                        <th scope="col" class="text-end pe-4">Operaciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-if="selected.length === 0">
                                        <td colspan="4" class="text-center py-4 text-muted">No hay exámenes seleccionados</td>
                                    </tr>
                                    <tr v-for="(select,key) in selected" :key="select.id">
                                        <th scope="row" class="ps-4">{{ key + 1 }}</th>
                                        <td scope="row">
                                            <span class="badge bg-light text-dark border px-2 py-1">
                                                {{ (select.type === 1) ? 'Laboratorio' : (select.type === 2) ? 'Imagenología' : (select.type === 3) ? 'Otro' : 'Sin tipo de examen' }}
                                            </span>
                                        </td>
                                        <td class="font-weight-bold text-dark">{{ select.name }}</td>
                                        <td class="text-end pe-4">
                                            <button @click="deleteSelected(key)" class="btn btn-sm text-danger btn-light rounded-circle shadow-sm" title="Eliminar"><i class="fas fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-12 mt-4 text-right">
                        <!-- <button @click="storeExam" class="btn btn-success">Registrar</button> -->
                        <button @click="print" id="printBtn" class="btn btn-primary rounded-pill px-4 shadow-sm font-weight-bold">
                            <i class="fas fa-print mr-2"></i>Imprimir PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
		<!-- Modal -->
<div class="modal fade" id="modalAddExamen" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header border-0">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Nuevo tipo de examen</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body border-0">
        <label for="">Categoría que pertenece</label>
				<select name="" class="form-select" v-model="nuevo.tipo">
					<option value="1">Laboratorio</option>
					<option value="2">Imagenología</option>
					<option value="3">Otros</option>
				</select>
        <label for="">Nombre del exámen</label>
				<input type="text" class="form-control" v-model="nuevo.nombre" autocomplete="off">
      </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn btn-outline-primary" @click="enviarNuevo()"><i class="fa-regular fa-floppy-disk"></i> Ingresar nuevo tipo</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>

</template>

<script>
export default {
    data(){
        return{
            exam:{
                appointment: this.$route.params.consultId,
                name_patient:'',
                attention_date: this.getFecha(),
                medical_exams:[]
            },
            buscar:'', nuevo:{tipo:1, nombre:''},
            examenes: {
                laboratorio: [],
                imagenologia: [],
                otros: []
            },
            
            exams:[],
            dataSearchExam: [],
            
            showResults: false,
            
            selected:[],
        }
    },
    
    methods: {
        async getNamePatient(){
            await this.axios.get(`/api/getNameExam/${this.$route.params.consultId}`)
            .then((result) => {
                this.exam.name_patient = result.data.name

            }).catch((err) => {
                console.log(err)
            });
        },
				enviarNuevo(){
					if( this.nuevo.nombre )
						this.axios.post('/api/newExam', this.nuevo)
						.then(response=> { console.log('queresp', response.data);
							this.getExams()
							this.nuevo.nombre =''
						})
						$('#modalAddExamen').modal('hide')
				},

        async getExams(){
            await this.axios.get('/api/medicalExam')
            .then((result) => {
                result.data.forEach(exam => {
                    if (exam.type === 1) {
                        this.examenes.laboratorio.push(exam);
                    } else if (exam.type === 2) {
                        this.examenes.imagenologia.push(exam);
                    } else if (exam.type === 3) {
                        this.examenes.otros.push(exam);
                    }
                })
            }).catch((err) => {
                console.error(err)
            });
        },

        // async storeExam(){
        //     this.exam.medical_exams = this.selected
        //     await this.axios.post('/api/medicalExam', this.exam)
        //     .then((res) => {
        //         console.log(res.data.medical_exams)
        //         this.pdf = res.data.medical_exams

        //         // sessionStorage.setItem('data-pdf', '')
        //         // sessionStorage.setItem('data-pdf', JSON.stringify(this.exam))

        //         this.$swal('Examen registrado. Ahora puede imprimir')
        //         document.getElementById('printBtn').disabled = false
        //     }).catch((err) => {
        //         console.log(err)
        //     });
        // },

        insertExam(exam) {
            let switchDuplicate = false

            this.selected.find(el => {
                if (el.id == `${exam.id}`) {
           			 this.showResults= true
									return switchDuplicate = true;
								}
            });

						if(!switchDuplicate) this.selected.push(exam)
            
            /* if (this.selected.length !== 0 && !switchDuplicate) this.selected.push(exam);
            if (this.selected.length === 0) this.selected.push(exam) */

            this.buscar=''
            this.showResults= false
        },

        searchExam (event) {
            let expReg = new RegExp(`${event.target.value}`, 'ig');
            // this.dataSearchExam = exams.filter(el => el.name )
            this.dataSearchExam = this.exams.filter(el => el.name.match(expReg))
        },
        
        async print () {
            this.exam.medical_exams = this.selected;
            if(this.selected.length === 0) {
                this.$swal('Agregue al menos un examen para continuar');
                return;
            }
            try {
                await this.axios.post('/api/medicalExam', this.exam);
                this.$swal('Órdenes de exámenes guardadas con éxito');
                window.open('/api/pdf_exam/'+[JSON.stringify(this.exam).split('/').join('-')]+'?token='+localStorage.getItem('token'));
            } catch (err) {
                console.error(err);
                this.$swal('Error al guardar las órdenes');
            }
        },
        
        deleteSelected(key){
            this.selected.splice(key,1)
        },

        typeExamenSelect (event = 1) {
            let valueSelectExam = event.target ? event.target.value : event;
            if (valueSelectExam == 1) {
                this.exams = this.examenes.laboratorio
                this.dataSearchExam = this.exams
            } else if (valueSelectExam == 2) {
                this.exams = this.examenes.imagenologia
                this.dataSearchExam = this.exams
            } else if (valueSelectExam == 3) {
                this.exams = this.examenes.otros
                this.dataSearchExam = this.exams
            }
        },

        getFecha() {
            return `${new Date().getFullYear()}-${new Date().getMonth().toString().length == 1 ? new Date().getMonth().toString() + 1 : parseInt(new Date().getMonth()) + 1}-${new Date().getDate().toString().length == 1 ? '0' + new Date().getDate() : new Date().getDate()}`
        },
    },
    mounted() {
       this.getExams(),
       this.getNamePatient(),
       this.typeExamenSelect()
    },
    computed:{
         filtro(){
            if(!this.buscar){
                this.showResults = false
                return null
            }else{
                this.showResults = true
                return this.exams.filter(exam => exam.name.toLowerCase().includes(this.buscar)).slice(0,5)
            }
        }
    }
}
</script>

<style scoped>
 .cie-content {
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    background-color: #fff;
    border: .3px solid #22222260;
    visibility: hidden;
    position: absolute;
    z-index: 10;
    transition: visibility 1s normal 3s;
  }

  #diagnostico:focus + .cie-content {
    visibility: visible;
    /* display: block !important; */
  }
  .cie-item:active {
    visibility: visible;
    opacity: 0;
    /* display: block !important; */
  }
  
  .flex-gap {
    gap: 15px;
  }

  .pointer {
    cursor: pointer;
  }

  .cie--hover:hover:not(.cie-danger) {
    background: rgb(236, 236, 236);
  }

  .cie-danger {
    background: rgb(255, 207, 207);
    cursor: no-drop;
  }
</style>
