<script setup>
const productos = [
  { id: 101, nombre: 'Auriculares Pro' },
  { id: 102, nombre: 'Monitor UltraWide' },
  { id: 103, nombre: 'Teclado Mecánico' },
]
</script>

<template>
  <section>
    <h1>Catálogo simple</h1>
    <p>Esta vista representa el listado principal desde donde inicia el flujo CRUD.</p>

    <ul>
      <li v-for="producto in productos" :key="producto.id">
        <strong>{{ producto.nombre }}</strong>
        <span>(ID {{ producto.id }})</span> ·
        <RouterLink :to="{ name: 'producto-detalle', params: { id: producto.id } }">Detalle</RouterLink>
        |
        <RouterLink :to="{ name: 'producto-editar', params: { id: producto.id } }">Editar</RouterLink>
      </li>
    </ul>

    <RouterLink :to="{ name: 'producto-crear' }">Crear un producto</RouterLink>
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

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

li {
  padding: 0.5rem 0.75rem;
  border: 1px solid #cbd5f5;
  border-radius: 0.5rem;
  background-color: #f8fafc;
}

a {
  color: #2563eb;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
