import { type IBaseHandler } from '@/domain/application/BaseHandler.types'
import { type IAdBusinessData, type IAd } from '@/domain/entities/AdEntity.types'

export interface IAdListByGameUsecase
  extends IBaseHandler<AdListByGameUsecaseNamespace.TResponse, AdListByGameUsecaseNamespace.TRequest> {}

export namespace AdListByGameUsecaseNamespace {
  export type TRequest = Pick<IAd, 'gameId'>
  export type TResponse = Array<Omit<IAdBusinessData, 'gameId' | 'discord'>>
}
