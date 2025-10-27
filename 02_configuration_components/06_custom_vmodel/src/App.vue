<template>
  <CampoTexto v-model="mensaje" label="Mensaje" />
  <p>Texto introducido: {{ mensaje }}</p>
</template>

<script setup>
import { ref } from 'vue'
import CampoTexto from './components/CampoTexto.vue'

const mensaje = ref('Hola Vue')
</script>