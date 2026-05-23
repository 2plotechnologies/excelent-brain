<template>
  <div class="satisfaction-page">
    <div class="satisfaction-panel">
      <div v-if="loading" class="text-center py-5">
        <i class="fas fa-circle-notch fa-spin fa-2x text-primary mb-3"></i>
        <p class="text-muted mb-0">Cargando encuesta...</p>
      </div>

      <div v-else-if="error" class="text-center py-5">
        <i class="fas fa-exclamation-circle fa-2x text-danger mb-3"></i>
        <h4 class="font-weight-bold">Encuesta no disponible</h4>
        <p class="text-muted">{{ error }}</p>
      </div>

      <div v-else>
        <div class="text-center mb-4">
          <h2 class="font-weight-bold text-dark mb-2">Satisfaccion de clientes</h2>
          <p class="text-muted mb-1">{{ survey.service_description || 'Servicio' }}</p>
          <p class="small text-muted mb-0">{{ survey.professional_name || 'Profesional' }}</p>
        </div>

        <div v-if="survey.answered_at" class="alert alert-success text-center">
          <i class="fas fa-check-circle mr-1"></i> Gracias, su respuesta ya fue registrada.
        </div>

        <form v-else @submit.prevent="submit">
          <label class="font-weight-bold text-dark d-block text-center mb-3">Califique su experiencia</label>
          <div class="faces-grid mb-4">
            <button
              v-for="face in faces"
              :key="face.value"
              type="button"
              class="face-btn"
              :class="{ selected: rating === face.value }"
              @click="rating = face.value"
            >
              <i :class="face.icon"></i>
              <span>{{ face.value }}</span>
            </button>
          </div>

          <div class="form-group mb-4">
            <label class="font-weight-bold text-dark">Comentario opcional</label>
            <textarea class="form-control" rows="3" v-model="comment" placeholder="Cuente brevemente como fue su atencion"></textarea>
          </div>

          <button class="btn btn-primary btn-lg w-100 font-weight-bold" :disabled="!rating || saving">
            <span v-if="saving"><i class="fas fa-spinner fa-spin mr-2"></i> Guardando...</span>
            <span v-else><i class="fas fa-paper-plane mr-2"></i> Enviar satisfaccion</span>
          </button>
        </form>

        <div v-if="saved" class="alert alert-success mt-4 text-center">
          Gracias por ayudarnos a mejorar.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      saving: false,
      saved: false,
      error: '',
      survey: {},
      rating: null,
      comment: '',
      faces: [
        { value: 1, icon: 'far fa-frown' },
        { value: 2, icon: 'far fa-frown' },
        { value: 3, icon: 'far fa-frown-open' },
        { value: 4, icon: 'far fa-meh' },
        { value: 5, icon: 'far fa-meh' },
        { value: 6, icon: 'far fa-meh-blank' },
        { value: 7, icon: 'far fa-smile' },
        { value: 8, icon: 'far fa-smile' },
        { value: 9, icon: 'far fa-laugh' },
        { value: 10, icon: 'far fa-grin-stars' },
      ],
    }
  },
  mounted() {
    this.fetchSurvey();
  },
  methods: {
    async fetchSurvey() {
      try {
        const res = await axios.get(`/api/satisfaccion/${this.$route.params.token}`);
        this.survey = res.data;
        this.rating = res.data.rating;
      } catch (e) {
        this.error = 'El enlace no existe o ya no esta disponible.';
      } finally {
        this.loading = false;
      }
    },
    async submit() {
      if (!this.rating) return;
      this.saving = true;
      try {
        const res = await axios.post(`/api/satisfaccion/${this.$route.params.token}`, {
          rating: this.rating,
          comment: this.comment,
        });
        this.survey = res.data.satisfaction;
        this.saved = true;
      } catch (e) {
        this.error = 'No se pudo guardar la respuesta. Intente nuevamente.';
      } finally {
        this.saving = false;
      }
    },
  },
}
</script>

<style scoped>
.satisfaction-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f7fb;
  padding: 24px;
}
.satisfaction-panel {
  width: min(760px, 100%);
  background: #fff;
  border: 1px solid #e9eef5;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 12px 30px rgba(18, 38, 63, 0.08);
}
.faces-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}
.face-btn {
  border: 1px solid #dde6f0;
  background: #fff;
  border-radius: 8px;
  min-height: 78px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
  color: #667085;
  transition: all 0.18s ease;
}
.face-btn i {
  font-size: 1.7rem;
}
.face-btn span {
  font-size: 0.85rem;
  font-weight: 700;
}
.face-btn:hover,
.face-btn.selected {
  border-color: #1cc88a;
  background: #eafaf3;
  color: #13795b;
}
@media (max-width: 576px) {
  .satisfaction-panel {
    padding: 20px;
  }
  .faces-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
