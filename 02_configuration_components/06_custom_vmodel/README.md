# `v-model` personalizado (`update:modelValue`)

Ejemplo complementario al capítulo “Configuración y componentes” del libro [Desarrollo de Aplicaciones Avanzadas con Vue](https://salesmendesandre.github.io/daa_vue/main/vue/p1c2_configuracion_y_componentes.html). Enseña a crear componentes que exponen su propio `v-model`.

## Lo que practicarás
- Definir props obligatorias (`modelValue`, `label`).
- Emitir el evento `update:modelValue` para sincronizar el valor con el padre.
- Encapsular estilos y plantillas reutilizables.

## Pasos para ejecutarlo
```bash
npm install
npm run dev
```

Modifica `CampoTexto.vue` para añadir validaciones (por ejemplo, `maxlength` o `type="email"`) y comprueba cómo el componente padre sigue recibiendo las actualizaciones, tal como se detalla en el libro.
