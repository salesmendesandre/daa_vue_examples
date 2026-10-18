<template>
    <a :href="url" :title="descripcion">
        Visitar documentación
    </a>
</template>

<script setup>
const url = 'https://vuejs.org'
const descripcion = 'Sitio oficial de Vue'
</script>