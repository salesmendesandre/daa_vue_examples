<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePedidosStore } from '@/stores/pedidos'

const router = useRouter()
const pedidosStore = usePedidosStore()
const { pedidos, totalPendientes } = storeToRefs(pedidosStore)

function irAlDetalle(id) {
  pedidosStore.seleccionarPorId(id)
  router.push({ name: 'pedido-detalle', params: { id } })
}
</script>

<template>
  <section class="vista">
    <header>
      <h1>Pedidos</h1>
      <p>Total pendientes: {{ totalPendientes }}</p>
    </header>

    <ul class="lista">
      <li v-for="pedido in pedidos" :key="pedido.id">
        <span>
          <strong>{{ pedido.id }}</strong> · {{ pedido.cliente }} ({{ pedido.estado }})
        </span>
        <button type="button" @click="irAlDetalle(pedido.id)">Ver detalle</button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.vista {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.lista {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.lista li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.75rem;
}

button {
  border: none;
  background: #2563eb;
  color: white;
  padding: 0.4rem 0.9rem;
  border-radius: 0.35rem;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}
</style>
