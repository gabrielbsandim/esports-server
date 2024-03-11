import { type PrismaClient } from '@prisma/client'

export interface IDatabase {
  getInstance: () => PrismaClient
}
