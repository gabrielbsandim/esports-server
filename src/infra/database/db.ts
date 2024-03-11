import { PrismaClient } from '@prisma/client'

import { type IDatabase } from '@/infra/database/db.types'
import { injectable } from '@/infra/di'

injectable()
export class Database implements IDatabase {
  private readonly prisma = new PrismaClient()

  public getInstance = () => this.prisma
}
