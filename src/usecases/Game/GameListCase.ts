import { type GameListUsecaseNamespace, type IGameListUsecase } from '@/domain/usecases/Game/GameList'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'
import { type GameListRepository } from '@/infra/repositories/Game/GameList'

@injectable()
export class GameListUsecase implements IGameListUsecase {
  constructor(
    @inject(TYPES.GameListRepository)
    protected readonly discordFindByAdRepository: GameListRepository,
  ) {}

  public handle = async (): Promise<GameListUsecaseNamespace.TResponse> =>
    this.discordFindByAdRepository.handle()
}
