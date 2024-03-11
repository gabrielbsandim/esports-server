import { type AdCreateRepositoryNamespace, type IAdCreateRepository } from '@/domain/repositories/Ad/AdCreate'
import { type Database } from '@/infra/database/db'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'

@injectable()
export class AdCreateRepository implements IAdCreateRepository {
  protected readonly dbInstance

  constructor(@inject(TYPES.Database) protected readonly db: Database) {
    this.dbInstance = db.getInstance().ad
  }

  handle = async (
    input: AdCreateRepositoryNamespace.TRequest,
  ): Promise<AdCreateRepositoryNamespace.TResponse> => {
    const ad = await this.dbInstance.create({
      data: input,
    })

    return ad
  }
}
