<template>
  <label class="campo-texto">
    <span>{{ label }}</span>
    <input
      :value="modelValue"
      @input="onInput"
      type="text"
    />
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.campo-texto {
  display: grid;
  gap: 0.25rem;
}
</style>