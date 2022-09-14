import { build } from 'esbuild';
import metaUrlPlugin from '@chialab/esbuild-plugin-meta-url';
import { copy } from 'esbuild-plugin-copy';

await build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  format: 'esm',
  outfile: './dist/index.js',
  plugins: [
    copy({
      verbose: true,
      resolveFrom: 'out',
      assets: [
        {
          from: './src/index.html',
          to: './'
        },
        // {
        //   from: './node_modules/stencil-workers/dist/esm/*.worker-*.js',
        //   to: './dist/assets/' // this is currently not working correctly, due to a bug in the plugin
        // }
      ]
    }),
    metaUrlPlugin(),
  ],
}).catch(() => process.exit(1));
