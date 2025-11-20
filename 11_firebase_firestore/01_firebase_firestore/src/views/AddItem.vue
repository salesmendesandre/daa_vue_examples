<!-- src/views/AddItem.vue -->
<template>
    <section>
        <Card>
            <template #content>
                <h1>Nuevo item</h1>
                <form @submit.prevent="handleSubmit">
                    <label>
                        Título
                        <input v-model="title" required />
                    </label>
                    <label>
                        Descripción
                        <textarea v-model="description" required></textarea>
                    </label>
                    <button type="submit" :disabled="loading">Guardar</button>
                </form>
            </template>
        </Card>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addItem } from '@/services/itemsService'

const router = useRouter()
const title = ref('')
const description = ref('')
const loading = ref(false)

const handleSubmit = async () => {
    loading.value = true
    try {
        await addItem({ title: title.value, description: description.value })
        router.push('/items')
    } catch (err) {
        console.error('Error creando', err)
        alert('No se pudo crear el item.')
    } finally {
        loading.value = false
    }
}
</script>