<template>
  <button type="button" @click="handleClick">
    Has pulsado {{ clicks }} vez/veces
  </button>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['increment'])

const clicks = ref(0)

const handleClick = () => {
  clicks.value++
  emit('increment', clicks.value)
}
</script>