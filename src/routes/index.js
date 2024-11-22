import { Router } from 'express'
import { authRoutes } from './auth.routes.js'
import { collaresRoutes } from './collares.routes.js'
import { usersRoutes } from './users.routes.js'
import { jwtMiddleware } from '../middlewares/jwt.middleware.js'

export const Routes = Router()

Routes
  .use('/auth', authRoutes)

Routes.use(jwtMiddleware)

Routes
  .use('/collares', collaresRoutes)
  .use('/users', usersRoutes)
