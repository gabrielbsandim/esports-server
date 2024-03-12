import { type AdCreateRepositoryNamespace } from '@/domain/repositories/Ad/AdCreate'
import { type AdCreateUsecaseNamespace } from '@/domain/usecases/Ad/AdCreate'

export const adCreateInputMock: AdCreateUsecaseNamespace.TRequest = {
  gameId: 'any gameId',
  name: 'any name',
  yearsPlaying: 1,
  discord: 'any discord',
  weekDays: [1],
  hourStart: '18:00',
  hourEnd: '19:00',
  useVoiceChannel: true,
}

export const adCreateOutputMock: AdCreateRepositoryNamespace.TResponse = {
  gameId: 'any gameId',
  name: 'any name',
  yearsPlaying: 1,
  discord: 'any discord',
  weekDays: [1],
  hourStart: 1080,
  hourEnd: 1140,
  useVoiceChannel: true,
  id: 'any id',
}
