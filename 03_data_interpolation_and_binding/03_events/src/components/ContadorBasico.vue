<template>
  <section>
    <p>Conteo actual: {{ contador }}</p>
    <button @click="incrementar">Incrementar</button>
    <button @click="resetear">Reset</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const contador = ref(0)

const incrementar = () => {
  contador.value++
}

const resetear = () => {
  contador.value = 0
}
</script>

<style scoped>
button {
  margin-right: 0.5rem;
}
</style>