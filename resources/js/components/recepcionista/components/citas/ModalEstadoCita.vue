<template>
  <div class="modal fade" id="modalEstado" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
      <div class="modal-content border-0 shadow-lg" style="border-radius: 20px; overflow: hidden;">
        <div class="modal-header border-0 pb-0 pt-4 px-4 d-flex align-items-start justify-content-between">
          <div class="d-flex align-items-center">
            <div class="icon-header-container mr-3">
              <i class="fas fa-info-circle text-primary h4 mb-0"></i>
            </div>
            <div>
              <h5 class="modal-title font-weight-bold text-dark mb-1">Estado de Cita</h5>
              <div class="d-flex gap-2 mt-1">
                <span class="badge-status status-badge-secondary" v-if="dataCit">
                  <i class="fas fa-hashtag mr-1"></i> {{ dataCit.id }}
                </span>
              </div>
            </div>
          </div>
          <button type="button" id="cerrModalEstado" class="btn-close-custom" data-bs-dismiss="modal" aria-label="Close">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="modal-body px-4 pt-4" v-if="dataCit">
          <form action="" @submit.prevent>
            <div class="form-group mb-3">
							<label class="section-label d-block mb-1">Nuevo estado</label>
							<select class="form-select custom-select status-appointment" name="status" id="status" v-model="dataCit.status">
								<option value="1">Sin Confirmar</option>
								<option value="2">Confirmar cita</option>
								<option value="3">Anular cita</option>
							</select>
            </div>
            
            <div class="form-group mb-3" v-if="dataCit.status==3">
							<label class="section-label d-block mb-1">Motivo de anulación</label>
							<input type="text" class="form-control custom-input" v-model="motivo" placeholder="Especifique el motivo...">
            </div>
          </form>
        </div>

        <div class="modal-footer border-0 px-4 pb-4 pt-2 d-flex justify-content-center">
          <button @click="update()" type="button" class="btn btn-action btn-primary w-100" :disabled="isProcessing">
            <span v-if="isProcessing">
              <i class="fas fa-spinner fa-spin mr-2"></i> Procesando...
            </span>
            <span v-else>
              <i class="fas fa-redo-alt mr-2"></i> Actualizar Estado
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import alertify from 'alertifyjs';
  export default {
    name: "modal_estado",
    data() {
      return{
        data: null, motivo : '', isProcessing: false
      }
    },

    methods:{
      update(){
				if(document.querySelector(".status-appointment").value == 3 && this.motivo==''){
					alertify.notify('<i class="fa-solid fa-skull-crossbones"></i> Debe ingresar un motivo para anular la cita' , 'danger', 10);
				}else{
          if (this.isProcessing) return;
          this.isProcessing = true;
          
					if (document.querySelector(".status-appointment").value == 3) {
						this.data.schedule_id = null;
						this.updateStatuAppointment()
					} else {
						this.updateStatuAppointment()
					}
				}
				
      },

      async updateStatuAppointment () {
        console.log('id_appointment',this.dataCit.id)
        await this.axios.post(`/api/updateStatus/${this.dataCit.id}/${this.dataCit.status}`,{dataCit: this.dataCit, motivo: this.motivo, idUsuario:this.idUsuario, origen:1 })
        .then(res => {
          console.log("actualizado",res.data)
          this.closeModal()
          this.$swal('Cita editada con éxito')
          //this.$parent.searchHistoria()
          this.motivo=''
        })
        .catch(err => {
            console.error(err)
            this.$swal({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un problema al actualizar la cita. Por favor, intente de nuevo.'
            })
        })
        .finally(() => {
          this.isProcessing = false;
        });
      },


      closeModal() {
        document.getElementById('cerrModalEstado').click();
      },
    },
  
    props:{
      dataCit: Object, idUsuario:Number
    },  

    computed: {
      updateStatu () {
        return this.data = this.dataCit
      }
    },

    created () {
      this.updateStatu
    }
  }
</script>

  
