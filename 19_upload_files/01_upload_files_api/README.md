# API de subida de archivos con Multer

Backend del capítulo [Subida de archivos con Multer](https://salesmendesandre.github.io/daa_vue/main/vue/p6c19_05_upload_multer.html). Expone `/upload/imagen` para recibir imágenes y servirlas desde `/uploads`.

## Requisitos y arranque
```bash
npm install
npm run dev
```

- Usa `http://localhost:4000` por defecto; ajusta el puerto en `src/app.js` si lo necesitas.
- Crea la carpeta `uploads/` en la raíz si no existe (ya viene incluida) para que Multer guarde ahí los ficheros.

## Puntos clave
- Configuración de Multer en `src/config/multer.js` con `diskStorage`, validación de tipo MIME e imágenes de hasta 2 MB.
- Rutas en `src/routes/upload.routes.js` y controlador en `src/controllers/upload.controller.js` que devuelven la URL pública del archivo.
