# Cliente Vue para subir imágenes

Ejemplo del capítulo [Subida de archivos con Multer](https://salesmendesandre.github.io/daa_vue/main/vue/p6c19_05_upload_multer.html). Envía una imagen al endpoint `/upload/imagen` de la API (`../01_upload_files_api`) y muestra la URL devuelta.

## Qué incluye
- Formulario sencillo con `<input type="file">`, axios y `FormData`.
- Manejo de estado de carga, errores y previsualización de la imagen subida.
- Base con Vue 3 + Vite lista para ampliar la interfaz.

## Cómo usar
```bash
npm install
npm run dev
```

La API se asume en `http://localhost:4000`; actualiza la URL en `src/views/UploadImage.vue` si usas otro host/puerto.
