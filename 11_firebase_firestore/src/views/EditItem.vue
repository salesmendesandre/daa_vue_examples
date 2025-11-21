<!-- src/views/EditItem.vue -->
<template>
    <section>
        <Card>
            <template #content>
                <h1>Editar item</h1>
                <form v-if="loaded" @submit.prevent="handleSubmit">
                    <label>
                        Título
                        <input v-model="title" required />
                    </label>
                    <label>
                        Descripción
                        <textarea v-model="description" required></textarea>
                    </label>
                    <button type="submit" :disabled="loading">Actualizar</button>
                </form>
                <p v-else>Cargando...</p>
            </template>
        </Card>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getItem, updateItem } from '@/services/itemsService'

const route = useRoute()
const router = useRouter()
const title = ref('')
const description = ref('')
const loading = ref(false)
const loaded = ref(false)
const id = route.params.id

const loadItem = async () => {
    try {
        const snap = await getItem(id)
        if (!snap.exists()) {
            alert('No existe el documento')
            router.push('/items')
            return
        }
        const data = snap.data()
        title.value = data.title
        description.value = data.description
        loaded.value = true
    } catch (err) {
        console.error('Error cargando', err)
        alert('No se pudo cargar el item.')
        router.push('/items')
    }
}

const handleSubmit = async () => {
    loading.value = true
    try {
        await updateItem(id, { title: title.value, description: description.value })
        router.push('/items')
    } catch (err) {
        console.error('Error actualizando', err)
        alert('No se pudo actualizar.')
    } finally {
        loading.value = false
    }
}

onMounted(loadItem)
</script>