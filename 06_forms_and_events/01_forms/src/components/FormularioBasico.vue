<template>
  <section>
    <label>
      Correo:
      <input type="email" v-model="email" />
    </label>

    <label>
      <input type="checkbox" v-model="acepto" />
      Acepto los términos
    </label>

    <label>
      Opción:
      <select v-model="opcion">
        <option value="A">A</option>
        <option value="B">B</option>
      </select>
    </label>

    <p>
      Resumen: {{ email }} — Aceptado: {{ acepto ? 'Sí' : 'No' }} — Opción: {{ opcion }}
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const acepto = ref(false)
const opcion = ref('A')
</script>