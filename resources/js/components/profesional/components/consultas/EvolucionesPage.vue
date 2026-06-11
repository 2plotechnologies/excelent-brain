<template>
  <div class="patient-detail-container" @click="clickOutside">
    <!-- Header similar to DetallePaciente -->
    <div class="card shadow-sm mb-4 border-0 rounded-lg" style="background-color: #fcfcfc;">
      <div class="card-body d-flex justify-content-between align-items-center flex-wrap">
        <div class="d-flex align-items-center mb-3 mb-md-0">
          <div class="rounded-circle text-primary bg-light border d-flex justify-content-center align-items-center me-3 shadow-sm font-weight-bold" style="width: 60px; height: 60px; font-size: 20px;">
            <i class="fas fa-user"></i>
          </div>
          <div>
            <h4 class="mb-1 font-weight-bold d-flex align-items-center gap-2">
              {{ datosConsulta ? lowerCase(datosConsulta.name) +' '+lowerCase(datosConsulta.nombres) : '...' }}
            </h4>
            <div class="text-muted small">
              <span class="me-3">DNI: {{ datosConsulta ? datosConsulta.dni : '...' }}</span>
              <span class="me-3" v-if="datosConsulta.birth_date">{{ calculateAge(datosConsulta.birth_date) }} años</span>
              <span class="me-3" v-if="datosConsulta.phone"><i class="fas fa-phone"></i> {{ datosConsulta.phone }}</span>
            </div>
          </div>
        </div>

        <div class="d-flex gap-2 flex-wrap">
          <button data-bs-toggle="modal" data-bs-target="#modalAgendarCita" class="btn btn-outline-primary btn-sm bg-white shadow-sm" >
            <i class="fa-solid fa-calendar-plus"></i> Agendar
          </button>
          <router-link v-if="dataUser.profession!='Psicólogo'" :to="{ path: `/profesional/recetas/${datosConsulta.id}` }" class="btn btn-outline-primary btn-sm bg-white shadow-sm" title="Generar receta">
            <i class="fa-solid fa-file-prescription"></i> N. Receta
          </router-link>
          <button data-bs-toggle="modal" data-bs-target="#recetasModal" class="btn btn-outline-secondary btn-sm bg-white shadow-sm">
            <i class="fa-solid fa-list"></i> Ver recetas
          </button>
          <button v-if="(dataUser.profession === 'Psiquiatra' && datosConsulta.alta_psiquiatrica != 1) || (dataUser.profession !== 'Psiquiatra' && datosConsulta.alta_psicologica != 1)" class="btn btn-outline-success btn-sm bg-white shadow-sm" @click="toDischarge">
            <i class="fa-solid fa-check"></i> Dar de alta
          </button>
          <button data-bs-toggle="modal" data-bs-target="#modalVerTriajesViejos" class="btn btn-outline-info btn-sm bg-white shadow-sm">
            <i class="fa-solid fa-heartbeat"></i> Triajes ({{ datosConsulta.triajes ? datosConsulta.triajes.length : 0 }})
          </button>
          <button data-bs-toggle="modal" data-bs-target="#examenModal" class="btn btn-outline-warning btn-sm bg-white shadow-sm text-dark">
            <i class="fa-solid fa-file-medical"></i> Exámenes ({{ contarExamenes() }})
          </button>
          <button v-if="datosConsulta.sos=='0'" class="btn btn-danger btn-sm shadow-sm" @click="crearSOS()">
            <i class="fa-solid fa-bell"></i> SOS
          </button>
          <button v-else class="btn btn-secondary btn-sm shadow-sm" @click="quitarSOS()">
            <i class="fa-solid fa-bell-slash"></i> Quitar SOS
          </button>
        </div>
      </div>
    </div>

    <!-- Alertas -->
    <div class="my-3" v-if="datosConsulta.alta_psicologica == 1 || datosConsulta.alta_psiquiatrica == 1">
      <div class="alert alert-success border-0 shadow-sm rounded" role="alert">
        <i class="fa-solid fa-thumbs-up me-2"></i> <strong>Excelente!</strong> 
        <span v-if="datosConsulta.alta_psicologica == 1 && datosConsulta.alta_psiquiatrica == 1">Paciente con Alta Psicológica y Psiquiátrica</span>
        <span v-else-if="datosConsulta.alta_psicologica == 1">Paciente con Alta Psicológica</span>
        <span v-else-if="datosConsulta.alta_psiquiatrica == 1">Paciente con Alta Psiquiátrica</span>
      </div>
    </div>
    <div class="my-3" v-if="datosConsulta.sos=='1'">
      <div class="alert alert-danger border-0 shadow-sm rounded" role="alert">
        <i class="fa-solid fa-skull-crossbones me-2"></i> <strong>Alerta!</strong> Paciente con riesgo de suicidio (S.O.S Activo)
      </div>
    </div>

    <!-- Nav tabs -->
    <ul class="nav nav-tabs mb-4 px-2" id="patientTabs" role="tablist" style="border-bottom: 0;">
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" :class="{ active: activeTab === 'datos' }" @click="activeTab = 'datos'" type="button" role="tab" >
          <i class="fas fa-user me-1"></i> Datos Personales
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" :class="{ active: activeTab === 'historial' }" @click="activeTab = 'historial'" type="button" role="tab" >
          <i class="fas fa-history me-1"></i> Historial Clínico
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" :class="{ active: activeTab === 'linea' }" @click="activeTab = 'linea'" type="button" role="tab" >
          <i class="fas fa-sort-amount-up-alt me-1"></i> Línea de Vida
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" :class="{ active: activeTab === 'nutricion' }" @click="activeTab = 'nutricion'" type="button" role="tab" >
          <i class="fas fa-apple-alt me-1"></i> Nutrición
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" :class="{ active: activeTab === 'recetas' }" @click="activeTab = 'recetas'" type="button" role="tab" >
          <i class="fas fa-prescription me-1"></i> Recetas & Órdenes
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link font-weight-bold small text-muted" :class="{ active: activeTab === 'pruebas' }" @click="activeTab = 'pruebas'" type="button" role="tab" >
          <i class="fas fa-flask me-1"></i> Pruebas Psicológicas
        </button>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content px-2" id="patientTabsContent">
      
      <!-- DATOS PERSONALES -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === 'datos' }" id="datos" role="tabpanel">
        <div class="row">
          <!-- Columna 1 -->
          <div class="col-md-6 mb-3">
            <div class="card shadow-sm mb-4 h-100 border-0 rounded-lg">
              <div class="card-header bg-white py-3 d-flex flex-row align-items-center justify-content-between border-bottom-0">
                <h6 class="m-0 font-weight-bold text-dark"><i class="fas fa-user text-primary me-2"></i> Información Básica</h6>
                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modalEdicionPaciente" @click="datos1Paciente()" ><i class="fa-regular fa-pen-to-square"></i></button>
              </div>
              <div class="card-body bg-light rounded m-3 p-4 pt-3">
                <p class="text-capitalize mb-2"><b>Nombre:</b> {{ datosConsulta ? lowerCase(datosConsulta.name) +' '+lowerCase(datosConsulta.nombres) : '...' }}</p>
                <p class="mb-2"><b>DNI:</b> {{ datosConsulta ? datosConsulta.dni : '...' }}</p>
                <p class="mb-2"><b>Ocupación:</b> {{ datosConsulta ? datosConsulta.occupation : '...' }}</p>
                <p class="mb-2"><b>Grado de instrucción:</b>
                  <span v-if="datosConsulta.instruction_degree == 1">Inicial</span>
                  <span v-else-if="datosConsulta.instruction_degree == 2">Primaria</span>
                  <span v-else-if="datosConsulta.instruction_degree == 3">Secundaria</span>
                  <span v-else-if="datosConsulta.instruction_degree == 4">Superior</span>
                  <span v-else-if="datosConsulta.instruction_degree == 5">Técnico</span>
                  <span v-else-if="datosConsulta.instruction_degree == 6">Sin Instrucción</span>
                </p>
                <p class="mb-2"><b>Fecha de cumpleaños:</b> {{ datosConsulta ? fechaLatam(datosConsulta.birth_date) : '...' }} ({{ datosConsulta ? calculateAge(datosConsulta.birth_date) + ' años' : '...' }})</p>
                <p class="mb-2"><b>Estado civil:</b>
                  <span v-if="datosConsulta.marital_status == 1">Soltero</span>
                  <span v-else-if="datosConsulta.marital_status == 2">Casado</span>
                  <span v-else-if="datosConsulta.marital_status == 3">Viudo</span>
                  <span v-else-if="datosConsulta.marital_status == 4">Divorciado</span>
                  <span v-else-if="datosConsulta.marital_status == 5">Conviviente</span>
                </p>
              </div>
            </div>
          </div>

          <!-- Columna 2 -->
          <div class="col-md-6 mb-3">
            <div class="card shadow-sm mb-4 border-0 rounded-lg">
              <div class="card-header bg-white py-3 d-flex flex-row align-items-center justify-content-between border-bottom-0">
                <h6 class="m-0 font-weight-bold text-dark"><i class="fas fa-users text-warning me-2"></i> Persona de contacto de emergencia</h6>
                <button class="btn btn-sm btn-outline-warning" data-bs-toggle="modal" data-bs-target="#modalEditarPariente"><i class="fa-regular fa-pen-to-square"></i></button>
              </div>
              <div class="card-body bg-light rounded m-3 p-4 pt-3">
                <div v-if="datosConsulta.relative && datosConsulta.relative[0]">
                  <p class="text-capitalize mb-1"><b>Nombre:</b> {{ datosConsulta.relative[0].name && datosConsulta.relative[0].name!='null' ? lowerCase(datosConsulta.relative[0].name) : '...' }}</p>
                  <p class="mb-1"><b>Teléfono:</b> {{ datosConsulta.relative[0].phone && datosConsulta.relative[0].phone!='null' ? datosConsulta.relative[0].phone : '...' }}</p>
                  <p class="mb-1"><b>Parentesco:</b> {{ datosConsulta.relative[0].kinship && datosConsulta.relative[0].kinship!='null' ? datosConsulta.relative[0].kinship : '...' }}</p>
                </div>
                <div v-else><p class="text-muted small">No existe registro de pariente 1</p></div>
                <hr>
                <div v-if="datosConsulta.relative && datosConsulta.relative[1]">
                  <p class="text-capitalize mb-1"><b>Nombre:</b> {{ datosConsulta.relative[1].name && datosConsulta.relative[1].name!='null' ? lowerCase(datosConsulta.relative[1].name) : '...' }}</p>
                  <p class="mb-1"><b>Teléfono:</b> {{ datosConsulta.relative[1].phone && datosConsulta.relative[1].phone!='null' ? datosConsulta.relative[1].phone : '...' }}</p>
                  <p class="mb-1"><b>Parentesco:</b> {{ datosConsulta.relative[1].kinship && datosConsulta.relative[1].kinship!='null' ? datosConsulta.relative[1].kinship : '...' }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Recomendaciones y Archivos -->
          <div class="col-md-6 mb-3">
            <div class="card shadow-sm mb-4 border-0 rounded-lg">
              <div class="card-header bg-white py-3 d-flex flex-row align-items-center justify-content-between border-bottom-0">
                <h6 class="m-0 font-weight-bold text-dark"><i class="fa-regular fa-lightbulb text-info me-2"></i> Recomendaciones Profesionales</h6>
                <button class="btn btn-sm btn-outline-info" data-bs-toggle="modal" data-bs-target="#modalComentarios"><i class="fa-regular fa-pen-to-square"></i></button>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item border-0 px-0 py-2 small" v-for="comentario in comentarios"> 
                    <i class="fa-regular fa-comment text-muted me-2"></i> <strong>{{ comentario.nombre }}:</strong> {{ comentario.comment }}
                  </li>
                  <li class="list-group-item border-0 px-0 py-2 text-muted small" v-if="comentarios.length==0">No hay recomendaciones previas</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="card shadow-sm mb-4 border-0 rounded-lg">
              <div class="card-header bg-white py-3 d-flex flex-row align-items-center justify-content-between border-bottom-0">
                <h6 class="m-0 font-weight-bold text-dark"><i class="fa-solid fa-paperclip text-secondary me-2"></i> Archivos adjuntos</h6>
                <button class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#modalArchivos"><i class="fa-solid fa-upload"></i></button>
              </div>
              <div class="card-body d-flex align-items-center justify-content-center p-5 bg-light m-3 rounded pointer" data-bs-toggle="modal" data-bs-target="#modalArchivos">
                <div class="text-center text-muted">
                  <i class="fa-regular fa-file-lines fa-2x mb-2 d-block"></i> 
                  <span class="small">Vea y adjunte archivos a la Historia Clínica</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Etiquetas y Hobbies -->
          <div class="col-md-12 mb-3">
            <div class="card shadow-sm mb-4 border-0 rounded-lg">
              <div class="card-header bg-white py-3 border-bottom-0">
                <h6 class="m-0 font-weight-bold text-dark"><i class="fas fa-tags text-success me-2"></i> Perfil y Hobbies</h6>
              </div>
              <div class="card-body">
                <p class="mb-2" v-if="datosPaciente.semaforo && datosPaciente.semaforo.length>0">Perfil del paciente: 
                  <a class="text-capitalize badge bg-warning text-dark" href="#!" data-bs-toggle="modal" data-bs-target="#modalVerEstados">{{queEstado(datosPaciente.semaforo[0].codigo)}}</a>
                  <span class="ms-2 small text-muted" v-if="datosPaciente.semaforo[0].observaciones!=''">({{ datosPaciente.semaforo[0].observaciones }})</span>
                </p>
                <p class="mb-2" v-else>Perfil del paciente: 
                  <a class="text-capitalize badge bg-secondary" href="#!" data-bs-toggle="modal" data-bs-target="#modalVerEstados">Sin asignar</a>
                </p>
                <div class="mb-3 mt-3">
                  <strong class="d-block mb-2 small text-muted">Hobbies:</strong>
                  <span v-for="hobbie in misHobbies" class="badge text-capitalize rounded-pill bg-info text-dark mx-1 px-3 py-2 pointer" data-bs-toggle="modal" data-bs-target="#modalVerHobbies" >{{ hobbies[hobbie] }}</span>
                  <span v-if="misHobbies.length==0" class="badge rounded-pill bg-secondary px-3 py-2 pointer" data-bs-toggle="modal" data-bs-target="#modalVerHobbies" >Ninguno</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- HISTORIAL CLÍNICO -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === 'historial' }" id="historial" role="tabpanel">
        
        <!-- Accordion for Initial Evaluation (Psiquiatria) -->
        <div class="accordion mb-4 bg-white shadow-sm rounded-lg border-0" id="accordionInitialPsyq" v-if="dataUser.profession === 'Psiquiatra' || tienePsiquiatria">
          <div class="accordion-item border-0 rounded">
            <h2 class="accordion-header" id="headingPsyq">
              <button class="accordion-button bg-light font-weight-bold text-dark" :class="{'collapsed': !tienePsiquiatria}" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePsyq" aria-expanded="true" aria-controls="collapsePsyq">
                <i class="fas fa-brain text-primary me-2"></i> Diagnóstico Psiquiátrico Inicial
                <span class="ms-3 text-muted small" style="font-weight: normal" v-if="inicialPsiquiatria.created_at">
                  - {{ inicialPsiquiatria.created_at.substring(0, 10) }}
                </span>
              </button>
            </h2>
            <div id="collapsePsyq" class="accordion-collapse collapse" :class="{'show': tienePsiquiatria}" aria-labelledby="headingPsyq" data-bs-parent="#accordionInitialPsyq">
              <div class="accordion-body">
                <div v-if="!tienePsiquiatria" class="text-center py-4">
                  <button v-if="dataUser.profession == 'Psiquiatra'" class="btn btn-outline-primary" @click="evolucionModal()" data-bs-toggle="modal" data-bs-target="#evolutionModal">
                    <i class="fas fa-plus"></i> Crear la primera historia Psiquiátrica
                  </button>
                  <p v-else class="text-muted mb-0">No se aperturó historia aún</p>
                </div>
                <form v-else class="row g-4" @submit.prevent>
                  <div class="col-md-6">
                    <!-- Column 1 Fields -->
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted"><i class="fas fa-history text-primary me-1"></i>Antecedente General</label>
                      <p class="collapse__paragraph form-control bg-light" id="general_antecedent" :data-rol="rol === 'Psiquiatra'" @click="convertir('general_antecedent')" v-if="!inicialInputPsiquiatria.general_antecedent">
                        {{ inicialPsiquiatria ? inicialPsiquiatria.general_antecedent : '...' }}
                      </p>
                      <div class="collpase__textarea" v-else>
                        <textarea rows="3" class="form-control" v-model="inicialPsiquiatria.general_antecedent"></textarea>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted"><i class="fas fa-stethoscope text-primary me-1"></i>Principales signos y síntomas</label>
                      <p class="collapse__paragraph form-control bg-light" id="main_signs_symptoms" :data-rol="rol === 'Psiquiatra'" @click="convertir('main_signs_symptoms')" v-if="!inicialInputPsiquiatria.main_signs_symptoms">
                        {{ inicialPsiquiatria ? inicialPsiquiatria.main_signs_symptoms : '...' }}
                      </p>
                      <div class="collpase__textarea" v-else>
                        <textarea rows="3" class="form-control" v-model="inicialPsiquiatria.main_signs_symptoms"></textarea>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted"><i class="fas fa-notes-medical text-primary me-1"></i>Problema actual</label>
                      <p class="collapse__paragraph form-control bg-light" id="psiquiatria_Illness" :data-rol="rol === 'Psiquiatra'" @click="convertir('psiquiatria_illness')" v-if="!inicialInputPsiquiatria.illness">
                        {{ inicialPsiquiatria ? inicialPsiquiatria.illness : '...' }}
                      </p>
                      <div class="collpase__textarea" v-else>
                        <textarea rows="3" class="form-control" v-model="inicialPsiquiatria.illness"></textarea>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted"><i class="fas fa-clipboard-list text-primary me-1"></i>APC</label>
                      <p class="collapse__paragraph form-control bg-light" id="apc" :data-rol="rol === 'Psiquiatra'" @click="convertir('apc')" v-if="!inicialInputPsiquiatria.apc">
                        {{ inicialPsiquiatria ? inicialPsiquiatria.apc : '...' }}
                      </p>
                      <div class="collpase__textarea" v-else>
                        <textarea rows="3" class="form-control" v-model="inicialPsiquiatria.apc"></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 mb-3">
                        <label class="form-label font-weight-bold small text-muted"><i class="fas fa-comments text-primary me-1"></i>Lenguaje</label>
                        <p class="collapse__paragraph form-control bg-light" id="languaje" :data-rol="rol === 'Psiquiatra'" @click="convertir('languaje')" v-if="!inicialInputPsiquiatria.languaje">
                          {{ inicialPsiquiatria ? inicialPsiquiatria.languaje : '...' }}
                        </p>
                        <div class="collpase__textarea" v-else>
                          <textarea rows="3" class="form-control" v-model="inicialPsiquiatria.languaje"></textarea>
                        </div>
                      </div>
                      <div class="col-6 mb-3">
                        <label class="form-label font-weight-bold small text-muted"><i class="fas fa-brain text-primary me-1"></i>Pensamiento</label>
                        <p class="collapse__paragraph form-control bg-light" id="thought" :data-rol="rol === 'Psiquiatra'" @click="convertir('thought')" v-if="!inicialInputPsiquiatria.thought">
                          {{ inicialPsiquiatria ? inicialPsiquiatria.thought : '...' }}
                        </p>
                        <div class="collpase__textarea" v-else>
                          <textarea rows="3" class="form-control" v-model="inicialPsiquiatria.thought"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted"><i class="fas fa-heartbeat text-primary me-1"></i>Afecto</label>
                      <p class="collapse__paragraph form-control bg-light" id="affect" :data-rol="rol === 'Psiquiatra'" @click="convertir('affect')" v-if="!inicialInputPsiquiatria.affect">
                        {{ inicialPsiquiatria ? inicialPsiquiatria.affect : '...' }}
                      </p>
                      <div class="collpase__textarea" v-else>
                        <textarea rows="3" class="form-control" v-model="inicialPsiquiatria.affect"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <!-- Column 2 Fields -->
                    <div class="row">
                      <div class="col-6 mb-3">
                        <label class="form-label font-weight-bold small text-muted"><i class="fas fa-eye text-primary me-1"></i>Percepción</label>
                        <p class="collapse__paragraph form-control bg-light" id="percetion" :data-rol="rol === 'Psiquiatra'" @click="convertir('percetion')" v-if="!inicialInputPsiquiatria.percetion">
                          {{ inicialPsiquiatria ? inicialPsiquiatria.percetion : '...' }}
                        </p>
                        <div class="collpase__textarea" v-else>
                          <textarea rows="3" class="form-control" v-model="inicialPsiquiatria.percetion"></textarea>
                        </div>
                      </div>
                      <div class="col-6 mb-3">
                        <label class="form-label font-weight-bold small text-muted"><i class="fas fa-cogs text-primary me-1"></i>Función superior</label>
                        <p class="collapse__paragraph form-control bg-light" id="superior_function" :data-rol="rol === 'Psiquiatra'" @click="convertir('superior_function')" v-if="!inicialInputPsiquiatria.superior_function">
                          {{ inicialPsiquiatria ? inicialPsiquiatria.superior_function : '...' }}
                        </p>
                        <div class="collpase__textarea" v-else>
                          <textarea rows="3" class="form-control" v-model="inicialPsiquiatria.superior_function"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 mb-3">
                        <label class="form-label font-weight-bold small text-muted"><i class="fas fa-puzzle-piece text-primary me-1"></i>Abstracción</label>
                        <p class="collapse__paragraph form-control bg-light" id="abstraction" :data-rol="rol === 'Psiquiatra'" @click="convertir('abstraction')" v-if="!inicialInputPsiquiatria.abstraction">
                          {{ inicialPsiquiatria ? inicialPsiquiatria.abstraction : '...' }}
                        </p>
                        <div class="collpase__textarea" v-else>
                          <textarea rows="3" class="form-control" v-model="inicialPsiquiatria.abstraction"></textarea>
                        </div>
                      </div>
                      <div class="col-6 mb-3">
                        <label class="form-label font-weight-bold small text-muted"><i class="fas fa-user-clock text-primary me-1"></i>Conciencia</label>
                        <p class="collapse__paragraph form-control bg-light" id="conscience" :data-rol="rol === 'Psiquiatra'" @click="convertir('conscience')" v-if="!inicialInputPsiquiatria.conscience">
                          {{ inicialPsiquiatria ? inicialPsiquiatria.conscience : '...' }}
                        </p>
                        <div class="collpase__textarea" v-else>
                          <textarea rows="3" class="form-control" v-model="inicialPsiquiatria.conscience"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted"><i class="fas fa-lightbulb text-primary me-1"></i>Insight</label>
                      <p class="collapse__paragraph form-control bg-light" id="insight" :data-rol="rol === 'Psiquiatra'" @click="convertir('insight')" v-if="!inicialInputPsiquiatria.insight">
                        {{ inicialPsiquiatria ? inicialPsiquiatria.insight : '...' }}
                      </p>
                      <div class="collpase__textarea" v-else>
                        <textarea rows="3" class="form-control" v-model="inicialPsiquiatria.insight"></textarea>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted"><i class="fas fa-exclamation-triangle text-primary me-1"></i>Problemas Diagnóstico</label>
                      <p class="collapse__paragraph form-control bg-light" id="diagnostic_problems" :data-rol="rol === 'Psiquiatra'" @click="convertir('diagnostic_problems')" v-if="!inicialInputPsiquiatria.diagnostic_problems">
                        {{ inicialPsiquiatria ? inicialPsiquiatria.diagnostic_problems : '...' }}
                      </p>
                      <div class="collpase__textarea" v-else>
                        <textarea rows="3" class="form-control" v-model="inicialPsiquiatria.diagnostic_problems"></textarea>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted">Diagnóstico CIE-10</label>
                      <div class="form-group position-relative diagnostico-input" style="min-height: 100px;">
                        <div class="position-relative d-flex gap-2">
                          <input type="text" class="form-control" autocomplete="off" name="diagnostico" id="diagnostico" v-model="searchCie" @keyup="getDiagnostico" placeholder="Buscar CIE-10...">
                          <button class="btn btn-warning" @click="updateDiag">
                            <i class="fas fa-save" title="Guardar cambios"></i>
                          </button>
                        </div>
                        <div class="cie-content rounded overflow-auto mt-2 bg-white shadow-sm border" v-if="searchCie.length>0" style="max-height: 200px; position: absolute; z-index: 100; width: 100%;">
                          <div v-for="(cie, index) in dataCies" :key="index">
                            <span class="w-100 px-3 py-2 cie--hover d-block border-bottom pointer cie-item"
                              :class="{ 'bg-primary text-white': inicialPsiquiatria.diagnostic.find(el => el == cie.id) }"
                              :data-id="cie.id" @click="addCie">
                              {{ cie.id }} - {{ cie.code }} - {{ cie.description }}
                            </span>
                          </div>
                        </div>
                        <div class="d-flex flex-wrap gap-2 mt-3 overflow-auto">
                          <div v-if="cieAdd" v-for="(cieAgregado, index) in datosConsulta.cies" :key="`cie${index}`"
                            class="badge bg-warning text-dark p-2 d-flex align-items-center rounded-pill">
                            {{ typeof cieAgregado == 'object' ? `${cieAgregado.code} - ${cieAgregado.description}` : cieAgregado }}
                            <span :data-cie="index" class="cie-item ms-2 pointer text-danger" @click="deleteCie"><i class="fas fa-times"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted">Plan</label>
                      <p class="collapse__paragraph form-control bg-light" id="psiquiatria_plan" :data-rol="rol === 'Psiquiatra'" @click="convertir('psiquiatria_plan')" v-if="!inicialInputPsiquiatria.plan">
                        {{ inicialPsiquiatria ? inicialPsiquiatria.plan : '...' }}
                      </p>
                      <div class="collpase__textarea" v-else>
                        <textarea rows="3" class="form-control" v-model="inicialPsiquiatria.plan"></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- Accordion for Initial Evaluation (Psicologia) -->
        <div class="accordion mb-4 bg-white shadow-sm rounded-lg border-0" id="accordionInitialPsycho" v-if="dataUser.profession === 'Psicólogo' || tienePsicologia">
          <div class="accordion-item border-0 rounded">
            <h2 class="accordion-header" id="headingPsycho">
              <button class="accordion-button bg-light font-weight-bold text-dark" :class="{'collapsed': !tienePsicologia}" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePsycho" aria-expanded="true" aria-controls="collapsePsycho">
                <i class="fas fa-user-md text-primary me-2"></i> Diagnóstico Psicológico Inicial
                <span class="ms-3 text-muted small" style="font-weight: normal" v-if="initialPsychological.created_at">
                  - {{ initialPsychological.created_at.substring(0, 10) }}
                </span>
              </button>
            </h2>
            <div id="collapsePsycho" class="accordion-collapse collapse" :class="{'show': tienePsicologia}" aria-labelledby="headingPsycho" data-bs-parent="#accordionInitialPsycho">
              <div class="accordion-body">
                <div v-if="!tienePsicologia" class="text-center py-4">
                  <button v-if="dataUser.profession == 'Psicólogo'" class="btn btn-outline-primary" @click="evolucionModal()" data-bs-toggle="modal" data-bs-target="#evolutionModal">
                    <i class="fas fa-plus"></i> Crear la primera historia Psicológica
                  </button>
                  <p v-else class="text-muted mb-0">No se aperturó historia aún</p>
                </div>
                <form v-else class="row g-4" @submit.prevent>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted">Problema actual</label>
                      <p class="collapse__paragraph form-control bg-light" id="Psicologia_illness" :data-rol="rol === 'Psicólogo'" @click="convertir('Psicologia_illness')" v-if="!inicialInputPsychological.illness">
                        {{ initialPsychological.illness ? initialPsychological.illness : '...' }}
                      </p>
                      <div class="collpase__textarea" v-else>
                        <textarea rows="3" class="form-control" v-model="initialPsychological.illness"></textarea>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted">Antecedentes</label>
                      <p class="collapse__paragraph form-control bg-light" id="antecedent" :data-rol="rol === 'Psicólogo'" @click="convertir('antecedent')" v-if="!inicialInputPsychological.antecedent">
                        {{ initialPsychological.antecedent ? initialPsychological.antecedent : '...' }}
                      </p>
                      <div class="collpase__textarea" v-else>
                        <textarea rows="3" class="form-control" v-model="initialPsychological.antecedent"></textarea>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted">Dinámica</label>
                      <p class="collapse__paragraph form-control bg-light" id="dynamic" :data-rol="rol === 'Psicólogo'" @click="convertir('dynamic')" v-if="!inicialInputPsychological.dynamic">
                        {{ initialPsychological.dynamic ? initialPsychological.dynamic : '...' }}
                      </p>
                      <div class="collpase__textarea" v-else>
                        <textarea rows="3" class="form-control" v-model="initialPsychological.dynamic"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted">Actitud actual</label>
                      <p class="collapse__paragraph form-control bg-light" id="attitude" :data-rol="rol === 'Psicólogo'" @click="convertir('attitude')" v-if="!inicialInputPsychological.attitude">
                        {{ initialPsychological.attitude ? initialPsychological.attitude : '...' }}
                      </p>
                      <div class="collpase__textarea" v-else>
                        <textarea rows="3" class="form-control" v-model="initialPsychological.attitude"></textarea>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted">DX</label>
                      <p class="collapse__paragraph form-control bg-light" id="dx" :data-rol="rol === 'Psicólogo'" @click="convertir('dx')" v-if="!inicialInputPsychological.dx">
                        {{ initialPsychological.dx ? initialPsychological.dx : '...' }}
                      </p>
                      <div class="collpase__textarea" v-else>
                        <textarea rows="3" class="form-control" v-model="initialPsychological.dx"></textarea>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label font-weight-bold small text-muted">Plan</label>
                      <p class="collapse__paragraph form-control bg-light" id="Psicologia_plan" :data-rol="rol === 'Psicólogo'" @click="convertir('Psicologia_plan')" v-if="!inicialInputPsychological.plan">
                        {{ initialPsychological.plan ? initialPsychological.plan : '...' }}
                      </p>
                      <div class="collpase__textarea" v-else>
                        <textarea rows="3" class="form-control" v-model="initialPsychological.plan"></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- Evoluciones List -->
        <div class="d-flex justify-content-between align-items-center mb-3 mt-4">
          <h6 class="font-weight-bold mb-0 text-dark d-flex align-items-center">
            <i class="fas fa-file-medical-alt text-success me-2"></i> Evoluciones de Seguimiento
          </h6>
          <p class="small mb-0" :class="{'text-success': datosConsulta.maximo==0, 'text-danger' : datosConsulta.maximo>0}">
            <i class="far fa-bell me-1"></i>
            <span v-if="datosConsulta.maximo==0">Mostrando <strong>todos</strong> los registros.</span>
            <span v-if="datosConsulta.maximo>0">Mostrando últimos 6 meses (<strong>+{{ datosConsulta.maximo }}</strong> previas).</span>
          </p>
        </div>

        <div class="row">
          <div class="col-md-4 mb-4" v-for="(evolution, index) in datosConsulta.medical_evolutions" :key="index">
            <div class="card h-100 border-0 shadow-sm rounded-lg" :class="dondeEsta(evolution.type)" @mouseover="colorear(index)" @mouseleave="descolorear(index)">
              <div class="card-header border-bottom-0 py-3 d-flex align-items-center justify-content-between pointer" @click="mostrarCard(index)" data-bs-toggle="modal" data-bs-target="#modalVerDetalle">
                <h6 class="m-0 font-weight-bold text-white"><i class="fas fa-calendar-day me-2"></i> {{ fechaLectura(evolution.date) }}</h6>
                <span class="badge bg-white text-dark small rounded-pill">#{{ evolution.id }}</span>
              </div>
              <div class="card-body d-flex flex-column bg-white">
                <div class="mb-3">
                  <span class="badge bg-light text-dark border px-2 py-1 mb-2">{{ evolution.clasificacion_combinada || (evolution.type_evolution ? evolution.type_evolution.clasificacion : 'Sin asignar') }}</span>
                  <p class="small text-muted mb-1"><i class="fas fa-user-md me-1"></i> {{ evolution.professional ? evolution.professional.name : 'Sin asignar' }}</p>
                  <p class="small text-dark mb-0 mt-2 line-clamp-3" style="font-size: 0.85rem;">"{{ evolution ? maxStringCharacter(evolution.content, 80) : '...' }}"</p>
                </div>
                
                <div class="mt-auto pt-3 border-top d-flex gap-2 flex-wrap">
                  <button @click="updateModal(evolution)" data-bs-toggle="modal" data-bs-target="#updatedModal" class="btn btn-outline-primary btn-sm flex-fill" v-if="evolution.professional_id == dataUser.id && (calcularDias(evolution.date)<=2 || evolution.auth == 1)">
                    <i class="fas fa-edit"></i> Editar
                  </button>
                  <button class="btn btn-outline-secondary btn-sm flex-fill" data-bs-toggle="modal" data-bs-target="#modalNuevoSeguimiento" @click="idEvolucion = evolution.id; indexGlobal = index" v-if="evolution.professional_id == dataUser.id">
                    <i class="fas fa-plus"></i> Seguimiento
                  </button>
                  <!-- Compatibility for editModal -->
                  <button @click="editEvolution(evolution)" class="btn btn-success d-none"
                    v-if="evolution.professional_id == dataUser.id" data-bs-toggle="modal" data-bs-target="#editModal">
                    <i class="fas fa-edit"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!datosConsulta.medical_evolutions || datosConsulta.medical_evolutions.length === 0" class="col-12">
            <div class="alert alert-light text-center border text-muted py-5">
              <i class="fas fa-folder-open fa-3x mb-3 text-secondary opacity-50"></i>
              <p class="mb-0">No hay evoluciones de seguimiento registradas para este paciente.</p>
            </div>
          </div>
        </div>

      </div>

      <!-- LÍNEA DE VIDA -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === 'linea' }" id="linea" role="tabpanel">
        <div class="card shadow-sm border-0 rounded-lg">
          <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center">
            <h6 class="m-0 font-weight-bold text-dark"><i class="fas fa-stream text-primary me-2"></i> Línea de Vida Clínica</h6>
            <button class="btn btn-outline-success btn-sm" data-bs-target="#nuevoAcontecimiento" data-bs-toggle="modal">
              <i class="far fa-comment-alt me-1"></i> Nuevo Acontecimiento
            </button>
          </div>
          <div class="card-body p-0">
            <lineaTiempo :id="$route.params.idPaciente"></lineaTiempo>
          </div>
        </div>
      </div>

      <!-- NUTRICIÓN -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === 'nutricion' }" id="nutricion" role="tabpanel">
        <nutricionHome :dataCies="dataCies" :id="$route.params.idPaciente" ></nutricionHome>
      </div>

      <!-- RECETAS Y ÓRDENES -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === 'recetas' }" id="recetas" role="tabpanel">
        <!-- Replicaremos el diseño para Recetas y construiremos la parte de Órdenes aquí -->
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card shadow-sm border-0 rounded-lg h-100">
              <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center border-bottom">
                <h6 class="m-0 font-weight-bold text-dark"><i class="fas fa-prescription text-primary me-2"></i> Recetas Médicas</h6>
                <router-link v-if="dataUser.profession!='Psicólogo'" :to="{ path: `/profesional/recetas/${datosConsulta.id}` }" class="btn btn-outline-primary btn-sm">
                  <i class="fas fa-plus"></i> Nueva Receta
                </router-link>
              </div>
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table table-hover mb-0">
                    <thead class="bg-light text-muted small">
                      <tr>
                        <th class="ps-4 py-3">Fecha</th>
                        <th class="py-3 text-end pe-4">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(prescription, index) in datosConsulta.prescriptions" :key="index">
                        <td class="align-middle ps-4 py-3 fw-bold">{{ prescription ? prescription.attention_date : '...' }}</td>
                        <td class="align-middle text-end pe-4 py-3">
                          <a v-if="prescription" class="btn btn-sm btn-outline-danger" :href="`/api/pdf/${prescription.id}?token=${$token}`" target="_blank">
                            <i class="fas fa-file-pdf"></i> PDF
                          </a>
                        </td>
                      </tr>
                      <tr v-if="!datosConsulta.prescriptions || datosConsulta.prescriptions.length === 0">
                        <td colspan="2" class="text-center text-muted py-4">No hay recetas emitidas.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 mb-4">
            <div class="card shadow-sm border-0 rounded-lg h-100">
              <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center border-bottom">
                <h6 class="m-0 font-weight-bold text-dark"><i class="fas fa-notes-medical text-success me-2"></i> Órdenes Médicas</h6>
                <button class="btn btn-outline-success btn-sm" @click="crearNuevaOrden">
                  <i class="fas fa-plus"></i> Nueva Orden
                </button>
              </div>
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table table-hover mb-0">
                    <thead class="bg-light text-muted small">
                      <tr>
                        <th class="ps-4 py-3">Fecha</th>
                        <th class="py-3">Tipo/Examen</th>
                        <th class="py-3 text-end pe-4">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(orden, index) in ordenesMedicas" :key="index">
                        <td class="align-middle ps-4 py-3 fw-bold">{{ formatOnlyDate(orden.created_at) }}</td>
                        <td class="align-middle py-3 text-muted">{{ orden.descripcion || 'Orden Médica' }}</td>
                        <td class="align-middle text-end pe-4 py-3">
                          <button class="btn btn-sm btn-outline-primary" @click="verDetalleOrden(orden)">
                            <i class="fas fa-eye"></i>
                          </button>
                        </td>
                      </tr>
                      <tr v-if="!ordenesMedicas || ordenesMedicas.length === 0">
                        <td colspan="3" class="text-center text-muted py-4">No hay órdenes médicas registradas.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PRUEBAS PSICOLÓGICAS -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === 'pruebas' }" id="pruebas" role="tabpanel">
        <div class="card shadow-sm border-0 rounded-lg">
          <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center">
            <h6 class="m-0 font-weight-bold text-dark"><i class="fas fa-brain text-info me-2"></i> Pruebas Psicológicas</h6>
            <div class="dropdown">
              <button class="btn btn-info text-white btn-sm dropdown-toggle" type="button" id="dropdownPruebas" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-plus me-1"></i> Aplicar Prueba
              </button>
              <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownPruebas">
                <li><a class="dropdown-item py-2" href="#" @click.prevent="irAPrueba('phq-9')">PHQ-9 (Depresión)</a></li>
                <li><a class="dropdown-item py-2" href="#" @click.prevent="irAPrueba('gad-7')">GAD-7 (Ansiedad)</a></li>
                <li><a class="dropdown-item py-2" href="#" @click.prevent="irAPrueba('phq-15')">PHQ-15 (Somatización)</a></li>
                <li><a class="dropdown-item py-2" href="#" @click.prevent="irAPrueba('mdq')">MDQ (Bipolaridad)</a></li>
                <li><a class="dropdown-item py-2" href="#" @click.prevent="irAPrueba('srq')">SRQ-18 (General)</a></li>
                <li><a class="dropdown-item py-2" href="#" @click.prevent="irAPrueba('burns')">Ansiedad de Burns</a></li>
                <li><a class="dropdown-item py-2" href="#" @click.prevent="irAPrueba('anszung')">Ansiedad de Zung</a></li>
                <li><a class="dropdown-item py-2" href="#" @click.prevent="irAPrueba('depzung')">Depresión de Zung</a></li>
              </ul>
            </div>
          </div>
          <div class="card-body bg-light p-4">
            
            <div class="row" v-if="Object.values(allExams).some(exam => exam.value && exam.value.length > 0)">
              <div class="col-md-4 mb-4" v-for="(examData, examKey) in allExams" :key="examKey" v-show="examData.value && examData.value.length > 0">
                <div class="card border-0 shadow-sm rounded-lg h-100">
                  <div class="card-header bg-white border-bottom-0 py-3">
                    <h6 class="mb-0 font-weight-bold text-primary">{{ examData.name }}</h6>
                  </div>
                  <div class="card-body p-0">
                    <div class="list-group list-group-flush rounded-bottom">
                      <div class="list-group-item d-flex justify-content-between align-items-center py-3" v-for="(resultado, idx) in examData.value" :key="idx">
                        <div>
                          <p class="mb-0 font-weight-bold small">{{ formatDate(resultado.created_at) }}</p>
                          <p class="mb-0 text-muted small mt-1" v-if="resultado.diagnostico || resultado.resultado">Diag: {{ resultado.diagnostico || resultado.resultado }}</p>
                        </div>
                        <button class="btn btn-outline-info btn-sm rounded-circle" @click="verDetallePrueba(resultado, examData.name)" title="Ver detalles">
                          <i class="fas fa-eye"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="text-center py-5" v-else>
              <i class="fas fa-clipboard-list fa-3x text-muted opacity-50 mb-3"></i>
              <h6 class="text-muted">No se han realizado pruebas psicológicas</h6>
              <p class="text-muted small mb-0">Seleccione "Aplicar Prueba" para comenzar una nueva evaluación.</p>
            </div>

          </div>
        </div>
      </div>
    </div> <!-- End Tab Content -->

		<!-- Modal de examenes -->
		<div class="modal fade" id="examenModal" tabindex="-1" aria-labelledby="modalEvolution" aria-hidden="true">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header bg-warning text-dark">
						<h5 class="modal-title font-weight-bold" id="infoModalLabel"><i class="fas fa-file-medical me-2"></i> Exámenes</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>

					<keep-alive>
						<component v-if="this.datosExamPaciente.id" :is="component" @keepComponentExam="keepExamFunction"
							:dataPatient="datosExamPaciente" :dataExam="this.datosExamenes" :dataExamBasic="datosConsulta.examenes_basicos" :dataExamPersonalized="datosConsulta.examenes_personalizados" :profesionales="profesionalesTodos"/>
					</keep-alive>

				</div>
			</div>
		</div>

		<!-- Modal de recetas -->
		<div class="modal fade" id="recetasModal" tabindex="-1" aria-labelledby="modalEvolution" aria-hidden="true">
			<div class="modal-dialog modal-lg">
				<div class="modal-content border-0 shadow-lg">
					<div class="modal-header bg-primary text-white border-0">
						<h5 class="modal-title font-weight-bold" id="infoModalLabel"><i class="fas fa-prescription me-2"></i> Ver recetas</h5>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>

					<div class="modal-body p-0">
						<table class="table table-hover mb-0">
							<thead class="bg-light">
								<tr>
									<th class="ps-4">#</th>
									<th>Fecha</th>
									<th class="text-end pe-4">Acción</th>
								</tr>
							</thead>
							<tbody>
								<tr v-if="datosConsulta" v-for="(prescription, index) in datosConsulta.prescriptions" :key="index">
									<td class="ps-4 fw-bold">{{ index + 1 }}</td>
									<td>{{ prescription ? prescription.attention_date : '...' }}</td>
									<td class="text-end pe-4">
										<a v-if="prescription" class="btn btn-sm btn-outline-danger" :href="`/api/pdf/${prescription.id}?token=${$token}`"
											target="_blank"><i class="fas fa-file-pdf me-1"></i> Ver PDF</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

    <!-- Modal Detalles de Prueba (Agregado para nueva funcionalidad) -->
    <div class="modal fade" id="modalDetallePrueba" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header border-bottom-0 bg-light">
            <h5 class="modal-title fw-bold text-dark"><i class="fas fa-brain text-info me-2"></i> Detalle de Prueba</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body" v-if="pruebaSeleccionada">
            <h6 class="fw-bold mb-3">{{ pruebaSeleccionada.nombreExamen }}</h6>
            <div class="p-3 bg-light rounded border mb-3">
              <p class="mb-1 small text-muted">Fecha Aplicación:</p>
              <p class="fw-bold mb-2">{{ formatDate(pruebaSeleccionada.created_at) }}</p>
              <p class="mb-1 small text-muted">Puntaje / Resultado:</p>
              <p class="fw-bold mb-2 text-primary fs-5">{{ pruebaSeleccionada.score || pruebaSeleccionada.resultado || pruebaSeleccionada.suma || 'N/A' }}</p>
              <p class="mb-1 small text-muted">Diagnóstico:</p>
              <p class="fw-bold mb-0 text-dark">{{ pruebaSeleccionada.diagnostico || 'N/A' }}</p>
            </div>
          </div>
          <div class="modal-footer border-top-0 pt-0">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>

		<!-- Componentes y Modales originales -->
		<updated-modal :datosModal="dataModal" @evolutionUpdated="refreshEvoluciones"></updated-modal>
		<edit-modal :datosModal="dataModal" @evolutionUpdated="refreshEvoluciones"></edit-modal>
		<modalVerDetalle :miniRespuesta="miniRespuesta"></modalVerDetalle>
		<modal-ver-triajes-viejos :triajes="datosConsulta.triajes"></modal-ver-triajes-viejos>
		<modal-editar-paciente :dataPatient="dato1" ></modal-editar-paciente>
		<ModalEditarPariente v-if="datosConsulta.relative" :id="datosExamPaciente.id" :relative="datosConsulta.relative" @updatePariente="updatePariente"></ModalEditarPariente>
		<ModalVerEstados :dataPatient="datosPaciente" :estados="estados"></ModalVerEstados>
		<ModalVerHobbies :hobbies="hobbies" :id="datosConsulta.id" :misHobbies="misHobbies" ></ModalVerHobbies>
		<ModalComentarios :comentarios="comentarios" :idProfesional="dataUser.id" @refrescarComentarios="updateComentarios" ></ModalComentarios>
		<ModalProximaCita :profesional="dataUser" :paciente="datosPaciente"></ModalProximaCita>
		<ModalArchivos :idPaciente="datosConsulta.id" :idProfesional="dataUser.id" ></ModalArchivos>
		<ModalNuevoAcontecimiento :idPaciente="datosConsulta.id" :idProfesional="dataUser.id"></ModalNuevoAcontecimiento>
		<evolution-modal :dataUser="dataUser.profession" :datosIdEvolucion="datosIdEvolucion" ></evolution-modal>
		<modalNuevoSeguimiento :idProfesional="dataUser.id"  :idEvolucion="idEvolucion" @agregarComentario="agregarComentario"></modalNuevoSeguimiento>
		<ModalAgendarCita :profesional="dataUser" :paciente="datosPaciente"></ModalAgendarCita>
		
	</div>
</template>

<script>

import editModal from './editEvolution.vue'
import updatedModal from './updatedEvolutionModal.vue';
import ExamResult from './ExamResult.vue';
import ExamTable from './ExamTable.vue';
import { dateNow } from '../../../../helpers/Time.js'
import moment from 'moment';
import modalVerDetalle from './ModalVerDetalle.vue';
import ModalComentarios from './ModalComentarios.vue';
import ModalVerTriajesViejos from './../../../recepcionista/components/pacientes/ModalVerTriajesViejos.vue';
import ModalEditarPaciente from './../../../recepcionista/components/pacientes/ModalEditarPaciente.vue'
import ModalEditarPariente from './ModalEditarPariente.vue'
import ModalVerEstados from './../../../recepcionista/components/pacientes/ModalVerEstados.vue'
import ModalVerHobbies from './../../../recepcionista/components/pacientes/reportes/ModalVerHobbies.vue'
import ModalProximaCita from './ModalProximaCita.vue'
import ModalAgendarCita from './ModalAgendarCita.vue'
import ModalArchivos from './ModalArchivos.vue'
import BarChart  from './grafico/barras'
import ModalNuevoAcontecimiento from './ModalNuevoAcontecimiento.vue'
import lineaTiempo from './grafico/lineaTiempo.vue'
import EvolutionModal from './EvolucionModal.vue'
import modalNuevoSeguimiento from './ModalNuevoSeguimiento.vue'
import nutricionHome from '../nutricion/HomeNutricion.vue'

export default {
	name: 'evolucionPaciente',

	components: { updatedModal, ExamResult, ExamTable, editModal, modalVerDetalle, ModalVerTriajesViejos, ModalEditarPariente, ModalVerEstados, ModalEditarPaciente, ModalVerHobbies, BarChart, ModalComentarios, ModalProximaCita, ModalArchivos, ModalNuevoAcontecimiento, lineaTiempo, EvolutionModal, modalNuevoSeguimiento, nutricionHome, ModalAgendarCita },

	data() {
		return {
            ordenesMedicas: [],
            pruebaSeleccionada: null,
            allExams: {
				scr: { name: 'SCL90R', value: [] },
				burns: { name: 'ANSIEDAD DE BURNS', value: [] },
				millon: { name: 'MILLON', value: [] },
				zungdep: { name: 'DEPRESIÓN DE ZUNG', value: [] },
				zunganxie: { name: 'ANSIEDAD DE ZUNG', value: [] },
				phq: { name: 'PHQ-9', value: [] },
				gad: { name: 'GAD-7', value: [] },
				bdi: { name: 'BDI-2', value: [] },
				mcmi: { name: 'MCMI-II', value: [] },
				baron: { name: 'BARON', value: [] },
				eysencka: { name: 'EYSENCK-A', value: [] },
				eysenckb: { name: 'EYSENCK-B', value: [] },
                phq15: { name: 'PHQ-15', value: [] },
                mdq: { name: 'MDQ', value: [] },
                srq: { name: 'SRQ-18', value: [] },
			},
			activeTab: 'historial',
			autoSaveInfo: '', profesionalesTodos:[],
			datosConsulta: { triajes:[], examenes_basicos:[], examenes_personalizados:{burns:[], gads:[], scrs:[], zung_anxieties :[], zung_depressions :[]} },
			evolucionPsiquiatria: [1,2,3,4,5,6,16,17], //Ver tabla de precios, son los IDs
			evolucionPsicologia: [7,8,9,10,11,12,18,22,27], //Ver tabla de precios, son los IDs
			evolucionTerapista: [90,91], //Ver tabla de precios, son los IDs
			evolucionTecnologo: [92,93], //Ver tabla de precios, son los IDs
			evolucionNutricion: [77,78], //Ver tabla de precios, son los IDs
			cardUpdate: '',         // Va el el nombre del card | Psiquiatra | Psicologia | perfil | etc
			dobleClick: false,relative: [],
			switch: 0,
			inputActive: '',
			rol: '',
			consultaHoy: false,
			dataCies: null,
			searchCie: '',
			cieAdd: [], indexGlobal: -1, miniRespuesta: { nombre: '', contenido: '', firma: '', comentarios:[] }, comentarios:[], dato1:{}, idEvolucion:-1,
			datosIdEvolucion:{patient:{id:-1}, professional:{id:-1}},
			component: "ExamTable",
			datosExamenes: [],
			datosExamPaciente: {
				name: '',
				id: '',
				tipoExam: 'SCL90R'
			},
			estados:[
				{id: 1, valor: 'Neutro', detalle: 'No tiene ningún registro de actitud'},
				{id: 2, valor: 'cumplidor', detalle: 'es un paciente exclente, comprometido'},
				{id: 3, valor: 'promotor', detalle: 'promueve actividades entre sus compañeros o la empresa'},
				{id: 4, valor: 'wow', detalle: 'es involucrado en actividades, participativo'},
				{id: 5, valor: 'reprogramador', detalle: 'suele aplazarcitas y actividades'},
				{id: 6, valor: 'exigente', detalle: 'un paciente/cliente que siempre pide un trato especial'},
				{id: 7, valor: 'deudor', detalle: 'paciente con deudas'},
				{id: 8, valor: 'insatisfecho', detalle: 'suele quejarse de los servicios'},
				{id: 9, valor: 'peligroso', detalle: 'paciente con amenazas o actos de violencia.'},
			], datosPaciente:{ semaforo:[]},

			inicialPsiquiatria: {
				id: '',
				main_signs_symptoms: '...',
				general_antecedent: '...',
				illness: '...',
				apc: '...',
				languaje: '...',
				thought: '...',
				affect: '...',
				percetion: '...',
				superior_function: '...',
				abstraction: '...',
				conscience: '...',
				insight: '...',

				diagnostic_problems: '...',
				diagnostic: '...',
				plan: '...',

				professional_id: '',
				patient_id: '',

				created_at: ''
			},

			initialPsychological: {
				id: '',
				illness: '...', // Enfermedad
				antecedent: '...',
				dynamic: '...',
				attitude: '...',
				dx: '...',
				plan: '...',
				professional_id: '',
				patient_id: '',

				created_at: ''
			},

			inicialInputPsiquiatria: {
				main_signs_symptoms: false,
				general_antecedent: false,
				illness: false,
				apc: false,
				languaje: false,
				thought: false,
				affect: false,
				percetion: false,
				superior_function: false,
				abstraction: false,
				conscience: false,
				insight: false,
				diagnostic_problems: false,
				diagnostic: false,
				plan: false,
			},

			inicialInputPsychological: {
				illness: false,
				antecedent: false,
				dynamic: false,
				attitude: false,
				dx: false,
				plan: false,
			},

			dataModal: {},
			hobbies:['pintura','dibujo', 'fotografía', 'tejido', 'costura', 'joyería', 'senderismo', 'acampar', 'jardinería', 'pesca', 'ciclismo', 'deportes', 'fútbol', 'basket', 'tenis', 'ajedrez', 'juegos de mesa', 'billar', 'música', 'tocar un instrumento', 'canto', 'composición musical', 'producción musical', 'gastronomía', 'cocina', 'recetas', 'horneado', 'postres', 'manualidades', 'origami', 'modelodo en arcilla', 'creación', 'natación', 'surf', 'kayac', 'buceo', 'esquí', 'tecnología', 'programación', 'robótica', 'computación', 'edición de videos', 'diseño gráfico', 'coleccionismo', 'monedas', 'vinilos', 'baile', 'danzas', 'escritura', 'periodismo', 'poesía', 'libros', 'lectura', 'cuentos', 'idiomas', 'viajes', 'exploración de lugares', 'fitnes', 'gym', 'yoga', 'pilates', 'entrenamiento', 'meditación', 'voluntariado', 'mascotas', 'animalista', 'astronomía', 'jardinería', 'plantas', 'huertos', 'paisajes', 'cine', 'series', 'novelas'], misHobbies:[],

			// Datos para agregar una nueva evolución
			evolution: {
				content: '',
				auth: 0
			}, tienePsiquiatria: false, tienePsicologia: false
		}
	},

	props: {
		dataUser: Object,
		datosModal: Object,
		dataPatient: {},
		dataExam: Array
	},

	methods: {

    // Add these methods inside methods: block
    formatDate(dateStr) {
      if (!dateStr) return '';
      const date = new Date(dateStr);
      return date.toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    },
    formatOnlyDate(dateStr) {
      return this.formatDate(dateStr);
    },
    irAPrueba(ruta) {
      // Abre en nueva pestana o usa router
      window.open(`/profesional/${ruta}/${this.datosConsulta.id}`, '_blank');
    },
    verDetallePrueba(resultado, nombreExamen) {
      this.pruebaSeleccionada = { ...resultado, nombreExamen };
      var myModal = new bootstrap.Modal(document.getElementById('modalDetallePrueba'));
      myModal.show();
    },
    crearNuevaOrden() {
      if (this.datosConsulta && this.datosConsulta.appointments && this.datosConsulta.appointments.length > 0) {
        const sortedAppointments = [...this.datosConsulta.appointments].sort((a,b) => new Date(b.date) - new Date(a.date));
        const latestApp = sortedAppointments[0];
        window.open(`/profesional/examenes/${latestApp.id}`, '_blank');
      } else {
        this.$swal({
          icon: 'error',
          title: 'Sin Citas',
          text: 'El paciente no tiene citas registradas para asignar una orden médica.'
        });
      }
    },

		getExamPromise() {
			Promise.all([
				this.axios(`/api/zungDep/${this.$route.params.idPaciente}`),
				this.axios(`/api/zungAns/${this.$route.params.idPaciente}`),
				this.axios(`/api/millon/${this.$route.params.idPaciente}`),
				this.axios(`/api/burns/${this.$route.params.idPaciente}`),
				this.axios(`/api/src/${this.$route.params.idPaciente}`),
				this.axios(`/api/exam/${this.$route.params.idPaciente}`),
			])
			.then(res => {
					const [ zungDep, zungAns, millon, burn, src, exam ] = res;
					this.allExams.scr.value = src.data;
					this.allExams.burns.value = burn.data;
					this.allExams.millon.value = millon.data;
					this.allExams.zunganxie.value = zungAns.data;
					this.allExams.zungdep.value = zungDep.data;
                    
                    // Filter exams correctly based on exam.data if needed
			})
			.catch(err => console.error(err))
		},

		evolucionModal () {
			console.log('que');
			this.datosIdEvolucion.professional.id = this.dataUser.id
			this.datosIdEvolucion.patient.id = this.datosConsulta.id
      this.$emit('datosEmitModal', this.dataConsulta)
    },
		refreshInfo(id) {
			this.autoSaveInfo = localStorage.getItem(id)
		},
		toDischarge() {
			this.$swal({
				title: 'Dar de alta al paciente',
				text: 'Ingrese un comentario sobre el alta:',
				input: 'textarea',
				inputPlaceholder: 'Comentarios...',
				showDenyButton: true,
				confirmButtonText: 'Dar de Alta',
				denyButtonText: 'Cancelar',
				preConfirm: (comentario) => {
					if (!comentario) {
						this.$swal.showValidationMessage('El comentario es obligatorio para dar de alta');
					}
					return comentario;
				}
			}).then((result) => {
				if (result.isConfirmed) {
					let typeDischarge = this.dataUser.profession === 'Psiquiatra' ? 2 : 1;
					
					this.axios.post('/api/discharge', {
						id: this.$route.params.idPaciente,
						idProfesional: this.dataUser.id,
						type: typeDischarge,
						comments: result.value
					})
					.then((res) => {
						this.$swal(res.data.msg)
						this.getHistories()
					});
				}
			})
		},
		editEvolution(evolution) {
			this.dataModal = evolution
		},
		updatePariente(pariente){
			/* if(pariente?.nombre){
				this.datosConsulta.relative[0].name = pariente.nombre
				this.datosConsulta.relative[0].phone = pariente.celular
				this.datosConsulta.relative[0].kinship = pariente.parentesco
			}
			if(pariente?.nombre2){
				this.datosConsulta.relative[1].name = pariente.nombre2
				this.datosConsulta.relative[1].phone = pariente.celular2
				this.datosConsulta.relative[1].kinship = pariente.parentesco2
			} */
			this.datosConsulta.relative = pariente
		},
		async getHistories() {
			await this.axios.get(`/api/patientEvolution/${this.$route.params.idPaciente}/${this.$attrs.idUser}`)
				.then(res => {
					this.datosConsulta = res.data;
					this.misHobbies = JSON.parse(this.datosConsulta.hobbies)
					console.log(this.datosConsulta)
					this.datosConsulta.medical_evolutions = this.datosConsulta.medical_evolutions.sort(function (a, b) {
						if (a.date < b.date) {
							return -1;
						}
						if (a.date > b.date) {
							return 1;
						}

						return 0;
					})

					this.datosExamPaciente.name = this.datosConsulta.name;
					this.datosExamPaciente.id = this.datosConsulta.id;


					if (res.data.initial_psychiatric_history) {
						this.inicialPsiquiatria = res.data.initial_psychiatric_history
						this.inicialPsiquiatria.diagnostic = [];
						res.data.cies.forEach(el => {
							this.inicialPsiquiatria.diagnostic.push(el.id.toString())
						})
					} else {
						this.inicialPsiquiatria;
					}

					res.data.initial_psychological_history
						? this.initialPsychological = res.data.initial_psychological_history
						: this.initialPsychological;

					this.datosConsulta.medical_evolutions = this.datosConsulta.medical_evolutions.reverse()

					this.evolution.patient_id = this.datosConsulta.id;

					this.tienePsiquiatria = res.data.initial_psychiatric_history != null
					this.tienePsicologia = res.data.initial_psychological_history != null

                    // Extract ordenesMedicas
                    let ordenes = [];
                    if (res.data.appointments) {
                        res.data.appointments.forEach(app => {
                            if (app.medical_exams && app.medical_exams.length > 0) {
                                app.medical_exams.forEach(exam => {
                                    ordenes.push({
                                        ...exam,
                                        created_at: app.date || exam.pivot.attention_date || exam.created_at,
                                        descripcion: exam.name
                                    });
                                });
                            }
                        });
                    }
                    // Sort descending by date
                    this.ordenesMedicas = ordenes.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

				})
				.catch(err => {
					console.error(err)
				})
			await this.axios.get(`/api/datosPacienteSemaforo/${this.$route.params.idPaciente}`)
			.then(res =>{
				this.datosPaciente={
					id: this.datosConsulta.id,
					name: this.datosConsulta.name,
					semaforo: res.data
				}
			})
			this.axios.get('/api/profesional')
			.then(res=> this.profesionalesTodos= res.data)

			this.axios.get('/api/listRecomendation/'+this.$route.params.idPaciente)
			.then(res=> this.comentarios= res.data)
			
		},
		async updatedConsult() {
			let data = Object;
			if (this.dataUser.profession === 'Psiquiatra') {
				data = this.inicialPsiquiatria
			} else {
				data = this.initialPsychological
			}

			let url = this.dataUser.profession === 'Psiquiatra' ? 'initialPsychiatric' : 'initialPsychological'
			let idHistoria = this.dataUser.profession === 'Psiquiatra' ? this.datosConsulta.initial_psychiatric_history.id : this.datosConsulta.initial_psychological_history.id

			await axios.put(`/api/${url}/${idHistoria}`, data)
				.then(res => {
					// console.log(res.data)
				})
				.catch(err => {
					console.error(err)
				})

			this.switch = 0
			this.inputSwitchActive(this.inputActive, false)
			this.inputActive = ""
		},
		updateComentarios(){
			this.axios.get('/api/listRecomendation/'+this.$route.params.idPaciente)
			.then(res=> this.comentarios= res.data)
		},

		// async addEvolution () {
		//   await this.axios.post('/api/evolution', this.evolution)
		//   .then(res => {
		//     this.getHistories()
		//   })
		//   .catch(err => {
		//     console.error(err)
		//   })
		// },

		async getDiagnostico() {
			await this.axios.get(`/api/cies/${this.searchCie === '' ? 'a' : this.searchCie}`)
				.then(res => {
					this.dataCies = res.data;
				})

				.catch(err => {
					console.error(err)
				})
		},

		keepExamFunction(info) {
			console.log(info)
			this.component = info.component || info,
				this.datosExamenes = info.data
		},

		updateDiag() {
			this.updatedConsult()
		},

		updateModal(data) {
			this.dataModal = data
		},

		collapse() {
			if (event.target.closest('.ques').matches(".active")) {
				event.target.closest('.ques').classList.remove("active")
				event.target.closest('.ques').removeAttribute("style")
				event.target.closest('.ques').querySelector(".collapse").removeAttribute("style");
			} else {
				let heightQues = event.target.closest('.ques').scrollHeight;

				document.querySelectorAll(".ques.active").forEach(el => {
					el.classList.remove("active")
					el.removeAttribute("style")
					el.querySelector(".collapse").removeAttribute("style");
				})

				event.target.closest('.ques').classList.toggle("active")
				event.target.closest('.ques').style.height = `${heightQues}px`
				event.target.closest('.ques').querySelector(".collapse").style.background = "rgba(231, 231, 231, 0.788)";
			}
		},

		collapseActive(event) {
			let heightQues = event.target.closest('.ques').scrollHeight;
			event.target.closest('.ques').style.height = `${heightQues + 80}px`
		},

		clickOutside() {
			if (this.inputActive) {
				if (!event.target.matches(".collpase__textarea, .collpase__textarea *") && document.querySelector(".collpase__textarea")) {
					if (this.switch !== 0) {
						this.updatedConsult()
					} else {
						this.switch += 1
					}
				}
			}

			if (this.dobleClick !== event.target.id) {
				this.dobleClick = event.target.id
				return
			}
		},

		inputSwitchActive(prop, value) {
			// Psicplogia
			switch (prop) {
				case 'Psicologia_illness':
					this.inicialInputPsychological.illness = value; break;
				case 'antecedent':
					this.inicialInputPsychological.antecedent = value; break;
				case 'dynamic':
					this.inicialInputPsychological.dynamic = value; break;
				case 'attitude':
					this.inicialInputPsychological.attitude = value; break;
				case 'dx':
					this.inicialInputPsychological.dx = value; break;
				case 'Psicologia_plan':
					this.inicialInputPsychological.plan = value; break;
			}

			// Psiquiatria
			switch (prop) {
				case 'main_signs_symptoms': this.inicialInputPsiquiatria.main_signs_symptoms = value; break;
				case 'general_antecedent':
					this.inicialInputPsiquiatria.general_antecedent = value; break;
				case 'psiquiatria_illness':
					this.inicialInputPsiquiatria.illness = value; break;
				case 'apc':
					this.inicialInputPsiquiatria.apc = value; break;
				case 'languaje':
					this.inicialInputPsiquiatria.languaje = value; break;
				case 'thought':
					this.inicialInputPsiquiatria.thought = value; break;
				case 'affect':
					this.inicialInputPsiquiatria.affect = value; break;
				case 'percetion':
					this.inicialInputPsiquiatria.percetion = value; break;
				case 'superior_function':
					this.inicialInputPsiquiatria.superior_function = value; break;
				case 'abstraction':
					this.inicialInputPsiquiatria.abstraction = value; break;
				case 'conscience':
					this.inicialInputPsiquiatria.conscience = value; break;
				case 'insight':
					this.inicialInputPsiquiatria.insight = value; break;
				case 'diagnostic_problems':
					this.inicialInputPsiquiatria.diagnostic_problems = value; break;
				case 'diagnostic':
					this.inicialInputPsiquiatria.diagnostic = value; break;
				case 'psiquiatria_plan':
					this.inicialInputPsiquiatria.plan = value; break;
			}
		},

		convertir(prop) {
			if (event.target.dataset.rol == "true") {
				if (this.dobleClick == false) {
					this.dobleClick = event.target.id;
					setTimeout(() => { this.dobleClick = false; }, 600); // 600ms double click window
					return;
				}

				if (this.dobleClick === event.target.id) {
					this.inputActive = prop;
					this.inputSwitchActive(prop, true);
					this.dobleClick = false;
				} else {
					this.dobleClick = false;
				}
			} else {
				//Solo para el profesional que pertenezca al bloque
				this.$swal.fire({title: 'No tiene acceso para editar este bloque', icon:'error'})
			}
		},

		lowerCase(text = '') {
			return text.toLowerCase();
		},

		evoluciones() {
			this.evolution.type = this.dataUser.profession === 'Psiquiatra' ? 1 : 2,
				this.evolution.date = dateNow(),
				this.evolution.schedule = this.getTiempo(),
				this.evolution.professional_id = this.dataUser.id
		},

		refreshEvoluciones() {
			this.getHistories();
		this.getExamPromise();
		},

		addCie() {
			let verify = true;

			if (this.datosConsulta.cies.length === 0) {
				this.inicialPsiquiatria.diagnostic.push(event.target.dataset.id)
				this.datosConsulta.cies.push(event.target.textContent.trim());
				return;
			}

			this.datosConsulta.cies.find(el => {
				if (typeof el == 'object') {
					if (`${el.id} - ${el.code} - ${el.description}` === event.target.textContent.trim()) {
						return verify = false
					}
				} else {
					if (el === event.target.textContent.trim()) {
						return verify = false
					}
				}
			})

			if (verify === true) {
				this.inicialPsiquiatria.diagnostic.push(event.target.dataset.id)
				this.datosConsulta.cies.push(event.target.textContent.trim());
			}

			this.searchCie = ''
		},

		deleteCie() {
			this.datosConsulta.cies.splice(parseInt(event.target.closest('.cie-item').dataset.cie), 1)
			this.inicialPsiquiatria.diagnostic.splice(parseInt(event.target.closest('.cie-item').dataset.cie), 1)
		},

		async crearSOS(){
			if(confirm(`¿Desea activar el modo S.O.S en el paciente?`)){

				var textoIngresado = prompt("Por favor, ingresa el motivo:");

				if (textoIngresado !== null){
					await this.axios.post(`/api/crearSOS`,{
						id: this.datosPaciente.id,
						idProfesional: this.dataUser.id,
						comentarios: textoIngresado
					})
					.then(res => {
						if(res.data.mensaje){
							this.datosConsulta.sos = 1;
						}
					})
					.catch(err => {
						console.error(err)
					})
				}
			}
		},
		async quitarSOS(){
			if(confirm(`¿Desea desactivar el modo S.O.S en el paciente?`)){
				await this.axios.post(`/api/quitarSOS`,{
					id: this.datosPaciente.id
				})
				.then(res => {
					if(res.data.mensaje){
						this.datosConsulta.sos = 0;
					}
				})
				.catch(err => {
					console.error(err)
				})
			}
		},

		getTiempo() {
			return `${new Date().getHours().toString().length == 1 ? '0' + new Date().getHours() : new Date().getHours()}:${new Date().getMinutes().toString().length == 1 ? '0' + new Date().getMinutes() : new Date().getMinutes()}:${new Date().getSeconds().toString().length == 1 ? '0' + new Date().getSeconds() : new Date().getSeconds()}`
		},

		calculateAge(age) {
			return age ? moment().diff(age, 'years') : '0';
			//return age ? new Date().getFullYear() - parseInt(age.substring(0,4)) : '...';
		},

		getDateNow() {
			return dateNow()
		},
		calcularDias(fecha){
			let hoy = moment()
			return hoy.diff(fecha, 'days')
		},
		maxStringCharacter(character, num) {
			character === null ? character = '...' : character
			if (character.length > num) {
				return character.substring(0, num) + '...';
			} else {
				return character;
			}
		},
		fechaLatam(fecha) {
			return fecha ? moment(fecha).format('DD/MM/YYYY') : 'Sin registro';
		},
		fechaLectura(fecha) {
			moment.locale('es')
			return moment(fecha).format('dddd, DD [de] MMMM YYYY');
		},
		colorear(index) {
			let cabecera = document.querySelectorAll('.tarjeta .card-header')[index]
			cabecera.closest('.card').classList.add('shadow');
			//cabecera.classList.remove('bg-secondary');
			//cabecera.classList.add('bg-success');
		},
		descolorear(index) {
			let cabecera = document.querySelectorAll('.tarjeta .card-header')[index]
			cabecera.closest('.card').classList.remove('shadow');
			//cabecera.classList.remove('bg-success');
			//cabecera.classList.add('bg-secondary');
		},
		mostrarCard(index) {
			this.indexGlobal = index;
			this.miniRespuesta.comentarios=[]
			if (this.datosConsulta.medical_evolutions[index].professional) {
				this.miniRespuesta.nombre = this.datosConsulta.medical_evolutions[index].professional.name;
				this.miniRespuesta.firma = this.datosConsulta.medical_evolutions[index].professional.signing;
				this.miniRespuesta.foto = this.datosConsulta.medical_evolutions[index].professional.photo;
				this.miniRespuesta.fecha = this.datosConsulta.medical_evolutions[index].date;
				this.miniRespuesta.comentarios = this.datosConsulta.medical_evolutions[index].comentarios;
				this.miniRespuesta.treatment = this.datosConsulta.medical_evolutions[index].treatment;
				this.miniRespuesta.diagnostic = this.datosConsulta.medical_evolutions[index].diagnostic;
				if (this.miniRespuesta.firma == '-') {
					this.miniRespuesta.firma = '';
				}
			} else {
				this.miniRespuesta.nombre = 'Sin asignar';
				this.miniRespuesta.firma = '';
				this.miniRespuesta.foto = '';
			}
			this.miniRespuesta.contenido = this.datosConsulta.medical_evolutions[index].content;
		},
		contarExamenes(){
			if(this.datosConsulta!== undefined){
				
				return this.datosConsulta.examenes_basicos.length + this.datosConsulta.examenes_personalizados.burns.length + this.datosConsulta.examenes_personalizados.gads.length + this.datosConsulta.examenes_personalizados.scrs.length + this.datosConsulta.examenes_personalizados.zung_anxieties.length + this.datosConsulta.examenes_personalizados.zung_depressions.length 
			}
			//datosConsulta.examenes[0].length + datosConsulta.examenes[1]['burns'].length + datosConsulta.examenes[1]['gads'].length + datosConsulta.examenes[1]['scrs'].length + datosConsulta.examenes[1]['zung_anxieties'].length + datosConsulta.examenes[1]['zung_depressions'].length
		},
		queEstado(dato){
			if(dato!== undefined) return this.estados.find(x=> x.id == dato).valor
			else return '';
		},
		async datos1Paciente(){
			this.axios.get('/api/patientById/'+this.$route.params.idPaciente)
			.then(res => {
				this.dato1 = res.data[0];
				//$("#patientModal" ).modal('show')
			}) 
		},
		dondeEsta(tips){
			const tipoColores = {
				1: 'evolucionPsiquiatria',
				2: 'evolucionPsicologia',
				3: 'evolucionTipo3',
				4: 'evolucionTipo4',
				5: 'evolucionTipo5',
				6: 'evolucionTipo6',
				7: 'evolucionTerapista',
				8: 'evolucionTipo8'
			};
			
			if (tipoColores[tips]) return tipoColores[tips];
			
			let valor = null
			if (valor = this.evolucionPsiquiatria.indexOf(tips)>-1) return 'evolucionPsiquiatria'
			else if (valor = this.evolucionPsicologia.indexOf(tips)>-1) return 'evolucionPsicologia'
			else if (valor = this.evolucionTerapista.indexOf(tips)>-1) return 'evolucionTerapista'
			else if (valor = this.evolucionTecnologo.indexOf(tips)>-1) return 'evolucionTecnologo'
			else if (valor = this.evolucionNutricion.indexOf(tips)>-1) return 'evolucionNutricion'
			else return 'evoOtro'
		},
		dondeEsta2(tips){
			const tipoNombres = {
				1: 'Psiquiatría',
				2: 'Psicología',
				3: 'Certificado',
				4: 'Kurame',
				5: 'Paquete',
				6: 'Nutrición',
				7: 'Terapista',
				8: 'Otro'
			};
			
			if (tipoNombres[tips]) return tipoNombres[tips];
			
			let valor = null
			if (valor = this.evolucionPsiquiatria.indexOf(tips)>-1) return 'Psiquiatría'
			else if (valor = this.evolucionPsicologia.indexOf(tips)>-1) return 'Psicología'
			else if (valor = this.evolucionTerapista.indexOf(tips)>-1) return 'Terapista'
			else if (valor = this.evolucionTecnologo.indexOf(tips)>-1) return 'Tec. Médico'
			else if (valor = this.evolucionNutricion.indexOf(tips)>-1) return 'Nutrición'
			else return 'Otro sin especificar'
		},
		cargarLineas(){
			this.$emit('ordenarLineas')
			this.axios('/api/cargarLineas/'+this.datosPaciente.id)
			.then(res=> { this.lineas=res.data; })
		},
		agregarComentario(datos){
			//this.miniRespuesta.comentarios.push(datos)
			this.datosConsulta.medical_evolutions[this.indexGlobal].comentarios.push(datos)
		}
	},

	computed: {
		updatedValues() {
			return this.dataUser.profession === 'Psiquiatra' ? this.rol = 'Psiquiatra' : this.rol = 'Psicólogo'
		},
		
		evolutionToday() {
			if (this.datosConsulta.medical_evolutions) {
				if (this.datosConsulta.medical_evolutions.length === 0) {
					return this.consultaHoy = true
				}

				this.datosConsulta.medical_evolutions.forEach(el => {
					if (el.date === dateNow()) {
						return this.consultaHoy = false
					} else {
						this.consultaHoy = true
					}
				})
			}
		},
	
	},

	created() {
		this.getIdPatient;
	},

	mounted() {
		this.getHistories();
		//this.hobbies.sort();
	},

	updated() {
		this.updatedValues
		this.evolutionToday
	}
}

</script>

<style scoped>

.evolucionPsiquiatria .card-header, .evolucionTipo1 .card-header{ background: #e74a3b }
.evolucionPsicologia .card-header, .evolucionTipo2 .card-header{ background: #4e73df }
.evolucionTerapista .card-header, .evolucionTipo7 .card-header{ background: #9b59b6 }
.evolucionTecnologo .card-header, .evolucionTipo3 .card-header{ background: #2ecc71 }
.evolucionTipo4 .card-header{ background: #808000 }
.evolucionTipo5 .card-header{ background: #ff8c00 }
.evolucionTipo6 .card-header{ background: #f1c40f }
.evolucionTipo8 .card-header{ background: #ff69b4 }
.evoOtro .card-header{ background: rgb(88, 88, 107)}
.tarjeta .card-header:hover {
	cursor: pointer;
}

h4 {
	font-weight: 500;
}
#cardPerfil .badge{cursor:pointer;}
.btn--edit {
	width: 95%;
	max-width: 180px;
	display: block;
	background: #6236FF;
	border: none;
	border-radius: 5px;
	padding: 5px 0;
	outline: none;
	color: #fff;
	border: 5px;
}

.btn--iteration:active {
	transform: scale(.95);
}

.ques {
	height: 44px;
	overflow: hidden;
	transition: height .5s ease;
}

.collapse {
	padding: 10px;
	background: rgba(235, 235, 235, 0.37);
	cursor: pointer;
}

.collapse__paragraph {
	padding: 10px;
	cursor: pointer;
	user-select: none;
	height: auto !important;
	min-height: 38px;
}

.collpase__textarea {
	padding: 10px;
	height: 80%;
}

.collapse:hover {
	background: rgba(231, 231, 231, 0.788);
}

.collpase__textarea textarea {
	min-height: 120px !important;
	max-height: 100% !important;
}

/*.card-evolution {
	 display: grid;
    grid-template-columns: 70% 1fr;
    place-items: center;
    grid-gap: 25px; 
}*/

.card-evolution__image {
	width: 100%;
}

.historia-info {
	width: 100%;

}

.card-evolution-image {
	width: 100%;
}

.flex-gap {
	gap: 25px;
}

.cie-content {
	width: 100%;
	background-color: #fff;
	border: .3px solid #22222260;
	visibility: hidden;
	position: absolute;
	z-index: 10000;
	transition: visibility 1s normal 3s;
}

#diagnostico:focus~.cie-content {
	visibility: visible;
	/* display: block !important; */
}

.cie-item:active {
	visibility: visible;
	opacity: 0;
	/* display: block !important; */
}

.flex-gap {
	gap: 15px;
}

.pointer {
	cursor: pointer;
}

.cie--hover:hover:not(.cie-danger) {
	background: rgb(236, 236, 236);
}

.cie-danger {
	background: rgb(255, 207, 207);
	cursor: no-drop;
}

.diagnostico-input {
	overflow: auto;
	height: 100%;
	min-height: 320px;
	padding-bottom: 50px;
	/* min-height: 150px; */
}

.update-diagnostic {
	top: 0;
	right: 0;
	bottom: 0;
}

@media screen and (max-width: 750px) {
	.card-evolution {
		grid-template-columns: 1fr;
	}

	.card-evolution__image {
		display: none;
	}
}
</style>
