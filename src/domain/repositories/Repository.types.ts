import { type Database } from '@/infra/database/db'
import { type TDbInstance } from '@/infra/database/db.types'

export interface IDbRepository {
  readonly db: Database
  readonly dbInstance: TDbInstance
}
