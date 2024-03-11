import { type IBaseHandler } from '@/domain/application/BaseHandler'
import { type TGameListResponse } from '@/domain/entities/Game'

export interface IGameListRepository extends IBaseHandler<GameListRepositoryNamespace.TResponse, void> {}

export namespace GameListRepositoryNamespace {
  export type TResponse = TGameListResponse
}
