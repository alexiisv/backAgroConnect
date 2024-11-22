import express, { json } from 'express'
import http from 'http'
import 'dotenv/config'
import { corsMiddleware } from './middlewares/cors.middleware.js'
import { connectToDataBase } from './infraestructura/mongodb.js'
import { configureWebSocket } from './infraestructura/websockets.js'
import { proccessCollarData } from './usecases/collarDataProcessing.js'
import { subscribeToTopic } from './infraestructura/mqtt.js'
import { Routes } from './routes/index.js'

const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)

app.disable('x-powered-by')
app.use(corsMiddleware())
app.use(json())

await connectToDataBase()

subscribeToTopic([process.env.MQTT_TOPIC], proccessCollarData)

configureWebSocket(server)

app.use('/api', Routes)

server.listen(PORT, async () => {
  console.log(`Server escuchando en el puerto: ${PORT}`)
})
