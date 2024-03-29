import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'workers',
  extras: {
    experimentalImportInjection: true
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true
    },
  ],
};
