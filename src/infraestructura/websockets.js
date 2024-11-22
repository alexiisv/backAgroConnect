import { Server } from 'socket.io'

let io

function configureWebSocket (server) {
  io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  })

  console.log('Socket.io inicializado')

  io.on('connection', (socket) => {
    console.log('Usuario conectado')

    socket.on('disconnect', () => {
      console.log('Usuario desconectado')
    })
  })
}

function getIo () {
  if (!io) {
    throw new Error('Socket.io no inicializado')
  }
  return io
}

export {
  configureWebSocket,
  getIo
}
