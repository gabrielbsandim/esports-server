import { type IBaseHandler } from '@/domain/application/BaseHandler.types'
import { type IAd } from '@/domain/entities/AdEntity.types'
import { type IDbRepository } from '@/domain/repositories/Repository.types'

export interface IDiscordFindByAdRepository
  extends IBaseHandler<
      DiscordFindByAdRepositoryNamespace.TResponse,
      DiscordFindByAdRepositoryNamespace.TRequest
    >,
    IDbRepository {}

export namespace DiscordFindByAdRepositoryNamespace {
  export type TRequest = Pick<IAd, 'id'>
  export type TResponse = Pick<IAd, 'discord'>
}
