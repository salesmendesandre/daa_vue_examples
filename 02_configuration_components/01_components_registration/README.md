# Registro de componentes: local vs global

Este ejemplo desarrolla el apartado de registro de componentes del capítulo “Configuración y componentes” del libro [`daa_vue`](https://salesmendesandre.github.io/daa_vue/main/vue/p1c2_configuracion_y_componentes.html).

## Qué aprenderás
- Diferenciar cuándo registrar componentes de forma local (dentro de `<script setup>`) o global (en `main.js`).
- Compartir componentes reutilizables sin duplicar imports.
- Controlar el montaje global de elementos como botones o layouts.

## Cómo probarlo
```bash
npm install
npm run dev
```

Explora `src/App.vue` para ver el registro local con `import`, y revisa `src/main.js` para el registro global mediante `app.component`. Intenta añadir un nuevo componente y decidir si debe ser global o local según lo explicado en el capítulo.
