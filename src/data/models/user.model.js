import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'username is required'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  role: {
    type: String,
    default: 'USER_ROLE',
    emun: ['ADMIN_ROLE', 'USER_ROLE']
  }
})

export default model('User', UserSchema)
