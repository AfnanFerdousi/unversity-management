import { Error } from 'mongoose';
import { IGenericErrorResponse } from '../interfaces/common';
import { IGenericMessage } from '../interfaces/error';

const handleCastError = (error: Error.CastError): IGenericErrorResponse => {
  // console.log(error)
  const errors: IGenericMessage[] = [
    { path: error.path, message: 'Invalid Id' },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid Id',
    errorMessages: errors,
  };
};

export default handleCastError;
