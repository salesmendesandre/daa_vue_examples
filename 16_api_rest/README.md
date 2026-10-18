# API REST de productos en memoria

Proyecto asociado al capítulo [¿Qué es una API REST?](https://salesmendesandre.github.io/daa_vue/main/vue/p6c16_api_rest.html) del libro **Desarrollo de Aplicaciones Multiplataforma con Vue**.

## Qué incluye
- Servidor Express en `server.js` con `express.json()` para leer cuerpos JSON.
- CRUD completo de productos guardados en un array en memoria (los datos se pierden al reiniciar).

| Método | Ruta | Acción |
| --- | --- | --- |
| `GET` | `/productos` | Lista todos los productos |
| `GET` | `/productos/:id` | Devuelve un producto o `404` |
| `POST` | `/productos` | Crea un producto |
| `PUT` | `/productos/:id` | Actualiza un producto |
| `DELETE` | `/productos/:id` | Elimina un producto |

## Puesta en marcha
```bash
npm install
npm run dev
```

La API queda disponible en `http://localhost:4000`. Prueba los endpoints con Thunder Client, Postman o `curl`.
