<script setup>
import { ref } from 'vue'
import Greeting from './components/Greeting.vue'

const username = ref('Estudiante Vue')

const handleGreet = () => {
  console.log(`Saludo recibido de ${username.value}`)
}
</script>

<template>
  <main>
    <h1>Bienvenido a Vue 3</h1>
    <Greeting :name="username" @greet="handleGreet" />
  </main>
</template>