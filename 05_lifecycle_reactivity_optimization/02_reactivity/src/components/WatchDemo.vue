<template>
  <section>
    <label>
      Valor:
      <input type="number" v-model.number="valor" />
    </label>
    <p>Valor actual: {{ valor }}</p>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'

const valor = ref(0)

watch(valor, (nuevo, anterior) => {
  console.log(`El valor cambió de ${anterior} a ${nuevo}`)
})
</script>