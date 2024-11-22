import jwt from 'jsonwebtoken'

export const generateToken = ({ payload, expiresIn, jwtSecret }) => {
  return jwt.sign(payload, jwtSecret, { expiresIn })
}

export const verifyToken = (token, jwtSecret) => {
  return jwt.verify(token, jwtSecret)
}
