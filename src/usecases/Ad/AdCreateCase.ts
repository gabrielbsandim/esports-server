import { type IAdBusinessData } from '@/domain/entities/Ad'
import { type AdCreateUsecaseNamespace, type IAdCreateUsecase } from '@/domain/usecases/Ad/AdCreate'
import { inject, injectable } from '@/infra/di'
import { TYPES } from '@/infra/di/types'
import { type AdCreateRepository } from '@/infra/repositories/Ad/AdCreate'
import { convertHourStringToMinutes, convertMinutesToHourString } from '@/utils/ConvertHoursAndMinutes'

@injectable()
export class AdCreateUsecase implements IAdCreateUsecase {
  constructor(@inject(TYPES.AdCreateRepository) protected readonly adCreateRepository: AdCreateRepository) {}

  public handle = async (input: AdCreateUsecaseNamespace.TRequest): Promise<IAdBusinessData> => {
    const { hourStart, hourEnd, ...props } = await this.adCreateRepository.handle({
      ...input,
      hourStart: convertHourStringToMinutes(input.hourStart),
      hourEnd: convertHourStringToMinutes(input.hourEnd),
    })

    console.log(
      JSON.stringify(
        {
          ...props,
          hourStart: convertMinutesToHourString(hourStart),
          hourEnd: convertMinutesToHourString(hourEnd),
        },
        null,
        2,
      ),
    )

    return {
      ...props,
      hourStart: convertMinutesToHourString(hourStart),
      hourEnd: convertMinutesToHourString(hourEnd),
    }
  }
}
