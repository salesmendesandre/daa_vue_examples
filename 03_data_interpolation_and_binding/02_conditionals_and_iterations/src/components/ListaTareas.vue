<template>
  <section>
    <h2>Lista de tareas</h2>
    <ul>
      <li v-for="tarea in tareas" :key="tarea.id">
        <span :class="{ completada: tarea.completada }">
          {{ tarea.titulo }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const tareas = reactive([
  { id: 1, titulo: 'Preparar presentación', completada: true },
  { id: 2, titulo: 'Revisar pull requests', completada: false },
  { id: 3, titulo: 'Planificar la demo', completada: false }
])
</script>

<style scoped>
.completada {
  text-decoration: line-through;
  color: #94a3b8;
}
</style>