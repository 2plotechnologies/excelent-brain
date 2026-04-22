<template>
  <main>
    <div class="mb-4">
      <h1 class="h3 mb-1 text-gray-800">Seguimiento CRM</h1>
      <p class="text-muted mb-0">Gestión de seguimiento, fidelización y recuperación de pacientes</p>
    </div>

    <div class="mb-3 d-flex gap-2 flex-wrap">
      <button
        type="button"
        class="btn"
        :class="tabActiva === 'fidelizacion' ? 'btn-primary' : 'btn-outline-secondary'"
        @click="tabActiva = 'fidelizacion'"
      >
        <i class="fa-regular fa-heart me-1"></i> Fidelización
      </button>
      <button
        type="button"
        class="btn"
        :class="tabActiva === 'recuperacion' ? 'btn-primary' : 'btn-outline-secondary'"
        @click="tabActiva = 'recuperacion'"
      >
        <i class="fa-solid fa-triangle-exclamation me-1"></i> Recuperación
      </button>

      <button
        type="button"
        class="btn"
        :class="tabActiva === 'crmSeguimiento' ? 'btn-primary' : 'btn-outline-secondary'"
        @click="tabActiva = 'crmSeguimiento'"
      >
        <i class="fa-solid fa-bell me-1"></i> CRM Seguimiento
      </button>
    </div>

    <div v-show="tabActiva !== 'crmSeguimiento'">
      <div class="row g-3 mb-3">
        <div class="col-md-6 col-xl-3">
          <div class="card border-start border-success border-4 h-100">
            <div class="card-body py-3">
              <div class="small text-muted">Fidelizados</div>
              <div class="display-6 fw-bold">{{ resumen.fidelizados }}</div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="card border-start border-warning border-4 h-100">
            <div class="card-body py-3">
              <div class="small text-muted">No fidelizados</div>
              <div class="display-6 fw-bold">{{ resumen.noFidelizados }}</div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="card border-start border-danger border-4 h-100">
            <div class="card-body py-3">
              <div class="small text-muted">Recuperación</div>
              <div class="display-6 fw-bold">{{ resumen.recuperacion }}</div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-3">
          <div class="card border-start border-secondary border-4 h-100">
            <div class="card-body py-3">
              <div class="small text-muted">Inactivos</div>
              <div class="display-6 fw-bold">{{ resumen.inactivos }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3">
        <div class="card-body">
          <div class="row g-2 align-items-center">
            <div class="col-lg-9">
              <input
                v-model="buscador"
                class="form-control"
                placeholder="Buscar paciente..."
                autocomplete="off"
              >
            </div>
            <div class="col-lg-3">
              <select v-model="filtroEtiqueta" class="form-select">
                <option value="todos">Todos</option>
                <option v-for="estado in estadosActuales" :key="estado" :value="estado">{{ estado }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="table-responsive">
          <table class="table table-hover mb-0">
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Servicio</th>
                <th>Profesional</th>
                <th>Citas</th>
                <th>1° Atención</th>
                <th>Última Cita</th>
                <th>Días sin venir</th>
                <th>Etiqueta</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="cargando">
                <td colspan="8" class="text-center py-5">
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Cargando...</span>
                  </div>
                  <p class="mt-2 text-muted mb-0">Cargando datos del servidor...</p>
                </td>
              </tr>
              <template v-else>
                <tr v-for="item in pacientesFiltrados" :key="item.patient_id">
                  <td class="text-capitalize">{{ item.paciente }}</td>
                  <td>{{ item.servicio }}</td>
                  <td class="text-capitalize">{{ item.profesional }}</td>
                  <td>{{ item.citas }}</td>
                  <td>{{ fechaLatam(item.primera_atencion) }}</td>
                  <td>{{ fechaLatam(item.ultima_cita) }}</td>
                  <td>{{ item.dias_sin_venir }}</td>
                  <td>
                    <span class="badge" :class="badgeClass(item.etiqueta)">{{ item.etiqueta }}</span>
                  </td>
                </tr>
                <tr v-if="pacientesFiltrados.length === 0">
                  <td colspan="8" class="text-center text-muted py-4">No se encontraron pacientes en este segmento</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div v-if="tabActiva === 'crmSeguimiento'">
			<div class="card px-1 my-4 p-2">
				<div class="card-body">
					<div class="card-body">
						<p class="lead">Listado de interesados</p>
						<div class="d-flex justify-content-between">
							<div class="input-group mb-3 col-sm-4">
								<span class="input-group-text" id="basic-addon1">Fecha:</span>
								<input type="date" class="form-control" v-model="fechaInteresados" id="fechInteresados" @change="cargarInteresados()">
							</div>
							<div class="ms-2">
								<select class="form-select" v-model="filtroDoc">
									<option value="-1">Todos los profesionales</option>
									<option v-for="doctor in doctores" :value="doctor.id">{{ doctor.nombre }}</option>
								</select>
							</div>
							<div class="d-grid d-flex mb-2">
								<button class="btn btn-outline-success" @click="cargarInteresados()"><i class="fas fa-redo-alt"></i> Actualizar </button>
								<button class="btn btn-outline-primary mx-2" data-bs-toggle="modal" data-bs-target="#nuevoInteresado"><i class="fa-regular fa-circle-user"></i> Nuevo seguimiento</button>
							</div>
						</div>

						<label for=""><strong>Lista de interesados pendientes</strong></label>
						<table class="table table-hover" v-if="interesados.length>0">
							<thead>
								<tr>
									<th>N°</th>
									<th>Nombre</th>
									<th>Celular</th>
									<th>Profesional</th>
									<th>Origen</th>
									<th>Motivo</th>
									<th>Usuario</th>
									<th>Referencia</th>
									<th>Fecha y Hora</th>
									<th>Est.</th>
									<th>@</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(interesado, index) in interesados" :class="{'todos':interesado.atendido==0, 'con':interesado.atendido==1, 'sin':interesado.atendido==2}" v-show="(filtro=='todos' || filtro==1 && interesado.respuesta !='' || filtro==2 && interesado.respuesta=='') && (interesado.idProfesional == filtroDoc || filtroDoc==-1) ">
									<td>{{ index+1 }}</td>
									<td class="text-capitalize">{{ interesado.nombre }}</td>
									<td>{{ interesado.celular }}</td>
									<td>{{ interesado.nomProf }}</td>
									<td>
										<span v-if="interesado.origen=='1'">Sist. recepción</span>
										<span v-if="interesado.origen=='2'">Cartera de clientes</span>
										<span v-if="interesado.origen=='3'">Cita anulada</span>
									</td>
									<td class="text-capitalize">
										<span>{{ interesado.motivo }}</span>
										<span v-if="interesado.atendido>0"><br><i class="fas fa-user-alt"></i> {{ interesado.respuesta }}</span>
									</td>
									<td>{{ interesado.usuNombre }}</td>
									<td>
										<span>{{referencias[interesado.referencia]}}</span>
									</td>
									<td>{{ fechaLatam(interesado.fecha) }} {{ horaLatam(interesado.fecha) }}</td>
									<td>
										<span class="puntero" :title="interesado.nomSeguimiento" data-bs-target="#modalCambiarSeguimiento" data-bs-toggle="modal" @click="queId= interesado.idPaciente; idRegistro = interesado.id"> {{ interesado.icono }} </span>
									</td>
									<td>
										<button class="btn btn-outline-primary btn-sm " v-if="interesado.atendido=='0'" @click="responderInteresado(interesado)" data-bs-target="#modalResponderInteresado" data-bs-toggle="modal"><i class="far fa-comment-dots"></i></button>
									</td>
								</tr>
							</tbody>
						</table>
						<p v-else class="my2">No hay registros</p>


						<label class="mt-3"><strong>Lista de interesados por fecha</strong></label>


						<div class=" d-flex ">

							<div class="btn-group d-none" role="group" aria-label="Basic radio toggle button group">
								<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
								<label class="btn btn-outline-primary" for="btnradio1" @click="filtro='todos'">Todos</label>

								<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
								<label class="btn btn-outline-primary" for="btnradio2" @click="filtro='1'"><i class="fas fa-check"></i> Con respuestas</label>

								<input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
								<label class="btn btn-outline-primary" for="btnradio3" @click="filtro='2'"><i class="far fa-times-circle"></i> Sin respuestas</label>
							</div>
							
						</div>
						<table class="table table-hover" v-if="anteriores.length>0">
							<thead>
								<tr>
									<th>N°</th>
									<th>Nombre</th>
									<th>Celular</th>
									<th>Profesional</th>
									<th>Origen</th>
									<th>Motivo</th>
									<th>Usuario</th>
									<th>Referencia</th>
									<th>Fecha y Hora</th>
									<th>Est.</th>
									<th>@</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(interesado, index) in anteriores" v-show="(interesado.idProfesional == filtroDoc || filtroDoc==-1) ">
									<td>{{ index+1 }}</td>
									<td class="text-capitalize">{{ interesado.nombre }}</td>
									<td>{{ interesado.celular }}</td>
									<td>{{ interesado.nomProf }}</td>
									<td>
										<span v-if="interesado.origen=='1'">Manual</span>
										<span v-if="interesado.origen=='2'">Cartera de clientes</span>
										<span v-if="interesado.origen=='3'">Cita anulada</span>
									</td>
									<td class="text-capitalize">
										<span>{{ interesado.motivo }}</span>
										<span v-if="interesado.atendido>0"><br><i class="fas fa-user-alt"></i> {{ interesado.respuesta }}</span>
									</td>
									<td>{{ interesado.usuNombre }}</td>
									<td>
										<span v-if="interesado.referencia=='1'">Ninguno</span>
										<span v-if="interesado.referencia=='2'">Recomendación</span>
										<span v-if="interesado.referencia=='3'">Publicidad de internet</span>
										<span v-if="interesado.referencia=='4'">Publicidad Escrita</span>
										<span v-if="interesado.referencia=='5'">Publicidad de TV/Radio</span>
										<span v-if="interesado.referencia=='6'">Referido</span>
										<span v-if="interesado.referencia=='7'"> </span>
									</td>
									<td>{{ fechaLatam(interesado.fecha) }} {{ horaLatam(interesado.fecha) }}</td>
									<td>
										<span v-if="interesado.idSeguimiento==1" :class="interesado.color" ><span :title="interesado.nomSeguimiento"><i class="fa-regular fa-circle"></i></span></span>
										<span v-else :class="interesado.color" ><span :title="interesado.nomSeguimiento"><i class="fas fa-circle"></i></span></span>
									</td>
									<td>
										<button class="btn btn-outline-primary btn-sm " v-if="interesado.atendido=='0'" @click="responderInteresado(interesado, index)" data-bs-target="#modalResponderInteresado" data-bs-toggle="modal"><i class="far fa-comment-dots"></i></button>
									</td>
								</tr>
							</tbody>
						</table>
						<p v-else class="my2">No hay registros</p>

					
					</div>
				</div>
			</div>
    </div>

    <ModalNuevoInteresado :usuario="idUsuario" @actualizarInteresados="cargarInteresados()"></ModalNuevoInteresado>
    <ModalResponderInteresado :queInteresado="queInteresado"></ModalResponderInteresado>
    <ModalCambiarSeguimiento :seguimientos="seguimientos" :idPaciente="queId" :idUsuario="idUsuario" :idRegistro="idRegistro" @cambiar="actualizarInteresados()"></ModalCambiarSeguimiento>
  </main>
</template>

<script>
import moment from 'moment';
import ModalNuevoInteresado from '../recordatorios/ModalNuevoInteresado.vue'
import ModalResponderInteresado from '../recordatorios/ModalResponderInteresado.vue'
import ModalCambiarSeguimiento from '../adicionales/ModalCambiarSeguimiento.vue'

export default {
  name: 'HomeSeguimiento',
  components: { ModalNuevoInteresado, ModalResponderInteresado, ModalCambiarSeguimiento },
  data() {
    return {
      cargando: true,
      pacientes: [],
      resumen: {
        fidelizados: 0,
        noFidelizados: 0,
        recuperacion: 0,
        inactivos: 0,
      },
      tabActiva: 'fidelizacion',
      buscador: '',
      filtroEtiqueta: 'todos',
      
      // CRM Seguimiento data
      fechaInteresados: moment().format('YYYY-MM-DD'),
      filtroDoc: -1,
      doctores: [],
      interesados: [],
      anteriores: [],
      referencias: { 1: 'Ninguno', 2: 'Recomendación', 3: 'Publicidad de internet', 4: 'Publicidad Escrita', 5: 'Publicidad de TV/Radio', 6: 'Referido', 7: 'Sist. Recepción' },
      filtro: 'todos',
      queId: null,
      idRegistro: null,
      queInteresado: [],
      idUsuario: null,
      seguimientos: [],
    };
  },
  computed: {
    estadosActuales() {
      if (this.tabActiva === 'fidelizacion') {
        return ['Fidelizado', 'No Fidelizado'];
      }
      return ['Recuperación', 'Inactivo'];
    },
    pacientesTab() {
      if (this.tabActiva === 'fidelizacion') {
        return this.pacientes.filter((item) => ['Fidelizado', 'No Fidelizado'].includes(item.etiqueta));
      }
      return this.pacientes.filter((item) => ['Recuperación', 'Inactivo'].includes(item.etiqueta));
    },
    pacientesFiltrados() {
      const texto = this.buscador.trim().toLowerCase();
      return this.pacientesTab.filter((item) => {
        const coincideTexto = !texto
          || (item.paciente || '').toLowerCase().includes(texto)
          || (item.profesional || '').toLowerCase().includes(texto)
          || (item.servicio || '').toLowerCase().includes(texto);

        const coincideEstado = this.filtroEtiqueta === 'todos' || item.etiqueta === this.filtroEtiqueta;

        return coincideTexto && coincideEstado;
      });
    },
  },
  watch: {
    tabActiva() {
      this.filtroEtiqueta = 'todos';
    },
  },
  methods: {
    async cargarSeguimiento() {
      this.cargando = true;
      try {
        const { data } = await this.axios.get('/api/seguimiento-crm');
        this.pacientes = data.pacientes || [];
        this.resumen = data.resumen || this.resumen;
      } catch (error) {
        console.error('Error cargando seguimiento:', error);
      } finally {
        this.cargando = false;
      }
    },
    fechaLatam(fecha) {
      if (!fecha) {
        return '-';
      }
      return moment(fecha).format('DD/MM/YYYY');
    },
    horaLatam(fecha) {
      return moment(fecha).format('hh:mm a');
    },
    badgeClass(etiqueta) {
      if (etiqueta === 'Fidelizado') return 'bg-success';
      if (etiqueta === 'No Fidelizado') return 'bg-warning text-dark';
      if (etiqueta === 'Inactivo') return 'bg-secondary';
      return 'bg-danger';
    },
    async cargarInteresados() {
      await this.axios.get(`/api/listarInteresados/${this.fechaInteresados}`)
        .then(response => {
          this.interesados = response.data.interesados;
          this.anteriores = response.data.anteriores;
        });
    },
    async listarProfesionales() {
      await this.axios.get('/api/profesional')
        .then(response => {
          this.doctores = response.data;
        });
    },
    responderInteresado(interesado) {
      this.queInteresado = interesado;
    },
    actualizarInteresados() {
      this.queId = null;
      this.cargarInteresados();
    }
  },
  mounted() {
    this.cargarSeguimiento();
    this.axios.get('/api/user').then(res => this.idUsuario = res.data.user.id);
    this.listarProfesionales();
    this.axios.get('/api/pedirSeguimientos').then(response => this.seguimientos = response.data);
    this.cargarInteresados();
  },
};
</script>

<style scoped>
.puntero{ cursor: pointer; }
</style>
