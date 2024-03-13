import { type TGameBusiness, type TGameCreateRequest } from '@/domain/entities/GameEntity.types'

export const gameCreateRequestMock: TGameCreateRequest = {
  bannerUrl: 'any banner url',
  title: 'any title',
}

export const gameCreateResponseMock: TGameBusiness = {
  ...gameCreateRequestMock,
  id: 'any id',
}
