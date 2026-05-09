<template>
  <main>
    <div v-if="vistaActual === 'lista'">
        <!-- DASHBOARD CARDS -->
        <div class="row mt-4 mb-3">
            <div class="col-xl-2 col-md-4 mb-2">
                <div class="card h-100 py-1" style="border-left: 4px solid #4e73df; border-radius:10px;">
                    <div class="card-body py-2 px-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="text-xs text-muted mb-1">Pacientes Activos</div>
                                <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.pacientesActivos }}</div>
                                <div class="text-xs text-muted mt-1">Total registrados</div>
                            </div>
                            <div class="icon-circle bg-primary-light p-2 rounded" style="background:#eaf2ff">
                                <i class="fas fa-users text-primary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-md-4 mb-2">
                <div class="card h-100 py-1" style="border-left: 4px solid #1cc88a; border-radius:10px;">
                    <div class="card-body py-2 px-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="text-xs text-muted mb-1">Nuevos del Mes</div>
                                <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.nuevosDelMes }}</div>
                                <div class="text-xs text-muted mt-1">Este mes</div>
                            </div>
                            <div class="icon-circle bg-success-light p-2 rounded" style="background:#e8fdf5">
                                <i class="fas fa-user-plus text-success"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-md-4 mb-2">
                <div class="card h-100 py-1" style="border-left: 4px solid #eaecf4; border-radius:10px;">
                    <div class="card-body py-2 px-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="text-xs text-muted mb-1">Con Cita Hoy</div>
                                <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.conCitaHoy }}</div>
                                <div class="text-xs text-muted mt-1">Pacientes agendados</div>
                            </div>
                            <div class="icon-circle bg-light p-2 rounded" style="background:#f8f9fc">
                                <i class="far fa-calendar text-secondary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-md-4 mb-2">
                <div class="card h-100 py-1" style="border-left: 4px solid #f6c23e; border-radius:10px;">
                    <div class="card-body py-2 px-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="text-xs text-muted mb-1">Pacientes con Deuda</div>
                                <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.conDeuda }}</div>
                                <div class="text-xs text-muted mt-1">Sin pago hoy</div>
                            </div>
                            <div class="icon-circle bg-warning-light p-2 rounded" style="background:#fef6e5">
                                <i class="fas fa-dollar-sign text-warning"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-md-4 mb-2">
                <div class="card h-100 py-1" style="border-left: 4px solid #e74a3b; border-radius:10px;">
                    <div class="card-body py-2 px-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="text-xs text-muted mb-1">Casos SOS</div>
                                <div class="h4 mb-0 font-weight-bold text-dark">{{ dashData.casosSOS }}</div>
                                <div class="text-xs text-muted mt-1">Emergencias activas</div>
                            </div>
                            <div class="icon-circle bg-danger-light p-2 rounded" style="background:#fbe3e4">
                                <i class="fas fa-exclamation-triangle text-danger"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-md-4 mb-2">
                <div class="card h-100 py-1" style="border-left: 4px solid #1cc88a; border-radius:10px;">
                    <div class="card-body py-2 px-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="text-xs text-muted mb-1">Tasa Retención</div>
                                <div class="h4 mb-0 font-weight-bold text-dark">{{ parseInt(dashData.tasaRetencion) }}%</div>
                                <div class="text-xs text-muted mt-1">Pacientes recurrentes</div>
                            </div>
                            <div class="icon-circle bg-success-light p-2 rounded" style="background:#e8fdf5">
                                <i class="far fa-check-circle text-success"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- SEARCH AND BUTTONS -->
        <div class="row align-items-center mb-3">
            <div class="col-xl-4 col-lg-12 mb-3 mb-xl-0">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <button class="btn btn-white bg-white border-right-0 border" type="button" @click="searchPatients()">
                            <i class="fas fa-search text-muted"></i>
                        </button>
                    </div>
                    <input type="text" class="form-control bg-white border-left-0 border" id="searchNamePatient"
                    placeholder="Buscar por DNI, nombre o celular..." autocomplete="off" @keyup.enter="searchPatients()" style="box-shadow:none;">
                </div>
            </div>
            <div class="col-xl-8 col-lg-12 text-xl-right text-center">
                <button class="btn btn-outline-info shadow-sm mr-2 mb-2" @click="toggleVista()">
                    <i class="fas fa-birthday-cake"></i> Cumpleaños
                </button>
                <button class="btn btn-primary shadow-sm mr-2 mb-2" data-bs-toggle="modal" data-bs-target="#modalNewPatient"><i class="fas fa-user-plus"></i> Nuevo Paciente</button>
                <router-link to="/recepcionista/home" class="btn shadow-sm text-white mr-2 mb-2" style="background-color: #f97316;"><i class="fas fa-plus"></i> Nueva Cita</router-link>
                <button class="btn btn-white border shadow-sm mr-2 mb-2"><i class="far fa-credit-card"></i> Cobrar Deuda</button>
                <router-link to="/recepcionista/paquetes" class="btn btn-white border shadow-sm mb-2"><i class="fas fa-box"></i> Nuevo Paquete</router-link>
            </div>
        </div>

        <!-- CHART HEADER -->
        <div class="d-flex justify-content-between align-items-center mb-2">
            <h5 class="mb-0 font-weight-bold text-dark">
                <i class="fas fa-chart-pie text-primary mr-2"></i> Análisis de Pacientes
            </h5>

            <button 
              class="btn btn-sm btn-toggle-charts"
              @click="showCharts = !showCharts"
            >
                <i :class="showCharts ? 'fas fa-eye-slash mr-1' : 'fas fa-eye mr-1'"></i>
                {{ showCharts ? 'Ocultar' : 'Mostrar' }}
            </button>
        </div>

        <!-- CHARTS -->
        <transition name="fade-slide">
          <div class="row mb-4" v-if="showCharts">
              <div class="col-md-6 mb-3 mb-md-0">
                  <div class="card h-100 border-0 shadow-sm" style="border-radius:10px;">
                      <div class="card-body" style="overflow: hidden;">
                          <h6 class="font-weight-bold text-dark mb-4">Tipos de Atención</h6>
                          <div style="position: relative; height: 100%; width: 100%;" v-if="tiposDataLoaded">
                              <Doughnut :chart-data="donutObj" :chart-options="pieOptions" />
                          </div>
                          <div v-else class="text-center text-muted d-flex h-100 align-items-center justify-content-center pb-4">
                              <p class="mb-0">No hay datos suficientes</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="card h-100 border-0 shadow-sm" style="border-radius:10px;">
                      <div class="card-body" style="overflow: hidden;">
                          <h6 class="font-weight-bold text-dark mb-4">Estados de Pacientes</h6>
                          <div 
                            :style="{ height: '100%', position: 'relative', width: '100%' }"
                            v-if="dashData.completadas !== undefined && (dashData.completadas + dashData.pendientes + dashData.canceladas + dashData.reprogramadas) > 0"
                          >
                              <Bar :chart-data="barObj" :chart-options="barOptions" />
                          </div>
                          <div v-else-if="dashData.completadas !== undefined" class="text-center text-muted d-flex h-100 align-items-center justify-content-center pb-4">
                              <p class="mb-0">No hay datos suficientes</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </transition>

		<p class="mt-4 mb-3 font-weight-bold text-dark" style="font-size: 1.1rem;">Últimos pacientes registrados</p>
    
    <div class="table-responsive custom-table-container">
      <table class="table table-hover align-middle">
        <thead>
          <tr>
            <th class="text-uppercase text-xs font-weight-bolder opacity-7 ps-4">Paciente</th>
            <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-center">Estado</th>
            <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-center">Próxima Cita</th>
            <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-center">Deuda</th>
            <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-center">Última Visita</th>
            <th class="text-uppercase text-xs font-weight-bolder opacity-7 text-end pe-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(paciente, index) in busqueda" :key="index" class="patient-row">
            <!-- PACIENTE -->
            <td class="ps-4 py-3">
              <div class="d-flex align-items-center">
                <div class="avatar-circle me-3" :class="getAvatarBg(index)">
                  {{ getInitials(paciente.name || paciente.nombres) }}
                </div>
                <div class="d-flex flex-column">
                  <h6 class="mb-0 text-sm font-weight-bold text-dark text-capitalize clickable-name" @click="abrirDetallePaciente(paciente)">
                    <i v-if="paciente.vivo==0" class="fas fa-cross me-1 text-muted"></i>
                    {{ (paciente.name + ' ' + (paciente.nombres || '')).trim().toLowerCase() }}
                  </h6>
                  <p class="text-xs text-secondary mb-0">
                    {{ calculateAge(paciente.birth_date) }} años • {{ paciente.gender == 1 ? 'Masculino' : (paciente.gender == 0 ? 'Femenino' : 'Other') }}
                  </p>
                </div>
              </div>
            </td>

            <!-- ESTADO -->
            <td class="text-center">
              <span class="badge badge-pill badge-status-active">
                <i class="fas fa-heart me-1"></i> Activo
              </span>
            </td>

            <!-- PRÓXIMA CITA -->
            <td class="text-center">
              <span v-if="paciente.proximaCita && paciente.proximaCita.length > 0" class="text-xs font-weight-bold text-secondary"> {{ formatDate(paciente.proximaCita[0].date) }}</span>
              <span v-else class="text-xs font-weight-bold text-secondary">Sin cita</span>
            </td>

            <!-- DEUDA -->
            <td class="text-center">
              <span v-if="paciente.deudaTotal > 0" class="text-xs font-weight-bold text-danger">S/ {{ paciente.deudaTotal.toFixed(2) }}</span>
              <span v-else class="text-xs font-weight-bold text-secondary">S/ 0.00</span>
            </td>

            <!-- ÚLTIMA VISITA -->
            <td class="text-center">
              <span class="text-xs font-weight-bold text-secondary">{{ formatDate(paciente.created_at) }}</span>
            </td>

            <!-- ACCIONES -->
            <td class="text-end pe-4">
              <div class="d-flex justify-content-end align-items-center gap-2">
                <!-- Quick View -->
                <button class="btn btn-link text-secondary p-0 mb-0" @click="abrirDetallePaciente(paciente)" title="Ver detalle">
                  <i class="far fa-eye text-lg"></i>
                </button>
                
                <!-- Quick Chat -->
                <button class="btn btn-link text-secondary p-0 mb-0" data-bs-toggle="modal" data-bs-target="#modalChat" @click="dataPaciente=paciente" title="Enviar mensaje">
                  <i class="far fa-comment-dots text-lg"></i>
                </button>

                <!-- More Actions Dropdown -->
                <div class="dropdown">
                  <button class="btn btn-link text-secondary p-0 mb-0" type="button" :id="'dropdownMenu' + index" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-ellipsis-v text-lg"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end shadow-lg border-0" :aria-labelledby="'dropdownMenu' + index">
                    <li><h6 class="dropdown-header">Acciones del Paciente</h6></li>
                    
                    <!-- Notas de recepcion -->
                    <li>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalAcuerdos" @click="dataPaciente = paciente">
                        <i class="fa-solid fa-handshake-angle me-2 text-primary"></i> Notas de recepción
                      </a>
                    </li>

                    <!-- Hobbies -->
                    <li v-if="paciente.vivo==1">
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalVerHobbies" @click="misHobbies=JSON.parse(paciente.hobbies); queId = paciente.id; this.$emit('cargarHobbies')">
                        <i class="fa-solid fa-baseball-bat-ball me-2 text-info"></i> Hobbies
                      </a>
                    </li>

                    <!-- Club -->
                    <li v-if="paciente.vivo==1">
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#editarClub" @click="datosLike(paciente.club, paciente.id)">
                        <template v-if="paciente.club=='0'"><i class="fa-regular fa-hand-back-fist me-2"></i> Club: Neutro</template>
                        <template v-if="paciente.club=='1'"><i class="fa-solid fa-thumbs-up me-2 text-success"></i> Club: Like</template>
                        <template v-if="paciente.club=='2'"><i class="fa-solid fa-thumbs-down me-2 text-danger"></i> Club: Dislike</template>
                      </a>
                    </li>

                    <!-- Membresías -->
                    <li v-if="paciente.vivo==1">
                      <a class="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offVerMembresias" @click="queId = paciente.id; nombrePaciente= paciente.name + ' ' + paciente.nombres; dataPaciente = paciente">
                        <i class="far fa-star me-2 text-warning"></i> Paquetes / Membresías
                      </a>
                    </li>

                    <!-- Semáforo / Actitud -->
                    <li v-if="paciente.vivo==1">
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalVerEstados" @click="dataProps(paciente)">
                        <i class="fas fa-traffic-light me-2"></i> Estado de Actitud
                      </a>
                    </li>

                    <li><hr class="dropdown-divider"></li>
                    <li><h6 class="dropdown-header">Clínica</h6></li>

                    <!-- Triaje -->
                    <li>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalVerTriajesViejos" @click="verTriajesViejos(index)">
                        <i class="fa-solid fa-clipboard-list me-2"></i> Historial Triajes ({{ paciente.triajes.length }})
                      </a>
                    </li>
                    <li v-if="paciente.vivo==1">
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalTriaje" @click="dataProps(paciente)">
                        <i class="fa-solid fa-lungs me-2 text-info"></i> Nuevo Triaje
                      </a>
                    </li>
                    <li v-if="paciente.vivo==1">
                      <a class="dropdown-item" href="#" @click.prevent="generarLinkAutotriaje(paciente)">
                        <i class="fa-solid fa-link me-2 text-primary"></i> Generar link autotriaje
                      </a>
                    </li>

                    <!-- Faltas -->
                    <li>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalVerFaltas" @click="queId=paciente.id; cantFaltas = paciente.faults;">
                        <i class="fas fa-user-times me-2 text-danger"></i> Faltas ({{ paciente.faults }})
                      </a>
                    </li>

                    <!-- Reprogramaciones -->
                    <li>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalVerReprogramacionesViejos" @click="verReprogramacionesViejos(paciente.id)">
                        <i class="fas fa-calendar-alt me-2 text-warning"></i> Reprogramaciones ({{ paciente.reprogramaciones }})
                      </a>
                    </li>

                    <!-- Recetas -->
                    <li>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#recetasModal" @click="dataProps(paciente)">
                        <i class="fa-solid fa-flask-vial me-2 text-primary"></i> Recetas
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>

    <!-- VISTA CUMPLEAÑOS -->
    <div v-else-if="vistaActual === 'cumpleaños'" class="container-fluid px-0 mt-4">
      <div class="d-flex align-items-center mb-3">
        <button class="btn btn-link text-decoration-none px-0" @click="vistaActual = 'lista'">
          <i class="fas fa-arrow-left"></i> Volver a Pacientes
        </button>
      </div>
      <div class="card border-0 shadow-sm" style="border-radius:12px;">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="mb-0 font-weight-bold text-info"><i class="fas fa-birthday-cake me-2"></i> Cumpleaños del Mes</h5>
            <div class="input-group w-auto">
              <span class="input-group-text bg-light border-0"><i class="far fa-calendar-alt text-muted"></i></span>
              <input type="date" class="form-control bg-light border-0" v-model="fechaCumple" id="fechaCumple" @change="cambiarFechaCumple()">
            </div>
          </div>

          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead class="bg-light">
                <tr>
                  <th class="border-bottom-0 text-muted small text-uppercase">N°</th>
                  <th class="border-bottom-0 text-muted small text-uppercase">Nombres</th>
                  <th class="border-bottom-0 text-muted small text-uppercase text-center">Fecha Cumpleaños</th>
                  <th class="border-bottom-0 text-muted small text-uppercase text-center">Edad</th>
                  <th class="border-bottom-0 text-muted small text-uppercase text-center">Citas Confirmadas</th>
                  <th class="border-bottom-0 text-muted small text-uppercase text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cliente, index) in clientesCumple" :key="'cumple_'+index">
                  <td class="font-weight-bold text-dark">{{ index + 1 }}</td>
                  <td class="text-capitalize text-dark fw-bold" @click="verDetalleCumple(cliente)" style="cursor:pointer">
                    {{ (cliente.name || '').toLowerCase() }} {{ (cliente.nombres || '').toLowerCase() }}
                  </td>
                  <td class="text-center">{{ fechaLatam(cliente.birth_date) }}</td>
                  <td class="text-center"><span class="badge bg-info text-white rounded-pill px-3 py-2" style="font-weight:600;">{{ edad(cliente.birth_date) }} años</span></td>
                  <td class="text-center">
                    <span class="badge" :class="cliente.confirmados > 0 ? 'bg-success' : 'bg-secondary'">{{ cliente.confirmados }}</span>
                  </td>
                  <td class="text-center">
                    <a v-if="cliente.phone && cliente.phone != ''" 
                       :href="`https://wa.me/51${cliente.phone.replace(/\\s+/g, '')}?text=Feliz cumpleaños 🎂 ${cliente.name} ${cliente.nombres}, recuerda que el que piensa positivo, ve lo invisible, siente lo intangible y logra lo imposible. Te desea la clínica Excelentemente 🤗`" 
                       target="_blank" 
                       class="btn btn-sm btn-success rounded-circle shadow-sm"
                       title="Enviar WhatsApp">
                      <i class="fab fa-whatsapp"></i>
                    </a>
                    <span v-else class="text-muted small">Sin número</span>
                  </td>
                </tr>
                <tr v-if="clientesCumple.length === 0">
                  <td colspan="6" class="text-center text-muted py-5">
                    <i class="fas fa-calendar-times fs-2 mb-3 opacity-50 d-block"></i>
                    No se encontraron cumpleaños en este mes.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    <DetallePaciente 
      v-else-if="vistaActual === 'detalle'" 
      :pacienteId="dataPaciente.id" 
      @volver="vistaActual = 'lista'" 
      @editarPaciente="dataPaciente = $event" 
      @abrirTriaje="dataProps($event)"
      ref="detallePaciente"
    />

		<ModalEdicionPaciente :dataPatient="dataPaciente" @actualizar="getPatients"></ModalEdicionPaciente>
    <modal-recetas :dataPatient="data || {}"></modal-recetas>
    <modal-faltas v-if="data" :dataPatient="data"></modal-faltas>
    <modal-triaje v-if="data" :dataPatient="data" :profesionales="profesionales" @actualizar="getPatients"></modal-triaje>
		<modal-ver-triajes-viejos v-if="dataTriajes" :triajes="dataTriajes"></modal-ver-triajes-viejos>
		<ModalVerReprogramacionesViejos :reprogramaciones="reprogramaciones"></ModalVerReprogramacionesViejos>
    <modal-new-patient @cargarPacienteSimpleNuevo="getPatients"></modal-new-patient>
		<modal-ver-estados v-if="data" :dataPatient="data" :estados="estados"></modal-ver-estados>
		<ModalCambiarLike :like="like" :id="id" @updateLike="Like"></ModalCambiarLike>
		<ModalVerFaltas :queId="queId" :cantFaltas="cantFaltas"></ModalVerFaltas>
		<ModalVerHobbies :hobbies="hobbies" :id="queId" :misHobbies="misHobbies" ></ModalVerHobbies>
		<OffVerMembresias :queId="queId" :nombrePaciente="nombrePaciente" :idUser="$attrs.idUser" :profesional="profesionales" :paciente="dataPaciente"></OffVerMembresias>
		<ModalAcuerdos :paciente="dataPaciente" :idUser="$attrs.idUser"></ModalAcuerdos>
    <ModalChat :patient="dataPaciente"></ModalChat>

    <!-- Modal Link Autotriaje -->
    <div class="modal fade" id="modalLinkAutotriaje" tabindex="-1" aria-labelledby="modalLinkAutotriajeLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow">
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title font-weight-bold" id="modalLinkAutotriajeLabel">Link de Autotriaje</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body pb-4">
            <p class="text-secondary text-sm mb-3">El siguiente enlace es válido únicamente por 1 hora. Envíalo al paciente para que pueda completar su autotriaje.</p>
            
            <div class="input-group mb-3">
              <input type="text" class="form-control bg-light" :value="linkGenerado" readonly id="inputLinkAutotriaje">
              <button class="btn btn-outline-secondary" type="button" @click="copiarLink">
                <i class="far fa-copy"></i> Copiar
              </button>
            </div>
            
            <a :href="'https://api.whatsapp.com/send?text=' + encodeURIComponent('Hola, por favor completa tu autotriaje en el siguiente enlace válido por 1 hora:\n\n' + linkGenerado)" target="_blank" class="btn btn-success w-100 mt-2" :class="{'disabled': !linkGenerado}">
              <i class="fab fa-whatsapp me-2"></i> Enviar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
		
  </main>
</template>

<script>
import { Doughnut, Bar } from 'vue-chartjs/legacy'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement, ChartDataLabels)

import DetallePaciente from './DetallePaciente.vue';
import ModalEdicionPaciente from './ModalEditarPaciente.vue';
import ModalRecetas from './ModalRecetas.vue';
import ModalFaltas from './ModalFaltas.vue';
import ModalTriaje from './ModalTriaje.vue';
import ModalVerTriajesViejos from './ModalVerTriajesViejos.vue'
import ModalVerReprogramacionesViejos from './ModalVerReprogramacionesViejos.vue'
import ModalNewPatient from './../pacientes/ModalNewPatient.vue'
import ModalVerEstados from './ModalVerEstados.vue'
import ModalCambiarLike from './ModalCambiarLike.vue'
import ModalVerFaltas from './reportes/ModalVerFaltas.vue'
import ModalVerHobbies from './reportes/ModalVerHobbies.vue'
import OffVerMembresias from './OffVerMembresias.vue';
import ModalAcuerdos from './ModalAcuerdos.vue';
import ModalChat from './ModalChat.vue';
import moment from 'moment';
//Code.
export default {
  name: 'HomePacientes',

  data () {
    return {
      showCharts:false,
      dataPatients: [], queId:null, vistaActual: 'lista',
      fechaCumple: moment().format('YYYY-MM-DD'), clientesCumple: [],
      data: null, dataTriajes:null, linkGenerado: '',
      dashData: { pacientesActivos:0, nuevosDelMes:0, conCitaHoy:0, conDeuda:0, casosSOS:0, tasaRetencion:0, pendientes:0, completadas:0, canceladas:0, reprogramadas:0, tiposAtencion:[] },
      tiposDataLoaded: false,
      donutObj: {
          labels: [],
          datasets: [{ backgroundColor: ['#1e60ff','#f97316','#10b981','#a855f7', '#ff0000', '#00ff00', '#ff00ff', '#00ffff'], data: [] }]
      },
      barObj: {
        labels: ['Confirmadas','Pendientes','Canceladas','Reprogramadas'],
        datasets: [{
          label: 'Pacientes',
          backgroundColor: ['#10b981', '#f59e0b', '#ef4444', '#0ea5e9'],
          borderWidth: 0,
          data: [0, 0, 0, 0],
          categoryPercentage: 0.9, // 🔥 menos espacio entre categorías
          barPercentage: 0.9,// 🔥 barras más gruesas
          barThickness: undefined,       
        }]
      },
      pieOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          },
          datalabels: {
            display: false // 🔥 CLAVE
          }
        }
      },
      barOptions: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        layout: {
          padding: 0 // 🔥 elimina espacio extra
        },
        plugins: {
          legend: { display: false },
          datalabels: { display: false }
        },
        scales: {
          x: {
            display: false,
            beginAtZero: true
          },
          y: {
            grid: { display: false, drawBorder: false },
            ticks: {
              color: '#6b7280',
              padding: 5
            }
          }
        }
      },
      busqueda: [], like:0, id:-1, cantFaltas:-1, reprogramaciones:[],
      totalPatients:[], nombrePaciente:'',
			estados:[
				{id: 1, valor: 'Neutro', detalle: 'No tiene ningún registro de actitud'},
				{id: 2, valor: 'cumplidor', detalle: 'es un paciente exclente'},
				{id: 3, valor: 'promotor', detalle: 'promueve actividades entre sus compañeros o la empresa'},
				{id: 4, valor: 'wow', detalle: 'es involucrado en actividades, participativo'},
				{id: 5, valor: 'reprogramador', detalle: 'suele aplazarcitas y actividades'},
				{id: 6, valor: 'exigente', detalle: 'un paciente/cliente que siempre pide un trato especial'},
				{id: 7, valor: 'deudor', detalle: 'paciente con deudas'},
				{id: 8, valor: 'insatisfecho', detalle: 'suele quejarse de los servicios'},
				{id: 9, valor: 'paciente de riesgo', detalle: 'paciente con amenazas o actos de violencia.'},
				{id: 10, valor: 'problemático', detalle: 'paciente con problemas.'},
			],
			hobbies:['pintura','dibujo', 'fotografía', 'tejido', 'costura', 'joyería', 'senderismo', 'acampar', 'jardinería', 'pesca', 'ciclismo', 'deportes', 'fútbol', 'basket', 'tenis', 'ajedrez', 'juegos de mesa', 'billar', 'música', 'tocar un instrumento', 'canto', 'composición musical', 'producción musical', 'gastronomía', 'cocina', 'recetas', 'horneado', 'postres', 'manualidades', 'origami', 'modelodo en arcilla', 'creación', 'natación', 'surf', 'kayac', 'buceo', 'esquí', 'tecnología', 'programación', 'robótica', 'computación', 'edición de videos', 'diseño gráfico', 'coleccionismo', 'monedas', 'vinilos', 'baile', 'danzas', 'escritura', 'periodismo', 'poesía', 'libros', 'lectura', 'cuentos', 'idiomas', 'viajes', 'exploración de lugares', 'fitnes', 'gym', 'yoga', 'pilates', 'entrenamiento', 'meditación', 'voluntariado', 'mascotas', 'animalista', 'astronomía', 'jardinería', 'plantas', 'huertos', 'paisajes', 'cine', 'series', 'novelas'], misHobbies:[], dataPaciente:{dni:'', phone:'',name:'',nombres:'',email:'',birth_date:'',occupation:'',marital_status:'',instruction_degree:'',
				relative:[{}, {}],
				address:[{}],
			}

    }
  },

  components: { Doughnut, Bar, DetallePaciente, ModalEdicionPaciente, ModalRecetas, ModalFaltas, ModalTriaje, ModalVerTriajesViejos, ModalNewPatient, ModalVerEstados, ModalCambiarLike, ModalVerFaltas, ModalVerHobbies, ModalVerReprogramacionesViejos, OffVerMembresias, ModalAcuerdos, ModalChat },

  props: {
    profesionales:null
  },

  methods: {
    toggleVista() {
      this.vistaActual = this.vistaActual === 'lista' ? 'cumpleaños' : 'lista';
      if (this.vistaActual === 'cumpleaños' && this.clientesCumple.length === 0) {
        this.cargarCumpleanos();
      }
    },
    async cargarCumpleanos() {
      await this.axios.get(`/api/listarCumpleanos/${this.fechaCumple}`)
        .then(response => {
          this.clientesCumple = response.data;
        })
        .catch(err => console.error(err));
    },
    cambiarFechaCumple() {
      this.cargarCumpleanos();
    },
    fechaLatam(fecha) {
      if (!fecha) return '';
      return moment(fecha).format('DD/MM/YYYY');
    },
    edad(fecha) {
      if (!fecha) return 0;
      let miEdad = moment(fecha);
      return moment().diff(miEdad, 'years');
    },
    verDetalleCumple(cliente) {
      this.dataPaciente = cliente;
      this.vistaActual = 'detalle';
    },
    async fetchDashboardPacientes() {
        try {
            let res = await this.axios.get('/api/dashboardModuloPacientes');
            let data = res.data;
            this.dashData = data;
            if(data.tiposAtencion && data.tiposAtencion.length > 0) {
                this.donutObj.labels = data.tiposAtencion.map(t => t.descripcion);
                this.donutObj.datasets[0].data = data.tiposAtencion.map(t => t.total);
                this.tiposDataLoaded = true;
            }
            this.barObj.datasets[0].data = [
                data.completadas || 0,
                data.pendientes || 0,
                data.canceladas || 0,
                data.reprogramadas || 0
            ];
        } catch(e) { console.error(e) }
    },

    updateFaults(id,faults){
      if(confirm('Estás seguro de agregar una falta a este usuario?')){
        this.axios.get(`/api/updateFaults/${id}/${faults}`)
          .then(res => {
            this.getPatients()
          })
        }
    },
    async getPatients () {
      this.busqueda = []
      await this.axios.get(`/api/getLast10Patients`)
      .then(res => { //console.log(res.data);
        this.dataPatients = res.data;
        this.busqueda = this.dataPatients;

        this.busqueda = [];
        this.dataPatients.forEach((el, index) => {
          //if (index < 5) {
            this.busqueda.push(el);
          //}
        })

        // Si hay un paciente seleccionado en detalle, actualizar su referencia.
        if (this.dataPaciente && this.dataPaciente.id) {
          const updated = this.dataPatients.find(p => p.id === this.dataPaciente.id);
          if (updated) {
            this.prepararPaciente(updated);
          }
        }

        if (this.$refs.detallePaciente) {
          this.$refs.detallePaciente.fetchPatientDetails();
        }

      })
      .catch(err => {
        console.error(err)
      })
    },
		Like(valores){
			let index = this.busqueda.findIndex(b=> b.id ==valores.id)
			this.busqueda[index].club = valores.seleccionado;
		},
    async searchPatients () {
      let valueInput = document.getElementById("searchNamePatient").value; 
      if(valueInput === ''){
        this.getPatients()
      }else{
        let coincidenceDni = []

				await this.axios.get(`/api/searchPatientByNameDni/${valueInput}`)
				.then(res => {
					this.totalPatients = res.data;

					coincidenceDni = this.totalPatients.filter(el => el.dni == valueInput)        

					if(coincidenceDni.length > 0){
						this.busqueda = coincidenceDni
					}else{
					const words = valueInput.split(' ')
					words.forEach((word)=>{
						if(/[0-9]/.test(word)){
							this.totalPatients = this.totalPatients.filter(el => el.dni != null && el.dni.matches(word) ? el : null)
							this.busqueda.push(...this.totalPatients)
						}
						this.totalPatients = this.totalPatients.filter(el => el.name.match(new RegExp(`${word}`,'ig')) ? el : null)
						this.busqueda.push(...this.totalPatients)
						//const coincidence = this.dataPatients.filter(el => el.name.match(new RegExp(`${word}`,'ig')).split(' ') ? el : null)
						//
					})        
					this.busqueda = this.totalPatients    
					}
				})
				.catch(err => {
					console.error(err)
				})
      }
    },

    dataProps (data) {
			this.data = data;
			//this.$emit('cambioDato');
    },
		datosLike(like, id){
			this.like = like;
			this.id = id;
		},

    lowerCase (text = '...') {
      return text.toLowerCase();
    },
		async listarprofesional(){
      await this.axios.get('/api/profesional')
      .then(response => {
        this.profesionales=response.data;
      })
    },
    abrirDetallePaciente(paciente) {
      this.prepararPaciente(paciente);
      this.vistaActual = 'detalle';
    },
		prepararPaciente(paciente){
			if(!paciente.relative[0]) paciente.relative[0]={
				name:'', address:[], kinship:'', id:-1
			}
			if(!paciente.relative[1]) paciente.relative[1]={
				name:'', address:[], kinship:'', id:-1
			}
			this.dataPaciente = paciente
		},
		verTriajesViejos(index){
			this.dataTriajes = this.busqueda[index].triajes;
		},
		async verReprogramacionesViejos(id){
			await this.axios.get('/api/verReprogramaciones/'+id)
			.then(response=>{
				this.reprogramaciones = response.data;
			})
		},
    calculateAge(birthday) {
      if (!birthday) return '0';
      const birthDate = new Date(birthday);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    getInitials(name) {
      if (!name) return '??';
      const parts = name.trim().split(' ');
      let initials = '';
      for (let i = 0; i < parts.length && i < 2; i++) {
        if (parts[i].length > 0 && parts[i] !== '') {
          initials += parts[i][0].toUpperCase();
        }
      }
      return initials || '??';
    },
    getAvatarBg(index) {
      const bgs = ['bg-primary-soft', 'bg-success-soft', 'bg-info-soft', 'bg-warning-soft', 'bg-danger-soft'];
      return bgs[index % bgs.length];
    },
    formatDate(dateStr) {
      if (!dateStr) return '-';
      const options = { day: '2-digit', month: 'short', year: 'numeric' };
      return new Date(dateStr).toLocaleDateString('es-ES', options);
    },
    async generarLinkAutotriaje(paciente) {
      try {
        const response = await this.axios.post(`/api/pacientes/${paciente.id}/generar-link`);
        this.linkGenerado = response.data.link;
        var myModal = new window.bootstrap.Modal(document.getElementById('modalLinkAutotriaje'));
        myModal.show();
      } catch (error) {
        console.error(error);
        alert('Ocurrió un error al generar el enlace');
      }
    },
    copiarLink() {
      const input = document.getElementById('inputLinkAutotriaje');
      input.select();
      input.setSelectionRange(0, 99999);
      document.execCommand('copy');
      alert('Link copiado al portapapeles');
    }
  },
	updated () {
		this.actualizarDatos
	},
  created () {
    this.getPatients();
		this.listarprofesional();
		this.hobbies.sort();
    this.fetchDashboardPacientes();
  },
}
</script>

<style scoped>
.custom-table-container {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  padding: 1rem;
}

.table thead th {
  border-bottom: 1px solid #f0f2f5;
  color: #8392ab;
  font-weight: 700;
  padding: 1rem 0.5rem;
}

.patient-row {
  transition: all 0.2s ease;
}

.patient-row:hover {
  background-color: #f8fafc !important;
}

.clickable-name {
  cursor: pointer;
  transition: color 0.2s;
}

.clickable-name:hover {
  color: #1e60ff !important;
}

.avatar-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: #1e60ff;
}

.bg-primary-soft { background-color: #eaf2ff; color: #1e60ff; }
.bg-success-soft { background-color: #e8fdf5; color: #10b981; }
.bg-info-soft { background-color: #e0f2fe; color: #0ea5e9; }
.bg-warning-soft { background-color: #fef6e5; color: #f59e0b; }
.bg-danger-soft { background-color: #fbe3e4; color: #ef4444; }

.badge-status-active {
  background-color: #e8fdf5;
  color: #10b981;
  font-weight: 600;
  padding: 0.5em 1em;
  border-radius: 30px;
  font-size: 0.75rem;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.text-xs { font-size: 0.75rem !important; }
.text-sm { font-size: 0.875rem !important; }
.text-lg { font-size: 1.1rem !important; }

.dropdown-item {
  padding: 0.6rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #4a5568;
  display: flex;
  align-items: center;
}

.dropdown-item:hover {
  background-color: #f7fafc;
  color: #1e60ff;
}

.dropdown-header {
  font-size: 0.65rem;
  text-transform: uppercase;
  font-weight: 800;
  color: #cbd5e0;
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem;
}

.gap-2 { gap: 0.5rem !important; }

.btn-toggle-charts {
  border: none;
  background: #eef2ff;
  color: #4e73df;
  font-weight: 600;
  border-radius: 20px;
  padding: 6px 14px;
  transition: all 0.25s ease;
}

.btn-toggle-charts:hover {
  background: #4e73df;
  color: #fff;
  box-shadow: 0 4px 12px rgba(78, 115, 223, 0.25);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
</style>
