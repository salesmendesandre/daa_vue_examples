import { Router } from 'express'
import {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
} from '../controllers/producto.controller.js'

const router = Router()

router.get('/productos', obtenerProductos)
router.get('/productos/:id', obtenerProductoPorId)
router.post('/productos', crearProducto)
router.put('/productos/:id', actualizarProducto)
router.delete('/productos/:id', eliminarProducto)

export default router