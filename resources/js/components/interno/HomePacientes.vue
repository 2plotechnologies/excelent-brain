<template>
  <main>
    <div class="d-sm-flex align-items-center justify-content-between mt-4 mb-3 gap-3">
        <div class="d-none d-sm-inline-block form-inline w-100">
            <div class="input-group">
                <div class="input-group-prepend">
                    <button class="btn btn-success shadow-sm" type="button" @click="searchPatients()">
                        <i class="fas fa-search fa-sm"></i>
                    </button>
                </div>
                <input
                type="text"
                class="form-control bg-white shadow-sm border-0 small"
                id="searchNamePatient"
                placeholder="Buscar por apellidos, nombres o DNI..."
                aria-describedby="basic-addon2" @keyup.enter="searchPatients()" autocomplete="off"
                >
            </div>
        </div>
        
        <div class="d-flex gap-2">
            <button class="btn btn-outline-info shadow-sm text-nowrap" @click="toggleVista()">
                <i class="fas" :class="vistaActual === 'cumpleaños' ? 'fa-users' : 'fa-birthday-cake'"></i> 
                {{ vistaActual === 'cumpleaños' ? 'Lista de Pacientes' : 'Cumpleaños' }}
            </button>
            <button class="btn btn-primary shadow-sm text-nowrap" data-bs-toggle="modal" data-bs-target="#modalNewPatient">
                <i class="fas fa-user-nurse"></i> Crear paciente
            </button>
        </div>
    </div>

    <!-- VISTA PACIENTES -->
    <div v-if="vistaActual === 'lista'">
		<p class="mt-3 mb-1 font-weight-bold text-dark">Últimos pacientes registrados</p>
    <table class="table table-striped mt-4">
      <thead>
        <tr>
          <th>N°</th>
          <th>Nombre y apellidos</th>
          <th>Hobbies</th>
          <th>Triaje</th>
          <th>Plan de Seguridad</th>

        </tr>
      </thead>
      <tbody>
        <tr
        v-for="(patients, index) in busqueda"
        :key = "index"
        >
          <th>{{ index+1 }}</th>
          <td class="text-capitalize" ><span v-if="patients.vivo==0"><i class="fas fa-cross"></i></span> {{ patients.name ? lowerCase(patients.name) : 'Sin nombre' }} {{ lowerCase(patients.nombres) }}</td>
					<td>
						<button v-if="patients.vivo==1"  class="btn btn-outline-primary btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerHobbies" @click="misHobbies=JSON.parse(patients.hobbies); queId = patients.id">
							<i class="fa-solid fa-baseball-bat-ball"></i>
						</button>
					</td>
					<td>
						<button class="btn btn-secondary btn-circle btn-md" data-bs-toggle="modal" data-bs-target="#modalVerTriajesViejos" title="Historial de Triajes" @click="verTriajesViejos(index)">{{ patients.triajes.length }}</button>
						<button v-if="patients.vivo==1"  class="btn btn-info btn-circle btn-md" data-bs-toggle="modal" title="Crear triaje" @click="dataProps(patients)" data-bs-target="#modalTriaje"><i class="fa-solid fa-stethoscope"></i></button>
					</td>
          <td>
						<button v-if="patients.vivo==1"  class="btn btn-info btn-circle btn-md" data-bs-toggle="modal" @click="dataProps(patients)" data-bs-target="#modalArchivosTriaje"><i class="fa-solid fa-shield-heart"></i></button>
					</td>
        </tr>
      </tbody>
    </table>
    </div>

    <!-- VISTA CUMPLEAÑOS -->
    <div v-else-if="vistaActual === 'cumpleaños'">
      <div class="card border-0 shadow-sm mt-3">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="mb-0 font-weight-bold text-info"><i class="fas fa-birthday-cake me-2"></i> Cumpleaños del Mes</h5>
            <div class="input-group w-auto">
              <span class="input-group-text bg-light border-0"><i class="far fa-calendar-alt text-muted"></i></span>
              <input type="date" class="form-control bg-light border-0" v-model="fechaCumple" id="fechaCumple" @change="cambiarFechaCumple()">
            </div>
          </div>

          <table class="table table-striped mt-2 align-middle">
            <thead>
              <tr>
                <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-muted">N°</th>
                <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-muted">Nombres</th>
                <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-muted text-center">Fecha Cumpleaños</th>
                <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-muted text-center">Edad</th>
                <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-muted text-center">Citas Confirmadas</th>
                <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-muted text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cliente, index) in clientesCumple" :key="'cumple_'+index">
                <td class="font-weight-bold">{{ index + 1 }}</td>
                <td class="text-capitalize text-dark fw-bold" @click="dataProps(cliente)" data-bs-toggle="modal" data-bs-target="#patientModal" style="cursor:pointer">
                  {{ (cliente.name || '').toLowerCase() }} {{ (cliente.nombres || '').toLowerCase() }}
                </td>
                <td class="text-center">{{ fechaLatam(cliente.birth_date) }}</td>
                <td class="text-center"><span class="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25">{{ edad(cliente.birth_date) }} años</span></td>
                <td class="text-center">
                  <span class="badge" :class="cliente.confirmados > 0 ? 'bg-success' : 'bg-secondary'">{{ cliente.confirmados }}</span>
                </td>
                <td class="text-center">
                  <a v-if="cliente.phone && cliente.phone != ''" 
                     :href="`https://wa.me/51${cliente.phone.replace(/\\s+/g, '')}?text=Feliz cumpleaños 🎂 ${cliente.name} ${cliente.nombres}, recuerda que el que piensa positivo, ve lo invisible, siente lo intangible y logra lo imposible. Te desea la clínica Excelentemente 🤗`" 
                     target="_blank" 
                     class="btn btn-sm btn-success rounded-circle shadow-sm"
                     title="Enviar WhatsApp">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                  <span v-else class="text-muted small">Sin número</span>
                </td>
              </tr>
              <tr v-if="clientesCumple.length === 0">
                <td colspan="6" class="text-center text-muted py-4">No se encontraron cumpleaños en este mes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <modal-triaje v-if="data" :dataPatient="data" :profesionales="profesionales" ></modal-triaje>
    <modal-new-patient ></modal-new-patient>
		<modal-ver-triajes-viejos :triajes="dataTriajes"></modal-ver-triajes-viejos>
		<ModalVerHobbies :hobbies="hobbies" :id="queId" :misHobbies="misHobbies" ></ModalVerHobbies>
    <ModalArchivosTriaje :idPaciente="data?.id"></ModalArchivosTriaje>

  </main>
</template>

<script>

import ModalTriaje from './../recepcionista/components/pacientes/ModalTriaje.vue'
import ModalVerTriajesViejos from './../recepcionista/components/pacientes/ModalVerTriajesViejos.vue'
import ModalNewPatient from './../recepcionista/components/pacientes/ModalNewPatient.vue'
import ModalVerHobbies from './../recepcionista/components/pacientes/reportes/ModalVerHobbies.vue'
import ModalArchivosTriaje from './ModalArchivosTriaje.vue'
import moment from 'moment'

export default {
  name: 'HomePacientesInterno',

  data () {
    return {
      vistaActual: 'lista',
      fechaCumple: moment().format('YYYY-MM-DD'),
      clientesCumple: [],
      dataPatients: [],
      data: null,dataTriajes:null, queId:-1,
      busqueda: [],
      totalPatients:[], profesionales:[],
			hobbies:['pintura','dibujo', 'fotografía', 'tejido', 'costura', 'joyería', 'senderismo', 'acampar', 'jardinería', 'pesca', 'ciclismo', 'deportes', 'fútbol', 'basket', 'tenis', 'ajedrez', 'juegos de mesa', 'billar', 'música', 'tocar un instrumento', 'canto', 'composición musical', 'producción musical', 'gastronomía', 'cocina', 'recetas', 'horneado', 'postres', 'manualidades', 'origami', 'modelodo en arcilla', 'creación', 'natación', 'surf', 'kayac', 'buceo', 'esquí', 'tecnología', 'programación', 'robótica', 'computación', 'edición de videos', 'diseño gráfico', 'coleccionismo', 'monedas', 'vinilos', 'baile', 'danzas', 'escritura', 'periodismo', 'poesía', 'libros', 'lectura', 'cuentos', 'idiomas', 'viajes', 'exploración de lugares', 'fitnes', 'gym', 'yoga', 'pilates', 'entrenamiento', 'meditación', 'voluntariado', 'mascotas', 'animalista', 'astronomía', 'jardinería', 'plantas', 'huertos', 'paisajes', 'cine', 'series', 'novelas'], misHobbies:[],
    }
  },

  components: { ModalTriaje, ModalVerTriajesViejos, ModalNewPatient, ModalVerHobbies, ModalArchivosTriaje },

  props: {
    dataPatient: Object
  },

  methods: {

    updateFaults(id,faults){
      if(confirm('Estás seguro de agregar una falta a este usuario?')){
        this.axios.get(`/api/updateFaults/${id}/${faults}`)
          .then(res => {
            this.getPatients()
          })
        }
    },
    async getPatients () {
      this.busqueda = []
      await this.axios.get(`/api/getLast10Patients`)
      .then(res => { 
        this.dataPatients = res.data;
        this.busqueda = this.dataPatients;

        this.busqueda = [];
        this.dataPatients.forEach((el, index) => {
          //if (index < 5) {
            this.busqueda.push(el);
          //}
        })

      })
      .catch(err => {
        console.error(err)
      })
    },

    async searchPatients () {
      let valueInput = document.getElementById("searchNamePatient").value; 
      if(valueInput === ''){
        this.getPatients()
      }else{
        let coincidenceDni = []

				await this.axios.get(`/api/searchPatientByNameDni/${valueInput}`)
				.then(res => {
					console.log(res.data);
					this.totalPatients = res.data;

					coincidenceDni = this.totalPatients.filter(el => el.dni == valueInput)        

					if(coincidenceDni.length > 0){
						this.busqueda = coincidenceDni
					}else{
					const words = valueInput.split(' ')
					words.forEach((word)=>{
						if(/[0-9]/.test(word)){
							this.totalPatients = this.totalPatients.filter(el => el.dni != null && el.dni.matches(word) ? el : null)
							this.busqueda.push(...this.totalPatients)
						}
						this.totalPatients = this.totalPatients.filter(el => el.name.match(new RegExp(`${word}`,'ig')) ? el : null)
						console.log(this.totalPatients)
						this.busqueda.push(...this.totalPatients)
						//const coincidence = this.dataPatients.filter(el => el.name.match(new RegExp(`${word}`,'ig')).split(' ') ? el : null)
						//
					})        
					this.busqueda = this.totalPatients    
					}
				})
				.catch(err => {
					console.error(err)
				})
      }
    },

    dataProps (data) {
      this.data = data;
			this.nuevo = false;
    },
    lowerCase (text = '...') {
      return text.toLowerCase();
    },
		async listarprofesional(){
      await this.axios.get('/api/profesional')
      .then(response => {
        this.profesionales=response.data;
      })
    },
		verTriajesViejos(index){
			this.dataTriajes = this.busqueda[index].triajes;
		},
    toggleVista() {
      this.vistaActual = this.vistaActual === 'lista' ? 'cumpleaños' : 'lista';
      if (this.vistaActual === 'cumpleaños' && this.clientesCumple.length === 0) {
        this.cargarCumpleanos();
      }
    },
    async cargarCumpleanos() {
      await this.axios.get(`/api/listarCumpleanos/${this.fechaCumple}`)
        .then(response => {
          this.clientesCumple = response.data;
        })
        .catch(err => console.error(err));
    },
    cambiarFechaCumple() {
      this.cargarCumpleanos();
    },
    fechaLatam(fecha) {
      if (!fecha) return '';
      return moment(fecha).format('DD/MM/YYYY');
    },
    edad(fecha) {
      if (!fecha) return 0;
      let miEdad = moment(fecha);
      return moment().diff(miEdad, 'years');
    }
  },


  created () {
    this.getPatients();
		this.listarprofesional();
		this.hobbies.sort();
  }
}
</script>
