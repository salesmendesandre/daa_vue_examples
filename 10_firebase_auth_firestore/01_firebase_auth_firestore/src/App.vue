<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { signOut } from '@/services/authService'

const router = useRouter()
const userStore = useUserStore()

const items = computed(() => {
  const baseItems = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      command: () => router.push('/'),
    },
    {
      label: 'Acerca',
      icon: 'pi pi-info-circle',
      command: () => router.push('/about'),
    },
  ]

  if (userStore.isAuthenticated) {
    baseItems.push(
      {
        label: 'Panel',
        icon: 'pi pi-user',
        command: () => router.push('/panel'),
      },
      {
        label: 'Salir',
        icon: 'pi pi-sign-out',
        command: async () => {
          await signOut()
          router.push('/')
        },
      },
    )
  } else {
    baseItems.push({
      label: 'Login',
      icon: 'pi pi-sign-in',
      command: () => router.push('/login'),
    },
    {
      label: 'Registrarse',
      icon: 'pi pi-user-plus',
      command: () => router.push('/register'),
    })
  }

  return baseItems
})
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
