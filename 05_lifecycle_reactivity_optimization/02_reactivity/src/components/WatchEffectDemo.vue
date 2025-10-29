<template>
  <section>
    <p>Total clics: {{ clicks }}</p>
    <button @click="sumar">Sumar</button>
  </section>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const clicks = ref(0)

const sumar = () => {
  clicks.value++
}

watchEffect(() => {
  console.log(`watchEffect -> clicks vale ${clicks.value}`)
})
</script>