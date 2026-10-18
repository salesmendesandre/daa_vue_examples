<template>
    <div class="card flex flex-column align-items-center gap-5">
        Añadir Producto

        <Form
            v-slot="$form"
            :initialValues="initialValues"
            :resolver="resolver"
            @submit="onFormSubmit"
            class="flex flex-column gap-4 w-full sm:w-56"
            >
            <div class="flex flex-column gap-1">
                <InputText name="id" type="text" placeholder="ID" fluid />
                <Message
                v-if="$form.id?.invalid"
                severity="error"
                size="small"
                variant="simple"
                >
                {{ $form.id.error.message }}
                </Message>
            </div>

            <div class="flex flex-column gap-1">
                <InputText name="price" type="number" placeholder="Precio" fluid />
                <Message
                v-if="$form.price?.invalid"
                severity="error"
                size="small"
                variant="simple"
                >
                {{ $form.price.error.message }}
                </Message>
            </div>

            <Button type="submit" severity="secondary" label="Enviar" />

            <!-- El slot expone el estado completo del formulario -->
            {{ $form }}
            </Form>
        </div>
</template>

<script setup>
import { ref } from 'vue'
import { z } from 'zod'
import { Form } from '@primevue/forms'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Button from 'primevue/button'

// Estado inicial que vive dentro del componente Form
const initialValues = ref({
    id: '',
    price: 0
})

// El resolver traduce el esquema de Zod a las reglas que entiende el Form
const resolver = ref(
    zodResolver(
        z.object({
        id: z.string().min(1, { message: 'ID es necesario' }),
        price: z.coerce
            .number({
            required_error: 'Precio es requerido',
            invalid_type_error: 'Precio debe ser un número'
            })
            .min(1, { message: 'Precio debe ser al menos 1' })
            .max(1000, { message: 'Precio debe ser como máximo 1000' })
        })
    )
)

const onFormSubmit = ({ valid, values }) => {
    if (valid) {
        // Aquí iría la acción real (guardar, llamar a una API, etc.)
        console.log('Form submitted', values)
    }
}
</script>