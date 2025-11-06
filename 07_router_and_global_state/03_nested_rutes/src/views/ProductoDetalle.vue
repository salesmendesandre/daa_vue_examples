<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productoId = computed(() => route.params.id)
</script>

<template>
  <section>
    <h1>Detalle de producto</h1>
    <p>Vista sencilla para la ruta `productos/:id`.</p>

    <p>ID recibido: <strong>{{ productoId }}</strong></p>

    <RouterLink :to="{ name: 'producto-editar', params: { id: productoId } }">
      Ir a editar
    </RouterLink>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
}

a {
  color: #2563eb;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
