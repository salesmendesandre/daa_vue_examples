# CRUD con Firestore (Vue 3)

Ejemplo que acompaña el capítulo sobre Firestore del libro [Desarrollo de Aplicaciones Avanzadas con Vue](https://salesmendesandre.github.io/daa_vue/main/vue/p4c11_firebase_firestore.html). Implementa un CRUD completo de items usando la API modular de Firebase v9.

## Qué repasar antes
- Haber configurado tu proyecto y credenciales en Firebase (usa `.env.example` como guía).
- Conocer la base del proyecto de autenticación (`10_firebase_auth`), ya que comparte inicialización.
- Node.js 18+ y dependencias instaladas.

## Qué incluye el ejemplo
- Servicio de Firestore en `src/services/firestoreService.js` con `addDoc`, `getDoc`, `updateDoc`, `deleteDoc` y `onSnapshot`.
- Vistas para listar (`ItemsList`), crear (`AddItem`) y editar (`EditItem`) documentos.
- Uso de `onSnapshot` para listas en tiempo real y router para navegación entre vistas.
- Integración con Pinia para compartir estado cuando hace falta.

## Cómo ejecutar
```bash
npm install
npm run dev
```

Accede a `http://localhost:5173` y sigue el flujo CRUD con tus propias colecciones de Firestore.
