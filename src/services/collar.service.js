import { CollarRepository } from '../data/repositories/collar.repository.js'

export class CollarService {
  static async createCollar (collarData) {
    return await CollarRepository.createCollar(collarData)
  }
}
