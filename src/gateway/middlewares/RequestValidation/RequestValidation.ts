/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { type NextFunction, type Request, type Response } from 'express'
import { type AnyZodObject, type ZodError } from 'zod'

export const requestValidation =
  (schema: AnyZodObject) => async (request: Request, response: Response, nextFn: NextFunction) => {
    try {
      await schema.parseAsync(request)

      return nextFn()
    } catch (error) {
      const { errors } = error as ZodError

      const message = errors.map(({ message, path }) => `${path[1]} ${message}`).join(', ')

      return response.status(400).json({
        message,
      })
    }
  }
