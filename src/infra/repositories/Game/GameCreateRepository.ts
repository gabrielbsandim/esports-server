/* eslint-disable @typescript-eslint/naming-convention */
import {
  type GameCreateRepositoryNamespace,
  type IGameCreateRepository,
} from '@/domain/repositories/Game/GameCreateRepository.types'
import { type Database } from '@/infra/database/db'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'

@injectable()
export class GameCreateRepository implements IGameCreateRepository {
  readonly dbInstance

  constructor(@inject(TYPES.Database) readonly db: Database) {
    this.dbInstance = db.getInstance()
  }

  handle = async (
    input: GameCreateRepositoryNamespace.TRequest,
  ): Promise<GameCreateRepositoryNamespace.TResponse> => {
    const game = await this.dbInstance.game.create({
      data: input,
    })

    return game
  }
}
