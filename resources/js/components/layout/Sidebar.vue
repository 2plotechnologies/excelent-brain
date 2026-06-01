<template>
		<ul
		class="navbar-nav sidebar sidebar-dark accordion d-print-none"
		:class="{ 'bg-warning': rolUser === 'profesional',
		'bg-dark': rolUser === 'administrador',
		'recepcion-sidebar': rolUser === 'recepcionista',
		'bg-danger': rolUser === 'interno'}"
		id="accordionSidebar">
				<a class="sidebar-brand d-flex align-items-center justify-content-center m-3 rounded p-2" href="#">
					<img src="/img/logo-empresa-removebg-preview.png" class="img-fluid" style="max-height: 100%; object-fit: contain;">
				</a>

				<!-- Rol del admin -->
				<div v-if="rolUser === 'administrador'">
						<!-- Divider -->
						<hr class="sidebar-divider my-0">

						<!-- Nav Item - Dashboard -->
						<li class="nav-item nav__list active" @click="activeSidebar()">
								<router-link  to="/administrador/home" class="nav-link">
										<i class="fas fa-home"></i>
										<span>Inicio</span>
								</router-link>
						</li>

						<!-- Divider -->
						<hr class="sidebar-divider">

						<!-- Heading -->
						<div class="sidebar-heading">
								Secciones
						</div>
						<!-- Nav Item - Dashboard -->
						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/administrador/admistracion-profesionales" class="nav-link">
										<i class="fas fa-home"></i>
										<span>Admin. Profesionales</span>
								</router-link>
						</li>
						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/administrador/gestion-horarios" class="nav-link">
										<i class="fa-regular fa-calendar-days"></i>
										<span>Gestión de Horarios</span>
								</router-link>
						</li>
						<li class="nav-item nav__list" @click="activeSidebar()">
							<router-link  to="/administrador/editar/pacientes" class="nav-link">
								<i class="fas fa-user-nurse"></i>
									<span>Pacientes</span>
							</router-link>
						</li>
						<li class="nav-item nav__list" @click="activeSidebar()">
							<router-link  to="/administrador/precios-servicios" class="nav-link">
								<i class="fas fa-money-bill-wave-alt"></i>
									<span>Precios de servicios</span>
							</router-link>
						</li>
						<li class="nav-item nav__list" @click="activeSidebar()">
							<router-link  to="/administrador/paquetes" class="nav-link">
								<i class="fas fa-box"></i>
									<span>Paquetes</span>
							</router-link>
						</li>
						<li class="nav-item nav__list" @click="activeSidebar()">
							<router-link  to="/administrador/notas-credito" class="nav-link">
								<i class="fas fa-money-check-alt"></i>
									<span>Notas de Crédito</span>
							</router-link>
						</li>
						<li class="nav-item nav__list" @click="activeSidebar()">
							<router-link  to="/administrador/horas-trabajadas" class="nav-link">
								<i class="fas fa-clock"></i>
									<span>Horas Trabajadas</span>
							</router-link>
						</li>
						<li class="nav-item nav__list" @click="activeSidebar()">
							<router-link  to="/administrador/satisfaccion-clientes" class="nav-link">
								<i class="fas fa-smile"></i>
									<span>Satisfaccion de clientes</span>
							</router-link>
						</li>
						<!-- Nav Item - Dashboard -->
						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link to="/administrador/reportes/total" class="nav-link">
										<i class="fas fa-home"></i>
										<span>Reportes</span>
								</router-link>
						</li>
						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link to="/administrador/reportes-gerenciales" class="nav-link">
										<i class="fas fa-home"></i>
										<span>Reportes Gerenciales</span>
								</router-link>
						</li>
						<li class="nav-item nav__list" @click="activeSidebar()">
							<router-link  to="/administrador/usuarios-simples" class="nav-link">
									<i class="fas fa-file-alt"></i>
									<span>Usuarios</span>
							</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
							<router-link  to="/administrador/altas" class="nav-link">
									<i class="fas fa-clipboard-check"></i>
									<span>Altas de Pacientes</span>
							</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
							<router-link to="/administrador/sedes" class="nav-link">
									<i class="fas fa-building"></i>
									<span>Gestión de Sedes</span>
							</router-link>
						</li>
				</div>

				<!-- Rol del profesional -->
				<div v-if="rolUser === 'profesional'">
						<!-- Nav Item - Dashboard -->
						<li class="nav-item nav__list active" @click="activeSidebar()">
								<router-link  to="/profesional/dashboard" class="nav-link">
										<i class="fas fa-chart-line"></i>
										<span>Dashboard</span>
								</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/profesional/home" class="nav-link">
										<i class="fas fa-home"></i>
										<span>Inicio</span>
								</router-link>
						</li>

						<!-- Divider -->
						<hr class="sidebar-divider">

						<!-- Heading -->
						<div class="sidebar-heading">
								Secciones
						</div>

						<!-- Nav Item - Dashboard -->
						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/profesional/consultas" class="nav-link">
									<i class="fas fa-laptop-medical"></i>
										<span>Mis Consultas</span>
								</router-link>
						</li>

						<!-- Nav Item - Dashboard -->
						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/profesional/historias" class="nav-link">
									<i class="fas fa-laptop-medical"></i>
										<span>Historias Clínicas</span>
								</router-link>
						</li>
						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/profesional/mi-cartera" class="nav-link">
									<i class="fas fa-head-side-virus"></i>
										<span>Resumen de visita por pacientes</span>
								</router-link>
						</li>

						<!-- Nav Item - Dashboard -->
						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/profesional/recursos" class="nav-link">
									<i class="fas fa-file-medical-alt"></i>
										<span>Recursos</span>
								</router-link>
						</li>

						<!-- Nav Item - Dashboard -->
						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link :to="{name:'recetas',params:{patientId:0}}" class="nav-link">
									<i class="fas fa-file-medical"></i>
										<span>Recetas</span>
								</router-link>
						</li>

						<!-- Nav Item - Dashboard -->
						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link to="/profesional/pacientes-sos" class="nav-link">
									<i class="fa-solid fa-skull-crossbones"></i>
										<span>Pacientes S.O.S.</span>
								</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link to="/profesional/altas" class="nav-link">
									<i class="fas fa-clipboard-check"></i>
										<span>Altas de Pacientes</span>
								</router-link>
						</li>

						<!-- <li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/profesional/kurame" class="nav-link">
										<i class="fas fa-home"></i>
										<span>Kurame</span>
								</router-link>
						</li> -->

						<!-- Nav Item - Dashboard -->
						<!-- <li class="nav-item">
								<router-link  to="/profesional/examenes" class="nav-link">
										<i class="fas fa-home"></i>
										<span>Exámenes</span>
								</router-link>
						</li> -->
				</div>

				<!-- Rol del interno -->
				<div v-if="rolUser === 'interno'">
						<!-- Nav Item - Dashboard -->
						<li class="nav-item nav__list active" @click="activeSidebar()">
								<router-link  to="/interno/home" class="nav-link">
										<i class="fas fa-home"></i>
										<span>Inicio</span>
								</router-link>
						</li>

						<!-- Divider -->
						<hr class="sidebar-divider">

						<!-- Heading -->
						<div class="sidebar-heading">
								Secciones
						</div>

						<!-- Nav Item - Dashboard -->
						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/interno/recursos" class="nav-link">
										<i class="fas fa-home"></i>
										<span>Recursos</span>
								</router-link>
						</li>
						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/interno/pacientes" class="nav-link">
										<i class="fas fa-user-nurse"></i>
										<span>Triaje</span>
								</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link to="/interno/pacientes-sos" class="nav-link">
										<i class="fa-solid fa-skull-crossbones"></i>
										<span>Pacientes S.O.S.</span>
								</router-link>
						</li>

						<!-- <li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/profesional/kurame" class="nav-link">
										<i class="fas fa-home"></i>
										<span>Kurame</span>
								</router-link>
						</li> -->

						<!-- Nav Item - Dashboard -->
						<!-- <li class="nav-item">
								<router-link  to="/profesional/examenes" class="nav-link">
										<i class="fas fa-home"></i>
										<span>Exámenes</span>
								</router-link>
						</li> -->
				</div>

				<!-- Rol del recepcionista -->
				<div v-if="rolUser === 'recepcionista'">

						<!-- Nav Item - Dashboard -->
						<li class="nav-item nav__list active" @click="activeSidebar()">
								<router-link  to="/recepcionista/dashboard" class="nav-link">
										<i class="fas fa-chart-line"></i>
										<span>Dashboard</span>
								</router-link>
						</li>

						<!-- Divider -->
						<hr class="sidebar-divider">

						<!-- Heading -->
						<div class="sidebar-heading">
								Secciones
						</div>

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/recepcionista/pacientes" class="nav-link">
										<i class="fas fa-hospital-user"></i>
										<span>Pacientes</span>
								</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/recepcionista/pacientes/certificado" class="nav-link">
										<i class="fas fa-certificate"></i>
										<span>Certificados</span>
								</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/recepcionista/home" class="nav-link">
										<i class="fas fa-calendar-check"></i>
										<span>Citas</span>
								</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/recepcionista/paquetes" class="nav-link">
										<i class="fas fa-box-open"></i>
										<span>Paquetes</span>
								</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/recepcionista/pagos" class="nav-link">
										<i class="fas fa-credit-card"></i>
										<span>Caja</span>
								</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/recepcionista/notas-credito" class="nav-link">
										<i class="fas fa-money-check-alt"></i>
										<span>Notas de Crédito</span>
								</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/recepcionista/pacientes/seguimiento" class="nav-link">
										<i class="fa-solid fa-heart-circle-check"></i>
										<span>Seguimiento</span>
								</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link to="/recepcionista/limbo" class="nav-link">
									<i class="fa-solid fa-satellite-dish"></i>
										<span>Limbo</span>
								</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link to="/recepcionista/altas" class="nav-link">
									<i class="fas fa-clipboard-check"></i>
										<span>Altas de Pacientes</span>
								</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link to="/recepcionista/pacientes-sos" class="nav-link">
									<i class="fa-solid fa-skull-crossbones"></i>
										<span>Pacientes S.O.S.</span>
								</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
							<router-link  to="/recepcionista/reportes-avanzados" class="nav-link">
									<i class="fas fa-file-alt"></i>
									<span>Reportes (Antiguos)</span>
							</router-link>
						</li>

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link to="/recepcionista/reportes-estadisticos" class="nav-link">
									<i class="fas fa-chart-pie"></i>
										<span>Reportes</span>
								</router-link>
						</li>

						<!-- <li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/recepcionista/adicionales" class="nav-link">
										<i class="fas fa-hospital-user"></i>
										<span>Adicionales</span>
								</router-link>
						</li> -->
						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/recepcionista/cartera" class="nav-link">
										<i class="fas fa-hospital-user"></i>
										<span>Cartera de clientes</span>
								</router-link>
						</li>

                        <!--

						<li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/recepcionista/recordatorios" class="nav-link">
										<i class="fas fa-laptop-medical"></i>
										<span>Gestor de datos</span>
								</router-link>
						</li> -->

						<!-- <li class="nav-item nav__list" @click="activeSidebar()">
								<router-link  to="/recepcionista/continuantes" class="nav-link">
										<i class="fas fa-file-alt"></i>
										<span>Continuantes</span>
								</router-link>
						</li> -->

						<!-- <li class="nav-item nav__list" @click="activeSidebar()">
							<router-link  to="/recepcionista/reportes" class="nav-link">
									<i class="fas fa-file-alt"></i>
									<span>Reportes</span>
							</router-link>
						</li> -->

						<li class="nav-item nav__list" @click="irPanelBaja()">
							<a href="#!" class="nav-link">
									<img  :src="require('/img/sunat_blanco.png')" style="width:18px">
										<span>Facturación Electrónica</span>
							</a>
						</li>

				</div>

				<!-- Divider -->
				<hr class="sidebar-divider d-none d-md-block">

				<!-- Sidebar Toggler (Sidebar) -->
				<div class="text-center d-none d-md-inline">
					<button class="rounded-circle border-0 p-2 bg-none" @click="sidebarMenu()" style="background: transparent !important;">
						<i class="fa-solid fa-compress" style="color: white;"></i>
					</button>
				</div>

				<!-- Que la informacion del usuario aparezca debajo del toggler, no al final del sidebar. -->

				<div class="sidebar-user-info d-flex align-items-center p-3 border-top" style="border-color: rgba(255,255,255,0.1) !important;">
					<div class="user-avatar mr-3 rounded-circle d-flex align-items-center justify-content-center bg-primary text-white" style="width: 40px; height: 40px; min-width: 40px; font-weight: bold; overflow: hidden;">
						<img v-if="professional && professional.imagen && validImage" :src="professional.imagen" @error="validImage = false" class="w-100 h-100" style="object-fit: cover;">
						<span v-else>{{ userInitials }}</span>
					</div>
					<div class="user-details flex-grow-1 overflow-hidden">
						<div class="font-weight-bold text-white text-truncate" style="font-size: 0.9rem;">{{ displayName }}</div>
						<div class="small text-white-50 text-capitalize text-truncate" style="font-size: 0.8rem;">{{ rolUser }}</div>
					</div>
					<a href="#" @click.prevent="logout" class="text-white-50 ml-2 logout-btn" title="Cerrar Sesión">
						<i class="fas fa-sign-out-alt" style="font-size: 1.2rem;"></i>
					</a>
				</div>

		</ul>
</template>

<script>
export default {
		name: 'sidebar',
		props: {
				rolUser:{
						type: String
				},
				nombreUser: {
						type: String
				},
				professional: {
						type: Object,
						default: () => ({})
				}
		},
		data() {
				return {
						token: localStorage.getItem('token'),
						validImage: true
				}
		},
		computed: {
				displayName() {
						return this.nombreUser || (this.professional && this.professional.name) || '';
				},
				userInitials() {
						const name = this.displayName;
						if (!name) return 'U';
						const parts = name.split(' ');
						if (parts.length >= 2) {
								return (parts[0][0] + parts[1][0]).toUpperCase();
						}
						return name.substring(0, 2).toUpperCase();
				}
		},
		methods: {
				sidebarMenu () {
						event.target.closest("ul").classList.toggle("toggled")
				},

				activeSidebar () {
						if (!event.target.closest(".nav__list").matches(".nav__list.active")) {
								document.querySelector(".nav__list.active").classList.remove("active")
								event.target.closest(".nav__list").classList.toggle("active");
						}
				},
		irPanelBaja(){
			let sede = this.$attrs.idSede == 1 ? 'eltambo' : 'sancarlos'
			window.open('https://apps.infocatsoluciones.com/excelentemente/'+sede+'/php/accesoFast.php?token='+process.env.FACTURACION_TOKEN, '_blank');
		},
		logout(){
				window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
				this.axios.post('/api/logout')
				.then((res) => {
						localStorage.removeItem('token')
						this.$router.push('/login')
				}).catch((err) => {
					 console.log(err)
				});
		}
		}
}
</script>
<style scoped>
.sidebar .nav-item .nav-link i{ font-size: 1.2rem!important; }
.sidebar .nav-item .nav-link span {font-size: 0.9rem!important; }
.logout-btn:hover {
	color: #fff !important;
}
.sidebar.toggled .sidebar-user-info {
	padding: 1rem 0 !important;
	justify-content: center;
	flex-direction: column;
}
.sidebar.toggled .sidebar-user-info .user-details {
	display: none;
}
.sidebar.toggled .sidebar-user-info .logout-btn {
	margin-left: 0 !important;
	margin-top: 0.5rem;
}
.sidebar.toggled .sidebar-brand img {
	max-height: 30px !important;
}
</style>
