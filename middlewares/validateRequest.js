const AppError = require('../utils/AppError')

/**
 *
 * @param {import('yup').Schema} schema
 * @returns
 */
module.exports = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
      usuario: req.usuario
    })

    const { body, query, params, usuario } = await schema.cast({
      body: req.body,
      query: req.query,
      params: req.params,
      usuario: req.usuario
    })

    req.body = body
    req.query = query
    req.params = params
    req.usuario = usuario

    return next()
  } catch (err) {
    return next(new AppError(err.message))
  }
}