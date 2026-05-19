<template>
  <div id="clinic-login-root">

    <!-- Orbes de fondo -->
    <div class="cl-orb cl-orb-1"></div>
    <div class="cl-orb cl-orb-2"></div>
    <div class="cl-orb cl-orb-3"></div>

    <div class="cl-card">

      <!-- ── Panel izquierdo ── -->
      <div class="cl-panel-left">
        <div class="cl-panel-left-inner">

          <div class="cl-quote-mark">"</div>
          <p class="cl-quote-text">El bienestar mental es la base de una vida plena y equilibrada.</p>
          <div class="cl-quote-line"></div>
          <span class="cl-quote-author">Centro de Salud Mental</span>

          <div class="cl-deco-svg">
            <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="140" cy="140" r="120" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
              <circle cx="140" cy="140" r="82"  stroke="rgba(255,255,255,0.1)"  stroke-width="1"/>
              <circle cx="140" cy="140" r="44"  stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
              <path d="M140 88 C112 88 94 106 94 128 C94 146 104 160 120 165 L120 192 L160 192 L160 165 C176 160 186 146 186 128 C186 106 168 88 140 88Z"
                stroke="rgba(255,255,255,0.28)" stroke-width="1.4" fill="none" stroke-linecap="round"/>
              <line x1="140" y1="116" x2="140" y2="165" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
              <path d="M120 132 C120 124 128 118 137 118" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
              <path d="M160 132 C160 124 152 118 143 118" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            </svg>
          </div>

          <div class="cl-dots">
            <span v-for="i in 9" :key="i" class="cl-dot"></span>
          </div>

        </div>
      </div>

      <!-- ── Panel derecho ── -->
      <div class="cl-panel-right">
        <div class="cl-form-box">

          <!-- Logo -->
          <div class="cl-logo-wrap">
            <img src="/img/logoem.png" alt="Logo" class="cl-logo" />
          </div>

          <div class="cl-form-header">
            <h1 class="cl-title">Acceso al Sistema</h1>
            <p class="cl-subtitle">Consultorio Online — Área Profesional</p>
          </div>

          <!-- Alerta de error general -->
          <div v-if="errorGeneral" class="cl-alert">
            {{ errorGeneral }}
          </div>

          <div class="cl-fields">

            <!-- Email -->
            <div class="cl-field">
              <label class="cl-label" for="cl-email">Correo electrónico</label>
              <div class="cl-input-wrap">
                <svg class="cl-input-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.5"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <input
                  id="cl-email"
                  type="email"
                  v-model="formData.email"
                  class="cl-input"
                  :class="{ 'cl-input--error': errors.email }"
                  placeholder="nombre@clinica.com"
                  autocomplete="email"
                />
              </div>
              <span class="cl-error-msg" v-if="errors.email">{{ Array.isArray(errors.email) ? errors.email[0] : errors.email }}</span>
            </div>

            <!-- Password -->
            <div class="cl-field">
              <label class="cl-label" for="cl-password">Contraseña</label>
              <div class="cl-input-wrap">
                <svg class="cl-input-icon" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <input
                  id="cl-password"
                  :type="showPassword ? 'text' : 'password'"
                  v-model="formData.password"
                  class="cl-input"
                  :class="{ 'cl-input--error': errors.password }"
                  placeholder="••••••••••"
                  autocomplete="current-password"
                />
                <button type="button" class="cl-toggle-pw" @click="showPassword = !showPassword" tabindex="-1">
                  <svg v-if="!showPassword" viewBox="0 0 24 24" fill="none">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="1.5"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                  <svg v-else viewBox="0 0 24 24" fill="none">
                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                </button>
              </div>
              <span class="cl-error-msg" v-if="errors.password">{{ Array.isArray(errors.password) ? errors.password[0] : errors.password }}</span>
            </div>

          </div>

          <!-- Botón -->
          <button class="cl-btn" @click="login" :disabled="isLoading">
            <span class="cl-btn-text">{{ isLoading ? 'Verificando...' : 'Ingresar' }}</span>
            <span class="cl-btn-arrow" v-if="!isLoading">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="cl-spinner" v-if="isLoading"></span>
          </button>

          <!-- Footer -->
          <div class="cl-footer">
            <div class="cl-divider"><span>Acceso seguro y cifrado</span></div>
            <div class="cl-badges">
              <span class="cl-badge">🔒 SSL</span>
              <span class="cl-badge">🕐 24/7</span>
              <span class="cl-badge">👤 Solo personal</span>
            </div>
            <p class="cl-version">v{{ version }}</p>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      formData: {
        email: '',
        password: '',
        device_name: 'browser'
      },
      errors: {},
      errorGeneral: '',
      showPassword: false,
      isLoading: false,
      version: '5.57 Build 26.0415'
    }
  },
  methods: {
    login() {
      this.errors = {}
      this.errorGeneral = ''

      if (!this.formData.email) {
        this.errors.email = 'El correo es requerido.'
        return
      }
      if (!this.formData.password) {
        this.errors.password = 'La contraseña es requerida.'
        return
      }

      this.isLoading = true

      this.axios.post('/api/login', this.formData)
        .then((res) => {
          const token = res.data.token
          const rol   = res.data.rol
          if (!token || !rol) {
            console.error('Respuesta de login inesperada:', res.data)
            this.errorGeneral = 'Respuesta inesperada del servidor.'
            return
          }
          localStorage.setItem('token', token)
          this.$router.push({ path: `/${rol}/home` })
        })
        .catch((err) => {
          console.error('Login error:', err)
          if (err.response?.status === 422) {
            const data = err.response.data
            if (data.errors) {
              this.errors = data.errors
            } else if (data.message) {
              this.errorGeneral = data.message
            } else {
              this.errorGeneral = 'Credenciales incorrectas. Verifique su correo y contraseña.'
            }
          } else if (err.response?.status === 401) {
            this.errorGeneral = 'Credenciales incorrectas.'
          } else {
            this.errorGeneral = 'Error de conexión. Intente nuevamente.'
          }
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<!-- Sin scoped: los !important superan a Bootstrap -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

#clinic-login-root {
  min-height: 100vh !important;
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #eceef4 !important;
  font-family: 'DM Sans', sans-serif !important;
  position: relative !important;
  overflow: hidden !important;
  padding: 2rem !important;
  box-sizing: border-box !important;
}

#clinic-login-root .cl-orb {
  position: fixed !important;
  border-radius: 50% !important;
  pointer-events: none !important;
  z-index: 0 !important;
  filter: blur(90px) !important;
  opacity: 0.4 !important;
}
#clinic-login-root .cl-orb-1 {
  width: 500px !important; height: 500px !important;
  background: radial-gradient(circle, #f47c30, transparent 70%) !important;
  top: -160px !important; left: -120px !important;
  animation: cl-float 16s ease-in-out infinite !important;
}
#clinic-login-root .cl-orb-2 {
  width: 360px !important; height: 360px !important;
  background: radial-gradient(circle, #4a80d4, transparent 70%) !important;
  bottom: -80px !important; right: -80px !important;
  animation: cl-float 20s ease-in-out infinite reverse !important;
}
#clinic-login-root .cl-orb-3 {
  width: 240px !important; height: 240px !important;
  background: radial-gradient(circle, #1a3a6b, transparent 70%) !important;
  top: 45% !important; left: 45% !important;
  animation: cl-float 26s ease-in-out infinite !important;
}

@keyframes cl-float {
  0%,100% { transform: translate(0,0) scale(1); }
  33%      { transform: translate(28px,-18px) scale(1.04); }
  66%      { transform: translate(-18px,28px) scale(0.97); }
}

#clinic-login-root .cl-card {
  position: relative !important;
  z-index: 1 !important;
  display: flex !important;
  width: 100% !important;
  max-width: 920px !important;
  min-height: 560px !important;
  border-radius: 20px !important;
  overflow: hidden !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04), 0 24px 64px rgba(10,31,68,0.2), 0 0 0 1px rgba(255,255,255,0.6) !important;
  animation: cl-rise 0.7s cubic-bezier(0.16,1,0.3,1) both !important;
}

@keyframes cl-rise {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

#clinic-login-root .cl-panel-left {
  flex: 0 0 42% !important;
  background: linear-gradient(148deg, #0a1f44 0%, #1a3a6b 55%, #0d2d5a 100%) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  position: relative !important;
  overflow: hidden !important;
}

#clinic-login-root .cl-panel-left::before {
  content: '' !important;
  position: absolute !important;
  inset: 0 !important;
  background: radial-gradient(ellipse at 25% 25%, rgba(255,140,50,0.2) 0%, transparent 58%),
              radial-gradient(ellipse at 75% 75%, rgba(100,160,255,0.14) 0%, transparent 55%) !important;
  pointer-events: none !important;
}

#clinic-login-root .cl-panel-left-inner {
  position: relative !important;
  z-index: 1 !important;
  padding: 3rem 2.5rem !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 1.6rem !important;
  text-align: center !important;
}

#clinic-login-root .cl-quote-mark {
  font-family: 'Cormorant Garamond', serif !important;
  font-size: 5rem !important;
  line-height: 0.8 !important;
  color: #f47c30 !important;
}

#clinic-login-root .cl-quote-text {
  font-family: 'Cormorant Garamond', serif !important;
  font-size: 1.15rem !important;
  font-weight: 300 !important;
  font-style: italic !important;
  color: rgba(255,255,255,0.85) !important;
  line-height: 1.75 !important;
  max-width: 240px !important;
  margin: 0 auto !important;
}

#clinic-login-root .cl-quote-line {
  width: 36px !important;
  height: 1px !important;
  background: #f47c30 !important;
  margin: 0 auto !important;
}

#clinic-login-root .cl-quote-author {
  font-size: 0.7rem !important;
  letter-spacing: 0.16em !important;
  text-transform: uppercase !important;
  color: rgba(255,255,255,0.4) !important;
}

#clinic-login-root .cl-deco-svg {
  width: 160px !important;
  opacity: 0.7 !important;
  animation: cl-spin 50s linear infinite !important;
}

@keyframes cl-spin {
  to { transform: rotate(360deg); }
}

#clinic-login-root .cl-dots {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 9px !important;
}

#clinic-login-root .cl-dot {
  display: block !important;
  width: 4px !important;
  height: 4px !important;
  border-radius: 50% !important;
  background: rgba(255,255,255,0.22) !important;
}

#clinic-login-root .cl-panel-right {
  flex: 1 !important;
  background: #ffffff !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 3rem 2.5rem !important;
  position: relative !important;
}

#clinic-login-root .cl-panel-right::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important; left: 0 !important;
  width: 2px !important; height: 100% !important;
  background: linear-gradient(to bottom, transparent, #f47c30 40%, #f47c30 60%, transparent) !important;
  opacity: 0.35 !important;
}

#clinic-login-root .cl-form-box {
  width: 100% !important;
  max-width: 360px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 1.6rem !important;
}

#clinic-login-root .cl-logo-wrap { text-align: center !important; }
#clinic-login-root .cl-logo {
  max-width: 180px !important;
  max-height: 80px !important;
  object-fit: contain !important;
  display: inline-block !important;
}

#clinic-login-root .cl-title {
  font-family: 'Cormorant Garamond', serif !important;
  font-size: 1.85rem !important;
  font-weight: 500 !important;
  color: #1a1a2e !important;
  text-align: center !important;
  letter-spacing: -0.01em !important;
  line-height: 1.2 !important;
  margin: 0 !important;
}

#clinic-login-root .cl-subtitle {
  font-size: 0.72rem !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  color: #7a8a9a !important;
  text-align: center !important;
  margin: 0.35rem 0 0 !important;
}

#clinic-login-root .cl-alert {
  background: #fdf3f3 !important;
  border: 1px solid #f0c0c0 !important;
  border-radius: 8px !important;
  padding: 0.75rem 1rem !important;
  font-size: 0.82rem !important;
  color: #c0392b !important;
  text-align: center !important;
}

#clinic-login-root .cl-fields {
  display: flex !important;
  flex-direction: column !important;
  gap: 1rem !important;
}

#clinic-login-root .cl-field {
  display: flex !important;
  flex-direction: column !important;
  gap: 0.4rem !important;
}

#clinic-login-root .cl-label {
  font-size: 0.72rem !important;
  font-weight: 500 !important;
  letter-spacing: 0.09em !important;
  text-transform: uppercase !important;
  color: #3d4a5c !important;
}

#clinic-login-root .cl-input-wrap {
  position: relative !important;
  display: flex !important;
  align-items: center !important;
}

#clinic-login-root .cl-input-icon {
  position: absolute !important;
  left: 13px !important;
  width: 15px !important;
  height: 15px !important;
  color: #9aabb8 !important;
  pointer-events: none !important;
}

#clinic-login-root .cl-input {
  width: 100% !important;
  padding: 0.78rem 2.8rem !important;
  border: 1.5px solid #ddd8cf !important;
  border-radius: 8px !important;
  font-family: 'DM Sans', sans-serif !important;
  font-size: 0.87rem !important;
  color: #1a1a2e !important;
  background: #faf9f6 !important;
  outline: none !important;
  transition: border-color 0.2s, box-shadow 0.2s !important;
  box-shadow: none !important;
  -webkit-appearance: none !important;
}

#clinic-login-root .cl-input::placeholder { color: #bbb !important; }

#clinic-login-root .cl-input:focus {
  border-color: #f47c30 !important;
  background: #fff !important;
  box-shadow: 0 0 0 3px rgba(244,124,48,0.12) !important;
}

#clinic-login-root .cl-input--error {
  border-color: #c0392b !important;
  background: #fdf8f8 !important;
}

#clinic-login-root .cl-error-msg {
  font-size: 0.73rem !important;
  color: #c0392b !important;
}

#clinic-login-root .cl-toggle-pw {
  position: absolute !important;
  right: 11px !important;
  background: none !important;
  border: none !important;
  cursor: pointer !important;
  color: #9aabb8 !important;
  padding: 4px !important;
  display: flex !important;
  align-items: center !important;
  box-shadow: none !important;
  outline: none !important;
}
#clinic-login-root .cl-toggle-pw:hover { color: #f47c30 !important; }
#clinic-login-root .cl-toggle-pw svg { width: 15px !important; height: 15px !important; }

/* ── BOTÓN ── */
#clinic-login-root .cl-btn {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.6rem !important;
  width: 100% !important;
  padding: 0.88rem 1.5rem !important;
  background: linear-gradient(135deg, #e8620a 0%, #f47c30 100%) !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 8px !important;
  font-family: 'DM Sans', sans-serif !important;
  font-size: 0.85rem !important;
  font-weight: 500 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  cursor: pointer !important;
  transition: transform 0.18s, box-shadow 0.18s !important;
  box-shadow: 0 4px 18px rgba(232,98,10,0.35) !important;
  position: relative !important;
  overflow: hidden !important;
}

#clinic-login-root .cl-btn:hover:not(:disabled) {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 26px rgba(232,98,10,0.42) !important;
}

#clinic-login-root .cl-btn:disabled {
  opacity: 0.65 !important;
  cursor: not-allowed !important;
}

#clinic-login-root .cl-btn-arrow svg {
  width: 16px !important;
  height: 16px !important;
  transition: transform 0.2s !important;
}
#clinic-login-root .cl-btn:hover .cl-btn-arrow svg {
  transform: translateX(3px) !important;
}

#clinic-login-root .cl-spinner {
  display: inline-block !important;
  width: 16px !important; height: 16px !important;
  border: 2px solid rgba(255,255,255,0.3) !important;
  border-top-color: #fff !important;
  border-radius: 50% !important;
  animation: cl-spin-fast 0.7s linear infinite !important;
}
@keyframes cl-spin-fast { to { transform: rotate(360deg); } }

#clinic-login-root .cl-footer {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 0.9rem !important;
}

#clinic-login-root .cl-divider {
  display: flex !important;
  align-items: center !important;
  gap: 0.75rem !important;
  width: 100% !important;
  font-size: 0.68rem !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  color: #9aabb8 !important;
}
#clinic-login-root .cl-divider::before,
#clinic-login-root .cl-divider::after {
  content: '' !important;
  flex: 1 !important;
  height: 1px !important;
  background: #e2ddd5 !important;
}

#clinic-login-root .cl-badges {
  display: flex !important;
  gap: 0.5rem !important;
  flex-wrap: wrap !important;
  justify-content: center !important;
}

#clinic-login-root .cl-badge {
  display: inline-flex !important;
  align-items: center !important;
  padding: 0.28rem 0.65rem !important;
  background: #f5f0e8 !important;
  border: 1px solid #e2ddd5 !important;
  border-radius: 100px !important;
  font-size: 0.68rem !important;
  color: #3d4a5c !important;
}

#clinic-login-root .cl-version {
  font-size: 0.65rem !important;
  color: #c0c0c0 !important;
  margin: 0 !important;
}

@media (max-width: 660px) {
  #clinic-login-root .cl-panel-left { display: none !important; }
  #clinic-login-root .cl-panel-right { padding: 2.2rem 1.6rem !important; }
  #clinic-login-root .cl-card { border-radius: 14px !important; }
}
</style>
