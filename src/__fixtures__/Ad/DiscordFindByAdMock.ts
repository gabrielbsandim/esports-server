import { type DiscordFindByAdRepositoryNamespace } from '@/domain/repositories/Ad/DiscordFindByAd'
import { type DiscordFindByAdUsecaseNamespace } from '@/domain/usecases/Ad/DiscordFindByAd'

export const discordFindByAdCaseInput: DiscordFindByAdUsecaseNamespace.TRequest = {
  id: 'any id',
}

export const discordFindByAdRepositoryOutput: DiscordFindByAdRepositoryNamespace.TResponse = {
  discord: 'any discord',
}
