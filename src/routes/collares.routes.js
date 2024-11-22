import { Router } from 'express'
import { CollarController } from '../controllers/collar.controller.js'

export const collaresRoutes = Router()

collaresRoutes
  .get('/lastByAid/:aidCow', CollarController.lastByAid)
  .get('/currentDateToSelected/:date', CollarController.currentDateToSelected)
