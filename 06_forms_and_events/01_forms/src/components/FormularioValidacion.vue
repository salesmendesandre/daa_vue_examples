<template>
  <form @submit.prevent="enviar">
    <label>
      Usuario:
      <input v-model.trim="usuario" />
    </label>
    <p v-if="errores.usuario" class="error">{{ errores.usuario }}</p>

    <label>
      Contraseña:
      <input type="password" v-model="password" />
    </label>
    <p v-if="errores.password" class="error">{{ errores.password }}</p>

    <button type="submit">Acceder</button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const usuario = ref('')
const password = ref('')
const errores = reactive({ usuario: '', password: '' })

const validar = () => {
  errores.usuario = usuario.value ? '' : 'El usuario es obligatorio.'
  errores.password = password.value.length >= 6
    ? ''
    : 'La contraseña debe tener al menos 6 caracteres.'
  return !errores.usuario && !errores.password
}

const enviar = () => {
  if (!validar()) return
  console.log('Formulario válido', { usuario: usuario.value })
}
</script>

<style scoped>
.error {
  color: #dc2626;
  font-size: 0.9rem;
}
</style>