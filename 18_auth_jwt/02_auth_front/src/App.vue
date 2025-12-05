<script setup>
import { computed } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const items = computed(() => [
  {
    label: 'Inicio',
    icon: 'pi pi-home',
    command: () => router.push('/'),
  },
  ...(userStore.isAuthenticated
    ? [
        {
          label: 'Panel',
          icon: 'pi pi-user',
          command: () => router.push('/panel'),
        },
        {
          label: 'Cerrar sesión',
          icon: 'pi pi-sign-out',
          command: () => {
            userStore.clearSession()
            router.push('/login')
          },
        },
      ]
    : [
        {
          label: 'Login',
          icon: 'pi pi-sign-in',
          command: () => router.push('/login'),
        },
        {
          label: 'Registro',
          icon: 'pi pi-user-plus',
          command: () => router.push('/register'),
        },
      ]),
])
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
