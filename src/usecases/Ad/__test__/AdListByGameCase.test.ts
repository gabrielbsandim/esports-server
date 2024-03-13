/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { mock } from 'jest-mock-extended'

import { adListByGameInputMock, adListByGameOutputMock } from '@/__fixtures__/Ad/AdListByGameMock'
import { type IAdListByGameRepository } from '@/domain/repositories/Ad/AdListByGameRepository.types'
import { AdListByGameUsecase } from '@/usecases/Ad/AdListByGameCase'
import { convertMinutesToHourString } from '@/utils/ConvertHoursAndMinutes'

const repositoryMock = mock<IAdListByGameRepository>()

repositoryMock.handle.mockResolvedValue(adListByGameOutputMock)

describe('AdListByGameUsecase', () => {
  it('should call repository with right params', async () => {
    const sut = new AdListByGameUsecase(repositoryMock)

    await sut.handle(adListByGameInputMock)

    expect(repositoryMock.handle).toHaveBeenCalledWith(adListByGameInputMock)
  })

  it('should return ads with right params', async () => {
    const sut = new AdListByGameUsecase(repositoryMock)

    const ads = await sut.handle(adListByGameInputMock)

    expect(ads).toEqual(
      adListByGameOutputMock.map(ad => ({
        ...ad,
        hourStart: convertMinutesToHourString(ad.hourStart),
        hourEnd: convertMinutesToHourString(ad.hourEnd),
      })),
    )
  })
})
