<script setup>
const props = defineProps({
    name: String
})

const emit = defineEmits(['greet'])

const onClick = () => {
    emit('greet')
}
</script>



<template>
<section class="greeting">
    <p>Hola, {{ props.name }} 👋</p>
    <button @click="onClick">Saludar</button>
</section>
</template>

<style scoped>
.greeting {
    display: grid;
    gap: 0.5rem;
}
</style>