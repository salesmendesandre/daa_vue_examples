<script setup>
import ContadorBasico from './components/ContadorBasico.vue';
import FormularioLogin from './components/FormularioLogin.vue';
import ContadorFlexible from './components/ContadorFlexible.vue';
</script>

<template>
  <span class="component"> 
    <ContadorBasico></ContadorBasico>
  </span>

  <span class="component"> 
    <ContadorFlexible></ContadorFlexible>
  </span>
  <span class="component"> 
    <FormularioLogin></FormularioLogin>
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
