<script setup>
import ComponenteContadorPinia from '@/components/ComponenteContadorPinia.vue'
</script>

<template>
  <div >
    <h1> Componente 1</h1>
  
    <div class="component"><ComponenteContadorPinia /></div>
  </div>
<div>
    <h1> Componente 2</h1>
    <div class="component"><ComponenteContadorPinia /></div>
  </div>
<p>Los componentes comparten el mismo estado global.</p>
</template>

<style scoped>
.component {
  display: block;
  margin-bottom: 2rem;
  border: 1px solid #e5e7eb;
  padding: 1rem;
}
</style>
