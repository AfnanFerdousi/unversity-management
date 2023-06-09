import { Error } from 'mongoose';
import { IGenericMessage } from '../interfaces/error';
import { IGenericErrorResponse } from '../interfaces/common';

const handleValidationError = (
  error: Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericMessage[] = Object.values(error.errors).map(
    (el: Error.ValidatorError | Error.CastError) => ({
      path: el?.path,
      message: el?.message,
    })
  );

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleValidationError;
