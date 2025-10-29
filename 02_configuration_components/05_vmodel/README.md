# `v-model` en inputs controlados

Ejemplo alineado con el capítulo “Configuración y componentes” del libro [`daa_vue`](https://salesmendesandre.github.io/daa_vue/main/vue/p1c2_configuracion_y_componentes.html). Demuestra cómo enlazar el estado de un componente con campos de formulario usando `v-model`.

## Conceptos clave
- Estado reactivo con `ref`.
- Enlace bidireccional para mantener sincronizadas la vista y la lógica.
- Renderizado condicional (`nombre || 'anónimo'`) como se explica en el capítulo.

## Cómo probarlo
```bash
npm install
npm run dev
```

Abre `src/App.vue`, escribe distintos valores y observa el reflejo inmediato en la interfaz. Experimenta añadiendo reglas de validación básica (por ejemplo, `maxlength`) para reforzar lo visto en el libro.
