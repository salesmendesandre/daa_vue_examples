<template>
  <main>
    <BotonEnviar @enviar="registrarEnvio" />
    <p v-if="ultimoEnvio">Último envío: {{ ultimoEnvio }}</p>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import BotonEnviar from './components/BotonEnviar.vue'

const ultimoEnvio = ref('')

const registrarEnvio = (payload) => {
  ultimoEnvio.value = new Date(payload.timestamp).toLocaleTimeString()
}
</script>