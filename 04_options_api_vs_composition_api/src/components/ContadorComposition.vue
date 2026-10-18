<template>
  <section>
    <h2>Contador (Composition API)</h2>
    <p>Valor actual: {{ count }}</p>
    <p>Doble: {{ doubled }}</p>
    <button @click="increment">Sumar 1</button>
    <button @click="incrementBy(5)">Sumar 5</button>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const count = ref(0)

const doubled = computed(() => count.value * 2)

const increment = () => {
  count.value++
}

const incrementBy = (value) => {
  count.value += value
}
</script>