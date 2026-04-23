<template>
  <div
    class="modal fade"
    tabindex="-1"
    style="background: rgba(0,0,0,0.3);"
    aria-hidden="true"
    id="modalChat">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">

        <!-- HEADER -->
        <div class="modal-header border-0">
          <h5 class="modal-title">
            💬 Recomendaciones - {{ patient.nombres }}
          </h5>
          <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- BODY -->
        <div class="modal-body d-flex flex-column" style="min-height: 250px; max-height: 400px; overflow-y:scroll">
          <p v-if="loading" class="text-center">Cargando recomendaciones...</p>

          <p v-else-if="mensajes.length === 0" class="text-center">
            No hay recomendaciones aún
        </p>

        <div v-else class="text-start">
        <div
            v-for="rec in mensajes"
            :key="rec.id"
            class="mb-3 p-3 border rounded"
            >
                <div class="small text-muted mb-1">
                    <strong>{{ rec.user?.nombre || 'Tú' }}</strong>
                    · {{ formatearFecha(rec.created_at) }}
                </div>

                <div>
                    {{ rec.mensaje }}
                </div>
            </div>
        </div>
        </div>

        <!-- FOOTER INPUT -->
        <div class="modal-footer border-0">
          <div class="w-100 d-flex align-items-center gap-2">
            <input
              type="text"
              class="form-control"
              placeholder="Escribir recomendación profesional..."
              v-model="nuevoMensaje"
              @keyup.enter="guardarMensaje"
            />

            <button
              class="btn btn-primary"
              @click="guardarMensaje"
              :disabled="enviando || nuevoMensaje.trim() === ''"
            >
              <i class="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    patient: Object,
  },
  emits: ['close', 'updated'],
  data() {
    return {
      loading: false,
      enviando: false,
      mensajes: [],
      nuevoMensaje: ''
    };
  },

  watch: {
    patient: {
        immediate: true,
        handler(newVal) {
        if (newVal && newVal.id) {
            this.cargarMensajes();
        }
        }
    }
    },

  methods: {
    async cargarMensajes() {
      this.loading = true;
      try {
        // Ajusta la URL a tu API
        const response = await axios.get(
          `/api/chat/${this.patient.id}`
        );
        this.mensajes = response.data;
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },

    async guardarMensaje() {
        if (!this.nuevoMensaje.trim()) return;

        this.enviando = true;

        try {
            const texto = this.nuevoMensaje;

            const payload = {
            mensaje: texto,
            patient_id: this.patient.id
            };

            const response = await axios.post('/api/chat', payload);

            // 🔥 construir mensaje completo manualmente
            const nuevoMensajeObj = {
            id: response.data.id || Date.now(),
            mensaje: texto,
            user: {
                name: 'Tú'
            },
            created_at: new Date().toISOString()
            };

            this.mensajes.push(nuevoMensajeObj);

            this.nuevoMensaje = '';

            this.$emit('updated');

        } catch (e) {
            console.error(e);
        } finally {
            this.enviando = false;
        }
        },
    formatearFecha(fecha) {
        if (!fecha) return '';

        const f = new Date(fecha);

        return f.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    }
  }
};
</script>