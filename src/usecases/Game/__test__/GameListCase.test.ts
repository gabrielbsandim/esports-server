/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { mock } from 'jest-mock-extended'

import { gameListCaseMock } from '@/__fixtures__/Game/GameListMock'
import { type IGameListRepository } from '@/domain/repositories/Game/GameListRepository.types'
import { GameListUsecase } from '@/usecases/Game/GameListCase'

const repositoryMock = mock<IGameListRepository>()

repositoryMock.handle.mockResolvedValue(gameListCaseMock)

describe('GameListUsecase', () => {
  it('should call repository with right params', async () => {
    const sut = new GameListUsecase(repositoryMock)

    await sut.handle()

    expect(repositoryMock.handle).toHaveBeenCalledWith()
  })

  it('should return games with right params', async () => {
    const sut = new GameListUsecase(repositoryMock)

    const games = await sut.handle()

    expect(games).toEqual(gameListCaseMock)
  })
})
