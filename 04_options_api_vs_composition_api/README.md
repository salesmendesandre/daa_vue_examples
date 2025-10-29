# Options API vs Composition API

Este ejemplo acompaña el capítulo dedicado a comparar estilos de componentes en el libro [`daa_vue`](https://salesmendesandre.github.io/daa_vue/main/vue/p2c4_estilos_api.html). Presenta dos implementaciones equivalentes para un contador, una basada en Options API y otra en Composition API.

## Qué analizar
- Cómo se estructura el mismo flujo con `data`, `computed` y `methods` frente a `ref` y `computed`.
- Ventajas de agrupar lógica por opciones versus por funcionalidades.
- Legibilidad de cada enfoque y cómo afecta a la reutilización de código.

## Ejecución
```bash
npm install
npm run dev
```

Abre `src/components/ContadorOptions.vue` y `src/components/ContadorComposition.vue`. Sigue las preguntas del capítulo: ¿cómo extraerías la lógica en un composable? ¿Qué ocurriría al añadir watchers o efectos secundarios?
