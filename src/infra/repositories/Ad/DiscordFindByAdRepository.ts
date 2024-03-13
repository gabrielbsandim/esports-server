import {
  type DiscordFindByAdRepositoryNamespace,
  type IDiscordFindByAdRepository,
} from '@/domain/repositories/Ad/DiscordFindByAdRepository.types'
import { type Database } from '@/infra/database/db'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'

@injectable()
export class DiscordFindByAdRepository implements IDiscordFindByAdRepository {
  readonly dbInstance

  constructor(@inject(TYPES.Database) readonly db: Database) {
    this.dbInstance = db.getInstance()
  }

  handle = async ({
    id,
  }: DiscordFindByAdRepositoryNamespace.TRequest): Promise<DiscordFindByAdRepositoryNamespace.TResponse> => {
    const ads = await this.dbInstance.ad.findUniqueOrThrow({
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
