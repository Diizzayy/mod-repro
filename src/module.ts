import { defineNuxtModule, createResolver, addAutoImport, extendViteConfig } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  setup (_, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.build.transpile.push(resolve('runtime'), 'graphql')

    addAutoImport({ name: 'useSpaceX', from: resolve('runtime/spacex') })

    extendViteConfig((config) => {
      config.optimizeDeps?.include?.push('graphql-request')
    })
  }
})
