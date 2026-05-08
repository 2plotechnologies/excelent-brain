<template>
<div>
<div class="modal fade " id="modalNuevaCita" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-xl">
		<div class="modal-content">
			<div class="modal-header border-0 pb-0">
			<h5 class="modal-title" id="addCitaModalLabel">Registrar Nueva Cita</h5>

			<button type="button" id="closeModalNuevaCita" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close"><i class="fas fa-times"></i></button>
			</div>
			<div class="modal-body">
				<form class="user" @submit="insertar" @keydown="prevenirEvent">
					<!-- Stepper Header -->
					<div class="wizard-stepper d-flex justify-content-between mb-4 border-bottom pb-3 overflow-auto">
						<div v-for="step in pasos" :key="step.id" class="step-item d-flex align-items-center" :class="{ 'active': pasoActual === step.id, 'completed': pasoActual > step.id }">
							<div class="step-icon d-flex align-items-center justify-content-center rounded-pill">
								<i class="fas" :class="step.icon"></i>
							</div>
							<span class="step-label ms-2 d-none d-md-inline">{{ step.label }}</span>
							<div v-if="step.id < 8" class="step-connector mx-3 d-none d-lg-block"></div>
						</div>
					</div>

					<!-- Step 1: Paciente -->
					<div v-show="pasoActual === 1">
						<div class="row justify-content-center">
							<div class="col-md-10">
								<p class="mb-3 lead text-center font-weight-bold">Seleccionar Paciente</p>
								<div class="card border-0 shadow-sm rounded-4 mb-4">
									<div class="card-body p-4">
										<div class="input-group mb-4 bg-light rounded-pill p-1">
											<span class="input-group-text border-0 bg-transparent ps-3"><i class="fas fa-search text-muted"></i></span>
											<input type="text" class="form-control border-0 bg-transparent" placeholder="Buscar por nombre, DNI o celular..." v-model="busquedaTexto" @keyup="buscarPacientes">
										</div>
										<div class="list-group list-group-flush" style="max-height: 400px; overflow-y: auto;">
											<button type="button" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 rounded-4 mb-2 p-3 transition-all" v-for="paciente in listaPacientes" :key="paciente.id" @click="seleccionarPaciente(paciente)" :class="{ 'bg-primary-light': cita.dni === paciente.dni }">
												<div class="d-flex align-items-center">
													<div class="avatar-circle me-3 bg-soft-primary d-flex align-items-center justify-content-center">
														<i class="fas fa-user text-primary"></i>
													</div>
													<div>
														<h6 class="mb-0 font-weight-bold">{{ paciente.name }} {{ paciente.nombres }}</h6>
														<small class="text-muted">DNI: {{ paciente.dni }} · {{ paciente.phone }}</small>
													</div>
												</div>
												<i class="fas fa-chevron-right text-muted"></i>
											</button>
											<div v-if="listaPacientes.length === 0" class="text-center text-muted py-5">
												<i class="fas fa-user-slash fa-3x mb-3 text-light"></i>
												<p>No se encontraron pacientes.</p>
											</div>
										</div>
										<div class="mt-4 text-center">
											<button type="button" class="btn btn-outline-primary border-dashed w-100 py-3 rounded-4" data-bs-toggle="modal" data-bs-target="#modalNuevoPaciente">
												<i class="fas fa-plus-circle me-2"></i> Crear paciente nuevo
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Step 2: Especialidad -->
					<div v-show="pasoActual === 2">
						<div class="row justify-content-center">
							<div class="col-md-10">
								<p class="mb-3 lead text-center font-weight-bold">Tipo de Consulta (Especialidad)</p>
								
								<div class="row mb-4">
									<div v-for="cat in categorias" :key="cat.id" class="col-md-6 mb-3">
										<div class="card h-100 border-0 shadow-sm rounded-4 selectable-card transition-all" :class="{ 'active': cita.clasification == cat.id }" @click="seleccionarCategoria(cat.id)">
											<div class="card-body d-flex align-items-center p-3">
												<div class="category-icon me-3 d-flex align-items-center justify-content-center rounded-3" :class="'bg-cat-' + cat.id">
													<i class="fas" :class="cat.icon"></i>
												</div>
												<div class="flex-grow-1">
													<h6 class="mb-1 font-weight-bold text-dark">{{ cat.label }}</h6>
													<small class="text-muted small">{{ cat.desc }}</small>
												</div>
												<div class="ms-2">
													<i class="fas fa-check-circle text-primary" v-if="cita.clasification == cat.id"></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Step 3: Servicio -->
					<div v-show="pasoActual === 3">
						<div class="row justify-content-center">
							<div class="col-md-10">
								<p class="mb-3 lead text-center font-weight-bold">Seleccionar Servicio Específico</p>
								<div class="card border-0 shadow-sm rounded-4 mb-4" v-if="cita.clasification">
									<div class="card-body p-4">
										<div class="list-group list-group-flush rounded-4 overflow-hidden border">
											<button type="button" v-for="precio in precios" :key="precio.id" v-if="precio.idClasificacion==cita.clasification && precio.servicio=='1' && precio.id!=48 && precio.id!=49 && precio.activo=='1'" class="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center p-3" @click="seleccionarServicio(precio.id)" :class="{ 'bg-light': cita.type == precio.id }">
												<span>{{ precio.descripcion }}</span>
												<span class="badge bg-soft-primary text-primary rounded-pill">S/ {{ parseFloat(precio.nuevos).toFixed(2) }}</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Step 4: Profesional -->
					<div v-show="pasoActual === 4">
						<div class="row justify-content-center">
							<div class="col-md-10">
								<p class="mb-4 lead text-center font-weight-bold">Seleccionar Profesional</p>
								
								<div class="row">
									<div v-for="prof in doctoresFiltradosPorCat" :key="prof.id" class="col-md-4 mb-3">
										<div class="card h-100 border-0 shadow-sm rounded-4 selectable-card transition-all" :class="{ 'active': cita.professional_id == prof.id }" @click="seleccionarDoctor(prof)">
											<div class="card-body text-center p-4">
												<div class="avatar-circle mx-auto mb-3 bg-soft-primary d-flex align-items-center justify-content-center">
													<i class="fas fa-user-md text-primary"></i>
												</div>
												<h6 class="mb-1 font-weight-bold text-dark">{{ prof.name }}</h6>
												<small class="text-muted">{{ prof.profession }}</small>
											</div>
										</div>
									</div>
									<div v-if="doctoresFiltradosPorCat.length === 0" class="col-12 text-center text-muted py-4">
										<i class="fas fa-user-md fa-3x mb-3 text-light"></i>
										<p>No hay profesionales disponibles para esta especialidad.</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Step 5: Fecha/Hora -->
					<div v-show="pasoActual === 5">
						<div class="row justify-content-center">
							<div class="col-md-8">
								<p class="mb-4 lead text-center font-weight-bold">Fecha y Hora de la Cita</p>
								<div class="card border-0 shadow-sm rounded-4 bg-light p-4 mb-4">
									<div class="row">
										<div class="col-md-6 mb-3 mb-md-0">
											<label class="form-label font-weight-bold text-muted small">Fecha de la Cita</label>
											<input type="date" class="form-control form-control-lg rounded-pill px-4 border-0 shadow-sm" v-model="fechaManual" @change="buscarHorariosManual()">
										</div>
										<div class="col-md-6">
											<label class="form-label font-weight-bold text-muted small">Horario Disponible</label>
											<select class="form-select form-select-lg rounded-pill px-4 border-0 shadow-sm" v-model="horaManualId" @change="seleccionarHoraManual()">
												<option value="">Seleccione un horario...</option>
												<option v-for="hora in horariosDisponibles" :key="hora.id" :value="hora.id">{{ horaLatam1(hora.check_time) }} - {{ horaLatam1(hora.departure_date) }}</option>
											</select>
											<div v-if="cargandoHorarios" class="text-primary small mt-2"><i class="fas fa-spinner fa-spin"></i> Buscando horarios...</div>
											<div v-else-if="horariosDisponibles.length === 0 && fechaManual" class="text-danger small mt-2"><i class="fas fa-exclamation-circle"></i> No hay horarios disponibles este día.</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Step 6: Modalidad -->
					<div v-show="pasoActual === 6">
						<div class="row justify-content-center">
							<div class="col-md-10">
								<p class="mb-4 lead text-center font-weight-bold">Modalidad de Atención</p>
								
								<div class="row justify-content-center">
									<div class="col-md-4 mb-4">
										<div class="card h-100 border-0 shadow-sm rounded-4 selectable-card transition-all p-4 text-center" :class="{ 'active': cita.mode == 1 }" @click="seleccionarModalidad(1)">
											<div class="modalidad-icon mx-auto mb-3 text-primary d-flex align-items-center justify-content-center rounded-circle bg-soft-primary">
												<i class="fas fa-building fa-2x"></i>
											</div>
											<h5 class="font-weight-bold">Presencial</h5>
											<p class="small text-muted mb-0">Atención en consultorio físico.</p>
										</div>
									</div>
									<div class="col-md-4 mb-4">
										<div class="card h-100 border-0 shadow-sm rounded-4 selectable-card transition-all p-4 text-center" :class="{ 'active': cita.mode == 2 }" @click="seleccionarModalidad(2)">
											<div class="modalidad-icon mx-auto mb-3 text-info d-flex align-items-center justify-content-center rounded-circle bg-soft-info">
												<i class="fas fa-laptop-house fa-2x"></i>
											</div>
											<h5 class="font-weight-bold">Virtual</h5>
											<p class="small text-muted mb-0">Videollamada por plataforma online.</p>
										</div>
									</div>
									<div class="col-md-4 mb-4">
										<div class="card h-100 border-0 shadow-sm rounded-4 selectable-card transition-all p-4 text-center" :class="{ 'active': cita.mode == 3 }" @click="seleccionarModalidad(3)">
											<div class="modalidad-icon mx-auto mb-3 text-warning d-flex align-items-center justify-content-center rounded-circle bg-soft-warning">
												<i class="fas fa-car-side fa-2x"></i>
											</div>
											<h5 class="font-weight-bold">Domicilio</h5>
											<p class="small text-muted mb-0">Visita al domicilio del paciente.</p>
										</div>
									</div>
								</div>

								<div class="card border-0 shadow-sm rounded-4 bg-light mt-3" v-if="cita.mode == 2">
									<div class="card-body">
										<div class="form-group mb-0">
											<label class="small font-weight-bold text-muted"><i class="fas fa-link me-2"></i>Link de la reunión</label>
											<input type="text" class="form-control rounded-pill border-0 shadow-none px-4" placeholder="Ingrese el link de la reunión virtual" v-model="cita.link">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Step 7: Pago -->
					<div v-show="pasoActual === 7">
						<div class="row justify-content-center">
							<div class="col-md-10">
								<p class="mb-4 lead text-center font-weight-bold">Información de Pago y Notas</p>
								
								<div class="row">
									<div class="col-md-6 mb-4">
										<div class="card border-0 shadow-sm rounded-4 bg-white p-4 h-100">
											<h6 class="font-weight-bold mb-4 d-flex align-items-center">
												<i class="fas fa-wallet text-primary me-2"></i>Configuración de Pago
											</h6>
											
											<!-- Adelanto -->
											<div class="form-check form-switch mb-3 custom-switch">
												<input class="form-check-input" type="checkbox" id="checkAdelanto" v-model="tieneAdelanto" @change="precioDinamico()">
												<label class="form-check-label ms-2" for="checkAdelanto">¿Registrar adelanto?</label>
											</div>

											<div v-if="tieneAdelanto" class="transition-all slide-down mb-3 bg-light rounded p-3">
												<div class="form-group mb-3">
													<label class="small text-muted font-weight-bold">Monto del adelanto (S/)</label>
													<div class="input-group">
														<span class="input-group-text bg-white border-0">S/</span>
														<input type="number" class="form-control border-0 bg-white" v-model="descuentoAdelanto" @keyup="precioDinamico()">
													</div>
												</div>
												<div class="form-group mb-3">
													<label class="small text-muted font-weight-bold">Método de pago del adelanto</label>
													<select class="form-select border-0 bg-white" v-model="monedaAdelanto">
														<option v-for="moneda in monedas" :key="moneda.id" :value="moneda.id">{{ moneda.tipo }}</option>
													</select>
												</div>
												<div class="form-group">
													<label class="small text-muted font-weight-bold">Referencia del adelanto</label>
													<input type="text" class="form-control border-0 bg-white" placeholder="Ej: Pago por Yape, Fecha..." v-model="razonAdelanto">
												</div>
											</div>

											<!-- Descuento (%) -->
											<div class="form-check form-switch mb-3 custom-switch">
												<input class="form-check-input" type="checkbox" id="checkDescuento" v-model="tieneDescuento" @change="precioDinamico()">
												<label class="form-check-label ms-2" for="checkDescuento">¿Aplicar descuento (%)?</label>
											</div>

											<div v-if="tieneDescuento" class="transition-all slide-down mb-3 bg-light rounded p-3">
												<div class="form-group mb-3">
													<label class="small text-muted font-weight-bold">Descuento (%)</label>
													<div class="input-group">
														<input type="number" class="form-control border-0 bg-white" v-model="descuentoPorcentaje" @keyup="precioDinamico()">
														<span class="input-group-text bg-white border-0">%</span>
													</div>
												</div>
												<div class="form-group">
													<label class="small text-muted font-weight-bold">Motivo del descuento</label>
													<input type="text" class="form-control border-0 bg-white" placeholder="Motivo..." v-model="razonPorcentaje">
												</div>
											</div>

											<!-- Rebaja (S/) -->
											<div class="form-check form-switch mb-4 custom-switch">
												<input class="form-check-input" type="checkbox" id="checkRebaja" v-model="tieneRebaja" @change="precioDinamico()">
												<label class="form-check-label ms-2" for="checkRebaja">¿Aplicar rebaja (S/)?</label>
											</div>

											<div v-if="tieneRebaja" class="transition-all slide-down mb-4 bg-light rounded p-3">
												<div class="form-group mb-3">
													<label class="small text-muted font-weight-bold">Monto a rebajar (S/)</label>
													<div class="input-group">
														<span class="input-group-text bg-white border-0">S/</span>
														<input type="number" class="form-control border-0 bg-white" v-model="descuentoRebaja" @keyup="precioDinamico()">
													</div>
												</div>
												<div class="form-group">
													<label class="small text-muted font-weight-bold">Motivo de la rebaja</label>
													<input type="text" class="form-control border-0 bg-white" placeholder="Motivo..." v-model="razonRebaja">
												</div>
											</div>

											<hr class="my-4 op-1">

											<div class="form-group mb-0">
												<label class="small text-muted font-weight-bold d-block mb-2">Referencia de llegada</label>
												<select class="form-select border-0 bg-light rounded-3" v-model="cita.recomendation" >
													<option value="" selected>Ninguno / Desconocido</option>
													<option v-for="reco in recomendaciones" :key="reco" :value="reco">{{ reco }}</option>
												</select>
											</div>
										</div>
									</div>

									<div class="col-md-6 mb-4">
										<div class="card border-0 shadow-sm rounded-4 bg-white p-4 h-100">
											<h6 class="font-weight-bold mb-4 d-flex align-items-center">
												<i class="fas fa-sticky-note text-warning me-2"></i>Notas Adicionales
											</h6>
											<div class="form-group h-100 d-flex flex-column">
												<textarea class="form-control border-0 bg-light rounded-4 flex-grow-1 p-3" rows="8" placeholder="Observaciones extras sobre la cita o el paciente..." v-model="cita.recomendacion_comentario"></textarea>
											</div>
										</div>
									</div>
								</div>

								<div class="row align-items-center mt-3">
									<div class="col-sm-6 text-sm-start text-center mb-3 mb-sm-0">
										<div class="form-check form-switch custom-switch d-inline-block">
											<input class="form-check-input" type="checkbox" id="checkNuevo" v-model="precioNuevo" @change="precioDinamico()">
											<label class="form-check-label ms-2" for="checkNuevo">{{ precioNuevo ? 'Paciente Nuevo' : 'Paciente Continuante' }}</label>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="card bg-primary text-white border-0 rounded-4 shadow-sm">
											<div class="card-body p-3 d-flex justify-content-between align-items-center">
												<span class="small font-weight-bold">Total a cobrar:</span>
												<h4 class="mb-0 font-weight-bold">S/ {{ parseFloat(cita.price).toFixed(2) }}</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Step 8: Confirmar -->
					<div v-show="pasoActual === 8">
						<div class="row justify-content-center">
							<div class="col-md-10">
								<p class="mb-4 lead text-center font-weight-bold">Resumen de la Cita</p>
								
								<div class="ticket-container bg-white shadow-lg rounded-5 overflow-hidden border">
									<div class="ticket-header bg-soft-primary p-4 border-bottom d-flex align-items-center">
										<div class="badge bg-primary p-3 rounded-circle me-3">
											<i class="fas fa-file-invoice fa-2x text-white"></i>
										</div>
										<div>
											<h5 class="mb-0 font-weight-bold text-dark">Confirmación de Reserva</h5>
											<p class="text-muted small mb-0">Por favor, revise los datos antes de registrar.</p>
										</div>
									</div>
									
									<div class="ticket-body p-4 p-md-5">
										<div class="row mb-5">
											<div class="col-md-6 mb-4">
												<label class="xs-label text-muted font-weight-bold text-uppercase ls-1 d-block mb-1">Paciente</label>
												<h5 class="font-weight-bold text-dark mb-0"><i class="fas fa-user-circle me-2 text-primary"></i>{{ cita.name }} {{ cita.nombres }}</h5>
												<p class="text-muted small ms-4">DNI: {{ cita.dni }}</p>
											</div>
											<div class="col-md-6 mb-4 text-md-end">
												<label class="xs-label text-muted font-weight-bold text-uppercase ls-1 d-block mb-1">Tipo de Atención</label>
												<h5 class="font-weight-bold text-dark mb-0">{{ getLabelCategoria(cita.clasification) }}</h5>
												<p class="text-primary small mb-0">{{ getLabelServicio(cita.type) }}</p>
											</div>
										</div>

										<div class="row mb-5 bg-light rounded-4 p-4 mx-0">
											<div class="col-md-6 mb-3 mb-md-0 d-flex align-items-center">
												<div class="me-3 text-info">
													<i class="far fa-calendar-check fa-2x"></i>
												</div>
												<div>
													<h6 class="mb-0 font-weight-bold">{{ fechaManual }}</h6>
													<small class="text-muted">Fecha asignada</small>
												</div>
											</div>
											<div class="col-md-6 d-flex align-items-center justify-content-md-end">
												<div class="me-3 text-info">
													<i class="far fa-clock fa-2x"></i>
												</div>
												<div class="text-md-end">
													<h6 class="mb-0 font-weight-bold">{{ horaLatam1(horaSeleccionada.check_time) }} - {{ horaLatam1(horaSeleccionada.departure_date) }}</h6>
													<small class="text-muted">Horario reservado</small>
												</div>
											</div>
										</div>

										<div class="row Ticket-details">
											<div class="col-md-4 mb-4">
												<h6 class="font-weight-bold text-muted small text-uppercase mb-2">Profesional</h6>
												<p class="mb-0 font-weight-bold">{{ profesionalSeleccionado ? profesionalSeleccionado.name : '' }}</p>
											</div>
											<div class="col-md-4 mb-4">
												<h6 class="font-weight-bold text-muted small text-uppercase mb-2">Modalidad</h6>
												<p class="mb-0 font-weight-bold"><span class="badge rounded-pill bg-soft-info text-info px-3">{{ getLabelModalidad(cita.mode) }}</span></p>
											</div>
											<div class="col-md-4 mb-4 text-md-end">
												<h6 class="font-weight-bold text-muted small text-uppercase mb-2">Total a Pagar</h6>
												<h3 class="mb-0 font-weight-bold text-success">S/ {{ parseFloat(cita.price).toFixed(2) }}</h3>
											</div>
										</div>

										<div v-if="cita.recomendacion_comentario" class="notes-section mt-4 bg-soft-warning p-4 rounded-4 border-dashed border-warning">
											<h6 class="font-weight-bold text-warning-dark small text-uppercase mb-2"><i class="fas fa-sticky-note me-2"></i>Notas Adicionales</h6>
											<p class="mb-0 small text-dark fst-italic">{{ cita.recomendacion_comentario }}</p>
										</div>
									</div>
									
									<div class="ticket-footer bg-light p-4 text-center border-top">
										<p class="text-muted small mb-0"><i class="fas fa-shield-alt me-2"></i>Sistema de Gestión de Citas Excelentemente - Recepción</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Navigation Buttons -->
					<div class="modal-footer border-0 justify-content-between px-4 pb-4">
						<div>
							<button type="button" v-if="pasoActual > 1" class="btn btn-outline-secondary btn-lg rounded-pill px-4" @click="prevStep">
								<i class="fas fa-arrow-left me-2"></i> Anterior
							</button>
						</div>
						<div class="d-flex">
							<button type="button" class="btn btn-light-danger btn-lg rounded-pill px-4 me-2" data-bs-dismiss="modal" v-if="pasoActual === 1">
								Cancelar
							</button>
							<button type="button" key="btn-siguiente" v-if="pasoActual < 8" class="btn btn-primary btn-lg rounded-pill px-5 shadow-sm" @click="nextStep">
								Siguiente <i class="fas fa-arrow-right ms-2"></i>
							</button>
							<button type="submit" key="btn-registrar" v-if="pasoActual === 8 && cita.vivo == 1" class="btn btn-success btn-lg rounded-pill px-5 shadow-sm">
								<i class="fas fa-save me-2"></i> Registrar Cita
							</button>
							<div v-if="pasoActual === 8 && cita.vivo != 1" class="alert alert-danger mb-0 rounded-pill">
								<i class="fas fa-cross me-2"></i> El paciente figura como fallecido.
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<!-- Modal Nuevo Paciente -->
<div class="modal fade" id="modalNuevoPaciente" tabindex="-1" aria-labelledby="modalNuevoPacienteLabel" aria-hidden="true" style="z-index: 1060;">
	<div class="modal-dialog modal-dialog-scrollable modal-xl">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="modalNuevoPacienteLabel">Nuevo Paciente</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<p class="mb-2 lead text-success"><strong><i class="far fa-address-card"></i> Datos Personales</strong></p>
				<div class="card mb-3">
					<div class="card-body">
						<div class="form-group row">
							<div class="col">
								<label for="name">Tipo de documento <span class="text-danger">*</span></label>
								<select class="form-select" id="type_dni" v-model="cita.type_dni">
									<option value="1">D.N.I.</option>
									<option value="2">Carnet de extranjería</option>
									<option value="3">Pasaporte</option>
								</select>
							</div>
							<div class="col">
								<label for="name">Celular personal <span class="text-danger">*</span></label>
								<input type="text" class="form-control" id="phone" v-model="cita.phone" placeholder="" @keypress="limitarCel($event)" autocomplete="off">
							</div>
						</div>
	
						<div class="form-group row">
							<div class="col-4">
								<label v-if="cita.type_dni==1" for="name">D.N.I. <span class="text-danger">*</span></label>
								<label v-else for="name">Doc. Extranjero <span class="text-danger">*</span></label>
								<div class="form-inline">
									<input v-if="cita.type_dni==1" type="text" class="form-control w-75 mr-1" name="dni" id="dni" v-model="cita.dni" placeholder="DNI del paciente" autocomplete="off">
									<input v-else type="text" class="form-control w-75 mr-1" name="dni" id="dni" v-model="cita.dni" placeholder="Código de extranjería" autocomplete="off">
									<a @click="reniec" class="btnReniec btn btn-outline-primary"><i class="fas fa-search"></i></a>
								</div>
							</div>
							<div class="col-4">
								<label for="name">Apellidos <span class="text-danger">*</span></label>
								<input  type="text" class="form-control text-uppercase" id="name" v-model="cita.name" placeholder="" autocomplete="off">
							</div>
							<div class="col-4">
								<label for="name">Nombres <span class="text-danger">*</span></label>
								<input  type="text" class="form-control text-uppercase" id="name" v-model="cita.nombres" placeholder="" autocomplete="off">
							</div>
						</div>
	
						<div class="form-group row">
							<div class="col-sm-4">
									<label for="name">Fecha de nacimiento <span class="text-danger">*</span></label>
									<input type="date" class="form-control" name="birth_date" id="birth_date" v-model="cita.birth_date">
							</div>
							<div class="col-sm-4">
									<label for="marital_status">Estado Civil <span class="text-danger">*</span></label>
									<select class="form-select" name="marital_status" id="marital_status" v-model="cita.marital_status">
										<option value="2">Casado</option>
										<option value="5">Conviviente</option>
										<option value="4">Divorciado</option>
										<option value="1">Soltero</option>
										<option value="3">Viudo</option>
									</select>
							</div>
	
						</div>
	
	
						<div class="form-group row" >
							<div class="col-sm-4">
									<label for="">Grado de instrucción <span class="text-danger">*</span></label>
									<select class="form-select" name="instruction_degree" id="instruction_degree" v-model="cita.instruction_degree">
										<option value="1">Inicial</option>
										<option value="2">Primaria</option>
										<option value="3">Secundaria</option>
										<option value="4">Superior</option>
										<option value="5">Técnico</option>
										<option value="6">Sin instrucción</option>
									</select>
							</div>
							<div class="col">
								<label for="name">Dirección de vivienda <span class="text-danger">*</span></label>
								<input type="text" class="form-control" name="address" id="address" v-model="cita.address" placeholder="" autocomplete="off">
							</div>
						</div>
	
	
						<div class="form-group row">
							<div class="col-sm-4">
									<label for="name">Departamento <span class="text-danger">*</span></label>
									<select v-model="cita.department" class="form-select" id="department" @change="moverProvincias(true)">
										<option v-for="departamento in ubigeo.departamentos" :value="departamento.idDepa">{{ departamento.departamento }}</option>
									</select>
							</div>
							<div class="col-sm-4">
									<label for="name">Provincia <span class="text-danger">*</span></label>
									<select v-model="cita.province" class="form-select" id="provincia" @change="moverDistritos()">
										<option v-for="provincia in provincias" :value="provincia.idProv">{{ provincia.provincia }}</option>
									</select>
							</div>
							<div class="col-sm-4">
									<label for="name">Distrito <span class="text-danger">*</span></label>
									<select v-model="cita.district" class="form-select" id="distrito">
										<option v-for="distrito in distritos" :value="distrito.idDist">{{ distrito.distrito }}</option>
									</select>
							</div>
						</div>
	
						<div class="form-group row">
							<div class="col-sm-4">
									<label for="name">Ocupación <span class="text-danger">*</span></label>
									<input type="text" class="form-control" name="occupation" id="occupation" v-model="cita.occupation"  placeholder="Ocupación del paciente" autocomplete="off">
							</div>
	
							<div class="col-sm-4">
								<label for="name">Género <span class="text-danger">*</span></label>
								<select class="form-select" id="sexo" v-model="cita.gender">
									<option value="2">Sin definir</option>
									<option value="0">Femenino</option>
									<option value="1">Masculino</option>
									<option value="3">LGTB+</option>
								</select>
							</div>
							<div class="col-sm-4">
								<label for="name">Correo electrónico</label>
								<input type="text" class="form-control" name="address" id="address" v-model="cita.email" placeholder="Correo electrónico" autocomplete="off">
							</div>
						</div>
					</div>
				</div>
				
				<p class="my-2 lead text-success"><strong><i class="fas fa-people-arrows"></i> Datos de Contacto de Emergencia</strong></p>
				<div class="card">
					<div class="card-body">
						<div class="form-group row" >
							<div class="col-sm-4">
								<label for="name">Nombre del primer contacto <span class="text-danger">*</span></label>
								<input type="text" class="form-control" name="contacto" id="contacto" v-model="cita.contacto"  placeholder="Contacto principal" autocomplete="off">
							</div>
							<div class="col-sm-4">
								<label for="name">Celular emergencia <span class="text-danger">*</span></label>
								<input type="text" class="form-control" name="contacto_celular" id="contacto_celular" v-model="cita.contacto_celular"  placeholder="Celular" autocomplete="off">
							</div>
							<div class="col-sm-4">
								<label for="name">Parentesco <span class="text-danger">*</span></label>
								<input type="text" class="form-control" name="parentezco" id="parentezco" v-model="cita.parentezco"  placeholder="Parentesco" autocomplete="off">
							</div>
						</div>
						<hr>
						<div class="form-group row" >
							<div class="col-sm-4">
								<label for="name">Nombre del segundo contacto</label>
								<input type="text" class="form-control" name="contacto" id="contacto" v-model="cita.contacto2"  placeholder="Contacto secundario" autocomplete="off">
							</div>
							<div class="col-sm-4">
								<label for="name">Celular emergencia</label>
								<input type="text" class="form-control" name="contacto_celular" id="contacto_celular" v-model="cita.contacto_celular2"  placeholder="Celular" autocomplete="off">
							</div>
							<div class="col-sm-4">
								<label for="name">Parentesco</label>
								<input type="text" class="form-control" name="parentezco" id="parentezco" v-model="cita.parentezco2"  placeholder="Parentesco" autocomplete="off">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
				<button type="button" class="btn btn-primary" @click="guardarNuevoPaciente"><i class="fas fa-check"></i> Confirmar Datos</button>
			</div>
		</div>
</div>
</div>
</div>
</template>

<script>
import { dateNow } from '../../../../helpers/Time.js'
import alertify from 'alertifyjs'
import moment from 'moment'

export default {
	name: "ModalNuevaCita",
	props:{ doctores: Array, profesionalElegido: null, horaElegida: null , idUsuario:null, fechaElegida:null, idSede:null },
	data(){
		return{
			pasoActual: 1, listaPacientes: [], busquedaTexto: '', timerBusqueda: null,
			fechaManual: '', horaManualId: '', horariosDisponibles: [], cargandoHorarios: false,
			pasos: [
				{ id: 1, label: 'Paciente', icon: 'fa-user' },
				{ id: 2, label: 'Especialidad', icon: 'fa-stethoscope' },
				{ id: 3, label: 'Servicio', icon: 'fa-list-alt' },
				{ id: 4, label: 'Profesional', icon: 'fa-user-md' },
				{ id: 5, label: 'Fecha/Hora', icon: 'fa-calendar-alt' },
				{ id: 6, label: 'Modalidad', icon: 'fa-home' },
				{ id: 7, label: 'Pago', icon: 'fa-dollar-sign' },
				{ id: 8, label: 'Confirmar', icon: 'fa-check-circle' }
			],
			categorias: [
				{ id: 2, label: 'Psicológica', desc: 'Sesión de terapia psicológica', icon: 'fa-brain' },
				{ id: 1, label: 'Psiquiátrica', desc: 'Consulta psiquiátrica y medicación', icon: 'fa-pills' },
				{ id: 6, label: 'Nutricional', desc: 'Consulta nutricional', icon: 'fa-apple-alt' },
				{ id: 3, label: 'Certificado', desc: 'Certificado médico o psicológico', icon: 'fa-file-medical' },
				{ id: 7, label: 'Terapia', desc: 'Masajes y terapia corporal', icon: 'fa-hands-helping' },
				{ id: 8, label: 'Triaje', desc: 'Triaje por médico o psicólogo', icon: 'fa-stethoscope' },
				{ id: 4, label: 'Kurame', desc: 'Servicios de Kurame', icon: 'fa-star' }
			],
			precios: [], nosrecomienda:true, precioNuevo:true, esPresencial: true, masBasicos:true, masEmergencia:false, tieneDescuento:false, descuentoRebaja:0, tieneRebaja:false, razonPorcentaje:'', razonRebaja:'',
			switchReciec: 1, tieneAdelanto:false, descuentoAdelanto:0, razonAdelanto:'',
			status:[{id:4, stat: 'Ambulatorio'},{id:3, stat: 'Clínica de día'},{id:2, stat: 'Kurame'},{id:1, stat: 'Ninguno'},], //sacado de la DB:tbl status
			patientNew: false, alertaDeudas:false, mensajeDeudas:'', recomendaciones:['Facebook', 'Instagram', 'TikTok', 'Linkedin', 'Youtube', 'Spotify', 'TV', 'Amigos o familiares', 'Referencia profesional', 'Publicidad escrita', 'Campañas de salud', 'Convenio', 'Paciente Antiguo', 'Otros Centros de Salud', 'Google Maps / Business', 'Referencia del Establecimiento', 'Sucamec', 'Página Web'],
			cita:{
				phone:'',
				dni:'',
				name:'', nombres:'',
				email:'',
				address:'',
				department:12,
				province:103,
				district:1006,
				birth_date:'',
				occupation:'',
				marital_status:1,
				instruction_degree: 6,
				relative_name:'',
				relatine_phone:'',
				kinship:'',
				professional_id: '',
				schedule_id:'',
				date: dateNow(),
				clasification:'',
				gender:2,
				price:0,
				type:'', tipo:-1,
				patient_condition:'',
				recomendation:'', recomendacion_comentario:'',
				mode: '1',
				voucher:'',
				link:'',
				bank:'',
				pay_status:'1',
				status:'', new_status:1, prev_status:1,
				type_amount:1,
				type_dni:1,
				contacto: '', contacto_celular: '', parentezco:'', 
				contacto2: '', contacto_celular2: '', parentezco2:'', 
				adelanto:0, vivo:1
			},
			ubigeo: {departamentos:[], provincias:[], distritos:[]},
			provincias:[], distritos:[],
			token:'087d16c0688f5150268342d085a55d54b5064c7649596011f03b35b935899a50',
			horario:[], descuentoPorcentaje:0, monedas:[], monedaAdelanto:1
		}
	},
	mounted(){
		this.$parent.$on('limpiarDescuentos', () => this.limpiarInputs(false) );
		this.pedirMonedas();
		this.fetchPacientes();
		
		const modal = document.getElementById('modalNuevaCita')
		if (modal) {
			modal.addEventListener('hidden.bs.modal', () => {
				this.clearModal();
			})
		}
	},
	 
	methods: {
		fetchPacientes() {
			this.axios.get('/api/getLast10Patients')
				.then(res => this.listaPacientes = res.data)
				.catch(err => console.error(err));
		},
		buscarPacientes() {
			clearTimeout(this.timerBusqueda);
			this.timerBusqueda = setTimeout(() => {
				if (this.busquedaTexto.length >= 2) {
					this.axios.get('/api/searchPatientByNameDni/' + this.busquedaTexto)
						.then(res => this.listaPacientes = res.data)
						.catch(err => console.error(err));
				} else if (this.busquedaTexto.length === 0) {
					this.fetchPacientes();
				}
			}, 400);
		},
		seleccionarPaciente(paciente) {
			this.cita.dni = paciente.dni;
			this.reniec();
			this.pasoActual = 2;
		},
		guardarNuevoPaciente() {
			if( this.cita.type_dni==1 && (this.cita.dni =='' || this.cita.dni.length<8) ) {
				alertify.error('Todo paciente debe tener un DNI válido', 10);
				return;
			}
			if(this.cita.name == '' && this.cita.nombres =='') {
				alertify.error('Debe rellenar apellidos y nombres', 10);
				return;
			}
			if(this.cita.phone == '') {
				alertify.error('Debe rellenar un celular', 10);
				return;
			}
			if( this.cita.contacto == '' || this.cita.contacto_celular == '' || this.cita.parentezco=='') {
				alertify.error('Debe rellenar el contacto de emergencia', 10);
				return;
			}
			this.patientNew = true;
			this.pasoActual = 2;
			var myModalEl = document.getElementById('modalNuevoPaciente');
			var modal = bootstrap.Modal.getInstance(myModalEl);
			if(modal) {
				modal.hide();
			} else {
				document.querySelector('#modalNuevoPaciente .btn-close').click();
			}
		},
		nextStep() {
			if (this.pasoActual === 1) {
				if (!this.cita.dni) {
					alertify.error('Debe seleccionar o registrar un paciente', 5);
					return;
				}
			}
			if (this.pasoActual === 2) {
				if (!this.cita.clasification) {
					alertify.error('Debe seleccionar un tipo de consulta', 5);
					return;
				}
			}
			if (this.pasoActual === 3) {
				if (!this.cita.type) {
					alertify.error('Debe seleccionar un servicio específico', 5);
					return;
				}
			}
			if (this.pasoActual === 4) {
				if (!this.cita.professional_id) {
					alertify.error('Debe seleccionar un profesional', 5);
					return;
				}
			}
			if (this.pasoActual === 5) {
				if (!this.cita.schedule_id || !this.horaManualId) {
					alertify.error('Debe seleccionar un horario disponible', 5);
					return;
				}
			}
			if (this.pasoActual === 6) {
				if (!this.cita.mode) {
					alertify.error('Debe seleccionar una modalidad', 5);
					return;
				}
			}
			if (this.pasoActual < 8) this.pasoActual++;
		},
		prevStep() {
			if (this.pasoActual > 1) this.pasoActual--;
		},
		seleccionarCategoria(id) {
			this.cita.clasification = id;
			this.cita.type = '';
			this.cita.professional_id = '';
			this.cita.schedule_id = '';
			this.precioDinamico();
			this.nextStep();
		},
		seleccionarServicio(id) {
			this.cita.type = id;
			this.precioDinamico();
			this.nextStep();
		},
		seleccionarDoctor(prof) {
			this.cita.professional_id = prof.id;
			this.buscarHorariosManual();
			this.nextStep();
		},
		seleccionarModalidad(mode) {
			this.cita.mode = mode;
			this.esPresencial = (mode == 1);
			this.nextStep();
		},
		getLabelCategoria(id) {
			const cat = this.categorias.find(c => c.id == id);
			return cat ? cat.label : '';
		},
		getLabelServicio(id) {
			const sub = this.precios.find(p => p.id == id);
			return sub ? sub.descripcion : '';
		},
		getLabelModalidad(mode) {
			if (mode == 1) return 'Presencial';
			if (mode == 2) return 'Virtual';
			if (mode == 3) return 'Domicilio';
			return '';
		},
		async buscarHorariosManual() {
			if (!this.fechaManual || !this.cita.professional_id) return;
			let diaManual = moment(this.fechaManual).format('d');
			let diaSemana = this.dayWeek(diaManual - 1);
			this.cargandoHorarios = true;
			await this.axios.get(`/api/horarioCuadernoOcupado/${this.fechaManual}/${diaSemana}`)
				.then(res => {
					let solos = res.data.solos.filter(h => h.professional_id == this.cita.professional_id);
					let invalidos = res.data.invalidos;
					this.horariosDisponibles = solos.filter(h => !invalidos.find(i => i.schedule_id == h.id));
					
					// Preselect if horaManualId is still valid, else clear
					if (!this.horariosDisponibles.find(h => h.id == this.horaManualId)) {
						this.horaManualId = '';
						this.cita.schedule_id = '';
					}
				})
				.finally(() => this.cargandoHorarios = false);
		},
		seleccionarHoraManual() {
			let horaSeleccionada = this.horariosDisponibles.find(h => h.id == this.horaManualId);
			if (horaSeleccionada) {
				this.cita.schedule_id = horaSeleccionada.id;
			} else {
				this.cita.schedule_id = '';
			}
		},
		horaLatam1(horita){ if(!horita) return ''; return moment(horita, 'HH:mm:ss').format('hh:mm') },
		horaLatam2(horita){ if(!horita) return ''; return moment(horita, 'HH:mm:ss').format('hh:mm a') },
		precioDinamico(){
			this.cita.price = 0;
			if(this.cita.type =='') this.cita.price = 0;
			else{
				let precioPadre = this.precios.find(p=> p.id == this.cita.type)
				let precio = 0;
				let descuentoPorcentual;

				if( this.precioNuevo ) precio = precioPadre.nuevos
				else precio = precioPadre.continuos

				/* console.log('membresia', this.cita.membresia);
				console.log('tipo', this.cita.membresia['tipo']); */
				if( this.cita.membresia )
					if( this.cita.membresia.tipo==15 ) //Pertenece a la membresía kurame, único en hacer descuento especial
						precio = precioPadre.especialMembresias
				
				if( this.tieneAdelanto )
					if( parseInt(this.descuentoAdelanto) <= 0 || this.descuentoAdelanto=='' ) this.descuentoAdelanto=0
					else precio = precio - parseFloat(this.descuentoAdelanto);

				if( this.tieneDescuento ){
					if( parseInt(this.descuentoPorcentaje) <= 0 ) descuentoPorcentual=0
					else descuentoPorcentual = parseFloat((precio * 1/ parseInt(this.descuentoPorcentaje)).toFixed(1));				
					precio = precio - descuentoPorcentual;
				}

				if( this.tieneRebaja )
					precio = precio - parseFloat(this.descuentoRebaja);
				
				this.cita.price = precio;
			}
		},
		pedirMonedas(){
			this.axios('/api/listarMonedas')
			.then(resp => this.monedas = resp.data )
		},
		async insertar(e){ 
			e.preventDefault()
			const config = {
				headers: { 'content-type': 'multipart/form-data' }
			}
			if( this.cita.type_dni==1 && (this.cita.dni =='' || this.cita.dni.length<8) )
				alertify.error('Todo paciente debe tener un DNI válido', 10);
			else if( this.cita.type_dni!=1 && (this.cita.dni =='' || this.cita.dni.length<8) )
				alertify.error('Todo extranjero debe tener un documento de identidad válido', 10);
			else if(this.cita.name == '' && this.cita.nombres =='') alertify.error('Debe rellenar apellidos y  nombres', 10);
			else if(this.cita.phone == '') alertify.error('Debe rellenar un celular', 10);
			else if( !this.cita.type) alertify.error('Debe seleccionar un tipo de servicio', 10);
			else if( this.tieneDescuento && this.razonPorcentaje=='' ) alertify.error('Tiene que rellenarse un motivo de descuento', 10)
			else if( this.tieneRebaja && this.razonRebaja=='' ) alertify.error('Tiene que rellenarse un motivo de rebaja', 10)
			else if( this.descuentoAdelanto && this.razonAdelanto=='' ) alertify.error('Tiene que rellenarse una fecha o razón del adelanto', 10)
			else if( this.cita.contacto == '' || this.cita.contacto_celular == '' || this.cita.parentezco=='') alertify.error('Debe rellenar el contacto de emergencia', 10)
			else if( this.cita.recomendation == '') alertify.error('Debe rellenar  la referencia', 10)
			else{
				let formData = new FormData();
				formData.append('dni', this.cita.dni);
				formData.append('phone', this.cita.phone);
				formData.append('name', this.cita.name.toUpperCase() || 'Sin apellidos' );
				formData.append('nombres', this.cita.nombres.toUpperCase() || '' );
				formData.append('email',this.cita.email);
				formData.append('address', this.cita.address);
				formData.append('department', this.cita.department);
				formData.append('province', this.cita.province);
				formData.append('district', this.cita.district);
				formData.append('birth_date', this.cita.birth_date);
				formData.append('gender', parseInt(this.cita.gender));
				formData.append('occupation', this.cita.occupation);
				formData.append('marital_status', this.cita.marital_status);
				formData.append('instruction_degree', this.cita.instruction_degree);
				formData.append('professional_id', this.cita.professional_id);
				
				let horaSel = this.horariosDisponibles.find(h => h.id == this.horaManualId);
				formData.append('schedule_id', this.horaManualId);
				formData.append('check_time', horaSel ? horaSel.check_time : '');
				formData.append('date', this.fechaManual);
				
				formData.append('clasification', this.cita.clasification);
				formData.append('price', this.cita.price);
				formData.append('type', this.cita.type); //nueva lista de servicios
				//formData.append('patient_condition', this.cita.patient_condition); //El sistema evalúa la condición: nuevo o continuo, no es necesario pasar
				formData.append('recomendation', this.cita.recomendation);
				formData.append('recomendacion_comentario', this.cita.recomendacion_comentario);
				formData.append('mode', this.cita.mode );
				formData.append('link', this.cita.link);
				formData.append('type_dni', this.cita.type_dni);
				formData.append('contacto', this.cita.contacto);
				formData.append('contacto_celular', this.cita.contacto_celular);
				formData.append('parentezco', this.cita.parentezco);
				formData.append('contacto2', this.cita.contacto2);
				formData.append('contacto_celular2', this.cita.contacto_celular2);
				formData.append('parentezco2', this.cita.parentezco2);
				formData.append('continuo', this.precioNuevo ? '1': 2 ); //this.cita.type_amount
				formData.append('user_id', this.idUsuario);
				formData.append('formato_nuevo', 1);
				formData.append('etiqueta', $('#sltServicio option:selected').text());
				formData.append('rebaja', this.descuentoRebaja);
				formData.append('motivoRebaja', this.razonRebaja);
				formData.append('descuento', this.descuentoPorcentaje);
				formData.append('motivoDescuento', this.razonPorcentaje);
				formData.append('new_status', this.cita.new_status);
				formData.append('adelanto', this.descuentoAdelanto);
				formData.append('razonAdelanto', this.razonAdelanto);
				formData.append('monedaAdelanto', this.monedaAdelanto);
				formData.append('idSede', this.idSede);
				await this.axios.post('/api/appointment', formData, config)
				.then(response => { //Trabaja en api -> modelo (appointment)>store()
					console.log(response.data)
					this.closeModal();
					this.cita.membresia=''
					this.$emit('actualizarListadoCitas', true)
					//console.log(response.data.cita.id)
					this.$swal({
						icon: 'success',
						title: 'Cita registrada con éxito'
					})
					//this.$parent.listar()
					this.clearModal()
				})
				.catch(error => {
						console.log(error)
				})
			}
		},
		closeModal(){
      document.getElementById('closeModalNuevaCita').click();
		},
		prevenirEvent() {
			if (event.key === 'Enter' || event.code === 13) {
				event.preventDefault();
				this.reniec();
			}
		},

		clearModal(){
			this.pasoActual = 1;
			this.busquedaTexto = '';
			this.fechaManual = '';
			this.horaManualId = '';
			this.horariosDisponibles = [];
			this.fetchPacientes();
			this.cita.phone= '';
			this.cita.dni= '';
			this.cita.name= ''; this.cita.nombres= '';
			this.cita.address= '';
			this.cita.email='';
			this.cita.department= 12;
			this.cita.province= 103;
			this.cita.district= 1006;
			this.cita.birth_date= '';
			this.cita.occupation= '';
			this.cita.instruction_degree= 6;
			this.cita.gender= 2;
			this.cita.marital_status= 1;
			this.cita.relative_name= '';
			this.cita.relatine_phone= '';
			this.cita.kinship= '';
			this.cita.professional_id='';
			this.cita.schedule_id='';
			this.cita.date= dateNow();
			this.cita.clasification='';
			this.cita.price=0;
			this.cita.type= '';
			this.cita.patient_condition= '';
			this.cita.recomendation= ''; this.cita.recomendacion_comentario='';
			this.cita.mode= '';
			this.cita.voucher= '';
			this.cita.link= '';
			this.cita.bank= '';
			this.cita.pay_status= '';
			this.cita.status= '';
			this.cita.type_amount=1;
			this.cita.contacto= ''; this.cita.contacto_celular= ''; this.cita.parentezco='';
			this.cita.contacto2= ''; this.cita.contacto_celular2= ''; this.cita.parentezco2='';
			this.etiqueta =''; this.descuentoAdelanto = 0; this.descuentoPorcentaje=0; this.descuentoPorcentual=0;
			this.tieneAdelanto=false; this.tieneDescuento=false; this.tieneRebaja=false; this.razonAdelanto=''; this.razonRebaja=''
			this.cita.vivo=1; this.monedaAdelanto=1
		},
		reniec(){ 
			if (this.switchReciec === 0) return;
			this.switchReciec = 0;
			this.limpiarInputs(false)
			//event.target.closest('.btnReniec').classList.replace('btn-info', 'btn-danger')

			this.$swal.fire({
				title: 'Buscando paciente',
				timer: 2500,
				timerProgressBar: true,
				didOpen: () => {
					timerProgressBar: true,
					this.$swal.showLoading()
				},
			})

			this.axios.get("/api/buscarPacienteDB/"+this.cita.dni)
			.then(res => {
				if (res.data.patient == null) { //Buscar en reniec, nuevo
					if(this.cita.type_dni==1){
						//window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
						this.axios.get("/api/buscarDni/"+this.cita.dni)
						.then(response => {
							console.log(response.data)
							this.cita.name = (`${response.data.apellido_paterno} ${response.data.apellido_materno} `).trim()
							this.cita.nombres = `${response.data.nombres.trim()}`;
							this.cita.vivo=1
							
							if (response.data.apellido_paterno) {
								this.patientNew = false
	
								this.$swal.fire({
									icon: 'success',
									title: 'Okey',
									text: 'Paciente nuevo',
								})
							} else {
								this.$swal.fire({
									icon: 'error',
									title: 'Oops...',
									text: 'DNI no encontrado!',
									footer: 'Vuelve a intentarlo'
								})
							}
						})
						.catch(err => {
							console.error(err)
						})
					}
				}else{ //encontró en la DB
					this.$swal.fire({
						title: 'Buscando paciente',
						timer: 10,
					})
					console.log('datos del paciente',res.data);
					let sumaDeudas = 0;
					const cantDeudas =  res.data.deudas.length;
					if( cantDeudas >0){
						for(let i=0; i< cantDeudas ; i++ ){
							sumaDeudas+= res.data.deudas[i].monto
						}
						this.alertaDeudas = true;
						this.mensajeDeudas = `El paciente tiene <strong>${(cantDeudas==1) ? '1 deuda': cantDeudas+' deudas'}</strong> de <strong>${moment(res.data.deudas[0].fecha).fromNow()}</strong> por un total de <strong>S/ ${parseFloat(sumaDeudas).toFixed(2)}</strong>`;
						
					}else this.alertaDeudas=false;

					if(res.data.patient.faults != 0){
						this.$swal.fire({
						title: 'Atención, este paciente tiene '+ res.data.patient.faults + ' faltas'
						})
					}

					this.cita.name = res.data.patient.name;
					this.cita.nombres = res.data.patient.nombres;
					this.cita.phone = res.data.patient.phone;
					this.cita.email = res.data.patient.email;
					this.cita.birth_date = res.data.patient.birth_date;
					this.cita.marital_status = res.data.patient.marital_status;
					this.cita.instruction_degree = res.data.patient.instruction_degree;
					this.cita.gender = typeof parseInt(res.data.patient.gender) === 'number' && res.data.patient.gender !==null ? res.data.patient.gender : 2;
					this.cita.occupation = res.data.patient.occupation;
					this.cita.address = res.data.patient.address.address;
					this.cita.department = res.data.patient.address.department;
					this.cita.province = res.data.patient.address.province;
					this.cita.district = res.data.patient.address.district;
					this.cita.vivo = res.data.patient.vivo;
					this.cita.contacto = res.data.relacion[0].name ?? '' ;
					this.cita.contacto_celular = res.data.relacion[0].phone ?? '' 
					this.cita.parentezco = res.data.relacion[0].kinship ?? ''
					this.cita.contacto2 = res.data.relacion[1]?.name ?? ''
					this.cita.contacto_celular2 = res.data.relacion[1]?.phone ?? '' 
					this.cita.parentezco2 = res.data.relacion[1]?.kinship ?? '' 
					this.cita.etiqueta = res.data.patient.etiqueta;
					this.cita.deudas = res.data.patient.deudas;
					this.cita.prev_status = res.data.patient.new_status;
					this.cita.club = res.data.patient.club;
					this.cita.membresia = res.data.membresia;
					this.cita.recomendation = res.data.patient.recomendation;
					this.cita.recomendacion_comentario = res.data.patient.recomendacion_comentario;
					this.patientNew = true;
					this.moverProvincias(false)
					this.moverDistritos()
				}
			})
			.catch(err => {
				console.error(err)
			})
			.finally(result => {
				this.switchReciec = 1;
				document.querySelector(".btnReniec").classList.replace('btn-danger', 'btn-info')
			})
		},    
		horaSimple1(horita){ return moment(horita, 'HH:mm:ss').format('h:mm')},
		horaSimple2(horita){ return moment(horita, 'HH:mm:ss').format('h:mm a')},
		fechaLatam(horita){ return moment(horita).format('DD [de] MMMM [de] YYYY')},

		emitirProf () {
			this.$emit("emitIdProf", event.target.value);
			let profesion = this.profes.filter(x => x.id == event.target.value)[0].profession;

			switch (profesion) {
				case 'Psicólogo': this.cita.clasification = 2; break;
				case 'Psiquiatra': this.cita.clasification = 1; break;
				case 'Terapista': this.cita.clasification = 7; break;
				case 'Tecnólogo': this.cita.clasification = 8; break;
				default: this.cita.clasification = ''; break;
			}
		},
		emitirFecha () {
			this.$emit("emitDate", this.cita.professional_id, event.target.value);
		},

		limpiarInputs (value) {
			value ? this.cita.dni = '' : false;
			value ? this.patientNew = false : false

			this.cita.phone = '';
			this.cita.name = ''; this.cita.nombres = '';
			this.cita.email = '';
			this.cita.address = '';
			this.cita.department = 12;
			this.cita.province = 103;
			this.cita.district = 1006;
			this.cita.birth_date = '';
			this.cita.occupation = '';
			this.cita.marital_status = 1;
			this.cita.instruction_degree = 6;
			this.cita.gender = 2;
			this.cita.relative_name = '';
			this.cita.relatine_phone = '';
			this.cita.kinship = '';
			this.cita.prev_status=1;
			this.cita.etiqueta='';
			this.cita.new_status=1;
			this.cita.recomendation='';
			this.cita.membresia = null
			
			this.cita.contacto= ''; this.cita.contacto_celular= ''; this.cita.parentezco='';
			this.cita.contacto2= ''; this.cita.contacto_celular2= ''; this.cita.parentezco='';

			this.moverProvincias(false)
			this.moverDistritos()
			// value ? this.cita.mode = '' : false;
			
			this.cita.voucher = '';
			this.cita.link = '';
			this.cita.bank = '';
			this.cita.pay_status = '';
			this.cita.status = '';
			this.descuentoAdelanto = 0; this.descuentoPorcentaje=0; this.descuentoPorcentual=0;
			this.tieneAdelanto=false; this.tieneDescuento=false; this.tieneRebaja=false;
			this.descuentoRebaja=0; this.razonPorcentaje=''; this.razonRebaja=''
		},
		dayWeek (day) {
			switch (day) {
				case 0: return "Lunes"; break;
				case 1: return "Martes"; break;
				case 2: return "Miercoles"; break;
				case 3: return "Jueves"; break;
				case 4: return "Viernes"; break;
				case 5: return "Sabado"; break;
				case 6: return "Domingo"; break;
				case -1: return "Domingo"; break;
			}
		},
		dynamicPrice () {
			if (document.getElementById('clasification').value &&
				document.getElementById('type').value &&
				document.getElementById('mode').value && document.getElementById('type_amount').value) {
					
				let casificationValue = parseInt(document.getElementById('clasification').value) - 1,
					typeValue = parseInt(document.getElementById('type').value) - 1,
					modeValue = parseInt(document.getElementById('mode').value) - 1,
					price = document.getElementById('price');
					if(this.cita.type_amount == 1){
						this.cita.price = this.priceCite[casificationValue][modeValue][typeValue]
					}else{
						this.cita.price = this.priceCiteOld[casificationValue][modeValue][typeValue]
					}
				
			}
		},
		async listarPrecios(){
			await this.axios.get('/api/listarPreciosTodos')
			.then( response => this.precios = response.data)
		},
		async listarDepartamentos(){
			await this.axios.get('/api/departamentos')
			.then(response => {
				this.ubigeo.departamentos = response.data['departamentos'];
				this.ubigeo.provincias = response.data['provincias'];
				this.ubigeo.distritos = response.data['distritos'];

				this.provincias = this.ubigeo.provincias.filter(provincia=> provincia.idDepa == 12)
				this.distritos = this.ubigeo.distritos.filter(distrito=> distrito.idProv == 103)

				this.cita.department = 12;
				this.cita.province = 103;
				this.cita.district = 1006;
				this.moverProvincias(false)
				this.moverDistritos()
			})
		},
		moverProvincias(borrar){
			let idDepa= this.cita.department;
			this.provincias = this.ubigeo.provincias.filter(provincia=> provincia.idDepa == idDepa)
			if(borrar) this.cita.district=-1;
		},
		moverDistritos(){
			let idProv= this.cita.province;
			this.distritos = this.ubigeo.distritos.filter(distrito=> distrito.idProv == idProv)
		},
		limitarCel($event){
			if( this.cita.phone.length>16 ){
				$event.preventDefault();
			}
		},
		nombreStatus(tipo){
			let enc = this.status.find(x=> x.id == tipo)
			//console.log(enc);
			return enc.stat
		}
	},
	created (){
		this.listarPrecios();
		this.listarDepartamentos();
		this.recomendaciones.sort();
	},
	updated(){
		//this.cita.department = 12;
		
	},
	watch:{
		horaElegida(){
			if (this.horaElegida && this.profesionalElegido) {
				this.cita.professional_id = this.profesionalElegido.id;
				this.cita.clasification = this.profesionalElegido.idProfesion;
				this.fechaManual = this.fechaElegida;
				this.horaManualId = this.horaElegida.id;
				this.cita.schedule_id = this.horaElegida.id;
				this.horariosDisponibles = [this.horaElegida];
			} else {
				this.cita.professional_id = '';
				this.cita.schedule_id = '';
				this.fechaManual = moment().format('YYYY-MM-DD');
				this.horaManualId = '';
				this.horariosDisponibles = [];
			}
		}
	},

	computed:{
		doctoresFiltradosPorCat() {
			if (!this.doctores) return [];
			if (!this.cita.clasification) return this.doctores;
			return this.doctores.filter(d => d.idProfesion == this.cita.clasification || d.profession_id == this.cita.clasification);
		},
		horaSeleccionada() {
			return this.horariosDisponibles.find(h => h.id == this.horaManualId) || {};
		},
		profesionalSeleccionado() {
			if (!this.doctores) return {};
			return this.doctores.find(d => d.id == this.cita.professional_id) || {};
		},
		filtro(){
			if(this.cita.professional_id){
				return this.horas.filter(hora=> hora.professional_id == cita.professional_id)         
			}
		}
	}
}
</script>

<style>
.wizard-stepper {
	background-color: #f8f9fa;
	margin: -1rem -1rem 1.5rem -1rem;
	padding: 1.5rem 1rem;
}
.step-item {
	opacity: 0.5;
	transition: all 0.3s ease;
}
.step-item.active {
	opacity: 1;
	transform: scale(1.05);
}
.step-item.completed {
	opacity: 0.8;
}
.step-item.completed .step-icon {
	background-color: #28a745 !important;
	color: white;
}
.step-item.active .step-icon {
	background-color: #0d6efd !important;
	color: white;
	box-shadow: 0 0 15px rgba(13, 110, 253, 0.4);
}
.step-icon {
	width: 35px;
	height: 35px;
	background-color: #dee2e6;
	color: #6c757d;
	font-size: 0.9rem;
}
.step-label {
	font-size: 0.85rem;
	font-weight: 600;
}
.step-connector {
	height: 2px;
	background-color: #dee2e6;
	flex-grow: 1;
	min-width: 20px;
}
.step-item.completed .step-connector {
	background-color: #28a745;
}

.bg-primary-light { background-color: #e7f1ff !important; }
.bg-soft-primary { background-color: rgba(13, 110, 253, 0.1); }
.bg-soft-info { background-color: rgba(13, 202, 240, 0.1); }
.bg-soft-warning { background-color: rgba(255, 193, 7, 0.1); }
.bg-soft-success { background-color: rgba(40, 167, 69, 0.1); }
.bg-light-gradient { background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); }

.avatar-circle, .avatar-xl {
	width: 48px;
	height: 48px;
	border-radius: 50%;
}
.avatar-xl {
	width: 100px;
	height: 100px;
}

.category-icon {
	width: 50px;
	height: 50px;
	font-size: 1.2rem;
}
.bg-cat-1 { background-color: rgba(111, 66, 193, 0.1); color: #6f42c1; }
.bg-cat-2 { background-color: rgba(13, 110, 253, 0.1); color: #0d6efd; }
.bg-cat-3 { background-color: rgba(25, 135, 84, 0.1); color: #198754; }
.bg-cat-4 { background-color: rgba(255, 193, 7, 0.1); color: #ffc107; }
.bg-cat-6 { background-color: rgba(220, 53, 69, 0.1); color: #dc3545; }
.bg-cat-7 { background-color: rgba(13, 202, 240, 0.1); color: #0dcaf0; }
.bg-cat-8 { background-color: rgba(108, 117, 125, 0.1); color: #6c757d; }

.selectable-card {
	cursor: pointer;
	border: 2px solid transparent !important;
}
.selectable-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
}
.selectable-card.active {
	border-color: #0d6efd !important;
	background-color: rgba(13, 110, 253, 0.02);
}

.custom-switch .form-check-input {
	width: 3rem;
	height: 1.5rem;
}

.ticket-container {
	max-width: 600px;
	margin: 0 auto;
}
.border-dashed { border-style: dashed !important; }
.transition-all { transition: all 0.3s ease; }
.ls-1 { letter-spacing: 1px; }

.btn-light-danger {
	background-color: #ffe5e5;
	color: #d9534f;
	border: none;
}
.btn-light-danger:hover {
	background-color: #ffd1d1;
}

.bg-success-light { background-color: rgba(40, 167, 69, 0.1); }
.text-warning-dark { color: #856404; }
</style>
