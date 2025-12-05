import { Router } from 'express'
import { register, login } from '../controllers/auth.controller.js'
import { authMiddleware } from '../middlewares/auth.js'
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

// Público
router.post('/auth/register', register)
router.post('/auth/login', login)

// Protegido
router.get('/perfil', authMiddleware, (req, res) => {
    res.json({ message: 'Perfil del usuario', user: req.user })
})

export default router