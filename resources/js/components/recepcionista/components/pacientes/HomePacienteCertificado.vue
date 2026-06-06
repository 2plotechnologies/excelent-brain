<template>
  <main class="paciente-certificado-container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
      <div>
        <h1 class="h3 mb-1 text-gray-800 font-weight-bold">
          <i class="fas fa-certificate text-primary mr-2"></i> Pacientes de Certificados
        </h1>
        <p class="text-muted mb-0">Gestión de personas que únicamente solicitan certificados de trabajo o estudios.</p>
      </div>
      <div>
        <button class="btn btn-primary shadow-sm hover-lift rounded-pill px-4 fw-bold" @click="openCreateModal">
          <i class="fas fa-plus-circle mr-1"></i> Registrar Paciente
        </button>
      </div>
    </div>

    <!-- METRICS CARDS -->
    <div class="row g-3 mb-4">
      <div class="col-md-2 col-sm-4">
        <div class="card metric-card border-0 shadow-sm rounded-4 h-100 position-relative overflow-hidden">
          <div class="card-body p-3 text-center d-flex flex-column justify-content-center">
            <h6 class="text-uppercase text-xs text-muted fw-bold tracking-wider mb-2">Total</h6>
            <h3 class="mb-0 fw-extrabold text-dark">{{ totalCount }}</h3>
          </div>
          <div class="metric-progress bg-primary"></div>
        </div>
      </div>
      <div class="col-md-2 col-sm-4" v-for="(serv, index) in servicios" :key="serv.id">
        <div class="card metric-card border-0 shadow-sm rounded-4 h-100 position-relative overflow-hidden">
          <div class="card-body p-3 text-center d-flex flex-column justify-content-center">
            <h6 class="text-uppercase text-xs text-muted fw-bold tracking-wider mb-2 text-truncate" :title="serv.descripcion">{{ serv.descripcion }}</h6>
            <h3 class="mb-0 fw-extrabold" :class="'text-' + getColorName(index)">{{ stats[serv.id] || 0 }}</h3>
          </div>
          <div class="metric-progress" :class="'bg-' + getColorName(index)"></div>
        </div>
      </div>
    </div>

    <!-- FILTER & SEARCH BAR -->
    <div class="card border-0 shadow-sm rounded-4 mb-4">
      <div class="card-body p-3">
        <div class="row align-items-center g-2">
          <div class="col-md-8">
            <div class="input-group">
              <span class="input-group-text bg-white border-end-0 text-muted"><i class="fas fa-search"></i></span>
              <input
                type="text"
                class="form-control border-start-0 bg-white"
                placeholder="Buscar por DNI, nombres o apellidos..."
                v-model="searchQuery"
                @keyup.enter="buscar"
                @input="onSearchInput"
              />
            </div>
          </div>
          <div class="col-md-4 text-md-end">
            <button class="btn btn-light border px-4 w-100" @click="resetSearch" :disabled="!searchQuery && !activeSearch">
              <i class="fas fa-redo-alt mr-1"></i> Limpiar Búsqueda
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- PACIENTES TABLE -->
    <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
          <thead class="table-light text-muted text-uppercase small" style="font-size: 0.75rem;">
            <tr>
              <th class="ps-4 py-3">Paciente</th>
              <th>DNI</th>
              <th>Teléfono</th>
              <th>Correo Electrónico</th>
              <th class="text-center">Tipo Certificado</th>
              <th class="text-center">Estado</th>
              <th class="text-center">Fecha Registro</th>
              <th class="pe-4 text-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loading">
              <td colspan="7" class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Cargando...</span>
                </div>
                <p class="text-muted mt-2 mb-0">Obteniendo listado de pacientes...</p>
              </td>
            </tr>
            <tr v-else-if="pacientes.length === 0">
              <td colspan="7" class="text-center py-5 text-muted">
                <i class="fas fa-folder-open fs-2 mb-3 opacity-50 d-block"></i>
                No se encontraron pacientes registrados.
              </td>
            </tr>
            <tr v-for="paciente in pacientes" :key="paciente.id" class="patient-row" v-else>
              <td class="ps-4 py-3">
                <div class="d-flex align-items-center">
                  <div class="avatar-circle mr-3" :class="getAvatarBg(paciente.id)">
                    {{ getInitials(paciente.nombres, paciente.apellidos) }}
                  </div>
                  <div>
                    <h6 class="mb-0 text-sm font-weight-bold text-dark text-capitalize">
                      {{ paciente.nombres }} {{ paciente.apellidos }}
                    </h6>
                    <span class="text-xs text-muted">ID: #{{ paciente.id }}</span>
                  </div>
                </div>
              </td>
              <td>
                <span class="badge bg-light text-dark font-weight-bold px-2 py-1 border rounded">{{ paciente.dni }}</span>
              </td>
              <td>
                <span class="text-sm">{{ paciente.telefono }}</span>
              </td>
              <td>
                <span class="text-sm text-secondary" v-if="paciente.correo">{{ paciente.correo }}</span>
                <span class="text-xs text-muted fst-italic" v-else>-</span>
              </td>
              <td class="text-center">
                <span class="badge bg-light text-dark px-3 py-2 rounded-pill font-weight-bold border">
                  {{ getNombreServicio(paciente.tipo_certificado) }}
                </span>
              </td>
              <td class="text-center">
                <select class="form-select form-select-sm d-inline-block w-auto font-weight-bold shadow-sm" style="border-radius: 8px;" v-model="paciente.estado" @change="cambiarEstado(paciente)" :disabled="paciente.pagos_count === 0">
                  <option value="En proceso">En proceso</option>
                  <option value="Recepcionado">Recepcionado</option>
                  <option value="Entregado">Entregado</option>
                </select>
              </td>
              <td class="text-center">
                <span class="text-xs text-muted">{{ formatDate(paciente.created_at) }}</span>
              </td>
              <td class="pe-4 text-end">
                <div class="d-flex justify-content-end align-items-center gap-2">
                  <button v-if="paciente.pagos_count === 0" class="btn btn-icon-edit text-danger" @click="openPaymentModal(paciente)" title="Pagar">
                    <i class="fas fa-money-bill-wave"></i>
                  </button>
                  <button v-else class="btn btn-icon-edit text-success" disabled title="Pagado">
                    <i class="fas fa-check-circle"></i>
                  </button>
                  <button class="btn btn-icon-edit" @click="openEditModal(paciente)" title="Editar">
                    <i class="far fa-edit"></i>
                  </button>
                  <button class="btn btn-icon-delete" @click="confirmDelete(paciente)" title="Eliminar">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- PAGINATION -->
      <div class="card-footer bg-white border-top-0 d-flex justify-content-between align-items-center py-3 flex-wrap gap-2" v-if="pagination.last_page > 1">
        <span class="text-muted small">
          Mostrando página {{ pagination.current_page }} de {{ pagination.last_page }}
        </span>
        <nav aria-label="Page navigation">
          <ul class="pagination pagination-sm mb-0 shadow-sm">
            <li class="page-item" :class="{'disabled': pagination.current_page === 1}">
              <a class="page-link" href="#" @click.prevent="cargarPacientes(pagination.current_page - 1)">
                <i class="fas fa-chevron-left"></i>
              </a>
            </li>
            <li v-for="page in pagesNumber" :key="page" class="page-item" :class="{'active': page === pagination.current_page}">
              <a class="page-link" href="#" @click.prevent="cargarPacientes(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{'disabled': pagination.current_page === pagination.last_page}">
              <a class="page-link" href="#" @click.prevent="cargarPacientes(pagination.current_page + 1)">
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- MODAL REGISTRO / EDICION -->
    <div class="modal fade" id="modalPacienteCertificado" tabindex="-1" aria-labelledby="modalPacienteCertificadoLabel" aria-hidden="true" ref="modalForm">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4">
          <div class="modal-header border-0 pb-0 px-4 pt-4">
            <h5 class="modal-title font-weight-bold text-dark" id="modalPacienteCertificadoLabel">
              <i class="fas fa-certificate text-primary mr-2"></i> {{ isEditMode ? 'Editar Paciente' : 'Registrar Paciente para Certificado' }}
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
          </div>
          <form @submit.prevent="savePaciente">
            <div class="modal-body p-4">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted text-uppercase">Nombres <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" v-model="form.nombres" required placeholder="Ej. Juan Carlos" />
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted text-uppercase">Apellidos <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" v-model="form.apellidos" required placeholder="Ej. Pérez Quispe" />
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted text-uppercase">DNI / Documento <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <input type="text" class="form-control border-end-0" v-model="form.dni" @blur="buscarDatosDNI" required placeholder="8 dígitos" maxlength="20" />
                    <button class="btn btn-outline-secondary border bg-light text-muted" type="button" @click="buscarDatosDNI" title="Buscar en RENIEC" style="border-top-right-radius: 10px; border-bottom-right-radius: 10px;">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted text-uppercase">Teléfono <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" v-model="form.telefono" required placeholder="Celular o fijo" maxlength="20" />
                </div>
                <div class="col-12">
                  <label class="form-label small fw-bold text-muted text-uppercase">Correo Electrónico</label>
                  <input type="email" class="form-control" v-model="form.correo" placeholder="ejemplo@correo.com" />
                </div>
                <div class="col-12">
                  <label class="form-label small fw-bold text-muted text-uppercase">Tipo de Certificado <span class="text-danger">*</span></label>
                  <select class="form-select" v-model="form.tipo_certificado" required>
                    <option value="" disabled>Seleccione una opción</option>
                    <option v-for="serv in servicios" :key="serv.id" :value="serv.id.toString()">{{ serv.descripcion }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer border-0 p-4 pt-0">
              <button type="button" class="btn btn-light rounded-pill px-4 text-muted font-weight-bold" data-bs-dismiss="modal" @click="closeModal">Cancelar</button>
              <button type="submit" class="btn btn-primary rounded-pill px-4 shadow font-weight-bold" :disabled="saving">
                <span v-if="saving" class="spinner-border spinner-border-sm mr-2" role="status"></span>
                <i class="fas fa-save mr-1" v-else></i>
                {{ isEditMode ? 'Guardar Cambios' : 'Registrar Paciente' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- MODAL PAGO -->
    <div class="modal fade" id="modalPagoCertificado" tabindex="-1" aria-labelledby="modalPagoCertificadoLabel" aria-hidden="true" ref="modalPaymentForm">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4">
          <div class="modal-header border-0 pb-0 px-4 pt-4">
            <h5 class="modal-title font-weight-bold text-dark" id="modalPagoCertificadoLabel">
              <i class="fas fa-money-bill-wave text-success mr-2"></i> Pagar Certificado
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closePaymentModal"></button>
          </div>
          <form @submit.prevent="submitPago">
            <div class="modal-body p-4">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted text-uppercase">Precio <span class="text-danger">*</span></label>
                  <input type="number" class="form-control" v-model="pagoForm.precio" step="0.01" required readonly />
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted text-uppercase">Método de Pago <span class="text-danger">*</span></label>
                  <select class="form-select" v-model="pagoForm.moneda_id" required>
                    <option value="" disabled>Seleccione método</option>
                    <option v-for="m in monedas" :key="m.id" :value="m.id">{{ m.tipo }}</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted text-uppercase">Comprobante <span class="text-danger">*</span></label>
                  <select class="form-select" v-model="pagoForm.tipo_comprobante" required>
                    <option value="1">Boleta</option>
                    <option value="2">Factura</option>
                    <option value="3">Otros</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold text-muted text-uppercase">Nro Comprobante <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" v-model="pagoForm.voucher" required />
                </div>
                <div class="col-12">
                  <label class="form-label small fw-bold text-muted text-uppercase">Motivo / Observación <span class="text-danger">*</span></label>
                  <textarea class="form-control" v-model="pagoForm.motivo" rows="2" required placeholder="Motivo escrito por el recepcionista"></textarea>
                </div>
              </div>
            </div>
            <div class="modal-footer border-0 p-4 pt-0">
              <button type="button" class="btn btn-light rounded-pill px-4 text-muted font-weight-bold" data-bs-dismiss="modal" @click="closePaymentModal">Cancelar</button>
              <button type="submit" class="btn btn-success rounded-pill px-4 shadow font-weight-bold" :disabled="savingPago">
                <span v-if="savingPago" class="spinner-border spinner-border-sm mr-2" role="status"></span>
                <i class="fas fa-check mr-1" v-else></i> Confirmar Pago
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomePacienteCertificado',
  data() {
    return {
      pacientes: [],
      loading: false,
      saving: false,
      searchQuery: '',
      activeSearch: false,
      searchTimeout: null,
      isEditMode: false,
      selectedId: null,
      totalCount: 0,
      stats: {},
      
      form: {
        nombres: '',
        apellidos: '',
        dni: '',
        telefono: '',
        correo: '',
        tipo_certificado: ''
      },
      
      servicios: [],
      monedas: [],
      modalPayment: null,
      savingPago: false,
      pagoForm: {
        paciente_id: null,
        precio: 0,
        moneda_id: '',
        tipo_comprobante: '1',
        voucher: '',
        motivo: ''
      },

      pagination: {
        current_page: 1,
        last_page: 1,
        from: 1,
        to: 1
      },

      modal: null
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
  methods: {
    async cargarListas() {
      try {
        const [monedasRes, preciosRes] = await Promise.all([
          this.axios.get('/api/listarMonedas'),
          this.axios.get('/api/listarPreciosTodos')
        ]);
        this.monedas = monedasRes.data;
        
        const permitidos = [
          'Rotación de servicio',
          'Prácticas pre profesionales',
          'Serum',
          'Nombramiento',
          'Certificado de trabajo simple'
        ];
        
        this.servicios = preciosRes.data.filter(p => 
          p.idClasificacion === 3 && permitidos.includes(p.descripcion.trim())
        );
      } catch (error) {
        console.error('Error cargando listas:', error);
      }
    },
    async buscarDatosDNI() {
      if (!this.form.dni || this.form.dni.length < 8) return;
      try {
        const localRes = await this.axios.get(`/api/paciente-certificado/dni/${this.form.dni}`);
        if (localRes.data.encontrado_bd) {
          const p = localRes.data.paciente;
          this.form.nombres = p.nombres;
          this.form.apellidos = p.apellidos;
          this.form.telefono = p.telefono;
          this.form.correo = p.correo;
          this.form.tipo_certificado = p.tipo_certificado;
          this.$swal({ toast: true, position: 'top-end', icon: 'info', title: 'Datos recuperados', showConfirmButton: false, timer: 1500 });
          return;
        }
        
        const apiRes = await this.axios.get(`/api/buscarDni/${this.form.dni}`);
        if (!apiRes.data.error) {
          this.form.nombres = apiRes.data.nombres;
          this.form.apellidos = `${apiRes.data.apellido_paterno} ${apiRes.data.apellido_materno}`.trim();
        } else {
          this.$swal({ toast: true, position: 'top-end', icon: 'warning', title: 'No se encontraron datos en Reniec', showConfirmButton: false, timer: 2000 });
        }
      } catch (error) {
        console.error('Error buscando DNI:', error);
      }
    },
    async cargarPacientes(page = 1) {
      this.loading = true;
      try {
        const response = await this.axios.get('/api/paciente-certificado', {
          params: {
            page: page,
            search: this.searchQuery
          }
        });
        
        this.pacientes = response.data.data;
        this.pagination = {
          current_page: response.data.current_page,
          last_page: response.data.last_page,
          from: response.data.from,
          to: response.data.to
        };
        
        this.actualizarMetricas();
      } catch (error) {
        console.error('Error cargando pacientes:', error);
      } finally {
        this.loading = false;
      }
    },
    async actualizarMetricas() {
      try {
        // Obtenemos los totales consultando todos o calculando de acuerdo a la api.
        // Dado que la api es paginada, podemos tener un endpoint simple o fetch
        // Para no sobrecargar, consultamos sin paginar (o deducimos si la api lo soporta, o hacemos un query rápido).
        const { data } = await this.axios.get('/api/paciente-certificado', { params: { limit: 1000 } });
        const todos = data.data || [];
        this.totalCount = data.total || todos.length;
        
        let newStats = {};
        this.servicios.forEach(s => {
          newStats[s.id] = todos.filter(p => p.tipo_certificado?.toString() === s.id.toString()).length;
        });
        this.stats = newStats;
      } catch (e) {
        console.error('Error calculando métricas:', e);
      }
    },
    buscar() {
      this.activeSearch = true;
      this.cargarPacientes(1);
    },
    onSearchInput() {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.buscar();
      }, 500);
    },
    resetSearch() {
      this.searchQuery = '';
      this.activeSearch = false;
      this.cargarPacientes(1);
    },
    openCreateModal() {
      this.isEditMode = false;
      this.selectedId = null;
      this.form = {
        nombres: '',
        apellidos: '',
        dni: '',
        telefono: '',
        correo: '',
        tipo_certificado: ''
      };
      
      this.showModal();
    },
    openEditModal(paciente) {
      this.isEditMode = true;
      this.selectedId = paciente.id;
      this.form = {
        nombres: paciente.nombres,
        apellidos: paciente.apellidos,
        dni: paciente.dni,
        telefono: paciente.telefono,
        correo: paciente.correo || '',
        tipo_certificado: paciente.tipo_certificado
      };
      
      this.showModal();
    },
    showModal() {
      if (!this.modal) {
        this.modal = new window.bootstrap.Modal(this.$refs.modalForm);
      }
      this.modal.show();
    },
    closeModal() {
      if (this.modal) {
        this.modal.hide();
      }
    },
    async cambiarEstado(paciente) {
      try {
        await this.axios.put(`/api/paciente-certificado/${paciente.id}/estado`, { estado: paciente.estado });
        this.$swal({ toast: true, position: 'top-end', icon: 'success', title: 'Estado actualizado', showConfirmButton: false, timer: 1500 });
      } catch (error) {
        console.error('Error cambiando estado:', error);
        this.$swal({ icon: 'error', title: 'Error', text: 'No se pudo actualizar el estado.' });
        this.cargarPacientes(this.pagination.current_page);
      }
    },
    openPaymentModal(paciente) {
      const s = this.servicios.find(x => x.id.toString() === paciente.tipo_certificado?.toString());
      const precio = s ? (s.nuevos || 0) : 0;
      
      this.pagoForm = {
        paciente_id: paciente.id,
        precio: precio,
        moneda_id: '',
        tipo_comprobante: '1',
        voucher: '',
        motivo: ''
      };
      if (!this.modalPayment) {
        this.modalPayment = new window.bootstrap.Modal(this.$refs.modalPaymentForm);
      }
      this.modalPayment.show();
    },
    closePaymentModal() {
      if (this.modalPayment) this.modalPayment.hide();
    },
    async submitPago() {
      this.savingPago = true;
      try {
        await this.axios.post(`/api/paciente-certificado/${this.pagoForm.paciente_id}/pagar`, this.pagoForm);
        this.$swal({ icon: 'success', title: 'Pago Registrado', text: 'El pago se registró en caja correctamente.', showConfirmButton: false, timer: 1500 });
        this.closePaymentModal();
        this.cargarPacientes(this.pagination.current_page);
      } catch (error) {
        console.error('Error guardando pago:', error);
        this.$swal({ icon: 'error', title: 'Error', text: 'Ocurrió un error al registrar el pago.' });
      } finally {
        this.savingPago = false;
      }
    },
    async savePaciente() {
      this.saving = true;
      try {
        if (this.isEditMode) {
          await this.axios.put(`/api/paciente-certificado/${this.selectedId}`, this.form);
          this.$swal({
            icon: 'success',
            title: 'Actualizado',
            text: 'El registro se actualizó correctamente.',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          await this.axios.post('/api/paciente-certificado', this.form);
          this.$swal({
            icon: 'success',
            title: 'Registrado',
            text: 'El paciente se registró correctamente.',
            showConfirmButton: false,
            timer: 1500
          });
        }
        this.closeModal();
        this.cargarPacientes(this.pagination.current_page);
      } catch (error) {
        console.error('Error guardando paciente:', error);
        let errorMsg = 'Ocurrió un error al guardar los datos.';
        if (error.response && error.response.data && error.response.data.errors) {
          const errors = error.response.data.errors;
          errorMsg = Object.values(errors).flat().join('\n');
        } else if (error.response && error.response.data && error.response.data.message) {
          errorMsg = error.response.data.message;
        }
        this.$swal({
          icon: 'error',
          title: 'Error de Validación',
          text: errorMsg
        });
      } finally {
        this.saving = false;
      }
    },
    confirmDelete(paciente) {
      this.$swal({
        title: '¿Estás seguro?',
        text: `Se eliminará el registro de ${paciente.nombres} ${paciente.apellidos}. Esta acción no se puede deshacer de forma directa.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444',
        cancelButtonColor: '#6b7280',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.axios.delete(`/api/paciente-certificado/${paciente.id}`);
            this.$swal({
              icon: 'success',
              title: 'Eliminado',
              text: 'Registro eliminado con éxito.',
              showConfirmButton: false,
              timer: 1500
            });
            this.cargarPacientes(this.pagination.current_page);
          } catch (error) {
            console.error('Error eliminando:', error);
            this.$swal({
              icon: 'error',
              title: 'Error',
              text: error.response?.data?.message || 'No se pudo eliminar el registro.'
            });
          }
        }
      });
    },
    getNombreServicio(id) {
      const s = this.servicios.find(x => x.id.toString() === id?.toString());
      return s ? s.descripcion : 'Desconocido';
    },
    getColorName(index) {
      const colors = ['primary', 'success', 'info', 'warning', 'danger', 'secondary'];
      return colors[index % colors.length];
    },
    getInitials(nombres, apellidos) {
      const n = nombres ? nombres.trim().split(' ')[0][0] : '';
      const a = apellidos ? apellidos.trim().split(' ')[0][0] : '';
      return (n + a).toUpperCase() || '?';
    },
    getAvatarBg(id) {
      const bgs = ['bg-primary-soft', 'bg-success-soft', 'bg-info-soft', 'bg-warning-soft', 'bg-danger-soft'];
      return bgs[id % bgs.length];
    },
    formatDate(dateStr) {
      if (!dateStr) return '-';
      const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(dateStr).toLocaleDateString('es-ES', options);
    }
  },
  async mounted() {
    await this.cargarListas();
    this.cargarPacientes();
  },
  beforeDestroy() {
    if (this.modal) this.modal.dispose();
    if (this.modalPayment) this.modalPayment.dispose();
  }
};
</script>

<style scoped>
.paciente-certificado-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Color definitions */
.text-indigo {
  color: #6366f1 !important;
}
.bg-indigo {
  background-color: #6366f1 !important;
}
.bg-indigo-soft {
  background-color: #e0e7ff !important;
}
.text-emerald {
  color: #10b981 !important;
}
.bg-emerald {
  background-color: #10b981 !important;
}
.bg-emerald-soft {
  background-color: #d1fae5 !important;
}
.bg-primary-soft {
  background-color: #e0f2fe !important;
}

/* Metric Cards styling */
.metric-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.metric-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02) !important;
}
.metric-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  opacity: 0.8;
}

/* Table styling */
.patient-row {
  transition: background-color 0.15s ease;
}
.patient-row:hover {
  background-color: #f8fafc;
}

/* Avatar circle */
.avatar-circle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.85rem;
}
.avatar-circle.bg-primary-soft { color: #0284c7; }
.avatar-circle.bg-success-soft { color: #15803d; color: #10b981; background-color: #d1fae5; }
.avatar-circle.bg-info-soft { color: #0891b2; background-color: #ecfeff; }
.avatar-circle.bg-warning-soft { color: #b45309; background-color: #fef3c7; }
.avatar-circle.bg-danger-soft { color: #b91c1c; background-color: #fee2e2; }

/* Badges */
.badge-trabajo {
  background-color: #e0e7ff;
  color: #4f46e5;
  border: 1px solid #c7d2fe;
}
.badge-estudios {
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #a7f3d0;
}

/* Action Buttons */
.btn-icon-edit, .btn-icon-delete {
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}
.btn-icon-edit {
  color: #3b82f6;
}
.btn-icon-edit:hover {
  background-color: #dbeafe;
  color: #1d4ed8;
}
.btn-icon-delete {
  color: #ef4444;
}
.btn-icon-delete:hover {
  background-color: #fee2e2;
  color: #b91c1c;
}

/* Custom styles for modern input fields */
.form-control, .form-select {
  border-radius: 10px;
  padding: 0.6rem 0.9rem;
  border-color: #e2e8f0;
  box-shadow: none !important;
  transition: border-color 0.2s ease;
}
.form-control:focus, .form-select:focus {
  border-color: #3b82f6;
}
.input-group-text {
  border-radius: 10px;
  border-color: #e2e8f0;
}

/* Transitions */
.hover-lift {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.hover-lift:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
