<template>
	<div class="limbo-container">
		<!-- Header Section -->
		<div class="limbo-header">
			<div class="search-box">
				<i class="fa-solid fa-magnifying-glass"></i>
				<input v-model="search" type="text" placeholder="Buscar paciente, DNI o profesional..." class="search-input">
			</div>
			<div class="limbo-badge-counter">
				<i class="fa-regular fa-question-circle"></i>
				<span>{{ filteredCitas.length }} citas en limbo</span>
			</div>
		</div>

		<!-- Filters Section -->
		<div class="limbo-filters mb-3 d-flex gap-2 align-items-center">
			<div class="filter-group">
				<label class="small text-muted fw-bold text-uppercase mb-1 d-block">Filtrar por fecha</label>
				<input v-model="filtroFecha" type="date" class="form-control form-control-sm rounded-pill px-3">
			</div>
			<div class="filter-group">
				<label class="small text-muted fw-bold text-uppercase mb-1 d-block">Tipo de pago</label>
				<select v-model="filtroPago" class="form-select form-select-sm rounded-pill px-3">
					<option value="todos">Todos los pagos</option>
					<option value="completo">Pagos completos</option>
					<option value="adelanto">Adelantos</option>
				</select>
			</div>
			<button class="btn btn-sm btn-light rounded-pill mt-4 px-3" @click="resetFilters" v-if="filtroFecha || filtroPago !== 'todos'">
				<i class="fas fa-times me-1"></i> Limpiar
			</button>
		</div>

		<!-- Info Banner -->
		<div class="info-banner">
			<div class="info-icon">
				<i class="fa-regular fa-question-circle"></i>
			</div>
			<div class="info-content">
				<h4 class="info-title">¿Qué es el Limbo?</h4>
				<p class="info-text">
					Aquí se listan las citas regulares que tienen un pago (total o adelanto) registrado pero no tienen una fecha de reprogramación asignada. 
					Las acciones disponibles son: <strong>Reprogramar cita</strong> (asignar nueva fecha) o <strong>Dar como Asistida</strong>.
				</p>
			</div>
		</div>

		<!-- Main Card Section -->
		<div class="limbo-main-card">
			<div class="card-header-custom">
				<i class="fa-regular fa-question-circle"></i>
				<h3 class="card-title">Citas en Limbo</h3>
			</div>
			
			<div class="limbo-list">
				<transition-group name="list">
					<div v-for="(cita, index) in filteredCitas" :key="cita.id" class="limbo-item">
						<!-- Date & Time -->
						<div class="item-datetime">
							<div class="date">{{ fechaISO(cita.appointment.date) }}</div>
							<div class="time">{{ horaLatamRange(cita.appointment.schedule.check_time, cita.appointment.schedule.departure_date) }}</div>
						</div>

						<!-- Service Badge -->
						<div class="item-service">
							<span class="service-badge">{{ getServiceInitials(cita.appointment.precio.descripcion) }}</span>
						</div>

						<!-- Patient & Professional Info -->
						<div class="item-info">
							<div class="patient-row">
								<i class="fa-regular fa-user"></i>
								<span class="patient-name">{{ cita.appointment.patient.name }} {{ cita.appointment.patient.nombres ?? '' }}</span>
							</div>
							<div class="professional-row">
								<span class="professional-name">{{ cita.appointment.professional.name }}</span>
								<span class="divider">•</span>
								<span class="patient-dni">DNI: {{ cita.appointment.patient.dni }}</span>
							</div>
						</div>

						<!-- Payment Badge -->
						<div class="item-payment">
							<span class="payment-badge" :class="getPaymentClass(cita.appointment.payment)">
								<i class="fa-solid fa-dollar-sign"></i>
								{{ getPaymentText(cita.appointment.payment) }}
							</span>
						</div>

						<!-- Status Badge -->
						<div class="item-status">
							<span class="status-badge">
								<i class="fa-regular fa-question-circle"></i>
								En Limbo
							</span>
						</div>

						<!-- Actions -->
						<div class="item-actions">
							<button class="action-btn" title="Ver detalle" @click="prepararAcciones(cita, index)">
								<i class="fa-regular fa-eye"></i>
								<span>Ver</span>
							</button>
							<button class="action-btn primary" title="Reprogramar" @click="prepararDatos(cita)" data-bs-toggle="modal" data-bs-target="#reprogModal">
								<i class="fa-solid fa-arrows-rotate"></i>
								<span>Reprogramar</span>
							</button>
						</div>
					</div>
				</transition-group>

				<div v-if="filteredCitas.length === 0" class="empty-state">
					<i class="fa-solid fa-calendar-xmark"></i>
					<p>No se encontraron citas en limbo que coincidan con la búsqueda.</p>
				</div>
			</div>
		</div>

		<reprog-modal :dataCit="dataCit" :idUsuario="$attrs.idUser"></reprog-modal>
		<modal-acciones-cita v-if="citaElegida.id" :key="citaElegida.id" :cita="citaElegida" :indiceElegido="indiceElegido" :precios="precios" id="modalAcciones" @actualizar="fetchLimbos"></modal-acciones-cita>
	</div>
</template>

<script>
import ReprogModal from './ReprogModal.vue';
import ModalAccionesCita from './ModalAccionesCita.vue';
import moment from 'moment';

export default {
	name: 'HomeLimbo',
	components: { ReprogModal, ModalAccionesCita },
	data() {
		return {
			citas: [],
			dataCit: {},
			search: '',
			citaElegida: {},
			indiceElegido: -1,
			precios: [],
			filtroFecha: null,
			filtroPago: 'todos'
		}
	},
	mounted() {
		this.fetchLimbos();
		this.fetchPrecios();
	},
	computed: {
		filteredCitas() {
			let result = this.citas;

			// Search filter
			if (this.search) {
				const s = this.search.toLowerCase();
				result = result.filter(c => 
					c.appointment.patient.name.toLowerCase().includes(s) ||
					(c.appointment.patient.nombres && c.appointment.patient.nombres.toLowerCase().includes(s)) ||
					c.appointment.patient.dni.includes(s) ||
					c.appointment.professional.name.toLowerCase().includes(s)
				);
			}

			// Date filter
			if (this.filtroFecha) {
				result = result.filter(c => this.fechaISO(c.appointment.date) === this.filtroFecha);
			}

			// Payment type filter
			if (this.filtroPago !== 'todos') {
				result = result.filter(c => {
					const pay = c.appointment.payment;
					if (this.filtroPago === 'completo') return pay.pay_status == 2;
					if (this.filtroPago === 'adelanto') return pay.pay_status == 1 && pay.adelanto > 0;
					return true;
				});
			}

			return result;
		}
	},
	methods: {
		fetchLimbos() {
			this.axios.get('/api/limbos')
				.then(res => this.citas = res.data);
		},
		fetchPrecios() {
			this.axios.get('/api/precio')
				.then(res => this.precios = res.data);
		},
		prepararDatos(cita) {
			this.dataCit = { ...cita.appointment };
			this.dataCit.id = cita.appointment_id;
			this.dataCit.patient_id = cita.appointment.patient_id;
		},
		prepararAcciones(cita, index) {
			this.citaElegida = { ...cita.appointment };
			this.indiceElegido = index;
			this.$nextTick(() => {
				const el = document.getElementById('modalAcciones');
				if (el && window.bootstrap) {
					const modalInstance = window.bootstrap.Modal.getOrCreateInstance(el);
					modalInstance.show();
				}
			});
		},
		horaLatam(hora) {
			return moment(hora, 'HH:mm:ss').format('h:mm a');
		},
		horaLatamRange(start, end) {
			return moment(start, 'HH:mm:ss').format('HH:mm') + ' - ' + moment(end, 'HH:mm:ss').format('HH:mm');
		},
		fechaISO(fecha) {
			return moment(fecha).format('YYYY-MM-DD');
		},
		fechaLatam(fecha) {
			return moment(fecha).format('DD/MM/YYYY');
		},
		getServiceInitials(desc) {
			if (!desc) return 'SRV';
			return desc.substring(0, 3).toUpperCase();
		},
		getPaymentClass(payment) {
			if (payment.pay_status == 2) return 'paid';
			if (payment.pay_status == 1 && payment.adelanto > 0) return 'advance';
			if (payment.pay_status == 3) return 'canceled';
			return 'unpaid';
		},
		getPaymentText(payment) {
			const amount = payment.price || 0;
			const advance = payment.adelanto || 0;
			if (payment.pay_status == 2) return `Pagado - S/ ${amount}`;
			if (payment.pay_status == 1 && advance > 0) return `Con Adelanto - S/ ${advance}`;
			if (payment.pay_status == 3) return `Anulado - S/ ${amount}`;
			return `Sin Pagar - S/ ${amount}`;
		},
		resetFilters() {
			this.filtroFecha = null;
			this.filtroPago = 'todos';
		}
	}
}
</script>

<style scoped>
.limbo-container {
	padding: 1.5rem;
	background-color: #f8fafc;
	min-height: 100vh;
	font-family: 'Inter', sans-serif;
}

/* Header & Search */
.limbo-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;
	flex-wrap: wrap;
	gap: 1rem;
}

.search-box {
	position: relative;
	width: 100%;
	max-width: 450px;
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
	border-radius: 0.75rem;
	background-color: #fff;
	transition: all 0.2s;
	font-size: 0.95rem;
}

.search-input:focus {
	outline: none;
	border-color: #3b82f6;
	box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.limbo-badge-counter {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: #f59e0b;
	font-weight: 500;
	font-size: 0.95rem;
}

/* Info Banner */
.info-banner {
	background-color: #fffaf0;
	border: 1px solid #fef3c7;
	border-radius: 1rem;
	padding: 1.25rem;
	display: flex;
	gap: 1rem;
	margin-bottom: 2rem;
}

.info-icon {
	color: #f59e0b;
	font-size: 1.25rem;
	margin-top: 0.25rem;
}

.info-title {
	font-size: 1rem;
	font-weight: 700;
	color: #92400e;
	margin-bottom: 0.25rem;
}

.info-text {
	font-size: 0.9rem;
	color: #b45309;
	line-height: 1.5;
	margin: 0;
}

/* Main Card */
.limbo-main-card {
	background-color: #fff;
	border-radius: 1.25rem;
	border: 1px solid #f1f5f9;
	box-shadow: 0 1px 3px rgba(0,0,0,0.05);
	overflow: hidden;
}

.card-header-custom {
	padding: 1.25rem 1.5rem;
	display: flex;
	align-items: center;
	gap: 0.75rem;
	border-bottom: 1px solid #f1f5f9;
}

.card-header-custom i {
	color: #f59e0b;
}

.card-title {
	font-size: 1.1rem;
	font-weight: 700;
	color: #1e293b;
	margin: 0;
}

/* List Items */
.limbo-list {
	display: flex;
	flex-direction: column;
}

.limbo-item {
	display: flex;
	align-items: center;
	padding: 1.25rem 1.5rem;
	border-bottom: 1px solid #f1f5f9;
	gap: 1.5rem;
	transition: background-color 0.2s;
}

.limbo-item:last-child {
	border-bottom: none;
}

.limbo-item:hover {
	background-color: #f8fafc;
}

.item-datetime {
	min-width: 100px;
}

.item-datetime .date {
	font-weight: 700;
	color: #1e293b;
	font-size: 0.95rem;
}

.item-datetime .time {
	font-size: 0.75rem;
	color: #64748b;
}

.item-service {
	display: flex;
	align-items: center;
}

.service-badge {
	background-color: #eff6ff;
	color: #3b82f6;
	padding: 0.4rem 0.6rem;
	border-radius: 0.5rem;
	font-size: 0.7rem;
	font-weight: 700;
}

.item-info {
	flex: 1;
}

.patient-row {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 0.25rem;
}

.patient-row i {
	color: #94a3b8;
	font-size: 0.9rem;
}

.patient-name {
	font-weight: 600;
	color: #334155;
	font-size: 1rem;
}

.professional-row {
	font-size: 0.8rem;
	color: #64748b;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.divider {
	color: #cbd5e1;
}

.item-payment {
	min-width: 160px;
}

.payment-badge {
	display: flex;
	align-items: center;
	gap: 0.4rem;
	padding: 0.4rem 0.8rem;
	border-radius: 2rem;
	font-size: 0.8rem;
	font-weight: 600;
}

.payment-badge.paid { background-color: #f0fdf4; color: #16a34a; }
.payment-badge.advance { background-color: #fff7ed; color: #ea580c; }
.payment-badge.canceled { background-color: #fef2f2; color: #dc2626; }
.payment-badge.unpaid { background-color: #f1f5f9; color: #64748b; }

.item-status {
	min-width: 100px;
}

.status-badge {
	display: flex;
	align-items: center;
	gap: 0.4rem;
	padding: 0.4rem 0.8rem;
	border-radius: 2rem;
	background-color: #fff7ed;
	color: #f59e0b;
	font-size: 0.8rem;
	font-weight: 600;
	border: 1px solid #ffedd5;
}

.item-actions {
	display: flex;
	gap: 0.75rem;
}

.action-btn {
	background: none;
	border: none;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: #64748b;
	font-size: 0.85rem;
	font-weight: 600;
	padding: 0.5rem 0.75rem;
	border-radius: 0.5rem;
	transition: all 0.2s;
}

.action-btn:hover {
	background-color: #f1f5f9;
	color: #1e293b;
}

.action-btn.primary {
	color: #3b82f6;
}

.action-btn.primary:hover {
	background-color: #eff6ff;
}

.action-btn.success {
	color: #16a34a;
}

.action-btn.success:hover {
	background-color: #f0fdf4;
}

.empty-state {
	padding: 4rem;
	text-align: center;
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

@media (max-width: 1024px) {
	.limbo-item {
		flex-wrap: wrap;
	}
	.item-actions {
		width: 100%;
		justify-content: flex-end;
		margin-top: 0.5rem;
	}
}
</style>