<template>
	<main class="p-4" style="background-color: #f8f9fc; min-height: 100vh;">
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
			<div>
				<h4 class="m-0 font-weight-bold text-dark"><i class="fas fa-file-medical text-primary mr-2"></i> Historias Clínicas</h4>
				<small class="text-muted">Gestión de pacientes e historiales</small>
			</div>
		</div>
		
		<div class="card border-0 shadow-sm mb-4" style="border-radius: 10px;">
			<div class="card-body p-4">
				<div class="d-sm-flex align-items-center justify-content-between flex-wrap mb-4 gap-10">
					<form class="d-sm-inline-block form-inline form-search-historia w-100" style="max-width: 400px;" @submit.prevent>
						<div class="input-group shadow-sm" style="border-radius: 8px; overflow: hidden;">
							<span class="input-group-text bg-white border-0 text-primary"><i class="fas fa-search"></i></span>
							<input type="text" id="searchHistoriaProfesional" class="form-control border-0 py-2"
								placeholder="Buscar paciente por nombre..." aria-label="Search" aria-describedby="basic-addon2" @keyup.enter="searchHistoria()">
							<button class="btn btn-primary px-3 font-weight-bold" type="button" @click="searchHistoria()">
								Buscar
							</button>
						</div>
					</form>
					<div class="d-flex align-items-center mt-3 mt-sm-0">
						<ul class="nav nav-pills" id="pills-tab" role="tablist">
							<li class="nav-item" role="presentation">
								<button class="btn btn-sm btn-light shadow-sm text-muted font-weight-bold rounded-pill px-3 order-active" id="pills-home-tab" data-bs-toggle="pill"
									@click="getPatient()">
									<i class="fa-solid fa-eraser mr-1"></i> Limpiar búsqueda
								</button>
							</li>
							<!-- Botones de orden ocultos -->
						</ul>
					</div>
				</div>

				<h6 class="font-weight-bold text-dark mb-3 text-uppercase small">Mis pacientes asignados</h6>

		<div class="historia-card mt-2">
			<div class="card h-100 border-0 shadow-sm" v-for="(historia, index) in busqueda" :key="index" style="border-radius: 10px; overflow: hidden;" :style="historia.discharge != 1 ? 'border-top: 4px solid #f6c23e !important;' : 'border-top: 4px solid #1cc88a !important;'">
				<div class="card-body p-4 d-flex flex-column">
					<div class="d-flex justify-content-between align-items-start mb-3">
						<h6 class="m-0 font-weight-bold text-dark text-capitalize" style="line-height: 1.4;">{{ historia.name ? lowerCase(historia.name) +', '+ lowerCase(historia.nombres) : '...' }}</h6>
						<span class="badge" :class="historia.discharge != 1 ? 'bg-warning-light text-dark' : 'bg-success-light text-success'">ID: {{ historia.id }}</span>
					</div>
					
					<div class="historia-info">
						<div class="mb-3">
							<p v-if="historia.alta_psicologica == 1 && historia.alta_psiquiatrica == 1" class="text-success small fw-bold mb-1"><i class="fas fa-check-circle mr-1"></i> Alta Psicológica y Psiquiátrica</p>
							<p v-else-if="historia.alta_psicologica == 1" class="text-info small fw-bold mb-1"><i class="fas fa-check-circle mr-1"></i> Alta Psicológica</p>
							<p v-else-if="historia.alta_psiquiatrica == 1" class="text-success small fw-bold mb-1"><i class="fas fa-check-circle mr-1"></i> Alta Psiquiátrica</p>
							
							<p v-if="!historia.initial_psychological_history && dataUser.profession === 'Psicólogo'" class="text-danger small mb-1"><i class="fas fa-exclamation-triangle mr-1"></i> Sin historia inicial de psicología</p>
							<p v-if="!historia.initial_psychiatric_history && dataUser.profession === 'Psiquiatra'" class="text-danger small mb-1"><i class="fas fa-exclamation-triangle mr-1"></i> Sin historia inicial de psiquiatra</p>
						</div>

						<div class="w-100 d-flex align-items-center flex-wrap gap-2 mt-auto pt-3 border-top">
							<a class="btn btn-light btn-sm text-muted cursor-disabled rounded-circle shadow-sm" style="width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;"
								title="Sin historia inicial de psicologia" v-if="!historia.initial_psychological_history
									&& dataUser.profession === 'Psicólogo'">
								<i class="fa-solid fa-user-slash"></i>
							</a>
							<a class="btn btn-light btn-sm text-muted cursor-disabled rounded-circle shadow-sm" style="width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;"
								title="Sin historia inicial de psiquiatra" v-else-if="!historia.initial_psychiatric_history
									&& dataUser.profession === 'Psiquiatra'">
								<i class="fa-solid fa-user-slash"></i>
							</a>
							<router-link class="btn btn-primary btn-sm rounded-circle shadow-sm" style="width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;" :to="`evoluciones/${historia.id}`" title="Ver evoluciones"
								v-else>
								<i class="fa-solid fa-user-doctor"></i>
							</router-link>
							
							<router-link class="btn btn-success btn-sm rounded-circle shadow-sm" style="width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;" :to="`evoluciones/${historia.id}`" title="Ver evoluciones"
								v-if="dataUser.id==5 || dataUser.id==18">
								<i class="fa-solid fa-user-doctor"></i>
							</router-link>

							<a v-if="dataUser.id==5 || dataUser.id==18" :href="`/api/pdfEvolution/thorough/${historia.id}?token=${$token}`" class="btn btn-danger btn-sm rounded-circle shadow-sm" style="width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;" title="Generar PDF para evoluciones" target="_blank"> <i class="fas fa-file-pdf"></i> </a>
							<a v-else :href="`/api/pdfEvolution/restricted/${historia.id}?token=${$token}`" class="btn btn-danger btn-sm rounded-circle shadow-sm" style="width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;" title="Generar PDF para evoluciones" target="_blank"> <i class="fas fa-file-pdf"></i> </a>
							
							<a v-if="dataUser.profession!='Psicólogo'" :href="`/profesional/recetas/${historia.id}`" class="btn btn-info btn-sm text-white rounded-circle shadow-sm" style="width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;" title="Generar receta"><i class="fa-solid fa-vial"></i></a>
							
							<button 
								@click="prepararPaciente(historia)" class="btn btn-warning btn-sm text-dark rounded-circle shadow-sm" style="width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;" title="Agregar triaje" >
								<i class="fa-solid fa-shield-heart"></i>
							</button>
							<button 
								@click="datosPaciente = historia" class="btn btn-secondary btn-sm rounded-circle shadow-sm" style="width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;" title="Ver autotriaje" data-bs-toggle="modal" data-bs-target="#modalVerAutoTriaje">
								<i class="fa-solid fa-clipboard-list"></i>
							</button>
							<!--Cargar mensajes del chat de recepcionista a profesional.-->
							<a 
								class="btn btn-success btn-sm rounded-circle shadow-sm" style="width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;"
								title="Ver chat"
								@click="abrirChat(historia)"
								>
								<i class="fa-solid fa-comment-dots"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
			</div>
		</div>

    <modal-triaje v-if="datosPaciente" :dataPatient="datosPaciente" :profesionales="profesionales" ></modal-triaje>
	<modal-chat :patient="datosPaciente"></modal-chat>
	<modal-ver-auto-triaje :patient-id="datosPaciente ? datosPaciente.id : null"></modal-ver-auto-triaje>

	</main>
</template>

<!-- Promise.all([
    this.getHistoriesPsychiatric(),
    this.getHistoriesPsychological(),
])
.then(values => {
    // console.log(values)
})
.catch(err => {
    console.log(err)
}) -->

<script>
import StorieModal from './StorieModal.vue'
import ModalTriaje from '../../../recepcionista/components/pacientes/ModalTriaje.vue';
import ModalChat from '../../../recepcionista/components/pacientes/ModalChat.vue';
import ModalVerAutoTriaje from '../../../acceso_publico/ModalVerAutoTriaje.vue';

export default {
	name: 'home-stories',

	data() {
		return {
			historias: {},
			busqueda: null, datosPaciente:null, profesionales:null
		}
	},

	props: {
		dataUser: Object
	},

	components: { StorieModal, ModalTriaje, ModalChat, ModalVerAutoTriaje },

	methods: {
		prepararPaciente(paciente){
			this.datosPaciente = paciente
			this.profesionales = [{name: this.$attrs.nombreUser, id: this.$attrs.idUser}]
			
			$('#modalTriaje').modal('show')
		},
		async getPatient() {
			//this.axios.get('/api/patient/')
			this.axios.get('/api/patientMine/'+this.dataUser.id)
			.then(res => { //console.log(res.data)
				this.historias = res.data
				this.busqueda = this.historias
				//this.busqueda = this.busqueda.slice(0, 6)
			})
			.catch(err => {
				console.log(err)
			})
		},

		searchHistoria() {
			/* let $valueInput = document.getElementById('searchHistoriaProfesional')

			$valueInput.value === ''
				? this.getPatient()
				: this.busqueda = this.historias.filter((el, index) => el.name.match(new RegExp(`${$valueInput.value}`, 'ig')) ? el : null)

			this.busqueda = this.busqueda.slice(0, 6) */
			if(this.dataUser.id==5)
				console.log('super');
			if(document.getElementById('searchHistoriaProfesional').value!=''){
				this.axios.get('/api/patientMineText/'+ document.getElementById('searchHistoriaProfesional').value)
				.then(res => { console.log(res.data)
					this.historias = res.data
					this.busqueda = this.historias
					//this.busqueda = this.busqueda.slice(0, 6)
				})
				.catch(err => {
					console.log(err)
				})
			}
		},

		abrirChat(paciente) {
			this.datosPaciente = paciente;

			this.$nextTick(() => {
				const modal = new bootstrap.Modal(document.getElementById('modalChat'));
				modal.show();
			});
		},

		lowerCase(text) {
			return text.toLowerCase();
		},

		ordenarAsc() {
			if (!this.busqueda) return;

			if (event.target.dataset.orden == "true") return;

			document.querySelector(".order-active").dataset.orden = "false"
			document.querySelector(".order-active").classList.remove("btn-warning")
			document.querySelector(".order-active").classList.remove("order-active")

			event.target.dataset.orden = "true"
			event.target.classList.add("order-active")
			event.target.classList.add("btn-warning")

			this.asc
		},

		ordenarDesc() {
			if (!this.busqueda) return;

			if (event.target.dataset.orden == "true") return;

			document.querySelector(".order-active").dataset.orden = "false"
			document.querySelector(".order-active").classList.remove("btn-warning")
			document.querySelector(".order-active").classList.remove("order-active")

			event.target.dataset.orden = "true"
			event.target.classList.add("order-active")
			event.target.classList.add("btn-warning")

			this.desc

			// if (event.target.dataset.orden == "true") {
			// }
		}
	},

	computed: {
		asc() {
			return this.busqueda = this.busqueda.reverse();
		},

		desc() {
			return this.busqueda = this.busqueda.reverse();
		}
	},

	mounted() {
		this.getPatient()
	}
}
</script>

<style>
.historia-card {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 25px;
	padding: 15px;
}

.historia-info {
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.text-capitalize {
	text-transform: lowercase !important;
	text-transform: capitalize !important;
}

.gap-10 {
	gap: 10px;
	;
}

.form-search-historia {
	flex: 1 0 auto;
}

.opacity-50 {
	opacity: .5;
}

.cursor-disabled {
	cursor: not-allowed !important;
}

.bg-warning-light {
	background-color: #fdf3d8;
}
.bg-success-light {
	background-color: #e3fbed;
}
</style>
