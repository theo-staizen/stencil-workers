// This breaks because the default `npm init stencil` sets the default module export to "custom-elements/index.js"
// which will try to load 2 files that are never created.
// Workaround: Update stencil-workers/package.json to point the `module` to `dist/esm/index.js` instead of `custom-elements`
// then run `npm i -D ../stencil-workers` in webpack5
// import { defineCustomElement } from 'stencil-workers/dist/components/my-component';
// defineCustomElement()

// Loader should work fine with Webpack 5, because `import.meta.url` is now recognised
import { defineCustomElements } from 'stencil-workers/loader';
defineCustomElements();
