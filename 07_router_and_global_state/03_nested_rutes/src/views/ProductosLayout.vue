<template>
  <div class="productos">
    <aside>
      <RouterLink :to="{ name: 'productos-listado' }">Listado</RouterLink>
      <RouterLink :to="{ name: 'producto-crear' }">Nuevo producto</RouterLink>
    </aside>
    <section>
      <router-view />
    </section>
  </div>
</template>