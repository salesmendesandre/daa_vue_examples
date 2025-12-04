// src/app.js
import express from 'express'
import indexRoutes from './routes/index.routes.js'
import { loggerMiddleware } from './middlewares/logger.controller.js'

const app = express()
const PORT = 4000

app.use(express.json())
app.use(loggerMiddleware)
app.use('/', indexRoutes)

app.listen(PORT, () => {
    console.log(`API escuchando en http://localhost:${PORT}`)
})