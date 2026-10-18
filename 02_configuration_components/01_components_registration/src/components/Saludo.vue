<template>
  <p>Hola, {{ nombre }} 👋</p>
</template>

<script setup>
defineProps({
  nombre: {
    type: String,
    required: true
  }
})
</script>