import { type IConfig } from '@/infra/config/config.types'

export function getConfig<T extends string>(configName: keyof IConfig): T {
  const config = process.env[configName]
  if (config === undefined) {
    throw new Error(`Missing config: "${configName}"`)
  }

  return config as T
}

export function getTestConfig(configName: string, defaultConfig: string) {
  return process.env[configName] ?? defaultConfig
}
