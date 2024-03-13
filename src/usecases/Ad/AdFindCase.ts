import { type IAdBusinessData } from '@/domain/entities/AdEntity.types'
import { type AdFindUsecaseNamespace, type IAdFindUsecase } from '@/domain/usecases/Ad/AdFindCase.types'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'
import { type AdFindRepository } from '@/infra/repositories/Ad/AdFindRepository'
import { convertMinutesToHourString } from '@/utils/ConvertHoursAndMinutes'

@injectable()
export class AdFindUsecase implements IAdFindUsecase {
  constructor(@inject(TYPES.AdFindRepository) protected readonly adFindRepository: AdFindRepository) {}

  public handle = async (input: AdFindUsecaseNamespace.TRequest): Promise<IAdBusinessData> => {
    const { hourStart, hourEnd, ...props } = await this.adFindRepository.handle(input)

    return {
      ...props,
      hourStart: convertMinutesToHourString(hourStart),
      hourEnd: convertMinutesToHourString(hourEnd),
    }
  }
}
