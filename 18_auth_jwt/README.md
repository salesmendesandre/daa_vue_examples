# Autenticación JWT con API propia

Ejemplos del capítulo [Autenticación con JWT](https://salesmendesandre.github.io/daa_vue/main/vue/p6c18_04_auth_jwt.html). Incluye API y cliente Vue que consumen tokens firmados.

## Carpetas
- `01_auth_api`: API Express + MongoDB con registro e inicio de sesión, generación/verificación de JWT y middlewares de protección.
- `02_auth_front`: cliente Vue 3 con Pinia, axios y rutas protegidas que consume la API anterior.

## Puesta en marcha rápida
1. API: `cd 01_auth_api && npm install && npm run dev` (define `JWT_SECRET` en un `.env` si no existe).
2. Frontend: `cd 02_auth_front && npm install && npm run dev` y asegúrate de que `VITE_API_URL` apunte a la URL de la API (por defecto `http://localhost:4000`).
