import { Database } from '@/infra/database/db'
import { Lifecycle, container } from '@/infra/di'
import { TYPES } from '@/infra/di/types'
import { HttpServer } from '@/infra/httpServer/HttpServer'
import { AdCreateRepository } from '@/infra/repositories/Ad/AdCreateRepository'
import { AdFindRepository } from '@/infra/repositories/Ad/AdFindRepository'
import { AdListByGameRepository } from '@/infra/repositories/Ad/AdListByGameRepository'
import { DiscordFindByAdRepository } from '@/infra/repositories/Ad/DiscordFindByAdRepository'
import { GameCreateRepository } from '@/infra/repositories/Game/GameCreateRepository'
import { GameListRepository } from '@/infra/repositories/Game/GameListRepository'
import { AdCreateUsecase } from '@/usecases/Ad/AdCreateCase'
import { AdFindUsecase } from '@/usecases/Ad/AdFindCase'
import { AdListByGameUsecase } from '@/usecases/Ad/AdListByGameCase'
import { DiscordFindByAdUsecase } from '@/usecases/Ad/DiscordFindByAdCase'
import { GameCreateUsecase } from '@/usecases/Game/GameCreateCase'
import { GameListUsecase } from '@/usecases/Game/GameListCase'

export const register = () => {
  container.register(TYPES.Database, Database, {
    lifecycle: Lifecycle.Singleton,
  })

  container.register(TYPES.HttpServer, HttpServer, {
    lifecycle: Lifecycle.Singleton,
  })

  // Ad repositories
  container.register(TYPES.AdCreateRepository, AdCreateRepository, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.AdFindRepository, AdFindRepository, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.AdListByGameRepository, AdListByGameRepository, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.DiscordFindByAdRepository, DiscordFindByAdRepository, {
    lifecycle: Lifecycle.Singleton,
  })

  // Ad usecases
  container.register(TYPES.AdCreateUsecase, AdCreateUsecase, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.AdFindUsecase, AdFindUsecase, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.AdListByGameUsecase, AdListByGameUsecase, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.DiscordFindByAdUsecase, DiscordFindByAdUsecase, {
    lifecycle: Lifecycle.Singleton,
  })

  // Game repositories
  container.register(TYPES.GameListRepository, GameListRepository, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.GameCreateRepository, GameCreateRepository, {
    lifecycle: Lifecycle.Singleton,
  })

  // Game usecases
  container.register(TYPES.GameListUsecase, GameListUsecase, {
    lifecycle: Lifecycle.Singleton,
  })
  container.register(TYPES.GameCreateUsecase, GameCreateUsecase, {
    lifecycle: Lifecycle.Singleton,
  })
}
