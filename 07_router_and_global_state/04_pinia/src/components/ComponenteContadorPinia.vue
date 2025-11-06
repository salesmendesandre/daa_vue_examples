<script setup>
import { storeToRefs } from 'pinia'
import { useContadorStore } from '@/stores/contador'

const contador = useContadorStore()
const { valor, doble } = storeToRefs(contador)

function sumar() {
  contador.incrementar()
}
</script>

<template>
  <section>
    <p>Valor actual: {{ valor }}</p>
    <p>Doble: {{ doble }}</p>
    <button @click="sumar">Incrementar</button>
  </section>
</template>