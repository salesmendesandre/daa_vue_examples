# Rutas dinámicas con parámetros

Proyecto alineado al capítulo [Ruteo y Estado Global](https://salesmendesandre.github.io/daa_vue/main/vue/p3c7_ruteo_y_estado_global.html). Su objetivo es ilustrar cómo declarar rutas con segmentos variables y leerlos desde los componentes.

## Qué encontrarás
- `src/router/index.js` con la ruta `/usuarios/:id`, activando `props: true` para inyectar el parámetro como prop.
- `UsuarioDetalle.vue` usando `useRoute()` y `computed` para reaccionar cuando cambia `route.params.id`.
- Un layout sencillo donde cada navegación modifica sólo el contenido de la vista, sin recargar la aplicación.

## Cómo correrlo
```
npm install
npm run dev
```

Prueba URLs como `/usuarios/10` o `/usuarios/99` y extiende el componente para obtener datos reales, tal como se propone en los retos del capítulo.
