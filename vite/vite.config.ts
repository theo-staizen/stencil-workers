import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import copy from 'rollup-plugin-copy'


// https://vitejs.dev/config/
export default defineConfig({
  plugins:
  [
    // @ts-ignore
    // copy({
    // viteStaticCopy({
    //   targets: [
    //     // WORKAROUND for Bug 1, dist-custom-elements
    //     { src: './node_modules/stencil-workers/dist/esm/*.worker*.js', dest: 'assets' }
    //     // WORKAROUND for Bug 1, lazy loader
    //     // { src: 'node_modules/stencil-workers/dist/esm/*.worker*.js', dest: 'dist' }
    //   ]
    // })
  ],
  // server: {
  //   fs: {
  //     allow: ['..'] // required because stencil-workers is installed via relative path
  //   }
  // }
});
