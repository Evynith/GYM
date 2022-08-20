<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <a href="#inscripcion">Incríbete</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#novedades">Novedades</a>
        <a href="#galeria">Galería</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>Desarrollado por </footer>
</template>

<style scoped>

</style>
