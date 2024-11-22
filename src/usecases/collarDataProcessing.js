import { getIo } from '../infraestructura/websockets.js'
import { CollarService } from '../services/collar.service.js'
import { mapCollar } from '../utils/mapCollar.util.js'

export async function proccessCollarData (receivedTopic, message) {
  const data = JSON.parse(message).uplink_message

  try {
    if (data?.decoded_payload) {
      const collar = mapCollar(data)
      await CollarService.createCollar(collar)
      getIo().emit(`collar${collar.aid_vaca}DataUpdated`, collar)
      console.log(`Datos guardados correctamente: ${collar.aid_vaca}`)
    }
  } catch (err) {
    console.error('Error al guardar los datos')
  }
}
