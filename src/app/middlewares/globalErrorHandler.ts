/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from 'express';
import config from '../../config';
import handleValidationError from '../../errors/handleValidationError';
import { IGenericMessage } from '../../interfaces/error';
import ApiError from '../../errors/ApiErrors';
import { errorLogger } from '../../shared/logger';
import { ZodError } from 'zod';
import handleZodError from '../../errors/handleZodError';
import handleCastError from '../../errors/handleCastError';

// global error handler
const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.env === 'development'
    ? console.log('😫 globalErrorHandler ~ ', error)
    : errorLogger.error('😫 globalErrorHandler ~ ', error);

  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessages: IGenericMessage[] = [];

  if (error?.name === 'ValidationError') {
    const simplifedError = handleValidationError(error);
    statusCode = simplifedError.statusCode;
    message = simplifedError.message;
    errorMessages = simplifedError.errorMessages;
  } else if (error?.name === 'CastError') {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifedError = handleZodError(error);
    statusCode = simplifedError.statusCode;
    message = simplifedError.message;
    errorMessages = simplifedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });
  next();
};

export default globalErrorHandler;
