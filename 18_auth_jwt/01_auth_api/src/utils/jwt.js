import jwt from 'jsonwebtoken'

export const generarToken = (userId) => {
    return jwt.sign(
        { uid: userId },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
    )
}