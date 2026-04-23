<template>
     <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <!-- Sidebar Toggle (Topbar) -->
        <button id="sidebarToggleTop" @click="navbarMenu()" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
        </button>

        <!-- Module Title -->
        <div class="d-none d-sm-inline-block ml-md-3 my-2 my-md-0 mw-100">
            <h1 class="h4 mb-0 text-gray-800 font-weight-bold" style="font-size: 1.25rem;">{{ pageInfo.title }}</h1>
            <span class="text-muted small" style="font-size: 0.8rem;">{{ pageInfo.subtitle }}</span>
        </div>

        <ul class="navbar-nav ml-auto">
            <!-- Nav Item - Alerts -->
            <li class="nav-item dropdown no-arrow mx-1">
                <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-bell fa-fw" style="color: #8392ab; font-size: 1.1rem;"></i>
                    <span class="badge badge-danger badge-counter" style="right: 0.25rem; top: 1.2rem; transform: scale(0.7);"></span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    computed: {
        pageInfo() {
            const routeName = this.$route.name;
            
            const titles = {
                // Recepcionista
                'dashboardRecepcionista': { title: 'Dashboard', subtitle: 'Resumen principal' },
                'pacientesRecepcionista': { title: 'Gestión de Pacientes', subtitle: 'Módulo de pacientes' },
                'homeRecepcionista': { title: 'Gestión de Citas', subtitle: 'Módulo de citas' },
                'pagosRecepcionista': { title: 'Gestión de Pagos', subtitle: 'Módulo financiero' },
                'carteraRecepcionista': { title: 'Cartera de Clientes', subtitle: 'Módulo de adicionales' },
                'reportesRecepcionista': { title: 'Reportes', subtitle: 'Módulo de reportes' },
                'reportesRecepcionistaAvanzados': { title: 'Reportes Avanzados', subtitle: 'Módulo de reportes' },
                'seguimientoRecepcionista': { title: 'Seguimiento', subtitle: 'Módulo de pacientes' },
                'recordatorios': { title: 'Gestor de Datos', subtitle: 'Módulo de comunicaciones' },
                'pacientes-sos': { title: 'Pacientes S.O.S.', subtitle: 'Módulo de seguimiento' },
                'limbo': { title: 'Limbo', subtitle: 'Pacientes en espera' },
                'paquetesRecepcionista': { title: 'Paquetes', subtitle: 'Gestión de paquetes' },
                
                // Profesional
                'dashboardProfesional': { title: 'Dashboard Profesional', subtitle: 'Resumen principal' },
                'consultasProfesional': { title: 'Mis Consultas', subtitle: 'Módulo de atención' },
                'historiasProfesional': { title: 'Historias Clínicas', subtitle: 'Módulo de registros' },
                'miCarteraProfesional': { title: 'Resumen de Visitas', subtitle: 'Módulo de pacientes' },
                'recursosProfesional': { title: 'Recursos', subtitle: 'Módulo de apoyo' },
                'recetas': { title: 'Recetas', subtitle: 'Módulo de prescripciones' },
                
                // Admin
                'HomeAdministrador': { title: 'Panel de Administración', subtitle: 'Resumen general' },
                'editarPacientesAdmin': { title: 'Pacientes (Admin)', subtitle: 'Módulo de administración' },
                'preciosServicios': { title: 'Precios de Servicios', subtitle: 'Módulo de administración' },
                'paquetes': { title: 'Paquetes', subtitle: 'Módulo de administración' },
                'usuariosSimples': { title: 'Usuarios', subtitle: 'Módulo de administración' },
            };

            if (titles[routeName]) return titles[routeName];

            // Fallback
            let pathTitle = this.$route.path.split('/').pop();
            if (pathTitle && pathTitle.length > 0) {
                pathTitle = pathTitle.replace(/-/g, ' ');
                pathTitle = pathTitle.charAt(0).toUpperCase() + pathTitle.slice(1);
                return { title: pathTitle, subtitle: 'Módulo de ' + pathTitle.toLowerCase() };
            }
            
            return { title: 'Inicio', subtitle: 'Panel principal' };
        }
    },
    methods: {
        navbarMenu() {
            document.getElementById("accordionSidebar").classList.toggle("toggled")
        }
    }
}
</script>

<style scoped>
.topbar {
    height: 4.375rem;
}
.badge-counter {
    position: absolute;
    transform: scale(.7);
    transform-origin: top right;
    right: .25rem;
    margin-top: -.25rem;
    padding: .25em .4em;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    border: 2px solid white;
}
</style>