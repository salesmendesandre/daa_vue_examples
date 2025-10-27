<template>
  <button @click="incrementar">Pulsar</button>
  <form @submit.prevent="enviar">
    <input @focus="mostrarAyuda" placeholder="Nombre" />
  </form>
</template>

<script setup>
const incrementar = () => {
  console.log('Click recibido')
}

const enviar = () => {
  console.log('Formulario enviado')
}

const mostrarAyuda = () => {
  console.log('Entrada enfocada')
}
</script>