<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <img alt="Logo" src="@/assets/logo.png" class="absolute top-0 left-0  pl-14 pt-4 hidden" width="100" height="100" />
      <nav class="flex flex-row justify-center w-full">
        <a class="p-4" href="#inscripcion">Incríbete</a>
        <a class="p-4" href="#nosotros">Nosotros</a>
        <a class="p-4" href="#novedades">Novedades</a>
        <a class="p-4" href="#galeria">Galería</a>
        <a class="p-4" href="#contacto">Contacto</a>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>Desarrollado por </footer>
</template>

<style scoped>

</style>
