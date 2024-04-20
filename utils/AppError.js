class AppError extends Error {
  constructor (message, statusCode = 400, extraProps = {}) {
    super(message)

    this.statusCode = statusCode
    this.isOperational = true
    this.extraProps = extraProps

    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = AppError
