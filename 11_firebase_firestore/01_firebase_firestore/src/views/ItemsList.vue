<!-- src/views/ItemsList.vue -->
<template>
    <section>
        <h1>Items</h1>
        <RouterLink to="/items/add">Añadir</RouterLink>

        <ul v-if="items.length">
            <Card v-for="item in items" :key="item.id" class="mt-4">
                <template #content>
                    <strong>{{ item.title }}</strong>
                    <p>{{ item.description }}</p>
                    <button @click="goEdit(item.id)">Editar</button>
                    <button @click="handleDelete(item.id)">Eliminar</button>
                </template>
            </Card>
        </ul>
        <p v-else>No hay items todavía.</p>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { subscribeToItems, deleteItem } from '@/services/itemsService'

const router = useRouter()
const items = ref([])
const loading = ref(false)
let unsubscribe = null

const goEdit = (id) => {
    router.push(`/items/edit/${id}`)
}

const handleDelete = async (id) => {
    loading.value = true
    try {
        await deleteItem(id)
    } catch (err) {
        console.error('Error eliminando', err)
        alert('No se pudo eliminar. Revisa la consola.')
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    unsubscribe = subscribeToItems((docs) => {
        items.value = docs
    })
})

onUnmounted(() => {
    if (unsubscribe) unsubscribe()
})
</script>