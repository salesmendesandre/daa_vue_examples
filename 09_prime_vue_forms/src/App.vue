<script setup>
  import ProductForm from './components/ProductForm.vue';
</script>

<template>
  <div class="p-4 md:p-5">
    <div class="layout">
      <ProductForm />
    </div>
  </div>
</template>

<style scoped>
.layout {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
