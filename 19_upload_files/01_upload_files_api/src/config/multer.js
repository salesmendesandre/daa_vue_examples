import multer from 'multer'
import crypto from 'node:crypto'
import path from 'node:path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(), 'uploads'))
    },
    filename: (req, file, cb) => {
        const unique = crypto.randomUUID()
        const ext = path.extname(file.originalname)
        cb(null, `${unique}${ext}`)
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true)
    } else {
        cb(new Error('Solo se permiten imágenes'))
    }
}

export const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 } // 2 MB
})
