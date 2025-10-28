<template>
  <section>
    <p v-if="isLoggedIn">Bienvenido, {{ nombre }}</p>
    <p v-else>Identifícate para continuar.</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(true)
const nombre = ref('María')
</script>