import { type IConfig, type TEnvironment } from '@/infra/config/config.types'
import { getConfig } from '@/infra/config/config.util'

export const config: IConfig = {
  ENV_NAME: getConfig<TEnvironment>('ENV_NAME'),
  PORT: +getConfig('PORT'),
}
