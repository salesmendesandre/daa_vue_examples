# Autenticación con Firebase (Vue 3 + Vite)

Ejemplo del capítulo dedicado a Firebase Auth en el libro [Desarrollo de Aplicaciones Avanzadas con Vue](https://salesmendesandre.github.io/daa_vue/main/vue/p4c10_firebase_auth_firestore.html). Muestra cómo integrar el SDK modular v9, registrar usuarios con email/contraseña, iniciar sesión con Google y reaccionar a los cambios de sesión.

## Qué repasar antes
- Configurar un proyecto en la consola de Firebase y habilitar Authentication (Email/Password y Google).
- Crear un `.env.local` a partir de `.env.example` con las claves `VITE_FIREBASE_*`.
- Node.js 18+ y un gestor (`npm`, `pnpm`, `yarn`).

## Qué incluye el ejemplo
- Inicialización de Firebase en `src/services/firebase.js` y helpers en `src/services/authService.js`.
- Flujo de registro, login con email/contraseña y autenticación con Google.
- Suscripción a `onAuthStateChanged` para mantener la sesión y controlar rutas protegidas.
- Integración básica con Vue Router y Pinia para propagar el usuario autenticado.

## Cómo ejecutar
```bash
npm install
npm run dev
```

Arranca en `http://localhost:5173`. Ajusta las claves de entorno antes de probar el inicio de sesión.
