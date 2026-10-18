<template>
  <div class="app-shell">
    <header>
      <h1>Pedidos SPA</h1>
      <nav>
        <RouterLink to="/pedidos">Listado</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

header {
  background: #0f172a;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
}

main {
  flex: 1;
  background: #f8fafc;
}
</style>
