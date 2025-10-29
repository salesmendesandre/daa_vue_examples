# Ganchos de ciclo de vida

Ejemplo asociado al capítulo “Ciclo de vida y propiedades derivadas” del libro [Desarrollo de Aplicaciones Avanzadas con Vue](https://salesmendesandre.github.io/daa_vue/main/vue/p2c5_ciclo_de_vida_y_computed.html). Permite observar en consola cuándo se dispara cada hook de Vue 3.

## Qué practicarás
- Uso de `onBeforeMount`, `onMounted`, `onBeforeUpdate`, `onUpdated`, `onBeforeUnmount` y `onUnmounted`.
- Control del montaje y desmontaje de un componente mediante un booleano reactivo (`visible`).

## Cómo probarlo
```bash
npm install
npm run dev
```

Abre la consola del navegador, alterna el botón “Cambiar estado de montaje” y sigue la secuencia de logs. Amplía el ejemplo añadiendo efectos secundarios (peticiones simuladas, timers) como se sugiere en el capítulo para entrenar buenas prácticas de limpieza.
