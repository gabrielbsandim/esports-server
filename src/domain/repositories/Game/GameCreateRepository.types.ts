import { type IBaseHandler } from '@/domain/application/BaseHandler.types'
import { type TGameBusiness, type TGameCreateRequest } from '@/domain/entities/GameEntity.types'
import { type IDbRepository } from '@/domain/repositories/Repository.types'

export interface IGameCreateRepository
  extends IBaseHandler<GameCreateRepositoryNamespace.TResponse, GameCreateRepositoryNamespace.TRequest>,
    IDbRepository {}

export namespace GameCreateRepositoryNamespace {
  export type TRequest = TGameCreateRequest
  export type TResponse = TGameBusiness
}
