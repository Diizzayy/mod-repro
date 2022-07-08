## Reproduction

- Run `yarn prepack` to generate a production bundle.
- Run `yarn dev:build` to build the playground.
  - Build is successful on every platform.
- Run `yarn dev:start` to start.
  - Make request to playground server
  - Crashes on Windows only.

The crash appears to be caused by `graphql-request` being forcibly inlined in the nuxt production server bundle at `.output/server/chunks/server.mjs` which ultimately leads to the error below.

```sh
[nuxt] [request error] Cannot find module 'C:\Users\diizzayy\dev\bug\playground\.output\server\node_modules\graphql\language\parser' imported from C:\Users\diizzayy\dev\bug\playground\.output\server\chunks\server.mjs
Did you mean to import graphql/language/parser.js?
  at new NodeError (node:internal/errors:372:5)
  at finalizeResolution (node:internal/modules/esm/resolve:437:11)
  at moduleResolve (node:internal/modules/esm/resolve:1009:10)
  at defaultResolve (node:internal/modules/esm/resolve:1218:11)
  at ESMLoader.resolve (node:internal/modules/esm/loader:580:30)
  at ESMLoader.getModuleJob (node:internal/modules/esm/loader:294:18)
  at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:80:40)
  at link (node:internal/modules/esm/module_job:78:36)
```
