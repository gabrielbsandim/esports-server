/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import cors from 'cors'
import express, { Router } from 'express'

import { AdController } from '@/gateway/controllers/Ad/AdController'
import { GameController } from '@/gateway/controllers/Game/GameController'
import { config } from '@/infra/config/config'
import { type IHTTPServer } from '@/infra/httpServer/HttpServer.types'

export class HttpServer implements IHTTPServer {
  private readonly httpServer
  private readonly router

  constructor() {
    this.httpServer = express()
    this.router = Router()

    this.httpServer.use(express.json())
    this.httpServer.use(express.urlencoded({ extended: true }))
    this.httpServer.use(cors())
  }

  private register() {
    this.httpServer.use(AdController(this.router))
    this.httpServer.use(GameController(this.router))
  }

  async start() {
    this.register()

    this.httpServer.listen(config.PORT)

    console.log(`listening on port: ${config.PORT}`)
  }
}
