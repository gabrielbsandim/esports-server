import { type IBaseHandler } from '@/domain/application/BaseHandler'
import { type IAd } from '@/domain/entities/Ad'

export interface IDiscordFindByAdRepository
  extends IBaseHandler<
    DiscordFindByAdRepositoryNamespace.TResponse,
    DiscordFindByAdRepositoryNamespace.TRequest
  > {}

export namespace DiscordFindByAdRepositoryNamespace {
  export type TRequest = Pick<IAd, 'id'>
  export type TResponse = Pick<IAd, 'discord'>
}
