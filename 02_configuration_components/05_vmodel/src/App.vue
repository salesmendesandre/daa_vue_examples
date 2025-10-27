<template>
  <section>
    <label>
      Nombre:
      <input v-model="nombre" type="text" />
    </label>
    <p>Hola, {{ nombre || 'anónimo' }}</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const nombre = ref('')
</script>