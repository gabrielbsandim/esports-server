import { Database } from '@/infra/database/db'
import { Lifecycle, container } from '@/infra/di'
import { TYPES } from '@/infra/di/types'
import { HttpServer } from '@/infra/httpServer/HttpServer'
import { AdCreateRepository } from '@/infra/repositories/Ad/AdCreate'
import { AdListByGameRepository } from '@/infra/repositories/Ad/AdListByGame'
import { DiscordFindByAdRepository } from '@/infra/repositories/Ad/DiscordFindByAd'
import { GameListRepository } from '@/infra/repositories/Game/GameList'
import { AdCreateUsecase } from '@/usecases/Ad/AdCreateCase'
import { AdListByGameUsecase } from '@/usecases/Ad/AdListByGameCase'
import { DiscordFindByAdUsecase } from '@/usecases/Ad/DiscordFindByAdCase'
import { GameListUsecase } from '@/usecases/Game/GameListCase'

export const register = () => {
  container.register(TYPES.Database, Database, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.HttpServer, HttpServer, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.AdCreateRepository, AdCreateRepository, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.AdListByGameRepository, AdListByGameRepository, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.DiscordFindByAdRepository, DiscordFindByAdRepository, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.GameListRepository, GameListRepository, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.AdCreateUsecase, AdCreateUsecase, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.AdListByGameUsecase, AdListByGameUsecase, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.DiscordFindByAdUsecase, DiscordFindByAdUsecase, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.GameListUsecase, GameListUsecase, {
    lifecycle: Lifecycle.Singleton,
  })
}
