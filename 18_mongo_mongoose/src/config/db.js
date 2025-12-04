import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mi_api')
        console.log('MongoDB conectado correctamente')
    } catch (error) {
        console.error('Error conectando a MongoDB:', error)
    }
}