<template>
  <div>
    <!-- Inner Tabs for Directorio -->
    <ul class="nav nav-tabs mb-4" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link font-weight-bold cursor-pointer" :class="{ active: innerTab === 'profesionales' }" @click.prevent="innerTab = 'profesionales'">
          Profesionales
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link font-weight-bold cursor-pointer" :class="{ active: innerTab === 'empleados' }" @click.prevent="innerTab = 'empleados'">
          Empleados (Usuarios Logísticos)
        </a>
      </li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane fade" :class="{ 'show active': innerTab === 'profesionales' }">
        <!-- Reusing existing professional component -->
        <home-profesional></home-profesional>
      </div>
      <div class="tab-pane fade" :class="{ 'show active': innerTab === 'empleados' }">
        <!-- Reusing existing simple users component -->
        <home-usuarios></home-usuarios>
      </div>
    </div>
  </div>
</template>

<script>
import HomeProfesional from '../../../../recepcionista/components/profesionales/HomeProfesional.vue';
import HomeUsuarios from '../../../../usuarios/HomeUsuarios.vue';

export default {
  components: {
    HomeProfesional,
    HomeUsuarios
  },
  data() {
    return {
      innerTab: 'profesionales'
    };
  }
};
</script>

<style scoped>
.nav-tabs .nav-link {
  color: #495057;
  border: none;
  border-bottom: 3px solid transparent;
}
.nav-tabs .nav-link.active {
  color: #4e73df;
  border-color: transparent transparent #4e73df;
  background-color: transparent;
}
.nav-tabs .nav-link:hover {
  border-color: transparent transparent #e3e6f0;
}
</style>
