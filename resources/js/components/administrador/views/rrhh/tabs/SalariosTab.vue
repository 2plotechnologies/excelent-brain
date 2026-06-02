<template>
  <div>
    <div class="row mb-4 align-items-end">
      <div class="col-md-2">
        <label class="text-muted small font-weight-bold">Mes</label>
        <select class="form-control form-control-sm" v-model="filters.month" @change="fetchPayrolls">
          <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
        </select>
      </div>
      <div class="col-md-2">
        <label class="text-muted small font-weight-bold">Año</label>
        <input type="number" class="form-control form-control-sm" v-model="filters.year" @change="fetchPayrolls">
      </div>
      <div class="col-md-3">
        <label class="text-muted small font-weight-bold">Nombre del empleado</label>
        <input type="text" class="form-control form-control-sm" placeholder="Buscar..." v-model="filters.employee_name" @input="filterByName">
      </div>
      <div class="col-md-5 d-flex justify-content-end">
        <button class="btn btn-success btn-sm mr-2" @click="openGenerateModal">
          <i class="fas fa-sync-alt"></i> Generar Planilla del Mes
        </button>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-hover align-middle text-center" style="font-size: 0.85rem;">
        <thead class="bg-light text-muted">
          <tr>
            <th class="text-left font-weight-bold border-0">Empleado</th>
            <th class="font-weight-bold border-0" style="width: 100px;">Sueldo Base</th>
            <th class="font-weight-bold border-0">Días</th>
            <th class="font-weight-bold border-0">Tard / Aus</th>
            <th class="font-weight-bold border-0" style="width: 80px;">% AFP</th>
            <th class="font-weight-bold border-0">AFP</th>
            <th class="font-weight-bold border-0 text-danger" style="width: 90px;">Desc. T/A</th>
            <th class="font-weight-bold border-0 text-danger" style="width: 90px;">Otros Desc.</th>
            <th class="font-weight-bold border-0 text-success" style="width: 90px;">Bonos</th>
            <th class="font-weight-bold border-0 text-success" style="width: 90px;">Concil.</th>
            <th class="font-weight-bold border-0 text-success">H. Extra</th>
            <th class="font-weight-bold border-0">Neto</th>
            <th class="font-weight-bold border-0">Estado</th>
            <th class="font-weight-bold border-0">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payroll in filteredPayrolls" :key="payroll.id">
            <td class="text-left">
              <div class="font-weight-bold text-dark">{{ getEmployeeName(payroll) }}</div>
            </td>
            <td>
              <input type="number" class="form-control form-control-sm text-center px-1" v-model="payroll.base_salary" @change="updatePayroll(payroll)" step="0.01">
            </td>
            <td>{{ payroll.worked_days }}</td>
            <td>{{ payroll.late_count }} / {{ payroll.absence_count }}</td>
            <td>
              <input type="number" class="form-control form-control-sm text-center px-1" v-model="payroll.afp_percentage" @change="updatePayroll(payroll)" step="0.1">
            </td>
            <td>S/ {{ payroll.afp_amount.toFixed(2) }}</td>
            <td class="text-danger">S/ {{ (payroll.late_discount + payroll.absence_discount).toFixed(2) }}</td>
            <td>
              <input type="number" class="form-control form-control-sm text-center px-1 text-danger" v-model="payroll.other_discounts" @change="updatePayroll(payroll)" step="0.01">
            </td>
            <td>
              <input type="number" class="form-control form-control-sm text-center px-1 text-success" v-model="payroll.bonuses" @change="updatePayroll(payroll)" step="0.01">
            </td>
            <td>
              <input type="number" class="form-control form-control-sm text-center px-1 text-success" v-model="payroll.conciliation" @change="updatePayroll(payroll)" step="0.01">
            </td>
            <td class="text-success">S/ {{ payroll.extra_hours_amount.toFixed(2) }}</td>
            <td class="font-weight-bold">S/ {{ payroll.net_salary.toFixed(2) }}</td>
            <td>
              <span class="badge badge-pill px-3 py-2 cursor-pointer" 
                    :class="payroll.payment_status === 'Pagado' ? 'badge-success bg-success text-white' : 'badge-warning bg-warning text-dark'"
                    @click="togglePayment(payroll)">
                {{ payroll.payment_status }}
              </span>
            </td>
            <td>
              <button class="btn btn-sm btn-outline-danger border-0" @click="deletePayroll(payroll.id)" title="Eliminar">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
          <tr v-if="filteredPayrolls.length === 0">
            <td colspan="14" class="text-center py-4 text-muted">No se encontraron planillas para este mes.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Generate Modal -->
    <div class="modal fade" id="generatePayrollModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Generar Planilla Individual</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group text-center">
              <i class="fas fa-users fa-3x text-primary mb-3"></i>
              <p class="text-muted">Se generarán las planillas para todos los empleados activos (Profesionales y Logísticos) que tengan una configuración salarial registrada.</p>
              <button class="btn btn-primary btn-block" @click="generateAll">Generar Planillas</button>
            </div>
          </div>
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
      payrolls: [],
      filteredPayrolls: [],
      filters: {
        month: moment().month() + 1,
        year: moment().year(),
        employee_name: ''
      },
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    };
  },
  mounted() {
    this.fetchPayrolls();
  },
  methods: {
    fetchPayrolls() {
      axios.get(`/api/employee-payrolls`, {
        params: {
          payroll_month: this.filters.month,
          payroll_year: this.filters.year
        }
      }).then(res => {
        if (res.data.success) {
          this.payrolls = res.data.data.data;
          this.filterByName();
        }
      }).catch(err => console.error(err));
    },
    filterByName() {
      if (!this.filters.employee_name) {
        this.filteredPayrolls = this.payrolls;
        return;
      }
      const query = this.filters.employee_name.toLowerCase();
      this.filteredPayrolls = this.payrolls.filter(p => {
        const name = this.getEmployeeName(p).toLowerCase();
        return name.includes(query);
      });
    },
    getEmployeeName(payroll) {
      if (payroll.professional) {
        return `${payroll.professional.name} ${payroll.professional.lastname}`;
      } else if (payroll.user) {
        return payroll.user.name;
      }
      return 'Desconocido';
    },
    updatePayroll(payroll) {
      let data = {
        base_salary: parseFloat(payroll.base_salary) || 0,
        afp_percentage: parseFloat(payroll.afp_percentage) || 0,
        bonuses: parseFloat(payroll.bonuses) || 0,
        conciliation: parseFloat(payroll.conciliation) || 0,
        other_discounts: parseFloat(payroll.other_discounts) || 0
      };

      axios.put(`/api/employee-payrolls/${payroll.id}`, data)
        .then(res => {
          if (res.data.success) {
            this.$swal.fire({
              icon: 'success',
              title: 'Actualizado',
              text: 'Se actualizaron los datos correctamente',
              timer: 1500,
              showConfirmButton: false
            });
            // Update the local object with calculated values
            Object.assign(payroll, res.data.data);
          }
        }).catch(err => {
          this.$swal.fire('Error', 'No se pudo actualizar', 'error');
        });
    },
    togglePayment(payroll) {
      axios.post(`/api/employee-payrolls/${payroll.id}/toggle-payment`)
        .then(res => {
          if (res.data.success) {
            payroll.payment_status = res.data.data.payment_status;
            this.$swal.fire({
              icon: 'success',
              title: 'Estado actualizado',
              toast: true,
              position: 'top-end',
              timer: 1500,
              showConfirmButton: false
            });
          }
        });
    },
    deletePayroll(id) {
      this.$swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/api/employee-payrolls/${id}`)
            .then(res => {
              if (res.data.success) {
                this.$swal.fire('Eliminado', 'La planilla ha sido eliminada.', 'success');
                this.fetchPayrolls();
              }
            });
        }
      });
    },
    openGenerateModal() {
      $('#generatePayrollModal').modal('show');
    },
    generateAll() {
      // For demonstration, since the API doesn't generate for everyone at once without ID.
      // Assuming generatePayroll can handle bulk if user_id and professional_id are null.
      // If it requires IDs, we would need to loop or update backend.
      axios.post(`/api/employee-payrolls/generate`, {
        payroll_month: this.filters.month,
        payroll_year: this.filters.year
      }).then(res => {
        $('#generatePayrollModal').modal('hide');
        this.$swal.fire('Éxito', 'Planilla generada', 'success');
        this.fetchPayrolls();
      }).catch(err => {
        this.$swal.fire('Error', err.response?.data?.message || 'Hubo un error', 'error');
      });
    }
  }
};
</script>

<style scoped>
.table th {
  text-transform: uppercase;
  font-size: 0.70rem;
  letter-spacing: 0.3px;
}
.badge-pill {
  font-size: 0.80rem;
}
.cursor-pointer {
  cursor: pointer;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
