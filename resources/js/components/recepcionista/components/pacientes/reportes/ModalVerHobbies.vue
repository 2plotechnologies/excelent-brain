<template>
	<div class="modal fade" id="modalVerHobbies" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content border-0 shadow-lg" style="border-radius: 20px; overflow: hidden;">
				<!-- Header -->
				<div class="modal-header border-0 pb-0 pt-4 px-4 d-flex align-items-start justify-content-between">
					<div class="d-flex align-items-center">
						<div class="icon-header-container mr-3">
							<i class="fas fa-heart text-primary h4 mb-0"></i>
						</div>
						<div>
							<h5 class="modal-title font-weight-bold text-dark mb-1">Hobbies del paciente</h5>
							<p class="small text-muted mb-0">Gestiona las actividades favoritas del paciente</p>
						</div>
					</div>
					<button type="button" class="btn-close-custom" data-bs-dismiss="modal" aria-label="Close">
						<i class="fas fa-times"></i>
					</button>
				</div>

				<div class="modal-body px-4 pt-4">
					<!-- Input Section -->
					<div class="card border-0 shadow-sm rounded-4 mb-4" style="background: #f8f9fc; border: 1px solid #f1f3f9!important;">
						<div class="card-body p-3">
							<div class="row align-items-center">
								<div class="col-sm-8 mb-2 mb-sm-0">
									<VSelect addClass="text-capitalize modern-vselect" :searchable="true" searchPlaceholder="Buscar hobbies" defaultTitle="Selecciona un hobbie" searchNotFound="No hay resultados" v-model="selected" :options="actividades" />
								</div>
								<div class="col-sm-4">
									<button class="btn btn-primary w-100 rounded-pill font-weight-bold shadow-sm" @click="addHobbie()">
										<i class="fas fa-plus mr-1"></i> Agregar
									</button>
								</div>
							</div>
						</div>
					</div>

					<!-- List Section -->
					<div class="table-responsive rounded-4 border overflow-hidden">
						<table class="table table-hover mb-0">
							<thead style="background: #f8f9fc;">
								<tr>
									<th class="border-0 small font-weight-bold text-muted px-4 py-3" style="width: 60px;">N°</th>
									<th class="border-0 small font-weight-bold text-muted px-4 py-3">HOBBIE</th>
									<th class="border-0 small font-weight-bold text-muted px-4 py-3 text-center" style="width: 80px;">@</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(hobbie, index) in misHobbies" :key="index">
									<td class="px-4 py-3 align-middle text-muted small">{{ index+1 }}</td>
									<td class="px-4 py-3 align-middle font-weight-bold text-dark text-capitalize">{{ hobbies[hobbie] }}</td>
									<td class="px-4 py-3 align-middle text-center">
										<button class="btn btn-soft-danger btn-sm rounded-circle shadow-none" @click="borrarHobbie(index)" title="Eliminar">
											<i class="fas fa-trash-alt"></i>
										</button>
									</td>
								</tr>
								<tr v-if="misHobbies.length === 0">
									<td colspan="3" class="text-center py-5">
										<div class="py-2">
											<i class="fas fa-layer-group fa-3x text-light mb-3"></i>
											<p class="text-muted mb-0">No existen hobbies registrados</p>
										</div>
									</td>
								</tr>
							</tbody> 
						</table>
					</div>
				</div>
				<div class="modal-footer border-0 pb-4 px-4">
					<button type="button" class="btn btn-light rounded-pill px-4 font-weight-bold" data-bs-dismiss="modal">Cerrar</button>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
import VSelect from "vue-select-picker-bootstrap";

export default{
	name: 'ModalVerHobbies',
	props:['hobbies','misHobbies', 'id'],
	components: { VSelect },
	data(){return { actividades:[],
		selected: {value: null},
	}},
	mounted(){
		this.recargarLista()
	},
	methods:{
		async addHobbie(){
			if(this.selected.value!=null){
				this.misHobbies.push( this.selected.value );	 //document.getElementById('sltHobbie').value
				this.guardarJSON();
			}
		},
		 borrarHobbie(index){
			this.misHobbies.splice(index,1);
			this.guardarJSON();
		},
		async guardarJSON(){
			await this.axios.post('/api/addHobbie/'+this.id, {misHobbies: this.misHobbies})
			.then(res=> console.log(res.data))
		},
		capitalizarPrimeraLetra(palabra) {
			if (palabra.length === 0) return "";
			palabra = palabra.toLowerCase();
			palabra = palabra.charAt(0).toUpperCase() + palabra.slice(1);
			return palabra;
		},
		recargarLista(){
			let temporal = this.hobbies;
			temporal.sort();
			temporal.forEach((hob, index)=>{
				this.actividades.push({ value: index, text: this.capitalizarPrimeraLetra(hob) })
			})
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

.btn-soft-danger {
	background: #fff5f5;
	color: #e03131;
	border: none;
	width: 32px;
	height: 32px;
	transition: all 0.2s;
}
.btn-soft-danger:hover {
	background: #ffc9c9;
	color: #c92a2a;
}

.modern-vselect :deep(.v-select-toggle) {
	border-radius: 50px!important;
	border: 1px solid #dee2e6!important;
	padding: 8px 20px!important;
	background: #fff!important;
	font-size: 14px!important;
}

.table th {
	letter-spacing: 0.5px;
	border-bottom: 1px solid #f1f3f9!important;
}

.table tr {
	transition: background 0.2s;
}

.table tr:hover {
	background: #fcfdfe!important;
}

.mr-3 { margin-right: 1rem; }
.mr-1 { margin-right: 0.25rem; }
.font-weight-bold { font-weight: 700!important; }
</style>