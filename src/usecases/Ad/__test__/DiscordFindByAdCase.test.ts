/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { mock } from 'jest-mock-extended'

import {
  discordFindByAdCaseInput,
  discordFindByAdRepositoryOutput,
} from '@/__fixtures__/Ad/DiscordFindByAdMock'
import { type IDiscordFindByAdRepository } from '@/domain/repositories/Ad/DiscordFindByAdRepository.types'
import { DiscordFindByAdUsecase } from '@/usecases/Ad/DiscordFindByAdCase'

const repositoryMock = mock<IDiscordFindByAdRepository>()

repositoryMock.handle.mockResolvedValue(discordFindByAdRepositoryOutput)

describe('DiscordFindByAdUsecase', () => {
  it('should call repository with right params', async () => {
    const sut = new DiscordFindByAdUsecase(repositoryMock)

    await sut.handle(discordFindByAdCaseInput)

    expect(repositoryMock.handle).toHaveBeenCalledWith(discordFindByAdCaseInput)
  })

  it('should return with right discord params', async () => {
    const sut = new DiscordFindByAdUsecase(repositoryMock)

    const response = await sut.handle(discordFindByAdCaseInput)

    expect(response).toEqual(discordFindByAdRepositoryOutput)
  })
})
