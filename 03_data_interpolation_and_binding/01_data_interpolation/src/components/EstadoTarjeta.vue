<template>
    <section :class="['tarjeta', estadoClass]">
        <h3>{{ titulo }}</h3>
        <p>{{ descripcion }}</p>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const titulo = ref('Pedido #1234')
const descripcion = ref('Preparando envío')
const estado = ref('pendiente') // puede ser pendiente, enviado, entregado

const estadoClass = computed(() => ({
    pendiente: 'tarjeta--pendiente',
    enviado: 'tarjeta--enviado',
    entregado: 'tarjeta--entregado'
}[estado.value]))
</script>

<style scoped>
.tarjeta {
    border-radius: 8px;
    padding: 1rem;
    color: #0f172a;
}

.tarjeta--pendiente {
    background-color: #fef3c7;
}

.tarjeta--enviado {
    background-color: #bfdbfe;
}

.tarjeta--entregado {
    background-color: #bbf7d0;
}
</style>