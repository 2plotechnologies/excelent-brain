<template>
  <main>
    <div class="mb-4">
      <h1 class="h3 mb-1 text-gray-800">Seguimiento CRM</h1>
      <p class="text-muted mb-0">Gestión de seguimiento, fidelización y recuperación de pacientes</p>
    </div>

    <div class="mb-3 d-flex gap-2 flex-wrap">
      <button
        type="button"
        class="btn"
        :class="tabActiva === 'fidelizacion' ? 'btn-primary' : 'btn-outline-secondary'"
        @click="tabActiva = 'fidelizacion'"
      >
        <i class="fa-regular fa-heart me-1"></i> Fidelización
      </button>
      <button
        type="button"
        class="btn"
        :class="tabActiva === 'recuperacion' ? 'btn-primary' : 'btn-outline-secondary'"
        @click="tabActiva = 'recuperacion'"
      >
        <i class="fa-solid fa-triangle-exclamation me-1"></i> Recuperación
      </button>
    </div>

    <div class="row g-3 mb-3">
      <div class="col-md-6 col-xl-3">
        <div class="card border-start border-success border-4 h-100">
          <div class="card-body py-3">
            <div class="small text-muted">Fidelizados</div>
            <div class="display-6 fw-bold">{{ resumen.fidelizados }}</div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-3">
        <div class="card border-start border-warning border-4 h-100">
          <div class="card-body py-3">
            <div class="small text-muted">No fidelizados</div>
            <div class="display-6 fw-bold">{{ resumen.noFidelizados }}</div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-3">
        <div class="card border-start border-danger border-4 h-100">
          <div class="card-body py-3">
            <div class="small text-muted">Recuperación</div>
            <div class="display-6 fw-bold">{{ resumen.recuperacion }}</div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-3">
        <div class="card border-start border-secondary border-4 h-100">
          <div class="card-body py-3">
            <div class="small text-muted">Inactivos</div>
            <div class="display-6 fw-bold">{{ resumen.inactivos }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-body">
        <div class="row g-2 align-items-center">
          <div class="col-lg-9">
            <input
              v-model="buscador"
              class="form-control"
              placeholder="Buscar paciente..."
              autocomplete="off"
            >
          </div>
          <div class="col-lg-3">
            <select v-model="filtroEtiqueta" class="form-select">
              <option value="todos">Todos</option>
              <option v-for="estado in estadosActuales" :key="estado" :value="estado">{{ estado }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="alert alert-primary bg-light border">
      <p class="mb-1 fw-bold">📋 Criterios de Fidelización:</p>
      <ul class="mb-2">
        <li><strong>Psicología:</strong> ≥1 mes desde primera atención + ≥4 citas → Fidelizado.</li>
        <li><strong>Psiquiatría:</strong> ≥60 días desde primera atención + ≥2 citas → Fidelizado.</li>
        <li><strong>Otros:</strong> ≥1 mes desde primera atención + &lt;4 citas → No Fidelizado.</li>
      </ul>
      <p class="mb-1 fw-bold">⚠ Criterios de Recuperación:</p>
      <ul class="mb-0">
        <li><strong>Psicología:</strong> No viene hace ≥3 meses → Estado Inactivo.</li>
        <li><strong>Psiquiatría:</strong> No viene hace ≥6 meses → Estado Inactivo.</li>
        <li><strong>Otros:</strong> No viene hace ≥3 meses → Estado Inactivo.</li>
      </ul>
    </div>

    <div class="card">
      <div class="table-responsive">
        <table class="table table-hover mb-0">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Servicio</th>
              <th>Profesional</th>
              <th>Citas</th>
              <th>1° Atención</th>
              <th>Última Cita</th>
              <th>Días sin venir</th>
              <th>Etiqueta</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in pacientesFiltrados" :key="item.patient_id">
              <td class="text-capitalize">{{ item.paciente }}</td>
              <td>{{ item.servicio }}</td>
              <td class="text-capitalize">{{ item.profesional }}</td>
              <td>{{ item.citas }}</td>
              <td>{{ fechaLatam(item.primera_atencion) }}</td>
              <td>{{ fechaLatam(item.ultima_cita) }}</td>
              <td>{{ item.dias_sin_venir }}</td>
              <td>
                <span class="badge" :class="badgeClass(item.etiqueta)">{{ item.etiqueta }}</span>
              </td>
            </tr>
            <tr v-if="pacientesFiltrados.length === 0">
              <td colspan="8" class="text-center text-muted py-4">No se encontraron pacientes en este segmento</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
import moment from 'moment';

export default {
  name: 'HomeSeguimiento',
  data() {
    return {
      pacientes: [],
      resumen: {
        fidelizados: 0,
        noFidelizados: 0,
        recuperacion: 0,
        inactivos: 0,
      },
      tabActiva: 'fidelizacion',
      buscador: '',
      filtroEtiqueta: 'todos',
    };
  },
  computed: {
    estadosActuales() {
      if (this.tabActiva === 'fidelizacion') {
        return ['Fidelizado', 'No Fidelizado'];
      }
      return ['Recuperación', 'Inactivo'];
    },
    pacientesTab() {
      if (this.tabActiva === 'fidelizacion') {
        return this.pacientes.filter((item) => ['Fidelizado', 'No Fidelizado'].includes(item.etiqueta));
      }
      return this.pacientes.filter((item) => ['Recuperación', 'Inactivo'].includes(item.etiqueta));
    },
    pacientesFiltrados() {
      const texto = this.buscador.trim().toLowerCase();
      return this.pacientesTab.filter((item) => {
        const coincideTexto = !texto
          || (item.paciente || '').toLowerCase().includes(texto)
          || (item.profesional || '').toLowerCase().includes(texto)
          || (item.servicio || '').toLowerCase().includes(texto);

        const coincideEstado = this.filtroEtiqueta === 'todos' || item.etiqueta === this.filtroEtiqueta;

        return coincideTexto && coincideEstado;
      });
    },
  },
  watch: {
    tabActiva() {
      this.filtroEtiqueta = 'todos';
    },
  },
  methods: {
    async cargarSeguimiento() {
      const { data } = await this.axios.get('/api/seguimiento-crm');
      this.pacientes = data.pacientes || [];
      this.resumen = data.resumen || this.resumen;
    },
    fechaLatam(fecha) {
      if (!fecha) {
        return '-';
      }
      return moment(fecha).format('DD/MM/YYYY');
    },
    badgeClass(etiqueta) {
      if (etiqueta === 'Fidelizado') return 'bg-success';
      if (etiqueta === 'No Fidelizado') return 'bg-warning text-dark';
      if (etiqueta === 'Inactivo') return 'bg-secondary';
      return 'bg-danger';
    },
  },
  mounted() {
    this.cargarSeguimiento();
  },
};
</script>
