import { readFile } from 'fs/promises'
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'

describe('basic suite', async () => {
  const bundlePath = `../playground/.output/server/chunks${!(process.platform === 'win32') ? '/app' : ''}/server.mjs`

  const serverBundle = await readFile(fileURLToPath(new URL(bundlePath, import.meta.url)), 'utf8')

  it('external graphq-request', () => {
    expect(serverBundle).toContain('import { GraphQLClient } from \'graphql-request\';')
  })
})
