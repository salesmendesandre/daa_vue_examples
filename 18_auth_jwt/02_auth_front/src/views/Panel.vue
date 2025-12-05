<template>
    Ruta protegida: Panel de usuario
    <Button
        label="Cerrar sesión"
        icon="pi pi-sign-out"
        class="p-button-danger mt-3"
        @click="signOutApp()"
    />
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const signOutApp = () => {
    userStore.clearSession()
    router.push('/login')
}
</script>
