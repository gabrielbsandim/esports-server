import {
  type DiscordFindByAdUsecaseNamespace,
  type IDiscordFindByAdUsecase,
} from '@/domain/usecases/Ad/DiscordFindByAdCase.types'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'
import { type DiscordFindByAdRepository } from '@/infra/repositories/Ad/DiscordFindByAdRepository'

@injectable()
export class DiscordFindByAdUsecase implements IDiscordFindByAdUsecase {
  constructor(
    @inject(TYPES.DiscordFindByAdRepository)
    protected readonly discordFindByAdRepository: DiscordFindByAdRepository,
  ) {}

  public handle = async (
    input: DiscordFindByAdUsecaseNamespace.TRequest,
  ): Promise<DiscordFindByAdUsecaseNamespace.TResponse> => this.discordFindByAdRepository.handle(input)
}
