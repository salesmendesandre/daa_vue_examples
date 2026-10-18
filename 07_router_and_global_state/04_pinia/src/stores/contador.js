import { defineStore } from 'pinia'

export const useContadorStore = defineStore('contador', {
  state: () => ({
    valor: 0,
  }),
  getters: {
    doble: (state) => state.valor * 2,
  },
  actions: {
    incrementar() {
      this.valor++
    },
  },
})