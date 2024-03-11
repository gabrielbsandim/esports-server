import { type IBaseHandler } from '@/domain/application/BaseHandler'
import { type IAd } from '@/domain/entities/Ad'

export interface IAdCreateRepository
  extends IBaseHandler<AdCreateRepositoryNamespace.TResponse, AdCreateRepositoryNamespace.TRequest> {}

export namespace AdCreateRepositoryNamespace {
  export type TRequest = Omit<IAd, 'id'>
  export type TResponse = IAd
}
