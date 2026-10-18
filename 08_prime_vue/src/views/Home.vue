<script setup>
import { computed } from 'vue'
import { useCounterStore } from '../stores/counter'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'

const store = useCounterStore()
const toast = useToast()
const router = useRouter()

const doubled = computed(() => store.count * 2)

function increment() {
    store.increment()
    toast.add({
        severity: 'info',
        summary: 'Contador actualizado',
        detail: `Nuevo valor: ${store.count}`,
        life: 3000
    })
}

function goAbout() {
    router.push('/about')
}
</script>

<template>
    <section class="surface-card border-round p-4 shadow-1 flex flex-column gap-3">
        <h2 class="m-0">Inicio</h2>
        <p>Valor: {{ store.count }} (doble: {{ doubled }})</p>
        <div class="flex gap-2">
        <Button label="Incrementar" icon="pi pi-plus" @click="increment" />
        <Button label="Ir a About" icon="pi pi-arrow-right" severity="help" @click="goAbout" />
        </div>
        <Toast />
    </section>
</template>