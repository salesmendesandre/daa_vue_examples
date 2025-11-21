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
    import {signOut} from '@/services/authService'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const signOutApp = () => {
        signOut(),
        router.push('/login')        
    }


</script>