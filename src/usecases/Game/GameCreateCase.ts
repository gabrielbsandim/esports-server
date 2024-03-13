import {
  type GameCreateUsecaseNamespace,
  type IGameCreateUsecase,
} from '@/domain/usecases/Game/GameCreateCase.types'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'
import { type GameCreateRepository } from '@/infra/repositories/Game/GameCreateRepository'

@injectable()
export class GameCreateUsecase implements IGameCreateUsecase {
  constructor(
    @inject(TYPES.GameCreateRepository)
    protected readonly gameCreateRepository: GameCreateRepository,
  ) {}

  public handle = async (
    input: GameCreateUsecaseNamespace.TRequest,
  ): Promise<GameCreateUsecaseNamespace.TResponse> => this.gameCreateRepository.handle(input)
}
