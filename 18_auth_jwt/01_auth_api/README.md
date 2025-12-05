# API de autenticación con JWT

Corresponde al backend del capítulo [Autenticación con JWT](https://salesmendesandre.github.io/daa_vue/main/vue/p6c18_04_auth_jwt.html). Expone endpoints de registro e inicio de sesión y protege rutas con middlewares basados en tokens.

## Requisitos
- Node.js 18+ y MongoDB disponible en `mongodb://localhost:27017/mi_api` (ajusta la URI en `src/config/db.js` si la cambias).
- Variable de entorno `JWT_SECRET` definida en un archivo `.env` en la raíz del proyecto.

## Cómo ejecutarla
```bash
npm install
npm run dev
```

La API escucha en `http://localhost:4000`. Los endpoints públicos y protegidos están en `src/routes/index.routes.js`; la firma/verificación de tokens se resuelve en `src/utils/jwt.js`.
