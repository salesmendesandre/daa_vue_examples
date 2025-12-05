import express from 'express'
import routes from './routes/index.routes.js'
import { connectDB } from './config/db.js'
import { logger } from './middlewares/logger.middleware.js'
import 'dotenv/config';
import cors from 'cors'

const app = express()
// Habilitar CORS
app.use(cors())
app.use(express.json())
app.use(logger)

connectDB()

app.use('/', routes)

app.listen(4000, () => {
  console.log('Servidor escuchando en http://localhost:4000')
})