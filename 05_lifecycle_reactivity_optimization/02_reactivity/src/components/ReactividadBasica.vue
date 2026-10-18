<template>
  <section>
    <p>Usuario: {{ usuario.nombre }} ({{ usuario.rol }})</p>
    <button @click="promocionar">Promocionar</button>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const usuario = reactive({
  nombre: 'Lucía',
  rol: 'editora'
})

const promocionar = () => {
  usuario.rol = usuario.rol === 'editora' ? 'admin' : 'editora'
}
</script>