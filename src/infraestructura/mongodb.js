import mongoose from 'mongoose'

export async function connectToDataBase () {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION)
    console.log('Conectado a la base de datos')
  } catch (err) {
    throw new Error('Error al conectarse a la base de datos')
  }
}
