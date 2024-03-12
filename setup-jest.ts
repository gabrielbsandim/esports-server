import 'reflect-metadata'

import { type Database } from '@/infra/database/db'
import { container, register } from '@/infra/di'
import { TYPES } from '@/infra/di/types'

register()

container.resolve<Database>(TYPES.Database)
