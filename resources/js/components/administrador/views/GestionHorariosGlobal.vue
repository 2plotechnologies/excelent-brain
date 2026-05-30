<template>
	<div class="container-fluid p-2">
		<!-- Cabecera y Filtros -->
		<div class="row mb-3 gx-3 align-items-center">
			<div class="col-md-4">
				<h4 class="m-0 font-weight-bold text-primary"><i class="fa-regular fa-calendar-days"></i> Gestión de Horarios</h4>
			</div>
			<div class="col-md-3">
				<select v-model="profesionalElegido" class="form-select font-weight-bold shadow-sm" @change="cambioProfesional">
					<option value="" disabled selected>Seleccione un Profesional</option>
					<option v-for="prof in profesionales" :key="prof.id" :value="prof.id">
						{{ prof.name }} ({{ prof.profession }})
					</option>
				</select>
			</div>
			<div class="col-md-3">
				<input type="month" v-model="mesSeleccionado" class="form-control font-weight-bold shadow-sm" @change="cambioMes">
			</div>
			<div class="col-md-2 text-end">
				<button class="btn btn-primary font-weight-bold shadow-sm" data-bs-toggle="modal" data-bs-target="#modalNuevoHorario" :disabled="!profesionalElegido">
					<i class="fas fa-plus"></i> Nuevo
				</button>
			</div>
		</div>

		<!-- Contenedor del Calendario Grid -->
		<div class="calendar-wrapper bg-white shadow-sm border" style="border-radius: 8px; height: calc(100vh - 180px); overflow-y: auto; overflow-x: hidden;" v-show="profesionalElegido">
			
			<div class="calendar-header d-flex border-bottom bg-light" style="border-top-left-radius: 8px; border-top-right-radius: 8px;">
				<!-- Cabecera Esquina (Eje Y) -->
				<div class="time-axis-header text-center py-3 border-right text-muted font-weight-bold" style="min-width: 60px; border-top-left-radius: 8px;">
					<i class="far fa-clock"></i>
				</div>
				<!-- Cabecera Días (Eje X) -->
				<div class="doctors-header-container d-flex flex-grow-1" style="overflow-x: auto; overflow-y: hidden; min-width: 0;" ref="headerScroll">
					<div class="doctor-header text-center py-2 border-right text-dark" v-for="dia in diasDelMes" :key="dia.fechaCompleta" :class="{'bg-light': dia.nombreDia === 'Domingo' || dia.nombreDia === 'Sabado'}">
						<div style="line-height: 1.2;">
							<strong class="mx-1">{{ dia.numeroDia }}</strong><br>
							<small class="text-uppercase">{{ dia.nombreDia }}</small>
						</div>
					</div>
				</div>
			</div>

			<!-- Cuerpo del Calendario -->
			<div class="calendar-body d-flex">
				<!-- Eje Y Horas -->
				<div class="time-axis border-right bg-white" style="min-width: 60px;">
					<div class="time-slot-label text-center text-muted small position-relative" v-for="hora in horasGrid" :key="'lbl-'+hora">
						<span style="position: absolute; top: -10px; right: 8px; background: white; padding: 0 4px; z-index: 2;">{{ hora }}:00</span>
					</div>
				</div>
				<!-- Columnas de días -->
				<div class="doctors-body-container d-flex flex-grow-1" style="overflow-x: auto; overflow-y: hidden; position: relative; min-width: 0;" ref="bodyScroll" @scroll="syncScrollX">
					<!-- Malla de fondo -->
					<div class="grid-lines-container" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; z-index: 0;">
						<div class="grid-line border-bottom" v-for="hora in horasGrid" :key="'gl-'+hora"></div>
					</div>

					<!-- Columnas para cada día del mes -->
					<div class="doctor-column border-right position-relative" v-for="dia in diasDelMes" :key="'col-'+dia.fechaCompleta" style="z-index: 1;" :class="{'bg-light': dia.nombreDia === 'Domingo' || dia.nombreDia === 'Sabado'}">
						<div v-for="horario in getHorariosDia(dia)" :key="horario.id + '-' + dia.fechaCompleta" 
								class="booked-slot shadow-sm p-1" 
								:style="[slotStyle(horario.check_time, horario.departure_date), { borderLeft: '4px solid ' + (horario.isBlocked ? '#6c757d' : (horario.active ? '#1cc88a' : '#e74a3b')) }]"
								@click="abrirDetallesHorario(horario, dia.fechaCompleta)">
							<div class="booked-content h-100 position-relative overflow-hidden d-flex flex-column" :class="horario.isBlocked ? 'bg-secondary text-white' : (horario.active ? 'bg-success text-white' : 'bg-danger text-white')">
								<div class="font-weight-bold text-truncate lh-1" style="font-size: 0.75rem;">
									<i :class="horario.isBlocked ? 'fas fa-ban' : (horario.active ? 'fas fa-check-circle' : 'fas fa-times-circle')"></i> 
									{{ horario.isBlocked ? 'Bloqueado' : (horario.active ? 'Activo' : 'Inactivo') }}
								</div>
								<div class="mt-1 text-truncate" style="font-size: 0.65rem; line-height: 1;">
									{{ formatHora(horario.check_time) }} - {{ formatHora(horario.departure_date) }}
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		
		<div v-show="!profesionalElegido" class="text-center mt-5 text-muted">
			<i class="fas fa-user-md fa-3x mb-3"></i>
			<h5>Seleccione un profesional para gestionar sus horarios</h5>
		</div>

		<!-- Modal Nuevo Horario -->
		<div class="modal fade" id="modalNuevoHorario" tabindex="-1" aria-labelledby="modalNuevoHorarioLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<form @submit.prevent="guardarHorario">
						<div class="modal-header bg-primary text-white">
							<h5 class="modal-title" id="modalNuevoHorarioLabel">Registrar Horario</h5>
							<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" ref="closeModalBtn"></button>
						</div>
						<div class="modal-body">
							<div class="mb-3">
								<label class="form-label font-weight-bold">Tipo de Horario</label>
								<select class="form-select" v-model="tipoHorario">
									<option value="recurrente">Días Recurrentes (Semanal)</option>
									<option value="especifico">Fechas Específicas (Mensual)</option>
								</select>
							</div>

							<div class="mb-3" v-if="tipoHorario === 'recurrente'">
								<label class="form-label font-weight-bold">Días de la semana</label>
								<div class="d-flex flex-wrap gap-2">
									<div class="form-check" v-for="dia in diasSemana" :key="'chk-'+dia">
										<input class="form-check-input" type="checkbox" :value="dia" :id="'chk-'+dia" v-model="nuevoHorario.daysSelected">
										<label class="form-check-label" :for="'chk-'+dia">{{ dia }}</label>
									</div>
								</div>
							</div>

							<div class="mb-3" v-if="tipoHorario === 'especifico'">
								<label class="form-label font-weight-bold">Seleccionar Fecha (Creación Mensual)</label>
								<input type="date" class="form-control" v-model="nuevoHorario.date" required>
								<small class="text-muted d-block mt-1">Al elegir una fecha (ej. Martes 15), se crearán horarios para <strong>todos los martes de ese mes</strong> automáticamente.</small>
							</div>

							<div class="row">
								<div class="col-6 mb-3">
									<label class="form-label font-weight-bold">Hora de Inicio</label>
									<input type="time" class="form-control" v-model="nuevoHorario.check_time" required>
								</div>
								<div class="col-6 mb-3">
									<label class="form-label font-weight-bold">Hora de Fin</label>
									<input type="time" class="form-control" v-model="nuevoHorario.departure_date" required>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
							<button type="submit" class="btn btn-success" :disabled="guardando">
								<span v-if="guardando" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
								Guardar Horario
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>

		<!-- Modal Detalles Horario -->
		<div class="modal fade" id="modalDetallesHorario" aria-labelledby="modalDetallesHorarioLabel" aria-hidden="true" ref="modalDetalles">
			<div class="modal-dialog modal-sm">
				<div class="modal-content">
					<div class="modal-header bg-dark text-white">
						<h6 class="modal-title m-0">Opciones de Horario</h6>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body text-center" v-if="horarioSeleccionado">
						<p class="mb-2"><strong>Día/Fecha:</strong> {{ fechaLatam(horarioSeleccionadoContextoFecha) }}</p>
						<p class="mb-3"><strong>Hora:</strong> {{ formatHora(horarioSeleccionado.check_time) }} - {{ formatHora(horarioSeleccionado.departure_date) }}</p>
						
						<div v-if="horarioSeleccionado.isBlocked" class="alert alert-secondary py-1 px-2 mb-3" style="font-size: 0.8rem;">
							<i class="fas fa-lock"></i> Bloqueado: {{ horarioSeleccionado.block_reason || 'Bloqueo manual' }}
						</div>

						<div class="d-grid gap-2">
							<button class="btn btn-dark" v-if="!horarioSeleccionado.isBlocked" @click="bloquearHorario(horarioSeleccionado, horarioSeleccionadoContextoFecha)">
								<i class="fas fa-ban"></i> Bloquear en esta fecha
							</button>
							<button class="btn btn-outline-dark" v-if="horarioSeleccionado.isBlocked" @click="desbloquearHorario(horarioSeleccionado)">
								<i class="fas fa-unlock"></i> Desbloquear Horario
							</button>

							<hr class="my-2">
							<small class="text-muted d-block mb-1">Opciones Generales de este Horario:</small>

							<button class="btn btn-sm" :class="horarioSeleccionado.active ? 'btn-warning' : 'btn-success'" @click="toggleActive(horarioSeleccionado.id)">
								<i :class="horarioSeleccionado.active ? 'fas fa-pause' : 'fas fa-play'"></i> 
								{{ horarioSeleccionado.active ? 'Desactivar Recurrencia' : 'Activar Recurrencia' }}
							</button>
							<button class="btn btn-sm btn-outline-danger" @click="eliminarHorario(horarioSeleccionado.id)">
								<i class="fas fa-trash"></i> Eliminar Horario Base
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import moment from 'moment'

export default {
	name: 'GestionHorariosGlobal',
	data() {
		return {
			profesionales: [],
			profesionalElegido: '',
			horarios: [],
			bloqueos: [],
			mesSeleccionado: moment().format('YYYY-MM'),
			diasSemana: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
			
			// Grid settings
			horasGrid: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
			horaInicioGrid: 7,
			pixelsPorMinuto: 1.5,
			
			tipoHorario: 'recurrente',
			nuevoHorario: {
				check_time: '',
				departure_date: '',
				daysSelected: [],
				date: ''
			},
			guardando: false,
			horarioSeleccionado: null,
			horarioSeleccionadoContextoFecha: null
		}
	},
	computed: {
		diasDelMes() {
			if (!this.mesSeleccionado) return [];
			let dateObj = moment(this.mesSeleccionado, 'YYYY-MM');
			let daysInMonth = dateObj.daysInMonth();
			let dias = [];
			const nombresDias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
			for (let i = 1; i <= daysInMonth; i++) {
				let currentDate = dateObj.clone().date(i);
				dias.push({
					fechaCompleta: currentDate.format('YYYY-MM-DD'),
					numeroDia: i,
					nombreDia: nombresDias[currentDate.day()]
				});
			}
			return dias;
		}
	},
	methods: {
		async obtenerProfesionales() {
			try {
				const res = await this.axios.get('/api/profesional');
				this.profesionales = res.data;
			} catch (err) {
				console.error("Error cargando profesionales", err);
			}
		},
		cambioProfesional() {
			this.obtenerHorarios();
		},
		cambioMes() {
			this.obtenerHorarios();
		},
		async obtenerHorarios() {
			if (!this.profesionalElegido || !this.mesSeleccionado) return;
			try {
				const [resHorarios, resBloqueos] = await Promise.all([
					this.axios.get(`/api/professional/${this.profesionalElegido}/schedules/all`),
					this.axios.get(`/api/reporte-horas-trabajadas`, {
						params: {
							professional_id: this.profesionalElegido,
							month: this.mesSeleccionado
						}
					})
				]);
				this.horarios = resHorarios.data;
				this.bloqueos = resBloqueos.data.bloqueos || [];
			} catch (err) {
				console.error("Error cargando horarios o bloqueos", err);
			}
		},
		getHorariosDia(diaObj) {
			let fechaCompleta = diaObj.fechaCompleta;
			let nombreDia = diaObj.nombreDia;

			let recurrentes = this.horarios.filter(h => (h.date === null || h.date === '') && h.day && h.day.toLowerCase() === nombreDia.toLowerCase());
			let especificos = this.horarios.filter(h => h.date === fechaCompleta);
			let bloqueosHoy = this.bloqueos.filter(b => b.date === fechaCompleta);

			let result = [];

			recurrentes.forEach(h => {
				let blocked = bloqueosHoy.find(b => b.schedule_id == h.id);
				if (blocked) {
					result.push({ ...h, isBlocked: true, appointment_id: blocked.id, block_reason: blocked.recomendation });
				} else {
					result.push({ ...h, isBlocked: false });
				}
			});

			especificos.forEach(h => {
				let blocked = bloqueosHoy.find(b => b.schedule_id == h.id);
				if (blocked) {
					result.push({ ...h, isBlocked: true, appointment_id: blocked.id, block_reason: blocked.recomendation });
				} else {
					result.push({ ...h, isBlocked: false });
				}
			});

			return result;
		},
		slotStyle(check_time, departure_date) {
			if(!check_time || !departure_date) return {};
			let [h1, m1] = check_time.split(':').map(Number);
			let [h2, m2] = departure_date.split(':').map(Number);

			let iniMinutos = (h1 * 60 + m1) - (this.horaInicioGrid * 60);
			let finMinutos = (h2 * 60 + m2) - (this.horaInicioGrid * 60);
			
			let topPx = iniMinutos * this.pixelsPorMinuto;
			let heightPx = (finMinutos - iniMinutos) * this.pixelsPorMinuto;
			
			return {
				top: topPx + 'px',
				height: Math.max(heightPx, 20) + 'px'
			};
		},
		formatHora(h) {
			if(!h) return '';
			return moment(h, 'HH:mm:ss').format('HH:mm');
		},
		fechaLatam(f) {
			if(!f) return '';
			return moment(f, 'YYYY-MM-DD').format('DD/MM/YYYY');
		},
		syncScrollX(e) {
			if(this.$refs.headerScroll) {
				this.$refs.headerScroll.scrollLeft = e.target.scrollLeft;
			}
		},
		async guardarHorario() {
			this.guardando = true;
			
			let peticiones = [];
			
			if (this.tipoHorario === 'especifico' && this.nuevoHorario.date) {
				let fechaSeleccionada = moment(this.nuevoHorario.date, 'YYYY-MM-DD');
				let mes = fechaSeleccionada.month();
				let diaSemanaTarget = fechaSeleccionada.day();
				
				let iterador = fechaSeleccionada.clone().startOf('month');
				while (iterador.day() !== diaSemanaTarget) {
					iterador.add(1, 'day');
				}
				
				let fechasDelMes = [];
				while (iterador.month() === mes) {
					fechasDelMes.push(iterador.format('YYYY-MM-DD'));
					iterador.add(7, 'days');
				}
				
				fechasDelMes.forEach(fecha => {
					let payload = {
						professional_id: this.profesionalElegido,
						check_time: this.nuevoHorario.check_time,
						departure_date: this.nuevoHorario.departure_date,
						date: fecha,
						daysSelected: []
					};
					peticiones.push(this.axios.post('/api/schedule', payload));
				});
				
			} else {
				if (this.nuevoHorario.daysSelected.length === 0) {
					this.$swal({icon: 'warning', title: 'Debe seleccionar al menos un día'});
					this.guardando = false;
					return;
				}
				let payload = {
					professional_id: this.profesionalElegido,
					check_time: this.nuevoHorario.check_time,
					departure_date: this.nuevoHorario.departure_date,
					daysSelected: this.nuevoHorario.daysSelected,
					date: ''
				};
				peticiones.push(this.axios.post('/api/schedule', payload));
			}

			try {
				let resultados = await Promise.all(peticiones);
				let exito = resultados.some(r => r.data.mensaje === 'Exito');
				
				if (exito) {
					this.$swal({icon: 'success', title: 'Horarios guardados'});
					this.obtenerHorarios();
					this.$refs.closeModalBtn.click();
					
					this.nuevoHorario.check_time = '';
					this.nuevoHorario.departure_date = '';
					this.nuevoHorario.daysSelected = [];
					this.nuevoHorario.date = '';
				} else {
					this.$swal({icon: 'error', title: 'Hubo cruce con otros horarios'});
				}
			} catch (err) {
				console.error(err);
				this.$swal({icon: 'error', title: 'Error al guardar horario'});
			} finally {
				this.guardando = false;
			}
		},
		abrirDetallesHorario(horario, fechaContexto) {
			this.horarioSeleccionado = horario;
			this.horarioSeleccionadoContextoFecha = fechaContexto;
			let modalElement = document.getElementById('modalDetallesHorario');
			if(modalElement && window.bootstrap) {
				let modal = window.bootstrap.Modal.getOrCreateInstance(modalElement);
				modal.show();
			}
		},
		cerrarDetallesHorario() {
			let modalElement = document.getElementById('modalDetallesHorario');
			if(modalElement && window.bootstrap) {
				let modal = window.bootstrap.Modal.getInstance(modalElement);
				if(modal) modal.hide();
			}
		},
		async bloquearHorario(horario, fecha) {
			this.cerrarDetallesHorario();
			
			setTimeout(() => {
				this.$swal({
					title: 'Bloquear Horario',
					text: 'Indique el motivo del bloqueo:',
					input: 'text',
					showCancelButton: true,
					confirmButtonText: 'Bloquear',
					cancelButtonText: 'Cancelar',
				}).then(async (result) => {
					if (result.isConfirmed) {
						try {
							await this.axios.post('/api/bloquear-horarios', {
								professional_id: this.profesionalElegido,
								date: fecha,
								schedule_id: horario.id,
								motivo: result.value || 'Bloqueo'
							});
							this.$swal('Horario bloqueado con éxito');
							this.obtenerHorarios();
						} catch(err) {
							console.error(err);
							this.$swal('Error al bloquear horario');
						}
					}
				});
			}, 300);
		},
		async desbloquearHorario(horario) {
			this.$swal({
				title: '¿Desbloquear este horario?',
				showCancelButton: true,
				confirmButtonText: 'Sí, desbloquear',
				cancelButtonText: 'Cancelar',
			}).then(async (result) => {
				if (result.isConfirmed) {
					try {
						await this.axios.delete('/api/desbloquear-horario/' + horario.appointment_id);
						this.$swal('Horario desbloqueado con éxito');
						this.obtenerHorarios();
						this.cerrarDetallesHorario();
					} catch(err) {
						console.error(err);
						this.$swal('Error al desbloquear');
					}
				}
			});
		},
		async toggleActive(id) {
			try {
				const res = await this.axios.put(`/api/schedule/${id}/toggle`);
				if (res.data.mensaje === 'success') {
					this.obtenerHorarios();
					this.cerrarDetallesHorario();
				}
			} catch(err) {
				console.error(err);
			}
		},
		eliminarHorario(id) {
			this.$swal({
				title: '¿Quieres eliminar este horario?',
				showDenyButton: true,
				confirmButtonText: 'Sí',
				denyButtonText: 'No',
			}).then(async (result) => {
				if (result.isConfirmed) {
					try {
						await this.axios.delete('/api/schedule/' + id);
						this.$swal('Horario eliminado con éxito');
						this.obtenerHorarios();
						this.cerrarDetallesHorario();
					} catch(err) {
						console.error(err);
					}
				}
			});
		}
	},
	mounted() {
		this.obtenerProfesionales();
	}
}
</script>

<style scoped>
	.calendar-wrapper { 
		display: flex; 
		flex-direction: column; 
		border-radius: 8px; 
		position: relative; 
		background: white;
		width: 100%;
	}
	.calendar-header {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 100;
		background-color: #f8f9fc !important;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		box-shadow: 0 2px 4px rgba(0,0,0,0.05);
		width: 100%;
	}
	.doctor-header,
	.doctor-column {
		min-width: 150px;
		flex: 0 0 150px;
		background-color: rgba(0,0,0,0.01);
	}
	.time-slot-label { height: 90px; } /* 60 mins * 1.5px/min */
	.grid-line { height: 90px; box-sizing: border-box; }
	
	.booked-slot { position: absolute; width: calc(100% - 10px); left: 5px; cursor: pointer; transition: transform 0.1s; border-radius: 6px; overflow: hidden; background-color: rgba(248, 249, 252, 0.9);}
	.booked-slot:hover { transform: scale(1.02); z-index: 10!important; }
	.booked-content { padding: 4px; border-radius: 4px; }
	.doctors-header-container::-webkit-scrollbar { display: none; }
</style>
