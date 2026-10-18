// src/routes/index.routes.js
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.json({ message: 'API funcionando correctamente' })
})

export default router