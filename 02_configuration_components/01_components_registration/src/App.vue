<template>
  <main>
    <h1>Componentes registrados localmente</h1>
    <Saludo nombre="Ada" />
    <h1>Componentes registrados globalmente</h1>
    <TarjetaInfo 
      titulo="Componente TarjetaInfo" 
      contenido="Este es un componente de tarjeta de información que utiliza props y slots."
    >
      <p>Este es un contenido adicional que se pasa al slot del componente TarjetaInfo.</p>
    </TarjetaInfo>
  </main>
</template>

<script setup>
import Saludo from './components/Saludo.vue'
</script>