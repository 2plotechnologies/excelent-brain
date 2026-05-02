<template>
  <div class="modal fade" id="modalVerAutoTriaje" tabindex="-1" aria-labelledby="modalVerAutoTriajeLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content border-0 shadow-lg">
        <div class="modal-header bg-primary text-white border-0">
          <h5 class="modal-title font-weight-bold" id="modalVerAutoTriajeLabel">
            <i class="fas fa-clipboard-list me-2"></i> Respuestas del Autotriaje
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bg-light p-4">
          <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Cargando...</span>
            </div>
            <p class="mt-2 text-muted">Obteniendo respuestas...</p>
          </div>
          <div v-else-if="error" class="alert alert-warning shadow-sm border-0 d-flex align-items-center p-4 rounded-lg">
            <i class="fas fa-exclamation-triangle fa-2x me-3 text-warning"></i>
            <div>
              <h5 class="mb-1 text-warning font-weight-bold">Aviso</h5>
              <p class="mb-0">{{ error }}</p>
            </div>
          </div>
          <div v-else-if="respuestas">
            
            <div class="card border-0 shadow-sm mb-3 rounded-lg">
              <div class="card-body">
                <h6 class="font-weight-bold text-primary border-bottom pb-2 mb-3"><i class="fas fa-user me-2"></i> Datos Generales</h6>
                <div class="row small">
                  <div class="col-md-6 mb-2"><strong class="text-muted d-block">Nombre:</strong> {{ respuestas.nombre }}</div>
                  <div class="col-md-3 mb-2"><strong class="text-muted d-block">Edad:</strong> {{ respuestas.edad }}</div>
                  <div class="col-md-3 mb-2"><strong class="text-muted d-block">DNI/Doc:</strong> {{ respuestas.documento }}</div>
                  <div class="col-md-6 mb-2"><strong class="text-muted d-block">Teléfono:</strong> {{ respuestas.telefono }}</div>
                  <div class="col-md-6 mb-2"><strong class="text-muted d-block">Email:</strong> {{ respuestas.email || 'N/A' }}</div>
                  <div class="col-md-6 mb-2"><strong class="text-muted d-block">Fecha Llenado:</strong> {{ respuestas.fecha }}</div>
                </div>
              </div>
            </div>

            <div class="card border-0 shadow-sm mb-3 rounded-lg border-start border-danger" style="border-left-width: 4px !important;" v-if="respuestas.emergencia">
              <div class="card-body">
                <h6 class="font-weight-bold text-danger border-bottom pb-2 mb-3"><i class="fas fa-address-book me-2"></i> Contacto de Emergencia</h6>
                <div class="row small">
                  <div class="col-md-4 mb-2"><strong class="text-muted d-block">Nombre:</strong> {{ respuestas.emergencia.nombre }}</div>
                  <div class="col-md-4 mb-2"><strong class="text-muted d-block">Teléfono:</strong> {{ respuestas.emergencia.telefono }}</div>
                  <div class="col-md-4 mb-2"><strong class="text-muted d-block">Relación:</strong> {{ respuestas.emergencia.relacion }}</div>
                </div>
              </div>
            </div>

            <div class="card border-0 shadow-sm mb-3 rounded-lg">
              <div class="card-body">
                <h6 class="font-weight-bold text-success border-bottom pb-2 mb-3"><i class="fas fa-hand-holding-medical me-2"></i> Motivo y Expectativas</h6>
                <div class="row small">
                  <div class="col-md-4 mb-2"><strong class="text-muted d-block">Servicio:</strong> {{ respuestas.servicio }}</div>
                  <div class="col-md-4 mb-2"><strong class="text-muted d-block">Modalidad:</strong> {{ respuestas.modalidad }}</div>
                  <div class="col-md-4 mb-2"><strong class="text-muted d-block">Consentimiento:</strong> <span class="badge" :class="respuestas.consentimiento === 'si' ? 'bg-success' : 'bg-danger'">{{ respuestas.consentimiento === 'si' ? 'Sí' : 'No' }}</span></div>
                  <div class="col-md-12 mb-2"><strong class="text-muted d-block">Motivo:</strong> {{ respuestas.motivo }}</div>
                  <div class="col-md-12 mb-2"><strong class="text-muted d-block">Expectativa:</strong> {{ respuestas.expectativa }}</div>
                </div>
              </div>
            </div>

            <div class="card border-0 shadow-sm mb-3 rounded-lg">
              <div class="card-body">
                <h6 class="font-weight-bold text-info border-bottom pb-2 mb-3"><i class="fas fa-stethoscope me-2"></i> Síntomas</h6>
                <div class="row small mb-3">
                  <div class="col-md-6 mb-2"><strong class="text-muted d-block">Desde cuándo:</strong> {{ respuestas.sintomas_desde }}</div>
                  <div class="col-md-6 mb-2"><strong class="text-muted d-block">Interferencia:</strong> {{ respuestas.interferencia }}</div>
                </div>
                <strong class="small text-muted d-block mb-2">Síntomas reportados:</strong>
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge bg-light text-dark border shadow-sm" v-for="(s, index) in respuestas.sintomas" :key="index">{{ s }}</span>
                </div>
              </div>
            </div>

            <div class="card border-0 shadow-sm mb-3 rounded-lg">
              <div class="card-body">
                <h6 class="font-weight-bold text-warning border-bottom pb-2 mb-3"><i class="fas fa-notes-medical me-2"></i> Antecedentes</h6>
                <div class="row small">
                  <div class="col-md-6 mb-2"><strong class="text-muted me-2">Atención Previa:</strong> <span class="badge" :class="respuestas.atencion_previa === 'si' ? 'bg-warning text-dark' : 'bg-light text-dark'">{{ respuestas.atencion_previa === 'si' ? 'Sí' : 'No' }}</span></div>
                  <div class="col-md-6 mb-2"><strong class="text-muted me-2">Diagnóstico:</strong> <span class="badge" :class="respuestas.diagnostico === 'si' ? 'bg-warning text-dark' : 'bg-light text-dark'">{{ respuestas.diagnostico === 'si' ? 'Sí' : 'No' }}</span></div>
                  <div class="col-md-6 mb-2"><strong class="text-muted me-2">Medicamentos:</strong> <span class="badge" :class="respuestas.medicamentos === 'si' ? 'bg-warning text-dark' : 'bg-light text-dark'">{{ respuestas.medicamentos === 'si' ? 'Sí' : 'No' }}</span></div>
                  <div class="col-md-6 mb-2"><strong class="text-muted me-2">Hospitalizaciones:</strong> <span class="badge" :class="respuestas.hospitalizaciones === 'si' ? 'bg-warning text-dark' : 'bg-light text-dark'">{{ respuestas.hospitalizaciones === 'si' ? 'Sí' : 'No' }}</span></div>
                  <div class="col-md-6 mb-2"><strong class="text-muted me-2">Autolesiones:</strong> <span class="badge" :class="respuestas.autolesiones === 'si' ? 'bg-warning text-dark' : 'bg-light text-dark'">{{ respuestas.autolesiones === 'si' ? 'Sí' : 'No' }}</span></div>
                  <div class="col-md-6 mb-2"><strong class="text-muted me-2">Sustancias:</strong> <span class="badge" :class="respuestas.consumo_sustancias === 'si' ? 'bg-warning text-dark' : 'bg-light text-dark'">{{ respuestas.consumo_sustancias === 'si' ? 'Sí' : 'No' }}</span></div>
                  <div class="col-md-6 mb-2"><strong class="text-muted me-2">Condiciones Médicas:</strong> <span class="badge" :class="respuestas.condiciones_medicas === 'si' ? 'bg-warning text-dark' : 'bg-light text-dark'">{{ respuestas.condiciones_medicas === 'si' ? 'Sí' : 'No' }}</span></div>
                  <div class="col-md-6 mb-2"><strong class="text-muted me-2">Alergias:</strong> <span class="badge" :class="respuestas.alergias === 'si' ? 'bg-warning text-dark' : 'bg-light text-dark'">{{ respuestas.alergias === 'si' ? 'Sí' : 'No' }}</span></div>
                  <div class="col-md-6 mb-2"><strong class="text-muted me-2">Ant. Familiares:</strong> <span class="badge" :class="respuestas.antecedentes_familiares === 'si' ? 'bg-warning text-dark' : 'bg-light text-dark'">{{ respuestas.antecedentes_familiares === 'si' ? 'Sí' : 'No' }}</span></div>
                </div>
              </div>
            </div>

            <div class="card border-0 shadow-sm mb-3 rounded-lg border-start border-danger" style="border-left-width: 4px !important;" v-if="respuestas.seguridad">
              <div class="card-body">
                <h6 class="font-weight-bold text-danger border-bottom pb-2 mb-3"><i class="fas fa-shield-alt me-2"></i> Seguridad</h6>
                <ul class="list-group list-group-flush small">
                  <li class="list-group-item px-0 py-1 border-0" v-for="(val, key) in respuestas.seguridad" :key="key">
                    <strong class="text-muted">{{ key }}</strong>: <span class="badge" :class="val === 'Sí' ? 'bg-danger' : 'bg-light text-dark'">{{ val }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="card border-0 shadow-sm mb-3 rounded-lg">
              <div class="card-body">
                <h6 class="font-weight-bold text-dark border-bottom pb-2 mb-3"><i class="fas fa-list-ol text-primary me-2"></i> Resultados Cuestionarios</h6>
                <div class="row small">
                  <div class="col-md-4 mb-3">
                    <strong class="text-muted d-block text-center border-bottom pb-1 mb-2">PHQ-9 (Depresión)</strong>
                    <div class="text-center display-6 font-weight-bold text-primary">{{ sumarArray(respuestas.phq9) }}</div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <strong class="text-muted d-block text-center border-bottom pb-1 mb-2">GAD-7 (Ansiedad)</strong>
                    <div class="text-center display-6 font-weight-bold text-info">{{ sumarArray(respuestas.gad7) }}</div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <strong class="text-muted d-block text-center border-bottom pb-1 mb-2">Y-BOCS (TOC)</strong>
                    <div class="text-center display-6 font-weight-bold text-warning">{{ sumarArray(respuestas.ybocs) }}</div>
                  </div>
                  <div class="col-12 mt-2">
                    <strong class="text-muted d-block">Dificultad Funcional:</strong> {{ respuestas.dificultad || 'N/A' }}
                  </div>
                </div>
              </div>
            </div>

            <div class="card border-0 shadow-sm mb-3 rounded-lg bg-light" v-if="respuestas.adicional">
              <div class="card-body">
                <h6 class="font-weight-bold text-secondary mb-2"><i class="fas fa-comment-dots me-2"></i> Información Adicional</h6>
                <p class="small text-dark mb-0" style="white-space: pre-wrap;">{{ respuestas.adicional }}</p>
              </div>
            </div>

          </div>
        </div>
        <div class="modal-footer bg-light border-top-0">
          <button type="button" class="btn btn-secondary rounded-pill px-4" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalVerAutoTriaje',
  props: {
    patientId: {
      required: true
    }
  },
  data() {
    return {
      loading: false,
      error: null,
      respuestas: null
    }
  },
  mounted() {
    // Escuchar el evento de que el modal se abre para hacer la petición en ese momento
    // y no sobrecargar si no lo abren.
    const modalEl = document.getElementById('modalVerAutoTriaje')
    if(modalEl) {
      modalEl.addEventListener('show.bs.modal', () => {
        if (this.patientId) {
          this.fetchRespuestas()
        }
      })
    }
  },
  watch: {
    patientId: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.fetchRespuestas()
        }
      }
    }
  },
  methods: {
    async fetchRespuestas() {
      this.loading = true
      this.error = null
      this.respuestas = null
      try {
        const response = await axios.get(`/api/pacientes/${this.patientId}/ultimo-autotriaje`)
        this.respuestas = response.data.data
      } catch (e) {
        if (e.response && e.response.status === 404) {
          this.error = 'El paciente aún no ha completado el autotriaje.'
        } else {
          this.error = 'Error al cargar las respuestas del autotriaje.'
        }
      } finally {
        this.loading = false
      }
    },
    sumarArray(arr) {
      if (!arr) return 0;
      const values = Object.values(arr);
      return values.reduce((sum, val) => sum + parseInt(val || 0, 10), 0);
    }
  }
}
</script>

<style scoped>
.rounded-lg { border-radius: 1rem !important; }
</style>
