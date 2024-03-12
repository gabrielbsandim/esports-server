/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { mock } from 'jest-mock-extended'

import { adCreateInputMock, adCreateOutputMock } from '@/__fixtures__/Ad/AdCreateMock'
import { type IAdCreateRepository } from '@/domain/repositories/Ad/AdCreate'
import { AdCreateUsecase } from '@/usecases/Ad/AdCreateCase'
import { convertHourStringToMinutes, convertMinutesToHourString } from '@/utils/ConvertHoursAndMinutes'

const repositoryMock = mock<IAdCreateRepository>()

repositoryMock.handle.mockResolvedValue(adCreateOutputMock)

describe('AdCreateUsecase', () => {
  it('should call repository with right params', async () => {
    const sut = new AdCreateUsecase(repositoryMock)

    await sut.handle(adCreateInputMock)

    expect(repositoryMock.handle).toHaveBeenCalledWith({
      ...adCreateInputMock,
      hourStart: convertHourStringToMinutes(adCreateInputMock.hourStart),
      hourEnd: convertHourStringToMinutes(adCreateInputMock.hourEnd),
    })
  })

  it('should return created ad with right params', async () => {
    const sut = new AdCreateUsecase(repositoryMock)

    const ad = await sut.handle(adCreateInputMock)

    expect(ad).toEqual({
      ...adCreateOutputMock,
      hourStart: convertMinutesToHourString(adCreateOutputMock.hourStart),
      hourEnd: convertMinutesToHourString(adCreateOutputMock.hourEnd),
    })
  })
})
