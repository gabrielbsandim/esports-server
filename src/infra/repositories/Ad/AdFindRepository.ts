import {
  type AdFindRepositoryNamespace,
  type IAdFindRepository,
} from '@/domain/repositories/Ad/AdFindRepository.types'
import { type Database } from '@/infra/database/db'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'

@injectable()
export class AdFindRepository implements IAdFindRepository {
  readonly dbInstance

  constructor(@inject(TYPES.Database) readonly db: Database) {
    this.dbInstance = db.getInstance()
  }

  handle = async ({
    id,
  }: AdFindRepositoryNamespace.TRequest): Promise<AdFindRepositoryNamespace.TResponse> => {
    const ad = await this.dbInstance.ad.findUniqueOrThrow({
      select: {
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        hourEnd: true,
        gameId: true,
        discord: true,
      },
      where: {
        id,
      },
    })

    return ad
  }
}
