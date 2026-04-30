<template>
	<div class="modal fade" id="pagoModal" ref="pagoModal" tabindex="-1" role="dialog" aria-hidden="true" >
		<div class="modal-dialog modal-dialog-centered" role="document" >
			<div class="modal-content border-0 shadow-lg" style="border-radius: 20px; overflow: hidden;">
				<div class="modal-header border-0 pb-0 pt-4 px-4 d-flex align-items-start justify-content-between">
          <div class="d-flex align-items-center">
            <div class="icon-header-container mr-3">
              <i class="fas fa-hand-holding-usd text-primary h4 mb-0"></i>
            </div>
            <div>
              <h5 class="modal-title font-weight-bold text-dark mb-1" id="exampleModalLabel">Pago de Cita</h5>
              <div class="d-flex gap-2 mt-1">
                <span class="badge-status status-badge-info" v-if="dataCita">
                  <i class="fas fa-receipt mr-1"></i> #{{ dataCita.id }}
                </span>
              </div>
            </div>
          </div>
					<button type="button" id="cerrModal" class="btn-close-custom" data-bs-dismiss="modal" aria-label="Close">
						<i class="fas fa-times"></i>
					</button>
				</div>

				<div class="modal-body px-4 pt-4" v-if="dataCita">
					<form action="" @submit.prevent>
            <!-- Info Card -->
            <div class="patient-card p-3 mb-4">
              <div class="d-flex align-items-center mb-2">
                <div class="patient-avatar mr-3">
                  <i class="fas fa-user text-primary"></i>
                </div>
                <div class="overflow-hidden">
                  <div class="patient-name font-weight-bold text-capitalize text-truncate">{{(dataCita.patient?.name ?? '').toLowerCase()}} {{(dataCita.patient?.nombres ?? '').toLowerCase()}}</div>
                  <div class="patient-dni text-muted small text-truncate">Cuenta de la persona</div>
                </div>
              </div>
              <hr class="my-2" style="opacity: 0.1;">
              <div class="d-flex justify-content-between align-items-center mt-2">
                <span class="text-muted small font-weight-bold text-uppercase">Precio a cobrar</span>
                <span class="font-weight-bold text-dark">S/ {{ parseFloat(dataCita.payment.price).toFixed(2) }}</span>
              </div>
              <div v-if="dataCita.payment.rebaja>0" class="d-flex justify-content-between align-items-center mt-1">
                <span class="text-muted small font-weight-bold text-uppercase">Rebajado</span>
                <span class="font-weight-bold text-success">S/ {{ parseFloat(dataCita.payment.rebaja).toFixed(2) }}</span>
              </div>
              <div v-if="dataCita.payment.adelanto>0" class="d-flex justify-content-between align-items-center mt-1">
                <span class="text-muted small font-weight-bold text-uppercase">Adelanto</span>
                <span class="font-weight-bold text-warning">S/ {{ parseFloat(dataCita.payment.adelanto).toFixed(2) }}</span>
              </div>
              <div v-if="dataCita.payment.razonAdelanto" class="text-muted small mt-2">
                <i class="fas fa-info-circle mr-1"></i> Obs. o Fecha: {{ dataCita.payment.razonAdelanto }}
              </div>
            </div>

            <!-- Form Elements -->
            <div class="form-group mb-3" v-if="dataCita.byDoctor==1">
              <label class="section-label d-block mb-1">Aplicar rebaja (S/)</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-light border-0"><i class="fas fa-minus-circle text-muted"></i></span>
                </div>
                <input type="number" class="form-control custom-input" min="0" :max="maximo" id="txtrebajaDoctor" v-model="caso.rebaja" @keyup="agregarrebaja()">
              </div>
              <small class="text-muted mt-1 d-block">Máximo: S/ {{(maximo).toFixed(2)}}</small>
            </div>
            
            <div class="form-group mb-3">
                <label class="section-label d-block mb-1">Estado de pago</label>
                <select v-if="caso.pago==1 || caso.pago==3" class="form-select custom-select" name="pay_status" id="pay_status" v-model="caso.pago" @change="caso.monto_adelanto=0">
                  <option value="1">Sin pagar</option>
                  <option value="3">Adelanto</option>
                  <option value="2">Pagado</option>
                </select>
                <div v-else class="p-2 bg-light rounded text-success font-weight-bold">
                  <i class="fas fa-check-circle mr-1"></i> Pagado
                </div>
            </div>                                                      
            
            <div class="form-group mb-3" v-if="caso.pago==3">
              <label class="section-label d-block mb-1">Monto de adelanto</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-light border-0">S/</span>
                </div>
                <input type="text" class="form-control custom-input" v-model="caso.monto_adelanto">									
              </div>
            </div>
            
            <div class="form-group mb-3">
                <label class="section-label d-block mb-1">Método de pago</label>
                <select class="form-select custom-select" id="pay_type" required name="pay_type" v-model="caso.moneda">
                  <option v-for="moneda in monedas" :value="moneda.id" :key="moneda.id">{{moneda.tipo}}</option>
                </select>
            </div>
            
            <div class="form-group mb-3" v-if="caso.moneda!=1">
              <label class="section-label d-block mb-1">N° Comprobante de pago</label>
              <input type="text" class="form-control custom-input" v-model="caso.comprobante">
            </div>
            
            <div class="form-group mb-3">
                  <label class="section-label d-block mb-1">Observación</label>
                  <textarea class="form-control custom-input" name="observation" id="observation" cols="10" rows="2" v-model="dataCita.payment.observation" placeholder="Opcional..."></textarea>
                  <small class="text-muted mt-1 d-block">{{ pedirObservaciones }}</small>
            </div>
					</form>
				</div>

				<div class="modal-footer border-0 px-4 pb-4 pt-2 d-flex justify-content-center gap-2" v-if="dataCita">
					<button v-if="dataCita.payment.pay_status==1" @click="update()" type="button" class="btn btn-action btn-primary w-100 mb-2">
            <i class="fas fa-save mr-2"></i> Guardar pago
          </button>
					<a target="_blank" :href="`/api/pdfCupon/${dataCita.id}?token=${token}`" v-if="dataCita.payment.pay_status != 1" class="btn btn-action btn-success w-100">
            <i class="fas fa-file-invoice-dollar mr-2"></i> Ver Cupón
          </a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment'
	export default {
		name: "modal_pago",
		
		data() {
			return{
				dataCita: null,
				caso: {pago:1, moneda:1, comprobante:'', continuo: 1, user_id:-1, rebaja:0, motivoRebaja:''}, maximo:15, monedas:[], neto:0, monto_adelanto:0
			}
		},
		props:{
			cita: Object, idUsuario:null, idSede:null
		},
		mounted() {
			this.axios.get("/api/listarMonedas")
			.then(resp => this.monedas = resp.data)
		},
		methods:{
			async update() {
				await this.axios.put(`/api/pagarCita/${this.dataCita.id}`, {dataCita: this.dataCita, caso: this.caso, idSede:this.idSede})
				.then(res => {
					//console.log(res.data)
					this.dataCita.payment.pay_status = this.caso.pago;
					this.closeModal()
					//this.$swal('Pago actualizado con éxito')
					if( this.caso.pago ==2){
						this.$swal.fire({
							title: 'Pago actualizado con éxito',
							icon: 'info',
							showCancelButton: true,
							confirmButtonText:
								`<span>Ver Cupón</span>`,
							cancelButtonText:
								'Salir'
						}).then(result=>{
							if(result.isConfirmed){
								this.abrirCupon();
							}
						})
					}else{
						this.$swal.fire({
							title: 'Pago actualizado con éxito',
							icon: 'info',
							showCancelButton: true,
							cancelButtonText:
								'Salir'
						})
					}
					if(this.caso.pago == '3' || this.caso.pago==3){
						this.caso.pago = 1
						this.dataCita.payment.pay_status = this.caso.pago
						this.dataCita.payment.adelanto = parseFloat(this.dataCita.payment.adelanto || 0) + parseFloat(this.caso.monto_adelanto);
						this.dataCita.payment.price = parseFloat(this.dataCita.payment.price) - parseFloat(this.caso.monto_adelanto);
						this.$emit('actualizarAdelanto', this.caso.monto_adelanto, this.dataCita.id)
					}
				})
				.catch(err => {
					console.error(err)
				})
			},
			abrirCupon(){
				window.open(`/api/pdfCupon/${this.dataCita.id}?token=${localStorage.getItem('token')}`, '_blank');
			},
			closeModal() {
				document.getElementById('cerrModal').click();
			},
			pagoModal(data){
				console.log('pago modal');
			},
			modalDePago(){
				console.log('algo');
			},
			agregarrebaja(){
				if(this.caso.rebaja<0){
					this.caso.rebaja=0
					this.dataCita.payment.price = this.neto
					this.caso.motivoRebaja=''
				}
				else if(this.caso.rebaja !='' || this.caso.rebaja>0){
					if(this.caso.rebaja>this.maximo) this.caso.rebaja = this.maximo
					this.dataCita.payment.price = this.neto -this.caso.rebaja
					this.caso.motivoRebaja= 'Se aplica rebaja porque proviene de programación de profesional'
				}
				else{
					this.dataCita.payment.price = this.neto
					this.caso.motivoRebaja=''
				}
			}
		},
		computed:{
			pedirObservaciones(){
				return  this.caso.motivoRebaja??''
			},
			token() {
					return localStorage.getItem('token');
			},
		},
	
		watch:{
			cita: function (){
				this.dataCita = this.cita;
				this.caso.pago = this.dataCita.payment?.pay_status;
				this.caso.moneda = this.dataCita.payment?.payment_method == undefined ? 1:this.dataCita.payment?.payment_method ;
				this.caso.continuo = this.dataCita.payment?.continuo;
				this.caso.user_id = this.idUsuario
				this.neto = parseFloat(this.dataCita.payment?.price) || 0
			}
		},
		created () {
			this.dataCita = this.cita;
			this.caso.pago = this.dataCita.payment?.pay_status;
			this.caso.moneda = this.dataCita.payment?.payment_method == undefined ? 1:this.dataCita?.payment.payment_method ;
			this.caso.continuo = this.dataCita.payment?.continuo;
			this.caso.user_id = this.idUsuario;
			this.neto = parseFloat(this.dataCita.payment?.price) || 0;
		},
	}
</script>

	
