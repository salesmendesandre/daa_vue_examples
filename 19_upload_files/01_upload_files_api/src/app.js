import express from 'express'
import cors from 'cors'
import indexRoutes from './routes/index.routes.js'
import uploadRoutes from './routes/upload.routes.js'

const app = express()

// Habilitar CORS (por defecto permite todo)
app.use(cors())

app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.use('/', indexRoutes)
app.use('/upload', uploadRoutes)

app.listen(4000, () => {
    console.log('Servidor escuchando en http://localhost:4000')
})
