<script setup>
import { router } from './router';

function irAUsuarioID(id){
  router.push({name:'usuario-detalle', params:{id:id}})
 }
</script>

<template>
  <button @click="irAUsuarioID(22222)">Ir a usuario id: 22222</button>
  <button @click="irAUsuarioID(33333)">Ir a usuario id: 33333</button>
  <button @click="irAUsuarioID(44444)">Ir a usuario id: 44444</button>
  <RouterView></RouterView>
</template>

<style scoped></style>
