# Imágenes en Firestore como Base64

Proyecto del capítulo sobre subir imágenes en Base64 del libro [Desarrollo de Aplicaciones Avanzadas con Vue](https://salesmendesandre.github.io/daa_vue/main/vue/p4c12_firebase_images_in_firestore.html). Sirve como hack rápido cuando no se dispone de un backend o storage dedicado.

## Qué repasar antes
- Tener configurado Firebase y Firestore (variables en `.env.local` según `.env.example`).
- Conocer el flujo base de autenticación y CRUD de los ejemplos 10 y 11.
- Node.js 18+ y dependencias instaladas.

## Qué incluye el ejemplo
- Lectura de un `input type="file"`, conversión a Base64 y previsualización inmediata.
- Persistencia de la cadena Base64 en Firestore y renderizado posterior.
- Componentes simples en Vue 3 con Composition API y enrutado básico.
- Advertencias sobre peso de Base64 y uso en prototipos o imágenes pequeñas.

## Cómo ejecutar
```bash
npm install
npm run dev
```

Abre `http://localhost:5173`, selecciona una imagen ligera y observa cómo se guarda y recupera desde Firestore.
