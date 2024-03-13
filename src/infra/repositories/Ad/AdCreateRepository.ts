import {
  type AdCreateRepositoryNamespace,
  type IAdCreateRepository,
} from '@/domain/repositories/Ad/AdCreateRepository.types'
import { type Database } from '@/infra/database/db'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'

@injectable()
export class AdCreateRepository implements IAdCreateRepository {
  readonly dbInstance

  constructor(@inject(TYPES.Database) readonly db: Database) {
    this.dbInstance = db.getInstance()
  }

  handle = async (
    input: AdCreateRepositoryNamespace.TRequest,
  ): Promise<AdCreateRepositoryNamespace.TResponse> => {
    const ad = await this.dbInstance.ad.create({
      data: input,
    })

    return ad
  }
}
