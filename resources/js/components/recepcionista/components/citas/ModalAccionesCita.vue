<template>
  <div class="modal fade" :id="idModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-centered" role="document">
      <div class="modal-content border-0 shadow-lg" v-if="cita && cita.patient" style="border-radius: 20px; overflow: hidden;">
        <!-- Header. -->
        <div class="modal-header border-0 pb-0 pt-4 px-4 d-flex align-items-start justify-content-between">
          <div class="d-flex align-items-center">
            <div class="icon-header-container mr-3">
              <i class="fas fa-calendar-alt text-primary h4 mb-0"></i>
            </div>
            <div>
              <h5 class="modal-title font-weight-bold text-dark mb-1">Detalle de Cita</h5>
              <div class="d-flex gap-2 mt-1 flex-wrap align-items-center">
                <span class="badge-status" :class="statusClass(cita.status, cita.attention_status)">
                  <i class="fas fa-check-circle mr-1"></i> {{ statusLabel(cita.status, cita.attention_status) }}
                </span>
                <span class="badge-service" v-if="cita.type">
                  <i class="fas fa-stethoscope mr-1"></i> {{ getServiceLabel(cita) }}
                </span>
                <span class="badge-package" v-if="parseInt(cita.idMembresia) > 0">
                  <i class="fas fa-box-open mr-1"></i> {{ (cita.membresia && cita.membresia.precio) ? cita.membresia.precio.descripcion : 'PAQUETE' }}
                </span>
              </div>
            </div>
          </div>
          <button type="button" class="btn-close-custom" data-bs-dismiss="modal" aria-label="Close">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="modal-body px-4 pt-4">

          <!-- Status Cards Group. -->
          <div class="status-cards-grid mb-4">
            <!-- PAGO CARD. -->
            <div class="status-card h-100" @click="$emit('openModal', cita, targetPago, indiceElegido)" data-bs-toggle="modal" :data-bs-target="targetPago">
              <div class="status-card-header">
                <i class="fas fa-sack-dollar text-warning"></i> <span>PAGO</span>
              </div>
              <div class="status-options mt-2">
                <div class="status-option" :class="{ active: isPayStatus(1, 0) }">No Pagado</div>
                <div class="status-option active-warning" :class="{ active: isPayStatus(1, 1) }">Con Adelanto</div>
                <div class="status-option active-success" :class="{ active: isPayStatus(2) }">Pagado</div>
              </div>
            </div>

            <!-- CONFIRMACION CARD -->
            <div class="status-card h-100" @click="$emit('openModal', cita, targetEstado, indiceElegido)" data-bs-toggle="modal" :data-bs-target="targetEstado">
              <div class="status-card-header">
                <i class="fas fa-check-double text-success"></i> <span>CONFIRMACIÓN</span>
              </div>
              <div class="status-options mt-2">
                <div class="status-option" :class="{ active: cita.status == 1 }">No Confirmado</div>
                <div class="status-option active-success" :class="{ active: cita.status == 2 || cita.attention_status === 'atendido' }">Confirmado</div>
              </div>
            </div>

            <!-- ATENCION CARD -->
            <div class="status-card h-100 position-relative" style="min-height: 120px;">
              <div class="status-card-header">
                <i class="fas fa-stethoscope text-info"></i> <span>ATENCIÓN</span>
              </div>

              <!-- Loader Placeholder -->
              <div v-if="cargandoEstado" key="loader" class="d-flex flex-column align-items-center justify-content-center mt-3" style="min-height: 80px;">
                <div class="spinner-border spinner-border-sm text-info mb-2" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <span class="text-muted small">Actualizando...</span>
              </div>

              <!-- Options -->
              <div v-else key="options" class="status-options mt-2">
                <div class="status-option" :class="{ active: isAtencion('espera') }" @click.stop="cambiarEstadoAtencion('espera')">En espera</div>
                <div class="status-option" :class="{ active: isAtencion('atencion') }" @click.stop="cambiarEstadoAtencion('atencion')">En atención</div>
                <div class="status-option" :class="{ active: isAtencion('atendido') }" @click.stop="cambiarEstadoAtencion('atendido')">Atendido</div>
              </div>
            </div>
          </div>

          <!-- CONTROL DE TIEMPOS -->
          <div class="info-section mb-4">
            <div class="section-label mb-2"><i class="fas fa-stopwatch mr-1"></i> CONTROL DE TIEMPOS</div>
            <div class="time-control-container p-3 d-flex align-items-center justify-content-between text-center">
              <div class="time-item px-2">
                <div class="time-label">Hora de llegada</div>
                <div class="time-value" v-if="cita.entrance">{{ horaLatam2(cita.entrance) }}</div>
                <button v-else @click.stop="registrarTiempo('llegada')" class="btn btn-registrar btn-sm">Registrar</button>
              </div>
              <div class="time-item px-2 border-left">
                <div class="time-label">Hora de atención</div>
                <div class="time-value" v-if="cita.attention">{{ horaLatam2(cita.attention) }}</div>
                <button v-else @click.stop="registrarTiempo('atención')" class="btn btn-registrar btn-sm" :disabled="!cita.entrance">Registrar</button>
              </div>
              <div class="time-item px-2 border-left">
                <div class="time-label">Hora de fin</div>
                <div class="time-value">{{ horaLatam2(cita.hora_fin) }}</div>
              </div>
              <div class="time-item px-2 border-left">
                <div class="time-label">Tiempo espera</div>
                <div class="time-value">{{ calcularEspera() }}</div>
              </div>
            </div>
          </div>

          <!-- PACIENTE -->
          <div class="info-section mb-4">
            <div class="section-label mb-2">PACIENTE</div>
            <div class="patient-card p-3 d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center overflow-hidden">
                <div class="patient-avatar mr-3">
                  <i class="fas fa-user text-primary"></i>
                </div>
                <div class="overflow-hidden">
                  <div class="patient-name font-weight-bold text-truncate">{{ cita.patient.name }} {{ cita.patient.nombres }}</div>
                  <div class="patient-dni text-muted small text-truncate">DNI: {{ cita.patient.dni || '—' }} · {{ cita.patient.phone || '—' }}</div>
                </div>
              </div>
              <button @click="$emit('openModal', cita, targetInfo, indiceElegido)" data-bs-toggle="modal" :data-bs-target="targetInfo" class="btn btn-link text-dark text-decoration-none small p-0 ms-2">
                 <i class="fas fa-external-link-alt mr-1"></i> Perfil
              </button>
            </div>
          </div>

          <!-- DETAILS GRID -->
          <div class="details-grid mb-4">
            <div class="detail-item">
              <div class="detail-icon"><i class="fas fa-calendar-day text-primary"></i></div>
              <div class="detail-content overflow-hidden">
                <div class="detail-label text-uppercase">Fecha</div>
                <div class="detail-value">{{ fechaLatam(cita.date) }}</div>
              </div>
            </div>
            <div class="detail-item">
              <div class="detail-icon"><i class="fas fa-clock text-info"></i></div>
              <div class="detail-content overflow-hidden">
                <div class="detail-label text-uppercase">Hora</div>
                <div class="detail-value text-truncate">{{ horaLatam2(cita.schedule ? cita.schedule.check_time : '') }} - {{ horaLatam2(cita.schedule ? cita.schedule.departure_date : '') }}</div>
              </div>
            </div>
            <div class="detail-item">
              <div class="detail-icon"><i class="fas fa-user-md text-warning"></i></div>
              <div class="detail-content overflow-hidden">
                <div class="detail-label text-uppercase">Profesional</div>
                <div class="detail-value text-truncate">{{ cita.professional && cita.professional.name ? cita.professional.name.split(' ').slice(0, 2).join(' ') : 'N/A' }}</div>
              </div>
            </div>
            <div class="detail-item">
              <div class="detail-icon"><i class="fas fa-video text-secondary"></i></div>
              <div class="detail-content overflow-hidden">
                <div class="detail-label text-uppercase">Modalidad</div>
                <div class="detail-value">{{ cita.mode == 1 ? 'Presencial' : 'Virtual' }}</div>
              </div>
            </div>
            <div class="detail-item" v-if="parseInt(cita.idMembresia) > 0" style="grid-column: span 2;">
              <div class="detail-icon"><i class="fas fa-box-open text-warning"></i></div>
              <div class="detail-content overflow-hidden">
                <div class="detail-label text-uppercase">Paquete</div>
                <div class="detail-value text-truncate">{{ (cita.membresia && cita.membresia.precio) ? cita.membresia.precio.descripcion : 'Asociado a Paquete' }}</div>
              </div>
            </div>
          </div>

          <hr class="my-4" style="opacity: 0.1;">

          <!-- ACTION BUTTONS -->
          <div class="d-flex flex-wrap gap-2 justify-content-left pb-4">
            <!-- Main Actions -->
            <button v-if="cita.status != 3" @click="$emit('openModal', cita, targetReprog, indiceElegido)" :data-bs-target="targetReprog" data-bs-toggle="modal" class="btn btn-action btn-outline-primary">
              <i class="fas fa-sync-alt mr-2"></i> Reprogramar
            </button>

            <button @click="$emit('eliminar', cita.id)" class="btn btn-action btn-outline-danger" data-bs-dismiss="modal" :disabled="tienePago" :title="tienePago ? 'No se puede cancelar una cita con pago o adelanto' : ''">
              <i class="fas fa-times-circle mr-2"></i> Cancelar
            </button>
            <button v-if="cita.status != 3" @click="$emit('openModal', cita, targetEstado, indiceElegido)" data-bs-toggle="modal" :data-bs-target="targetEstado" class="btn btn-action btn-outline-secondary" :disabled="tienePago" :title="tienePago ? 'No se puede anular una cita con pago o adelanto' : ''">
              <i class="fas fa-ban mr-2"></i> Anular
            </button>

            <button @click="$emit('openModal', cita, targetEstado, indiceElegido)" data-bs-toggle="modal" :data-bs-target="targetEstado" class="btn btn-action btn-outline-secondary">
              <i class="fas fa-user-slash mr-2"></i> No Asistió
            </button>

              <a :href="getWhatsappLink(cita)" target="_blank" class="btn btn-action btn-outline-success">
                <i class="fab fa-whatsapp mr-2"></i> WhatsApp
              </a>
              <button v-if="canSendSatisfaction(cita)" @click="sendSatisfaction(cita)" class="btn btn-action btn-outline-primary" type="button">
                <i class="far fa-smile mr-2"></i> Satisfaccion
              </button>
              <a :href="'tel:' + (cita.patient.phone || '').replace(/\s/g, '')" class="btn btn-action btn-outline-dark">
                <i class="fas fa-phone-alt mr-2"></i> Llamar
              </a>

            <!-- More Extras Icons row -->
            <div class="w-100 d-flex justify-content-left gap-4 mt-3">
              <button @click="$emit('intercambiar', cita)" :data-bs-target="targetIntercambio" data-bs-toggle="modal" class="btn btn-link text-muted p-0 small" title="Intercambiar">
                <i class="fas fa-retweet"></i> Intercambiar
              </button>
              <button @click="$emit('openModal', cita, '#modalMoverVacio', indiceElegido)" data-bs-target="#modalMoverVacio" data-bs-toggle="modal" class="btn btn-link text-muted p-0 small" title="Mover a sitio Vacio">
                <i class="fas fa-share-square"></i> Mover a Vacio
              </button>
              <button @click="enviarAlLimbo(cita)" data-bs-dismiss="modal" class="btn btn-link text-muted p-0 small" title="Enviar al Limbo">
                <i class="fas fa-satellite-dish"></i> Envia al Limbo
              </button>
              <button @click="$emit('buscarRecetas', cita.patient.id)" data-bs-toggle="modal" :data-bs-target="targetRecetas" class="btn btn-link text-muted p-0 small" title="Recetas">
                <i class="fas fa-file-medical"></i> Recetas
              </button>
              <button @click="$emit('changeMode', cita.id, indiceElegido)" class="btn btn-link text-muted p-0 small" title="Cambiar modo" data-bs-dismiss="modal">
                <i :class="cita.mode == 1 ? 'far fa-user' : 'fas fa-desktop'"></i> {{ cita.mode == 1 ? 'Modo' : 'Modo' }}
              </button>
            </div>
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
    precios: Array,
    idModal: { type: String, default: 'modalAccionesCita' },
    targetPago: { type: String, default: '#pagoModal' },
    targetEstado: { type: String, default: '#modalEstado' },
    targetInfo: { type: String, default: '#infoModal' },
    targetReprog: { type: String, default: '#reprogModal' },
    targetIntercambio: { type: String, default: '#modalIntercambio' },
    targetRecetas: { type: String, default: '#recetasModal' }
  },
  data() {
    return {
      departureTimeLocal: null,
      cargandoEstado: false
    };
  },
  watch: {
    cita: {
      handler(newCita) {
        if (newCita && newCita.attention && !newCita.hora_fin && newCita.precio && newCita.precio.duracion) {
          this.departureTimeLocal = moment(newCita.attention, 'HH:mm:ss').add(newCita.precio.duracion, 'minutes').format('HH:mm');
        } else if (newCita && newCita.hora_fin) {
          this.departureTimeLocal = moment(newCita.hora_fin, 'HH:mm:ss').format('HH:mm');
        } else {
          this.departureTimeLocal = null;
        }
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    tienePago() {
      if (!this.cita || !this.cita.payment) return false;
      return this.cita.payment.pay_status === 2 || parseFloat(this.cita.payment.adelanto) > 0;
    }
  },
  methods: {
    async registrarTiempo(tipo) {
      if (!this.cita) return;
      let payload = {
        idCita: this.cita.id,
        entrance: this.cita.entrance,
        attention: this.cita.attention
      };

      switch (tipo) {
        case 'llegada':
          if(this.cita.entrance) return;
          this.cita.entrance = moment().format('HH:mm:ss');
          payload.entrance = this.cita.entrance;
          break;
        case 'atención':
          if(this.cita.attention) return;
          this.cita.attention = moment().format('HH:mm:ss');
          payload.attention = this.cita.attention;
          
          let duracion = 60; // Fallback
          if (this.cita.precio && this.cita.precio.duracion) {
            duracion = parseInt(this.cita.precio.duracion);
          } else if (this.cita.membresia && this.cita.membresia.precio && this.cita.membresia.precio.duracion) {
            duracion = parseInt(this.cita.membresia.precio.duracion);
          }
          let endTime = moment(this.cita.attention, 'HH:mm:ss').add(duracion, 'minutes').format('HH:mm:ss');
          this.$set(this.cita, 'hora_fin', endTime);
          payload.departure = endTime;
          this.departureTimeLocal = moment(endTime, 'HH:mm:ss').format('HH:mm');
          break;
        default: break;
      }

      try {
        let response = await this.axios.post('/api/registrarHora', payload);
        if(response.data?.mensaje == 'Ok'){
            this.$emit('actualizar', 'sksks');
            if (window.alertify) {
              window.alertify.notify('<i class="fa-regular fa-calendar-check"></i> Datos actualizados', 'success', 5);
            }
        }
      } catch (error) {
        console.error(error);
      }
    },
    async cambiarEstadoAtencion(estado) {
      if (!this.cita || this.cargandoEstado) return;
      this.cargandoEstado = true;
      try {
        let response = await this.axios.post(`/api/updateAttentionStatus/${this.cita.id}`, { attention_status: estado });
        if (response.data?.mensaje == 'Ok') {
          this.$set(this.cita, 'attention_status', estado);
          if (this.cita.status == 1) {
            this.$set(this.cita, 'status', 2); // Confirmado
          }
          this.$emit('actualizar');
          if (window.alertify) {
            window.alertify.notify('<i class="fa-regular fa-calendar-check"></i> Estado de atención actualizado', 'success', 5);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.cargandoEstado = false;
      }
    },
    getServiceLabel(servicio){
      if(!this.precios || !servicio || !servicio.type) return 'Servicio';
      let pr = this.precios.find(x=> x.id == servicio.type);
      return pr ? pr.descripcion : 'Servicio';
    },
    isPayStatus(status, hasAdelanto = null) {
      if (!this.cita || !this.cita.payment) return false;
      const p = this.cita.payment;
      if (status === 1) {
        if (hasAdelanto === 1) return p.pay_status == 1 && p.adelanto > 0;
        if (hasAdelanto === 0) return p.pay_status == 1 && p.adelanto == 0;
      }
      return p.pay_status == status;
    },
    isAtencion(tipo) {
      if (!this.cita) return false;
      const { status, attention_status } = this.cita;
      if (attention_status) {
        return attention_status === tipo;
      }
      // Fallback a lógica basada en status para datos antiguos (sin depender de tiempos)
      if (tipo === 'espera') return status == 1;
      if (tipo === 'atencion') return status == 2;
      return false;
    },
    calcularEspera() {
      if (!this.cita || !this.cita.entrance) return '—';
      let start = moment(this.cita.entrance, 'HH:mm:ss');
      let end = this.cita.attention ? moment(this.cita.attention, 'HH:mm:ss') : moment();
      let diff = end.diff(start, 'minutes');
      return diff > 0 ? `${diff} min` : '0 min';
    },
    statusClass(status, attentionStatus) {
      if(attentionStatus === 'atendido') return 'status-badge-success';
      if(status == 1) return 'status-badge-secondary';
      if(status == 2) return 'status-badge-success';
      if(status == 3) return 'status-badge-danger';
      if(status == 4) return 'status-badge-info';
      if(status == 5) return 'status-badge-danger';
      return 'status-badge-light';
    },
    statusLabel(status, attentionStatus) {
      if(attentionStatus === 'atendido') return 'Atendida';
      if(status == 1) return 'Pendiente';
      if(status == 2) return 'Confirmada';
      if(status == 3) return 'Anulada';
      if(status == 4) return 'Reprogramada';
      if(status == 5) return 'Eliminada';
      return 'Estado';
    },
    fechaLatam(fecha){
      if(fecha) return moment(fecha).format('DD/MM/YYYY');
      return '—';
    },
    horaLatam2(horita){
      if(horita) return moment(horita, 'HH:mm:ss').format('HH:mm');
      return '—';
    },
    getWhatsappLink(c) {
      if(!c || !c.patient) return '#';
      let phone = c.patient.phone ? c.patient.phone.toString().replaceAll(' ', '') : '';
      if(c.link) {
         return `https://wa.me/51${phone}?text=Buen día ${c.patient.name} ${c.patient.nombres}, le recordamos que tiene reservada una cita online el día de hoy a las ${this.horaLatam2(c.schedule ? c.schedule.check_time : '')}, le dejo el enlace de la cita ${c.link}`;
      } else {
         return `https://wa.me/51${phone}?text=Buen día ${c.patient.name} ${c.patient.nombres}, le recordamos que tiene reservada una cita: %0AFecha ${this.fechaLatam(c.date)} %0AHora: ${this.horaLatam2(c.schedule ? c.schedule.check_time : '')} %0AProfesional: ${c.professional ? c.professional.name : ''} %0AEn el Centro Psicológico y Psiquiátrico EXCELENTEMENTE. Al culminar su sesión, no se olvide de reservar su próxima cita.`;
      }
    },
    canSendSatisfaction(c) {
      return !!(c && c.patient);
    },
    async sendSatisfaction(c) {
      if (!c || !c.patient || !c.patient.phone) {
        if (window.alertify) {
          window.alertify.error('El paciente no tiene un número de teléfono registrado.');
        } else if (this.$swal) {
          this.$swal('El paciente no tiene un número de teléfono registrado.');
        } else {
          alert('El paciente no tiene un número de teléfono registrado.');
        }
        return;
      }
      try {
        const res = await this.axios.post(`/api/appointment/${c.id}/satisfaction-link`);
        const phone = (c.patient.phone || '').toString().replaceAll(' ', '');
        const text = `Buen dia ${c.patient.name} ${c.patient.nombres}, esperamos se encuentre bien. Le enviamos la encuesta de satisfaccion de su cita en el Centro Psicologico y Psiquiatrico EXCELENTEMENTE. ${res.data.url}`;
        window.open(`https://wa.me/51${phone}?text=${encodeURIComponent(text)}`, '_blank');
      } catch (error) {
        console.error(error);
        if (this.$swal) {
          this.$swal('No se pudo generar el enlace de satisfaccion');
        }
      }
    },
    async enviarAlLimbo(cita) {
      if (!cita) return;
      
      const { value: motivo } = await this.$swal({
        title: 'Enviar al Limbo',
        input: 'text',
        inputLabel: 'Motivo para enviar al limbo',
        inputPlaceholder: 'Especifique el motivo...',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Cancelar',
        inputValidator: (value) => {
          if (!value) {
            return '¡Necesitas escribir un motivo!';
          }
        }
      });

      if (motivo) {
        try {
          let userRes = await this.axios.get('/api/user');
          let userId = userRes.data && userRes.data.user ? userRes.data.user.id : null;
          
          await this.axios.post('/api/limbos', {
            appointment_id: cita.id,
            user_id: userId,
            motivo: motivo
          });
          
          if (window.alertify) {
            window.alertify.notify('<i class="fa-regular fa-check-circle"></i> Cita enviada al limbo', 'success', 5);
          } else {
            this.$swal({icon: 'success', title: 'Cita enviada al limbo'});
          }
          this.$emit('actualizar'); 
        } catch (error) {
          console.error(error);
          this.$swal({icon: 'error', title: 'Ocurrió un error al enviar al limbo'});
        }
      }
    }
  }
}
</script>

<style scoped>
/* Main Layout */
.modal-content {
  background: #ffffff;
}

/* Header */
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

/* Badges */
.badge-status {
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
}
.status-badge-success { background: #e7fcf3; color: #0ca678; border: 1px solid #c3fae8; }
.status-badge-secondary { background: #f1f3f5; color: #495057; border: 1px solid #e9ecef; }
.status-badge-danger { background: #fff5f5; color: #e03131; border: 1px solid #ffe3e3; }
.status-badge-info { background: #e7f5ff; color: #1971c2; border: 1px solid #d0ebff; }

.badge-service {
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  background: #fff4e6;
  color: #fd7e14;
  border: 1px solid #ffe8cc;
}
.badge-package {
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  background: #fff1db;
  color: #f97316;
  border: 1px solid #ffedd5;
  display: inline-flex;
  align-items: center;
}

/* Status Cards. */
.status-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.status-card {
  background: #f8f9fc;
  border-radius: 14px;
  padding: 12px;
  border: 1px solid #f1f3f9;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.status-card:hover { border-color: #dbe4ff; background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }

.status-card-header {
  font-size: 0.65rem;
  font-weight: 800;
  color: #adb5bd;
  display: flex;
  align-items: center;
  gap: 6px;
  letter-spacing: 1px;
}
.status-options {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.status-option {
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 0.75rem;
  color: #868e96;
  border: 1px solid transparent;
}
.status-option.active {
  background: #ffffff;
  border-color: #e9ecef;
  font-weight: 700;
  color: #495057;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}
.status-option.active-warning.active { background: #fff9db; border-color: #ffe066; color: #f08c00; }
.status-option.active-success.active { background: #ebfbee; border-color: #8ce99a; color: #2b8a3e; }

/* Sections. */
.section-label {
  font-size: 0.7rem;
  font-weight: 800;
  color: #adb5bd;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.time-control-container, .patient-card {
  background: #f8f9fc;
  border-radius: 16px;
  border: 1px solid #f1f3f9;
}

.time-item { text-align: center; flex: 1; }
.time-label { font-size: 0.65rem; color: #adb5bd; margin-bottom: 2px; }
.time-value { font-size: 0.9rem; font-weight: 800; color: #495057; }

.btn-registrar {
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  padding: 4px 12px;
  font-weight: 700;
  font-size: 0.75rem;
  color: #495057;
  transition: all 0.2s;
}
.btn-registrar:hover { background: #f8f9fa; border-color: #ced4da; }

/* Patient Card. */
.patient-avatar {
  background: #e7f5ff;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
}
.patient-name { font-size: 0.95rem; color: #212529; line-height: 1.2; }
.patient-dni { font-size: 0.75rem; }

/* Details Grid */
.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.detail-item {
  display: flex;
  align-items: center;
  background: #f8f9fc;
  padding: 12px;
  border-radius: 14px;
  border: 1px solid #f1f3f9;
}
.detail-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 10px;
  margin-right: 12px;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}
.detail-label { font-size: 0.65rem; color: #adb5bd; font-weight: 800; margin-bottom: 0; }
.detail-value { font-size: 0.85rem; font-weight: 700; color: #495057; }

/* Action Buttons. */
.btn-action {
  border-radius: 12px;
  padding: 10px 16px;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.2s;
  min-width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-action:hover { transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0,0,0,0.05); }

.border-left { border-left: 1px solid #e9ecef!important; }
.border-right { border-right: 1px solid #e9ecef!important; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1.5rem; }
.mr-2 { margin-right: 0.5rem; }
.mr-3 { margin-right: 0.75rem; }
</style>

