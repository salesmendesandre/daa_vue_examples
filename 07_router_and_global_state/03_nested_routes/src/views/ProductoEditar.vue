<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productoId = computed(() => route.params.id)
</script>

<template>
  <section>
    <h1>Editar producto</h1>
    <p>Formulario mínimo para la ruta `productos/:id/editar`.</p>
    <p>ID en edición: <strong>{{ productoId }}</strong></p>

    <form>
      <label>
        Nombre
        <input type="text" placeholder="Sin completar" />
      </label>

      <label>
        Categoría
        <input type="text" placeholder="Sin completar" />
      </label>

      <label>
        Precio
        <input type="number" min="0" placeholder="0" />
      </label>

      <label>
        Stock
        <input type="number" min="0" placeholder="0" />
      </label>

      <div>
        <button type="button">Guardar cambios</button>
        <RouterLink :to="{ name: 'producto-detalle', params: { id: productoId } }">
          Ver detalle
        </RouterLink>
      </div>
    </form>
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

form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

input {
  border: 1px solid #cbd5f5;
  border-radius: 0.4rem;
  padding: 0.4rem 0.6rem;
}

button {
  padding: 0.45rem 0.9rem;
  border-radius: 0.4rem;
  border: 1px solid #2563eb;
  background-color: #2563eb;
  color: #fff;
  cursor: pointer;
}

a {
  color: #2563eb;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
