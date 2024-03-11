import {
  type DiscordFindByAdRepositoryNamespace,
  type IDiscordFindByAdRepository,
} from '@/domain/repositories/Ad/DiscordFindByAd'
import { type Database } from '@/infra/database/db'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'

@injectable()
export class DiscordFindByAdRepository implements IDiscordFindByAdRepository {
  protected readonly dbInstance

  constructor(@inject(TYPES.Database) protected readonly db: Database) {
    this.dbInstance = db.getInstance().ad
  }

  handle = async ({
    id,
  }: DiscordFindByAdRepositoryNamespace.TRequest): Promise<DiscordFindByAdRepositoryNamespace.TResponse> => {
    const ads = await this.dbInstance.findUniqueOrThrow({
      select: {
        discord: true,
      },
      where: {
        id,
      },
    })

    return ads
  }
}
