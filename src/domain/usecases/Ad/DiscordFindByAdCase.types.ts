import { type IBaseHandler } from '@/domain/application/BaseHandler.types'
import { type IAd } from '@/domain/entities/AdEntity.types'

export interface IDiscordFindByAdUsecase
  extends IBaseHandler<DiscordFindByAdUsecaseNamespace.TResponse, DiscordFindByAdUsecaseNamespace.TRequest> {}

export namespace DiscordFindByAdUsecaseNamespace {
  export type TRequest = Pick<IAd, 'id'>
  export type TResponse = Pick<IAd, 'discord'>
}
