import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import copy from 'rollup-plugin-copy'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // stops vite from inlining small assets
    // to make sure it works for all file sizes
    assetsInlineLimit: 0,
  },
  plugins:
  [
    // @ts-ignore
    // copy({
    // viteStaticCopy({
    //   targets: [
    //     // WORKAROUND for Bug 1, dist-custom-elements
    //     { src: './node_modules/stencil-workers/dist/esm/*.worker*.js', dest: './node_modules/.vite/deps/dist' }
    //   ]
    // })
  ]
});
