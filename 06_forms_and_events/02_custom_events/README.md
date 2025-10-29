# Eventos personalizados en formularios

Mini proyecto conectado al capítulo “Manejo de formularios y eventos” del libro [`daa_vue`](https://salesmendesandre.github.io/daa_vue/main/vue/p2c6_manejo_de_formularios_y_eventos.html). Enseña a propagar información desde un componente hijo (`BotonEnviar`) hacia el contenedor principal mediante eventos personalizados.

## Objetivos de aprendizaje
- Declarar eventos con `defineEmits` y emitir payloads con metadatos.
- Actualizar estado en el componente padre (`ultimoEnvio`) cada vez que se dispara la acción.
- Formatear la información recibida (timestamp → hora legible) como sugiere el capítulo.

## Cómo ejecutarlo
```bash
npm install
npm run dev
```

Haz clic en el botón y revisa cómo cambia la marca de tiempo. Amplía el payload con más datos (por ejemplo, usuario, formulario válido) conforme a los ejercicios recomendados en el libro.
