/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpError } from '@/gateway/errors/HttpError'

export class RequestValidationError extends HttpError {
  constructor(message: string, details?: Record<string, any>) {
    super(message, 400, details)
  }
}
