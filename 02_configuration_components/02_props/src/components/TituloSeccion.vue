<template>
  <header class="title">
    <h2>{{ texto }}</h2>
    <p v-if="descripcion">{{ descripcion }}</p>
  </header>
</template>

<script setup>
defineProps({
  texto: {
    type: String,
    required: true
  },
  descripcion: String
})
</script>