<script setup>
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()

const items = [
  {
    label: 'Inicio',
    icon: 'pi pi-home',
    command: () => router.push('/'),
  },
  {
    label: 'Panel',
    icon: 'pi pi-info-circle',
    command: () => router.push('/panel'),
  },
]
</script>

<template>
  <div class="p-4 md:p-5">
    <div class="layout">
      <Menubar :model="items" class="mb-4" />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.layout {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
