# Pinia + Router: tablero de pedidos

Proyecto final Router + Pinia para el capítulo [Ruteo y Estado Global](https://salesmendesandre.github.io/daa_vue/main/vue/p3c7_ruteo_y_estado_global.html). Integra un store de pedidos con rutas dinámicas para mostrar cómo el estado global permanece disponible al navegar.

## Qué encontrarás
- `src/stores/pedidos.js` con datos simulados, getters (`totalPendientes`, `pedidoActual`) y una acción `seleccionarPorId`.
- `src/router/index.js` define `/pedidos` y `/pedidos/:id`, además de un redireccionamiento inicial.
- `PedidosListado.vue` y `PedidoDetalle.vue` comparten el store: el listado navega programáticamente y el detalle lee el pedido seleccionado desde Pinia.
- `App.vue` provee un layout sencillo con navegación superior persistente.

## Cómo correrlo
```
npm install
npm run dev
```

Toma este demo como base para implementar las operaciones CRUD completas descritas en el capítulo o para integrar llamadas reales a una API.
