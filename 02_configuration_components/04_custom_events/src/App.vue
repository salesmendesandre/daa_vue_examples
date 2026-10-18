<template>
  <ContadorBoton @increment="onIncrement" />
  <p>Total recibido: {{ total }}</p>
</template>

<script setup>
import { ref } from 'vue'
import ContadorBoton from './components/ContadorBoton.vue'

const total = ref(0)

const onIncrement = (valor) => {
  total.value = valor
}
</script>