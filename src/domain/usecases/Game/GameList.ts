import { type IBaseHandler } from '@/domain/application/BaseHandler'
import { type TGameListResponse } from '@/domain/entities/Game'

export interface IGameListUsecase extends IBaseHandler<GameListUsecaseNamespace.TResponse, void> {}

export namespace GameListUsecaseNamespace {
  export type TResponse = TGameListResponse
}
