import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller.js'
import { jwtMiddleware } from '../middlewares/jwt.middleware.js'

export const authRoutes = Router()

authRoutes
  .post('/login', AuthController.login)
  .use(jwtMiddleware) // <-- Add authentication middleware
  .get('/reconnect', AuthController.reconnect)
