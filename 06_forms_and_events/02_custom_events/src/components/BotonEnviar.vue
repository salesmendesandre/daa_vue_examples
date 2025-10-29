<template>
  <button type="button" @click="emitirEnvio">
    Enviar formulario
  </button>
</template>

<script setup>
const emit = defineEmits(['enviar'])

const emitirEnvio = () => {
  emit('enviar', { timestamp: Date.now() })
}
</script>