// Using default dist-custom-elements
// Bug 1. worker files need to be manually copied in `dist/assets`

import { defineCustomElementMyComponent } from 'stencil-workers';
defineCustomElementMyComponent();

// Using lazy loader
// Bug 1. worker files need to be manually copied in `dist/` instead of `dist/assets/`
// Bug 2. also worker files use webpack's dynamic import syntax which allows variables
//    in order for rollup to support that, we need to use another

// const { defineCustomElements } = await import('stencil-workers/loader');
// defineCustomElements();

