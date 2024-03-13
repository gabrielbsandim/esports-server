import { type IBaseHandler } from '@/domain/application/BaseHandler.types'
import { type IAd } from '@/domain/entities/AdEntity.types'
import { type IDbRepository } from '@/domain/repositories/Repository.types'

export interface IAdFindRepository
  extends IBaseHandler<AdFindRepositoryNamespace.TResponse, AdFindRepositoryNamespace.TRequest>,
    IDbRepository {}

export namespace AdFindRepositoryNamespace {
  export type TRequest = Pick<IAd, 'id'>
  export type TResponse = IAd
}
