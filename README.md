# Repro Repo for [Stencil#2731](https://github.com/ionic-team/stencil/issues/2731)

This repo contains a stencil lib with 1 component that uses a web worker
and 3 "apps" that use 3 different bundlers: Webpack, Rollup and Vite

## Stencil package

Builds `dist` and `dist-custom-elements` with `experimentalImportInjection` (needed for Rollup/Vite)

Bugs:
1. `dist-custom-elements` does not output worker files and tries to load files from `/dist/components/assets/`.
2. `dist/components/index.d.ts` missing `defineCustomElementMyComponent`, makes it hard to load
3. Build suggests to set `dist/index.js`as packageJson.module, but it is empty, which breaks top level imports

```sh
cd stencil-workers
npm i
```

## Webpack

Works out of the box if using `/loader`

Bugs:
1. Breaks during build if you try to manually import a component (see Stencil Bug#1)
    - this is non-trivial to fix, as the file path depends on the original file location, not the dist

```sh
cd webpack5
npm i
npm run build
npm run serve
```

## Rollup

Bugs:
1. Breaks during runtime (worker files not added to dist) if you try to use `/loader`
    - Need to use `@web/rollup-plugin-import-meta-assets` to fix
2. Breaks during runtime (worker files not added to dist) if you try to manually import a component
    - Breaks during build if you try to use `@web/rollup-plugin-import-meta-assets` (see Stencil Bug#1)
    - Need to use `rollup-plugin-copy` to manually copy workers to `dist/assets`

```sh
cd rollup
npm i
npm run build
npm run serve
```

## Vite

Build works out of the box if using `/loader`

Bugs:
1. Breaks during runtime when serviing via `npm run dev`
    - Tries to load files that do not exist
    - Even with a copy plugin, could not get this to work correctly


```sh
cd vite
npm i
npm run build
npm run serve
```

## Esbuild

Build works out of the box if using `/loader`

Bugs:
1. Breaks during runtime when using `/loader`
    - Need to use `@chialab/esbuild-plugin-meta-url` to make it work
2. Breaks during runtime when manually importing (`dist-custom-elements`)
    - Tries to load files that do not exist
    - Even with a copy plugin, could not get this to work correctly, because plugin has a bug


```sh
cd vite
npm i
npm run build
npm run serve
```
