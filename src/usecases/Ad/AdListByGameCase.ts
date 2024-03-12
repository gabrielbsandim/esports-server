import {
  type AdListByGameUsecaseNamespace,
  type IAdListByGameUsecase,
} from '@/domain/usecases/Ad/AdListByGame'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'
import { type AdListByGameRepository } from '@/infra/repositories/Ad/AdListByGame'
import { convertMinutesToHourString } from '@/utils/ConvertHoursAndMinutes'

@injectable()
export class AdListByGameUsecase implements IAdListByGameUsecase {
  constructor(
    @inject(TYPES.AdListByGameRepository) protected readonly adListByGameRepository: AdListByGameRepository,
  ) {}

  public handle = async (
    input: AdListByGameUsecaseNamespace.TRequest,
  ): Promise<AdListByGameUsecaseNamespace.TResponse> => {
    const ads = await this.adListByGameRepository.handle(input)

    return ads.map(({ hourStart, hourEnd, ...props }) => ({
      ...props,
      hourStart: convertMinutesToHourString(hourStart),
      hourEnd: convertMinutesToHourString(hourEnd),
    }))
  }
}
