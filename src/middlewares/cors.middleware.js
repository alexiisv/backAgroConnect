import cors from 'cors'

export const corsMiddleware = () => cors({
  origin: (_, callback) => {
    return callback(null, true)
  }
})

/*
(origin, callback) => {
    if (!origin || acceptedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por CORS: ', origin))
    }
  }
*/
