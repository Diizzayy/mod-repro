import { defineNuxtModule, createResolver, addAutoImport } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  setup (_, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.build.transpile.push(resolve('runtime'))

    addAutoImport({ name: 'useSpaceX', from: resolve('runtime/spacex') })
  }
})
