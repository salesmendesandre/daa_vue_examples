import bcrypt from 'bcrypt'
import { User } from '../models/user.model.js'
import { generarToken } from '../utils/jwt.js'

export const register = async (req, res) => {
    try {
        const { email, password } = req.body

        const existe = await User.findOne({ email })
        if (existe) {
        return res.status(400).json({ error: 'El usuario ya existe' })
        }

        const hashed = await bcrypt.hash(password, 10)

        const user = await User.create({ email, password: hashed })

        res.status(201).json({ message: 'Usuario registrado', user })
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ error: 'Credenciales incorrectas' })

    const ok = await bcrypt.compare(password, user.password)
    if (!ok) return res.status(400).json({ error: 'Credenciales incorrectas' })

    const token = generarToken(user._id)

    res.json({ message: 'Login correcto', token })
}
