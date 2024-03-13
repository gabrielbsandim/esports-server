import { type AdCreateRepositoryNamespace } from '@/domain/repositories/Ad/AdCreateRepository.types'
import { type AdCreateUsecaseNamespace } from '@/domain/usecases/Ad/AdCreateCase.types'

export const adCreateInputMock: AdCreateUsecaseNamespace.TRequest = {
  gameId: '7c6e7835-fadd-4f76-99e2-99ed193949cb',
  name: 'any name',
  yearsPlaying: 1,
  discord: 'any discord',
  weekDays: [1],
  hourStart: '18:00',
  hourEnd: '19:00',
  useVoiceChannel: true,
}

export const adCreateOutputMock: AdCreateRepositoryNamespace.TResponse = {
  gameId: '7c6e7835-fadd-4f76-99e2-99ed193949cb',
  name: 'any name',
  yearsPlaying: 1,
  discord: 'any discord',
  weekDays: [1],
  useVoiceChannel: true,
  hourStart: 1080,
  hourEnd: 1140,
  id: 'any id',
}
