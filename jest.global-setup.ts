/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/naming-convention */
import 'reflect-metadata'
import { exec } from 'child_process'
import util from 'util'

import { config } from 'dotenv'

import { register } from '@/infra/di'

export default async () => {
  console.info('\nSetting up the test suite...')

  config({ path: '.env.test' })

  register()

  const execSync = util.promisify(exec)

  // await execSync(`${prismaBinary} migrate deploy`)
  await execSync('npx prisma migrate dev')

  console.info('Suite ready. Starting tests...\n')
}
