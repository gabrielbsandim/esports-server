import {
  type AdListByGameRepositoryNamespace,
  type IAdListByGameRepository,
} from '@/domain/repositories/Ad/AdListByGameRepository.types'
import { type Database } from '@/infra/database/db'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'

@injectable()
export class AdListByGameRepository implements IAdListByGameRepository {
  readonly dbInstance

  constructor(@inject(TYPES.Database) readonly db: Database) {
    this.dbInstance = db.getInstance()
  }

  handle = async ({
    gameId,
  }: AdListByGameRepositoryNamespace.TRequest): Promise<AdListByGameRepositoryNamespace.TResponse> => {
    const ads = await this.dbInstance.ad.findMany({
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
