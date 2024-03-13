/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { mock } from 'jest-mock-extended'

import { adCreateInputMock, adCreateOutputMock } from '@/__fixtures__/Ad/AdCreateMock'
import { gameCreateRequestMock } from '@/__fixtures__/Game/GameCreateMock'
import { type IAdCreateRepository } from '@/domain/repositories/Ad/AdCreateRepository.types'
import { container } from '@/infra/di'
import { AdCreateUsecase } from '@/usecases/Ad/AdCreateCase'
import { AdFindUsecase } from '@/usecases/Ad/AdFindCase'
import { GameCreateUsecase } from '@/usecases/Game/GameCreateCase'
import { convertHourStringToMinutes, convertMinutesToHourString } from '@/utils/ConvertHoursAndMinutes'

describe('AdCreateUsecase', () => {
  const repositoryMock = mock<IAdCreateRepository>()

  repositoryMock.handle.mockResolvedValue(adCreateOutputMock)

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

describe('AdCreateUsecase integrated tests', () => {
  it('should create Ad', async () => {
    const gameCreate = container.resolve(GameCreateUsecase)

    const createdGame = await gameCreate.handle(gameCreateRequestMock)

    const adCreate = container.resolve(AdCreateUsecase)
    const adFind = container.resolve(AdFindUsecase)

    const adCreated = await adCreate.handle({
      ...adCreateInputMock,
      gameId: createdGame.id,
    })

    const adFound = await adFind.handle({ id: adCreated.id })

    expect(adFound).toMatchObject({
      ...adCreateInputMock,
      gameId: createdGame.id,
      id: adCreated.id,
    })
  })
})
