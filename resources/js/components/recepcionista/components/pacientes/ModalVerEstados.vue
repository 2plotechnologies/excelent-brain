<template>
	<div class="modal fade" id="modalVerEstados" tabindex="-1" aria-labelledby="modalEvolution" aria-hidden="true">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-content border-0 shadow-lg" style="border-radius: 20px; overflow: hidden;">
				<!-- Header -->
				<div class="modal-header border-0 pb-0 pt-4 px-4 d-flex align-items-start justify-content-between">
					<div class="d-flex align-items-center">
						<div class="icon-header-container mr-3">
							<i class="fas fa-traffic-light text-primary h4 mb-0"></i>
						</div>
						<div>
							<h5 class="modal-title font-weight-bold text-dark mb-1">Estado del paciente</h5>
							<p class="small text-muted mb-0">Paciente: <span class="font-weight-bold text-primary">{{ dataPatient.name }}</span></p>
						</div>
					</div>
					<button type="button" class="btn-close-custom" data-bs-dismiss="modal" aria-label="Close">
						<i class="fas fa-times"></i>
					</button>
				</div>

				<div class="modal-body px-4 pt-4">
					<!-- Update Status Card -->
					<div class="card border-0 shadow-sm rounded-4 mb-4" style="background: #f8f9fc; border: 1px solid #f1f3f9!important;">
						<div class="card-body p-4">
							<div class="row align-items-center">
								<div class="col-md-4 mb-3 mb-md-0">
									<label class="small font-weight-bold text-muted mb-2">CALIFICACIÓN</label>
									<select class="form-select rounded-pill border-0 shadow-sm px-3 text-capitalize" v-model="semaforo.codigo" style="height: 45px;">
										<option v-for="estado in estados" :key="estado.id" :value="estado.id">{{estado.valor}}</option>
									</select>
								</div>
								<div class="col-md-5 mb-3 mb-md-0">
									<label class="small font-weight-bold text-muted mb-2">DETALLES / OBSERVACIONES</label>
									<input type="text" class="form-control rounded-pill border-0 shadow-sm px-3" placeholder="Ingresa detalles..." v-model="semaforo.observaciones" style="height: 45px;">
								</div>
								<div class="col-md-3 mt-md-4">
									<button class="btn btn-primary w-100 rounded-pill font-weight-bold shadow-sm" @click="enviarSemaforo()" style="height: 45px;">
										<i class="fas fa-paper-plane mr-1"></i> Actualizar
									</button>
								</div>
							</div>
							<div class="mt-3 bg-white p-2 px-3 rounded-3 border-dashed small" style="border: 1px dashed #dee2e6!important;">
								<span class="text-muted">Detalle del estado seleccionado:</span> <span class="font-weight-bold text-dark">{{ verDetalle(semaforo.codigo) }}</span>
							</div>
						</div>
					</div>

					<!-- History List -->
					<div class="table-responsive rounded-4 border overflow-hidden">
						<table class="table table-hover mb-0">
							<thead style="background: #f8f9fc;">
								<tr>
									<th class="border-0 small font-weight-bold text-muted px-4 py-3" style="width: 60px;">N°</th>
									<th class="border-0 small font-weight-bold text-muted px-4 py-3">FECHA</th>
									<th class="border-0 small font-weight-bold text-muted px-4 py-3">ESTADO</th>
									<th class="border-0 small font-weight-bold text-muted px-4 py-3">OBSERVACIONES</th>
									<th class="border-0 small font-weight-bold text-muted px-4 py-3 text-center" style="width: 80px;">@</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(semaf, index) in dataPatient.semaforo" :key="index">
									<td class="px-4 py-3 align-middle text-muted small">{{ index+1 }}</td>
									<td class="px-4 py-3 align-middle small">{{ fechaLatam(semaf.registro) }}</td>
									<td class="px-4 py-3 align-middle">
										<span :class="badgeColor(semaf.codigo)" class="badge-custom">
											{{ queCodigo(semaf.codigo) }}
										</span>
									</td>
									<td class="px-4 py-3 align-middle small text-capitalize text-muted">{{ semaf.observaciones }}</td>
									<td class="px-4 py-3 align-middle text-center">
										<button class="btn btn-soft-danger btn-sm rounded-circle shadow-none" @click="eliminarEstado(semaf.id, index)" title="Eliminar">
											<i class="fas fa-trash-alt"></i>
										</button>
									</td>
								</tr>
								<tr v-if="!dataPatient.semaforo || dataPatient.semaforo.length === 0">
									<td colspan="5" class="text-center py-5">
										<div class="py-2">
											<i class="fas fa-history fa-3x text-light mb-3"></i>
											<p class="text-muted mb-0">No hay historial de estados registrado</p>
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
import moment from 'moment';
export default {
	name: 'ModalVerEstados',
	props: {
		dataPatient: Object, estados:[]
	},
	data(){
		return {
			semaforo:{ codigo: 1, observaciones:'' }
		}
	},
	methods: {
		fechaLatam(fecha){
			return moment(fecha).format('DD/MM/YYYY');
		},
		enviarSemaforo(){
			this.axios.post('/api/insertarSemaforo',{
				id: this.dataPatient.id,
				semaforo: this.semaforo
			}).then(response=>{
				if(response.data.msg =='insertado con éxito'){
					this.dataPatient.semaforo.unshift( {registro: moment(), codigo: this.semaforo.codigo, observaciones: this.semaforo.observaciones});
				}
				this.semaforo.codigo = 1
				this.semaforo.observaciones=''
			})
		},
		queCodigo(tipo){
			let est = this.estados.find(z=> z.id == tipo );
			return est ? est.valor : 'Indefinido';
		},
		badgeColor(tipo) {
			// Suponiendo que 1=Verde, 2=Amarillo, 3=Rojo (o similar)
			if(tipo == 1) return 'badge-success-soft';
			if(tipo == 2) return 'badge-warning-soft';
			if(tipo == 3) return 'badge-danger-soft';
			return 'badge-secondary-soft';
		},
		eliminarEstado(id, index){
			this.$swal.fire({
				title: '¿Deseas eliminar el estado?',
				text: "Esta acción no se puede deshacer",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Sí, eliminar',
				cancelButtonText: 'Cancelar'
			}).then((result) => {
				if (result.isConfirmed) {
					this.axios.post('/api/eliminarSemaforo/'+id)
					.then(response =>{
						if(response.data.msg=='eliminado'){
							this.dataPatient.semaforo.splice(index, 1)
							this.$swal.fire('Eliminado', 'El registro ha sido eliminado.', 'success')
						}
					})
				}
			})
		},
	},
	computed:{
		verDetalle(){
			return (id)=>{
				let est = this.estados.find(x=> x.id == id);
				return est ? est.detalle : 'Sin detalle';
			}
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

.badge-custom {
	padding: 4px 12px;
	border-radius: 50px;
	font-size: 0.75rem;
	font-weight: 700;
	text-transform: uppercase;
}

.badge-success-soft { background: #e7fcf3; color: #0ca678; border: 1px solid #c3fae8; }
.badge-warning-soft { background: #fff9db; color: #f08c00; border: 1px solid #fff3bf; }
.badge-danger-soft { background: #fff5f5; color: #e03131; border: 1px solid #ffe3e3; }
.badge-secondary-soft { background: #f1f3f5; color: #495057; border: 1px solid #e9ecef; }

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
.border-dashed { border-style: dashed!important; }
</style>