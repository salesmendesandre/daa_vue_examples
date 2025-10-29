<template>
  <form @submit.prevent="enviarFormulario">
    <label>
      Nombre:
      <input v-model.trim="formulario.nombre" required />
    </label>

    <label>
      Email:
      <input type="email" v-model.trim="formulario.email" required />
    </label>

    <label>
      Mensaje:
      <textarea v-model="formulario.mensaje" rows="4" required></textarea>
    </label>

    <button type="submit" :disabled="!esValido">
      Enviar
    </button>

    <p v-if="enviado" class="confirmacion">
      ¡Mensaje enviado correctamente!
    </p>
  </form>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const formulario = reactive({
  nombre: '',
  email: '',
  mensaje: ''
})

const enviado = ref(false)

const esValido = computed(() => {
  return (
    formulario.nombre.trim() !== '' &&
    formulario.email.trim() !== '' &&
    formulario.mensaje.trim().length >= 10
  )
})

const enviarFormulario = () => {
  if (!esValido.value) return
  console.log('Datos enviados', { ...formulario })
  enviado.value = true
  setTimeout(() => {
    enviado.value = false
  }, 3000)
}
</script>

<style scoped>
form {
  display: grid;
  gap: 1rem;
  max-width: 32rem;
}

.confirmacion {
  color: #059669;
  font-weight: 600;
}
</style>