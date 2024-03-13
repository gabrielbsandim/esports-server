import {
  type GameListUsecaseNamespace,
  type IGameListUsecase,
} from '@/domain/usecases/Game/GameListCase.types'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'
import { type GameListRepository } from '@/infra/repositories/Game/GameListRepository'

@injectable()
export class GameListUsecase implements IGameListUsecase {
  constructor(
    @inject(TYPES.GameListRepository)
    protected readonly gameListRepository: GameListRepository,
  ) {}

  public handle = async (): Promise<GameListUsecaseNamespace.TResponse> => this.gameListRepository.handle()
}
