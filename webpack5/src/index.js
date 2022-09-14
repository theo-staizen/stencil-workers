// Build/Serve fails because it is trying to load a file that does not exist
// No workaround, as this seems to be relative to import file, instead of dist
/*
Module not found: Error:
Can't resolve './assets/format.worker-51010d22.js' in 'path/to/stencil-workers/dist/components'
*/
// import { defineCustomElement } from 'stencil-workers/dist/components/my-component';
// defineCustomElement()

// Loader works fine with Webpack 5
import { defineCustomElements } from 'stencil-workers/loader';
defineCustomElements();
