/* eslint-disable @typescript-eslint/naming-convention */
import { type GameListUsecaseNamespace } from '@/domain/usecases/Game/GameList'

export const gameListCaseMock: GameListUsecaseNamespace.TResponse = [
  {
    _count: {
      ads: 1,
    },
    bannerUrl: 'any bannerUrl',
    id: 'any id',
    title: 'any title',
  },
]
