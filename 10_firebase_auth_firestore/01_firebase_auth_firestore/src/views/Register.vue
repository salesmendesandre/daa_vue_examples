<template>
    <div class="flex justify-content-center align-items-center ">
        <Card class="login-card card flex flex-column align-items-center gap-4 col-12 md:col-6">
            <template #title>
                <h1>Crear cuenta</h1>
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
                        autocomplete="new-password"
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

                <!-- Confirm Password -->
                <div class="flex flex-column gap-1">
                    <label for="confirm" class="p-mb-1">Repetir contraseña</label>
                    <Password
                        id="confirm"
                        name="confirm"
                        toggleMask
                        :feedback="false"
                        placeholder="Repetir contraseña"
                        autocomplete="new-password"
                        fluid
                    />
                    <Message
                        v-if="$form.confirm?.invalid"
                        severity="error"
                        size="small"
                        variant="simple"
                    >
                        {{ $form.confirm.error.message }}
                    </Message>
                </div>

                <Button
                    type="submit"
                    label="Registrarse"
                    class="p-mt-2"
                    :loading="loading"
                />

            </Form>

            <div class="p-mt-3 flex flex-row gap-2 mt-4">
                <Button
                    label="Registrarse con Google"
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
import { ref } from 'vue'
import { z } from 'zod'
import { Form } from '@primevue/forms'
import { zodResolver } from '@primevue/forms/resolvers/zod'

import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Message from 'primevue/message'
import Button from 'primevue/button'
import Card from 'primevue/card'

import { signUp, signInGoogle } from '@/services/authService'

// Estado inicial del formulario
const initialValues = ref({
    email: '',
    password: '',
    confirm: ''
})

const loading = ref(false)

// Validación con Zod
const resolver = ref(
    zodResolver(
        z.object({
            email: z
                .string()
                .min(1, { message: 'El email es obligatorio' })
                .email({ message: 'El email no es válido' }),

            password: z
                .string()
                .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),

            confirm: z
                .string()
                .min(1, { message: 'Debes repetir la contraseña' })
        }).refine((data) => data.password === data.confirm, {
            message: 'Las contraseñas no coinciden',
            path: ['confirm']
        })
    )
)

// Enviar formulario de registro
const onFormSubmit = async ({ valid, values }) => {
    if (!valid) return

    loading.value = true
    try {
        await signUp(values.email, values.password)
    } catch (error) {
        console.error('Error al registrarse', error)
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
</script>

<style scoped>
.login-card {
    max-width: 420px;
    margin: 2rem auto;
    padding: 2rem;
}

h1 {
    margin: 0;
    text-align: center;
}
</style>
