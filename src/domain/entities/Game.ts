/* eslint-disable @typescript-eslint/naming-convention */
import { type IBaseEntity } from '@/domain/entities/Base'

export interface IGame {
  readonly id: string
  readonly title: string
  readonly bannerUrl: string
}

export type TGameDatabase = IGame & IBaseEntity

export type TGameListResponse = Array<Pick<IGame, 'id' | 'title' | 'bannerUrl'> & { _count: { ads: number } }>
