<template>
	<div class="sedes-container">
		<!-- Header -->
		<div class="sedes-header">
			<div>
				<h2 class="sedes-title">
					<i class="fas fa-building"></i>
					Gestión de Sedes
				</h2>
				<p class="sedes-subtitle">Administre las sedes de la empresa</p>
			</div>
			<button class="btn-crear" @click="abrirModal(null)">
				<i class="fas fa-plus"></i>
				Nueva Sede
			</button>
		</div>

		<!-- Stats Cards -->
		<div class="stats-grid">
			<div class="stat-card activas">
				<div class="stat-icon"><i class="fas fa-check-circle"></i></div>
				<div class="stat-info">
					<span class="stat-value">{{ sedesActivas }}</span>
					<span class="stat-label">Sedes Activas</span>
				</div>
			</div>
			<div class="stat-card inactivas">
				<div class="stat-icon"><i class="fas fa-times-circle"></i></div>
				<div class="stat-info">
					<span class="stat-value">{{ sedesInactivas }}</span>
					<span class="stat-label">Sedes Inactivas</span>
				</div>
			</div>
			<div class="stat-card total">
				<div class="stat-icon"><i class="fas fa-building"></i></div>
				<div class="stat-info">
					<span class="stat-value">{{ sedes.length }}</span>
					<span class="stat-label">Total</span>
				</div>
			</div>
		</div>

		<!-- Sedes Table -->
		<div class="sedes-card">
			<div class="table-responsive">
				<table class="table sedes-table">
					<thead>
						<tr>
							<th>#</th>
							<th>Nombre</th>
							<th>Código</th>
							<th>Dirección</th>
							<th>Teléfono</th>
							<th>Estado</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(sede, index) in sedes" :key="sede.id" :class="{ 'sede-inactiva': !sede.activo }">
							<td class="fw-bold text-muted">{{ index + 1 }}</td>
							<td>
								<div class="sede-nombre">
									<i class="fas fa-map-marker-alt" :style="{ color: sede.activo ? '#3b82f6' : '#94a3b8' }"></i>
									{{ sede.nombre }}
								</div>
							</td>
							<td><code class="sede-codigo">{{ sede.codigo || '—' }}</code></td>
							<td class="text-muted">{{ sede.direccion || '—' }}</td>
							<td class="text-muted">{{ sede.telefono || '—' }}</td>
							<td>
								<span class="badge-estado" :class="sede.activo ? 'activo' : 'inactivo'">
									<i :class="sede.activo ? 'fas fa-check' : 'fas fa-ban'"></i>
									{{ sede.activo ? 'Activa' : 'Inactiva' }}
								</span>
							</td>
							<td>
								<div class="acciones-group">
									<button class="btn-accion editar" @click="abrirModal(sede)" title="Editar">
										<i class="fas fa-pen"></i>
									</button>
									<button v-if="sede.activo" class="btn-accion desactivar" @click="toggleEstado(sede)" title="Desactivar">
										<i class="fas fa-power-off"></i>
									</button>
									<button v-else class="btn-accion activar" @click="toggleEstado(sede)" title="Reactivar">
										<i class="fas fa-undo"></i>
									</button>
								</div>
							</td>
						</tr>
						<tr v-if="sedes.length === 0">
							<td colspan="7" class="text-center py-5 text-muted">
								<i class="fas fa-building" style="font-size: 2rem; opacity: 0.3;"></i>
								<p class="mt-2">No hay sedes registradas.</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Modal Crear/Editar Sede -->
		<div class="modal fade" id="modalSede" tabindex="-1" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content modal-sede">
					<div class="modal-header border-0 pb-0">
						<h5 class="modal-title fw-bold">
							<i :class="editando ? 'fas fa-pen' : 'fas fa-plus-circle'" class="me-2"></i>
							{{ editando ? 'Editar Sede' : 'Nueva Sede' }}
						</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="mb-3">
							<label class="form-label fw-semibold">Nombre de la Sede <span class="text-danger">*</span></label>
							<input type="text" class="form-control custom-input" v-model="form.nombre" placeholder="Ej: El Tambo" maxlength="100">
						</div>
						<div class="mb-3">
							<label class="form-label fw-semibold">Código interno</label>
							<input type="text" class="form-control custom-input" v-model="form.codigo" placeholder="Ej: eltambo (sin espacios)" maxlength="20">
							<small class="text-muted">Identificador único, usado internamente. Sin espacios ni caracteres especiales.</small>
						</div>
						<div class="mb-3">
							<label class="form-label fw-semibold">Dirección</label>
							<input type="text" class="form-control custom-input" v-model="form.direccion" placeholder="Dirección de la sede" maxlength="255">
						</div>
						<div class="mb-3">
							<label class="form-label fw-semibold">Teléfono</label>
							<input type="text" class="form-control custom-input" v-model="form.telefono" placeholder="Teléfono de contacto" maxlength="20">
						</div>
					</div>
					<div class="modal-footer border-0 pt-0">
						<button type="button" class="btn btn-light px-4" data-bs-dismiss="modal">Cancelar</button>
						<button type="button" class="btn btn-primary px-4 shadow-sm" @click="guardarSede()" :disabled="!form.nombre">
							<i class="fas fa-save me-1"></i>
							{{ editando ? 'Actualizar' : 'Crear' }}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeSedes',
	data() {
		return {
			sedes: [],
			form: {
				nombre: '',
				codigo: '',
				direccion: '',
				telefono: ''
			},
			editando: null, // id de la sede en edición, null si es nueva
		}
	},
	computed: {
		sedesActivas() {
			return this.sedes.filter(s => s.activo).length;
		},
		sedesInactivas() {
			return this.sedes.filter(s => !s.activo).length;
		}
	},
	mounted() {
		this.cargarSedes();
	},
	methods: {
		cargarSedes() {
			this.axios.get('/api/sedes?todas=1')
				.then(res => {
					this.sedes = res.data;
				});
		},
		abrirModal(sede) {
			if (sede) {
				this.editando = sede.id;
				this.form = {
					nombre: sede.nombre,
					codigo: sede.codigo || '',
					direccion: sede.direccion || '',
					telefono: sede.telefono || ''
				};
			} else {
				this.editando = null;
				this.form = { nombre: '', codigo: '', direccion: '', telefono: '' };
			}
			const modal = new bootstrap.Modal(document.getElementById('modalSede'));
			modal.show();
		},
		guardarSede() {
			if (!this.form.nombre) return;

			const request = this.editando
				? this.axios.put(`/api/sedes/${this.editando}`, this.form)
				: this.axios.post('/api/sedes', this.form);

			request.then(res => {
				this.cargarSedes();
				bootstrap.Modal.getInstance(document.getElementById('modalSede')).hide();
			}).catch(err => {
				if (err.response && err.response.data && err.response.data.errors) {
					const errors = err.response.data.errors;
					const firstError = Object.values(errors)[0][0];
					alert(firstError);
				}
			});
		},
		toggleEstado(sede) {
			const action = sede.activo
				? this.axios.delete(`/api/sedes/${sede.id}`)
				: this.axios.post(`/api/sedes/${sede.id}/reactivar`);

			action.then(() => {
				this.cargarSedes();
			});
		}
	}
}
</script>

<style scoped>
.sedes-container {
	padding: 1.5rem;
	font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
	min-height: 100vh;
	background-color: #f8fafc;
}

/* Header */
.sedes-header {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 2rem;
	flex-wrap: wrap;
	gap: 1rem;
}

.sedes-title {
	font-size: 1.5rem;
	font-weight: 700;
	color: #1e293b;
	margin: 0;
}

.sedes-title i {
	color: #3b82f6;
	margin-right: 0.5rem;
}

.sedes-subtitle {
	color: #64748b;
	margin: 0.25rem 0 0;
	font-size: 0.9rem;
}

.btn-crear {
	background: linear-gradient(135deg, #3b82f6, #2563eb);
	color: #fff;
	border: none;
	padding: 0.65rem 1.5rem;
	border-radius: 0.75rem;
	font-weight: 600;
	font-size: 0.9rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
	transition: all 0.2s;
	box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

.btn-crear:hover {
	transform: translateY(-1px);
	box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

/* Stats Grid */
.stats-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1rem;
	margin-bottom: 2rem;
}

.stat-card {
	background: #fff;
	border-radius: 1rem;
	padding: 1.25rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	border: 1px solid #f1f5f9;
	transition: transform 0.2s;
}

.stat-card:hover {
	transform: translateY(-2px);
}

.stat-icon {
	width: 48px;
	height: 48px;
	border-radius: 0.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.25rem;
}

.stat-card.activas .stat-icon { background: #dcfce7; color: #16a34a; }
.stat-card.inactivas .stat-icon { background: #fee2e2; color: #ef4444; }
.stat-card.total .stat-icon { background: #dbeafe; color: #3b82f6; }

.stat-value {
	font-size: 1.5rem;
	font-weight: 700;
	color: #1e293b;
	line-height: 1;
}

.stat-label {
	font-size: 0.8rem;
	color: #64748b;
}

.stat-info {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}

/* Table Card */
.sedes-card {
	background: #fff;
	border-radius: 1.25rem;
	border: 1px solid #f1f5f9;
	overflow: hidden;
}

.sedes-table {
	margin: 0;
}

.sedes-table thead th {
	background: #f8fafc;
	font-weight: 600;
	font-size: 0.75rem;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	color: #64748b;
	padding: 1rem;
	border-bottom: 1px solid #e2e8f0;
	border-top: none;
}

.sedes-table tbody td {
	padding: 1rem;
	vertical-align: middle;
	border-bottom: 1px solid #f1f5f9;
}

.sedes-table tbody tr:hover {
	background-color: #f8fafc;
}

.sedes-table tbody tr.sede-inactiva {
	opacity: 0.6;
}

.sede-nombre {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-weight: 600;
	color: #1e293b;
}

.sede-codigo {
	background: #f1f5f9;
	color: #475569;
	padding: 0.2rem 0.5rem;
	border-radius: 0.375rem;
	font-size: 0.8rem;
}

/* Badges */
.badge-estado {
	display: inline-flex;
	align-items: center;
	gap: 0.35rem;
	padding: 0.3rem 0.75rem;
	border-radius: 2rem;
	font-size: 0.75rem;
	font-weight: 600;
}

.badge-estado.activo {
	background: #dcfce7;
	color: #15803d;
}

.badge-estado.inactivo {
	background: #fee2e2;
	color: #991b1b;
}

/* Action Buttons */
.acciones-group {
	display: flex;
	gap: 0.5rem;
}

.btn-accion {
	width: 34px;
	height: 34px;
	border: none;
	border-radius: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s;
	font-size: 0.8rem;
}

.btn-accion.editar {
	background: #dbeafe;
	color: #2563eb;
}

.btn-accion.editar:hover {
	background: #bfdbfe;
}

.btn-accion.desactivar {
	background: #fee2e2;
	color: #dc2626;
}

.btn-accion.desactivar:hover {
	background: #fecaca;
}

.btn-accion.activar {
	background: #dcfce7;
	color: #16a34a;
}

.btn-accion.activar:hover {
	background: #bbf7d0;
}

/* Modal */
.modal-sede {
	border-radius: 1.25rem;
	overflow: hidden;
}

.custom-input {
	border-radius: 0.75rem;
	padding: 0.65rem 1rem;
	border: 1px solid #e2e8f0;
	transition: all 0.2s;
}

.custom-input:focus {
	border-color: #3b82f6;
	box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

@media (max-width: 768px) {
	.sedes-header {
		flex-direction: column;
	}
}
</style>
