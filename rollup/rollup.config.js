import { nodeResolve } from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import copy from 'rollup-plugin-copy';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';


module.exports = {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [
    del({ targets: 'dist/*'}),
    nodeResolve({ jsnext: true }),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist/' },
        // WORKAROUND for Bug 2 (dist-custom-elements)
        // { src: 'node_modules/stencil-workers/dist/cjs/*.worker*.js', dest: 'dist/assets' }
      ]
    }),
    // BETTER WORKAROUND for Bug 1 (lazy loader)
    importMetaAssets()
  ]
};
