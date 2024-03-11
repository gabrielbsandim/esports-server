/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class HttpError extends Error {
  statusCode: number
  details?: Record<string, any>

  constructor(message: string, statusCode: number, details?: Record<string, any>) {
    super(message)
    this.statusCode = statusCode
    this.details = details
  }
}
