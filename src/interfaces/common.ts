import { IGenericMessage } from './error'

export type IGenericResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericMessage[]
}
