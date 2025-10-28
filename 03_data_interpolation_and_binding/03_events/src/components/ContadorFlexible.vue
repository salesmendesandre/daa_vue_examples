<template>
  <section>
    <p>Valor: {{ valor }}</p>
    <button @click="incrementar(1)">+1</button>
    <button @click="incrementar(5)">+5</button>
    <button @click="decrementar(2)">-2</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const valor = ref(10)

const incrementar = (cantidad) => {
  valor.value += cantidad
}

const decrementar = (cantidad) => {
  valor.value -= cantidad
}
</script>

<style scoped>
button {
  margin-right: 0.5rem;
}
</style>