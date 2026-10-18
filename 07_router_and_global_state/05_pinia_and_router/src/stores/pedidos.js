import { defineStore } from 'pinia'

export const usePedidosStore = defineStore('pedidos', {
  state: () => ({
    pedidos: [
      { id: 'A-100', cliente: 'Acme', estado: 'Pendiente' },
      { id: 'A-101', cliente: 'Globex', estado: 'Preparando envío' },
      { id: 'A-102', cliente: 'Initech', estado: 'Completado' },
    ],
    seleccionado: null,
  }),
  getters: {
    totalPendientes: (state) =>
      state.pedidos.filter((pedido) => pedido.estado === 'Pendiente').length,
    pedidoActual: (state) => state.pedidos.find((pedido) => pedido.id === state.seleccionado),
  },
  actions: {
    seleccionarPorId(id) {
      this.seleccionado = id
    },
  },
})
