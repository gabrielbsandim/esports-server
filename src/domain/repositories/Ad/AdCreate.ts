import { type IBaseHandler } from '@/domain/application/BaseHandler'
import { type IAd } from '@/domain/entities/Ad'
import { type IDbRepository } from '@/domain/repositories/Repository.types'

export interface IAdCreateRepository
  extends IBaseHandler<AdCreateRepositoryNamespace.TResponse, AdCreateRepositoryNamespace.TRequest>,
    IDbRepository {}

export namespace AdCreateRepositoryNamespace {
  export type TRequest = Omit<IAd, 'id'>
  export type TResponse = IAd
}
