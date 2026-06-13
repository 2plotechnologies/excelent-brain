<template>
  <div class="col mb-4">
      <div class="card border-0 shadow-sm h-100 resource-card" style="border-radius: 10px; overflow: hidden; transition: transform 0.2s ease, box-shadow 0.2s ease;">
          <div class="card-body p-4 d-flex flex-column position-relative">
              <div :class="`bg-${color}`" style="position: absolute; top: 0; left: 0; width: 4px; height: 100%;"></div>
              
              <div class="d-flex justify-content-between align-items-start mb-3">
                  <div class="icon-circle shadow-sm d-flex align-items-center justify-content-center" :class="`bg-${color}-light text-${color}`" style="width: 45px; height: 45px; border-radius: 50%;">
                      <i class="fas" :class="icon || 'fa-file-alt'"></i>
                  </div>
                  <span class="badge rounded-pill" :class="`bg-${color}-light text-${color}`" style="font-size: 0.7rem;">Cuestionario</span>
              </div>
              
              <div class="mb-4">
                  <h6 class="font-weight-bold text-dark mb-1">{{ title }}</h6>
              </div>
              
              <div class="mt-auto pt-3 border-top">
                <router-link :to="{path: `./${url}`}" class="btn w-100 font-weight-bold shadow-sm rounded-pill d-flex align-items-center justify-content-center" :class="`btn-${color}`">
                  <i class="fas fa-play-circle mr-2"></i> Empezar
                </router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    color: String,
    url: String,
    icon: String
  }
}
</script>

<style scoped>
.resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
.bg-primary-light { background-color: #e5e8f8; }
.bg-success-light { background-color: #e3fbed; }
</style>