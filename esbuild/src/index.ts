// Import using loader
// Breaks during runtime, need to use `@chialab/esbuild-plugin-meta-url` to fix
import { defineCustomElements } from 'stencil-workers/loader';
defineCustomElements();

// Manual import of component
// Breaks during build
// import { defineCustomElement } from 'stencil-workers/dist/components/my-component';
// defineCustomElement();
