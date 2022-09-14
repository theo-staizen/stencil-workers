// Using lazy loader
// Bug 1. Runtime 404, because worker files not copied into dist,
// because rollup does not understand `new URL("...", import.meta.url)`
// Can be fixed by `@web/rollup-plugin-import-meta-assets`

const { defineCustomElements } = await import('stencil-workers/loader');
defineCustomElements();

// Manual import
// Bug 2. Build fails because worker file does not exist.
// Can be fixed by using rollup-copy-plugin to copy worker files from `stencil-workers/dist/esm` to `./dist/assets`

// import { defineCustomElement } from 'stencil-workers/dist/components/my-component';
// defineCustomElement();
