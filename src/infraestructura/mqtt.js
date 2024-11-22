import mqtt from 'mqtt'

const client = mqtt.connect((process.env.MQTT_URL),
  {
    username: process.env.MQTT_USER,
    password: process.env.MQTT_PASSWORD
  }
)

client.on('connect', () => {
  console.log('MQTT conectado')
})

function subscribeToTopic (topic, callback) {
  client.subscribe(topic, (err) => {
    if (err) {
      console.log('Error al suscribirse al topic', err)
    } else {
      console.log('Suscripción exitosa')
    }
  })
  client.on('message', callback)
}

export {
  client,
  subscribeToTopic
}
