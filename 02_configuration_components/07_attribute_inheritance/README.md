# Herencia de atributos con `$attrs`

Ejemplo asociado al capítulo “Configuración y componentes” del libro [`daa_vue`](https://salesmendesandre.github.io/daa_vue/main/vue/p1c2_configuracion_y_componentes.html). Muestra cómo permitir que un componente pase atributos arbitrarios a su elemento raíz.

## Objetivos
- Entender `inheritAttrs` y su configuración por defecto.
- Reenviar atributos (`type`, `aria-*`, clases adicionales) a partir de `$attrs`.

## Cómo ejecutarlo
```bash
npm install
npm run dev
```

Revisa `src/components/BotonBasico.vue`, añade nuevos atributos desde `src/App.vue` y confirma en las DevTools que llegan al elemento final. Este patrón es el que se recomienda en el capítulo para componentes altamente reutilizables.
