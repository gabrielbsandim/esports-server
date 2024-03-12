/* eslint-disable @typescript-eslint/naming-convention */
import { type Router } from 'express'

import { container } from '@/infra/di'
import { GameListUsecase } from '@/usecases/Game/GameListCase'

export const GameController = (router: Router) => {
  const gameListUsecase = container.resolve(GameListUsecase)

  router.get('/games', async (_request, response) => {
    const games = await gameListUsecase.handle()

    return response.status(200).json(games)
  })

  return router
}
