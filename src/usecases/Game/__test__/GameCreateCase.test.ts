/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { mock } from 'jest-mock-extended'

import { gameCreateRequestMock, gameCreateResponseMock } from '@/__fixtures__/Game/GameCreateMock'
import { type IGameCreateRepository } from '@/domain/repositories/Game/GameCreateRepository.types'
import { GameCreateUsecase } from '@/usecases/Game/GameCreateCase'

const repositoryMock = mock<IGameCreateRepository>()

repositoryMock.handle.mockResolvedValue(gameCreateResponseMock)

describe('GameCreateUsecase', () => {
  it('should call repository with right params', async () => {
    const sut = new GameCreateUsecase(repositoryMock)

    await sut.handle(gameCreateRequestMock)

    expect(repositoryMock.handle).toHaveBeenCalledWith(gameCreateRequestMock)
  })

  it('should return created game with right params', async () => {
    const sut = new GameCreateUsecase(repositoryMock)

    const games = await sut.handle(gameCreateRequestMock)

    expect(games).toEqual(gameCreateResponseMock)
  })
})
