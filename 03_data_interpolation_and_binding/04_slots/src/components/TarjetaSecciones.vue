<template>
    <section class="tarjeta-secciones">
        <header>
        <slot name="titulo">Título por defecto</slot>
        </header>
        <main>
        <slot>Contenido principal</slot>
        </main>
        <footer>
        <slot name="acciones"></slot>
        </footer>
    </section>
</template>
<script setup>
// Componentes de solo presentación
</script>

<style scoped>
.tarjeta-secciones {
    display: grid;
    gap: 0.75rem;
    border: 1px solid #cbd5f5;
    padding: 1rem;
    border-radius: 12px;
}
</style>