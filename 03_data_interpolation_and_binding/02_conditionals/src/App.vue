<script setup>
import EstadoUsuario from './components/EstadoUsuario.vue';
import DetalleProducto from './components/DetalleProducto.vue';
import ListaTareas from './components/ListaTareas.vue';
</script>

<template>
  <span class="component"> 
    <EstadoUsuario></EstadoUsuario>
  </span>

  <span class="component"> 
    <DetalleProducto></DetalleProducto>
  </span>
  <span class="component"> 
    <ListaTareas></ListaTareas>
  </span>
</template>

<style scoped>
.component {
  display: block;
  margin-bottom: 2rem;
  border: 1px solid #e5e7eb;
  padding: 1rem;
}
</style>
