<template>
  <dl>
    <template v-for="(valor, clave) in resumen" :key="clave">
      <dt>{{ clave }}</dt>
      <dd>{{ valor }}</dd>
    </template>
  </dl>
</template>

<script setup>
const resumen = {
  'Pedidos activos': 7,
  'Pedidos completados': 24,
  'Pendientes de envío': 3
}
</script>