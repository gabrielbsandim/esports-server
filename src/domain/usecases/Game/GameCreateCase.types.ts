import { type IBaseHandler } from '@/domain/application/BaseHandler.types'
import { type TGameBusiness, type TGameCreateRequest } from '@/domain/entities/GameEntity.types'

export interface IGameCreateUsecase
  extends IBaseHandler<GameCreateUsecaseNamespace.TResponse, GameCreateUsecaseNamespace.TRequest> {}

export namespace GameCreateUsecaseNamespace {
  export type TRequest = TGameCreateRequest
  export type TResponse = TGameBusiness
}
