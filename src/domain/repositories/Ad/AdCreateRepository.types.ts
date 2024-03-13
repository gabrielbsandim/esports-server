import { type IBaseHandler } from '@/domain/application/BaseHandler.types'
import { type IAd } from '@/domain/entities/AdEntity.types'
import { type IDbRepository } from '@/domain/repositories/Repository.types'

export interface IAdCreateRepository
  extends IBaseHandler<AdCreateRepositoryNamespace.TResponse, AdCreateRepositoryNamespace.TRequest>,
    IDbRepository {}

export namespace AdCreateRepositoryNamespace {
  export type TRequest = Omit<IAd, 'id'>
  export type TResponse = IAd
}
