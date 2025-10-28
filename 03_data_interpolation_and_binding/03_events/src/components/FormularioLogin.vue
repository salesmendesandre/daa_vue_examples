<template>
  <form class="login" @submit.prevent="intentarLogin">
    <label for="email">Correo</label>
    <input
      id="email"
      type="email"
      placeholder="tucorreo@ejemplo.com"
      v-model="credenciales.email"
      @keyup="limpiarMensaje"
    />

    <label for="password">Contraseña</label>
    <input
      id="password"
      type="password"
      placeholder="Ingresa tu clave"
      v-model="credenciales.password"
      @keyup="limpiarMensaje"
      @keyup.enter="intentarLogin"
    />

    <button type="submit">Acceder</button>

    <p v-if="mensaje" class="login__mensaje">{{ mensaje }}</p>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const credenciales = reactive({
  email: '',
  password: ''
})

const mensaje = ref('')

const intentarLogin = () => {
  if (!credenciales.email || !credenciales.password) {
    mensaje.value = 'Completa ambos campos antes de continuar.'
    return
  }

  mensaje.value = `Iniciando sesión como ${credenciales.email}`
}

const limpiarMensaje = () => {
  mensaje.value = ''
}
</script>

<style scoped>
button {
  margin-right: 0.5rem;
}
</style>