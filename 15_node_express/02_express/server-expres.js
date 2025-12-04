// server-express.js
import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hola desde Express')
})

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en http://localhost:${PORT}`)
})