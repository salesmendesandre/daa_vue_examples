# Props declarativas con `defineProps`

Ejemplo asociado al capítulo “Configuración y componentes” del libro [`daa_vue`](https://salesmendesandre.github.io/daa_vue/main/vue/p1c2_configuracion_y_componentes.html). Muestra cómo declarar props tipadas en componentes creados con `<script setup>`.

## Qué repasar
- Validaciones básicas (`type`, `required`) y props opcionales.
- Uso de props para comunicar datos desde el componente padre hacia el hijo.

## Cómo explorarlo
```bash
npm install
npm run dev
```

Observa `src/components/TituloSeccion.vue` para ver `defineProps` en acción. Modifica los valores en `src/App.vue` y añade nuevas props (por ejemplo, un icono o estado) tal como se propone en el capítulo.
