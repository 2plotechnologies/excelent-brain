<template>
  <div class="container py-5" style="max-width: 900px;">
    
    <!-- Header -->
    <div class="text-center mb-5">
      <h2 class="font-weight-bold text-primary mb-2"><i class="fas fa-clipboard-list me-2"></i> Ficha de Auto-triaje</h2>
      <p class="text-muted">Por favor, complete este formulario de la manera más honesta posible. Esta información nos ayudará a brindarle una mejor atención.</p>
    </div>

    <!-- Error State -->
    <div v-if="error" class="alert alert-danger shadow-sm border-0 d-flex align-items-center p-4 rounded-lg">
      <i class="fas fa-exclamation-circle fa-2x me-3 text-danger"></i>
      <div>
        <h5 class="mb-1 text-danger font-weight-bold">Acceso Denegado</h5>
        <p class="mb-0">{{ error }}</p>
      </div>
    </div>

    <!-- Success State -->
    <div v-else-if="success" class="alert alert-success shadow-sm border-0 d-flex align-items-center p-4 rounded-lg">
      <i class="fas fa-check-circle fa-2x me-3 text-success"></i>
      <div>
        <h5 class="mb-1 text-success font-weight-bold">Formulario Enviado</h5>
        <p class="mb-0">Sus respuestas han sido registradas exitosamente. Muchas gracias por su tiempo y confianza.</p>
      </div>
    </div>

    <!-- Form -->
    <form v-else-if="loaded" @submit.prevent="submit" class="needs-validation">

      <!-- 1. Datos Generales -->
      <div class="card shadow-sm border-0 mb-4 rounded-lg overflow-hidden">
        <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
          <h5 class="font-weight-bold text-dark"><i class="fas fa-user text-primary me-2"></i> 1. Datos Generales</h5>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label text-secondary small font-weight-bold">Nombre Completo</label>
              <input v-model="form.nombre" class="form-control bg-light border-0" placeholder="Ej. Juan Pérez" required />
            </div>
            <div class="col-md-3 mb-3">
              <label class="form-label text-secondary small font-weight-bold">Edad</label>
              <input v-model="form.edad" type="number" class="form-control bg-light border-0" placeholder="Años" required />
            </div>
            <div class="col-md-3 mb-3">
              <label class="form-label text-secondary small font-weight-bold">Documento</label>
              <input v-model="form.documento" class="form-control bg-light border-0" placeholder="DNI / Pasaporte" required />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label text-secondary small font-weight-bold">Teléfono</label>
              <input v-model="form.telefono" class="form-control bg-light border-0" placeholder="Número de celular" required />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label text-secondary small font-weight-bold">Correo Electrónico</label>
              <input v-model="form.email" type="email" class="form-control bg-light border-0" placeholder="correo@ejemplo.com" />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label text-secondary small font-weight-bold">Fecha</label>
              <input type="date" v-model="form.fecha" class="form-control bg-light border-0" required />
            </div>
          </div>
        </div>
      </div>

      <!-- Contacto de Emergencia -->
      <div class="card shadow-sm border-0 mb-4 rounded-lg overflow-hidden border-start border-danger" style="border-left-width: 4px !important; border-left-color: #ef4444 !important;">
        <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
          <h5 class="font-weight-bold text-dark"><i class="fas fa-address-book text-danger me-2"></i> 2. Persona de contacto en caso de emergencia</h5>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-5 mb-3">
              <label class="form-label text-secondary small font-weight-bold">Nombre</label>
              <input v-model="form.emergencia.nombre" class="form-control bg-light border-0" placeholder="Nombre del contacto" required />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label text-secondary small font-weight-bold">Teléfono</label>
              <input v-model="form.emergencia.telefono" class="form-control bg-light border-0" placeholder="Número de contacto" required />
            </div>
            <div class="col-md-3 mb-3">
              <label class="form-label text-secondary small font-weight-bold">Relación</label>
              <input v-model="form.emergencia.relacion" class="form-control bg-light border-0" placeholder="Ej. Madre, Esposo" required />
            </div>
          </div>
        </div>
      </div>

      <!-- Preferencias de Consulta y Consentimiento -->
      <div class="card shadow-sm border-0 mb-4 rounded-lg overflow-hidden">
        <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
          <h5 class="font-weight-bold text-dark"><i class="fas fa-hand-holding-medical text-success me-2"></i> 3. Consulta y Consentimiento</h5>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-4 mb-3">
              <label class="form-label text-secondary small font-weight-bold">Servicio Requerido</label>
              <select v-model="form.servicio" class="form-control bg-light border-0">
                <option value="" disabled selected>Seleccione...</option>
                <option>Psicología</option>
                <option>Psiquiatría</option>
                <option>No estoy seguro</option>
              </select>
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label text-secondary small font-weight-bold">Modalidad</label>
              <select v-model="form.modalidad" class="form-control bg-light border-0">
                <option value="" disabled selected>Seleccione...</option>
                <option>Presencial</option>
                <option>Virtual</option>
                <option>Indistinto</option>
              </select>
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label text-secondary small font-weight-bold">Consentimiento para atención</label>
              <select v-model="form.consentimiento" class="form-control bg-light border-0" required>
                <option value="" disabled selected>Seleccione...</option>
                <option value="si">Sí autorizo</option>
                <option value="no">No autorizo</option>
              </select>
            </div>
          </div>
          <div class="mb-3 mt-2">
            <label class="form-label text-secondary small font-weight-bold">Motivo principal de consulta</label>
            <textarea v-model="form.motivo" class="form-control bg-light border-0" rows="3" placeholder="Describa brevemente qué le trae a consulta..."></textarea>
          </div>
          <div class="mb-0">
            <label class="form-label text-secondary small font-weight-bold">Expectativas</label>
            <textarea v-model="form.expectativa" class="form-control bg-light border-0" rows="2" placeholder="¿Qué espera lograr con este proceso?"></textarea>
          </div>
        </div>
      </div>

      <!-- Síntomas -->
      <div class="card shadow-sm border-0 mb-4 rounded-lg overflow-hidden">
        <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
          <h5 class="font-weight-bold text-dark"><i class="fas fa-stethoscope text-info me-2"></i> 4. Síntomas Presentes</h5>
          <p class="text-muted small mb-0">Seleccione los síntomas que ha experimentado recientemente:</p>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mb-2" v-for="(s, index) in sintomasList" :key="index">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" :id="'sintoma_' + index" :value="s" v-model="form.sintomas" />
                <label class="form-check-label text-dark" :for="'sintoma_' + index">{{ s }}</label>
              </div>
            </div>
          </div>
          <hr class="my-4">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label text-secondary small font-weight-bold">¿Desde cuándo presenta estos síntomas?</label>
              <input v-model="form.sintomas_desde" class="form-control bg-light border-0" placeholder="Ej. Hace 2 meses, desde la infancia" />
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label text-secondary small font-weight-bold">Nivel de interferencia en su vida diaria</label>
              <select v-model="form.interferencia" class="form-control bg-light border-0">
                <option value="" disabled selected>Seleccione...</option>
                <option>Poco</option>
                <option>Moderado</option>
                <option>Mucho</option>
                <option>Extremo</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Antecedentes -->
      <div class="card shadow-sm border-0 mb-4 rounded-lg overflow-hidden">
        <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
          <h5 class="font-weight-bold text-dark"><i class="fas fa-notes-medical text-warning me-2"></i> 5. Antecedentes</h5>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-12 mb-3" v-for="q in antecedentes" :key="q.key">
              <div class="d-flex justify-content-between align-items-center bg-light p-3 rounded">
                <label class="form-label text-dark mb-0 w-75">{{ q.label }}</label>
                <select v-model="form[q.key]" class="form-control bg-white border-0 w-25 shadow-sm">
                  <option value="" disabled selected>Seleccione</option>
                  <option value="no">No</option>
                  <option value="si">Sí</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Seguridad -->
      <div class="card shadow-sm border-0 mb-4 rounded-lg overflow-hidden border-start border-danger" style="border-left-width: 4px !important; border-left-color: #ef4444 !important;">
        <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
          <h5 class="font-weight-bold text-danger"><i class="fas fa-shield-alt me-2"></i> 6. Seguridad</h5>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-12 mb-3" v-for="q in seguridad" :key="q">
              <div class="d-flex justify-content-between align-items-center bg-light p-3 rounded">
                <label class="form-label text-dark mb-0 w-75">{{ q }}</label>
                <select v-model="form.seguridad[q]" class="form-control bg-white border-0 w-25 shadow-sm">
                  <option value="" disabled selected>Seleccione</option>
                  <option>No</option>
                  <option>Sí</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Evaluaciones (PHQ-9, GAD-7, Y-BOCS) -->
      <!-- PHQ-9 -->
      <div class="card shadow-sm border-0 mb-4 rounded-lg overflow-hidden">
        <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
          <h5 class="font-weight-bold text-dark"><i class="fas fa-list-ol text-primary me-2"></i> 7. Cuestionario de Salud (PHQ-9)</h5>
          <p class="text-muted small mb-0">En las últimas 2 semanas, ¿con qué frecuencia le han molestado los siguientes problemas?</p>
        </div>
        <div class="card-body px-0">
          <div class="table-responsive">
            <table class="table table-borderless table-hover align-middle mb-0 px-3">
              <thead class="bg-light">
                <tr class="text-secondary small">
                  <th class="w-50 ps-4 py-3">Pregunta</th>
                  <th class="text-center py-3">Nada</th>
                  <th class="text-center py-3">Varios días</th>
                  <th class="text-center py-3">> Mitad de días</th>
                  <th class="text-center py-3">Casi todos</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(q,i) in phq9" :key="i" class="border-bottom">
                  <td class="ps-4">{{ q }}</td>
                  <td class="text-center"><input type="radio" :name="'phq9_'+i" value="0" v-model="form.phq9[i]" required></td>
                  <td class="text-center"><input type="radio" :name="'phq9_'+i" value="1" v-model="form.phq9[i]"></td>
                  <td class="text-center"><input type="radio" :name="'phq9_'+i" value="2" v-model="form.phq9[i]"></td>
                  <td class="text-center"><input type="radio" :name="'phq9_'+i" value="3" v-model="form.phq9[i]"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- GAD-7 -->
      <div class="card shadow-sm border-0 mb-4 rounded-lg overflow-hidden">
        <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
          <h5 class="font-weight-bold text-dark"><i class="fas fa-list-ol text-info me-2"></i> 8. Cuestionario de Ansiedad (GAD-7)</h5>
          <p class="text-muted small mb-0">En las últimas 2 semanas, ¿con qué frecuencia le han molestado los siguientes problemas?</p>
        </div>
        <div class="card-body px-0">
          <div class="table-responsive">
            <table class="table table-borderless table-hover align-middle mb-0">
              <thead class="bg-light">
                <tr class="text-secondary small">
                  <th class="w-50 ps-4 py-3">Pregunta</th>
                  <th class="text-center py-3">Nada</th>
                  <th class="text-center py-3">Varios días</th>
                  <th class="text-center py-3">> Mitad de días</th>
                  <th class="text-center py-3">Casi todos</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(q,i) in gad7" :key="i" class="border-bottom">
                  <td class="ps-4">{{ q }}</td>
                  <td class="text-center"><input type="radio" :name="'gad7_'+i" value="0" v-model="form.gad7[i]" required></td>
                  <td class="text-center"><input type="radio" :name="'gad7_'+i" value="1" v-model="form.gad7[i]"></td>
                  <td class="text-center"><input type="radio" :name="'gad7_'+i" value="2" v-model="form.gad7[i]"></td>
                  <td class="text-center"><input type="radio" :name="'gad7_'+i" value="3" v-model="form.gad7[i]"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Dificultad Funcional -->
      <div class="card shadow-sm border-0 mb-4 rounded-lg overflow-hidden">
        <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
          <h5 class="font-weight-bold text-dark"><i class="fas fa-briefcase text-secondary me-2"></i> 9. Dificultad Funcional</h5>
        </div>
        <div class="card-body">
          <p class="text-dark small mb-3">Si marcó algún problema en los cuestionarios anteriores, ¿qué tan difícil se le ha hecho hacer su trabajo, tareas domésticas, o relacionarse con otras personas debido a estos problemas?</p>
          <select v-model="form.dificultad" class="form-control bg-light border-0">
            <option value="" disabled selected>Seleccione una opción...</option>
            <option>Nada difícil</option>
            <option>Algo difícil</option>
            <option>Muy difícil</option>
            <option>Extremadamente difícil</option>
          </select>
        </div>
      </div>

      <!-- YBOCS -->
      <div class="card shadow-sm border-0 mb-4 rounded-lg overflow-hidden">
        <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
          <h5 class="font-weight-bold text-dark"><i class="fas fa-list-ol text-warning me-2"></i> 10. Escala de Obsesiones y Compulsiones (Y-BOCS)</h5>
          <p class="text-muted small mb-0">Seleccione el nivel que mejor describa su situación (opcional):</p>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-12 mb-3" v-for="(q,i) in ybocs" :key="i">
              <div class="d-flex justify-content-between align-items-center bg-light p-3 rounded flex-wrap gap-2">
                <label class="form-label text-dark mb-0 w-100" style="max-width: 70%;">{{ q }}</label>
                <select v-model="form.ybocs[i]" class="form-control bg-white border-0 shadow-sm" style="max-width: 28%;">
                  <option value="" disabled selected>Seleccione</option>
                  <option value="0">Ausente</option>
                  <option value="1">Leve</option>
                  <option value="2">Moderado</option>
                  <option value="3">Severo</option>
                  <option value="4">Extremo</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Información Adicional y Confirmación -->
      <div class="card shadow-sm border-0 mb-4 rounded-lg overflow-hidden" style="background-color: #f8fafc;">
        <div class="card-body p-4">
          <h5 class="font-weight-bold text-dark mb-3"><i class="fas fa-comment-dots text-secondary me-2"></i> 11. Información Adicional</h5>
          <textarea v-model="form.adicional" class="form-control border-0 mb-4 shadow-sm" rows="3" placeholder="Si hay algo más que considere importante que sepamos, por favor escríbalo aquí..."></textarea>
          
          <hr class="my-4" style="border-color: #cbd5e1;">
          
          <h5 class="font-weight-bold text-dark mb-3"><i class="fas fa-signature text-secondary me-2"></i> 12. Confirmación</h5>
          <p class="small text-muted mb-3">Al ingresar mi nombre confirmo que la información proporcionada es veraz y correcta.</p>
          <div class="row align-items-center">
            <div class="col-md-8 mb-3 mb-md-0">
              <input v-model="form.nombre_confirmacion" class="form-control border-0 shadow-sm form-control-lg" placeholder="Firma digital (Escriba su nombre)" required />
            </div>
            <div class="col-md-4 text-end">
              <button class="btn btn-primary btn-lg w-100 shadow rounded-pill font-weight-bold" type="submit" :disabled="submitting">
                <span v-if="submitting"><i class="fas fa-spinner fa-spin me-2"></i>Enviando...</span>
                <span v-else><i class="fas fa-paper-plane me-2"></i>Enviar Ficha</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </form>
    
    <!-- Loading State -->
    <div v-if="!loaded && !error" class="text-center py-5">
      <div class="spinner-border text-primary mb-3" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <h5 class="text-secondary">Cargando formulario...</h5>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loaded: false,
      error: null,
      success: false,
      submitting: false,
      token: null,

      sintomasList: [
        'Tristeza o desánimo',
        'Pérdida de interés o placer',
        'Ansiedad o preocupación excesiva',
        'Crisis de pánico',
        'Irritabilidad',
        'Problemas de sueño',
        'Cansancio o baja energía',
        'Cambios en apetito o peso',
        'Dificultad para concentrarse',
        'Pensamientos repetitivos no deseados',
        'Rituales o compulsiones',
        'Miedos intensos',
        'Dificultades familiares o de pareja',
        'Problemas laborales o académicos',
        'Consumo de alcohol u otras sustancias',
        'Duelo o pérdida reciente',
        'Trauma o experiencia difícil',
        'Ideas de muerte o autolesión',
      ],

      antecedentes: [
        {key:'atencion_previa',label:'¿Ha recibido atención psicológica o psiquiátrica antes?'},
        {key:'diagnostico',label:'¿Tiene algún diagnóstico previo?'},
        {key:'medicamentos',label:'¿Toma actualmente medicamentos?'},
        {key:'hospitalizaciones',label:'¿Ha tenido hospitalizaciones por salud mental?'},
        {key:'autolesiones',label:'¿Ha tenido intentos de autolesión o suicidio anteriormente?'},
        {key:'consumo_sustancias',label:'¿Consume alcohol u otras sustancias?'},
        {key:'condiciones_medicas',label:'¿Tiene condiciones médicas relevantes?'},
        {key:'alergias',label:'¿Tiene alergias o reacciones a medicamentos?'},
        {key:'antecedentes_familiares',label:'¿Hay antecedentes familiares de depresión, ansiedad, TOC, bipolaridad, psicosis, suicidio u otros?'}
      ],

      seguridad: [
        'En las últimas 2 semanas, ¿ha pensado que sería mejor estar muerto/a o hacerse daño?',
        'Actualmente, ¿tiene intención de hacerse daño o quitarse la vida?',
        '¿Ha pensado en un método específico o plan?',
        '¿Tiene acceso a medios para hacerse daño?',
        '¿Ha realizado un intento previo o conducta preparatoria?',
        '¿Siente que no puede mantenerse seguro/a en este momento?',
        '¿Puede contactar ahora a una persona de apoyo?'
      ],

      phq9: [
        'Poco interés o placer en hacer cosas.',
        'Sentirse decaído/a, deprimido/a o sin esperanza.',
        'Dificultad para dormir, dormir demasiado o sueño no reparador.',
        'Sentirse cansado/a o con poca energía.',
        'Poco apetito o comer en exceso.',
        'Sentirse mal consigo mismo/a, sentir que ha fallado o que ha defraudado a su familia.',
        'Dificultad para concentrarse, por ejemplo al leer, trabajar o ver televisión.',
        'Moverse o hablar tan lento que otras personas podrían notarlo, o estar tan inquieto/a que se mueve más de lo habitual.',
        'Pensamientos de que estaría mejor muerto/a o de hacerse daño de alguna manera.'
      ],

      gad7: [
        'Sentirse nervioso/a, ansioso/a o con los nervios de punta.',
        'No poder detener o controlar la preocupación.',
        'Preocuparse demasiado por diferentes cosas.',
        'Tener dificultad para relajarse.',
        'Estar tan inquieto/a que le cuesta permanecer sentado/a o tranquilo/a.',
        'Irritarse o molestarse con facilidad.',
        'Sentir miedo como si algo terrible pudiera ocurrir.'
      ],

      ybocs: [
        'Tiempo ocupado por obsesiones: pensamientos, imágenes o impulsos repetitivos no deseados.',
        'Interferencia de las obsesiones en estudio, trabajo, relaciones o actividades diarias.',
        'Malestar o ansiedad causada por las obsesiones.',
        'Esfuerzo para resistir o apartar las obsesiones.',
        'Grado de control percibido sobre las obsesiones.',
        'Tiempo ocupado por compulsiones o rituales: lavado, verificación, orden, conteo, repetición u otros.',
        'Interferencia de las compulsiones en estudio, trabajo, relaciones o actividades diarias.',
        'Malestar si se impiden o retrasan las compulsiones.',
        'Esfuerzo para resistir o reducir las compulsiones.',
        'Grado de control percibido sobre las compulsiones.'
      ],

      form: {
        nombre: '',
        edad: '',
        documento: '',
        telefono: '',
        email: '',
        fecha: new Date().toISOString().split('T')[0],
        servicio: '',
        modalidad: '',
        consentimiento: '',
        motivo: '',
        expectativa: '',
        sintomas: [],
        sintomas_desde: '',
        interferencia: '',
        emergencia: {
          nombre: '',
          telefono: '',
          relacion: ''
        },
        seguridad: {},
        phq9: {},
        gad7: {},
        dificultad: '',
        ybocs: {},
        adicional: '',
        nombre_confirmacion: ''
      }
    }
  },

  async mounted() {
    this.token = this.$route.params.token

    try {
      const res = await axios.get(`/api/cuestionario/${this.token}`)
      if (res.data.patient) {
        this.fillForm(res.data.patient)
      }
      this.loaded = true
    } catch (e) {
      if (e.response && e.response.status === 403) {
        this.error = e.response.data.message || 'Link inválido o expirado';
      } else {
        this.error = 'Ocurrió un error o el enlace es inválido';
      }
    }
  },

  methods: {
    async submit() {
      this.submitting = true;
      try {
        await axios.post(`/api/cuestionario/${this.token}`, this.form)
        this.success = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (e) {
        if (e.response && e.response.status === 403) {
            alert(e.response.data.message || e.response.data.error || 'Link inválido o expirado');
        } else {
            alert('Error al enviar. Intente nuevamente.');
        }
      } finally {
        this.submitting = false;
      }
    },
    fillForm(patient) {
      // name = apellido, nombres = nombre
      const fullName = `${patient.nombres || ''} ${patient.name || ''}`.trim();
      this.form.nombre = fullName;
      this.form.edad = this.getAge(patient.birth_date);
      this.form.documento = patient.dni || '';
      this.form.telefono = patient.phone || '';
      this.form.email = patient.email || '';
      
      // Firma digital inicial
      this.form.nombre_confirmacion = fullName;

      // Contacto de emergencia (usar el primero si existe)
      if (patient.relative && patient.relative.length > 0) {
        const rel = patient.relative[0];
        this.form.emergencia.nombre = rel.name || '';
        this.form.emergencia.telefono = rel.phone || '';
        this.form.emergencia.relacion = rel.kinship || '';
      }
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
    }
  }
}
</script>

<style scoped>
.container { 
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
.card {
  border-radius: 0.75rem !important;
}
.form-control {
  border-radius: 0.5rem;
  padding: 0.6rem 1rem;
}
.form-control:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
  background-color: #fff !important;
  border-color: #86b7fe;
}
.form-label {
  margin-bottom: 0.25rem;
}
.rounded-lg {
  border-radius: 1rem !important;
}
.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.04) !important;
}
.border-start {
  border-left: 1px solid #dee2e6 !important;
}
.bg-light {
  background-color: #f8f9fa !important;
}
.table th {
  font-weight: 600;
  color: #6c757d;
}
/* Radio buttons style improvement */
input[type="radio"] {
  width: 1.2rem;
  height: 1.2rem;
  accent-color: #0d6efd;
  cursor: pointer;
}
.form-check-input {
  cursor: pointer;
}
.form-check-label {
  cursor: pointer;
}
</style>
