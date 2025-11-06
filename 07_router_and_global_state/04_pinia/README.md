# Estado global con Pinia

Ejemplo asociado al capítulo [Ruteo y Estado Global](https://salesmendesandre.github.io/daa_vue/main/vue/p3c7_ruteo_y_estado_global.html). Concentra un store muy simple y dos instancias del mismo componente para demostrar cómo comparten el estado.

## Qué encontrarás
- `src/stores/contador.js` con un store `useContadorStore` que expone estado (`valor`), getters (`doble`) y acciones (`incrementar`).
- `ComponenteContadorPinia.vue`, el cual consume el store mediante `storeToRefs` y botones para mutar el estado.
- `App.vue` renderizando dos componentes que apuntan al mismo store, evidenciando la naturaleza compartida del estado global.

## Cómo correrlo
```
npm install
npm run dev
```

Duplica el componente, crea nuevos getters o integra efectos secundarios para practicar las recomendaciones del capítulo.
