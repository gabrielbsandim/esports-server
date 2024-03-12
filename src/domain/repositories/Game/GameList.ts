import { type IBaseHandler } from '@/domain/application/BaseHandler'
import { type TGameListResponse } from '@/domain/entities/Game'
import { type IDbRepository } from '@/domain/repositories/Repository.types'

export interface IGameListRepository
  extends IBaseHandler<GameListRepositoryNamespace.TResponse, void>,
    IDbRepository {}

export namespace GameListRepositoryNamespace {
  export type TResponse = TGameListResponse
}
