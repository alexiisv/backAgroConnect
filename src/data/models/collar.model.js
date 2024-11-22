import { Schema, model } from 'mongoose'

const CollarSchema = new Schema({
  // Variables CO2
  aid_vaca: {
    type: String,
    required: [true, 'identifier is required'],
    unique: false
  },
  
  co2: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  
  temp: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },

  hum: {
    type: Number,
    required: [true, 'identifier is required'],
    unique: false
  },
  
  received_at: {
    type: Date,
    required: [true, 'identifier is required'],
    unique: false
  }
})

export default model('Collar', CollarSchema)
