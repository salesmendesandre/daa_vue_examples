# Autenticación con API propia (Vue 3 + Vite)

Cliente del capítulo [Autenticación con JWT](https://salesmendesandre.github.io/daa_vue/main/vue/p6c18_04_auth_jwt.html). Consume la API de `../01_auth_api` para registrar, iniciar sesión y proteger rutas con tokens.

## Requisitos
- Node.js 18+ y npm.
- API levantada en `http://localhost:4000` (puedes ajustar `VITE_API_URL` en `.env.local`).

## Qué incluye
- Servicios axios en `src/services` (cliente + auth).
- Store con Pinia que guarda token y perfil (`src/stores/user.js`).
- Rutas protegidas con Vue Router (`/panel`) y rutas de invitado (`/login`, `/register`).

## Puesta en marcha
1) API: `cd ../01_auth_api && npm install && npm run dev` (expone `http://localhost:4000`).
2) Front: en este directorio `npm install && npm run dev`.

Configura `VITE_API_URL` si la API corre en otra URL o puerto.
