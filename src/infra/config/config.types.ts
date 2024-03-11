export type TEnvironment = 'production' | 'development'

export interface IConfig {
  ENV_NAME: TEnvironment
  PORT: number
}
