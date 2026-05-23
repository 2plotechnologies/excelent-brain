<template>
  <div class="container-fluid py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h3 class="font-weight-bold text-dark mb-0">Satisfaccion de clientes</h3>
      <button class="btn btn-outline-primary" @click="fetchReport">
        <i class="fas fa-sync-alt mr-1"></i> Actualizar
      </button>
    </div>

    <div class="row mb-4 bg-white p-3 shadow-sm rounded">
      <div class="col-md-2 mb-2">
        <label class="form-label font-weight-bold">Desde</label>
        <input type="date" class="form-control" v-model="filters.date_from">
      </div>
      <div class="col-md-2 mb-2">
        <label class="form-label font-weight-bold">Hasta</label>
        <input type="date" class="form-control" v-model="filters.date_to">
      </div>
      <div class="col-md-3 mb-2">
        <label class="form-label font-weight-bold">Profesional</label>
        <select class="form-control" v-model="filters.professional_id">
          <option value="">Todos</option>
          <option v-for="prof in professionals" :key="prof.id" :value="prof.id">{{ prof.name }}</option>
        </select>
      </div>
      <div class="col-md-3 mb-2">
        <label class="form-label font-weight-bold">Servicio</label>
        <select class="form-control" v-model="filters.service_id">
          <option value="">Todos</option>
          <option v-for="service in services" :key="service.id" :value="service.id">{{ service.descripcion }}</option>
        </select>
      </div>
      <div class="col-md-1 mb-2">
        <label class="form-label font-weight-bold">Nota</label>
        <select class="form-control" v-model="filters.rating">
          <option value="">Todas</option>
          <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
        </select>
      </div>
      <div class="col-md-1 mb-2 d-flex align-items-end">
        <button class="btn btn-primary w-100" @click="fetchReport">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-3 mb-2">
        <div class="metric bg-primary text-white">
          <span>Total</span>
          <strong>{{ summary.total }}</strong>
        </div>
      </div>
      <div class="col-md-3 mb-2">
        <div class="metric bg-success text-white">
          <span>Promedio</span>
          <strong>{{ summary.average }}</strong>
        </div>
      </div>
      <div class="col-md-3 mb-2">
        <div class="metric bg-info text-white">
          <span>Promotores</span>
          <strong>{{ summary.promoters }}</strong>
        </div>
      </div>
      <div class="col-md-3 mb-2">
        <div class="metric bg-warning text-dark">
          <span>Detractores</span>
          <strong>{{ summary.detractors }}</strong>
        </div>
      </div>
    </div>

    <div class="card border-0 shadow-sm">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover align-middle">
            <thead class="table-light">
              <tr>
                <th>Fecha cita</th>
                <th>Paciente</th>
                <th>DNI</th>
                <th>Profesional</th>
                <th>Servicio</th>
                <th>Nota</th>
                <th>Comentario</th>
                <th>Respondido</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in rows" :key="row.id">
                <td>{{ formatDate(row.appointment_date) }}</td>
                <td>{{ row.patient_name }}</td>
                <td>{{ row.patient_dni || '-' }}</td>
                <td>{{ row.professional_name || '-' }}</td>
                <td>{{ row.service_description || '-' }}</td>
                <td><span class="badge bg-success text-white px-3 py-2">{{ row.rating }}/10</span></td>
                <td>{{ row.comment || '-' }}</td>
                <td>{{ formatDateTime(row.answered_at) }}</td>
              </tr>
              <tr v-if="rows.length === 0">
                <td colspan="8" class="text-center text-muted py-4">No hay respuestas para los filtros seleccionados.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      filters: {
        date_from: moment().startOf('month').format('YYYY-MM-DD'),
        date_to: moment().format('YYYY-MM-DD'),
        professional_id: '',
        service_id: '',
        rating: '',
      },
      professionals: [],
      services: [],
      rows: [],
      summary: {
        total: 0,
        average: 0,
        promoters: 0,
        neutral: 0,
        detractors: 0,
      },
    }
  },
  mounted() {
    this.fetchCatalogs();
    this.fetchReport();
  },
  methods: {
    async fetchCatalogs() {
      const [professionals, services] = await Promise.all([
        axios.get('/api/profesional'),
        axios.get('/api/listarPreciosTodos'),
      ]);
      this.professionals = professionals.data;
      this.services = services.data;
    },
    async fetchReport() {
      const res = await axios.get('/api/satisfaccion-clientes', { params: this.filters });
      this.rows = res.data.data;
      this.summary = res.data.summary;
    },
    formatDate(date) {
      return date ? moment(date).format('DD/MM/YYYY') : '-';
    },
    formatDateTime(date) {
      return date ? moment(date).format('DD/MM/YYYY HH:mm') : '-';
    },
  },
}
</script>

<style scoped>
.metric {
  border-radius: 8px;
  padding: 18px;
  min-height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.metric span {
  text-transform: uppercase;
  font-size: 0.78rem;
  font-weight: 700;
  opacity: 0.85;
}
.metric strong {
  font-size: 2rem;
  line-height: 1.1;
}
</style>
