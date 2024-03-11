/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod'

import { DEFAULT_ERROR_MESSAGES } from '@/gateway/middlewares/RequestValidation/defaultErrorMessages'

export const adCreateSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: DEFAULT_ERROR_MESSAGES.required,
      invalid_type_error: DEFAULT_ERROR_MESSAGES.string,
    }),
    yearsPlaying: z
      .number({
        required_error: DEFAULT_ERROR_MESSAGES.required,
        invalid_type_error: DEFAULT_ERROR_MESSAGES.number,
      })
      .min(0, DEFAULT_ERROR_MESSAGES.positiveNumber),
    discord: z.string({
      required_error: DEFAULT_ERROR_MESSAGES.required,
      invalid_type_error: DEFAULT_ERROR_MESSAGES.string,
    }),
    weekDays: z
      .array(
        z
          .number({
            invalid_type_error: DEFAULT_ERROR_MESSAGES.number,
          })
          .min(0, DEFAULT_ERROR_MESSAGES.invalid)
          .max(6, DEFAULT_ERROR_MESSAGES.invalid),
      )
      .min(1, DEFAULT_ERROR_MESSAGES.sendSome),
    hourStart: z.string({
      required_error: DEFAULT_ERROR_MESSAGES.required,
      invalid_type_error: DEFAULT_ERROR_MESSAGES.string,
    }),
    hourEnd: z.string({
      required_error: DEFAULT_ERROR_MESSAGES.required,
      invalid_type_error: DEFAULT_ERROR_MESSAGES.string,
    }),
    useVoiceChannel: z.boolean({
      required_error: DEFAULT_ERROR_MESSAGES.required,
      invalid_type_error: DEFAULT_ERROR_MESSAGES.boolean,
    }),
  }),
})
