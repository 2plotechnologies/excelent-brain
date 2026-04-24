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

      <button
        type="button"
        class="btn"
        :class="tabActiva === 'crmSeguimiento' ? 'btn-primary' : 'btn-outline-secondary'"
        @click="tabActiva = 'crmSeguimiento'"
      >
        <i class="fa-solid fa-bell me-1"></i> CRM Seguimiento
      </button>
    </div>

    <div v-show="tabActiva !== 'crmSeguimiento'">
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
                @keyup.enter="buscarCrmOriginal"
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
              <tr v-if="cargando">
                <td colspan="8" class="text-center py-5">
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Cargando...</span>
                  </div>
                  <p class="mt-2 text-muted mb-0">Cargando datos del servidor...</p>
                </td>
              </tr>
              <template v-else>
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
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- NEW CRM Seguimiento Tab -->
    <div v-if="tabActiva === 'crmSeguimiento'">
      <!-- Stats Cards -->
      <div class="row g-3 mb-3 mt-1">
        <div class="col-md-6 col-xl-3">
          <div class="card border-start border-primary border-4 h-100 shadow-sm">
            <div class="card-body py-3 d-flex align-items-center">
              <div class="bg-primary bg-opacity-10 text-primary rounded p-3 me-3 fs-4"><i class="fa-solid fa-users"></i></div>
              <div>
                <div class="display-6 fw-bold mb-0 lh-1">{{ crmResumen.total }}</div>
                <div class="small text-muted">Total Pacientes</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="card border-start border-success border-4 h-100 shadow-sm">
            <div class="card-body py-3 d-flex align-items-center">
              <div class="bg-success bg-opacity-10 text-success rounded p-3 me-3 fs-4"><i class="fa-solid fa-arrow-trend-up"></i></div>
              <div>
                <div class="display-6 fw-bold mb-0 lh-1">{{ crmResumen.activos }}</div>
                <div class="small text-muted">Activos</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="card border-start border-warning border-4 h-100 shadow-sm">
            <div class="card-body py-3 d-flex align-items-center">
              <div class="bg-warning bg-opacity-10 text-warning rounded p-3 me-3 fs-4"><i class="fa-solid fa-pause"></i></div>
              <div>
                <div class="display-6 fw-bold mb-0 lh-1">{{ crmResumen.pausa }}</div>
                <div class="small text-muted">En Pausa</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="card border-start border-danger border-4 h-100 shadow-sm">
            <div class="card-body py-3 d-flex align-items-center">
              <div class="bg-danger bg-opacity-10 text-danger rounded p-3 me-3 fs-4"><i class="fa-solid fa-user-xmark"></i></div>
              <div>
                <div class="display-6 fw-bold mb-0 lh-1">{{ crmResumen.perdidos }}</div>
                <div class="small text-muted">Perdidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="card mb-3 shadow-sm border-0">
        <div class="card-body">
          <div class="row g-2 align-items-center">
            <div class="col-lg-6">
              <div class="input-group">
                <span class="input-group-text bg-transparent"><i class="fa-solid fa-magnifying-glass text-muted"></i></span>
                <input v-model="crmBuscador" class="form-control border-start-0 ps-0" placeholder="Buscar por nombre, DNI o celular..." autocomplete="off" @keyup.enter="buscarPacientesCRM">
              </div>
            </div>
            <div class="col-lg-2">
              <select v-model="crmFiltroProfesional" class="form-select text-capitalize">
                <option value="todos">Todos los profesionales</option>
                <option v-for="prof in crmProfesionales" :key="prof" :value="prof">{{ prof }}</option>
              </select>
            </div>
            <div class="col-lg-2">
              <select v-model="crmFiltroServicio" class="form-select text-capitalize">
                <option value="todos">Todos los servicios</option>
                <option v-for="serv in crmServicios" :key="serv" :value="serv">{{ serv }}</option>
              </select>
            </div>
            <div class="col-lg-2">
              <select v-model="crmFiltroEstado" class="form-select">
                <option value="todos">Todos los estados</option>
                <option value="Activo">Activo</option>
                <option value="Pausa">En Pausa</option>
                <option value="Perdido">Perdido</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="card shadow-sm border-0">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0 crm-table">
            <thead class="table-light text-muted small text-uppercase" style="font-size: 0.8rem;">
              <tr>
                <th>Paciente</th>
                <th>Servicio</th>
                <th>Profesional</th>
                <th>Paq.</th>
                <th>Ses.</th>
                <th>Rep.</th>
                <th>Tipo</th>
                <th>Estado</th>
                <th>1° Seguimiento</th>
                <th>2° Seguimiento</th>
                <th>Seg. Final</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="cargandoCRM">
                <td colspan="12" class="text-center py-5">
                  <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Cargando...</span></div>
                </td>
              </tr>
              <template v-else>
                <tr v-for="item in crmPacientesFiltrados" :key="item.id">
                  <td>
                    <div class="fw-bold text-dark text-capitalize">{{ item.name }} {{ item.nombres }}</div>
                    <div class="small text-muted">{{ item.dni }} · {{ item.phone }}</div>
                  </td>
                  <td><span class="badge bg-light rounded-pill text-dark border px-3">{{ item.servicio }}</span></td>
                  <td class="text-capitalize text-muted small">{{ item.profesional }}</td>
                  <td class="fw-bold">{{ item.total_membresias }}</td>
                  <td class="fw-bold text-success">{{ item.total_citas }}</td>
                  <td class="fw-bold text-danger">{{ item.total_citas_reprogramadas }}</td>
                  <td>
                    <span class="badge rounded-pill px-3" :class="item.tipo_paciente === 'Continuo' ? 'bg-primary bg-opacity-10 border border-primary-subtle' : 'bg-info bg-opacity-10 border border-info-subtle'">{{ item.tipo_paciente }}</span>
                  </td>
                  <td>
                    <span class="badge rounded-pill px-3" :class="crmBadgeEstado(item.estado)">{{ item.estado === 'Pausa' ? 'En Pausa' : item.estado }}</span>
                  </td>
                  
                  <!-- 1° Seguimiento -->
                  <td>
                    <div v-if="getSeguimiento(item, 1)" class="small">
                      <div class="text-muted" style="font-size:0.75rem;">{{ fechaLatam(getSeguimiento(item, 1).fecha) }}</div>
                      <div class="badge rounded-pill mt-1" :class="crmBadgeRespuesta(getSeguimiento(item, 1).respuesta)"><i class="fa-regular fa-comment-dots"></i> {{ getSeguimiento(item, 1).respuesta || 'Sin respuesta' }}</div>
                      <div class="text-muted mt-1 text-truncate" style="font-size: 0.7rem; max-width: 120px;" :title="getSeguimiento(item, 1).proxima_accion"><i class="fa-solid fa-arrow-right"></i> {{ getSeguimiento(item, 1).proxima_accion || '-' }}</div>
                    </div>
                    <div v-else class="text-muted small" style="font-size:0.75rem;"><i class="fa-regular fa-clock"></i> Pendiente</div>
                  </td>
                  
                  <!-- 2° Seguimiento -->
                  <td>
                    <div v-if="getSeguimiento(item, 2)" class="small">
                      <div class="text-muted" style="font-size:0.75rem;">{{ fechaLatam(getSeguimiento(item, 2).fecha) }}</div>
                      <div class="badge rounded-pill mt-1" :class="crmBadgeRespuesta(getSeguimiento(item, 2).respuesta)"><i class="fa-regular fa-comment-dots"></i> {{ getSeguimiento(item, 2).respuesta || 'Sin respuesta' }}</div>
                      <div class="text-muted mt-1 text-truncate" style="font-size: 0.7rem; max-width: 120px;" :title="getSeguimiento(item, 2).proxima_accion"><i class="fa-solid fa-arrow-right"></i> {{ getSeguimiento(item, 2).proxima_accion || '-' }}</div>
                    </div>
                    <div v-else class="text-muted small" style="font-size:0.75rem;"><i class="fa-regular fa-clock"></i> Pendiente</div>
                  </td>
                  
                  <!-- 3° Seguimiento (Final) -->
                  <td>
                    <div v-if="getSeguimiento(item, 3)" class="small">
                      <div class="text-muted" style="font-size:0.75rem;">{{ fechaLatam(getSeguimiento(item, 3).fecha) }}</div>
                      <div class="badge rounded-pill mt-1" :class="crmBadgeRespuesta(getSeguimiento(item, 3).respuesta)"><i class="fa-regular fa-comment-dots"></i> {{ getSeguimiento(item, 3).respuesta || 'Sin respuesta' }}</div>
                      <div class="text-muted mt-1 text-truncate" style="font-size: 0.7rem; max-width: 120px;" :title="getSeguimiento(item, 3).proxima_accion"><i class="fa-solid fa-arrow-right"></i> {{ getSeguimiento(item, 3).proxima_accion || '-' }}</div>
                    </div>
                    <div v-else class="text-muted small" style="font-size:0.75rem;"><i class="fa-regular fa-clock"></i> Pendiente</div>
                  </td>
                  
                  <td>
                    <button class="btn btn-sm btn-light text-secondary rounded-circle" @click="abrirModalCRM(item)">
                      <i class="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
                <tr v-if="crmPacientesFiltrados.length === 0">
                  <td colspan="12" class="text-center text-muted py-4">No se encontraron pacientes CRM</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal CRM Detalles -->
    <div class="modal fade" id="modalCRMDetalles" tabindex="-1" aria-hidden="true" ref="modalCRMDetalles">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content border-0 shadow">
          <div class="modal-header border-bottom-0 pb-0">
            <div v-if="pacienteCRMSeleccionado" class="d-flex align-items-center">
              <div class="fs-4 text-primary me-2"><i class="fa-regular fa-user"></i></div>
              <div>
                <h5 class="modal-title fw-bold mb-0 text-capitalize">{{ pacienteCRMSeleccionado.name }} {{ pacienteCRMSeleccionado.nombres }}</h5>
                <div class="text-muted small">{{ pacienteCRMSeleccionado.dni }} · {{ pacienteCRMSeleccionado.phone }}</div>
              </div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="cerrarModalCRM"></button>
          </div>
          <div class="modal-body pt-3 bg-light" v-if="pacienteCRMSeleccionado">
            
            <!-- Info Cards -->
            <div class="row g-2 mb-3">
              <div class="col-md-6">
                <div class="card h-100 border-0 shadow-sm rounded-3">
                  <div class="card-body p-3">
                    <div class="text-muted small">Servicio / Profesional</div>
                    <div class="fw-bold">{{ pacienteCRMSeleccionado.servicio }}</div>
                    <div class="small text-muted text-capitalize">{{ pacienteCRMSeleccionado.profesional }}</div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card h-100 border-0 shadow-sm rounded-3">
                  <div class="card-body p-3">
                    <div class="text-muted small">Último Paquete</div>
                    <div class="fw-bold">Paquete {{ pacienteCRMSeleccionado.total_membresias }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-2 mb-3 text-center">
              <div class="col-3">
                <div class="card border-0 shadow-sm rounded-3 py-2">
                  <div class="fs-5 text-primary"><i class="fa-solid fa-cube"></i></div>
                  <div class="fw-bold fs-5 lh-1 mt-1">{{ pacienteCRMSeleccionado.total_membresias }}</div>
                  <div class="small text-muted" style="font-size:0.7rem">Total Paq.</div>
                </div>
              </div>
              <div class="col-3">
                <div class="card border-0 shadow-sm rounded-3 py-2">
                  <div class="fs-5 text-success"><i class="fa-solid fa-hashtag"></i></div>
                  <div class="fw-bold fs-5 lh-1 mt-1">{{ pacienteCRMSeleccionado.total_citas }}</div>
                  <div class="small text-muted" style="font-size:0.7rem">Sesiones</div>
                </div>
              </div>
              <div class="col-3">
                <div class="card border-0 shadow-sm rounded-3 py-2">
                  <div class="fs-5 text-danger"><i class="fa-regular fa-calendar-xmark"></i></div>
                  <div class="fw-bold fs-5 lh-1 mt-1">{{ pacienteCRMSeleccionado.total_citas_reprogramadas }}</div>
                  <div class="small text-muted" style="font-size:0.7rem">Reprog.</div>
                </div>
              </div>
              <div class="col-3">
                <div class="card border-0 shadow-sm rounded-3 py-2">
                  <div class="fs-5 text-dark"><i class="fa-regular fa-calendar-check"></i></div>
                  <div class="fw-bold fs-6 lh-1 mt-1" v-if="pacienteCRMSeleccionado.lastAppointment">{{ fechaLatam(pacienteCRMSeleccionado.lastAppointment.date) }}</div>
                  <div class="fw-bold fs-6 lh-1 mt-1 text-muted" v-else>-</div>
                  <div class="small text-muted" style="font-size:0.7rem">Últ. Cita</div>
                </div>
              </div>
            </div>

            <div class="d-flex align-items-center mb-4 gap-2">
              <span class="text-muted small">Estado:</span>
              <span class="badge rounded-pill px-3" :class="crmBadgeEstado(pacienteCRMSeleccionado.estado)">{{ pacienteCRMSeleccionado.estado === 'Pausa' ? 'En Pausa' : pacienteCRMSeleccionado.estado }}</span>
              <span class="badge rounded-pill px-3" :class="pacienteCRMSeleccionado.tipo_paciente === 'Continuo' ? 'bg-primary bg-opacity-10 border border-primary-subtle' : 'bg-info bg-opacity-10 border border-info-subtle'">{{ pacienteCRMSeleccionado.tipo_paciente }}</span>
            </div>

            <!-- Seguimientos Cards -->
            <div v-for="num in [1, 2, 3]" :key="num" class="card border-0 shadow-sm rounded-3 mb-3">
              <div class="card-body p-3">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="fw-bold mb-0">{{ num }}° Seguimiento <span v-if="num===3">(Final)</span></h6>
                  <button v-if="!editandoSeguimiento || editandoSeguimiento !== num" class="btn btn-sm btn-outline-secondary rounded-pill px-3" @click="activarEdicionSeguimiento(num)">
                    {{ getSeguimiento(pacienteCRMSeleccionado, num) ? 'Editar' : 'Registrar' }}
                  </button>
                  <div v-else>
                    <button class="btn btn-sm btn-outline-danger rounded-pill px-3 me-2" @click="cancelarEdicionSeguimiento">Cancelar</button>
                    <button class="btn btn-sm btn-primary rounded-pill px-3" @click="guardarSeguimiento" :disabled="guardandoSeguimiento">
                      <span v-if="guardandoSeguimiento" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Guardar
                    </button>
                  </div>
                </div>

                <!-- View Mode -->
                <div v-if="!editandoSeguimiento || editandoSeguimiento !== num">
                  <div v-if="getSeguimiento(pacienteCRMSeleccionado, num)" class="row g-2 small">
                    <div class="col-6">
                      <span class="text-muted">Fecha:</span> {{ fechaLatam(getSeguimiento(pacienteCRMSeleccionado, num).fecha) }}
                    </div>
                    <div class="col-6">
                      <span class="text-muted">Canal:</span> {{ getSeguimiento(pacienteCRMSeleccionado, num).canal || '-' }}
                    </div>
                    <div class="col-6 mt-2">
                      <span class="text-muted">Respuesta:</span> <span class="badge rounded-pill" :class="crmBadgeRespuesta(getSeguimiento(pacienteCRMSeleccionado, num).respuesta)">{{ getSeguimiento(pacienteCRMSeleccionado, num).respuesta || 'Sin respuesta' }}</span>
                    </div>
                    <div class="col-6 mt-2">
                      <span class="text-muted">Próx. Acción:</span> {{ getSeguimiento(pacienteCRMSeleccionado, num).proxima_accion || '-' }}
                    </div>
                    <div class="col-12 mt-2" v-if="getSeguimiento(pacienteCRMSeleccionado, num).comentarios">
                      <span class="text-muted">Comentarios:</span> {{ getSeguimiento(pacienteCRMSeleccionado, num).comentarios }}
                    </div>
                  </div>
                  <div v-else class="text-muted small text-center py-2">
                    No registrado
                  </div>
                </div>

                <!-- Edit Mode -->
                <div v-if="editandoSeguimiento === num" class="row g-3 small">
                  <div class="col-md-6">
                    <label class="form-label text-muted mb-1">Fecha de Contacto</label>
                    <input type="date" class="form-control form-control-sm rounded-pill" v-model="seguimientoForm.fecha">
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-muted mb-1">Canal</label>
                    <select class="form-select form-select-sm rounded-pill" v-model="seguimientoForm.canal">
                      <option value="">Seleccionar...</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Llamada">Llamada</option>
                      <option value="Email">Email</option>
                      <option value="Presencial">Presencial</option>
                    </select>
                  </div>
                  <div class="col-md-12">
                    <label class="form-label text-muted mb-1">Respuesta</label>
                    <select class="form-select form-select-sm rounded-pill" v-model="seguimientoForm.respuesta">
                      <option value="">Seleccionar...</option>
                      <option value="Interesado">Interesado</option>
                      <option value="No Responde">No Responde</option>
                      <option value="Fx. Economico">Fx. Económico</option>
                      <option value="No Interesado">No Interesado</option>
                    </select>
                  </div>
                  <div class="col-md-12">
                    <label class="form-label text-muted mb-1">Próxima Acción</label>
                    <input type="text" class="form-control form-control-sm rounded-pill" placeholder="Describir..." v-model="seguimientoForm.proxima_accion">
                  </div>
                  <div class="col-md-12">
                    <label class="form-label text-muted mb-1">Comentarios</label>
                    <textarea class="form-control form-control-sm rounded-3" rows="2" placeholder="Opcional..." v-model="seguimientoForm.comentarios"></textarea>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
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
      cargando: true,
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
      
      // CRM Seguimiento data
      cargandoCRM: false,
      pacientesCRM: [],
      crmBuscador: '',
      crmFiltroEstado: 'todos',
      crmFiltroServicio: 'todos',
      crmFiltroProfesional: 'todos',
      buscadorTimeout: null,
      crmBuscadorTimeout: null,
      
      pacienteCRMSeleccionado: null,
      modalCRMInstance: null,
      
      editandoSeguimiento: null,
      guardandoSeguimiento: false,
      seguimientoForm: {
        id: null,
        patient_id: null,
        numero_seguimiento: null,
        fecha: null,
        canal: '',
        respuesta: '',
        proxima_accion: '',
        comentarios: ''
      }
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
      const terminos = texto.split(/\s+/).filter(Boolean);
      
      let f = this.pacientesTab.filter((item) => {
        const coincideTexto = terminos.length === 0 || terminos.every(t => 
          (item.paciente || '').toLowerCase().includes(t)
          || (item.profesional || '').toLowerCase().includes(t)
          || (item.servicio || '').toLowerCase().includes(t)
        );

        const coincideEstado = this.filtroEtiqueta === 'todos' || item.etiqueta === this.filtroEtiqueta;

        return coincideTexto && coincideEstado;
      });
      
      if (!texto) {
        f = f.slice(0, 10);
      }
      
      return f;
    },
    
    // CRM Computed Properties
    crmServicios() {
      return [...new Set(this.pacientesCRM.map(p => p.servicio))].filter(Boolean).sort();
    },
    crmProfesionales() {
      return [...new Set(this.pacientesCRM.map(p => p.profesional))].filter(Boolean).sort();
    },
    crmResumen() {
      const total = this.pacientesCRM.length;
      const activos = this.pacientesCRM.filter(p => p.estado === 'Activo').length;
      const pausa = this.pacientesCRM.filter(p => p.estado === 'Pausa').length;
      const perdidos = this.pacientesCRM.filter(p => p.estado === 'Perdido').length;
      return { total, activos, pausa, perdidos };
    },
    crmPacientesFiltrados() {
      const texto = this.crmBuscador.trim().toLowerCase();
      const terminos = texto.split(/\s+/).filter(Boolean);
      
      return this.pacientesCRM.filter((item) => {
        const nombreCompleto = `${item.name || ''} ${item.nombres || ''}`.toLowerCase();
        
        const coincideTexto = terminos.length === 0 || terminos.every(t => 
          nombreCompleto.includes(t)
          || (item.dni && item.dni.includes(t))
          || (item.phone && item.phone.includes(t))
        );

        const coincideEstado = this.crmFiltroEstado === 'todos' || item.estado === this.crmFiltroEstado;
        const coincideServicio = this.crmFiltroServicio === 'todos' || item.servicio === this.crmFiltroServicio;
        const coincideProfesional = this.crmFiltroProfesional === 'todos' || item.profesional === this.crmFiltroProfesional;

        return coincideTexto && coincideEstado && coincideServicio && coincideProfesional;
      });
    }
  },
  watch: {
    tabActiva(newTab) {
      if (newTab === 'crmSeguimiento' && this.pacientesCRM.length === 0) {
        this.cargarPacientesCRM();
      } else {
        this.filtroEtiqueta = 'todos';
      }
    },
    buscador(valor) {
      clearTimeout(this.buscadorTimeout);
      this.buscadorTimeout = setTimeout(() => {
        const texto = (valor || '').trim();
        if (texto === '') {
          this.cargarSeguimiento();
          return;
        }
        this.buscarCrmOriginal();
      }, 350);
    },
    crmBuscador(valor) {
      if (this.tabActiva !== 'crmSeguimiento') return;
      clearTimeout(this.crmBuscadorTimeout);
      this.crmBuscadorTimeout = setTimeout(() => {
        const texto = (valor || '').trim();
        if (texto === '') {
          this.cargarPacientesCRM();
          return;
        }
        this.buscarPacientesCRM();
      }, 350);
    }
  },
  beforeUnmount() {
    clearTimeout(this.buscadorTimeout);
    clearTimeout(this.crmBuscadorTimeout);
  },
  methods: {
    async cargarSeguimiento() {
      this.cargando = true;
      try {
        const { data } = await this.axios.get('/api/seguimiento-crm');
        this.pacientes = data.pacientes || [];
        this.resumen = data.resumen || this.resumen;
      } catch (error) {
        console.error('Error cargando seguimiento:', error);
      } finally {
        this.cargando = false;
      }
    },
    async buscarCrmOriginal() {
      if (!this.buscador || this.buscador.trim() === '') {
        this.cargarSeguimiento();
        return;
      }
      this.cargando = true;
      try {
        const { data } = await this.axios.get(`/api/seguimiento-crm?search=${encodeURIComponent(this.buscador)}`);
        this.pacientes = data.pacientes || [];
      } catch (error) {
        console.error('Error buscando seguimiento:', error);
      } finally {
        this.cargando = false;
      }
    },
    async cargarPacientesCRM() {
      this.cargandoCRM = true;
      try {
        const { data } = await this.axios.get('/api/seguimientosCRM');
        this.pacientesCRM = data || [];
      } catch (error) {
        console.error('Error cargando pacientes CRM:', error);
      } finally {
        this.cargandoCRM = false;
      }
    },
    async buscarPacientesCRM() {
      if (!this.crmBuscador || this.crmBuscador.trim() === '') {
        this.cargarPacientesCRM();
        return;
      }
      this.cargandoCRM = true;
      try {
        const { data } = await this.axios.get(`/api/seguimientosCRM?search=${encodeURIComponent(this.crmBuscador)}`);
        this.pacientesCRM = data || [];
      } catch (error) {
        console.error('Error buscando pacientes CRM:', error);
      } finally {
        this.cargandoCRM = false;
      }
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
    
    // CRM Methods
    crmBadgeEstado(estado) {
      if (estado === 'Activo') return 'bg-success bg-opacity-10 border border-success-subtle';
      if (estado === 'Pausa') return 'bg-warning bg-opacity-10 border border-warning-subtle';
      if (estado === 'Perdido') return 'bg-danger bg-opacity-10 border border-danger-subtle';
      return 'bg-secondary bg-opacity-10 border border-secondary-subtle';
    },
    crmBadgeRespuesta(respuesta) {
      if (respuesta === 'Interesado') return 'bg-success bg-opacity-10';
      if (respuesta === 'No Responde') return 'bg-secondary bg-opacity-10';
      if (respuesta === 'Fx. Economico') return 'bg-warning bg-opacity-10';
      if (respuesta === 'No Interesado') return 'bg-danger bg-opacity-10';
      return 'bg-light text-dark';
    },
    getSeguimiento(paciente, num) {
      if (!paciente || !paciente.seguimientos) return null;
      return paciente.seguimientos.find(s => s.numero_seguimiento === num);
    },
    abrirModalCRM(paciente) {
      this.pacienteCRMSeleccionado = paciente;
      this.editandoSeguimiento = null;
      
      if (!this.modalCRMInstance) {
        this.modalCRMInstance = new bootstrap.Modal(this.$refs.modalCRMDetalles);
      }
      this.modalCRMInstance.show();
    },
    cerrarModalCRM() {
      if (this.modalCRMInstance) {
        this.modalCRMInstance.hide();
      }
      this.pacienteCRMSeleccionado = null;
      this.editandoSeguimiento = null;
    },
    activarEdicionSeguimiento(num) {
      this.editandoSeguimiento = num;
      const existente = this.getSeguimiento(this.pacienteCRMSeleccionado, num);
      
      if (existente) {
        this.seguimientoForm = { ...existente };
      } else {
        this.seguimientoForm = {
          id: null,
          patient_id: this.pacienteCRMSeleccionado.id,
          numero_seguimiento: num,
          fecha: moment().format('YYYY-MM-DD'),
          canal: '',
          respuesta: '',
          proxima_accion: '',
          comentarios: ''
        };
      }
    },
    cancelarEdicionSeguimiento() {
      this.editandoSeguimiento = null;
    },
    async guardarSeguimiento() {
      this.guardandoSeguimiento = true;
      try {
        let response;
        if (this.seguimientoForm.id) {
          response = await this.axios.put(`/api/seguimientosCRM/${this.seguimientoForm.id}`, this.seguimientoForm);
        } else {
          response = await this.axios.post('/api/seguimientosCRM', this.seguimientoForm);
        }
        
        if (response.data.success) {
          const savedSeguimiento = response.data.seguimiento;
          let index = this.pacienteCRMSeleccionado.seguimientos.findIndex(s => s.numero_seguimiento === savedSeguimiento.numero_seguimiento);
          
          if (index !== -1) {
            this.pacienteCRMSeleccionado.seguimientos.splice(index, 1, savedSeguimiento);
          } else {
            this.pacienteCRMSeleccionado.seguimientos.push(savedSeguimiento);
          }
          
          const latestSeg = this.pacienteCRMSeleccionado.seguimientos.reduce((prev, current) => (prev.numero_seguimiento > current.numero_seguimiento) ? prev : current);
          if (latestSeg) {
            if (latestSeg.respuesta === "Interesado") this.pacienteCRMSeleccionado.estado = "Activo";
            else if (latestSeg.respuesta === "No Responde" || latestSeg.respuesta === "Fx. Economico") this.pacienteCRMSeleccionado.estado = "Pausa";
            else if (latestSeg.respuesta) this.pacienteCRMSeleccionado.estado = "Perdido";
          }
          
          this.editandoSeguimiento = null;
          this.guardandoSeguimiento = false;
          //Reload page.
          this.$swal({
            icon: 'success',
            title: response.data.message || 'Guardado exitosamente',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            location.reload();
          });
        }
      } catch (error) {
        console.error('Error guardando seguimiento:', error);
        this.$swal({icon: 'error', title: 'Ocurrió un error al guardar'});
      } finally {
        this.guardandoSeguimiento = false;
      }
    }
  },
  mounted() {
    this.cargarSeguimiento();
  },
};
</script>

<style scoped>
.crm-table th {
  font-weight: 600;
  letter-spacing: 0.5px;
}
.crm-table td {
  vertical-align: middle;
}
.puntero { cursor: pointer; }
</style>
