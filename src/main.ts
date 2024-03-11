import 'reflect-metadata'
import { container, register } from '@/infra/di'
import { TYPES } from '@/infra/di/types'
import { type IHTTPServer } from '@/infra/httpServer/HttpServer.types'

register()
const httpServer = container.resolve<IHTTPServer>(TYPES.HttpServer)

async function start() {
  await httpServer.start()
}

start().catch(console.error)
