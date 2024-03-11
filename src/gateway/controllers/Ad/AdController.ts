import { type Router } from 'express'

import { requestValidation } from '@/gateway/middlewares/RequestValidation/RequestValidation'
import { adCreateSchema } from '@/gateway/middlewares/RequestValidation/schemas/Ad/AdCreate'
import { container } from '@/infra/di'
import { AdCreateUsecase } from '@/usecases/Ad/AdCreate'
import { AdListByGameUsecase } from '@/usecases/Ad/AdListByGame'
import { DiscordFindByAdUsecase } from '@/usecases/Ad/DiscordFindByAd'

export const AdController = (router: Router) => {
  const adCreateUsecase = container.resolve(AdCreateUsecase)
  const adListByGameUsecase = container.resolve(AdListByGameUsecase)
  const discordFindByAdUsecase = container.resolve(DiscordFindByAdUsecase)

  router.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id

    const ads = await adListByGameUsecase.handle({ gameId })

    return response.status(200).json(ads)
  })

  router.post('/games/:id/ads', requestValidation(adCreateSchema), async (request, response) => {
    const gameId = request.params.id
    const { name, yearsPlaying, discord, weekDays, hourStart, hourEnd, useVoiceChannel } = request.body

    const createdAd = await adCreateUsecase.handle({
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourStart,
      hourEnd,
      useVoiceChannel,
      gameId,
    })

    return response.status(201).json(createdAd)
  })

  router.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id

    const discord = await discordFindByAdUsecase.handle({ id: adId })

    return response.status(201).json(discord)
  })

  return router
}
