import { nodeResolve } from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import copy from 'rollup-plugin-copy';


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
        // WORKAROUND 1, static import
        { src: 'node_modules/stencil-workers/dist/cjs/*.worker*.js', dest: 'dist/assets' }
        // WORKAROUND 1, dynamic import
        // { src: 'node_modules/stencil-workers/dist/cjs/*.worker*.js', dest: 'dist/assets' }
      ]
    }),
    // WORKAROUND 2
    // dynamicImportVars(),
  ]
};
