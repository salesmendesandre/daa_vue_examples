<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = computed(() => route.params.id)
</script>

<template>
  <section>
    <h2>Usuario {{ id }}</h2>
    <p>Mostrando datos del usuario con ID {{ id }}.</p>
  </section>
</template>