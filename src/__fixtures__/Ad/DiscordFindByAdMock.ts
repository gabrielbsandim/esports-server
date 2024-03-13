import { type DiscordFindByAdRepositoryNamespace } from '@/domain/repositories/Ad/DiscordFindByAdRepository.types'
import { type DiscordFindByAdUsecaseNamespace } from '@/domain/usecases/Ad/DiscordFindByAdCase.types'

export const discordFindByAdCaseInput: DiscordFindByAdUsecaseNamespace.TRequest = {
  id: 'any id',
}

export const discordFindByAdRepositoryOutput: DiscordFindByAdRepositoryNamespace.TResponse = {
  discord: 'any discord',
}
