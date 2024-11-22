import bcrypt from 'bcrypt'
import { generateToken } from '../utils/jwt.util.js'
import { sendError, sendSuccess } from '../utils/response.util.js'
import { UserRepository } from '../data/repositories/user.repository.js'

export class AuthController {
  static async login (req, res) {
    try {
      const { username, password } = req.body

      const user = await UserRepository.findByUsername(username)
      if (!user) {
        return sendError(res, 404, 'Datos incorrectos')
      }

      const match = await bcrypt.compare(password, user.password)
      if (!match) {
        return sendError(res, 401, 'Datos incorrectos')
      }

      const token = generateToken({
        payload: { username, role: user.role },
        expiresIn: '1h',
        jwtSecret: process.env.JWT_SECRET
      })

      return sendSuccess(res, {
        username: user.username,
        role: user.role,
        email: user.email,
        token,
        message: 'Usuario logueado'
      })
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }

  static async reconnect (req, res) {
    try {
      const username = req.jwtPayload.username

      const user = await UserRepository.findByUsername(username)
      if (!user) {
        return sendError(res, 404, 'El usuario no existe')
      }

      const token = generateToken({
        payload: { username, role: user.role },
        expiresIn: '1h',
        jwtSecret: process.env.JWT_SECRET
      })

      return sendSuccess(res, {
        username: user.username,
        role: user.role,
        email: user.email,
        token,
        message: 'Se ha reconectado el usuario'
      })
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }
}
