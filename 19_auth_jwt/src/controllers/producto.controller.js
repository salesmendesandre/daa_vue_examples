import { Producto } from '../models/producto.model.js'

export const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = await Producto.create(req.body)
        res.status(201).json(nuevoProducto)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const obtenerProductos = async (_req, res) => {
    const productos = await Producto.find()
    res.json(productos)
}

export const obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id)
        if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' })
        }
        res.json(producto)
    } catch {
        res.status(400).json({ error: 'ID inválido' })
    }
}

export const actualizarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
        )
        if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' })
        }
        res.json(producto)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const eliminarProducto = async (req, res) => {
    const producto = await Producto.findByIdAndDelete(req.params.id)
    if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' })
    }
    res.json({ message: 'Producto eliminado' })
}