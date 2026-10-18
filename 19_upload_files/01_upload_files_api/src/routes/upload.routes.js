import { Router } from 'express'
import { upload } from '../config/multer.js'
import { subirImagen } from '../controllers/upload.controller.js'

const router = Router()

router.post('/imagen', upload.single('imagen'), subirImagen)

export default router