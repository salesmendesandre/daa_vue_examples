<script setup>
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePedidosStore } from '@/stores/pedidos'

const route = useRoute()
const router = useRouter()
const pedidosStore = usePedidosStore()

onMounted(() => {
  if (route.params.id) {
    pedidosStore.seleccionarPorId(route.params.id)
  }
})

const pedido = computed(() => pedidosStore.pedidoActual)

function volverAlListado() {
  router.push({ name: 'pedidos-listado' })
}
</script>

<template>
  <section class="vista">
    <h1>Detalle de pedido</h1>

    <article v-if="pedido" class="tarjeta">
      <p><strong>ID:</strong> {{ pedido.id }}</p>
      <p><strong>Cliente:</strong> {{ pedido.cliente }}</p>
      <p><strong>Estado:</strong> {{ pedido.estado }}</p>
    </article>
    <p v-else>No encontramos el pedido solicitado.</p>

    <button type="button" @click="volverAlListado">Volver al listado</button>
  </section>
</template>

<style scoped>
.vista {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.tarjeta {
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

button {
  align-self: flex-start;
  border: none;
  background: #2563eb;
  color: #fff;
  padding: 0.45rem 0.9rem;
  border-radius: 0.35rem;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}
</style>
