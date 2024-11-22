import { CollarRepository } from '../data/repositories/collar.repository.js'
import { sendError, sendSuccess } from '../utils/response.util.js'

export class CollarController {
  static async lastByAid (req, res) {
    const { aidCow } = req.params

    try {
      const collar = await CollarRepository.lastByAid(aidCow)
      return sendSuccess(res, collar)
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }

  static async currentDateToSelected (req, res) {
    const { date } = req.params

    try {
      const collars = await CollarRepository.currentDateToSelected(date)
      return sendSuccess(res, collars)
    } catch (error) {
      return sendError(res, 500, error.message)
    }
  }
}
