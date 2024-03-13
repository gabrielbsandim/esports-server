export type TEnvironment = 'production' | 'development'

export interface IConfig {
  ENV_NAME: TEnvironment
  SERVER_PORT: number
}
