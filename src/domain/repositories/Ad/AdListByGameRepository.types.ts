import { type IBaseHandler } from '@/domain/application/BaseHandler.types'
import { type IAd } from '@/domain/entities/AdEntity.types'
import { type IDbRepository } from '@/domain/repositories/Repository.types'

export interface IAdListByGameRepository
  extends IBaseHandler<AdListByGameRepositoryNamespace.TResponse, AdListByGameRepositoryNamespace.TRequest>,
    IDbRepository {}

export namespace AdListByGameRepositoryNamespace {
  export type TRequest = Pick<IAd, 'gameId'>
  export type TResponse = Array<Omit<IAd, 'gameId' | 'discord'>>
}
