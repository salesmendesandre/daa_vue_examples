import { createRouter, createWebHistory } from 'vue-router'
import PedidosListado from '@/views/PedidosListado.vue'
import PedidoDetalle from '@/views/PedidoDetalle.vue'

const routes = [
  { path: '/', redirect: '/pedidos' },
  { path: '/pedidos', name: 'pedidos-listado', component: PedidosListado },
  {
    path: '/pedidos/:id',
    name: 'pedido-detalle',
    component: PedidoDetalle,
    props: true,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
