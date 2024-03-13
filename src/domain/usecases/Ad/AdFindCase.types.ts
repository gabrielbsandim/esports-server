import { type IBaseHandler } from '@/domain/application/BaseHandler.types'
import { type IAdBusinessData } from '@/domain/entities/AdEntity.types'

export interface IAdFindUsecase
  extends IBaseHandler<AdFindUsecaseNamespace.TResponse, AdFindUsecaseNamespace.TRequest> {}

export namespace AdFindUsecaseNamespace {
  export type TRequest = Pick<IAdBusinessData, 'id'>
  export type TResponse = IAdBusinessData
}
