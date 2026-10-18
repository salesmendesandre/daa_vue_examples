// src/middlewares/logger.middleware.js
export const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}