import bcrypt from 'bcrypt'
import { UserRepository } from '../data/repositories/user.repository.js'
import { sendError, sendSuccess } from '../utils/response.util.js'

export class UserController {
  static async createUser (req, res) {
    const { username, email, password, role } = req.body

    try {
      const userExists = await UserRepository.findByUsername(username)
      if (userExists) {
        return sendError(res, 400, 'El usuario ya existe')
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      const user = await UserRepository.createUser({
        username,
        email,
        password: hashedPassword,
        role
      })
      return sendSuccess(res, { message: `Usuario ${user.username} registrado` }, 201)
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }

  static async findByUsername (req, res) {
    const { username } = req.params

    try {
      const user = await UserRepository.findByUsername(username)
      return sendSuccess(res, user)
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }

  static async getAllUsers (_, res) {
    try {
      const users = await UserRepository.getAllUsers()
      return sendSuccess(res, users)
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }

  static async updateUser (req, res) {
    const { username } = req.params
    const { email, roles } = req.body

    try {
      const user = await UserRepository.findByUsername(username)
      if (!user) {
        return sendError(res, 404, 'El usuario no existe')
      }

      const updatedUser = await UserRepository.updateUser(username, { email, roles })
      return sendSuccess(res, updatedUser)
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }

  static async deleteUser (req, res) {
    const { username } = req.params

    try {
      const user = await UserRepository.findByUsername(username)
      if (!user) {
        return sendError(res, 404, 'El usuario no existe')
      }

      await UserRepository.deleteUser(username)
      return sendSuccess(res, { message: 'Usuario eliminado' })
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }
}
