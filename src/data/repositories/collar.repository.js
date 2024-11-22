import Collar from '../models/collar.model.js'

export class CollarRepository {
  static async createCollar (collarData) {
    try {
      const collar = new Collar(collarData)
      await collar.save()
      return collar
    } catch (err) {
      throw new Error('Error al crear el collar')
    }
  }

  static async lastByAid (aidCow) {
    try {
      const collar = await Collar.findOne({ aid_vaca: aidCow }).sort({ received_at: -1 })
      return collar
    } catch (err) {
      throw new Error('Error al obtener los datos')
    }
  }

  static async currentDateToSelected (date) {
    try {
      const collars = await Collar.find({ received_at: { $gte: new Date(date) } })
      return collars
    } catch (err) {
      throw new Error('Error al obtener los datos')
    }
  }
}
