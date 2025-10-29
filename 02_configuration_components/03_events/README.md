# Eventos nativos y modificadores

Apoyo práctico al capítulo “Configuración y componentes” del libro [Desarrollo de Aplicaciones Avanzadas con Vue](https://salesmendesandre.github.io/daa_vue/main/vue/p1c2_configuracion_y_componentes.html). Ilustra cómo escuchar eventos nativos (`click`, `submit`, `focus`) desde la plantilla.

## Claves del ejemplo
- Uso de `@submit.prevent` para manejar formularios sin recargar la página.
- Registro de eventos de foco y clicks para depurar interacciones en consola.

## Ejecución
```bash
npm install
npm run dev
```

Abre la consola del navegador mientras interactúas con los elementos en `src/App.vue`. Añade otros eventos (`keyup.enter`, `@blur`) como sugiere el capítulo y verifica el log resultante.
