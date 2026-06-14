<template>
  <div class="paquetes-container pb-5">
    <!-- Header Area. -->
    <div class="d-flex justify-content-between align-items-center mb-4 mt-2 header-section">
      <div class="d-flex align-items-center gap-3">
        <h1 class="h3 mb-0 text-gray-800 fw-bold d-flex align-items-center">
          <i class="fas fa-box-open text-primary me-2"></i> Paquetes & Sesiones
        </h1>
        <div class="module-tabs">
          <button
            class="btn btn-sm module-tab-btn"
            :class="{ active: vistaActiva === 'paquetes' }"
            @click="vistaActiva = 'paquetes'"
          >
            <i class="fas fa-box-open me-1"></i> Paquetes
          </button>
          <button
            class="btn btn-sm module-tab-btn"
            :class="{ active: vistaActiva === 'deudas' }"
            @click="vistaActiva = 'deudas'"
          >
            <i class="fas fa-user-times me-1"></i> Deudas
            <span class="badge bg-danger ms-1 rounded-pill">{{ metricas.vencidas }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Buscador y Acciones -->
    <div class="d-flex justify-content-between mb-4 flex-wrap gap-2" v-if="vistaActiva === 'paquetes'">
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
    <div class="row g-3 mb-4 metricas-row" v-if="vistaActiva === 'paquetes'">
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
    <div class="filters-area mb-4" v-if="vistaActiva === 'paquetes'">
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
          <button class="btn btn-sm btn-filter" :class="{'active': filtroTipo === 0}" @click="setFiltroTipo(0)">Paquete Ext.</button>
        </div>
      </div>
    </div>

    <!-- LOADING -->
    <div v-if="loading && vistaActiva === 'paquetes'" class="text-center py-5">
      <div class="text-muted fs-5">
        <i class="fas fa-spinner fa-spin fa-2x mb-3"></i><br>
        Cargando paquetes...
      </div>
    </div>

    <!-- SIN RESULTADOS -->
    <div v-else-if="paquetesFiltrados.length === 0 && vistaActiva === 'paquetes'" class="text-center py-5">
      <div class="text-muted fs-5">
        <i class="fas fa-inbox fa-3x mb-3 text-light"></i><br>
        No se encontraron paquetes.
      </div>
    </div>

    <div class="package-list" v-if="vistaActiva === 'paquetes' && !loading && paquetesFiltrados.length > 0">
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
                    <span v-if="paquete.total_sesiones == 0">{{ paquete.sesiones_usadas }} sesiones usadas (Sesiones infinitas)</span>
                    <span v-else>{{ paquete.sesiones_usadas }} de {{ paquete.total_sesiones }} sesiones usadas</span>
                    <span class="fw-bold" v-if="paquete.total_sesiones > 0">{{ calcularProgreso(paquete) }}%</span>
                  </div>
                  <div class="progress" style="height: 6px;" v-if="paquete.total_sesiones > 0">
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
              <button 
                v-if="paquete.estado === 2 && (paquete.total_sesiones == 0 || paquete.sesiones_usadas < paquete.total_sesiones)"
                class="btn btn-sm btn-outline-primary fw-bold rounded-pill px-3 shadow-sm transition-all hover-lift"
                @click="abrirAgendarCita(paquete)"
              >
                <i class="fas fa-calendar-plus me-1"></i> Agendar sesión
              </button>
              <button class="btn btn-light btn-sm shadow-sm action-btn outline-btn" 
                v-if="paquete.total_cuotas > 0" 
                @click="abrirModalPago(paquete)">
                <i class="far fa-credit-card me-1"></i> {{ (paquete.estado !== 4 && paquete.debe > 0) ? 'Pagar cuota' : 'Ver cuotas' }}
              </button>
            </div>
          </div>
          
          <!-- Bottom actions -->
          <div class="d-flex justify-content-between align-items-center mt-3 pt-2">
            <div class="d-flex gap-3 small">
              <span class="text-success fw-bold" v-if="paquete.descuento > 0">-{{ paquete.descuento }} desc.</span>
              
              <!-- Dropdown Cambio de Estado -->
              <div class="dropdown ms-2" v-if="[1, 2].includes(paquete.estado)">
                <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cambiar Estado
                </button>
                <ul class="dropdown-menu shadow-sm">
                  <li><a class="dropdown-item" href="#" @click.prevent="prepararProrrateo(paquete)"><i class="fas fa-divide me-2 text-primary"></i>Prorratear</a></li>
                  <li v-if="paquete.tipo_servicio === 0 || paquete.idClasificacion == 5"><a class="dropdown-item" href="#" @click.prevent="cambiarEstado(paquete, 'congelar')"><i class="fas fa-snowflake me-2 text-info"></i>Congelar</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item text-danger" href="#" @click.prevent="cambiarEstado(paquete, 'cancelar')"><i class="fas fa-ban me-2"></i>Cancelar Paquete</a></li>
                </ul>
              </div>

              <template v-if="paquete.estado === 3">
                <a v-if="!paquete.reporte_extra" href="#" class="text-warning text-decoration-none hover-link fw-bold" @click.prevent="abrirModalReporte(paquete)">
                  <i class="fas fa-plus-circle me-1"></i> Añadir reporte
                </a>
                <div v-else class="d-flex gap-2">
                  <a href="#" class="text-primary text-decoration-none hover-link" @click.prevent="verReporte(paquete)">
                    <i class="far fa-file-alt me-1"></i> Ver reporte
                  </a>
                  <a href="#" class="text-muted text-decoration-none hover-link" @click.prevent="abrirModalReporte(paquete, true)">
                    <i class="fas fa-edit"></i>
                  </a>
                </div>
              </template>
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
                    <span class="badge bg-secondary-subtle text-secondary border border-secondary-subtle rounded-pill">Cita #{{ cita.num_sesion && cita.num_sesion > 0 ? cita.num_sesion : (paquete.historial_citas.length - index) }}</span>
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

    <div v-else-if="vistaActiva === 'deudas'" class="debts-view" :key="'deudas'">
      <!-- Buscador y Filtros de Deudas -->
      <div class="d-flex justify-content-between mb-4 flex-wrap gap-3 align-items-center">
        <div class="search-box">
          <i class="fas fa-search search-icon"></i>
          <input 
            type="text" 
            class="form-control" 
            placeholder="Buscar deudor por nombre..." 
            v-model="busquedaDeudas"
          >
        </div>
        
        <div class="d-flex align-items-center gap-2">
          <span class="filter-label text-muted text-nowrap" style="width: auto;">Filtrar Mes:</span>
          <input type="month" class="form-control" v-model="filtroMesDeudas" style="max-width: 200px;">
          <button class="btn btn-light border" @click="filtroMesDeudas = ''" v-if="filtroMesDeudas" title="Limpiar filtro de mes">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <div class="row g-3 mb-4">
        <div class="col-md-4">
          <div class="debt-summary-card">
            <p class="mb-1">Total Deudores</p>
            <h3 class="mb-0 text-danger fw-bold">{{ deudaResumen.totalDeudores }}</h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="debt-summary-card">
            <p class="mb-1">Deuda Total</p>
            <h3 class="mb-0 text-danger fw-bold">S/ {{ deudaResumen.totalDeuda.toFixed(2) }}</h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="debt-summary-card">
            <p class="mb-1">Cobrado Total</p>
            <h3 class="mb-0 text-success fw-bold">S/ {{ deudaResumen.totalCobrado.toFixed(2) }}</h3>
          </div>
        </div>
      </div>

      <div v-if="deudasPendientes.length === 0" class="text-center py-5 text-muted fs-5">
        <i class="fas fa-check-circle fa-3x mb-3 text-success"></i><br>
        No hay deudas pendientes por cobrar.
      </div>

      <div v-else class="debt-list">
        <div v-for="deuda in deudasPendientes" :key="`deuda-${deuda.id}`" class="debt-card mb-3">
          <div class="d-flex gap-3 align-items-start mb-2">
            <div class="debt-icon">
              <i class="fas fa-user-times"></i>
            </div>
            <div class="flex-grow-1">
              <div class="d-flex align-items-center gap-2 flex-wrap mb-1">
                <h5 class="mb-0 fw-bold text-dark">{{ deuda.patient_name }} {{ deuda.patient_nombres }}</h5>
                <span class="badge bg-success-subtle text-success rounded-pill">Activo</span>
                <span class="badge bg-primary-subtle text-primary rounded-pill">{{ getTipoBadge(deuda.idClasificacion) }}</span>
              </div>
              <p class="mb-2 text-muted debt-meta">{{ deuda.paquete_nombre }} · {{ deuda.professional || 'Sin profesional asignado' }}</p>
              <div class="d-flex justify-content-between align-items-end mb-1">
                <p class="mb-0 text-muted debt-progress-label">Pago: S/ {{ parseFloat(deuda.pagado || 0).toFixed(2) }} de S/ {{ parseFloat(deuda.monto || 0).toFixed(2) }}</p>
                <span class="fw-semibold text-dark">{{ calcularProgresoPago(deuda) }}%</span>
              </div>
              <div class="debt-progress">
                <div class="debt-progress-paid" :style="{ width: calcularProgresoPago(deuda) + '%' }"></div>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-3">
                <div class="d-flex align-items-center gap-4 flex-wrap">
                  <p class="mb-0 debt-amount"><i class="fas fa-dollar-sign me-1"></i> Debe: S/ {{ parseFloat(deuda.debe || 0).toFixed(2) }}</p>
                  <p class="mb-0 text-muted">Cuota: S/ {{ calcularCuotaPromedio(deuda).toFixed(2) }}</p>
                </div>
                <button
                  class="btn btn-primary rounded-pill debt-action-btn"
                  @click="abrirModalPago(deuda)"
                >
                  <i class="far fa-credit-card me-1"></i> Registrar Pago
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Pagar Cuota (overlay Vue - bypasea Bootstrap para evitar problemas de z-index con sb-admin-2) -->
    <transition name="vue-modal-fade">
      <div v-if="mostrarModalPago" class="vue-modal-overlay" @click.self="mostrarModalPago = false">
        <div class="vue-modal-box modal-lg">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title"><i class="fas fa-file-invoice-dollar me-2"></i> Pagar Cuotas de Paquete</h5>
            <button type="button" class="btn-close btn-close-white" @click="mostrarModalPago = false" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4" v-if="paqueteSeleccionado">
            
            <div class="row mb-4">
              <div class="col-md-4 border-end">
                <p class="text-uppercase text-muted small fw-bold mb-1">Paciente</p>
                <div class="d-flex align-items-center">
                  <div class="bg-light rounded-circle p-2 me-2"><i class="fas fa-user text-primary"></i></div>
                  <h6 class="mb-0 fw-bold">{{ paqueteSeleccionado.patient_name }} {{ paqueteSeleccionado.patient_nombres }}</h6>
                </div>
              </div>
              <div class="col-md-6">
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
                    <th>Motivo</th>
                    <th>Estado</th>
                    <th>Método Pago</th>
                    <th class="text-end">Monto a Pagar</th>
                    <th class="text-center">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cuota in (paqueteSeleccionado.deudas || [])" :key="cuota.id" :class="{'table-success': cuota.estado == 2}">
                    <td>
                      <div v-if="editandoDeudaId !== cuota.id">
                        <div class="fw-bold d-flex align-items-center gap-2">
                          <span class="badge bg-secondary me-1" v-if="cuota.numero_cuota">#{{ cuota.numero_cuota }}</span>
                          {{ formatFecha(cuota.fecha) }}
                          <button v-if="cuota.estado == 1" class="btn btn-sm btn-link text-muted p-0 ms-1" @click="iniciarEdicionDeuda(cuota)"><i class="fas fa-pencil-alt"></i></button>
                        </div>
                        <small class="text-danger" v-if="cuota.estado == 1 && esCuotaVencida(cuota.fecha)">
                          <i class="fas fa-exclamation-circle"></i> Cuota Vencida
                        </small>
                        <small class="text-success" v-if="cuota.estado == 2 && cuota.fechaActualiza">
                          <i class="fas fa-check-circle"></i> Pagado el: {{ formatFecha(cuota.fechaActualiza.split(' ')[0]) }}
                        </small>
                      </div>
                      <div v-else>
                        <input type="date" class="form-control form-control-sm mb-1" v-model="formEditDeuda.fecha">
                      </div>
                    </td>
                    <td>
                      <div v-if="editandoDeudaId !== cuota.id">
                        <span class="text-capitalize">{{ cuota.motivo }}</span>
                        <div v-if="cuota.observaciones" class="small text-muted fst-italic mt-1" style="max-width: 200px; white-space: normal;"><i class="fas fa-info-circle"></i> {{ cuota.observaciones }}</div>
                      </div>
                      <div v-else>
                        <input type="text" class="form-control form-control-sm mb-1" v-model="formEditDeuda.motivo">
                      </div>
                    </td>
                    <td>
                      <span v-if="cuota.estado == 2" class="badge bg-success-subtle border border-success-subtle text-success">Pagado</span>
                      <span v-else-if="cuota.estado == 3" class="badge bg-danger-subtle border border-danger-subtle text-danger">Anulado / Prorrateado</span>
                      <span v-else class="badge bg-warning-subtle border border-warning-subtle text-warning">Pendiente</span>
                    </td>
                    <td>
                      <select v-if="cuota.estado == 1" class="form-select form-select-sm" v-model="cuota.metodo_pago_id" style="min-width: 130px;">
                        <option v-for="moneda in monedas" :key="moneda.id" :value="moneda.id">{{ moneda.tipo }}</option>
                      </select>
                      <span v-else-if="cuota.metodo_pago_nombre" class="small text-muted">{{ cuota.metodo_pago_nombre }}</span>
                    </td>
                    <td class="text-end fw-bold">
                      S/ {{ parseFloat(cuota.monto).toFixed(2) }}
                    </td>
                    <td class="text-center">
                      <div v-if="editandoDeudaId === cuota.id" class="d-flex gap-1 justify-content-center">
                        <button class="btn btn-sm btn-success shadow-sm" @click="guardarEdicionDeuda(cuota)"><i class="fas fa-check"></i></button>
                        <button class="btn btn-sm btn-light shadow-sm" @click="cancelarEdicionDeuda()"><i class="fas fa-times"></i></button>
                      </div>
                      <div v-else class="d-flex gap-1 justify-content-center">
                        <button v-if="cuota.estado == 1" class="btn btn-sm btn-primary shadow-sm text-nowrap" @click="procesarPago(cuota)" :disabled="procesandoPago || !cuota.canPay" :title="!cuota.canPay ? 'Debe pagar las cuotas anteriores primero' : ''">
                          <i class="fas fa-hand-holding-usd me-1" v-if="!procesandoPago"></i> 
                          <i class="fas fa-spinner fa-spin me-1" v-else></i> Pagar 
                        </button>
                        <button v-if="cuota.estado == 1" class="btn btn-sm btn-outline-secondary shadow-sm" @click="abrirModalFraccionar(cuota)" title="Fraccionar">
                          <i class="fas fa-divide"></i> 
                        </button>
                        <button v-if="cuota.estado == 2" class="btn btn-sm btn-light text-success" disabled>
                          <i class="fas fa-check"></i>
                        </button>
                        <button v-if="cuota.estado == 2 && cuota.extra_payment_id" class="btn btn-sm btn-outline-secondary shadow-sm" @click="verTicket(cuota)" title="Ver Ticket">
                          <i class="fas fa-ticket-alt"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="!paqueteSeleccionado.deudas || paqueteSeleccionado.deudas.length === 0">
                    <td colspan="5" class="text-center py-4 text-muted fst-italic">No existen registros de cuotas para este paquete.</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
          <div class="modal-footer bg-light">
            <button type="button" class="btn btn-secondary" @click="mostrarModalPago = false">Cerrar ventana</button>
          </div>
        </div>
      </div>
    </transition>

    <ModalMembresias :idUsuario="idUsuario" vista="buscar" @membresiaGuardada="cargarPaquetes(1)"></ModalMembresias>

    <!-- Modal Editar Reporte Extra -->
    <div class="modal fade" id="modalReporteExtra" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content border-0 shadow-lg">
          <div class="modal-header border-0 pb-0">
            <h5 class="modal-title fw-bold d-flex align-items-center gap-2">
              <i class="fas fa-file-medical text-primary"></i>
              {{ editandoReporte ? 'Editar Reporte' : 'Añadir Reporte' }} — {{ paqueteSeleccionado ? paqueteSeleccionado.paquete_nombre : '' }}
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-4">
              <label class="form-label fw-semibold text-muted small text-uppercase">Resumen del Tratamiento</label>
              <textarea class="form-control custom-textarea" rows="4" v-model="formReporte.resumen" placeholder="Escribe un resumen general del proceso..."></textarea>
            </div>

            <div class="mb-4">
              <label class="form-label fw-semibold text-muted small text-uppercase">Logros Alcanzados (uno por línea)</label>
              <textarea class="form-control custom-textarea" rows="4" v-model="formReporte.logros" placeholder="• Logro 1&#10;• Logro 2..."></textarea>
            </div>

            <div class="mb-4">
              <label class="form-label fw-semibold text-muted small text-uppercase">Recomendaciones</label>
              <textarea class="form-control custom-textarea" rows="4" v-model="formReporte.recomendaciones" placeholder="Sugerencias para el paciente..."></textarea>
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold text-muted small text-uppercase">Próximos Pasos</label>
              <textarea class="form-control custom-textarea" rows="4" v-model="formReporte.proximos_pasos" placeholder="Plan a futuro o continuación..."></textarea>
            </div>
          </div>
          <div class="modal-footer border-0 pt-0 pb-4 px-4">
            <button type="button" class="btn btn-light px-4 fw-bold text-muted" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary px-4 fw-bold shadow-sm" @click="guardarReporteExtra" :disabled="guardandoReporte">
              <i class="fas fa-spinner fa-spin me-1" v-if="guardandoReporte"></i>
              {{ editandoReporte ? 'Actualizar Reporte' : 'Guardar Reporte' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Paginación -->
    <div class="d-flex justify-content-center mt-4" v-if="vistaActiva === 'paquetes' && pagination.last_page > 1" :key="'paquetes-pagination'">
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

    <!-- Modal Agendar Sesión -->
    <div class="modal fade" id="modalAgendarSesion" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg">
          <div class="modal-header border-0 pb-0 px-4 pt-4">
            <h5 class="modal-title fw-bold text-dark">
              <i class="fas fa-calendar-plus text-primary me-2"></i> Agendar Sesión
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div v-if="paqueteSeleccionado" class="mb-4 p-3 bg-light rounded-3 border border-light-subtle">
              <div class="small text-muted text-uppercase fw-bold mb-1">Paquete</div>
              <div class="fw-bold text-dark">{{ paqueteSeleccionado.paquete_nombre }}</div>
              <div class="small text-muted mt-1">
                <i class="far fa-user me-1"></i> {{ paqueteSeleccionado.patient_name }} {{ paqueteSeleccionado.patient_nombres }}
              </div>
            </div>

            <div class="row g-3">
              <!-- Tipo de Cita -->
              <div class="col-12">
                <label class="form-label small fw-bold text-muted text-uppercase">Tipo de Cita <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text bg-white border-end-0"><i class="fas fa-stethoscope text-muted"></i></span>
                  <select class="form-select border-start-0" v-model="nuevaSesion.tipo">
                    <option value="" disabled>{{ precios.length ? 'Seleccione un tipo de cita' : 'Cargando tipos de cita...' }}</option>
                    <option v-for="precio in preciosFiltrados" :key="precio.id" :value="precio.id">{{ precio.descripcion }}</option>
                  </select>
                </div>
              </div>

              <!-- Profesional -->
              <div class="col-12">
                <label class="form-label small fw-bold text-muted text-uppercase">Profesional <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text bg-white border-end-0"><i class="fas fa-user-md text-muted"></i></span>
                  <select class="form-select border-start-0" v-model="nuevaSesion.idProfesional" @change="cargarHorarios">
                    <option value="" disabled>{{ doctores.length ? 'Seleccione un profesional' : 'Cargando profesionales...' }}</option>
                    <option v-for="doc in doctoresFiltrados" :key="doc.id" :value="doc.id">{{ doc.name || doc.nombre }}</option>
                  </select>
                </div>
              </div>

              <!-- Fecha -->
              <div class="col-12">
                <label class="form-label small fw-bold text-muted text-uppercase">Fecha <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text bg-white border-end-0"><i class="far fa-calendar-alt text-muted"></i></span>
                  <input type="date" class="form-control border-start-0" v-model="nuevaSesion.fecha" @change="cargarHorarios">
                </div>
              </div>

              <!-- Horario -->
              <div class="col-12">
                <label class="form-label small fw-bold text-muted text-uppercase">Horario Disponible <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text bg-white border-end-0"><i class="far fa-clock text-muted"></i></span>
                  <select class="form-select border-start-0" v-model="nuevaSesion.idHorario" :disabled="!nuevaSesion.idProfesional || !nuevaSesion.fecha">
                    <option value="" disabled>Seleccione un horario</option>
                    <option v-for="hora in horariosDisponibles" :key="hora.id" :value="hora.id">
                      {{ formatHora(hora.check_time) }} - {{ formatHora(hora.departure_date) }}
                    </option>
                  </select>
                </div>
                <div v-if="loadingHorarios" class="small text-primary mt-1">
                  <i class="fas fa-spinner fa-spin me-1"></i> Buscando disponibilidad...
                </div>
                <div v-else-if="horariosDisponibles.length === 0 && nuevaSesion.fecha && nuevaSesion.idProfesional" class="small text-danger mt-1">
                  <i class="fas fa-info-circle me-1"></i> No hay horarios disponibles para esta fecha.
                </div>
              </div>

              <!-- Modalidad -->
              <div class="col-12">
                <label class="form-label small fw-bold text-muted text-uppercase">Modalidad</label>
                <div class="d-flex gap-3 mt-1">
                  <div class="form-check custom-radio">
                    <input class="form-check-input" type="radio" v-model="nuevaSesion.modalidad" value="1" id="modPresencial">
                    <label class="form-check-label" for="modPresencial">Presencial</label>
                  </div>
                  <div class="form-check custom-radio">
                    <input class="form-check-input" type="radio" v-model="nuevaSesion.modalidad" value="2" id="modVirtual">
                    <label class="form-check-label" for="modVirtual">Virtual</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer border-0 p-4 pt-0">
            <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancelar</button>
            <button 
              type="button" 
              class="btn btn-primary rounded-pill px-4 shadow" 
              @click="guardarCitaPaquete"
              :disabled="!nuevaSesion.tipo || !nuevaSesion.idHorario || guardandoCita"
            >
              <i v-if="guardandoCita" class="fas fa-spinner fa-spin me-2"></i>
              <i v-else class="fas fa-save me-2"></i>
              Confirmar Cita
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Prorratear -->
    <div class="modal fade" id="modalProrratear" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg">
          <div class="modal-header border-0 pb-0 px-4 pt-4">
            <h5 class="modal-title fw-bold text-dark">
              <i class="fas fa-divide text-primary me-2"></i> Prorratear Paquete
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4" v-if="paqueteSeleccionado">
            <p class="text-muted small mb-4">Esta acción cancelará las citas y cuotas pendientes, y calculará el saldo a favor del paciente basándose en las sesiones que ya consumió.</p>
            
            <div class="bg-light p-3 rounded mb-3">
              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted small">Monto Total del Paquete</span>
                <span class="fw-bold">S/ {{ parseFloat(paqueteSeleccionado.monto).toFixed(2) }}</span>
              </div>
              <div class="d-flex justify-content-between mb-2" v-if="parseFloat(paqueteSeleccionado.descuento || 0) > 0">
                <span class="text-muted small">Descuento</span>
                <span class="fw-bold text-success">- S/ {{ parseFloat(paqueteSeleccionado.descuento).toFixed(2) }}</span>
              </div>
              <div class="d-flex justify-content-between mb-2" v-if="parseFloat(paqueteSeleccionado.descuento || 0) > 0">
                <span class="text-muted small">Precio Base de Referencia</span>
                <span class="fw-bold">S/ {{ calcularDetalleProrrateo().precioBase.toFixed(2) }}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted small">Sesiones Totales</span>
                <span class="fw-bold">{{ paqueteSeleccionado.total_sesiones == 0 ? 'Sesiones infinitas' : paqueteSeleccionado.total_sesiones }}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted small">Costo por Sesión</span>
                <span class="fw-bold">S/ {{ calcularDetalleProrrateo().costoPorSesion.toFixed(2) }}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted small">Sesiones Usadas</span>
                <span class="fw-bold text-danger">{{ paqueteSeleccionado.sesiones_usadas }}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted small">Valor Proporcional Consumido</span>
                <span class="fw-bold text-dark">S/ {{ calcularDetalleProrrateo().valorConsumido.toFixed(2) }}</span>
              </div>
              <hr class="border-secondary opacity-25">
              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted small">Total Pagado</span>
                <span class="fw-bold text-success">S/ {{ parseFloat(paqueteSeleccionado.pagado || 0).toFixed(2) }}</span>
              </div>
              <div class="d-flex justify-content-between" v-if="calcularDetalleProrrateo().tipo === 'devolver'">
                <span class="fw-bold">Saldo a Devolver (Nota de Crédito)</span>
                <span class="fw-bold fs-5 text-success">
                  S/ {{ calcularDetalleProrrateo().diferencia.toFixed(2) }}
                </span>
              </div>
              <div class="d-flex justify-content-between" v-else-if="calcularDetalleProrrateo().tipo === 'deudor'">
                <span class="fw-bold">Saldo Deudor (A cobrar)</span>
                <span class="fw-bold fs-5 text-danger">
                  S/ {{ calcularDetalleProrrateo().diferencia.toFixed(2) }}
                </span>
              </div>
              <div class="d-flex justify-content-between" v-else>
                <span class="fw-bold">Saldo Balanceado</span>
                <span class="fw-bold fs-5 text-secondary">
                  S/ 0.00
                </span>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label small fw-bold text-muted">Observaciones</label>
              <textarea class="form-control" v-model="formProrrateo.observacion" rows="2" placeholder="Opcional..."></textarea>
            </div>
          </div>
          <div class="modal-footer border-0 p-4 pt-0">
            <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary rounded-pill px-4 shadow" @click="confirmarProrrateo" :disabled="procesandoEstado">
              <i v-if="procesandoEstado" class="fas fa-spinner fa-spin me-2"></i> Confirmar Prorrateo
            </button>
          </div>
        </div>
      </div>
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
      vistaActiva: 'paquetes',
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
      idSede: null,
      mostrarModalPago: false,
      procesandoPago: false,
      guardandoReporte: false,
      editandoReporte: false,
      monedas: [],
      metodoPago: 1,
      formReporte: {
        resumen: '',
        logros: '',
        recomendaciones: '',
        proximos_pasos: ''
      },
      // Agendamiento de sesiones
      precios: [],
      doctores: [],
      horariosDisponibles: [],
      loadingHorarios: false,
      guardandoCita: false,
      procesandoEstado: false,
      formProrrateo: { observacion: '' },
      editandoDeudaId: null,
      formEditDeuda: { fecha: '', motivo: '' },
      procesandoFraccion: false,
      busquedaDeudas: '',
      filtroMesDeudas: new Date().toISOString().substring(0, 7), // YYYY-MM
      nuevaSesion: {
        idProfesional: '',
        fecha: new Date().toISOString().split('T')[0],
        idHorario: '',
        modalidad: '1',
        tipo: ''
      }
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
    },
    deudasPendientes() {
      return this.paquetesFiltrados.filter((paquete) => {
        // Filtrar solo los que tienen deuda
        if (!(parseFloat(paquete.debe || 0) > 0)) return false;

        // Filtro de búsqueda por nombre
        if (this.busquedaDeudas) {
          const term = this.busquedaDeudas.toLowerCase();
          const nombreCompleto = `${paquete.patient_name} ${paquete.patient_nombres}`.toLowerCase();
          if (!nombreCompleto.includes(term)) return false;
        }

        // Filtro por mes (buscamos si alguna de sus cuotas pendientes es del mes seleccionado)
        if (this.filtroMesDeudas && paquete.deudas) {
          const tieneCuotaEnMes = paquete.deudas.some(cuota => {
            if (cuota.estado != 1) return false; // Solo cuotas pendientes
            return cuota.fecha.substring(0, 7) === this.filtroMesDeudas;
          });
          if (!tieneCuotaEnMes) return false;
        }

        return true;
      });
    },
    deudaResumen() {
      return this.deudasPendientes.reduce((acc, deuda) => {
        acc.totalDeudores += 1;
        acc.totalDeuda += parseFloat(deuda.debe || 0);
        acc.totalCobrado += parseFloat(deuda.pagado || 0);
        return acc;
      }, { totalDeudores: 0, totalDeuda: 0, totalCobrado: 0 });
    },
    especialidadResuelta() {
      if (!this.paqueteSeleccionado) return 2; // Por defecto Psicológica
      
      const nombreRaw = (this.paqueteSeleccionado.paquete_nombre || '').toLowerCase();
      const nombre = nombreRaw.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const esp = (this.paqueteSeleccionado.paquete_especialidad || '').toLowerCase();

      // Caso 1: Paquetes Sucamec (idClasificacion 9 o nombre contiene sucamec)
      if (esp === 'psiquiatrica' || esp === 'psiquíatrica' || nombre.includes('psiquiatr')) {
        return 1;
      } else if (esp === 'psicologica' || esp === 'psicológica' || nombre.includes('psicolog')) {
        return 2;
      } else if (esp === 'nutricional' || nombre.includes('nutricion') || nombre.includes('nutricional')) {
        return 6;
      } else if (nombre.includes('masaje') || nombre.includes('reflexologia') || nombre.includes('terapia') || nombre.includes('cervicalia') || nombre.includes('dorsalgia') || nombre.includes('lumbalgia') || nombre.includes('esguince')) {
        return this.paqueteSeleccionado.idClasificacion == 8 ? 8 : 7;
      }
      return this.paqueteSeleccionado.idClasificacion == 5 ? 2 : this.paqueteSeleccionado.idClasificacion;
    },
    doctoresFiltrados() {
      if (!this.paqueteSeleccionado || !this.doctores.length) return [];
      const clasificacion = this.especialidadResuelta;
      // Usar == para evitar problemas de tipo (string vs int)
      const filtrados = this.doctores.filter(doc => doc.idProfesion == clasificacion);
      // Si por alguna razón el filtro no devuelve nada, mostramos todos para no bloquear al usuario
      return filtrados.length > 0 ? filtrados : this.doctores;
    },
    preciosFiltrados() {
      if (!this.paqueteSeleccionado || !this.precios || !this.precios.length) return [];
      const nombreRaw = (this.paqueteSeleccionado.paquete_nombre || '').toLowerCase();
      const nombre = nombreRaw.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const esp = (this.paqueteSeleccionado.paquete_especialidad || '').toLowerCase();
      if (this.paqueteSeleccionado.idClasificacion == 9 || nombre.includes('sucamec')) {
        return this.precios.filter(precio => 
           (precio.id == 13 || precio.id == 14) && 
          precio.activo == '1'
        );
      }

      // Caso 2: Paquetes Híbridos (que no sean Sucamec)
      if (esp === 'hibrida' || nombre.includes('hibrid')) {
        if (this.nuevaSesion.idProfesional) {
          const doc = this.doctores.find(d => d.id == this.nuevaSesion.idProfesional);
          if (doc) {
            return this.precios.filter(precio => 
              precio.idClasificacion == doc.idProfesion && 
              precio.servicio == '1' && 
              precio.id != 48 && 
              precio.id != 49 && 
              precio.activo == '1'
            );
          }
        }
        // Si no hay doctor seleccionado, mostrar ambos (psicología y psiquiatría)
        return this.precios.filter(precio => 
          (precio.idClasificacion == 1 || precio.idClasificacion == 2) && 
          precio.servicio == '1' && 
          precio.id != 48 && 
          precio.id != 49 &&
          precio.activo == '1'
        );
      }
      const clasificacion = this.especialidadResuelta;
      return this.precios.filter(precio => 
        precio.idClasificacion == clasificacion && 
        precio.servicio == '1' && 
        precio.id != 48 && 
        precio.id != 49 && 
        precio.activo == '1'
      );
    }
  },
  mounted() {
    this.obtenerUsuarioYPaquetes();
    this.cargarMonedas();
    this.cargarProfesionales();
    this.listarPrecios();
  },
  methods: {
    async obtenerUsuarioYPaquetes() {
      try {
        const res = await this.axios.get('/api/user');
        this.idUsuario = parseInt(res.data.user.id);
        this.idSede = parseInt(res.data.user.IdSede || res.data.user.idSede || 1);
      } catch (error) {
        console.warn("No se pudo obtener el usuario", error);
      }
      this.cargarPaquetes();
    },
    async cargarPaquetes(page = 1) {
      if(this.loading) return;
      this.loading = true;
      try {
        const isDeudas = this.vistaActiva === 'deudas';
        const response = await this.axios.get(`/api/listarPaquetes`, {
          params: {
            page: page,
            busqueda: isDeudas ? '' : this.busqueda,
            estado: isDeudas ? 0 : this.filtroEstado,
            tipo: isDeudas ? -1 : this.filtroTipo,
            all: isDeudas ? 1 : 0
          }
        });
        
        this.paquetesFiltrados = response.data.paquetes.data;
        this.metricas = response.data.metricas;

        // Si hay un paquete seleccionado, actualizar su referencia.
        if (this.paqueteSeleccionado) {
          const updatedPaquete = this.paquetesFiltrados.find(p => p.id === this.paqueteSeleccionado.id);
          if (updatedPaquete) {
            // Preservar métodos de pago seleccionados antes de actualizar
            const metodosPrevios = {};
            if (this.paqueteSeleccionado.deudas) {
              this.paqueteSeleccionado.deudas.forEach(d => {
                if (d.metodo_pago_id) metodosPrevios[d.id] = d.metodo_pago_id;
              });
            }
            
            this.paqueteSeleccionado = updatedPaquete;

            // Reasignar o inicializar métodos de pago
            if (this.paqueteSeleccionado.deudas) {
              this.actualizarPermisosPago(metodosPrevios);
            }
          }
        }
        
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
    async cargarMonedas() {
      try {
        const response = await this.axios.get("/api/listarMonedas");
        this.monedas = response.data;
      } catch (error) {
        console.error("Error cargando monedas:", error);
      }
    },
    async cargarProfesionales() {
      try {
        const response = await this.axios.get('/api/profesional');
        this.doctores = response.data;
      } catch (error) {
        console.error("Error cargando profesionales:", error);
      }
    },
    async listarPrecios() {
      try {
        const response = await this.axios.get('/api/listarPreciosTodos');
        this.precios = response.data;
      } catch (error) {
        console.error("Error cargando precios:", error);
      }
    },
    abrirAgendarCita(paquete) {
      this.paqueteSeleccionado = paquete;
      this.nuevaSesion = {
        idProfesional: '',
        fecha: new Date().toISOString().split('T')[0],
        idHorario: '',
        modalidad: '1',
        tipo: ''
      };
      this.horariosDisponibles = [];
      const modal = new bootstrap.Modal(document.getElementById('modalAgendarSesion'));
      modal.show();
    },
    async cargarHorarios() {
      if (!this.nuevaSesion.idProfesional || !this.nuevaSesion.fecha) return;
      
      this.loadingHorarios = true;
      this.horariosDisponibles = [];
      this.nuevaSesion.idHorario = '';

      try {
        const response = await this.axios.get(`/api/horario/${this.nuevaSesion.idProfesional}`);
        const schedulesInvalid = response.data.schedulesInvalid;
        const schedulesAll = response.data.schedules;
        
        // Determinar el día de la semana en español para filtrar
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        const fechaObj = new Date(this.nuevaSesion.fecha + 'T00:00:00');
        const diaNombre = diasSemana[fechaObj.getDay()];

        const timeToMinutes = (t) => {
          if (!t) return 0;
          let p = t.split(':').map(Number);
          return p[0] * 60 + (p[1] || 0);
        };

        // Filtrar horarios por el día y que no tengan cita solapada
        this.horariosDisponibles = schedulesAll.filter(h => {
          if (h.idSede != this.idSede) return false;
          if (h.day !== diaNombre) return false;
          
          const ocupado = schedulesInvalid.some(inv => {
            if (inv.date !== this.nuevaSesion.fecha) return false;
            if (inv.status == 3 || inv.status == 4 || inv.status == 6) return false;

            let appStart = inv.hora_inicio ? inv.hora_inicio : (inv.schedule && inv.schedule.check_time ? inv.schedule.check_time : '00:00:00');
            let duracion = 60; // Fallback
            if (inv.duracion && !isNaN(parseInt(inv.duracion))) {
              duracion = parseInt(inv.duracion);
            } else if (inv.precio && inv.precio.duracion && !isNaN(parseInt(inv.precio.duracion))) {
              duracion = parseInt(inv.precio.duracion);
            } else if (inv.membresia && inv.membresia.precio && inv.membresia.precio.duracion && !isNaN(parseInt(inv.membresia.precio.duracion))) {
              duracion = parseInt(inv.membresia.precio.duracion);
            }

            let sStart = timeToMinutes(h.check_time);
            let sEnd = timeToMinutes(h.departure_date);
            let aStart = timeToMinutes(appStart);
            let aEnd = aStart + duracion;

            return sStart < aEnd && sEnd > aStart;
          });
          
          return !ocupado;
        });
      } catch (error) {
        console.error("Error cargando horarios:", error);
      } finally {
        this.loadingHorarios = false;
      }
    },
    async guardarCitaPaquete() {
      if (!this.nuevaSesion.tipo || !this.nuevaSesion.idHorario) return;

      this.guardandoCita = true;
      try {
        const payload = {
          professional_id: this.nuevaSesion.idProfesional,
          date: this.nuevaSesion.fecha,
          schedule_id: this.nuevaSesion.idHorario,
          clasification: this.paqueteSeleccionado.idClasificacion,
          type: this.nuevaSesion.tipo,
          patient_condition: 2, // Continuante
          mode: this.nuevaSesion.modalidad,
          status: 1, // Pendiente
          patient_id: this.paqueteSeleccionado.patient_id,
          idMembresia: this.paqueteSeleccionado.id,
          price: 0,
          user_id: this.idUsuario,
          formato_nuevo: 1,
          num_sesion: (this.paqueteSeleccionado.sesiones_usadas || 0) + 1
        };

        const response = await this.axios.post('/api/agendarCitaPaquete', payload);
        
        if (response.data.cita) {
          this.$swal({
            title: 'Cita agendada',
            text: 'La sesión se ha programado correctamente.',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          });
          
          // Cerrar modal
          const modalElement = document.getElementById('modalAgendarSesion');
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
          
          // Recargar paquetes para actualizar contadores
          await this.cargarPaquetes(this.pagination.current_page);
        }
      } catch (error) {
        console.error("Error al agendar cita:", error);
        alertify.error('Hubo un error al agendar la cita.');
      } finally {
        this.guardandoCita = false;
      }
    },
    formatHora(hora) {
      if (!hora) return '';
      return hora.substring(0, 5);
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
      if(idClasificacion == 5) return 'Paquete Ext.';
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
        case 5: return { text: 'Cancelada', class: 'bg-danger text-white' };
        default: return { text: 'Otro', class: 'bg-secondary text-white' };
      }
    },
    prepararProrrateo(paquete) {
      this.paqueteSeleccionado = paquete;
      this.formProrrateo.observacion = '';
      const modal = new bootstrap.Modal(document.getElementById('modalProrratear'));
      modal.show();
    },
    calcularDetalleProrrateo() {
      if (!this.paqueteSeleccionado) return {
        precioBase: 0,
        costoPorSesion: 0,
        valorConsumido: 0,
        diferencia: 0,
        tipo: 'ninguno'
      };
      const monto = parseFloat(this.paqueteSeleccionado.monto) || 0;
      const descuento = parseFloat(this.paqueteSeleccionado.descuento) || 0;
      const precioBase = monto + descuento;
      const totalSesiones = Math.max(parseInt(this.paqueteSeleccionado.total_sesiones) || 1, 1);
      const sesionesUsadas = parseInt(this.paqueteSeleccionado.sesiones_usadas) || 0;
      const pagado = parseFloat(this.paqueteSeleccionado.pagado) || 0;
      
      const costoPorSesion = precioBase / totalSesiones;
      const valorConsumido = costoPorSesion * sesionesUsadas;
      const diferencia = pagado - valorConsumido;
      
      let tipo = 'ninguno';
      if (diferencia > 0.005) {
        tipo = 'devolver';
      } else if (diferencia < -0.005) {
        tipo = 'deudor';
      }
      
      return {
        precioBase: precioBase,
        costoPorSesion: costoPorSesion,
        valorConsumido: valorConsumido,
        diferencia: Math.abs(diferencia),
        tipo: tipo
      };
    },
    async confirmarProrrateo() {
      this.procesandoEstado = true;
      try {
        const res = await this.axios.post(`/api/prorratearPaquete/${this.paqueteSeleccionado.id}`, {
          observaciones: this.formProrrateo.observacion
        });
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalProrratear'));
        if (modal) modal.hide();
        
        let msg = '';
        if (res.data.dinero_a_favor > 0) {
          msg = `Se generó una nota de crédito por S/ ${parseFloat(res.data.dinero_a_favor).toFixed(2)}`;
        } else if (res.data.saldo_deudor > 0) {
          msg = `Se generó una cuota de saldo deudor pendiente por S/ ${parseFloat(res.data.saldo_deudor).toFixed(2)}`;
        } else {
          msg = 'No hubo saldo a favor ni saldo deudor. El paquete quedó balanceado.';
        }
        
        this.$swal({
          icon: 'success',
          title: 'Paquete prorrateado',
          text: msg,
        });
        await this.cargarPaquetes(this.pagination.current_page);
      } catch (error) {
        this.$swal('Error', error.response?.data?.error || 'No se pudo prorratear', 'error');
      } finally {
        this.procesandoEstado = false;
      }
    },
    async cambiarEstado(paquete, accion) {
      const confirmacion = await this.$swal({
        title: `¿Seguro que deseas ${accion} el paquete?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, continuar',
        cancelButtonText: 'Cancelar'
      });
      if (!confirmacion.isConfirmed) return;
      
      this.procesandoEstado = true;
      try {
        await this.axios.post(`/api/${accion}Paquete/${paquete.id}`);
        
        // Actualización optimista local
        if (accion === 'cancelar') paquete.estado = 6;
        if (accion === 'congelar') paquete.estado = 4;
        
        this.$swal('Éxito', `Paquete actualizado a ${accion}`, 'success');
        await this.cargarPaquetes(this.pagination.current_page);
      } catch (error) {
        this.$swal('Error', error.response?.data?.error || 'Error en la operación', 'error');
      } finally {
        this.procesandoEstado = false;
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
    calcularProgresoPago(paquete) {
      const total = parseFloat(paquete.monto || 0);
      const pagado = parseFloat(paquete.pagado || 0);
      if (total <= 0) return 0;
      const porcentaje = (pagado / total) * 100;
      return Math.min(100, Math.max(0, Math.round(porcentaje)));
    },
    calcularCuotaPromedio(paquete) {
      const cuotas = parseInt(paquete.total_cuotas || 0);
      const deuda = parseFloat(paquete.debe || 0);
      if (cuotas <= 0) return deuda;
      return deuda / cuotas;
    },
    async procesarPago(cuota) {
      // Opciones para el select de métodos de pago
      let opcionesMetodos = '';
      this.monedas.forEach(m => {
        const selectedAttr = (cuota.metodo_pago_id == m.id || (!cuota.metodo_pago_id && m.id == 1)) ? 'selected' : '';
        opcionesMetodos += `<option value="${m.id}" ${selectedAttr}>${m.tipo}</option>`;
      });

      const { value: formValues } = await this.$swal({
        title: 'Registrar Pago de Cuota',
        html:
          `<div class="text-start mb-3">` +
          `  <p class="mb-2">Cuota: <strong>#${cuota.numero_cuota || ''}</strong></p>` +
          `  <p class="mb-3">Monto a pagar: <strong class="text-success fs-5">S/ ${parseFloat(cuota.monto).toFixed(2)}</strong></p>` +
          `  <div class="mb-3">` +
          `    <label class="form-label small fw-bold text-muted text-uppercase mb-1">Método de Pago <span class="text-danger">*</span></label>` +
          `    <select id="swal-pago-metodo" class="form-select">${opcionesMetodos}</select>` +
          `  </div>` +
          `  <div class="mb-3">` +
          `    <label class="form-label small fw-bold text-muted text-uppercase mb-1">Motivo / Concepto <span class="text-danger">*</span></label>` +
          `    <input id="swal-pago-motivo" class="form-control" type="text" value="Pago de cuota ${cuota.numero_cuota ? '#' + cuota.numero_cuota : ''}">` +
          `  </div>` +
          `  <div class="mb-3">` +
          `    <label class="form-label small fw-bold text-muted text-uppercase mb-1">Número de Operación <span class="text-muted">(Yape, Plin, Transferencia, etc.)</span></label>` +
          `    <input id="swal-pago-voucher" class="form-control" type="text" placeholder="Ej: 123456">` +
          `  </div>` +
          `</div>`,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: '<i class="fas fa-hand-holding-usd me-1"></i> Confirmar Pago',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
          const metodoId = document.getElementById('swal-pago-metodo').value;
          const motivo = document.getElementById('swal-pago-motivo').value;
          const voucher = document.getElementById('swal-pago-voucher').value;
          if (!metodoId) {
            this.$swal.showValidationMessage('Debe seleccionar un método de pago');
            return false;
          }
          if (!motivo) {
            this.$swal.showValidationMessage('Debe ingresar un motivo/concepto');
            return false;
          }
          return { metodoId: parseInt(metodoId), motivo: motivo, voucher: voucher };
        }
      });

      if (formValues) {
        this.procesandoPago = true;
        try {
          const payload = {
            idDeuda: cuota.id,
            user_id: this.idUsuario,
            estado: 2, 
            observacion: formValues.motivo,
            nombre: this.paqueteSeleccionado.patient_name + ' ' + (this.paqueteSeleccionado.patient_nombres || ''),
            precio: cuota.monto,
            tipo: 8, 
            idMembresia: this.paqueteSeleccionado.id,
            idMoneda: formValues.metodoId,
            voucher: formValues.voucher
          };

          await this.axios.post('/api/pagarDeudaMembresia', payload);
          
          cuota.estado = 2;
          cuota.metodo_pago_nombre = this.monedas.find(m => m.id == formValues.metodoId)?.tipo;
          this.actualizarPermisosPago();
          this.cargarPaquetes(this.pagination.current_page);

          this.$swal({
            icon: 'success',
            title: 'Pago registrado',
            text: 'El pago de la cuota se registró correctamente.',
            timer: 2000,
            showConfirmButton: false
          });
          
        } catch (error) {
          console.error(error);
          this.$swal('Error', error.response?.data?.error || 'Ocurrió un error al procesar el pago.', 'error');
        } finally {
          this.procesandoPago = false;
        }
      }
    },
    abrirModalPago(paquete) {
      this.paqueteSeleccionado = paquete;
      
      // Inicializar métodos de pago para cada cuota pendiente y establecer canPay
      if (this.paqueteSeleccionado.deudas) {
        this.actualizarPermisosPago();
      }
      
      this.mostrarModalPago = true;
    },
    actualizarPermisosPago(metodosPrevios = {}) {
      let firstPendingFound = false;
      this.paqueteSeleccionado.deudas.forEach(cuota => {
        if (cuota.estado == 1) { // Pendiente
          if (!cuota.metodo_pago_id) {
            this.$set(cuota, 'metodo_pago_id', metodosPrevios[cuota.id] || 1); // Por defecto Efectivo
          }
          if (!firstPendingFound) {
            firstPendingFound = true;
            this.$set(cuota, 'canPay', true);
          } else {
            this.$set(cuota, 'canPay', false);
          }
        } else {
          this.$set(cuota, 'canPay', false);
        }
      });
    },
    verTicket(cuota) {
      if (!cuota.extra_payment_id) return;
      const url = `/api/pdfExtraCupon/${cuota.extra_payment_id}?token=${localStorage.getItem('token')}`;
      window.open(url, '_blank');
    },
    abrirModalReporte(paquete, editar = false) {
      this.paqueteSeleccionado = paquete;
      this.editandoReporte = editar;
      
      if (editar && paquete.reporte_extra) {
        this.formReporte = {
          resumen: paquete.reporte_extra.resumen,
          logros: paquete.reporte_extra.logros,
          recomendaciones: paquete.reporte_extra.recomendaciones,
          proximos_pasos: paquete.reporte_extra.proximos_pasos
        };
      } else {
        this.formReporte = {
          resumen: '',
          logros: '',
          recomendaciones: '',
          proximos_pasos: ''
        };
      }
      
      const modal = new bootstrap.Modal(document.getElementById('modalReporteExtra'));
      modal.show();
    },
    async guardarReporteExtra() {
      if (!this.formReporte.resumen || !this.formReporte.logros) {
        alert('Por favor complete al menos el resumen y los logros.');
        return;
      }

      this.guardandoReporte = true;
      try {
        const payload = {
          ...this.formReporte,
          membresia_id: this.paqueteSeleccionado.id
        };

        await this.axios.post('/api/reporte-paquete-extra', payload);
        
        // Cerrar modal y recargar
        const modalElement = document.getElementById('modalReporteExtra');
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
        
        this.cargarPaquetes(this.pagination.current_page);
        alert('Reporte guardado exitosamente.');
      } catch (error) {
        console.error(error);
        alert('Ocurrió un error al guardar el reporte.');
      } finally {
        this.guardandoReporte = false;
      }
    },
    iniciarEdicionDeuda(cuota) {
      this.editandoDeudaId = cuota.id;
      this.formEditDeuda.fecha = cuota.fecha;
      this.formEditDeuda.motivo = cuota.motivo;
    },
    cancelarEdicionDeuda() {
      this.editandoDeudaId = null;
    },
    async guardarEdicionDeuda(cuota) {
      try {
        const datos = {
          idDeuda: cuota.id,
          fecha: this.formEditDeuda.fecha,
          motivo: this.formEditDeuda.motivo,
          user_id: this.idUsuario
        };
        const response = await this.axios.post('/api/actualizarDeuda', datos);
        this.$swal('Éxito', response.data.message, 'success');
        this.editandoDeudaId = null;
        this.cargarPaquetes(this.pagination.current_page);
      } catch (error) {
        this.$swal('Error', 'No se pudo actualizar la cuota', 'error');
      }
    },
    async abrirModalFraccionar(cuota) {
      this.$swal({
        title: 'Fraccionar Cuota',
        html:
          `<p class="text-muted">Cuota actual: <strong>S/ ${parseFloat(cuota.monto).toFixed(2)}</strong></p>` +
          `<label class="form-label text-start d-block small fw-bold">Monto a separar:</label>` +
          '<input id="swal-input1" class="form-control mb-3" type="number" step="0.01" min="0.01" max="'+(cuota.monto - 0.01)+'">' +
          `<label class="form-label text-start d-block small fw-bold">Fecha de la nueva cuota (fracción):</label>` +
          '<input id="swal-input2" class="form-control" type="date">',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Fraccionar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const monto = document.getElementById('swal-input1').value;
          const fecha = document.getElementById('swal-input2').value;
          if (!monto || !fecha || parseFloat(monto) <= 0 || parseFloat(monto) >= cuota.monto) {
            this.$swal.showValidationMessage('Ingresa un monto válido y una fecha');
            return false;
          }
          try {
            const datos = {
              idDeuda: cuota.id,
              monto_fraccion: parseFloat(monto),
              nueva_fecha: fecha,
              user_id: this.idUsuario
            };
            const response = await this.axios.post('/api/fraccionarDeuda', datos);
            return response.data;
          } catch (error) {
            this.$swal.showValidationMessage(error.response?.data?.error || 'No se pudo fraccionar la cuota');
            return false;
          }
        },
        allowOutsideClick: () => !this.$swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal('Éxito', result.value.message, 'success');
          this.cargarPaquetes(this.pagination.current_page);
        }
      });
    }
  },
  watch: {
    vistaActiva(newVal) {
      if (newVal === 'deudas') {
        // Al entrar a deudas, resetear filtros a valores por defecto y cargar todo
        this.busquedaDeudas = '';
        this.filtroMesDeudas = new Date().toISOString().substring(0, 7);
        // Cargar página 1 de paquetes para asegurar que tenemos la data fresca
        this.cargarPaquetes(1);
      } else {
        // Al volver a paquetes, resetear búsqueda general y filtros
        this.busqueda = '';
        this.filtroEstado = 0;
        this.filtroTipo = -1;
        this.cargarPaquetes(1);
      }
    },
    'nuevaSesion.idProfesional'(newVal) {
      if (this.paqueteSeleccionado && newVal) {
        const esp = (this.paqueteSeleccionado.paquete_especialidad || '').toLowerCase();
        const nombreRaw = (this.paqueteSeleccionado.paquete_nombre || '').toLowerCase();
        const nombre = nombreRaw.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const esSucamec = this.paqueteSeleccionado.idClasificacion == 9 || nombre.includes('sucamec');
        
        // Para híbridos no Sucamec, si cambia de doctor, verificar si el servicio seleccionado
        // sigue siendo válido para la especialidad del doctor. Si no, limpiarlo.
        if ((esp === 'hibrida' || nombre.includes('hibrid')) && !esSucamec) {
          const doc = this.doctores.find(d => d.id == newVal);
          if (doc) {
            const precioActual = this.precios.find(p => p.id == this.nuevaSesion.tipo);
            if (precioActual && precioActual.idClasificacion != doc.idProfesion) {
              this.nuevaSesion.tipo = '';
            }
          }
        }
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

/* Header tabs */
.module-tabs {
  display: flex;
  gap: 0.5rem;
  background: #f1f5f9;
  border-radius: 999px;
  padding: 0.25rem;
}
.module-tab-btn {
  border: none;
  color: #64748b;
  border-radius: 999px;
  font-weight: 600;
  padding: 0.35rem 0.85rem;
}
.module-tab-btn.active {
  background: #1d4ed8;
  color: #fff;
}
.module-tab-btn.active .badge {
  background: #fff !important;
  color: #dc2626;
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

.custom-textarea {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  transition: all 0.2s;
  background-color: #f8fafc;
}

.custom-textarea:focus {
  background-color: #fff;
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

.hover-link:hover {
  text-decoration: underline !important;
  opacity: 0.8;
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

/* Deudas */
.debt-summary-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.2rem 1.4rem;
}
.debt-summary-card p {
  color: #64748b;
  font-size: 1.05rem;
}
.debt-card {
  border: 1px solid #fecaca;
  border-radius: 18px;
  background: #fff;
  padding: 1.8rem;
}
.debt-icon {
  width: 68px;
  height: 68px;
  border-radius: 16px;
  background: #fee2e2;
  color: #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
.debt-meta {
  font-size: 1.05rem;
}
.debt-progress-label {
  font-size: 1.05rem;
}
.debt-progress {
  width: 100%;
  height: 12px;
  border-radius: 999px;
  background: #f97316;
  overflow: hidden;
}
.debt-progress-paid {
  height: 100%;
  background: #2563eb;
  border-radius: 999px 0 0 999px;
}
.debt-amount {
  color: #ef4444;
  font-weight: 700;
  font-size: 16px;
}
.debt-action-btn {
  padding: 0.55rem 1.2rem;
  font-weight: 600;
  font-size: 1.05rem;
}

/* Vue Modal Overlay - Bypasea el sistema de modales de Bootstrap */
.vue-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.vue-modal-box {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.vue-modal-box .modal-header {
  border-radius: 12px 12px 0 0;
  flex-shrink: 0;
}
.vue-modal-box .modal-footer {
  border-radius: 0 0 12px 12px;
  flex-shrink: 0;
}
/* Transition */
.vue-modal-fade-enter-active,
.vue-modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.vue-modal-fade-enter-from,
.vue-modal-fade-leave-to {
  opacity: 0;
}
.vue-modal-fade-enter,
.vue-modal-fade-leave-to {
  opacity: 0;
}
</style>

