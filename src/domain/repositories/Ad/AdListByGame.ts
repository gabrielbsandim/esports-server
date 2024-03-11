import { type IBaseHandler } from '@/domain/application/BaseHandler'
import { type IAd } from '@/domain/entities/Ad'

export interface IAdListByGameRepository
  extends IBaseHandler<AdListByGameRepositoryNamespace.TResponse, AdListByGameRepositoryNamespace.TRequest> {}

export namespace AdListByGameRepositoryNamespace {
  export type TRequest = Pick<IAd, 'gameId'>
  export type TResponse = Array<Omit<IAd, 'gameId' | 'discord'>>
}
