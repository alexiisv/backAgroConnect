import { sendError } from '../utils/response.util.js'
import { verifyToken } from '../utils/jwt.util.js'

export const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    return sendError(res, 401, 'La sesión expiró', 'El token no existe')
  }

  try {
    const payload = verifyToken(token, process.env.JWT_SECRET)
    req.jwtPayload = payload
    next()
  } catch (error) {
    return sendError(res, 401, 'La sesión expiró', 'El token expiró o no existe')
  }
}
