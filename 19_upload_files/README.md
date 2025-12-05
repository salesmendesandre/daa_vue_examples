# Subida de archivos con Multer + Vue

Ejemplos del capítulo [Subida de archivos con Multer](https://salesmendesandre.github.io/daa_vue/main/vue/p6c19_05_upload_multer.html). Incluyen una API Express con Multer y un cliente Vue que envía imágenes vía `FormData`.

## Carpetas
- `01_upload_files_api`: API con endpoint `/upload/imagen`, middleware de Multer y respuestas JSON con la URL del archivo subido.
- `02_client`: cliente Vue 3 + PrimeVue que selecciona una imagen y la envía como `multipart/form-data`.

## Cómo ejecutar
1. API: `cd 01_upload_files_api && npm install && npm run dev`.
2. Frontend: `cd 02_client && npm install && npm run dev` (asegúrate de que apunte a la URL de la API si usas otro host/puerto).
