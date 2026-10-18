<script setup>
import SaludoInterpolacion from './components/SaludoInterpolacion.vue';
import TextosDirectivas from './components/TextosDirectivas.vue';
import EnlaceDinamico from './components/EnlaceDinamico.vue';
import EstadoTarjeta from './components/EstadoTarjeta.vue';
</script>

<template>
  <span class="component"> 
    <SaludoInterpolacion></SaludoInterpolacion>
  </span>

  <span class="component"> 
    <TextosDirectivas></TextosDirectivas>
  </span>
  <span class="component"> 
    <EnlaceDinamico></EnlaceDinamico>
  </span>
  <span class="component"> 
    <EstadoTarjeta></EstadoTarjeta>
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
