/* eslint-disable @typescript-eslint/naming-convention */
import {
  type GameListRepositoryNamespace,
  type IGameListRepository,
} from '@/domain/repositories/Game/GameListRepository.types'
import { type Database } from '@/infra/database/db'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'

@injectable()
export class GameListRepository implements IGameListRepository {
  readonly dbInstance

  constructor(@inject(TYPES.Database) readonly db: Database) {
    this.dbInstance = db.getInstance()
  }

  handle = async (): Promise<GameListRepositoryNamespace.TResponse> => {
    const ads = await this.dbInstance.game.findMany({
      include: {
        _count: {
          select: {
            ads: true,
          },
        },
      },
    })

    return ads
  }
}
