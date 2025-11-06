<template>
  <header>
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/about">Acerca de</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
}
.router-link-active {
  font-weight: bold;
}
</style>
