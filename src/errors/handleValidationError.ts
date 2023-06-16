import { Error } from 'mongoose'
import { IGenericMessage } from '../interfaces/error'
import { IGenericResponse } from '../interfaces/common'

const handleValidationError = (
  err: Error.ValidationError
): IGenericResponse => {
  const errors: IGenericMessage[] = Object.values(err.errors).map(
    (el: Error.ValidatorError | Error.CastError) => ({
      path: el?.path,
      message: el?.message,
    })
  )

  const statusCode = 400

  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  }
}

export default handleValidationError