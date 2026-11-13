# TanStack Start unused `export *` re-export repro

Minimal project for https://github.com/TanStack/router/issues/8924.

`src/routes/__root.tsx` imports only `other` from `src/ui/index.ts`, but that barrel also does:

```ts
export * from "../console/Grid"
```

`Grid` is only reached through `React.lazy` from the orders routes. The expected output is that
`Grid` and its `heavy.ts` dependency land in a lazy `Grid-*.js` chunk. Instead, under
`@tanstack/react-start` + `@tanstack/react-router`, the `HEAVY_MARKER` string from `heavy.ts` is
also retained in the entry `index-*.js` chunk.

## Reproduce

```sh
pnpm install
pnpm build
grep -l HEAVY_MARKER dist/client/assets/*.js
```

Actual: the entry chunk `dist/client/assets/index-*.js` contains `HEAVY_MARKER`.

The same structure built with vanilla Vite drops `HEAVY_MARKER` entirely, so this is specific to
the TanStack Start build graph.

## Versions

- `@tanstack/react-start` 1.169.5
- `@tanstack/react-router` 1.170.46
- `vite` 8.3.8
- `react` / `react-dom` 19.3.1
