# CRUD de Producto con MongoDB y Mongoose

Proyecto asociado al capítulo [Entidad Producto con MongoDB y Mongoose](https://salesmendesandre.github.io/daa_vue/main/vue/p6c17_producto_mongoose.html).

## Qué incluye
- API Express que expone `/productos` con operaciones CRUD.
- Conexión a MongoDB vía Mongoose y logger de peticiones en `middlewares/logger.middleware.js`.
- Esquema y modelo de Producto en `src/models/producto.model.js`.

## Puesta en marcha
1. Ten MongoDB corriendo en `mongodb://localhost:27017/mi_api` (ajusta la URI en `src/config/db.js` si usas otro host/puerto).
2. Instala dependencias y arranca el servidor:  
   ```bash
   npm install
   npm run dev
   ```
3. La API queda disponible en `http://localhost:4000`. Prueba los endpoints con Thunder Client o similar.
