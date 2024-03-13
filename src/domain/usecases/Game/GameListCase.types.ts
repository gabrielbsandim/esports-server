import { type IBaseHandler } from '@/domain/application/BaseHandler.types'
import { type TGameListResponse } from '@/domain/entities/GameEntity.types'

export interface IGameListUsecase extends IBaseHandler<GameListUsecaseNamespace.TResponse, void> {}

export namespace GameListUsecaseNamespace {
  export type TResponse = TGameListResponse
}
