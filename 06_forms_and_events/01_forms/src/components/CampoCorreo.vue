<template>
  <section>
    <label>
      Correo electrónico:
      <input type="email" v-model="email" placeholder="alguien@ejemplo.com" />
    </label>
    <p>Valor actual: {{ email }}</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
</script>