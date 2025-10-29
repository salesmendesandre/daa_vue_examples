# Directiva `v-cloak` para evitar parpadeos

Mini ejemplo del capítulo “Plantillas y directivas” del libro [`daa_vue`](https://salesmendesandre.github.io/daa_vue/main/vue/p1c3_plantillas_y_directivas.html). Enseña cómo ocultar el contenido hasta que Vue monte la aplicación y reemplace las interpolaciones.

## Qué observar
- La directiva `v-cloak` aplicada a la raíz (`<main>`).
- Estilos que ocultan el contenido hasta que Vue elimina el atributo.
- Uso recomendado cuando se entrega HTML renderizado en servidor o se carga desde CDN.

## Cómo verlo en acción
```bash
npm install
npm run dev
```

Abre las DevTools del navegador, inspecciona el DOM antes y después de la hidratación y verifica cómo Vue retira el atributo `v-cloak`, siguiendo las indicaciones del capítulo.
