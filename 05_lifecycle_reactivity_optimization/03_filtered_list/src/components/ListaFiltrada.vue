<template>
  <section>
    <label>
      Filtrar:
      <input v-model="filtro" placeholder="Buscar producto" />
    </label>
    <ul>
      <li v-for="item in productosFiltrados" :key="item.id">
        {{ item.nombre }} — {{ item.precio }} €
      </li>
    </ul>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const filtro = ref('')

const productos = [
  { id: 1, nombre: 'Monitor 24"', precio: 180 },
  { id: 2, nombre: 'Teclado mecánico', precio: 90 },
  { id: 3, nombre: 'Ratón ergonómico', precio: 45 }
]

const productosFiltrados = computed(() => {
  const termino = filtro.value.trim().toLowerCase()
  if (!termino) {
    return productos
  }
  return productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(termino)
  )
})
</script>