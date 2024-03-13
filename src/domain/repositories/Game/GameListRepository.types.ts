import { type IBaseHandler } from '@/domain/application/BaseHandler.types'
import { type TGameListResponse } from '@/domain/entities/GameEntity.types'
import { type IDbRepository } from '@/domain/repositories/Repository.types'

export interface IGameListRepository
  extends IBaseHandler<GameListRepositoryNamespace.TResponse, void>,
    IDbRepository {}

export namespace GameListRepositoryNamespace {
  export type TResponse = TGameListResponse
}
