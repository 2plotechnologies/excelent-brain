<template>
  <div class="paquetes-container pb-5">
    <!-- Header Area -->
    <div class="d-flex justify-content-between align-items-center mb-4 mt-2 header-section">
      <div class="d-flex align-items-center gap-3">
        <h1 class="h3 mb-0 text-gray-800 fw-bold d-flex align-items-center">
          <i class="fas fa-box-open text-primary me-2"></i> Paquetes & Sesiones
        </h1>
        <div class="deudas-badge" v-if="metricas.vencidas > 0">
          <i class="fas fa-user-times me-1"></i> Deudas
          <span class="badge bg-danger ms-1 rounded-pill">{{ metricas.vencidas }}</span>
        </div>
      </div>
    </div>

    <!-- Buscador y Acciones -->
    <div class="d-flex justify-content-between mb-4 flex-wrap gap-2">
      <div class="search-box">
        <i class="fas fa-search search-icon"></i>
        <input 
          type="text" 
          class="form-control" 
          placeholder="Buscar por paciente o DNI..." 
          v-model="busqueda"
          @input="filtrarPaquetes"
        >
      </div>
      <button class="btn btn-success fw-bold flex-shrink-0 shadow-sm" data-bs-toggle="modal" data-bs-target="#modalMembresias">
        <i class="fas fa-plus me-1"></i> Nuevo Paquete
      </button>
    </div>

    <!-- Tarjetas de Métricas -->
    <div class="row g-3 mb-4 metricas-row">
      <div class="col-md-3">
        <div class="card shadow-sm border-0 h-100 summary-card act-card">
          <div class="card-body">
            <p class="text-muted text-uppercase mb-1 small fw-bold">Activos</p>
            <h2 class="mb-0 text-success fw-bold">{{ metricas.activos }}</h2>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card shadow-sm border-0 h-100 summary-card com-card">
          <div class="card-body">
             <p class="text-muted text-uppercase mb-1 small fw-bold">Completados</p>
             <h2 class="mb-0 text-primary fw-bold">{{ metricas.completados }}</h2>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card shadow-sm border-0 h-100 summary-card ven-card">
          <div class="card-body">
             <p class="text-muted text-uppercase mb-1 small fw-bold">Cuotas Vencidas</p>
             <h2 class="mb-0 text-danger fw-bold">{{ metricas.vencidas }}</h2>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card shadow-sm border-0 h-100 summary-card tot-card">
          <div class="card-body">
             <p class="text-muted text-uppercase mb-1 small fw-bold">Total Paquetes</p>
             <h2 class="mb-0 text-dark fw-bold">{{ metricas.totales }}</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Botones de Filtro -->
    <div class="filters-area mb-4">
      <div class="d-flex align-items-center mb-2">
        <span class="filter-label text-muted">Estado:</span>
        <div class="d-flex gap-2 ms-3 flex-wrap">
          <button class="btn btn-sm btn-filter" :class="{'active': filtroEstado === 0}" @click="setFiltroEstado(0)">Todos</button>
          <button class="btn btn-sm btn-filter" :class="{'active': filtroEstado === 2}" @click="setFiltroEstado(2)">Activo</button>
          <button class="btn btn-sm btn-filter" :class="{'active': filtroEstado === 3}" @click="setFiltroEstado(3)">Completado</button>
          <button class="btn btn-sm btn-filter" :class="{'active': filtroEstado === 6}" @click="setFiltroEstado(6)">Cancelado</button>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <span class="filter-label text-muted">Tipo:</span>
        <div class="d-flex gap-2 ms-3 flex-wrap">
          <button class="btn btn-sm btn-filter" :class="{'active': filtroTipo === -1}" @click="setFiltroTipo(-1)">Todos</button>
          <button class="btn btn-sm btn-filter" :class="{'active': filtroTipo === 1}" @click="setFiltroTipo(1)">Consulta / Psicológica</button>
          <button class="btn btn-sm btn-filter" :class="{'active': filtroTipo === 0}" @click="setFiltroTipo(0)">Membresía Ext.</button>
        </div>
      </div>
    </div>

    <!-- LOADING -->
    <div v-if="loading" class="text-center py-5">
      <div class="text-muted fs-5">
        <i class="fas fa-spinner fa-spin fa-2x mb-3"></i><br>
        Cargando paquetes...
      </div>
    </div>

    <!-- SIN RESULTADOS -->
    <div v-else-if="paquetesFiltrados.length === 0" class="text-center py-5">
      <div class="text-muted fs-5">
        <i class="fas fa-inbox fa-3x mb-3 text-light"></i><br>
        No se encontraron paquetes.
      </div>
    </div>

    <div class="package-list" v-if="!loading && paquetesFiltrados.length > 0">
      <div 
        v-for="paquete in paquetesFiltrados" 
        :key="paquete.id" 
        class="card shadow-sm border-0 mb-3 package-card"
        :class="{
          'border-active': paquete.estado === 2, 
          'border-completed': paquete.estado === 3
        }"
      >
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-start">
            
            <div class="d-flex gap-3">
              <div class="package-icon">
                <i class="fas fa-cube text-primary"></i>
              </div>
              
              <div>
                <div class="d-flex align-items-center gap-2 mb-2">
                  <h5 class="mb-0 fw-bold package-title">{{ paquete.paquete_nombre }}</h5>
                  <span class="status-badge" :class="getStatusClass(paquete.estado)">{{ paquete.status_name }}</span>
                  <span class="type-badge">{{ getTipoBadge(paquete.idClasificacion) }}</span>
                </div>
                
                <div class="d-flex flex-wrap gap-4 text-muted small info-meta mb-3">
                  <span class="d-flex align-items-center"><i class="far fa-user me-1"></i> {{ paquete.patient_name }} {{ paquete.patient_nombres }}</span>
                  <span class="d-flex align-items-center"><i class="far fa-calendar-alt me-1"></i> {{ formatFecha(paquete.inicio) }} — {{ formatFecha(paquete.fin) }}</span>
                  <span class="d-flex align-items-center" v-if="paquete.professional"><i class="fas fa-user-md me-1"></i> {{ paquete.professional }}</span>
                </div>

                <div class="progress-section mb-3">
                  <div class="d-flex justify-content-between small text-muted mb-1">
                    <span>{{ paquete.sesiones_usadas }} de {{ paquete.total_sesiones }} sesiones usadas</span>
                    <span class="fw-bold">{{ calcularProgreso(paquete) }}%</span>
                  </div>
                  <div class="progress" style="height: 6px;">
                    <div 
                      class="progress-bar" 
                      :class="getProgressBarClass(paquete)"
                      role="progressbar" 
                      :style="{ width: calcularProgreso(paquete) + '%' }" 
                      :aria-valuenow="calcularProgreso(paquete)" 
                      aria-valuemin="0" 
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Acciones Top Right (Opcional si se requiere algo más minimalista) -->
          </div>

          <hr class="border-light opacity-50 my-3">

          <div class="d-flex justify-content-between align-items-center package-footer flex-wrap gap-3">
            
            <!-- Payment Info -->
            <div class="d-flex align-items-center gap-4 payment-info">
              <div class="fw-bold small">
                <i class="fas fa-dollar-sign text-muted me-1"></i> Total: S/ {{ parseFloat(paquete.monto).toFixed(2) }}
              </div>
              <div class="fw-bold small text-success">
                <i class="fas fa-check-circle me-1"></i> Pagado: S/ {{ parseFloat(paquete.pagado || 0).toFixed(2) }}
              </div>
              <div class="fw-bold small text-danger" v-if="paquete.debe > 0">
                <i class="fas fa-exclamation-triangle me-1"></i> Debe: S/ {{ parseFloat(paquete.debe).toFixed(2) }}
              </div>
              <div class="fw-bold small text-success" v-else>
                <span class="badge bg-success-subtle text-success border border-success-subtle rounded-pill">Pagado al 100%</span>
              </div>
            </div>

            <!-- Installment info and Action -->
            <div class="d-flex align-items-center gap-3">
              <div class="small text-muted me-3">
                Cuotas: {{ paquete.total_cuotas || 0 }} 
                <span v-if="paquete.cuotas_vencidas > 0" class="text-danger ms-2 badge bg-danger-subtle text-danger p-1 px-2 border border-danger-subtle rounded-pill">
                  <i class="fas fa-exclamation-triangle"></i> {{ paquete.cuotas_vencidas }} cuota(s) vencida(s)
                </span>
                <span v-else class="text-success ms-2 badge bg-success-subtle text-success p-1 px-2 border border-success-subtle rounded-pill">Cuotas al día</span>
              </div>
              <button class="btn btn-light btn-sm shadow-sm action-btn outline-btn" 
                v-if="paquete.debe > 0" 
                data-bs-toggle="modal" 
                data-bs-target="#modalPagarCuota" 
                @click="paqueteSeleccionado = paquete">
                <i class="far fa-credit-card me-1"></i> Pagar cuota
              </button>
            </div>
          </div>
          
          <!-- Bottom actions -->
          <div class="d-flex justify-content-between align-items-center mt-3 pt-2">
            <div class="d-flex gap-3 small">
              <span class="text-success fw-bold" v-if="paquete.descuento > 0">-{{ paquete.descuento }} desc.</span>
              <a v-if="paquete.estado === 3" href="#" class="text-primary text-decoration-none hover-link" @click.prevent="verReporte(paquete)"><i class="far fa-file-alt me-1"></i> Ver reporte</a>
            </div>
            
            <a href="#" class="small text-primary text-decoration-none dropdown-toggle-link" @click.prevent="toggleHistory(paquete.id)">
              Historial de citas <i class="fas ms-1" :class="activeHistories.includes(paquete.id) ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </a>
          </div>
          
          <!-- Appointment History Accordion -->
          <div class="appointment-history-box mt-3 p-3 bg-light rounded" v-if="activeHistories.includes(paquete.id)">
            <h6 class="fw-bold mb-3 small text-dark"><i class="fas fa-list me-2"></i> Historial de Citas</h6>
            
            <div v-if="!paquete.historial_citas || paquete.historial_citas.length === 0" class="text-muted small fst-italic">
              No hay citas.
            </div>
            
            <div v-else class="history-list-container">
              <div v-for="(cita, index) in paquete.historial_citas" :key="cita.id" class="history-item d-flex align-items-center py-2 border-bottom">
                <div class="fw-bold text-dark small" style="min-width: 110px;">
                  <i class="far fa-calendar-check text-primary me-1"></i> {{ formatFecha(cita.date) }} <br>
                  <small class="text-muted fw-normal ms-3">{{ cita.hora_inicio ? cita.hora_inicio.substring(0,5) : '' }}</small>
                </div>
                <div class="small w-100 ps-2 border-start ms-2">
                  <div class="d-flex align-items-center flex-wrap gap-2">
                    <span class="fw-bold">{{ cita.professional ? cita.professional.name : 'Sin asignación' }}</span>
                    <span class="badge" :class="getCitaStatusBadgeMap(cita.status).class">{{ getCitaStatusBadgeMap(cita.status).text }}</span>
                  </div>
                  <div class="text-muted mt-1" v-if="cita.link" style="font-size: 0.75rem;"><i class="fas fa-link me-1"></i> Enlace disponible</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Modal Pagar Cuota -->
    <div class="modal fade" id="modalPagarCuota" tabindex="-1" aria-labelledby="modalPagarCuotaLabel" aria-hidden="true" v-if="paqueteSeleccionado">
      <div class="modal-dialog modal-lg">
        <div class="modal-content border-0 shadow">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title" id="modalPagarCuotaLabel"><i class="fas fa-file-invoice-dollar me-2"></i> Pagar Cuotas de Membresía</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            
            <div class="row mb-4">
              <div class="col-md-6 border-end">
                <p class="text-uppercase text-muted small fw-bold mb-1">Paciente</p>
                <div class="d-flex align-items-center">
                  <div class="bg-light rounded-circle p-2 me-2"><i class="fas fa-user text-primary"></i></div>
                  <h6 class="mb-0 fw-bold">{{ paqueteSeleccionado.patient_name }} {{ paqueteSeleccionado.patient_nombres }}</h6>
                </div>
              </div>
              <div class="col-md-6 ps-4">
                <p class="text-uppercase text-muted small fw-bold mb-1">Total Pendiente (Deuda)</p>
                <h4 class="mb-0 text-danger fw-bold">S/ {{ parseFloat(paqueteSeleccionado.debe).toFixed(2) }}</h4>
              </div>
            </div>
            
            <h6 class="fw-bold mb-3">Desglose de Cuotas</h6>
            <div class="table-responsive bg-white rounded border">
              <table class="table table-hover mb-0 align-middle">
                <thead class="table-light">
                  <tr>
                    <th class="py-3">Fecha de Vencimiento</th>
                    <th>Estado</th>
                    <th class="text-end">Monto a Pagar</th>
                    <th class="text-center">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cuota in (paqueteSeleccionado.deudas || [])" :key="cuota.id" :class="{'table-success': cuota.estado == 2}">
                    <td>
                      <div class="fw-bold">{{ formatFecha(cuota.fecha) }}</div>
                      <small class="text-danger" v-if="cuota.estado == 1 && esCuotaVencida(cuota.fecha)">
                        <i class="fas fa-exclamation-circle"></i> Cuota Vencida
                      </small>
                    </td>
                    <td>
                      <span v-if="cuota.estado == 2" class="badge bg-success-subtle border border-success-subtle text-success">Pagado</span>
                      <span v-else class="badge bg-warning-subtle border border-warning-subtle text-warning">Pendiente</span>
                    </td>
                    <td class="text-end fw-bold">
                      S/ {{ parseFloat(cuota.monto).toFixed(2) }}
                    </td>
                    <td class="text-center">
                      <button v-if="cuota.estado == 1" class="btn btn-sm btn-primary shadow-sm" @click="procesarPago(cuota)" :disabled="procesandoPago">
                        <i class="fas fa-hand-holding-usd me-1" v-if="!procesandoPago"></i> 
                        <i class="fas fa-spinner fa-spin me-1" v-else></i> Pagar 
                      </button>
                      <button v-else class="btn btn-sm btn-light text-success" disabled>
                        <i class="fas fa-check"></i>
                      </button>
                    </td>
                  </tr>
                  <tr v-if="!paqueteSeleccionado.deudas || paqueteSeleccionado.deudas.length === 0">
                    <td colspan="4" class="text-center py-4 text-muted fst-italic">No existen registros de cuotas para este paquete.</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
          <div class="modal-footer bg-light">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar ventana</button>
          </div>
        </div>
      </div>
    </div>

    <ModalMembresias :idUsuario="idUsuario" vista="buscar" @membresiaGuardada="cargarPaquetes(1)"></ModalMembresias>

    <!-- Paginación -->
    <div class="d-flex justify-content-center mt-4" v-if="pagination.last_page > 1">
      <nav aria-label="Page navigation">
        <ul class="pagination shadow-sm">
          <li class="page-item" :class="{'disabled': pagination.current_page === 1}">
            <a class="page-link" href="#" @click.prevent="cambiarPagina(pagination.current_page - 1)"><i class="fas fa-chevron-left"></i> Anterior</a>
          </li>
          
          <li v-for="page in pagesNumber" :key="page" class="page-item" :class="{'active': page === pagination.current_page}">
            <a class="page-link" href="#" @click.prevent="cambiarPagina(page)">{{ page }}</a>
          </li>
          
          <li class="page-item" :class="{'disabled': pagination.current_page === pagination.last_page}">
            <a class="page-link" href="#" @click.prevent="cambiarPagina(pagination.current_page + 1)">Siguiente <i class="fas fa-chevron-right"></i></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import ModalMembresias from '../../recepcionista/components/pagos/ModalMembresias.vue';

export default {
  name: 'HomePaquetes',
  components: {
    ModalMembresias
  },
  data() {
    return {
      paquetesFiltrados: [],
      busqueda: '',
      filtroEstado: 0,
      filtroTipo: -1,
      metricas: {
        activos: 0,
        completados: 0,
        vencidas: 0,
        totales: 0
      },
      pagination: {
        current_page: 1,
        last_page: 1,
        from: 1,
        to: 1
      },
      searchTimeout: null,
      loading: false,
      activeHistories: [],
      idUsuario: -1,
      paqueteSeleccionado: null,
      procesandoPago: false
    };
  },
  computed: {
    pagesNumber() {
      if (!this.pagination.to) return [];
      let from = this.pagination.current_page - 2;
      if (from < 1) from = 1;
      let to = from + 4;
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }
      let pagesArray = [];
      for (let page = from; page <= to; page++) {
        pagesArray.push(page);
      }
      return pagesArray;
    }
  },
  mounted() {
    this.obtenerUsuarioYPaquetes();
  },
  methods: {
    async obtenerUsuarioYPaquetes() {
      try {
        const res = await this.axios.get('/api/user');
        this.idUsuario = parseInt(res.data.user.id);
      } catch (error) {
        console.warn("No se pudo obtener el usuario", error);
      }
      this.cargarPaquetes();
    },
    async cargarPaquetes(page = 1) {
      if(this.loading) return;
      this.loading = true;
      try {
        const response = await this.axios.get(`/api/listarPaquetes`, {
          params: {
            page: page,
            busqueda: this.busqueda,
            estado: this.filtroEstado,
            tipo: this.filtroTipo
          }
        });
        
        this.paquetesFiltrados = response.data.paquetes.data;
        this.metricas = response.data.metricas;
        
        this.pagination = {
          current_page: response.data.paquetes.current_page,
          last_page: response.data.paquetes.last_page,
          from: response.data.paquetes.from,
          to: response.data.paquetes.to
        };
      } catch (error) {
        console.error("Error cargando paquetes:", error);
      } finally {
        this.loading = false;
      }
    },
    cambiarPagina(page) {
      if (page >= 1 && page <= this.pagination.last_page) {
        this.cargarPaquetes(page);
      }
    },
    filtrarPaquetes() {
      // Debounce the search
      if (this.searchTimeout) clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.cargarPaquetes(1);
      }, 500);
    },
    setFiltroEstado(state) {
      this.filtroEstado = state;
      this.cargarPaquetes(1);
    },
    setFiltroTipo(type) {
      this.filtroTipo = type;
      this.cargarPaquetes(1);
    },
    formatFecha(fechaStr) {
      if (!fechaStr) return '';
      const parts = fechaStr.split('-');
      if (parts.length === 3) {
        // Assume YYYY-MM-DD
        return `${parts[0]}-${parts[1]}-${parts[2].substring(0,2)}`;
      }
      return fechaStr;
    },
    calcularProgreso(paquete) {
      if (paquete.total_sesiones == 0) return 0;
      let target = (paquete.sesiones_usadas / paquete.total_sesiones) * 100;
      return target > 100 ? 100 : Math.round(target);
    },
    getStatusClass(estado) {
      switch(estado) {
        case 2: return 'status-act'; // Activo
        case 3: return 'status-com'; // Completado
        case 1: return 'status-pen'; // Pendiente
        case 6: return 'status-can'; // Cancelado
        default: return 'status-def';
      }
    },
    getProgressBarClass(paquete) {
      let calc = this.calcularProgreso(paquete);
      if (calc >= 100) return 'bg-primary';
      if (paquete.estado == 2) return 'bg-warning';
      return 'bg-secondary';
    },
    getTipoBadge(idClasificacion) {
      if(idClasificacion == 1) return 'Psicológica';
      if(idClasificacion == 2) return 'Psiquiátrica';
      if(idClasificacion == 5) return 'Membresía Ext.';
      return 'Consulta';
    },
    toggleHistory(id) {
      const index = this.activeHistories.indexOf(id);
      if (index > -1) {
        this.activeHistories.splice(index, 1);
      } else {
        this.activeHistories.push(id);
      }
    },
    getCitaStatusBadgeMap(status) {
      switch(parseInt(status)) {
        case 1: return { text: 'Agendado', class: 'bg-warning text-dark' };
        case 2: return { text: 'Atendido / Confirmado', class: 'bg-success text-white' };
        case 3: return { text: 'Anulado', class: 'bg-danger text-white' };
        case 4: return { text: 'Reprogramado', class: 'bg-info text-dark' };
        default: return { text: 'Otro', class: 'bg-secondary text-white' };
      }
    },
    verReporte(paquete) {
      window.open(`/api/reportePaquete/${paquete.id}?token=${this.$token}`, '_blank');
    },
    esCuotaVencida(fecha) {
      if(!fecha) return false;
      const today = new Date().toISOString().slice(0, 10);
      return fecha < today;
    },
    async procesarPago(cuota) {
      if(!confirm('¿Seguro que deseas registrar el pago de S/ ' + parseFloat(cuota.monto).toFixed(2) + '?')) return;
      
      this.procesandoPago = true;
      try {
        const payload = {
          idDeuda: cuota.id,
          user_id: this.idUsuario,
          estado: 2, 
          observacion: 'Pago de cuota desde administrador',
          nombre: this.paqueteSeleccionado.patient_name + ' ' + (this.paqueteSeleccionado.patient_nombres || ''),
          precio: cuota.monto,
          tipo: 8, 
          idMembresia: this.paqueteSeleccionado.id
        };

        await this.axios.post('/api/pagarDeudaMembresia', payload);
        
        cuota.estado = 2; 
        this.cargarPaquetes(this.pagination.current_page);
        
      } catch (error) {
        console.error(error);
        alert('Ocurrió un error procesando el pago. Verifica tu conexión.');
      } finally {
        this.procesandoPago = false;
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.paquetes-container {
  font-family: 'Inter', sans-serif;
  color: #334155;
  background-color: #f8fafc;
  min-height: 100vh;
  padding: 1.5rem;
  border-radius: 12px;
}

/* Identifiers */
.deudas-badge {
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #64748b;
  display: flex;
  align-items: center;
  font-weight: 500;
}

/* Search Box */
.search-box {
  position: relative;
  width: 100%;
  max-width: 380px;
}
.search-box .search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
}
.search-box input {
  padding-left: 40px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background: #fff;
  transition: all 0.2s;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
}
.search-box input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  outline: none;
}

/* Metric Cards */
.summary-card {
  border-radius: 12px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.summary-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.06), 0 4px 6px -2px rgba(0,0,0,0.03) !important;
}

/* Filters */
.filter-label {
  width: 60px;
  font-size: 0.9rem;
  font-weight: 500;
}
.btn-filter {
  background: transparent;
  color: #64748b;
  border: none;
  font-weight: 500;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  transition: all 0.2s;
}
.btn-filter:hover {
  background: #f1f5f9;
  color: #0f172a;
}
.btn-filter.active {
  background: #3b82f6;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);
}

/* Package List */
.package-card {
  border-radius: 14px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.package-card:hover {
  box-shadow: 0 10px 20px -5px rgba(0,0,0,0.06), 0 8px 10px -6px rgba(0,0,0,0.04) !important;
}

.border-active {
  border-left: 5px solid #f59e0b !important;
}
.border-completed {
  border-left: 5px solid #3b82f6 !important;
}

.package-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.package-title {
  color: #0f172a;
  font-size: 1.15rem;
}

/* Badges */
.status-badge {
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.status-act { background: #dcfce7; color: #166534; }
.status-com { background: #dbeafe; color: #1e3a8a; }
.status-pen { background: #fef9c3; color: #854d0e; }
.status-can { background: #fee2e2; color: #991b1b; }
.status-def { background: #f1f5f9; color: #475569; }

.type-badge {
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  background: #e0f2fe;
  color: #0369a1;
  font-weight: 600;
}

/* Progress bar smoothing */
.progress-bar {
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Buttons */
.outline-btn {
  border: 1px solid #e2e8f0;
  background: white;
  color: #475569;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s;
}
.outline-btn:hover {
  background: #f8fafc;
  color: #0f172a;
  border-color: #cbd5e1;
}

.hover-link {
  transition: color 0.2s;
}
.hover-link:hover {
  color: #0f172a !important;
}

.dropdown-toggle-link {
  color: #3b82f6;
  font-weight: 500;
}
.dropdown-toggle-link:hover {
  color: #2563eb;
}

.info-meta span {
  font-size: 0.875rem;
}

.history-list-container {
  max-height: 250px;
  overflow-y: auto;
}
.history-list-container::-webkit-scrollbar {
  width: 6px;
}
.history-list-container::-webkit-scrollbar-track {
  background: #f1f5f9; 
}
.history-list-container::-webkit-scrollbar-thumb {
  background: #cbd5e1; 
  border-radius: 10px;
}
.history-list-container::-webkit-scrollbar-thumb:hover {
  background: #94a3b8; 
}
.history-item:last-child {
  border-bottom: none !important;
}
</style>
