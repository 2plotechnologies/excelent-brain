<template>
  <div class="patient-detail-container">
    <div class="d-flex align-items-center mb-4 mt-2">
      <button class="btn btn-link text-decoration-none px-0" @click="$emit('volver')">
        <i class="fas fa-arrow-left"></i> Volver a Pacientes
      </button>
    </div>

    <!-- Header similar to image -->
    <div class="card shadow-sm mb-4 border-0 rounded-lg" style="background-color: #fcfcfc;">
      <div class="card-body d-flex justify-content-between align-items-center flex-wrap" v-if="!loading">
        <div class="d-flex align-items-center mb-3 mb-md-0">
          <div class="rounded-circle text-primary bg-light border d-flex justify-content-center align-items-center me-3 shadow-sm font-weight-bold" style="width: 60px; height: 60px; font-size: 20px;">
            {{ initials }}
          </div>
          <div>
            <h4 class="mb-1 font-weight-bold d-flex align-items-center gap-2">
              {{ paciente.name }} {{ paciente.nombres }}
              <span class="badge bg-success" style="font-size: 0.6rem; vertical-align: middle;" v-if="paciente.activo || paciente.activo_sn"><i class="fas fa-heart"></i> Activo</span>
              <!--Mostrar etiquetas de comportamiendo aqui (Desde semaforo)-->
              <span class="badge border bg-warning text-white" v-for="sem in paciente.semaforo_estados.slice(0, 5)" :key="sem.id" style="font-size: 0.6rem; vertical-align: middle;">
                <i class="fas fa-tag text-white me-1"></i> {{ getEstadoNombre(sem.codigo) }}
              </span>

            </h4>
            <div class="text-muted small">
              <span v-if="paciente.birth_date" class="me-3">{{ getAge(paciente.birth_date) }} años - {{ getGender(paciente.gender) }}</span>
              <span class="me-3">DNI: {{ paciente.dni }}</span>
              <span v-if="paciente.medical_evolutions"><i class="fas fa-history text-muted"></i> {{ paciente.medical_evolutions.length }} evoluciones en historial</span>
            </div>
          </div>
        </div>

        <div class="d-flex gap-2 flex-wrap">
          <a :href="'tel:' + paciente.phone" class="btn btn-light shadow-sm rounded border"><i class="fas fa-phone"></i> Llamar</a>
          <a :href="'https://wa.me/51' + paciente.phone" target="_blank" class="btn btn-light shadow-sm rounded border"><i class="fab fa-whatsapp"></i> WhatsApp</a>
        </div>
      </div>
    </div>

    <!-- Nav tabs -->
    <ul class="nav nav-tabs mb-4 px-2" id="patientTabs" role="tablist" style="border-bottom: 0;">
      <li class="nav-item" role="presentation">
        <button class="nav-link active font-weight-bold small text-dark" id="resumen-tab" data-bs-toggle="tab" data-bs-target="#resumen" type="button" role="tab" >Resumen</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" id="datos-tab" data-bs-toggle="tab" data-bs-target="#datos" type="button" role="tab" >Datos Personales</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" id="citas-tab" data-bs-toggle="tab" data-bs-target="#citas" type="button" role="tab" >Citas & Paquetes</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" id="historial-tab" data-bs-toggle="tab" data-bs-target="#historial" type="button" role="tab" >Historial Clínico <span v-if="paciente.medical_evolutions">({{ paciente.medical_evolutions.length }})</span></button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" id="triaje-tab" data-bs-toggle="tab" data-bs-target="#triaje" type="button" role="tab" >Triaje & Seguridad</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" id="seguimiento-tab" data-bs-toggle="tab" data-bs-target="#seguimiento" type="button" role="tab" >
          <i class="fas fa-clipboard-list me-1"></i> Ficha de Seguimiento
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" id="recetas-tab" data-bs-toggle="tab" data-bs-target="#recetas" type="button" role="tab" >Recetas & Órdenes</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" id="pruebas-tab" data-bs-toggle="tab" data-bs-target="#pruebas" type="button" role="tab" >Pruebas Psicológicas</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" id="documentos-tab" data-bs-toggle="tab" data-bs-target="#documentos" type="button" role="tab">Documentos</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" id="convenios-tab" data-bs-toggle="tab" data-bs-target="#convenios" type="button" role="tab" >Convenios</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" id="finanzas-tab" data-bs-toggle="tab" data-bs-target="#finanzas" type="button" role="tab" >Finanzas</button>
      </li>
    </ul>

    <!-- Spinner Loading -->
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-2 text-muted">Cargando información completa del paciente...</p>
    </div>

    <!-- Tab panes -->
    <div class="tab-content px-2" id="patientTabsContent" v-else>
      <!-- RESUMEN -->
      <div class="tab-pane fade show active" id="resumen" role="tabpanel">
        <div class="row">
          <div class="col-md-4">
            <div class="card shadow-sm border rounded-lg mb-3">
              <div class="card-body">
                <h6 class="font-weight-bold mb-3"><i class="far fa-calendar text-primary"></i> Próxima Cita</h6>
                <div v-if="proximaCita">
                  <h5 class="mb-1 text-dark">{{ formatDateTime(proximaCita.date, proximaCita.hora) }}</h5>
                  <p class="small text-muted mb-0" v-if="proximaCita.professional">{{ proximaCita.professional.name }}</p>
                </div>
                <div v-else>
                  <p class="text-muted mb-0 small">No hay citas próximas programadas.</p>
                </div>
              </div>
            </div>
            
            <div class="card shadow-sm border rounded-lg mb-3">
              <div class="card-body">
                <h6 class="font-weight-bold mb-3"><i class="fas fa-file-medical text-success"></i> Última Evolución</h6>
                <div v-if="ultimaEvolucion">
                  <p class="small text-muted mb-1">{{ formatDate(ultimaEvolucion.date) }} - Dr. {{ ultimaEvolucion.professional ? ultimaEvolucion.professional.name : '' }}</p>
                  <p class="small mb-0">{{ ultimaEvolucion.descripcion || 'Sin descripción' }}</p>
                </div>
                <div v-else>
                  <p class="text-muted mb-0 small">No hay evoluciones registradas.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card shadow-sm border rounded-lg h-100">
              <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <h6 class="font-weight-bold text-dark mb-0"><i class="far fa-clock text-primary"></i> Línea de Tiempo Clínica (Últimas Actividades)</h6>
                </div>
                <div class="timeline ms-3 mt-3 content-timeline">
                  <!-- Show combined timeline of appointments and evolutions -->
                  <div v-for="(item, index) in timelineActivity.slice(0, 5)" :key="index" class="timeline-item pb-3 mb-3 border-bottom">
                    <div class="d-flex justify-content-between">
                      <div>
                        <strong class="text-dark">{{ item.type == 'Cita' ? 'Cita Programada' : 'Evolución Clínica' }}</strong>
                        <p class="small text-muted mb-0 mt-1">{{ item.desc }}</p>
                        <p class="small text-primary mb-0 mt-1">{{ item.profesional }}</p>
                      </div>
                      <div class="text-end">
                        <span class="small text-muted">{{ formatDate(item.date) }}</span>
                      </div>
                    </div>
                  </div>
                  <div v-if="timelineActivity.length === 0" class="text-muted small">
                    No hay actividad reciente.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- DATOS PERSONALES -->
      <div class="tab-pane fade" id="datos" role="tabpanel">
        <div class="position-relative">

          <!-- BOTÓN EDITAR -->
          <button 
            class="btn btn-outline-primary btn-sm position-absolute"
            style="top: 0; right: 0;"
            data-bs-toggle="modal"
            data-bs-target="#modalEdicionPaciente"
            @click="$emit('editarPaciente', paciente)"
          >
            <i class="fas fa-pen"></i> Editar Datos
          </button>

          <h4 class="mb-4 fw-bold">Datos Personales</h4>

          <div class="row g-4">

            <!-- INFORMACIÓN BÁSICA -->
            <div class="col-md-6">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body">
                  <h6 class="fw-bold mb-3">
                    <i class="fas fa-user text-primary me-2"></i>
                    Información Básica
                  </h6>

                  <div class="mb-2">
                    <small class="text-muted d-block">Nombre Completo</small>
                    <strong>{{ paciente.name }} {{ paciente.nombres }}</strong>
                  </div>

                  <div class="mb-2">
                    <small class="text-muted d-block">DNI</small>
                    <strong>{{ paciente.dni }}</strong>
                  </div>

                  <div class="mb-2">
                    <small class="text-muted d-block">Fecha de Nacimiento</small>
                    <strong>{{ paciente.birth_date }}</strong>
                  </div>

                  <div class="mb-2">
                    <small class="text-muted d-block">Género</small>
                    <strong>{{ paciente.gender == 1 ? 'Masculino' : paciente.gender == 2 ? 'Femenino' : 'Otro'}}</strong>
                  </div>

                  <div class="mb-2">
                    <small class="text-muted d-block">Estado Civil</small>
                    <strong>{{ paciente.marital_status == 1 ? 'Soltero' : paciente.marital_status == 2 ? 'Casado' : paciente.marital_status == 3 ? 'Divorciado' : paciente.marital_status == 4 ? 'Viudo' : paciente.marital_status == 5 ? 'Conviviente' : '—' }}</strong>
                  </div>

                  <div class="mb-2">
                    <small class="text-muted d-block">Ocupación</small>
                    <strong>{{ paciente.occupation || '—' }}</strong>
                  </div>

                  <div class="mb-2">
                    <small class="text-muted d-block">Grado de Instrucción</small>
                    <strong>{{ paciente.instruction_degree == 1 ? 'Inicial' : paciente.instruction_degree == 2 ? 'Primaria' : paciente.instruction_degree == 3 ? 'Secundaria' : paciente.instruction_degree == 4 ? 'Superior' : paciente.instruction_degree == 5 ? 'Técnico' : paciente.instruction_degree == 6 ? 'Ninguno' : '—' }}</strong>
                  </div>

                </div>
              </div>
            </div>

            <!-- INFORMACIÓN DE CONTACTO -->
            <div class="col-md-6">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body">
                  <h6 class="fw-bold mb-3">
                    <i class="fas fa-phone text-primary me-2"></i>
                    Información de Contacto
                  </h6>

                  <div class="mb-2">
                    <small class="text-muted d-block">Teléfono</small>
                    <strong>{{ paciente.phone }}</strong>
                  </div>

                  <div class="mb-2">
                    <small class="text-muted d-block">Email</small>
                    <strong style="word-break: break-all;">
                      {{ paciente.email || '—' }}
                    </strong>
                  </div>

                  <div class="mb-2" v-if="paciente.address">
                    <small class="text-muted d-block">Dirección</small>
                    <strong>{{ paciente.address.address }}</strong>
                  </div>

                  <div class="mb-2" v-if="paciente.address">
                    <small class="text-muted d-block">Departamento</small>
                    <strong>{{ paciente.departamento }}</strong>
                  </div>

                  <div class="mb-2" v-if="paciente.address">
                    <small class="text-muted d-block">Provincia</small>
                    <strong>{{ paciente.provincia }}</strong>
                  </div>

                  <div class="mb-2" v-if="paciente.address">
                    <small class="text-muted d-block">Distrito</small>
                    <strong>{{ paciente.distrito }}</strong>
                  </div>

                  <div>
                    <small class="text-muted d-block">Referencia</small>
                    <strong>{{ paciente.reference || '—' }}</strong>
                  </div>

                </div>
              </div>
            </div>

            <!-- CONTACTO DE EMERGENCIA -->
            <div class="col-md-6">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body">
                  <h6 class="fw-bold mb-3 text-warning">
                    <i class="fas fa-exclamation-triangle me-2"></i>
                    Contacto de Emergencia
                  </h6>

                  <div v-if="paciente.relative && paciente.relative.length">
                    <div v-for="rel in paciente.relative" :key="rel.id" v-show="rel.name">
                      <div class="mb-2">
                        <small class="text-muted d-block">Nombre</small>
                        <strong>{{ rel.name }}</strong>
                      </div>

                      <div class="mb-2">
                        <small class="text-muted d-block">Teléfono</small>
                        <strong>{{ rel.phone }}</strong>
                      </div>

                      <div class="mb-3">
                        <small class="text-muted d-block">Relación</small>
                        <strong>{{ rel.kinship }}</strong>
                      </div>

                      <hr v-if="paciente.relative.length > 1">
                    </div>
                  </div>

                  <div v-else>
                    <small class="text-muted">No hay contactos registrados.</small>
                  </div>

                </div>
              </div>
            </div>

            <!-- INFORMACIÓN DE REGISTRO -->
            <div class="col-md-6">
              <div class="card border-0 shadow-sm h-100">
                <div class="card-body">
                  <h6 class="fw-bold mb-3">
                    <i class="fas fa-calendar text-primary me-2"></i>
                    Información de Registro
                  </h6>

                  <div class="mb-2">
                    <small class="text-muted d-block">Fecha de Registro</small>
                    <strong>{{ paciente.created_at }}</strong>
                  </div>

                  <div class="mb-2">
                    <small class="text-muted d-block">Última Visita</small>
                    <strong>{{ paciente.last_visit || '—' }}</strong>
                  </div>

                  <div>
                    <small class="text-muted d-block">Total de Evoluciones</small>
                    <strong>{{ paciente.evolutions_count || 0 }} registros</strong>
                  </div>

                </div>
              </div>
            </div>

            <!-- ETIQUETAS Y HOBBIES -->
            <div class="col-md-12">
              <div class="card border-0 shadow-sm h-100 bg-light">
                <div class="card-body">
                  <div class="row">
                    <!-- ETIQUETAS DE COMPORTAMIENTO -->
                    <div class="col-md-6 mb-3 mb-md-0">
                      <h6 class="fw-bold mb-3 text-dark">
                        <i class="fas fa-tags text-primary me-2"></i>
                        Etiquetas de Comportamiento
                      </h6>
                      <div class="d-flex flex-wrap gap-2" v-if="paciente.semaforo_estados && paciente.semaforo_estados.length > 0">
                        <span class="badge border bg-white text-dark shadow-sm px-3 py-2" v-for="sem in paciente.semaforo_estados.slice(0, 5)" :key="sem.id">
                          <i class="fas fa-tag text-warning me-1"></i> {{ getEstadoNombre(sem.codigo) }}
                        </span>
                      </div>
                      <div v-else>
                        <small class="text-muted">No hay etiquetas de comportamiento registradas.</small>
                      </div>
                    </div>

                    <!-- HOBBIES -->
                    <div class="col-md-6">
                      <h6 class="fw-bold mb-3 text-dark">
                        <i class="fas fa-heart text-danger me-2"></i>
                        Hobbies e Intereses
                      </h6>
                      <div class="d-flex flex-wrap gap-2" v-if="getHobbies(paciente.hobbies).length > 0">
                        <span class="badge bg-info bg-opacity-10 border text-white border-info border-opacity-25 px-3 py-2" v-for="(hobbie, index) in getHobbies(paciente.hobbies)" :key="index">
                          {{ hobbie }}
                        </span>
                      </div>
                      <div v-else>
                        <small class="text-muted">No hay hobbies registrados.</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- CITAS Y PAQUETES -->
      <div class="tab-pane fade" id="citas" role="tabpanel">
        <div class="row">
          <div class="col-md-12 mb-4">
            <div class="card border">
              <div class="card-body p-4">
                <h5 class="card-title font-weight-bold mb-4">Últimas Citas</h5>
                <div class="table-responsive">
                  <table class="table table-hover table-sm">
                    <thead>
                      <tr>
                        <th>Fecha</th>
                        <th>Profesional</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="cita in (paciente.appointments || []).slice(0, 10)" :key="cita.id">
                        <td>{{ formatDate(cita.date) }}</td>
                        <td>{{ cita.professional ? cita.professional.name : 'N/A' }}</td>
                        <td>
                          <span class="badge" :class="getStatusBadge(cita.status)">{{ getStatusName(cita.status) }}</span>
                        </td>
                      </tr>
                      <tr v-if="!paciente.appointments || paciente.appointments.length == 0">
                        <td colspan="3" class="text-center text-muted">No tiene citas</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="card border">
              <div class="card-body p-4">
                <h5 class="card-title font-weight-bold mb-4">Membresías / Paquetes</h5>
                <div class="table-responsive">
                  <table class="table table-hover table-sm">
                    <thead>
                      <tr>
                        <th>Inicio</th>
                        <th>Fin</th>
                        <th>Precio</th>
                        <th>Activo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="mem in paciente.membresias" :key="mem.id">
                        <td>{{ formatDate(mem.inicio) }}</td>
                        <td>{{ formatDate(mem.fin) }}</td>
                        <td>{{ mem.precio ? mem.precio.descripcion : 'N/A' }}</td>
                        <td><span class="badge" :class="mem.activo ? 'bg-success' : 'bg-secondary'">{{ mem.activo ? 'ACTIVA' : 'INACTIVA' }}</span></td>
                      </tr>
                      <tr v-if="!paciente.membresias || paciente.membresias.length == 0">
                        <td colspan="4" class="text-center text-muted">No tiene membresías</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- HISTORIAL Medico -->
      <div class="tab-pane fade" id="historial" role="tabpanel">
        
        <!-- Accordions for Initial Evaluations -->
        <div class="accordion mb-4 bg-white shadow-sm rounded-lg" id="accordionInitialHistories" v-if="paciente.initial_psychological_history || paciente.initial_psychiatric_history">
          <!-- Evaluación Psicológica Inicial -->
          <div class="accordion-item border-0 border-bottom rounded-top" v-if="paciente.initial_psychological_history">
            <h2 class="accordion-header" id="headingPsycho">
              <button class="accordion-button bg-light text-primary font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePsycho" aria-expanded="true" aria-controls="collapsePsycho">
                Evaluación Psicológica Inicial
                <span class="ms-3 text-muted small" style="font-weight: normal" v-if="paciente.initial_psychological_history.created_at">
                   - {{ formatDate(paciente.initial_psychological_history.created_at) }}
                </span>
              </button>
            </h2>
            <div id="collapsePsycho" class="accordion-collapse collapse show" aria-labelledby="headingPsycho" data-bs-parent="#accordionInitialHistories">
              <div class="accordion-body px-4 py-4" style="background-color: #fbfcff;">
                
                <div class="mb-3">
                  <h6 class="text-secondary fw-bold small"><i class="fas fa-user-md text-primary me-2"></i>MOTIVO DE CONSULTA</h6>
                  <p class="small mb-0 text-dark">{{ paciente.initial_psychological_history.illness }}</p>
                </div>

                <div class="mb-3">
                  <h6 class="text-secondary fw-bold small"><i class="fas fa-notes-medical text-primary me-2"></i>ANTECEDENTES</h6>
                  <p class="small mb-0 text-dark">{{ paciente.initial_psychological_history.antecedent }}</p>
                </div>

                <div class="mb-3">
                  <h6 class="text-secondary fw-bold small"><i class="fas fa-chart-line text-primary me-2"></i>DINÁMICA FAMILIAR / SOCIAL</h6>
                  <p class="small mb-0 text-dark">{{ paciente.initial_psychological_history.dynamic }}</p>
                </div>

                <div class="mb-3">
                  <h6 class="text-secondary fw-bold small"><i class="fas fa-smile-beam text-primary me-2"></i>ACTITUD DEL PACIENTE</h6>
                  <p class="small mb-0 text-dark">{{ paciente.initial_psychological_history.attitude }}</p>
                </div>

                <div class="mb-3">
                  <h6 class="text-secondary fw-bold small"><i class="fas fa-stethoscope text-primary me-2"></i>DIAGNÓSTICO INICIAL</h6>
                  <div class="p-2 rounded bg-white border border-light small text-dark mt-1 shadow-sm">
                    {{ paciente.initial_psychological_history.dx }}
                  </div>
                </div>

                <div class="mb-0 bg-light p-3 border rounded">
                  <h6 class="text-secondary fw-bold small"><i class="fas fa-tasks text-primary me-2"></i>PLAN DE TRATAMIENTO</h6>
                  <p class="small mb-0 text-dark" style="white-space: pre-wrap;">{{ paciente.initial_psychological_history.plan }}</p>
                </div>

              </div>
            </div>
          </div>
          
          <!-- Eval. Psiquiátrica Inicial -->
          <div class="accordion-item border-0" v-if="paciente.initial_psychiatric_history">
            <h2 class="accordion-header" id="headingPsychiatric">
              <button class="accordion-button collapsed bg-light text-success font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePsychiatric" aria-expanded="false" aria-controls="collapsePsychiatric">
                Eval. Psiquiátrica Inicial
                <span class="ms-3 text-muted small" style="font-weight: normal" v-if="paciente.initial_psychiatric_history.created_at">
                  - {{ formatDate(paciente.initial_psychiatric_history.created_at) }}
                </span>
              </button>
            </h2>
            <div id="collapsePsychiatric" class="accordion-collapse collapse" aria-labelledby="headingPsychiatric" data-bs-parent="#accordionInitialHistories">
              <div class="accordion-body px-4 py-4" style="background-color: #f8fdfa;">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <h6 class="text-secondary fw-bold small"><i class="fas fa-file-medical-alt text-success me-2"></i>ANTECEDENTES GENERALES</h6>
                    <p class="small mb-0 text-dark">{{ paciente.initial_psychiatric_history.general_antecedent }}</p>
                  </div>
                  <div class="col-md-6 mb-3">
                    <h6 class="text-secondary fw-bold small"><i class="fas fa-thermometer-half text-success me-2"></i>SIGNOS Y SÍNTOMAS PRINCIPALES</h6>
                    <p class="small mb-0 text-dark">{{ paciente.initial_psychiatric_history.main_signs_symptoms }}</p>
                  </div>
                  <div class="col-md-6 mb-3">
                    <h6 class="text-secondary fw-bold small"><i class="fas fa-disease text-success me-2"></i>ENFERMEDAD ACTUAL</h6>
                    <p class="small mb-0 text-dark">{{ paciente.initial_psychiatric_history.illness }}</p>
                  </div>
                  <div class="col-md-6 mb-3">
                    <h6 class="text-secondary fw-bold small"><i class="fas fa-brain text-success me-2"></i>EXAMEN MENTAL (APC)</h6>
                    <p class="small mb-0 text-dark">{{ paciente.initial_psychiatric_history.apc }}</p>
                  </div>
                  
                  <div class="col-12 mt-2">
                    <div class="row bg-white p-3 rounded border mx-0 mb-3 shadow-sm">
                      <div class="col-md-3 mb-2"><strong class="small text-muted d-block">Lenguaje</strong><span class="small text-dark">{{paciente.initial_psychiatric_history.languaje}}</span></div>
                      <div class="col-md-3 mb-2"><strong class="small text-muted d-block">Pensamiento</strong><span class="small text-dark">{{paciente.initial_psychiatric_history.thought}}</span></div>
                      <div class="col-md-3 mb-2"><strong class="small text-muted d-block">Afecto</strong><span class="small text-dark">{{paciente.initial_psychiatric_history.affect}}</span></div>
                      <div class="col-md-3 mb-2"><strong class="small text-muted d-block">Percepción</strong><span class="small text-dark">{{paciente.initial_psychiatric_history.percetion}}</span></div>
                      <div class="col-md-3 mb-2"><strong class="small text-muted d-block">Func. Superior</strong><span class="small text-dark">{{paciente.initial_psychiatric_history.superior_function}}</span></div>
                      <div class="col-md-3 mb-2"><strong class="small text-muted d-block">Abstracción</strong><span class="small text-dark">{{paciente.initial_psychiatric_history.abstraction}}</span></div>
                      <div class="col-md-3 mb-2"><strong class="small text-muted d-block">Conciencia</strong><span class="small text-dark">{{paciente.initial_psychiatric_history.conscience}}</span></div>
                      <div class="col-md-3 mb-2"><strong class="small text-muted d-block">Insight</strong><span class="small text-dark">{{paciente.initial_psychiatric_history.insight}}</span></div>
                    </div>
                  </div>

                  <div class="col-md-6 mb-3">
                    <h6 class="text-secondary fw-bold small"><i class="fas fa-exclamation-triangle text-success me-2"></i>PROBLEMAS DIAGNÓSTICOS</h6>
                    <p class="small mb-0 text-dark">{{ paciente.initial_psychiatric_history.diagnostic_problems }}</p>
                  </div>
                  <div class="col-md-6 mb-3">
                    <h6 class="text-secondary fw-bold small"><i class="fas fa-stethoscope text-success me-2"></i>DIAGNÓSTICO</h6>
                    <div class="p-2 rounded bg-white border border-light small text-dark shadow-sm">
                       {{ paciente.initial_psychiatric_history.diagnostic }}
                    </div>
                  </div>
                  <div class="col-12 mt-2">
                    <div class="bg-light p-3 border rounded text-dark">
                      <h6 class="text-secondary fw-bold small"><i class="fas fa-tasks text-success me-2"></i>PLAN DE TRATAMIENTO</h6>
                      <p class="small mb-0" style="white-space: pre-wrap;">{{ paciente.initial_psychiatric_history.plan }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h6 class="font-weight-bold mb-3 mt-4 text-dark px-2"><i class="fas fa-clipboard-list text-primary me-2"></i> Evoluciones de Seguimiento</h6>
        <div class="card border">
          <div class="card-body p-0">
            <div class="list-group list-group-flush">
              <div v-for="evo in paciente.medical_evolutions" :key="evo.id" class="list-group-item p-4">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <div class="d-flex align-items-center">
                    <div class="bg-light text-success border rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 40px; height: 40px;">
                      <i class="fas fa-file-medical"></i>
                    </div>
                    <div>
                      <h6 class="mb-0 font-weight-bold text-dark">{{ evo.professional ? evo.professional.name : 'Profesional Médico' }}</h6>
                      <small class="text-muted"><i class="far fa-clock me-1"></i> {{ formatDateTime(evo.date, evo.hora) }}</small>
                    </div>
                  </div>
                </div>
                
                <div class="mt-3 ms-2 ms-sm-5 ps-sm-2">
                  <p class="small text-dark mb-1"><strong>Diagnóstico y Resumen de Sesión:</strong></p>
                  <p class="small text-muted mb-3" style="white-space: pre-wrap;">{{ evo.content || evo.descripcion }}</p>
                  
                  <div v-if="evo.plan" class="p-3 bg-light rounded text-dark small border-start border-warning border-3 mb-3">
                    <strong class="text-warning"><i class="fas fa-stethoscope me-1"></i> Tratamiento / Plan:</strong><br/>
                    <span style="white-space: pre-wrap;">{{ evo.plan }}</span>
                  </div>
                </div>
              </div>

              <div v-if="!paciente.medical_evolutions || paciente.medical_evolutions.length == 0" class="p-4 text-center text-muted">
                Aún no cuenta con evoluciones de seguimiento cronológico.
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- TRIAJE -->
      <div class="tab-pane fade" id="triaje" role="tabpanel">
        <div class="row">
          <div class="col-12 mb-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
            <h5 class="card-title font-weight-bold mb-0"><i class="fas fa-clipboard-check text-primary me-2"></i> Registro de Triajes</h5>
            <div class="d-flex gap-2">
              <button class="btn btn-info btn-sm rounded-pill shadow-sm px-3 text-white" data-bs-toggle="modal" data-bs-target="#modalVerAutoTriaje">
                <i class="fas fa-eye me-1"></i> Ver autotriaje
              </button>
              <button class="btn btn-primary btn-sm rounded-pill shadow-sm px-3" data-bs-toggle="modal" data-bs-target="#modalTriaje" @click="$emit('abrirTriaje', paciente)">
                <i class="fa-solid fa-lungs me-1"></i> Nuevo Triaje
              </button>
            </div>
          </div>
          
          <div class="col-12 mb-4">
            <div v-if="paciente.triajes && paciente.triajes.length > 0">
              <div class="card border-0 shadow-sm mb-3 rounded-lg" v-for="tr in paciente.triajes" :key="tr.id" style="background-color: #fcfcfc;">
                <div class="card-body p-4">
                  <!-- HEADER -->
                  <div class="d-flex mb-4">
                    <div class="rounded-circle bg-light text-info border d-flex justify-content-center align-items-center me-3" style="width: 45px; height: 45px; min-width: 45px;">
                      <i class="fas fa-thermometer-half fs-5"></i>
                    </div>
                    <div>
                      <h6 class="font-weight-bold mb-1 text-dark">Triaje {{ getTriajeReferencia(tr.referencia) }}</h6>
                      <div class="small text-muted">
                        <span>{{ formatDateWithTime(tr.fecha || tr.created_at) }}</span>
                        <span v-if="tr.responsable" class="mx-1">&middot;</span>
                        <span v-if="tr.responsable">Int. {{ tr.responsable }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- BODY COLUMNS -->
                  <div class="row mb-3">
                    <!-- SIGNOS VITALES -->
                    <div class="col-md-4 mb-3 mb-md-0">
                      <h6 class="small text-muted font-weight-bold text-uppercase mb-3" style="letter-spacing: 0.5px;">Signos Vitales</h6>
                      <div class="d-flex flex-column gap-2 small">
                        <div class="d-flex align-items-center" v-if="tr.pa">
                          <i class="far fa-heart text-danger me-2" style="width: 16px;"></i> 
                          <span class="text-muted me-1">PA:</span> <strong class="text-dark">{{ tr.pa }}</strong>
                        </div>
                        <div class="d-flex align-items-center" v-if="tr.fc">
                          <span class="text-muted fw-bold me-2" style="width: 16px;">FC</span> 
                          <span class="text-muted me-1">FC:</span> <strong class="text-dark">{{ tr.fc }} <span class="fw-normal text-muted">bpm</span></strong>
                        </div>
                        <div class="d-flex align-items-center" v-if="tr.fr">
                          <span class="text-muted fw-bold me-2" style="width: 16px;">FR</span> 
                          <span class="text-muted me-1">FR:</span> <strong class="text-dark">{{ tr.fr }} <span class="fw-normal text-muted">rpm</span></strong>
                        </div>
                        <div class="d-flex align-items-center" v-if="tr.t">
                          <i class="fas fa-temperature-low text-info me-2" style="width: 16px;"></i> 
                          <span class="text-muted me-1">Temp:</span> <strong class="text-dark">{{ tr.t }} <span class="fw-normal text-muted">°C</span></strong>
                        </div>
                        <div class="d-flex align-items-center" v-if="tr.saturacion">
                          <i class="fas fa-wind text-primary me-2" style="width: 16px;"></i> 
                          <span class="text-muted me-1">SpO2:</span> <strong class="text-dark">{{ tr.saturacion }} <span class="fw-normal text-muted">%</span></strong>
                        </div>
                        <div class="d-flex align-items-center" v-if="tr.peso">
                          <span class="text-muted fw-bold me-2" style="width: 16px;">P.</span> 
                          <span class="text-muted me-1">Peso:</span> <strong class="text-dark">{{ tr.peso }}</strong>
                        </div>
                        <div class="d-flex align-items-center" v-if="tr.talla">
                          <span class="text-muted fw-bold me-2" style="width: 16px;">T.</span> 
                          <span class="text-muted me-1">Talla:</span> <strong class="text-dark">{{ tr.talla }}</strong>
                        </div>
                      </div>
                    </div>

                    <!-- EVALUACION -->
                    <div class="col-md-4 mb-3 mb-md-0">
                      <h6 class="small text-muted font-weight-bold text-uppercase mb-3" style="letter-spacing: 0.5px;">Evaluación y Pruebas</h6>
                      <div class="d-flex flex-column gap-2 small">
                        <div v-if="tr.prioridad">
                          <span class="text-muted d-block mb-1">Prioridad:</span>
                          <span class="badge" :class="getPrioridadClass(tr.prioridad)">{{ getPrioridadText(tr.prioridad) }}</span>
                        </div>
                        <div v-if="tr.pruebas" class="mt-2">
                          <span class="text-muted d-block mb-1">Pruebas Aplicadas:</span>
                          <strong class="text-dark">{{ tr.pruebas }}</strong>
                        </div>
                      </div>
                    </div>

                    <!-- CLINICA -->
                    <div class="col-md-4">
                      <h6 class="small text-muted font-weight-bold text-uppercase mb-3" style="letter-spacing: 0.5px;">Clínica</h6>
                      <div class="d-flex flex-column gap-2 small">
                        <div v-if="tr.sintomatologia">
                          <span class="text-muted me-1">Sintomatología:</span>
                          <span class="text-dark">{{ tr.sintomatologia }}</span>
                        </div>
                        <div v-if="tr.antecedentes">
                          <span class="text-muted me-1">Antecedentes:</span>
                          <span class="text-dark">{{ tr.antecedentes }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- OBSERVACIONES & MOTIVO -->
                  <div class="mt-4">
                    <p class="small text-dark mb-3" v-if="tr.motivo">
                      <span class="text-muted me-1">Motivo:</span> {{ tr.motivo }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="alert alert-light text-center border py-5 mb-4">
              <i class="fas fa-clipboard text-muted mb-3 fs-1 d-block"></i>
              <h6 class="text-muted">No existen registros de triaje para este paciente.</h6>
            </div>
          </div>
          
          <div class="col-12">
            <h5 class="card-title font-weight-bold mb-3 mt-2"><i class="fas fa-traffic-light text-warning me-2"></i> Seguridad / Semáforo</h5>
            <div class="card border">
              <div class="card-body p-4">
                <ul class="list-group list-group-flush" v-if="paciente.semaforo_estados && paciente.semaforo_estados.length > 0">
                  <li class="list-group-item px-0" v-for="sem in paciente.semaforo_estados.slice(0, 5)" :key="sem.id">
                    <strong>{{ formatDate(sem.registro) }}</strong>
                    <p class="mb-0 small mt-1">Código: {{ sem.codigo }} - <span class="text-muted">{{ sem.observaciones }}</span></p>
                  </li>
                </ul>
                <p v-else class="text-muted small mb-0">Sin registros en el semáforo.</p>
              </div>
            </div>
          </div>

          <!-- PLANES DE SEGURIDAD -->
          <div class="col-12 mt-4">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5 class="card-title font-weight-bold mb-0">
                <i class="fas fa-shield-alt text-danger me-2"></i> Plan de Seguridad
              </h5>
              <div class="d-flex gap-2">
                <button class="btn btn-primary btn-sm rounded-pill shadow-sm px-3 fw-bold" data-bs-toggle="modal" data-bs-target="#modalPlanSeguridad" @click="abrirNuevoPlan">
                  <i class="fas fa-plus me-1"></i> Nuevo Plan
                </button>
              </div>
            </div>

            <div v-if="paciente.planes_seguridad && paciente.planes_seguridad.length > 0">
              <div class="card border-0 shadow-sm mb-4 rounded-lg" v-for="plan in paciente.planes_seguridad" :key="plan.id" style="background-color: #fcfcfc;">
                <div class="card-body p-4">
                  <!-- Header del Plan -->
                  <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                    <div class="d-flex align-items-center">
                      <div class="rounded-circle bg-danger bg-opacity-10 d-flex justify-content-center align-items-center me-3" style="width: 45px; height: 45px; min-width: 45px;">
                        <i class="fas fa-shield-alt fs-5"></i>
                      </div>
                      <div>
                        <h6 class="font-weight-bold mb-1 text-dark">Plan de Seguridad - {{ paciente.name }} {{ paciente.nombres }}</h6>
                        <div class="small text-muted">
                          Creado: {{ formatDate(plan.fecha) }}
                        </div>
                      </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                      <button class="btn btn-light btn-sm rounded shadow-sm border text-muted" @click="descargarPlanPDF(plan)">
                        <i class="fas fa-download me-1"></i> Descargar PDF
                      </button>
                      <button class="btn btn-light btn-sm rounded shadow-sm border text-dark" data-bs-toggle="modal" data-bs-target="#modalVerPlanSeguridad" @click="verPlanSeguridad(plan)">
                        <i class="fas fa-eye me-1"></i> Ver Completo
                      </button>
                    </div>
                  </div>

                  <!-- Columnas del Plan -->
                  <div class="row g-3">
                    <!-- Señales de Advertencia -->
                    <div class="col-md-4">
                      <div class="bg-white p-3 rounded border h-100 shadow-sm">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          <h6 class="small text-muted font-weight-bold text-uppercase mb-0" style="letter-spacing: 0.5px;">
                            <i class="fas fa-exclamation-triangle text-warning me-1"></i> Señales de advertencia
                          </h6>
                          <span class="badge bg-light text-muted rounded-circle">{{ countItems(plan.senales_advertencia) }}</span>
                        </div>
                        <ul class="list-unstyled small text-dark mb-0 ps-2" style="list-style-type: disc;">
                          <li v-for="(item, idx) in previewItems(plan.senales_advertencia)" :key="idx" class="mb-1 text-truncate">{{ item }}</li>
                        </ul>
                        <div v-if="countItems(plan.senales_advertencia) > 3" class="small text-primary mt-2">
                          +{{ countItems(plan.senales_advertencia) - 3 }} más...
                        </div>
                      </div>
                    </div>

                    <!-- Estrategias de Afrontamiento -->
                    <div class="col-md-4">
                      <div class="bg-white p-3 rounded border h-100 shadow-sm">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          <h6 class="small text-muted font-weight-bold text-uppercase mb-0" style="letter-spacing: 0.5px;">
                            <i class="fas fa-brain text-primary me-1"></i> Estrategias de afrontamiento
                          </h6>
                          <span class="badge bg-light text-muted rounded-circle">{{ countItems(plan.estrategias) }}</span>
                        </div>
                        <ul class="list-unstyled small text-dark mb-0 ps-2" style="list-style-type: disc;">
                          <li v-for="(item, idx) in previewItems(plan.estrategias)" :key="idx" class="mb-1 text-truncate">{{ item }}</li>
                        </ul>
                        <div v-if="countItems(plan.estrategias) > 3" class="small text-primary mt-2">
                          +{{ countItems(plan.estrategias) - 3 }} más...
                        </div>
                      </div>
                    </div>

                    <!-- Razones para vivir -->
                    <div class="col-md-4">
                      <div class="bg-white p-3 rounded border h-100 shadow-sm">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                          <h6 class="small text-muted font-weight-bold text-uppercase mb-0" style="letter-spacing: 0.5px;">
                            <i class="far fa-smile text-success me-1"></i> Razones para vivir
                          </h6>
                          <span class="badge bg-light text-muted rounded-circle">{{ countItems(plan.razones_vivir) }}</span>
                        </div>
                        <ul class="list-unstyled small text-dark mb-0 ps-2" style="list-style-type: disc;">
                          <li v-for="(item, idx) in previewItems(plan.razones_vivir)" :key="idx" class="mb-1 text-truncate">{{ item }}</li>
                        </ul>
                        <div v-if="countItems(plan.razones_vivir) > 3" class="small text-primary mt-2">
                          +{{ countItems(plan.razones_vivir) - 3 }} más...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="alert alert-light text-center border py-4 mb-4">
              <i class="fas fa-shield-alt text-muted mb-3 fs-2 d-block"></i>
              <h6 class="text-muted">No existen planes de seguridad registrados para este paciente.</h6>
            </div>
          </div>
        </div>
      </div>

      <!-- FICHA DE SEGUIMIENTO -->
      <div class="tab-pane fade" id="seguimiento" role="tabpanel">
        <div class="row" v-if="fichaView === 'botones'">
          <div class="col-12 mb-4">
            <h5 class="card-title font-weight-bold mb-1"><i class="fas fa-clipboard-list text-primary me-2"></i> Ficha de Seguimiento</h5>
            <p class="text-muted small mb-4">Registre el plan de tratamiento recomendado al paciente.</p>
            
            <div class="row g-4">
              <div class="col-md-6">
                <div class="card h-100 border rounded-lg hover-shadow transition" style="cursor: pointer;" @click="fichaView = 'nueva'">
                  <div class="card-body text-center p-5">
                    <div class="rounded-circle bg-white bg-opacity-10 text-primary d-flex justify-content-center align-items-center mx-auto mb-3" style="width: 60px; height: 60px;">
                      <i class="fas fa-plus fs-4"></i>
                    </div>
                    <h5 class="font-weight-bold text-dark mb-2">Nueva Ficha</h5>
                    <p class="text-muted small mb-0">Crear un nuevo plan de seguimiento</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card h-100 border rounded-lg hover-shadow transition" style="cursor: pointer;" @click="fichaView = 'historica'">
                  <div class="card-body text-center p-5">
                    <div class="rounded-circle bg-light text-secondary border d-flex justify-content-center align-items-center mx-auto mb-3" style="width: 60px; height: 60px;">
                      <i class="fas fa-file-alt fs-4"></i>
                    </div>
                    <h5 class="font-weight-bold text-dark mb-2">Ficha Histórica</h5>
                    <p class="text-muted small mb-0">{{ paciente.fichas_seguimiento ? paciente.fichas_seguimiento.length : 0 }} fichas registradas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="fichaView === 'nueva'">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="font-weight-bold mb-0">Nueva Ficha de Seguimiento</h5>
            <button class="btn btn-light btn-sm rounded shadow-sm border" @click="fichaView = 'botones'">
              Cancelar
            </button>
          </div>

          <div class="card border-0 shadow-sm rounded-lg mb-4" style="background-color: #fcfcfc;">
            <div class="card-body p-4">
              <form @submit.prevent="guardarFichaSeguimiento">
                <!-- I. Seguimiento de Citas -->
                <h6 class="font-weight-bold small mb-3">I. Seguimiento de Citas <span class="text-danger">*</span></h6>
                <div class="mb-4 bg-white p-3 border rounded shadow-sm">
                  <label class="form-label small text-muted">Tipo de Paquete</label>
                  <select class="form-select form-select-sm" v-model="nuevaFicha.tipo" required>
                    <option value="" disabled>Seleccionar paquete...</option>
                    <option value="Paquete de sesiones">Paquete de sesiones</option>
                    <option value="Citas individuales">Citas individuales</option>
                    <option value="Evaluación">Evaluación</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <!-- II. Frecuencia -->
                <h6 class="font-weight-bold small mb-3">II. Frecuencia <span class="text-danger">*</span></h6>
                <div class="mb-4 bg-white p-3 border rounded shadow-sm">
                  <div class="mb-3">
                    <select class="form-select form-select-sm" v-model="nuevaFicha.frecuencia" required>
                      <option value="" disabled>Seleccionar frecuencia...</option>
                      <option value="1 vez por semana">1 vez por semana</option>
                      <option value="Quincenal">Quincenal</option>
                      <option value="Mensual">Mensual</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label class="form-label small text-muted">Motivo</label>
                    <textarea class="form-control form-control-sm" rows="2" placeholder="Motivo de la frecuencia seleccionada..." v-model="nuevaFicha.motivo" required></textarea>
                  </div>
                </div>

                <!-- III. Profesional -->
                <h6 class="font-weight-bold small mb-3">III. Profesional <span class="text-danger">*</span></h6>
                <div class="mb-4 bg-white p-3 border rounded shadow-sm d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <div class="d-flex align-items-center">
                    <i class="fas fa-user-md text-success me-2"></i>
                    <select class="form-select form-select-sm border-0 bg-transparent fw-bold text-dark w-auto" v-model="nuevaFicha.professional_id" required>
                      <option value="" disabled>Seleccionar profesional...</option>
                      <option v-for="prof in professionalsList" :key="prof.id" :value="prof.id">{{ prof.name }}</option>
                    </select>
                  </div>
                  <span class="badge bg-light text-muted border">Asignado automáticamente</span>
                </div>

                <!-- IV. Interconsulta -->
                <h6 class="font-weight-bold small mb-3 d-flex align-items-center">IV. Interconsulta <span class="text-muted ms-1" style="font-weight: 400; font-size: 0.8rem;">(Opcional)</span></h6>
                <div class="mb-4 bg-white p-3 border rounded shadow-sm">
                  <div v-for="(item, index) in nuevaFicha.interconsultas" :key="index" class="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                    <div class="small">
                      <strong class="text-dark">{{ item.tipo }}</strong> <span class="text-muted mx-1">-</span> <span>{{ getProfessionalName(item.professional_id) }}</span>
                      <p class="text-muted mb-0 mt-1" v-if="item.motivo">Motivo: {{ item.motivo }}</p>
                    </div>
                    <button type="button" class="btn btn-link text-danger p-0" @click="eliminarInterconsulta(index)"><i class="far fa-trash-alt"></i></button>
                  </div>

                  <div class="row g-2 mb-3">
                    <div class="col-md-6">
                      <select class="form-select form-select-sm" v-model="tempInterconsulta.tipo">
                        <option value="" disabled>Especialidad...</option>
                        <option value="Psicología">Psicología</option>
                        <option value="Psiquiatría">Psiquiatría</option>
                        <option value="Neurología">Neurología</option>
                        <option value="Terapia de Lenguaje">Terapia de Lenguaje</option>
                        <option value="Terapia Ocupacional">Terapia Ocupacional</option>
                        <option value="Nutrición">Nutrición</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <select class="form-select form-select-sm" v-model="tempInterconsulta.professional_id">
                        <option value="" disabled>Profesional...</option>
                        <option v-for="prof in professionalsList" :key="prof.id" :value="prof.id">{{ prof.name }}</option>
                      </select>
                    </div>
                    <div class="col-12 mt-2">
                      <textarea class="form-control form-control-sm" rows="1" placeholder="Motivo de la interconsulta..." v-model="tempInterconsulta.motivo"></textarea>
                    </div>
                  </div>
                  <button type="button" class="btn btn-primary btn-sm rounded-pill px-3" @click="agregarInterconsulta" :disabled="!tempInterconsulta.tipo || !tempInterconsulta.professional_id">Agregar</button>
                  <button type="button" class="btn btn-light btn-sm rounded-pill px-3 ms-2" @click="limpiarInterconsulta" v-if="tempInterconsulta.tipo || tempInterconsulta.professional_id">Cancelar</button>
                </div>

                <!-- V. Recomendaciones -->
                <h6 class="font-weight-bold small mb-3 d-flex align-items-center">V. Recomendaciones <span class="text-muted ms-1" style="font-weight: 400; font-size: 0.8rem;">(Opcional)</span></h6>
                <div class="mb-4 bg-white p-3 border rounded shadow-sm">
                  
                  <div class="mb-3">
                    <label class="d-block small text-dark fw-bold mb-2">Grupo De Habilidades</label>
                    <div class="d-flex flex-wrap gap-2">
                      <button type="button" class="btn btn-sm rounded-pill px-3 border" :class="isSelectedRecomendacion('Grupo De Habilidades - Niños/Adolescentes') ? 'btn-primary bg-opacity-10 text-primary border-primary' : 'bg-white text-muted'" @click="toggleRecomendacion('Grupo De Habilidades - Niños/Adolescentes')">
                        <i class="fas fa-check-circle me-1" v-if="isSelectedRecomendacion('Grupo De Habilidades - Niños/Adolescentes')"></i>
                        <i class="far fa-circle me-1" v-else></i> Niños/Adolescentes
                      </button>
                      <button type="button" class="btn btn-sm rounded-pill px-3 border" :class="isSelectedRecomendacion('Grupo De Habilidades - Adultos') ? 'btn-primary bg-opacity-10 text-primary border-primary' : 'bg-white text-muted'" @click="toggleRecomendacion('Grupo De Habilidades - Adultos')">
                        <i class="fas fa-check-circle me-1" v-if="isSelectedRecomendacion('Grupo De Habilidades - Adultos')"></i>
                        <i class="far fa-circle me-1" v-else></i> Adultos
                      </button>
                      <button type="button" class="btn btn-sm rounded-pill px-3 border" :class="isSelectedRecomendacion('Grupo De Habilidades - Terapia Ocupacional') ? 'btn-primary bg-opacity-10 text-primary border-primary' : 'bg-white text-muted'" @click="toggleRecomendacion('Grupo De Habilidades - Terapia Ocupacional')">
                        <i class="fas fa-check-circle me-1" v-if="isSelectedRecomendacion('Grupo De Habilidades - Terapia Ocupacional')"></i>
                        <i class="far fa-circle me-1" v-else></i> Terapia Ocupacional
                      </button>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="d-block small text-dark fw-bold mb-2">Talleres</label>
                    <div class="d-flex flex-wrap gap-2">
                      <button type="button" class="btn btn-sm rounded-pill px-3 border" :class="isSelectedRecomendacion('Talleres - Niños/Adolescentes') ? 'btn-primary bg-opacity-10 text-primary border-primary' : 'bg-white text-muted'" @click="toggleRecomendacion('Talleres - Niños/Adolescentes')">
                        <i class="fas fa-check-circle me-1" v-if="isSelectedRecomendacion('Talleres - Niños/Adolescentes')"></i>
                        <i class="far fa-circle me-1" v-else></i> Niños/Adolescentes
                      </button>
                      <button type="button" class="btn btn-sm rounded-pill px-3 border" :class="isSelectedRecomendacion('Talleres - Adultos') ? 'btn-primary bg-opacity-10 text-primary border-primary' : 'bg-white text-muted'" @click="toggleRecomendacion('Talleres - Adultos')">
                        <i class="fas fa-check-circle me-1" v-if="isSelectedRecomendacion('Talleres - Adultos')"></i>
                        <i class="far fa-circle me-1" v-else></i> Adultos
                      </button>
                      <button type="button" class="btn btn-sm rounded-pill px-3 border" :class="isSelectedRecomendacion('Talleres - Terapia Ocupacional') ? 'btn-primary bg-opacity-10 text-primary border-primary' : 'bg-white text-muted'" @click="toggleRecomendacion('Talleres - Terapia Ocupacional')">
                        <i class="fas fa-check-circle me-1" v-if="isSelectedRecomendacion('Talleres - Terapia Ocupacional')"></i>
                        <i class="far fa-circle me-1" v-else></i> Terapia Ocupacional
                      </button>
                    </div>
                  </div>

                  <div>
                    <label class="d-block small text-dark fw-bold mb-2">Otros</label>
                    <div class="d-flex flex-wrap gap-2">
                      <button type="button" class="btn btn-sm rounded-pill px-3 border" :class="isSelectedRecomendacion('Otros - Niños/Adolescentes') ? 'btn-primary bg-opacity-10 text-primary border-primary' : 'bg-white text-muted'" @click="toggleRecomendacion('Otros - Niños/Adolescentes')">
                        <i class="fas fa-check-circle me-1" v-if="isSelectedRecomendacion('Otros - Niños/Adolescentes')"></i>
                        <i class="far fa-circle me-1" v-else></i> Niños/Adolescentes
                      </button>
                      <button type="button" class="btn btn-sm rounded-pill px-3 border" :class="isSelectedRecomendacion('Otros - Adultos') ? 'btn-primary bg-opacity-10 text-primary border-primary' : 'bg-white text-muted'" @click="toggleRecomendacion('Otros - Adultos')">
                        <i class="fas fa-check-circle me-1" v-if="isSelectedRecomendacion('Otros - Adultos')"></i>
                        <i class="far fa-circle me-1" v-else></i> Adultos
                      </button>
                      <button type="button" class="btn btn-sm rounded-pill px-3 border" :class="isSelectedRecomendacion('Otros - Terapia Ocupacional') ? 'btn-primary bg-opacity-10 text-primary border-primary' : 'bg-white text-muted'" @click="toggleRecomendacion('Otros - Terapia Ocupacional')">
                        <i class="fas fa-check-circle me-1" v-if="isSelectedRecomendacion('Otros - Terapia Ocupacional')"></i>
                        <i class="far fa-circle me-1" v-else></i> Terapia Ocupacional
                      </button>
                    </div>
                  </div>

                </div>

                <div class="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
                  <button type="button" class="btn btn-light border px-4" @click="fichaView = 'botones'">Cancelar</button>
                  <button type="submit" class="btn btn-primary px-4" :disabled="savingFicha">
                    <span v-if="savingFicha" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Guardar Ficha
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div v-if="fichaView === 'historica'">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="font-weight-bold mb-0">Ficha Histórica</h5>
            <button class="btn btn-light btn-sm rounded shadow-sm border" @click="fichaView = 'botones'">
              Volver
            </button>
          </div>

          <div v-if="paciente.fichas_seguimiento && paciente.fichas_seguimiento.length > 0">
            <div class="card border mb-3 rounded-lg hover-shadow transition" v-for="(ficha, index) in paciente.fichas_seguimiento" :key="ficha.id">
              <div class="card-body p-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div class="d-flex align-items-center">
                  <div class="rounded bg-light text-secondary border d-flex justify-content-center align-items-center me-3" style="width: 45px; height: 45px;">
                    <i class="fas fa-file-alt"></i>
                  </div>
                  <div>
                    <h6 class="font-weight-bold text-dark mb-1">Ficha {{ paciente.fichas_seguimiento.length - index }}</h6>
                    <div class="small text-muted">
                      {{ formatDate(ficha.fecha) }} - {{ ficha.tipo }} - {{ ficha.frecuencia }} - {{ getProfessionalName(ficha.professional_id) }}
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center gap-3">
                  <span class="badge" :class="index === 0 ? 'bg-success bg-opacity-10 border border-success border-opacity-25' : 'bg-secondary bg-opacity-10 border border-secondary border-opacity-25'" style="font-size: 0.75rem; border-radius: 20px; padding: 0.35em 0.8em;">
                    {{ index === 0 ? 'Activo' : 'Culminado' }}
                  </span>
                  <button class="btn btn-sm btn-light border text-primary" @click="verDetalleFicha(ficha)">
                    <i class="fas fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="alert alert-light border text-center p-5 rounded-lg">
            <i class="fas fa-file-alt text-muted mb-3 fs-1"></i>
            <h6 class="text-muted">No hay fichas históricas registradas para este paciente.</h6>
          </div>
        </div>
      </div>

      <!-- RECETAS -->
      <div class="tab-pane fade" id="recetas" role="tabpanel">
        
        <!-- Tabs for Recetas and Ordenes -->
        <ul class="nav nav-pills mb-4" id="recetasOrdenesTabs" role="tablist">
          <li class="nav-item me-2" role="presentation">
            <button class="nav-link rounded-pill px-4 small border shadow-sm" type="button" style="font-weight: 500;" @click="activePill = 'recetas'" :class="activePill === 'recetas' ? 'bg-primary text-white active' : 'bg-white text-dark'">
              <i class="fas fa-link me-1"></i> Recetas Médicas
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded-pill px-4 small border shadow-sm" type="button" style="font-weight: 500;" @click="activePill = 'ordenes'" :class="activePill === 'ordenes' ? 'bg-primary text-white active' : 'bg-white text-muted'">
              <i class="fas fa-file-invoice me-1"></i> Órdenes Médicas
            </button>
          </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">
          <!-- Recetas Médicas Tab -->
          <div v-show="activePill === 'recetas'">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h5 class="mb-0 font-weight-bold d-flex align-items-center text-dark">
                <i class="fas fa-link text-warning me-2" style="transform: rotate(45deg);"></i> Recetas Médicas
              </h5>
              <button class="btn btn-primary rounded-pill px-3 shadow-sm btn-sm">
                <i class="fas fa-plus me-1"></i> Nueva Receta
              </button>
            </div>

            <div v-if="paciente.prescriptions && paciente.prescriptions.length > 0">
              <div v-for="receta in paciente.prescriptions" :key="receta.id" class="card border border-light shadow-sm mb-4" style="border-radius: 12px; overflow: hidden;">
                <div class="card-body p-4 bg-white">
                  <div class="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
                    <div class="d-flex align-items-center">
                      <div class="rounded-circle d-flex justify-content-center align-items-center me-3 shadow-sm" style="width: 45px; height: 45px; background-color: #fff4e6; color: #ff8c00;">
                        <i class="fas fa-capsules fs-5"></i>
                      </div>
                      <div>
                        <h6 class="mb-0 font-weight-bold text-dark fs-5">Receta Médica</h6>
                        <div class="small text-muted mt-1">
                          {{ formatDate(receta.created_at) }} &middot; {{ receta.professional ? receta.professional.name : 'Dr.' }} <span v-if="receta.professional && (receta.professional.cmp || receta.professional.rne)">- CMP {{ receta.professional.cmp || '--' }} / RNE {{ receta.professional.rne || '--' }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                      <span class="badge bg-success bg-opacity-10 rounded-pill px-3 py-1 border border-success border-opacity-25" style="font-weight: 500;">Vigente</span>
                      <a :href="`/api/pdf/${receta.id}?token=${$token}`" target="_blank" class="btn btn-light btn-sm rounded text-muted shadow-sm border"><i class="fas fa-print"></i></a>
                      <a :href="`/api/pdf/${receta.id}?token=${$token}`" download target="_blank" class="btn btn-light btn-sm rounded text-muted shadow-sm border"><i class="fas fa-download"></i></a>
                    </div>
                  </div>
                  
                  <div class="text-muted small mb-3">
                    Diagnóstico: <span v-if="paciente.initial_psychiatric_history && paciente.initial_psychiatric_history.diagnostic">{{ getCieNames(paciente.initial_psychiatric_history.diagnostic) }}</span><span v-else>Evaluación médica general</span>
                  </div>

                  <div v-if="receta.kairos && receta.kairos.length > 0" class="d-flex flex-column gap-2 mb-3">
                    <div v-for="med in receta.kairos" :key="med.id" class="p-3 rounded" style="background-color: #fcfcfc; border: 1px solid #f0f0f0;">
                      <div class="d-flex align-items-center mb-1">
                        <strong class="text-dark me-2">{{ med.nombre }}</strong>
                        <span class="badge bg-warning bg-opacity-10 rounded-pill px-2 border border-warning border-opacity-25" style="font-size: 0.75rem;">{{ med.concentracion || med.presentacion || 'Dosis' }}</span>
                      </div>
                      <div class="small text-muted mb-2">
                        {{ med.pivot.amount || '' }} <span v-if="med.pivot.indications">- {{ med.pivot.indications }}</span>
                      </div>
                      <div class="small text-primary fst-italic" style="color: #0d6efd;" v-if="med.pivot.way">
                        <i class="fas fa-exclamation-triangle text-warning me-1"></i>
                        {{ med.pivot.way }}
                      </div>
                    </div>
                  </div>
                  <div v-else class="p-3 rounded mb-3 text-muted small" style="background-color: #fcfcfc; border: 1px solid #f0f0f0;">
                    Medicamentos no especificados en la receta digital.
                  </div>

                  <div class="small text-muted mt-2">
                    Válida hasta: <strong class="text-dark">{{ formatDate(receta.effective_date) }}</strong>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="alert alert-light border text-center p-5">
              <i class="fas fa-capsules text-muted mb-3 fs-1"></i>
              <h6 class="text-muted">No hay recetas registradas</h6>
            </div>
          </div>

          <!-- Órdenes Médicas Tab -->
          <div v-show="activePill === 'ordenes'">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h5 class="mb-0 font-weight-bold d-flex align-items-center text-dark">
                <i class="fas fa-file-invoice text-primary me-2"></i> Órdenes Médicas
              </h5>
            </div>

            <div v-if="allMedicalExams && allMedicalExams.length > 0">
              <div class="table-responsive">
                <table class="table table-hover align-middle">
                  <thead class="bg-light">
                    <tr>
                      <th class="border-0 rounded-start">Fecha</th>
                      <th class="border-0">Examen</th>
                      <th class="border-0">Tipo</th>
                      <th class="border-0">Doctor</th>
                      <th class="border-0 rounded-end text-end">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(examData, idx) in allMedicalExams" :key="idx">
                      <td>{{ formatDate(examData.date) }}</td>
                      <td class="fw-bold">{{ examData.exam.name }}</td>
                      <td>
                        <span class="badge bg-light text-dark border">{{ examData.exam.type === 1 ? 'Laboratorio' : (examData.exam.type === 2 ? 'Imagenología' : 'Otros') }}</span>
                      </td>
                      <td class="text-muted small">{{ examData.doctor }}</td>
                      <td class="text-end">
                        <a :href="getExamPdfUrl(examData)" target="_blank" class="btn btn-sm btn-light border text-primary">
                          <i class="fas fa-print"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div v-else class="alert alert-light border text-center p-5">
              <i class="fas fa-file-medical text-muted mb-3 fs-1"></i>
              <h6 class="text-muted">No hay órdenes de exámenes registradas</h6>
            </div>
          </div>
        </div>

      </div>

      <!-- PRUEBAS PSICOLOGICAS -->
      <div class="tab-pane fade" id="pruebas" role="tabpanel">
        <div class="row">
          <div class="col-12 mb-3">
             <h5 class="card-title font-weight-bold"><i class="fas fa-brain text-primary me-2"></i> Pruebas Psicológicas Aplicadas</h5>
          </div>
          <div class="col-md-6 col-lg-4 mb-4" v-for="(t, index) in allTests" :key="t.testName + '_' + (t.id || index)">
            <div class="card h-100 border-0 shadow-sm" style="border-radius: 10px; overflow: hidden;">
              <div class="card-header bg-primary text-white border-0 py-3">
                <div class="d-flex justify-content-between align-items-center">
                  <h6 class="mb-0 font-weight-bold">{{ t.testName }}</h6>
                  <i class="fas fa-file-signature opacity-50"></i>
                </div>
              </div>
              <div class="card-body bg-light position-relative">
                <div class="mb-3">
                  <span class="text-muted small d-block mb-1"><i class="far fa-calendar-alt me-1"></i> Fecha de Aplicación</span>
                  <strong class="text-dark">{{ formatDate(t.created_at || t.fecha) }}</strong>
                </div>
                
                <div v-if="t.score || t.total || t.result" class="mb-0">
                  <span class="text-muted small d-block mb-1"><i class="fas fa-star me-1 text-warning"></i> Puntuación General</span>
                  <span class="badge bg-success rounded-pill px-3 py-2" style="font-size: 0.9rem;">
                    {{ t.score || t.total || t.result }} pts
                  </span>
                </div>
                
                <!-- Background decoration -->
                <i class="fas fa-clipboard-check position-absolute opacity-10 text-primary" style="bottom: -15px; right: -15px; font-size: 5rem;"></i>
              </div>
              <div class="card-footer bg-white border-top-0 py-3 text-center">
                <button class="btn btn-sm btn-outline-primary w-100 rounded-pill"><i class="fas fa-eye me-1"></i> Ver Detalles Completos</button>
              </div>
            </div>
          </div>
          
          <div v-if="allTests.length === 0" class="col-12">
            <div class="alert alert-light text-center border p-5">
              <i class="fas fa-folder-open text-muted mb-3" style="font-size: 3rem;"></i>
              <h6 class="text-muted">No hay pruebas aplicadas en el registro de este paciente.</h6>
            </div>
          </div>
        </div>
      </div>

      <!-- DOCUMENTOS -->
      <div class="tab-pane fade" id="documentos" role="tabpanel">
        <div class="d-flex justify-content-between align-items-center mb-4 mt-2">
          <div>
            <h5 class="mb-0 font-weight-bold d-flex align-items-center text-dark">
              <i class="fas fa-paperclip text-primary me-2"></i> Documentos Adjuntos
            </h5>
            <p class="text-muted small mb-0 mt-1">Órdenes de examen, resultados y otros documentos</p>
          </div>
          <button class="btn btn-primary rounded px-3 shadow-sm" data-bs-toggle="modal" data-bs-target="#modalSubirDocumento">
            <i class="fas fa-upload me-1"></i> Subir Documento
          </button>
        </div>

        <!-- Filtros -->
        <div class="d-flex flex-wrap gap-2 mb-4">
          <button type="button" class="btn btn-sm rounded-pill px-3" :class="filtroDocumento === 'Todos' ? 'btn-primary' : 'btn-light border text-muted'" @click.prevent="filtroDocumento = 'Todos'">Todos</button>
          <button type="button" class="btn btn-sm rounded-pill px-3" :class="filtroDocumento === 'orden' ? 'btn-light bg-white border text-dark' : 'btn-light border text-muted'" @click.prevent="filtroDocumento = 'orden'">Órdenes</button>
          <button type="button" class="btn btn-sm rounded-pill px-3" :class="filtroDocumento === 'resultado' ? 'btn-light bg-white border text-dark' : 'btn-light border text-muted'" @click.prevent="filtroDocumento = 'resultado'">Resultados</button>
          <button type="button" class="btn btn-sm rounded-pill px-3" :class="filtroDocumento === 'referencias' ? 'btn-light bg-white border text-dark' : 'btn-light border text-muted'" @click.prevent="filtroDocumento = 'referencias'">Referencias</button>
          <button type="button" class="btn btn-sm rounded-pill px-3" :class="filtroDocumento === 'consentimiento' ? 'btn-light bg-white border text-dark' : 'btn-light border text-muted'" @click.prevent="filtroDocumento = 'consentimiento'">Consentimientos</button>
          <button type="button" class="btn btn-sm rounded-pill px-3" :class="filtroDocumento === 'recetas' ? 'btn-light bg-white border text-dark' : 'btn-light border text-muted'" @click.prevent="filtroDocumento = 'recetas'">Recetas</button>
          <button type="button" class="btn btn-sm rounded-pill px-3" :class="filtroDocumento === 'otro' ? 'btn-light bg-white border text-dark' : 'btn-light border text-muted'" @click.prevent="filtroDocumento = 'otro'">Otros</button>
        </div>

        <div class="row g-3" v-if="documentosFiltrados.length > 0">
          <div class="col-md-6 col-lg-4" v-for="doc in documentosFiltrados" :key="doc.id">
            <div class="card h-100 border-light shadow-sm" style="border-radius: 12px; background-color: #fcfcfc;">
              <div class="card-body p-4">
                <div class="d-flex align-items-start mb-3">
                  <div class="rounded bg-light text-secondary border d-flex justify-content-center align-items-center me-3 flex-shrink-0" style="width: 45px; height: 45px; background-color: #f1f3f5 !important;">
                    <i class="far fa-file-alt fs-5"></i>
                  </div>
                  <div style="min-width: 0;">
                    <h6 class="mb-1 text-dark text-truncate" :title="doc.nombre">{{ doc.nombre }}</h6>
                    <span class="badge rounded-pill" :class="getBadgeClassDocumento(doc.tipo)">{{ getTipoDocumentoNombre(doc.tipo) }}</span>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center small text-muted mb-3">
                  <span><i class="far fa-calendar-alt me-1"></i> {{ formatDate(doc.created_at || doc.fecha) }}</span>
                  <!-- <span><i class="fas fa-hdd me-1"></i> -- KB</span> -->
                </div>
                <div class="d-flex gap-2">
                  <a :href="'/storage/archivos/' + doc.archivo" target="_blank" class="btn btn-light btn-sm flex-grow-1 border shadow-sm text-dark bg-white rounded-pill">
                    <i class="fas fa-eye me-1"></i> Ver
                  </a>
                  <a :href="'/storage/archivos/' + doc.archivo" download target="_blank" class="btn btn-light btn-sm flex-grow-1 border shadow-sm text-dark bg-white rounded-pill">
                    <i class="fas fa-download me-1"></i> Descargar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="alert alert-light text-center border p-5 mt-3 rounded-lg">
          <i class="far fa-folder-open text-muted mb-3 fs-1"></i>
          <h6 class="text-muted">No existen documentos adjuntos en esta categoría.</h6>
        </div>
      </div>

      <!-- FINANZAS -->
      <div class="tab-pane fade" id="finanzas" role="tabpanel">
        <div class="card border">
          <div class="card-body p-4">
             <h5 class="card-title font-weight-bold mb-4">Deudas y Cuentas</h5>
             <table class="table table-sm table-hover">
                <thead class="bg-light">
                  <tr>
                    <th class="p-2 border-bottom-0 text-muted">Fecha</th>
                    <th class="p-2 border-bottom-0 text-muted">Detalles</th>
                    <th class="p-2 border-bottom-0 text-muted">Monto</th>
                    <th class="p-2 border-bottom-0 text-muted">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="deuda in (paciente.deudas_financieras || [])" :key="deuda.id">
                    <td class="p-2 text-dark">{{ formatDate(deuda.fecha) }}</td>
                    <td class="p-2 text-muted">{{ deuda.observacion || 'Atención' }}</td>
                    <td class="p-2 text-dark font-weight-bold">S/ {{ deuda.monto }}</td>
                    <td class="p-2"><span class="badge" :class="deuda.estado ? 'bg-danger' : 'bg-success'">{{ deuda.estado ? 'Pendiente' : 'Pagado' }}</span></td>
                  </tr>
                  <tr v-if="!paciente.deudas_financieras || paciente.deudas_financieras.length == 0">
                    <td colspan="4" class="text-center text-muted py-3">No presenta deudas</td>
                  </tr>
                </tbody>
             </table>
          </div>
        </div>
      </div>

      <!-- CONVENIOS -->
      <div class="tab-pane fade" id="convenios" role="tabpanel">
        <div class="card border-0 shadow-sm" style="border-radius: 12px; background-color: #fcfcfc;">
          <div class="card-body p-5 text-center">
             <div class="mb-4">
                <i class="fas fa-handshake text-primary opacity-50" style="font-size: 5rem;"></i>
             </div>
             <h4 class="font-weight-bold text-dark mb-3">Convenios, Alianzas y Club</h4>
             <p class="text-muted mx-auto" style="max-width: 500px; font-size: 1.1rem;">
                Esta sección está en desarrollo. Próximamente podrá gestionar aquí todos los acuerdos institucionales, beneficios de alianzas estratégicas y membresías de Club.
             </p>
             <div class="mt-4">
               <span class="badge bg-warning text-dark px-4 py-2 rounded-pill shadow-sm" style="font-size: 1rem;"><i class="fas fa-tools me-2"></i> Próximamente</span>
             </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Modal Detalle Ficha -->
    <div class="modal fade" id="modalDetalleFicha" tabindex="-1" aria-labelledby="modalDetalleFichaLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-lg">
          <div class="modal-header border-bottom-0 bg-light">
            <h5 class="modal-title font-weight-bold" id="modalDetalleFichaLabel">
              <i class="fas fa-clipboard-list text-primary me-2"></i> Detalles de la Ficha de Seguimiento
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4" v-if="fichaSeleccionada">
            
            <div class="row mb-4 g-3">
              <div class="col-md-6">
                <div class="p-3 bg-white border rounded shadow-sm h-100">
                  <p class="text-muted small mb-1">Fecha de Creación</p>
                  <p class="font-weight-bold mb-0 text-dark">{{ formatDate(fichaSeleccionada.fecha) }}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-3 bg-white border rounded shadow-sm h-100">
                  <p class="text-muted small mb-1">Profesional Asignado</p>
                  <p class="font-weight-bold mb-0 text-dark"><i class="fas fa-user-md text-success me-1"></i> {{ getProfessionalName(fichaSeleccionada.professional_id) }}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-3 bg-white border rounded shadow-sm h-100">
                  <p class="text-muted small mb-1">Tipo de Paquete</p>
                  <p class="font-weight-bold mb-0 text-dark">{{ fichaSeleccionada.tipo }}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-3 bg-white border rounded shadow-sm h-100">
                  <p class="text-muted small mb-1">Frecuencia</p>
                  <p class="font-weight-bold mb-0 text-dark">{{ fichaSeleccionada.frecuencia }}</p>
                </div>
              </div>
              <div class="col-12">
                <div class="p-3 bg-white border rounded shadow-sm">
                  <p class="text-muted small mb-1">Motivo Frecuencia</p>
                  <p class="mb-0 text-dark">{{ fichaSeleccionada.motivo }}</p>
                </div>
              </div>
            </div>

            <!-- Interconsultas -->
            <div v-if="fichaSeleccionada.interconsultas && fichaSeleccionada.interconsultas.length > 0" class="mb-4">
              <h6 class="font-weight-bold mb-3 border-bottom pb-2"><i class="fas fa-hand-holding-medical text-primary me-2"></i> Interconsultas</h6>
              <div class="card border-0 bg-light shadow-sm mb-2" v-for="(inter, idx) in fichaSeleccionada.interconsultas" :key="idx">
                <div class="card-body p-3">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge bg-primary bg-opacity-10 border border-primary px-2 py-1 rounded">{{ inter.tipo }}</span>
                    <span class="small text-muted font-weight-bold"><i class="fas fa-user-md"></i> {{ getProfessionalName(inter.professional_id) }}</span>
                  </div>
                  <p class="mb-0 small text-dark mt-2" v-if="inter.motivo"><strong>Motivo:</strong> {{ inter.motivo }}</p>
                </div>
              </div>
            </div>

            <!-- Recomendaciones -->
            <div v-if="getRecomendacionesParsed(fichaSeleccionada.recomendaciones).length > 0">
              <h6 class="font-weight-bold mb-3 border-bottom pb-2"><i class="fas fa-tasks text-success me-2"></i> Recomendaciones</h6>
              <div class="d-flex flex-wrap gap-2">
                <span class="badge bg-success bg-opacity-10 border border-success p-2 rounded-pill" v-for="(rec, idx) in getRecomendacionesParsed(fichaSeleccionada.recomendaciones)" :key="idx">
                  <i class="fas fa-check me-1"></i> {{ rec }}
                </span>
              </div>
            </div>

          </div>
          <div class="modal-footer border-top-0 pt-0">
            <button type="button" class="btn btn-light border px-4" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Nuevo Plan de Seguridad -->
    <div class="modal fade" id="modalPlanSeguridad" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-lg">
          <div class="modal-header border-bottom-0 bg-light">
            <h5 class="modal-title font-weight-bold">
              <i class="fas fa-shield-alt text-danger me-2"></i> Nuevo Plan de Seguridad
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4 bg-light">
            <form @submit.prevent="guardarPlanSeguridad">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label font-weight-bold small text-dark">Señales de advertencia <span class="text-danger">*</span></label>
                  <textarea class="form-control" rows="3" v-model="nuevoPlanSeguridad.senales_advertencia" placeholder="Pensamientos, imágenes, humor, situaciones, conducta..." required></textarea>
                </div>
                <div class="col-md-6">
                  <label class="form-label font-weight-bold small text-dark">Estrategias de afrontamiento internas <span class="text-danger">*</span></label>
                  <textarea class="form-control" rows="3" v-model="nuevoPlanSeguridad.estrategias" placeholder="Cosas que puedo hacer para distraerme sin contactar a otra persona..." required></textarea>
                </div>
                <div class="col-md-6">
                  <label class="form-label font-weight-bold small text-dark">Personas y entornos sociales de distracción <span class="text-danger">*</span></label>
                  <textarea class="form-control" rows="3" v-model="nuevoPlanSeguridad.personas_dis" placeholder="Nombres, teléfonos, lugares seguros..." required></textarea>
                </div>
                <div class="col-md-6">
                  <label class="form-label font-weight-bold small text-dark">Personas a quienes puedo pedir ayuda <span class="text-danger">*</span></label>
                  <textarea class="form-control" rows="3" v-model="nuevoPlanSeguridad.personas_ayuda" placeholder="Nombres, teléfonos..." required></textarea>
                </div>
                <div class="col-md-6">
                  <label class="form-label font-weight-bold small text-dark">Profesionales / Agencias de emergencia <span class="text-danger">*</span></label>
                  <textarea class="form-control" rows="3" v-model="nuevoPlanSeguridad.contactos_emergencia" placeholder="Clínica, hospital de urgencias, línea de prevención de suicidio..." required></textarea>
                </div>
                <div class="col-md-6">
                  <label class="form-label font-weight-bold small text-dark">Medidas para hacer el entorno más seguro <span class="text-danger">*</span></label>
                  <textarea class="form-control" rows="3" v-model="nuevoPlanSeguridad.medidas" placeholder="Eliminar acceso a métodos letales..." required></textarea>
                </div>
                <div class="col-12">
                  <label class="form-label font-weight-bold small text-dark">Mis Razones para vivir <span class="text-danger">*</span></label>
                  <textarea class="form-control" rows="3" v-model="nuevoPlanSeguridad.razones_vivir" placeholder="Aspectos importantes que me mantienen con vida..." required></textarea>
                </div>
              </div>
              <div class="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
                <button type="button" class="btn btn-light border px-4" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" class="btn btn-primary px-4" :disabled="savingPlanSeguridad">
                  <span v-if="savingPlanSeguridad" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Guardar Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Ver Plan de Seguridad Completo -->
    <div class="modal fade" id="modalVerPlanSeguridad" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content border-0 shadow-lg rounded-lg">
          <div class="modal-header border-bottom-0 bg-light d-flex align-items-center">
            <h5 class="modal-title font-weight-bold mb-0">
              <i class="fas fa-shield-alt text-danger me-2"></i> Plan de Seguridad
            </h5>
            <div class="ms-auto me-3 small text-muted" v-if="planSeguridadSeleccionado">
               Creado: {{ formatDate(planSeguridadSeleccionado.fecha) }}
            </div>
            <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4" v-if="planSeguridadSeleccionado">
            
            <div class="row g-4">
              <div class="col-md-6">
                <div class="card h-100 border-light shadow-sm">
                  <div class="card-header bg-white border-bottom-0 pt-3 pb-0">
                    <h6 class="font-weight-bold text-dark mb-0"><i class="fas fa-exclamation-triangle text-warning me-2"></i> 1. Señales de advertencia</h6>
                  </div>
                  <div class="card-body">
                    <p class="small text-muted mb-0" style="white-space: pre-wrap;">{{ planSeguridadSeleccionado.senales_advertencia }}</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card h-100 border-light shadow-sm">
                  <div class="card-header bg-white border-bottom-0 pt-3 pb-0">
                    <h6 class="font-weight-bold text-dark mb-0"><i class="fas fa-brain text-primary me-2"></i> 2. Estrategias de afrontamiento internas</h6>
                  </div>
                  <div class="card-body">
                    <p class="small text-muted mb-0" style="white-space: pre-wrap;">{{ planSeguridadSeleccionado.estrategias }}</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card h-100 border-light shadow-sm">
                  <div class="card-header bg-white border-bottom-0 pt-3 pb-0">
                    <h6 class="font-weight-bold text-dark mb-0"><i class="fas fa-users text-info me-2"></i> 3. Personas y entornos de distracción</h6>
                  </div>
                  <div class="card-body">
                    <p class="small text-muted mb-0" style="white-space: pre-wrap;">{{ planSeguridadSeleccionado.personas_dis }}</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card h-100 border-light shadow-sm">
                  <div class="card-header bg-white border-bottom-0 pt-3 pb-0">
                    <h6 class="font-weight-bold text-dark mb-0"><i class="fas fa-hands-helping text-success me-2"></i> 4. Personas a quienes puedo pedir ayuda</h6>
                  </div>
                  <div class="card-body">
                    <p class="small text-muted mb-0" style="white-space: pre-wrap;">{{ planSeguridadSeleccionado.personas_ayuda }}</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card h-100 border-light shadow-sm">
                  <div class="card-header bg-white border-bottom-0 pt-3 pb-0">
                    <h6 class="font-weight-bold text-dark mb-0"><i class="fas fa-ambulance text-danger me-2"></i> 5. Profesionales de emergencia</h6>
                  </div>
                  <div class="card-body">
                    <p class="small text-muted mb-0" style="white-space: pre-wrap;">{{ planSeguridadSeleccionado.contactos_emergencia }}</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card h-100 border-light shadow-sm">
                  <div class="card-header bg-white border-bottom-0 pt-3 pb-0">
                    <h6 class="font-weight-bold text-dark mb-0"><i class="fas fa-lock text-secondary me-2"></i> 6. Entorno más seguro</h6>
                  </div>
                  <div class="card-body">
                    <p class="small text-muted mb-0" style="white-space: pre-wrap;">{{ planSeguridadSeleccionado.medidas }}</p>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="card h-100 border-light shadow-sm">
                  <div class="card-header bg-white border-bottom-0 pt-3 pb-0">
                    <h6 class="font-weight-bold text-dark mb-0"><i class="far fa-smile-beam text-warning me-2"></i> 7. Razones para vivir</h6>
                  </div>
                  <div class="card-body">
                    <p class="small text-muted mb-0" style="white-space: pre-wrap;">{{ planSeguridadSeleccionado.razones_vivir }}</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div class="modal-footer border-top-0 pt-0">
            <button type="button" class="btn btn-light border px-4" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary px-4" @click="descargarPlanPDF(planSeguridadSeleccionado)">
              <i class="fas fa-download me-1"></i> Descargar PDF
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal Subir Documento -->
    <div class="modal fade" id="modalSubirDocumento" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-lg">
          <div class="modal-header border-bottom-0 bg-light">
            <h5 class="modal-title font-weight-bold">
              <i class="fas fa-upload text-primary me-2"></i> Subir Documento
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4 bg-light">
            <form @submit.prevent="subirNuevoDocumento">
              <div class="mb-3">
                <label class="form-label font-weight-bold small text-dark">Archivo <span class="text-danger">*</span></label>
                <input type="file" class="form-control" id="fileInputDocumento" required>
              </div>
              <div class="mb-3">
                <label class="form-label font-weight-bold small text-dark">Tipo de Documento <span class="text-danger">*</span></label>
                <select class="form-select" v-model="nuevoDocumentoTipo" required>
                  <option value="" disabled>Seleccione el tipo...</option>
                  <option value="orden">Orden de Examen</option>
                  <option value="resultado">Resultado de Laboratorio/Imagen</option>
                  <option value="referencias">Referencia/Contrarreferencia</option>
                  <option value="consentimiento">Consentimiento Informado</option>
                  <option value="recetas">Receta Externa</option>
                  <option value="otro">Otro Documento</option>
                </select>
              </div>
              <div class="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
                <button type="button" class="btn btn-light border px-4" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" class="btn btn-primary px-4" :disabled="subiendoDocumento">
                  <span v-if="subiendoDocumento" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Subir Documento
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal Ver AutoTriaje -->
    <modal-ver-auto-triaje :patient-id="paciente.id"></modal-ver-auto-triaje>
  </div>
</template>

<script>
import ModalVerAutoTriaje from '../../../acceso_publico/ModalVerAutoTriaje.vue'

export default {
  name: 'DetallePaciente',
  components: {
    ModalVerAutoTriaje
  },
  props: {
    pacienteId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      paciente: {},
      loading: true,
      timelineActivity: [],
      activePill: 'recetas',
      ciesData: [],
      fichaView: 'botones',
      savingFicha: false,
      professionalsList: [],
      fichaSeleccionada: null,
      nuevaFicha: {
        tipo: '',
        frecuencia: '',
        motivo: '',
        professional_id: '',
        interconsultas: [],
        recomendaciones: []
      },
      tempInterconsulta: {
        tipo: '',
        professional_id: '',
        motivo: ''
      },
      nuevoPlanSeguridad: {
        senales_advertencia: '',
        estrategias: '',
        personas_dis: '',
        personas_ayuda: '',
        razones_vivir: '',
        medidas: '',
        contactos_emergencia: ''
      },
      planSeguridadSeleccionado: null,
      savingPlanSeguridad: false,
      filtroDocumento: 'Todos',
      nuevoDocumentoTipo: '',
      subiendoDocumento: false
    }
  },
  computed: {
    initials() {
      if (!this.paciente.name) return '??';
      const firstName = this.paciente.nombres ? this.paciente.nombres.trim().charAt(0) : '';
      return (this.paciente.name.trim().charAt(0) + firstName).toUpperCase();
    },
    proximaCita() {
      if (!this.paciente.appointments) return null;
      const today = new Date().toISOString().slice(0, 10);
      return this.paciente.appointments.slice().reverse().find(a => a.date >= today && (a.status == 1 || a.status == 2));
    },
    ultimaEvolucion() {
      if (!this.paciente.medical_evolutions?.length) return null;
      return this.paciente.medical_evolutions[0];
    },
    allTests() {
      const p = this.paciente;
      if (!p || Object.keys(p).length === 0) return []; // Ensure reactivity triggers when object is populated

      let combined = [];
      const addTest = (arr, name) => {
        if(arr && Array.isArray(arr)) {
          arr.forEach(i => {
            let d = i.created_at || i.fecha;
            let time = 0;
            if (d) {
              // Convert "YYYY-MM-DD HH:mm:ss" to "YYYY-MM-DDTHH:mm:ss" for strict parsers
              time = new Date(d.replace(' ', 'T')).getTime();
            }
            combined.push({
              ...i, 
              testName: name, 
              dateStamp: isNaN(time) ? 0 : time
            });
          });
        }
      }
      addTest(p.scrs, 'SCR');
      addTest(p.burns, 'Burnout');
      addTest(p.gads, 'GAD-7');
      addTest(p.zung_anxieties, 'Zung Ansiedad');
      addTest(p.zung_depressions, 'Zung Depresión');
      addTest(p.millons, 'Millon');
      
      return combined.sort((a,b) => b.dateStamp - a.dateStamp);
    },
    allMedicalExams() {
      let exams = [];
      if (this.paciente.appointments) {
        this.paciente.appointments.forEach(app => {
          if (app.medical_exams && app.medical_exams.length > 0) {
            app.medical_exams.forEach(exam => {
              exams.push({
                appointmentId: app.id,
                date: app.date,
                doctor: app.professional ? app.professional.name : '--',
                exam: exam
              });
            });
          }
        });
      }
      return exams;
    },
    documentosFiltrados() {
      if (!this.paciente.archivos_list) return [];
      if (this.filtroDocumento === 'Todos') return this.paciente.archivos_list;
      return this.paciente.archivos_list.filter(d => d.tipo === this.filtroDocumento);
    }
  },
  methods: {
    countItems(text) {
      if (!text) return 0;
      return text.split('\n').filter(line => line.trim() !== '').length;
    },
    previewItems(text) {
      if (!text) return [];
      return text.split('\n').filter(line => line.trim() !== '').slice(0, 3);
    },
    abrirNuevoPlan() {
      this.nuevoPlanSeguridad = {
        senales_advertencia: '',
        estrategias: '',
        personas_dis: '',
        personas_ayuda: '',
        razones_vivir: '',
        medidas: '',
        contactos_emergencia: ''
      };
    },
    async guardarPlanSeguridad() {
      try {
        this.savingPlanSeguridad = true;
        const payload = {
          patient_id: this.paciente.id,
          ...this.nuevoPlanSeguridad
        };
        const response = await axios.post('/api/plan-seguridad', payload);
        if (response.data && response.data.plan) {
          if (!this.paciente.planes_seguridad) {
            this.paciente.planes_seguridad = [];
          }
          this.paciente.planes_seguridad.unshift(response.data.plan);
          
          $('#modalPlanSeguridad').modal('hide');
          this.$swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Plan de seguridad guardado correctamente',
            timer: 1500,
            showConfirmButton: false
          });
        }
      } catch (error) {
        console.error(error);
        this.$swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo guardar el plan de seguridad'
        });
      } finally {
        this.savingPlanSeguridad = false;
      }
    },
    verPlanSeguridad(plan) {
      this.planSeguridadSeleccionado = plan;
    },
    descargarPlanPDF(plan) {
      this.$swal.fire({
        icon: 'info',
        title: 'Próximamente',
        text: 'La descarga de PDF para planes de seguridad estará disponible pronto.'
      });
    },
    async fetchPatientDetails() {
      this.loading = true;
      try {
        const res = await this.axios.get(`/api/patient/${this.pacienteId}/full-details`);
        this.paciente = res.data;
        this.buildTimeline();
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
    buildTimeline() {
      const activities = [];
      if(this.paciente.appointments) {
        this.paciente.appointments.forEach(a => {
          activities.push({
            type: 'Cita',
            date: a.date + (a.hora ? 'T' + a.hora : ''),
            desc: `Cita / Estado: ${this.getStatusName(a.status)}`,
            profesional: a.professional ? a.professional.name : '',
            timestamp: new Date(a.date).getTime()
          });
        });
      }
      if(this.paciente.medical_evolutions) {
        this.paciente.medical_evolutions.forEach(e => {
          activities.push({
            type: 'Evolucion',
            date: e.date,
            desc: e.descripcion || 'Evolución registrada',
            profesional: e.professional ? e.professional.name : '',
            timestamp: new Date(e.date).getTime()
          });
        });
      }
      activities.sort((a, b) => b.timestamp - a.timestamp);
      this.timelineActivity = activities;
    },
    getAge(dateString) {
      if (!dateString) return '';
      const today = new Date();
      const birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
    },
    getGender(gen) {
        if(gen == 1) return 'Masculino';
        if(gen == 2) return 'Femenino';
        return 'Sin especificar';
    },
    formatDate(date) {
      if(!date) return '';
      // Prevenir bug de zona horaria aislando YYYY-MM-DD.
      if (typeof date === 'string') {
        const parts = date.split(' ')[0].split('T')[0].split('-');
        if (parts.length === 3) {
          return `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
      }
      const d = new Date(date);
      if (isNaN(d.getTime())) return date;
      const day = d.getDate().toString().padStart(2, '0');
      const month = (d.getMonth() + 1).toString().padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    },
    formatDateTime(date, time) {
      return this.formatDate(date) + (time ? ' ' + time : '');
    },
    getStatusName(s) {
      if(s==1) return 'Pendiente';
      if(s==2) return 'Confirmado';
      if(s==3) return 'Atendido';
      if(s==4) return 'Reprogramado';
      if(s==5) return 'Cancelado';
      return 'Otro';
    },
    getStatusBadge(s) {
      if(s==1) return 'bg-warning';
      if(s==2) return 'bg-primary';
      if(s==3) return 'bg-success';
      if(s==4) return 'bg-info';
      if(s==5) return 'bg-danger';
      return 'bg-secondary';
    },
    getHobbies(hobbiesStr) {
      if (!hobbiesStr) return [];
      try {
        return JSON.parse(hobbiesStr);
      } catch (e) {
        return [];
      }
    },
    getEstadoNombre(codigo) {
      const estados = {
        1: 'Neutro',
        2: 'Cumplidor',
        3: 'Promotor',
        4: 'Wow',
        5: 'Reprogramador',
        6: 'Exigente',
        7: 'Deudor',
        8: 'Insatisfecho',
        9: 'Riesgo',
        10: 'Problemático'
      };
      return estados[codigo] || 'Desconocido';
    },
    getTriajeReferencia(ref) {
      if(ref == 1) return 'Psicológico';
      if(ref == 2) return 'Psiquiátrico';
      if(ref == 3) return 'Psicológico y Psiquiátrico';
      return '';
    },
    getPrioridadText(p) {
      if(p == 1) return 'I - Urgencia inmediata (Psiq)';
      if(p == 2) return 'II - Urgencia moderada (Psiq)';
      if(p == 3) return 'III - Riesgo alto (Psic)';
      if(p == 4) return 'IV - Riesgo medio (Psic)';
      if(p == 5) return 'V - Riesgo bajo (Psic)';
      return 'No definida';
    },
    getPrioridadClass(p) {
      if(p == 1) return 'bg-danger text-white rounded-pill px-2';
      if(p == 2) return 'bg-warning text-dark rounded-pill px-2';
      if(p == 3) return 'bg-danger text-white rounded-pill px-2';
      if(p == 4) return 'bg-warning text-dark rounded-pill px-2';
      if(p == 5) return 'bg-success text-white rounded-pill px-2';
      return 'bg-secondary text-white rounded-pill px-2';
    },
    formatDateWithTime(dateStr) {
      if(!dateStr) return '';
      let d;
      if (typeof dateStr === 'string' && !dateStr.includes('T') && dateStr.includes(' ')) {
        d = new Date(dateStr.replace(' ', 'T'));
      } else {
        d = new Date(dateStr);
      }
      if (isNaN(d.getTime())) return dateStr;
      const day = d.getDate().toString().padStart(2, '0');
      const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      const month = monthNames[d.getMonth()];
      const year = d.getFullYear();
      let hours = d.getHours();
      const minutes = d.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      return `${day} ${month} ${year} - ${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
    },
    getCieNames(diagnosticString) {
      if(!diagnosticString) return 'Evaluación médica general';
      try {
        let parsed = JSON.parse(diagnosticString);
        if (Array.isArray(parsed) && this.ciesData && this.ciesData.length > 0) {
           let names = parsed.map(code => {
              let found = this.ciesData.find(c => c.id == code);
              return found ? `${found.code} - ${found.description}` : code;
           });
           return names.join(', ');
        }
        return diagnosticString;
      } catch (e) {
        return diagnosticString;
      }
    },
    getExamPdfUrl(examData) {
      let examObj = {
        appointment: examData.appointmentId.toString(),
        name_patient: `${this.paciente.name} ${this.paciente.nombres || ''}`.trim(),
        attention_date: examData.date.substring(0, 10),
        medical_exams: [examData.exam]
      };
      let jsonStr = JSON.stringify(examObj).split('/').join('-');
      return `/api/pdf_exam/${jsonStr}?token=${this.$token}`;
    },
    // Ficha Seguimiento methods
    getProfessionalName(id) {
      const p = this.professionalsList.find(x => x.id == id);
      return p ? p.name : '--';
    },
    isSelectedRecomendacion(val) {
      return this.nuevaFicha.recomendaciones.includes(val);
    },
    toggleRecomendacion(val) {
      const idx = this.nuevaFicha.recomendaciones.indexOf(val);
      if (idx > -1) {
        this.nuevaFicha.recomendaciones.splice(idx, 1);
      } else {
        this.nuevaFicha.recomendaciones.push(val);
      }
    },
    agregarInterconsulta() {
      if (!this.tempInterconsulta.tipo || !this.tempInterconsulta.professional_id) return;
      this.nuevaFicha.interconsultas.push({ ...this.tempInterconsulta });
      this.limpiarInterconsulta();
    },
    eliminarInterconsulta(idx) {
      this.nuevaFicha.interconsultas.splice(idx, 1);
    },
    limpiarInterconsulta() {
      this.tempInterconsulta = { tipo: '', professional_id: '', motivo: '' };
    },
    async guardarFichaSeguimiento() {
      this.savingFicha = true;
      try {
        const payload = {
          patient_id: this.paciente.id,
          professional_id: this.nuevaFicha.professional_id,
          tipo: this.nuevaFicha.tipo,
          frecuencia: this.nuevaFicha.frecuencia,
          motivo: this.nuevaFicha.motivo,
          recomendaciones: JSON.stringify(this.nuevaFicha.recomendaciones),
          interconsultas: this.nuevaFicha.interconsultas
        };
        const res = await this.axios.post('/api/ficha-seguimiento', payload);
        this.$swal('Éxito', 'Ficha de seguimiento guardada correctamente.', 'success');
        this.fichaView = 'historica';
        this.nuevaFicha = {
          tipo: '',
          frecuencia: '',
          motivo: '',
          professional_id: '',
          interconsultas: [],
          recomendaciones: []
        };
        this.fetchPatientDetails(); // Refresh patient data to load new ficha.
      } catch (e) {
        console.error(e);
        console.error(e.response.data);
        this.$swal('Error', 'Ocurrió un error al guardar la ficha.', 'error');
      } finally {
        this.savingFicha = false;
      }
    },
    verDetalleFicha(ficha) {
      this.fichaSeleccionada = ficha;
      let modal = new bootstrap.Modal(document.getElementById('modalDetalleFicha'));
      modal.show();
    },
    getRecomendacionesParsed(recs) {
      if (!recs) return [];
      try {
        let parsed = JSON.parse(recs);
        return Array.isArray(parsed) ? parsed : [];
      } catch(e) {
        return [];
      }
    },
    getTipoDocumentoNombre(tipo) {
      const tipos = {
        'orden': 'Orden de Examen',
        'resultado': 'Resultado de Laboratorio',
        'referencias': 'Referencia/Contrarreferencia',
        'consentimiento': 'Consentimiento Informado',
        'recetas': 'Receta Externa',
        'otro': 'Otro Documento'
      };
      return tipos[tipo] || 'Documento';
    },
    getBadgeClassDocumento(tipo) {
      const classes = {
        'orden': 'bg-primary bg-opacity-10 border border-primary border-opacity-25',
        'resultado': 'bg-success bg-opacity-10 border border-success border-opacity-25',
        'referencias': 'bg-info bg-opacity-10 border border-info border-opacity-25',
        'consentimiento': 'bg-warning bg-opacity-10 border border-warning border-opacity-25',
        'recetas': 'bg-secondary bg-opacity-10 border border-secondary border-opacity-25',
        'otro': 'bg-light text-dark border'
      };
      return classes[tipo] || classes['otro'];
    },
    async subirNuevoDocumento() {
      const fileInput = document.getElementById('fileInputDocumento');
      if (!fileInput.files.length) {
        this.$swal.fire('Error', 'Seleccione un archivo', 'warning');
        return;
      }
      this.subiendoDocumento = true;
      try {
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);
        formData.append('idPaciente', this.paciente.id);
        formData.append('idProfesional', this.$attrs.idUser || -1); 
        formData.append('tipo', this.nuevoDocumentoTipo);

        const response = await this.axios.post('/api/subirArchivo', formData);
        
        if (!this.paciente.archivos_list) {
          this.$set(this.paciente, 'archivos_list', []);
        }
        
        this.paciente.archivos_list.unshift(response.data);

        fileInput.value = '';
        this.nuevoDocumentoTipo = '';
        
        $('#modalSubirDocumento').modal('hide');
        this.$swal.fire({
          icon: 'success',
          title: 'Documento subido',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
      } catch (error) {
        console.error(error);
        this.$swal.fire('Error', 'No se pudo subir el archivo. Puede que exceda el tamaño permitido (10MB) o el formato no sea válido.', 'error');
      } finally {
        this.subiendoDocumento = false;
      }
    }
  },
  mounted() {
    this.fetchPatientDetails();
    this.axios.get('/api/cies/a').then(res => {
      this.ciesData = res.data;
    });
    this.axios.get('/api/professional').then(res => {
      this.professionalsList = res.data;
    }).catch(err => console.error(err));
  },
  watch: {
    pacienteId() {
      this.fetchPatientDetails();
    }
  }
}
</script>

<style scoped>
.nav-tabs .nav-link {
  color: #6c757d;
  border: none;
  font-size: 14px;
  border-bottom: 2px solid transparent;
  padding: 0.75rem 1rem;
}
.nav-tabs .nav-link.active {
  color: #0d6efd;
  background-color: transparent;
  border-color: transparent transparent #0d6efd;
}
.nav-tabs .nav-link:hover {
  border-color: transparent transparent #dee2e6;
}
.timeline {
  position: relative;
  border-left: 2px solid #e9ecef;
  padding-left: 1.5rem;
}
.timeline-item {
  position: relative;
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: -30px;
  top: 5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #0d6efd;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px #0d6efd;
}
.content-timeline {
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
}
</style>
