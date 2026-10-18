<script setup>
import ReactividadBasica from './components/ReactividadBasica.vue'
import WatchDemo from './components/WatchDemo.vue'
import WatchEffectDemo from './components/WatchEffectDemo.vue'
import ComputedDemo from './components/ComputedDemo.vue'
</script>

<template>
  <div class="component">
    <h2>Reactividad Básica</h2>
    <ReactividadBasica />
  </div>
  <div class="component">
    <h2>Watch Demo</h2>
    <WatchDemo />
    Nota: revisar la terminal para ver los logs generados por el watcher.
  </div>
  <div class="component">
    <h2>Watch Effect Demo</h2>
    <WatchEffectDemo />
    Nota: revisar la terminal para ver los logs generados por el watchEffect.
  </div>
  <div class="component">
    <h2>Computed Demo</h2>
    <ComputedDemo />
  </div>
</template>

<style scoped>
.component {
  display: block;
  margin-bottom: 2rem;
  border: 1px solid #e5e7eb;
  padding: 1rem;
}
</style>
