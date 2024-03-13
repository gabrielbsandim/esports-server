import { type IBaseEntity } from '@/domain/entities/BaseEntity.types'

export interface IAd {
  readonly id: string
  readonly gameId: string
  readonly name: string
  readonly yearsPlaying: number
  readonly discord: string
  readonly weekDays: number[]
  readonly hourStart: number
  readonly hourEnd: number
  readonly useVoiceChannel: boolean
}

export type TAdDatabase = IAd & IBaseEntity

export interface IAdBusinessData extends Omit<IAd, 'hourStart' | 'hourEnd'> {
  readonly hourStart: string
  readonly hourEnd: string
}
