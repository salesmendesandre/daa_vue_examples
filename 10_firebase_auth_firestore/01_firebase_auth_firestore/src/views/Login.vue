<template>
    <div class="flex justify-content-center align-items-center ">
        <Card class="login-card card flex flex-column align-items-center gap-4 col-12 md:col-6">
        <template #title>
                <h1>Iniciar sesión</h1>
            </template>
            <template #content>

            <Form
            v-slot="$form"
            :initialValues="initialValues"
            :resolver="resolver"
            @submit="onFormSubmit"
            class="p-fluid flex flex-column gap-4 w-full sm:w-18rem"
            >
            <!-- Email -->
            <div class="flex flex-column gap-1">
                <label for="email" class="p-mb-1">Email</label>
                <InputText
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                autocomplete="email"
                fluid
                />
                <Message
                v-if="$form.email?.invalid"
                severity="error"
                size="small"
                variant="simple"
                >
                {{ $form.email.error.message }}
                </Message>
            </div>

            <!-- Password -->
            <div class="flex flex-column gap-1">
                <label for="password" class="p-mb-1">Contraseña</label>
                <Password
                id="password"
                name="password"
                toggleMask
                :feedback="false"
                placeholder="Contraseña"
                autocomplete="current-password"
                fluid
                />
                <Message
                v-if="$form.password?.invalid"
                severity="error"
                size="small"
                variant="simple"
                >
                {{ $form.password.error.message }}
                </Message>
            </div>

            <Button
                type="submit"
                label="Entrar"
                class="p-mt-2"
                :loading="loading"
            />

            </Form>

            <div class="p-mt-3 flex flex-row gap-2 mt-4">
            
            <Button
                label="Continuar con Google"
                icon="pi pi-google"
                class="p-button-secondary w-full"
                type="button"
                @click="handleGoogle"
            />
            </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { z } from 'zod'
import { Form } from '@primevue/forms'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { useRouter } from 'vue-router'
const router = useRouter()

import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Message from 'primevue/message'
import Button from 'primevue/button'

import {
    signIn,
    signInGoogle,
    subscribeToAuth,
    signOut
} from '@/services/authService'

const user = ref(null)
const loading = ref(false)
let unsubscribe = null

// Estado inicial controlado por <Form>
const initialValues = ref({
    email: '',
    password: ''
})

// Esquema Zod para email y contraseña
const resolver = ref(
    zodResolver(
        z.object({
        email: z
            .string()
            .min(1, { message: 'El email es obligatorio' })
            .email({ message: 'El email no es válido' }),
        password: z
            .string()
            .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
        })
    )
)

// onSubmit del Form de PrimeVue
const onFormSubmit = async ({ valid, values }) => {
    if (!valid) return

    loading.value = true
    try {
        await signIn(values.email, values.password)
        router.push('/panel')
    } catch (err) {
        console.error('Error al iniciar sesión', err)
        // aquí podrías añadir un Message global o Toast
    } finally {
        loading.value = false
    }
}

const handleGoogle = async () => {
    try {
        await signInGoogle()
    } catch (err) {
        console.error('Error con Google', err)
    }
}

const handleSignOut = () => {
    signOut()
}

onMounted(() => {
    unsubscribe = subscribeToAuth((currentUser) => {
        user.value = currentUser
    })
})

onUnmounted(() => {
    if (unsubscribe) unsubscribe()
})
</script>