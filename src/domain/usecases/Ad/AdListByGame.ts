import { type IBaseHandler } from '@/domain/application/BaseHandler'
import { type IAdBusinessData, type IAd } from '@/domain/entities/Ad'

export interface IAdListByGameUsecase
  extends IBaseHandler<AdListByGameUsecaseNamespace.TResponse, AdListByGameUsecaseNamespace.TRequest> {}

export namespace AdListByGameUsecaseNamespace {
  export type TRequest = Pick<IAd, 'gameId'>
  export type TResponse = Array<Omit<IAdBusinessData, 'gameId' | 'discord'>>
}
