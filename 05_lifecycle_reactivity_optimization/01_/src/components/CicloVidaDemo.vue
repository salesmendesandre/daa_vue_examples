<template>
  <section>
    <h2>Ciclo de vida</h2>
    <p>Clicks: {{ clicks }}</p>
    <button @click="incrementar">Incrementar</button>
  </section>
</template>

<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref } from 'vue'

const clicks = ref(0)

const incrementar = () => {
  clicks.value++
}

onBeforeMount(() => {
  console.log('Antes de montar: preparar datos iniciales')
})

onMounted(() => {
  console.log('Montado: ya se puede acceder al DOM')
})

onBeforeUpdate(() => {
  console.log(`Antes de actualizar: clicks actuales ${clicks.value}`)
})

onUpdated(() => {
  console.log(`Actualizado: nuevo valor de clicks ${clicks.value}`)
})

onBeforeUnmount(() => {
  console.log('Antes de desmontar: liberar recursos')
})

onUnmounted(() => {
  console.log('Desmontado: componente eliminado')
})
</script>