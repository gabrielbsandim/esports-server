import {
  type AdListByGameRepositoryNamespace,
  type IAdListByGameRepository,
} from '@/domain/repositories/Ad/AdListByGame'
import { type Database } from '@/infra/database/db'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'

@injectable()
export class AdListByGameRepository implements IAdListByGameRepository {
  protected readonly dbInstance

  constructor(@inject(TYPES.Database) protected readonly db: Database) {
    this.dbInstance = db.getInstance().ad
  }

  handle = async ({
    gameId,
  }: AdListByGameRepositoryNamespace.TRequest): Promise<AdListByGameRepositoryNamespace.TResponse> => {
    const ads = await this.dbInstance.findMany({
      select: {
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        hourEnd: true,
      },
      where: {
        gameId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return ads
  }
}
