// src/middlewares/logger.middleware.js
export const logger = (req, _res, next) => {
    console.log(`${req.method} ${req.originalUrl}`)
    next()
}