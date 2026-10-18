<template>
    <article>
        <h2 v-text="titulo"></h2>
        <p v-text="mensajePlano"></p>
        <div v-html="mensajeConFormato"></div>
    </article>
</template>

<script setup>
const titulo = 'Directivas de texto'
const mensajePlano = 'Este párrafo se establece con v-text.'
const mensajeConFormato = '<strong>Mensaje destacado</strong> con <em>énfasis</em>.'
</script>