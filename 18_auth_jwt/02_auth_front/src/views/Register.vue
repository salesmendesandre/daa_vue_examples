<template>
    <div class="flex justify-content-center align-items-center">
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

                    <div class="flex flex-column gap-1">
                        <label for="confirm" class="p-mb-1">Confirmar contraseña</label>
                        <Password
                            id="confirm"
                            name="confirm"
                            toggleMask
                            :feedback="false"
                            placeholder="Repite la contraseña"
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
                        label="Crear cuenta"
                        class="p-mt-2"
                        :loading="loading"
                    />

                    <Message
                        v-if="submitError"
                        severity="error"
                        size="small"
                        variant="simple"
                    >
                        {{ submitError }}
                    </Message>
                </Form>

                <div class="p-mt-3 flex align-items-center gap-2 mt-4 justify-content-between">
                    <span class="text-sm text-color-secondary">¿Ya tienes cuenta?</span>
                    <RouterLink to="/login">Iniciar sesión</RouterLink>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Form } from '@primevue/forms'
import { z } from 'zod'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { useRouter } from 'vue-router'
import { signIn, signUp } from '@/services/authService'
import { useUserStore } from '@/stores/user'

import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Message from 'primevue/message'
import Button from 'primevue/button'

const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)
const submitError = ref('')

const initialValues = ref({
    email: '',
    password: '',
    confirm: '',
})

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
            confirm: z.string(),
        }).refine((data) => data.password === data.confirm, {
            message: 'Las contraseñas no coinciden',
            path: ['confirm'],
        })
    )
)

const onFormSubmit = async ({ valid, values }) => {
    if (!valid) return

    loading.value = true
    submitError.value = ''

    try {
        await signUp(values.email, values.password)
        const { token } = await signIn(values.email, values.password)
        userStore.setToken(token)
        await userStore.fetchProfile()
        router.push('/panel')
    } catch (err) {
        console.error('Error al registrar', err)
        submitError.value =
            err?.response?.data?.error || 'No se pudo crear la cuenta, intenta de nuevo'
    } finally {
        loading.value = false
    }
}
</script>
