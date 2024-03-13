import { type AdListByGameRepositoryNamespace } from '@/domain/repositories/Ad/AdListByGameRepository.types'
import { type AdListByGameUsecaseNamespace } from '@/domain/usecases/Ad/AdListByGameCase.types'

export const adListByGameInputMock: AdListByGameUsecaseNamespace.TRequest = {
  gameId: 'any gameId',
}

export const adListByGameOutputMock: AdListByGameRepositoryNamespace.TResponse = [
  {
    name: 'any name',
    yearsPlaying: 1,
    weekDays: [1],
    hourStart: 1080,
    hourEnd: 1140,
    useVoiceChannel: true,
    id: 'any id',
  },
]
