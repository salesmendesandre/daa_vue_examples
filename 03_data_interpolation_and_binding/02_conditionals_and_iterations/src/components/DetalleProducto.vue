<template>
  <article>
    <h2>{{ producto.nombre }}</h2>
    <button @click="mostrarDetalles = !mostrarDetalles">
      {{ mostrarDetalles ? 'Ocultar' : 'Mostrar' }} detalles
    </button>
    <p v-show="mostrarDetalles">
      {{ producto.descripcion }}
    </p>
  </article>
</template>

<script setup>
import { reactive, ref } from 'vue'

const producto = reactive({
  nombre: 'Teclado Mecánico',
  descripcion: 'Switches silenciosos, retroiluminación RGB y reposamuñecas.'
})

const mostrarDetalles = ref(false)
</script>