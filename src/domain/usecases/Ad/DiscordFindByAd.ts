import { type IBaseHandler } from '@/domain/application/BaseHandler'
import { type IAd } from '@/domain/entities/Ad'

export interface IDiscordFindByAdUsecase
  extends IBaseHandler<DiscordFindByAdUsecaseNamespace.TResponse, DiscordFindByAdUsecaseNamespace.TRequest> {}

export namespace DiscordFindByAdUsecaseNamespace {
  export type TRequest = Pick<IAd, 'id'>
  export type TResponse = Pick<IAd, 'discord'>
}
