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
        <button class="nav-link font-weight-bold small text-muted" id="recetas-tab" data-bs-toggle="tab" data-bs-target="#recetas" type="button" role="tab" >Recetas & Órdenes</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" id="pruebas-tab" data-bs-toggle="tab" data-bs-target="#pruebas" type="button" role="tab" >Pruebas Psicológicas</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" id="documentos-tab" data-bs-toggle="tab" data-bs-target="#documentos" type="button" role="tab">Documentos</button>
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
        <div class="card border mb-4">
          <div class="card-body p-4 position-relative">
            <button class="btn btn-outline-primary position-absolute btn-sm" style="top: 20px; right: 20px;" data-bs-toggle="modal" data-bs-target="#modalEdicionPaciente" @click="$emit('editarPaciente', paciente)">
              <i class="fas fa-edit"></i> Editar Paciente
            </button>
            <h5 class="card-title font-weight-bold mb-4">Información General</h5>
            <div class="row mb-3">
              <div class="col-md-3 mb-3"><span class="text-muted d-block small mb-1">Nombres</span><strong class="text-dark">{{ paciente.name }}</strong></div>
              <div class="col-md-3 mb-3"><span class="text-muted d-block small mb-1">Apellidos</span><strong class="text-dark">{{ paciente.nombres }}</strong></div>
              <div class="col-md-3 mb-3"><span class="text-muted d-block small mb-1">DNI / CE</span><strong class="text-dark">{{ paciente.dni }}</strong></div>
              <div class="col-md-3 mb-3"><span class="text-muted d-block small mb-1">Fecha Nacimiento</span><strong class="text-dark">{{ paciente.birth_date }}</strong></div>
              <div class="col-md-3 mb-3"><span class="text-muted d-block small mb-1">Ocupación</span><strong class="text-dark">{{ paciente.occupation }}</strong></div>
              <div class="col-md-3 mb-3"><span class="text-muted d-block small mb-1">Teléfono</span><strong class="text-dark">{{ paciente.phone }}</strong></div>
              <div class="col-md-3 mb-3"><span class="text-muted d-block small mb-1">Correo</span><strong class="text-dark" style="word-break: break-all;">{{ paciente.email || 'N/A' }}</strong></div>
            </div>
            
            <hr class="my-4">
            <h5 class="card-title font-weight-bold mb-4">Dirección</h5>
            <div class="row" v-if="paciente.address">
              <div class="col-md-4 mb-2"><span class="text-muted d-block small mb-1">Dirección</span><strong class="text-dark">{{ paciente.address.address }}</strong></div>
              <div class="col-md-4 mb-2"><span class="text-muted d-block small mb-1">Distrito</span><strong class="text-dark">{{ paciente.address.district }}</strong></div>
              <div class="col-md-4 mb-2"><span class="text-muted d-block small mb-1">Provincia/Departamento</span><strong class="text-dark">{{ paciente.address.province }} - {{ paciente.address.department }}</strong></div>
            </div>
          </div>
        </div>
        
        <div class="card border">
          <div class="card-body p-4">
            <h5 class="card-title font-weight-bold mb-3">Familiares / Contactos</h5>
            <div class="table-responsive" v-if="paciente.relative && paciente.relative.length > 0">
              <table class="table table-borderless table-sm">
                <thead class="bg-light">
                  <tr>
                    <th class="p-2 border-bottom">Nombre</th>
                    <th class="p-2 border-bottom">Parentesco</th>
                    <th class="p-2 border-bottom">Teléfono</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="rel in paciente.relative" :key="rel.id" v-show="rel.name">
                      <td class="p-2">{{ rel.name }}</td>
                      <td class="p-2">{{ rel.kinship }}</td>
                      <td class="p-2">{{ rel.phone }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>
              <p class="text-muted mb-0 small">No hay familiares registrados.</p>
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
          <div class="col-md-6 mb-3">
            <div class="card border h-100">
              <div class="card-body p-4">
                <h5 class="card-title font-weight-bold mb-4">Triajes</h5>
                <ul class="list-group list-group-flush" v-if="paciente.triajes && paciente.triajes.length > 0">
                  <li class="list-group-item px-0" v-for="tr in paciente.triajes.slice(0, 5)" :key="tr.id">
                    <strong>{{ formatDate(tr.fecha || tr.created_at) }}</strong>
                    <p class="mb-0 small text-muted mt-1"><strong>Motivo:</strong> {{ tr.motivo }}</p>
                    <p class="mb-0 small text-muted"><strong>Síntomas:</strong> {{ tr.sintomatologia }}</p>
                  </li>
                </ul>
                <p v-else class="text-muted small">Sin registros de triaje.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
             <div class="card border h-100">
              <div class="card-body p-4">
                <h5 class="card-title font-weight-bold mb-4">Seguridad / Semáforo</h5>
                <ul class="list-group list-group-flush" v-if="paciente.semaforo_estados && paciente.semaforo_estados.length > 0">
                  <li class="list-group-item px-0" v-for="sem in paciente.semaforo_estados.slice(0, 5)" :key="sem.id">
                    <strong>{{ formatDate(sem.registro) }}</strong>
                    <p class="mb-0 small mt-1">Código: {{ sem.codigo }} - <span class="text-muted">{{ sem.observaciones }}</span></p>
                  </li>
                </ul>
                <p v-else class="text-muted small">Sin registros en el semáforo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RECETAS -->
      <div class="tab-pane fade" id="recetas" role="tabpanel">
        <div class="card border">
          <div class="card-body p-4">
            <h5 class="card-title font-weight-bold mb-4">Recetas y Órdenes</h5>
            <div class="table-responsive">
              <table class="table table-hover table-sm">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Detalles</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="receta in paciente.prescriptions" :key="receta.id">
                    <td style="width: 15%">{{ formatDate(receta.created_at) }}</td>
                    <td>
                      <!-- Just simple view -->
                      <span class="small">Receta generada (ID: {{receta.id}})</span> 
                      <span class="text-muted mx-2">|</span>
                      <a :href="`/api/pdf/${receta.id}?token=${$token}`" target="_blank" class="text-primary small"><i class="fas fa-print"></i> Imprimir Receta</a>
                    </td>
                  </tr>
                  <tr v-if="!paciente.prescriptions || paciente.prescriptions.length == 0">
                    <td colspan="2" class="text-center text-muted">No tiene recetas registradas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- PRUEБАS PSICOLOGICAS -->
      <div class="tab-pane fade" id="pruebas" role="tabpanel">
        <div class="card border border-light">
          <div class="card-body p-4">
             <h5 class="card-title font-weight-bold mb-4">Listado de Pruebas</h5>
             <!-- Combine tests -->
             <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center px-0 border-bottom" v-for="t in allTests" :key="t.type + t.id">
                   <div>
                     <strong class="text-dark">{{ t.testName }}</strong>
                     <span class="text-muted small d-block mt-1">{{ formatDate(t.created_at) }}</span>
                   </div>
                   <!-- badge for score -->
                   <span class="badge bg-primary rounded-pill px-3 py-2" v-if="t.score || t.total">{{ t.score || t.total }} pts</span>
                </li>
             </ul>
             <div v-if="allTests.length === 0" class="text-center text-muted mt-3">
               No hay pruebas aplicadas.
             </div>
          </div>
        </div>
      </div>

      <!-- DOCUMENTOS -->
      <div class="tab-pane fade" id="documentos" role="tabpanel">
        <div class="card border">
          <div class="card-body p-4">
             <h5 class="card-title font-weight-bold mb-4">Archivos y Documentos</h5>
             <table class="table table-sm table-hover align-middle">
               <thead class="bg-light">
                 <tr>
                   <th class="p-2 rounded-start border-bottom-0">Nombre del archivo</th>
                   <th class="p-2 border-bottom-0">Fecha de Subida</th>
                   <th class="p-2 border-bottom-0 rounded-end text-center">Acción</th>
                 </tr>
               </thead>
               <tbody>
                 <tr v-for="doc in (paciente.archivos_list || [])" :key="doc.id">
                   <td class="p-2"><i class="far fa-file-pdf text-danger me-2"></i> {{ doc.nombre }}</td>
                   <td class="p-2 text-muted small">{{ doc.fecha || formatDate(doc.created_at) }}</td>
                   <td class="p-2 text-center"><a :href="'/storage/archivos/' + doc.archivo" target="_blank" class="btn btn-sm btn-light border"><i class="fas fa-external-link-alt"></i></a></td>
                 </tr>
                 <tr v-if="!paciente.archivos_list || paciente.archivos_list.length == 0">
                    <td colspan="3" class="text-center text-muted py-3">No existen documentos adjuntos</td>
                 </tr>
               </tbody>
             </table>
          </div>
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

    </div>
  </div>
</template>

<script>
export default {
  name: 'DetallePaciente',
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
      let combined = [];
      const addTest = (arr, name) => {
        if(arr) {
          arr.forEach(i => combined.push({...i, testName: name, dateStamp: new Date(i.created_at || i.fecha).getTime()}))
        }
      }
      addTest(this.paciente.scrs, 'SCR');
      addTest(this.paciente.burns, 'Burnout');
      addTest(this.paciente.gads, 'GAD-7');
      addTest(this.paciente.zung_anxieties, 'Zung Ansiedad');
      addTest(this.paciente.zung_depressions, 'Zung Depresión');
      addTest(this.paciente.millons, 'Millon');
      
      return combined.sort((a,b) => b.dateStamp - a.dateStamp);
    }
  },
  methods: {
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
    }
  },
  mounted() {
    this.fetchPatientDetails();
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
