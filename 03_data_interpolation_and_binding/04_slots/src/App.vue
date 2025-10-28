<script setup>
import TarjetaBase from './components/TarjetaBase.vue'
import TarjetaSecciones from './components/TarjetaSecciones.vue'

const notificar = () => {
  alert('Compartiendo resumen...')
}
</script>

<template>
  <TarjetaBase>
    <h2>Noticias</h2>
    <p>Vue 3 continúa evolucionando con mejoras en reactividad y DX.</p>
  </TarjetaBase>


  <TarjetaSecciones>
    <template #titulo>
      <h3>Resumen semanal</h3>
    </template>
    <p>Completaste 12 tareas y cerraste 3 incidencias.</p>
    <template #acciones>
      <button @click="notificar">Compartir</button>
    </template>
  </TarjetaSecciones>

</template>
