<template>
  <main v-cloak>
    <h1>{{ titulo }}</h1>
    <p>{{ descripcion }}</p>
  </main>
</template>

<script setup>
const titulo = 'Panel principal'
const descripcion = 'Este contenido aparece sin parpadeos gracias a v-cloak.'
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
