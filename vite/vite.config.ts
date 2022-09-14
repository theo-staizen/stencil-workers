import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // stops vite from inlining small assets
    // to make sure it works for all file sizes
    assetsInlineLimit: 0,
  },
  plugins:
  [
    // WORKAROUND for Bug 2, dist-custom-elements
    // viteStaticCopy({
    //   targets: [
    //     { src: './node_modules/stencil-workers/dist/esm/*.worker*.js', dest: './assets' }
    //   ]
    // })
  ]
});
