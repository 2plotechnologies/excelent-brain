<template>
  <div class="container-fluid p-4">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h3 class="fw-bold mb-0 text-dark">
        <i class="fas fa-money-check-alt text-primary me-2"></i> Notas de Crédito
      </h3>
    </div>

    <!-- Filtros -->
    <div class="card border-0 shadow-sm mb-4">
      <div class="card-body">
        <div class="row g-3">
          <div class="col-md-4">
            <input type="text" class="form-control bg-light" placeholder="Buscar paciente..." v-model="busqueda">
          </div>
          <div class="col-md-3">
            <select class="form-select bg-light" v-model="filtroEstado">
              <option value="0">Todos los estados</option>
              <option value="1">Disponible</option>
              <option value="2">Gastado</option>
              <option value="3">Devuelto</option>
              <option value="4">Anulado</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Lista de Notas -->
    <div class="card border-0 shadow-sm">
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead class="table-light">
              <tr>
                <th class="ps-4">ID</th>
                <th>Paciente</th>
                <th>Paquete Origen</th>
                <th>Monto Original</th>
                <th>Disponible</th>
                <th>Estado</th>
                <th class="text-end pe-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="nota in notasFiltradas" :key="nota.id">
                <td class="ps-4">
                  <span class="fw-bold text-muted">#{{ nota.id.toString().padStart(4, '0') }}</span>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="avatar-sm rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center me-3 fw-bold">
                      {{ (nota.patient?.name || 'U').charAt(0) }}
                    </div>
                    <div>
                      <div class="fw-bold text-dark">{{ nota.patient?.name }} {{ nota.patient?.nombres }}</div>
                      <div class="small text-muted"><i class="fas fa-id-card me-1"></i> {{ nota.patient?.dni }}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="small fw-bold">Paquete #{{ nota.idMembresia }}</div>
                  <div class="small text-muted">{{ formatearFecha(nota.created_at) }}</div>
                </td>
                <td>
                  <span class="fw-bold">S/ {{ parseFloat(nota.monto_original).toFixed(2) }}</span>
                </td>
                <td>
                  <span class="fw-bold fs-6" :class="nota.monto_disponible > 0 ? 'text-success' : 'text-muted'">
                    S/ {{ parseFloat(nota.monto_disponible).toFixed(2) }}
                  </span>
                </td>
                <td>
                  <span class="badge rounded-pill" :class="getStatusBadgeClass(nota.estado)">
                    {{ nota.status_name }}
                  </span>
                </td>
                <td class="text-end pe-4">
                  <div class="dropdown" v-if="nota.estado === 1 && nota.monto_disponible > 0">
                    <button class="btn btn-sm btn-light dropdown-toggle rounded-pill shadow-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Opciones
                    </button>
                    <ul class="dropdown-menu shadow-sm">
                      <li><a class="dropdown-item" href="#" @click.prevent="prepararDevolucion(nota)"><i class="fas fa-hand-holding-usd me-2 text-success"></i> Devolver dinero</a></li>
                      <li><a class="dropdown-item" href="#" @click.prevent="prepararUsoManual(nota)"><i class="fas fa-clipboard-check me-2 text-primary"></i> Usar manualmente</a></li>
                    </ul>
                  </div>
                  <button v-else class="btn btn-sm btn-outline-secondary rounded-pill disabled" title="No hay acciones disponibles">
                    <i class="fas fa-lock"></i>
                  </button>
                </td>
              </tr>
              <tr v-if="notasFiltradas.length === 0">
                <td colspan="7" class="text-center py-5 text-muted">
                  <i class="fas fa-inbox fa-3x mb-3 opacity-50"></i>
                  <p class="mb-0">No se encontraron notas de crédito</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal Devolver Dinero -->
    <div class="modal fade" id="modalDevolucion" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg">
          <div class="modal-header border-0 pb-0 px-4 pt-4">
            <h5 class="modal-title fw-bold text-dark">
              <i class="fas fa-hand-holding-usd text-success me-2"></i> Devolver Dinero
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4" v-if="notaSeleccionada">
            <p class="text-muted small mb-4">Esta acción registrará un <b>Egreso</b> en la caja del día por el monto total disponible y cerrará la nota de crédito.</p>
            
            <div class="bg-success-subtle border border-success-subtle rounded p-3 mb-3 d-flex justify-content-between align-items-center">
              <span class="text-success fw-bold">Monto a Devolver:</span>
              <span class="fs-4 fw-bold text-success">S/ {{ parseFloat(notaSeleccionada.monto_disponible).toFixed(2) }}</span>
            </div>

            <div class="mb-3">
              <label class="form-label small fw-bold text-muted">Motivo / Observación del egreso</label>
              <textarea class="form-control" v-model="formDevolucion.observacion" rows="2" placeholder="Opcional..."></textarea>
            </div>
          </div>
          <div class="modal-footer border-0 p-4 pt-0">
            <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-success rounded-pill px-4 shadow" @click="confirmarDevolucion" :disabled="procesando">
              <i v-if="procesando" class="fas fa-spinner fa-spin me-2"></i> Confirmar Devolución
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Uso Manual -->
    <div class="modal fade" id="modalUsoManual" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg">
          <div class="modal-header border-0 pb-0 px-4 pt-4">
            <h5 class="modal-title fw-bold text-dark">
              <i class="fas fa-clipboard-check text-primary me-2"></i> Descontar Saldo
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4" v-if="notaSeleccionada">
            <p class="text-muted small mb-4">Descuenta manualmente un monto de la nota de crédito. Útil si se usó el saldo para pagar una consulta o comprar otro paquete.</p>
            
            <div class="d-flex justify-content-between mb-3 text-muted">
              <span>Saldo Disponible:</span>
              <span class="fw-bold text-dark">S/ {{ parseFloat(notaSeleccionada.monto_disponible).toFixed(2) }}</span>
            </div>

            <div class="mb-3">
              <label class="form-label small fw-bold text-muted">Monto a descontar (S/)</label>
              <input type="number" class="form-control form-control-lg" v-model.number="formUso.monto" min="0.1" :max="notaSeleccionada.monto_disponible" step="0.1">
            </div>

            <div class="mb-3">
              <label class="form-label small fw-bold text-muted">Detalle / Razón</label>
              <textarea class="form-control" v-model="formUso.observacion" rows="2" placeholder="Ej: Pago parcial Cita #1234"></textarea>
            </div>
          </div>
          <div class="modal-footer border-0 p-4 pt-0">
            <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary rounded-pill px-4 shadow" @click="confirmarUso" :disabled="procesando || !esMontoValido">
              <i v-if="procesando" class="fas fa-spinner fa-spin me-2"></i> Confirmar Uso
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
  name: 'NotasCredito',
  data() {
    return {
      notas: [],
      busqueda: '',
      filtroEstado: 0,
      loading: false,
      procesando: false,
      notaSeleccionada: null,
      formDevolucion: { observacion: '' },
      formUso: { monto: 0, observacion: '' },
      user: null
    };
  },
  computed: {
    notasFiltradas() {
      return this.notas.filter(nota => {
        let matchBusqueda = true;
        let matchEstado = true;

        if (this.busqueda.trim() !== '') {
          const b = this.busqueda.toLowerCase();
          const p = nota.patient;
          matchBusqueda = p && ((p.name && p.name.toLowerCase().includes(b)) || 
                                (p.nombres && p.nombres.toLowerCase().includes(b)) || 
                                (p.dni && p.dni.includes(b)));
        }

        if (this.filtroEstado !== 0 && this.filtroEstado !== '0') {
          matchEstado = nota.estado === parseInt(this.filtroEstado);
        }

        return matchBusqueda && matchEstado;
      });
    },
    esMontoValido() {
      return this.formUso.monto > 0 && this.formUso.monto <= (this.notaSeleccionada?.monto_disponible || 0);
    }
  },
  methods: {
    async fetchNotas() {
      this.loading = true;
      try {
        const res = await this.axios.get('/api/notas-credito');
        this.notas = res.data;
      } catch (error) {
        console.error("Error al obtener notas:", error);
      } finally {
        this.loading = false;
      }
    },
    async fetchUser() {
      try {
        const res = await this.axios.get('/api/user');
        this.user = res.data.user;
      } catch (error) {
        console.error(error);
      }
    },
    formatearFecha(fecha) {
      return moment(fecha).format('DD/MM/YYYY HH:mm');
    },
    getStatusBadgeClass(estado) {
      switch(estado) {
        case 1: return 'bg-success-subtle text-success border border-success-subtle';
        case 2: return 'bg-secondary-subtle text-secondary border border-secondary-subtle';
        case 3: return 'bg-primary-subtle text-primary border border-primary-subtle';
        case 4: return 'bg-danger-subtle text-danger border border-danger-subtle';
        default: return 'bg-light text-dark';
      }
    },
    prepararDevolucion(nota) {
      this.notaSeleccionada = nota;
      this.formDevolucion.observacion = '';
      const modal = new bootstrap.Modal(document.getElementById('modalDevolucion'));
      modal.show();
    },
    async confirmarDevolucion() {
      this.procesando = true;
      try {
        const idSede = localStorage.getItem('idSede') || 1;
        await this.axios.post(`/api/notas-credito/${this.notaSeleccionada.id}/devolver`, {
          observacion: this.formDevolucion.observacion,
          idUsuario: this.user ? this.user.id : -1,
          idSede: idSede
        });
        
        this.$swal.fire('Éxito', 'Se registró el egreso y se devolvió el dinero.', 'success');
        
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalDevolucion'));
        if (modal) modal.hide();
        
        this.fetchNotas();
      } catch (error) {
        this.$swal.fire('Error', error.response?.data?.error || 'Ocurrió un error', 'error');
      } finally {
        this.procesando = false;
      }
    },
    prepararUsoManual(nota) {
      this.notaSeleccionada = nota;
      this.formUso.monto = parseFloat(nota.monto_disponible);
      this.formUso.observacion = '';
      const modal = new bootstrap.Modal(document.getElementById('modalUsoManual'));
      modal.show();
    },
    async confirmarUso() {
      this.procesando = true;
      try {
        await this.axios.post(`/api/notas-credito/${this.notaSeleccionada.id}/usar`, {
          monto: this.formUso.monto,
          observacion: this.formUso.observacion
        });
        
        this.$swal.fire('Éxito', 'Saldo descontado correctamente.', 'success');
        
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalUsoManual'));
        if (modal) modal.hide();
        
        this.fetchNotas();
      } catch (error) {
        this.$swal.fire('Error', error.response?.data?.error || 'Ocurrió un error', 'error');
      } finally {
        this.procesando = false;
      }
    }
  },
  mounted() {
    this.fetchUser();
    this.fetchNotas();
  }
};
</script>

<style scoped>
.avatar-sm {
  width: 32px;
  height: 32px;
  font-size: 0.875rem;
}
.dropdown-menu {
  border-radius: 12px;
  border: none;
}
.dropdown-item {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}
</style>
