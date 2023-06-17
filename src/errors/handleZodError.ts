import { ZodError, ZodIssue } from 'zod';
import { IGenericResponse } from '../interfaces/common';
import { IGenericMessage } from '../interfaces/error';

const handleZodError = (error: ZodError): IGenericResponse => {
  const errors: IGenericMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleZodError;
