/* eslint-disable @typescript-eslint/naming-convention */
import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  clearMocks: true,
  rootDir: '.',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  verbose: true,
  collectCoverageFrom: ['src'],
  testPathIgnorePatterns: ['dist'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}

export default config
