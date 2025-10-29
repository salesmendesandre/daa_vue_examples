<script setup>
import ContadorOptions from './components/ContadorOptions.vue'
import ContadorComposition from './components/ContadorComposition.vue'
</script>

<template>
  <span class="component"> 
  <ContadorOptions />
  </span>
  <span class="component"> 
  <ContadorComposition />
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
