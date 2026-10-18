<script setup>
import { ref } from 'vue';
import CicloVidaDemo from './components/CicloVidaDemo.vue'

let visible = ref(true);

</script>

<template>
  <button @click="visible = !visible">Cambiar estado de montaje del componente</button>
  <CicloVidaDemo v-if="visible" />
</template>

<style scoped>

</style>
