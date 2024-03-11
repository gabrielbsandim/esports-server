/* eslint-disable @typescript-eslint/naming-convention */
import {
  type GameListRepositoryNamespace,
  type IGameListRepository,
} from '@/domain/repositories/Game/GameList'
import { type Database } from '@/infra/database/db'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'

@injectable()
export class GameListRepository implements IGameListRepository {
  protected readonly dbInstance

  constructor(@inject(TYPES.Database) protected readonly db: Database) {
    this.dbInstance = db.getInstance().game
  }

  handle = async (): Promise<GameListRepositoryNamespace.TResponse> => {
    const ads = await this.dbInstance.findMany({
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
