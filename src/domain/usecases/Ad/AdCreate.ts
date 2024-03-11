import { type IBaseHandler } from '@/domain/application/BaseHandler'
import { type IAdBusinessData } from '@/domain/entities/Ad'

export interface IAdCreateUsecase
  extends IBaseHandler<AdCreateUsecaseNamespace.TResponse, AdCreateUsecaseNamespace.TRequest> {}

export namespace AdCreateUsecaseNamespace {
  export type TRequest = Omit<IAdBusinessData, 'id'>
  export type TResponse = IAdBusinessData
}
