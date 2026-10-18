<template>
  <section>
    <label>
      Precio base:
      <input type="number" v-model.number="precioBase" />
    </label>
    <p>IVA (21%): {{ iva }}</p>
    <p>Total con IVA: {{ totalConIva }}</p>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const precioBase = ref(100)

const iva = computed(() => precioBase.value * 0.21)

const totalConIva = computed(() => precioBase.value + iva.value)
</script>