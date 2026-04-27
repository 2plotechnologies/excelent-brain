<template>
	<div class="sos-container">
		<!-- Header Section -->
		<div class="sos-header">
			<div class="search-box">
				<i class="fa-solid fa-magnifying-glass"></i>
				<input v-model="search" type="text" placeholder="Buscar paciente o DNI..." class="search-input">
			</div>
			<div class="sos-badge-counter">
				<i class="fa-solid fa-triangle-exclamation"></i>
				<span>{{ filteredPacientes.length }} pacientes SOS activos</span>
			</div>
		</div>

		<!-- Summary Statistics Cards -->
		<div class="summary-grid">
			<div class="summary-card critical">
				<div class="summary-label">Nivel Crítico</div>
				<div class="summary-value">{{ counts.critico }}</div>
			</div>
			<div class="summary-card high">
				<div class="summary-label">Nivel Alto</div>
				<div class="summary-value">{{ counts.alto }}</div>
			</div>
			<div class="summary-card moderate">
				<div class="summary-label">Nivel Moderado</div>
				<div class="summary-value">{{ counts.moderado }}</div>
			</div>
		</div>

		<!-- Patient Cards List -->
		<div class="patient-list">
			<transition-group name="list">
				<div v-for="paciente in filteredPacientes" :key="paciente.idSos" class="patient-card" :class="getRiskClass(paciente)">
					<div class="card-icon-container">
						<div class="risk-icon">
							<i class="fa-solid fa-triangle-exclamation"></i>
						</div>
					</div>
					
					<div class="card-body">
						<div class="card-title-row">
							<h3 class="patient-name">{{ paciente.name }} {{ paciente.nombres }}</h3>
							<span class="risk-badge" :class="getRiskClass(paciente)">
								{{ getRiskLabel(paciente) }}
							</span>
						</div>
						
						<div class="patient-meta-row">
							<span class="meta-item">{{ calculateAge(paciente.birth_date) }} años</span>
							<span class="meta-divider">•</span>
							<span class="meta-item" style="font-size: .75rem !important;">{{ paciente.gender == 1 ? 'Masculino' : 'Femenino' }}</span>
							<span class="meta-divider">•</span>
							<span class="meta-item">DNI: {{ paciente.dni }}</span>
						</div>

						<div class="motivo-section">
							<span class="motivo-label">Motivo:</span>
							<span class="motivo-text">{{ paciente.comentarios }}</span>
						</div>

						<div class="footer-info-row">
							<div class="info-pill">
								<i class="fa-regular fa-calendar"></i>
								SOS desde: {{ fechaLatam(paciente.registro) }}
							</div>
							<div class="info-pill">
								<i class="fa-regular fa-user"></i>
								{{ paciente.nombreProfesional }}
							</div>
							<div class="info-pill">
								<i class="fa-regular fa-comments"></i>
								{{ paciente.seguimientos_count || 0 }} seguimientos
							</div>
						</div>
					</div>

					<div class="card-actions">
						<a :href="'../api/pdfEvolution/restricted/'+paciente.id+'?token='+$token" target="_blank" class="action-btn" title="Ver Historia">
							<i class="fa-regular fa-eye"></i> Ver perfil
						</a>
						<button class="action-btn" title="Nuevo Seguimiento" data-bs-toggle="modal" data-bs-target="#modalNuevo" @click="idSos=paciente.idSos">
							<i class="fa-solid fa-plus"></i> Nuevo seguimiento
						</button>
						<button class="action-btn" title="Ver Seguimientos" data-bs-toggle="modal" data-bs-target="#modalVer" @click="listarComentarios(paciente.idSos)">
							<i class="fa-solid fa-list-check"></i> Ver seguimientos
						</button>
					</div>
				</div>
			</transition-group>
			
			<div v-if="filteredPacientes.length === 0" class="empty-state">
				<i class="fa-solid fa-user-slash"></i>
				<p>No se encontraron pacientes SOS que coincidan con la búsqueda.</p>
			</div>
		</div>

		<!-- Modal Nuevo Comentario -->
		<div class="modal fade" id="modalNuevo" tabindex="-1" aria-labelledby="modalNuevoLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content custom-modal">
					<div class="modal-header border-0">
						<h5 class="modal-title fw-bold" id="modalNuevoLabel">Agregar seguimiento</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<p class="text-muted mb-3">¿Cuál es el comentario que desea agregar al seguimiento de este paciente?</p>
						<textarea class="form-control custom-input" v-model="comentario" rows="4" placeholder="Escriba aquí el detalle del seguimiento..."></textarea>
					</div>
					<div class="modal-footer border-0">
						<button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
						<button type="button" class="btn btn-primary px-4 shadow-sm" data-bs-dismiss="modal" @click="nuevo()">Guardar comentario</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal Listar Seguimientos -->
		<div class="modal fade" id="modalVer" tabindex="-1" aria-labelledby="modalVerLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg modal-dialog-centered">
				<div class="modal-content custom-modal">
					<div class="modal-header border-0">
						<h5 class="modal-title fw-bold" id="modalVerLabel">Historial de seguimientos</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div v-if="comentarios.length > 0" class="table-responsive">
							<table class="table custom-table">
								<thead>
									<tr>
										<th>N°</th>
										<th>Encargado</th>
										<th>Comentario</th>
										<th>Fecha</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(com, index) in comentarios" :key="index">
										<td>{{ index + 1 }}</td>
										<td class="fw-bold">{{ com.nombreUsuario }}</td>
										<td>{{ com.comentario }}</td>
										<td class="text-muted">{{ com.fecha }}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div v-else class="text-center py-4">
							<p class="text-muted">No hay comentarios registrados para este paciente.</p>
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
			pacientes: [],
			comentario: '',
			idSos: -1,
			comentarios: [],
			search: ''
		}
	},
	name: 'PacienteSOS',
	mounted() {
		this.fetchData();
	},
	computed: {
		filteredPacientes() {
			if (!this.search) return this.pacientes;
			const searchLower = this.search.toLowerCase();
			return this.pacientes.filter(p => 
				p.name.toLowerCase().includes(searchLower) || 
				p.nombres.toLowerCase().includes(searchLower) || 
				p.dni.includes(searchLower)
			);
		},
		counts() {
			const counts = { critico: 0, alto: 0, moderado: 0 };
			this.pacientes.forEach(p => {
				const risk = this.getRiskClass(p);
				if (risk === 'critical') counts.critico++;
				else if (risk === 'high') counts.alto++;
				else counts.moderado++;
			});
			return counts;
		}
	},
	methods: {
		fetchData() {
			this.axios.get('/api/pedirSOS')
				.then(res => {
					this.pacientes = res.data.pacientes;
				});
		},
		nuevo() {
			if (!this.comentario) return;
			this.axios.post('/api/crearComentarioSOS', {
				idSos: this.idSos,
				comentario: this.comentario,
				idUsuario: this.$attrs.idUser
			}).then(response => {
				this.comentario = '';
				this.fetchData();
			});
		},
		listarComentarios(idSos) {
			this.axios.get('/api/listarComentariosSOS/' + idSos)
				.then(response => {
					this.comentarios = response.data;
				});
		},
		calculateAge(birthDate) {
			if (!birthDate) return 'N/A';
			return moment().diff(moment(birthDate), 'years');
		},
		fechaLatam(fecha) {
			return moment(fecha).format('DD/MM/YYYY');
		},
		getRiskClass(paciente) {
			const text = (paciente.comentarios || '').toLowerCase();
			if (text.includes('suicid') || text.includes('muerte') || text.includes('grave')) return 'critical';
			if (text.includes('crisis') || text.includes('ansiedad') || text.includes('sever')) return 'high';
			return 'moderate';
		},
		getRiskLabel(paciente) {
			const risk = this.getRiskClass(paciente);
			if (risk === 'critical') return 'CRÍTICO';
			if (risk === 'high') return 'ALTO';
			return 'MODERADO';
		}
	}
}
</script>

<style scoped>
.sos-container {
	padding: 1.5rem;
	background-color: #f8fafc;
	min-height: 100vh;
	font-family: 'Inter', sans-serif;
}

/* Header & Search */
.sos-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;
	flex-wrap: wrap;
	gap: 1rem;
}

.search-box {
	position: relative;
	width: 100%;
	max-width: 400px;
}

.search-box i {
	position: absolute;
	left: 1.25rem;
	top: 50%;
	transform: translateY(-50%);
	color: #94a3b8;
}

.search-input {
	width: 100%;
	padding: 0.75rem 1rem 0.75rem 3rem;
	border: 1px solid #e2e8f0;
	border-radius: 2rem;
	background-color: #fff;
	transition: all 0.2s;
	box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.search-input:focus {
	outline: none;
	border-color: #3b82f6;
	box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.sos-badge-counter {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: #ef4444;
	font-weight: 600;
}

/* Summary Grid */
.summary-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1.5rem;
	margin-bottom: 2.5rem;
}

.summary-card {
	padding: 1.5rem;
	border-radius: 1rem;
	border: 1px solid transparent;
	transition: transform 0.2s;
}

.summary-card:hover {
	transform: translateY(-2px);
}

.summary-label {
	font-size: .75rem;
	font-weight: 500;
	margin-bottom: 0.5rem;
}

.summary-value {
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 1;
}

.summary-card.critical { background-color: #fef2f2; border-color: #fee2e2; color: #991b1b; }
.summary-card.high { background-color: #fff7ed; border-color: #ffedd5; color: #9a3412; }
.summary-card.moderate { background-color: #fefce8; border-color: #fef9c3; color: #854d0e; }

/* Patient Cards */
.patient-list {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.patient-card {
	display: flex;
	background-color: #fff;
	border-radius: 1.25rem;
	border: 1px solid #f1f5f9;
	padding: 1.25rem;
	gap: 1.5rem;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	position: relative;
}

.patient-card:hover {
	box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
	border-color: #e2e8f0;
}

.card-icon-container {
	display: flex;
	align-items: flex-start;
	padding-top: 0.25rem;
}

.risk-icon {
	width: 48px;
	height: 48px;
	border-radius: 0.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.25rem;
}

.patient-card.critical .risk-icon { background-color: #fee2e2; color: #ef4444; }
.patient-card.high .risk-icon { background-color: #ffedd5; color: #f97316; }
.patient-card.moderate .risk-icon { background-color: #fef9c3; color: #eab308; }

.card-body {
	flex: 1;
}

.card-title-row {
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 0.25rem;
}

.patient-name {
	font-size: .75rem;
	font-weight: 700;
	color: #1e293b;
	margin: 0;
}

.risk-badge {
	padding: 0.25rem 0.75rem;
	border-radius: 1rem;
	font-size: 10px;
	font-weight: 700;
}

.risk-badge.critical { background-color: #fee2e2; color: #991b1b; }
.risk-badge.high { background-color: #ffedd5; color: #9a3412; }
.risk-badge.moderate { background-color: #fef9c3; color: #854d0e; }

.patient-meta-row {
	font-size: 0.875rem;
	color: #64748b;
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.meta-divider {
	color: #cbd5e1;
}

.motivo-section {
	margin-bottom: 1.25rem;
}

.motivo-label {
	color: #ef4444;
	font-weight: 600;
	margin-right: 0.5rem;
	font-size: .75rem;
}

.motivo-text {
	color: #ef4444;
	font-size: .75rem;
}

.footer-info-row {
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
}

.info-pill {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: .75rem;
	color: #64748b;
}

.info-pill i {
	font-size: 1rem;
	color: #94a3b8;
}

/* Actions */
.card-actions {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.5rem;
	border-left: 1px solid #f1f5f9;
	padding-left: 1.5rem;
	min-width: 180px;
}

.action-btn {
	background: none;
	border: none;
	color: #64748b;
	font-size: 0.875rem;
	font-weight: 500;
	text-align: left;
	padding: 0.5rem;
	border-radius: 0.5rem;
	display: flex;
	align-items: center;
	gap: 0.75rem;
	transition: all 0.2s;
	text-decoration: none;
	width: 100%;
}

.action-btn:hover {
	background-color: #f1f5f9;
	color: #1e293b;
}

.action-btn i {
	width: 1.25rem;
	text-align: center;
	color: #94a3b8;
}

/* Modals */
.custom-modal {
	border-radius: 1.5rem;
	overflow: hidden;
}

.custom-input {
	border-radius: 1rem;
	padding: 1rem;
	border-color: #e2e8f0;
}

.custom-table th {
	background-color: #f8fafc;
	font-weight: 600;
	font-size: 0.8rem;
	text-transform: uppercase;
	letter-spacing: 0.025em;
	color: #64748b;
	border-top: none;
}

.custom-table td {
	vertical-align: middle;
	padding: 1rem 0.75rem;
}

.empty-state {
	text-align: center;
	padding: 4rem;
	color: #94a3b8;
}

.empty-state i {
	font-size: 3rem;
	margin-bottom: 1rem;
}

/* Animations */
.list-enter-active, .list-leave-active {
	transition: all 0.4s ease;
}
.list-enter-from, .list-leave-to {
	opacity: 0;
	transform: translateX(-30px);
}

@media (max-width: 768px) {
	.patient-card {
		flex-direction: column;
	}
	.card-actions {
		border-left: none;
		border-top: 1px solid #f1f5f9;
		padding-left: 0;
		padding-top: 1rem;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.action-btn {
		width: auto;
	}
}
</style>