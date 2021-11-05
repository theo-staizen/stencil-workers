import { defineCustomElements } from 'stencil-workers';
defineCustomElements();

// when using dynamic imports, worker files need to be in `dist/` instead of `dist/assets/`
// (async function() {
//   const { defineCustomElements } = await import('stencil-workers/loader');
//   defineCustomElements();
// })()

