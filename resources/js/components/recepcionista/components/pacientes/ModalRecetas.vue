<template>
  <div class="modal fade" id="recetasModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg" style="border-radius: 20px; overflow: hidden;">
        
        <div class="modal-header border-0 pb-0 pt-4 px-4 d-flex align-items-start justify-content-between">
          <div class="d-flex align-items-center">
            <div class="icon-header-container mr-3" style="background: #ebfbee;">
              <i class="fas fa-file-prescription text-success h4 mb-0"></i>
            </div>
            <div>
              <h5 class="modal-title font-weight-bold text-dark mb-1">Recetas Médicas</h5>
              <div class="d-flex gap-2 mt-1">
                <span class="badge-status status-badge-success" v-if="dataPatient">
                  <i class="fas fa-user-injured mr-1"></i> {{dataPatient.name}} {{dataPatient.nombres}}
                </span>
              </div>
            </div>
          </div>
          <button type="button" class="btn-close-custom" data-bs-dismiss="modal" aria-label="Close">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="modal-body px-4 py-4">
          <div class="table-container">
            <table class="table table-hover custom-table mb-0">
              <thead>
                <tr>
                  <th class="border-top-0 text-uppercase text-muted small font-weight-bold">#</th>
                  <th class="border-top-0 text-uppercase text-muted small font-weight-bold">Fecha de Atención</th>
                  <th class="border-top-0 text-uppercase text-muted small font-weight-bold text-right">Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="dataPatient && dataPatient.prescriptions && dataPatient.prescriptions.length > 0" v-for="(prescription, index) in dataPatient.prescriptions" :key="index">
                  <td class="align-middle font-weight-bold text-dark">{{ index + 1 }}</td>
                  <td class="align-middle text-dark">
                    <i class="far fa-calendar-alt text-muted mr-2"></i>{{ prescription ? prescription.attention_date : '...' }}
                  </td>
                  <td class="align-middle text-right">
                    <a v-if="prescription" class="btn btn-action btn-sm btn-outline-success" :href="`/api/pdf/${prescription.id}?token=${$token}`" target="_blank">
                      <i class="fa-solid fa-file-pdf mr-1"></i> Ver Receta
                    </a>
                  </td>
                </tr>
                <tr v-if="!dataPatient || !dataPatient.prescriptions || dataPatient.prescriptions.length === 0">
                  <td colspan="3" class="text-center py-5">
                    <div class="empty-state">
                      <div class="empty-state-icon mb-3">
                        <i class="fas fa-folder-open text-muted" style="font-size: 3rem; opacity: 0.5;"></i>
                      </div>
                      <h6 class="font-weight-bold text-dark mb-1">No hay recetas</h6>
                      <p class="text-muted small mb-0">Este paciente aún no tiene recetas médicas registradas.</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Recetas',
    props: {
      dataPatient: Object
    }
  }
</script>

<style scoped>
/* Main Layout */
.modal-content {
  background: #ffffff;
}

/* Header */
.icon-header-container {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}
.btn-close-custom {
  background: #f8f9fa;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #adb5bd;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  cursor: pointer;
}
.btn-close-custom:hover { background: #e9ecef; color: #495057; }

/* Badges */
.badge-status {
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
}
.status-badge-success { background: #e7fcf3; color: #0ca678; border: 1px solid #c3fae8; }

/* Table Container */
.table-container {
  background: #f8f9fc;
  border-radius: 16px;
  border: 1px solid #f1f3f9;
  padding: 12px;
  overflow: hidden;
}
.custom-table th {
  border-bottom: 2px solid #e9ecef;
}
.custom-table td {
  border-bottom: 1px solid #f1f3f9;
  vertical-align: middle;
}
.custom-table tr:last-child td {
  border-bottom: none;
}

/* Empty State */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Action Buttons */
.btn-action {
  border-radius: 12px;
  padding: 6px 14px;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn-action:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.05); }

.gap-2 { gap: 0.5rem; }
.mr-1 { margin-right: 0.25rem; }
.mr-2 { margin-right: 0.5rem; }
.mr-3 { margin-right: 0.75rem; }
</style>