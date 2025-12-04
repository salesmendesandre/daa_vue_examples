import express from 'express'
import routes from './routes/index.routes.js'
import { connectDB } from './config/db.js'
import { logger } from './middlewares/logger.middleware.js'

const app = express()
app.use(express.json())
app.use(logger)

connectDB()

app.use('/', routes)

app.listen(4000, () => {
  console.log('Servidor escuchando en http://localhost:4000')
})