function sendError (res, code = 500, message = 'Error inesperado', details = null) {
  return res.status(code).json({
    message,
    details
  })
}

function sendSuccess (res, data, code = 200) {
  return res.status(code).json(data)
}

export { sendError, sendSuccess }
