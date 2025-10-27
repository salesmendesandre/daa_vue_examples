<template>
  <article class="card">
    <header class="card__header">
      <h2>{{ titulo }}</h2>
    </header>
    <p class="card__body">
      {{ contenido }}
    </p>
    <footer class="card__footer">
      <slot>Contenido adicional opcional</slot>
    </footer>
  </article>
</template>

<script setup>
defineProps({
  titulo: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.card {
  border: 1px solid #cbd5f5;
  border-radius: 12px;
  padding: 1rem;
  background-color: #f5f9ff;
}

.card__header {
  margin-bottom: 0.5rem;
}
</style>