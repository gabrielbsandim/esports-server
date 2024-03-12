import { type PrismaClient } from '@prisma/client'

export type TDbInstance = PrismaClient

export interface IDatabase {
  getInstance: () => PrismaClient
}
