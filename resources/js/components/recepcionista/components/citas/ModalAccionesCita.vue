<template>
  <div class="modal fade" id="modalAccionesCita" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-centered" role="document">
      <div class="modal-content" v-if="cita && cita.patient">
        <div class="modal-header border-0 pb-0">
          <h5 class="modal-title font-weight-bold text-success">
            <i class="fas fa-calendar-check mr-2"></i> Detalles de la Cita
          </h5>
          <button type="button" class="btn-close close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body pt-2">
          <div class="d-flex align-items-center mb-3">
            <div>
              <h5 class="mb-0 text-uppercase font-weight-bold">{{ cita.patient.name }} {{ cita.patient.nombres }}</h5>
              <div class="text-muted small mt-1">
                <i class="fas fa-clock mr-1"></i> {{ horaLatam2(cita.schedule ? cita.schedule.check_time : '') }} - {{ horaLatam2(cita.schedule ? cita.schedule.departure_date : '') }}
                <br>
                <i class="fas fa-user-md mr-1"></i> {{ cita.professional ? cita.professional.name : 'N/A' }}
              </div>
            </div>
          </div>

          <p v-if="cita.formato_nuevo=='0'" class="mb-1 text-muted"><strong>Tipo: </strong> 
              Viejo formato
          </p>
          <p v-else class="mb-3 text-dark mt-2 p-2 bg-light rounded" v-html="queServicio(cita)"></p>
          
          <hr/>
          <h6 class="font-weight-bold text-secondary mb-3 text-center">Selecciona una acción</h6>
          
          <div class="d-flex flex-wrap gap-2 justify-content-center pb-2">
            
            <!-- Modo: Presencial / Virtual -->
            <button @click="$emit('changeMode', cita.id, indiceElegido)" class="btn btn-sm text-white font-weight-bold" :class="cita.mode == 1 ? 'btn-info':'btn-primary'" title="Cambiar modo" data-bs-dismiss="modal">
              <i :class="cita.mode == 1 ? 'far fa-user' : 'fas fa-desktop'"></i> {{ cita.mode == 1 ? 'Presencial' : 'Virtual' }}
            </button>

            <!-- Pagos -->
            <button v-if="cita.payment" @click="$emit('openModal', cita, '#pagoModal', indiceElegido)" class="btn btn-sm shadow-sm font-weight-bold" :class='paymentClass(cita.payment)' data-bs-toggle="modal" data-bs-target="#pagoModal">
             <i class="fas fa-wallet"></i> {{ paymentLabel(cita.payment) }}
            </button>

            <!-- Estado -->
            <button @click="$emit('openModal', cita, '#modalEstado', indiceElegido)" class="btn btn-sm shadow-sm font-weight-bold" :class="statusClass(cita.status)" data-bs-toggle="modal" data-bs-target="#modalEstado">
              <i class="fas fa-info-circle"></i> {{ statusLabel(cita.status) }}
            </button>
            
            <!-- Intercambio -->
            <button @click="$emit('intercambiar', cita)" data-bs-target="#modalIntercambio" data-bs-toggle="modal" class="btn btn-sm btn-success text-white shadow-sm font-weight-bold" title="Intercambiar">
              <i class="fas fa-retweet"></i> Intercambiar
            </button>
            
            <!-- Reprogramar -->
            <button v-if="cita.status == 3" class="btn btn-sm btn-danger text-white shadow-sm font-weight-bold"><i class="fas fa-calendar-times"></i> Cancelada</button>
            <button v-else @click="$emit('openModal', cita, '#reprogModal', indiceElegido)" data-bs-target="#reprogModal" data-bs-toggle="modal" class="btn btn-sm btn-info text-white shadow-sm font-weight-bold" title="Reprogramar">
              <i class="fas fa-calendar-alt"></i> Reprogramar
            </button>
            
            <!-- Eliminar -->
            <button @click="$emit('eliminar', cita.id)" class="btn btn-sm btn-danger text-white shadow-sm font-weight-bold" title="Eliminar" data-bs-dismiss="modal">
              <i class="fas fa-trash-alt"></i> Eliminar
            </button>

            <!-- Recetas -->
            <button @click="$emit('buscarRecetas', cita.patient.id)" data-bs-toggle="modal" data-bs-target="#recetasModal" class="btn btn-sm btn-secondary text-white shadow-sm font-weight-bold" title="Recetas">
              <i class="fas fa-file-medical"></i> Recetas
            </button>

            <!-- Tiempos Espera -->
            <button @click="$emit('tiemposEspera', cita)" data-bs-toggle="modal" data-bs-target="#modalTiemposEspera" class="btn btn-sm btn-warning text-dark font-weight-bold shadow-sm" title="Tiempos de espera">
              <i class="fa-regular fa-clock"></i> Tiempos
            </button>
            
            <!-- WhatsApp -->
            <a :href="getWhatsappLink(cita)" target="_blank" class="btn btn-sm btn-success text-white shadow-sm font-weight-bold">
              <i class="fab fa-whatsapp"></i> WhastApp
            </a>

            <!-- Info General -->
            <button class="btn btn-sm btn-primary text-white shadow-sm font-weight-bold" data-bs-toggle="modal" data-bs-target="#infoModal" @click="$emit('openModal', cita, '#infoModal', indiceElegido)">
              <i class="fas fa-eye"></i> Más Detalles
            </button>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'ModalAccionesCita',
  props: {
    cita: Object,
    indiceElegido: Number,
    precios: Array
  },
  methods: {
    queServicio(servicio){
      if(!this.precios || !servicio || !servicio.type) return '';
      let pr = this.precios.find(x=> x.id == servicio.type);
      if(!pr) return '';
      let texto =  pr.descripcion;
      if( servicio.membresia )
        texto +='<small><br>'+servicio.num_sesion+' de '+servicio.membresia.precio.sesiones+' ('+ servicio.membresia.precio.descripcion +')</small>';
      return texto;
    },
    paymentClass(payment) {
      if(!payment) return '';
      if(payment.pay_status == 1 && payment.adelanto > 0) return 'btn-warning';
      if(payment.pay_status == 1 && payment.adelanto == 0) return 'btn-secondary text-white';
      if(payment.pay_status == 2) return 'btn-success text-white';
      if([3, null].includes(payment.pay_status)) return 'btn-danger text-white';
      return '';
    },
    paymentLabel(payment) {
      if(!payment) return '';
      if(parseInt(payment.pay_status) == 1 && payment.adelanto > 0) return 'Adelanto';
      if(parseInt(payment.pay_status) == 1 && payment.adelanto == 0) return 'Sin pagar';
      if(payment.pay_status == 2) return 'Pagado';
      if([3, null].includes(payment.pay_status)) return 'Anulado';
      return '';
    },
    statusClass(status) {
      if(status == 1) return 'btn-secondary text-white';
      if(status == 2) return 'btn-info text-white';
      if(status == 3) return 'btn-danger text-white';
      if(status == 4) return 'btn-warning';
      return 'btn-light';
    },
    statusLabel(status) {
      if(status == 1) return 'Sin confrm';
      if(status == 2) return 'Confirmado';
      if(status == 3) return 'Anulado';
      if(status == 4) return 'Reprog';
      return 'Estado';
    },
    fechaLatam(fecha){
      if(fecha) return moment(fecha).format('DD/MM/YYYY');
    },
    horaLatam2(horita){ if(horita) return moment(horita, 'HH:mm:ss').format('h:mm a'); },
    getWhatsappLink(c) {
      if(!c || !c.patient) return '#';
      let phone = c.patient.phone ? c.patient.phone.toString().replaceAll(' ', '') : '';
      if(c.link) {
         return `https://wa.me/51${phone}?text=Buen día ${c.patient.name} ${c.patient.nombres}, le recordamos que tiene reservada una cita online el día de hoy a las ${this.horaLatam2(c.schedule ? c.schedule.check_time : '')}, le dejo el enlace de la cita ${c.link}`;
      } else {
         return `https://wa.me/51${phone}?text=Buen día ${c.patient.name} ${c.patient.nombres}, le recordamos que tiene reservada una cita: %0AFecha ${this.fechaLatam(c.date)} %0AHora: ${this.horaLatam2(c.schedule ? c.schedule.check_time : '')} %0AProfesional: ${c.professional ? c.professional.name : ''} %0AEn el Centro Psicológico y Psiquiátrico EXCELENTEMENTE. Al culminar su sesión, no se olvide de reservar su próxima cita.`;
      }
    }
  }
}
</script>
<style scoped>
.gap-2 { gap: 0.5rem; }
.shadow-sm { box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important; }
</style>
