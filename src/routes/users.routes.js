import { Router } from 'express'
import { UserController } from '../controllers/user.controller.js'

export const usersRoutes = Router()

usersRoutes
  .get('/', UserController.getAllUsers)
  .get('/:username', UserController.findByUsername)
  .post('/', UserController.createUser)
  .put('/:username', UserController.updateUser)
  .delete('/:username', UserController.deleteUser)
