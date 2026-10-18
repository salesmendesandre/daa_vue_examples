<script setup>
import CampoCorreo from './components/CampoCorreo.vue';
import FormularioBasico from './components/FormularioBasico.vue';
import ModificadoresDemo from './components/ModificadoresDemo.vue';
import FormularioContacto from './components/FormularioContacto.vue';
import FormularioValidacion from './components/FormularioValidacion.vue';
</script>

<template>
  <div>
    <section class="component">
      <h2>Campo de correo</h2>
      <CampoCorreo />
    </section>

    <section class="component">
      <h2>Formulario básico</h2>
      <FormularioBasico />
    </section>

    <section class="component">
      <h2>Modificadores de eventos</h2>
      <ModificadoresDemo />
    </section>

    <section class="component">
      <h2>Formulario de contacto</h2>
      <FormularioContacto />
    </section>

    <section class="component">
      <h2>Formulario con validación</h2>
      <FormularioValidacion />
    </section>
  </div>
</template>

<style scoped>
.component {
  display: block;
  margin-bottom: 2rem;
  border: 1px solid #e5e7eb;
  padding: 1rem;
}
</style>
