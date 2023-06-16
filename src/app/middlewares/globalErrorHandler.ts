import { NextFunction, Request, Response } from 'express'
import { error } from 'winston'
import config from '../../config'
import handleValidationError from '../../errors/handleValidationError'
import { IGenericMessage } from '../../interfaces/error'
import ApiError from '../../errors/ApiErrors'

// global error handler
const globalErrorHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500
  let message = 'Something went wrong'
  let errorMessages: IGenericMessage[] = []

  if (err?.name === 'ValidationError') {
    const simplifedError = handleValidationError(err)
    statusCode = simplifedError.statusCode
    message = simplifedError.message
    errorMessages = simplifedError.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })
  next()
}

export default globalErrorHandler
