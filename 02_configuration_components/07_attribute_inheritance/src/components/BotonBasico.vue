<template>
  <button class="boton-basico" v-bind="$attrs">
    <slot>Acción</slot>
  </button>
</template>

<script setup>
defineOptions({
  inheritAttrs: true
})
</script>

<style scoped>
.boton-basico {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  background-color: #22c55e;
  color: #0f172a;
  font-weight: 600;
}
</style>