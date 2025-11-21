<template>
  <div class="grid gap-3">
    <div class="col-12">
      <Card class="shadow-1">
        <template #title>Plantilla base</template>
        <template #subtitle>Vue 3 + PrimeVue + Router + Pinia</template>
        <template #content>
          <p class="m-0 text-color">
            Usa esta estructura para agregar tus propias vistas, rutas, stores y servicios.
          </p>
        </template>
      </Card>
    </div>

    <div class="col-12 md:col-6">
      <Card title="Siguientes pasos" class="shadow-1">
        <template #content>
        <ul class="list-none p-0 m-0">
          <li class="mb-2 text-color">
            Añade páginas en <code>src/views</code> y configúralas en <code>src/router/index.js</code>.
          </li>
          <li class="mb-2 text-color">
            Crea stores en <code>src/stores</code> y consúmelos con Pinia.
          </li>
          <li class="text-color">
            Integra tus servicios o APIs donde corresponda (auth, datos, etc.).
          </li>
        </ul></template>
      </Card>
    </div>


    <div class="col-12 md:col-6">
      <Toast />
        <Button label="Show" @click="show()" />
    </div>
    
  </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const show = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};
</script>