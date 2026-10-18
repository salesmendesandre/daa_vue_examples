<template>
  <section>
    <h1>Hola, {{ nombre }}</h1>
    <p>Hoy es {{ diaSemana }}</p>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const nombre = ref('Estudiante Vue')
const fecha = ref(new Date())

const diaSemana = computed(() =>
  fecha.value.toLocaleDateString('es-ES', { weekday: 'long' })
)
</script>