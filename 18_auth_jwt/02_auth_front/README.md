# Autenticación con API propia (Vue 3 + Vite)

El proyecto ahora usa la API localizada en `../18_auth_jwt` para registro y login con JWT. Se eliminó Firebase y todo el flujo pasa por peticiones HTTP con axios y tokens almacenados en `localStorage`.

## Requisitos
- Node.js 18+ y npm.
- API levantada en `http://localhost:4000` (puedes ajustar `VITE_API_URL` en `.env.local`).

## Qué incluye
- Servicios axios en `src/services` (cliente + auth).
- Store con Pinia que guarda token y perfil (`src/stores/user.js`).
- Rutas protegidas con Vue Router (`/panel`) y rutas de invitado (`/login`, `/register`).

## Puesta en marcha
1) API: `cd ../18_auth_jwt && npm install && npm run dev` (expone `http://localhost:4000`).
2) Front: en este directorio `npm install && npm run dev`.

Configura `VITE_API_URL` si la API corre en otra URL o puerto.
