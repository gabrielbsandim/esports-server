/* eslint-disable @typescript-eslint/naming-convention */
import { type IBaseEntity } from '@/domain/entities/BaseEntity.types'

export interface IGame {
  readonly id: string
  readonly title: string
  readonly bannerUrl: string
}

export type TGameDatabase = IGame & IBaseEntity

export type TGameBusiness = Pick<IGame, 'id' | 'title' | 'bannerUrl'>

export type TGameListResponse = Array<TGameBusiness & { _count: { ads: number } }>

export type TGameCreateRequest = Pick<IGame, 'title' | 'bannerUrl'>
