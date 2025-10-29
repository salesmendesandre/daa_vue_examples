<template>
  <section>
    <label>
      Nombre (trim, lazy):
      <input v-model.lazy.trim="nombre" />
    </label>

    <label>
      Edad (number):
      <input type="number" v-model.number="edad" />
    </label>

    <p>
      Nombre almacenado: «{{ nombre }}»
      <br />
      Edad numérica: {{ typeof edad }} → {{ edad }}
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const nombre = ref('')
const edad = ref(18)
</script>