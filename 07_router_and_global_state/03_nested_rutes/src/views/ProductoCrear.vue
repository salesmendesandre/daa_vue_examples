<template>
  <section>
    <h1>Crear producto</h1>
    <p>Formulario básico para ejemplificar la ruta `/productos/nuevo`.</p>

    <form>
      <label>
        Nombre
        <input type="text" placeholder="Nombre del producto" />
      </label>

      <label>
        Categoría
        <input type="text" placeholder="Categoría" />
      </label>

      <label>
        Precio
        <input type="number" min="0" step="1" placeholder="0" />
      </label>

      <div>
        <button type="button">Guardar</button>
        <RouterLink :to="{ name: 'productos-listado' }">Cancelar</RouterLink>
      </div>
    </form>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

input {
  border: 1px solid #cbd5f5;
  border-radius: 0.4rem;
  padding: 0.4rem 0.6rem;
}

button {
  padding: 0.45rem 0.9rem;
  border-radius: 0.4rem;
  border: 1px solid #16a34a;
  background-color: #16a34a;
  color: #fff;
  cursor: pointer;
}

a {
  color: #2563eb;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
