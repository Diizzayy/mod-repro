import { readFile } from 'fs/promises'
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

await setup({
  build: true,
  server: true,
  rootDir: fileURLToPath(new URL('../playground', import.meta.url))
})

describe('test suite', () => {
  it('renders ten (22) ships', async () => {
    const result = await $fetch('/')
    console.log(result)
    expect(result).not.toContain('<p>Count: 0</p>')
  }, 15000)
})

// describe('basic suite', async () => {
//   const bundlePath = `../playground/.output/server/chunks${!(process.platform === 'win32') ? '/app' : ''}/server.mjs`

//   const serverBundle = await readFile(fileURLToPath(new URL(bundlePath, import.meta.url)), 'utf8')

//   it('external graphq-request', () => {
//     expect(serverBundle).toContain('import { GraphQLClient } from \'graphql-request\';')
//   })
// })
