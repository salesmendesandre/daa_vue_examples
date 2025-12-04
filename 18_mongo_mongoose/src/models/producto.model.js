import mongoose from 'mongoose'

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 3
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    categoria: {
        type: String,
        default: 'general'
    },
    creadoEn: {
        type: Date,
        default: Date.now
    }
})

export const Producto = mongoose.model('Producto', productoSchema)