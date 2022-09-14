// Import using loader, works for build, breaks for dev
import { defineCustomElements } from 'stencil-workers/loader';
defineCustomElements();

// Manual import of component
// Breaks during build, can fix with copy plugin
// Breaks during dev, cannot fix atm
// import { defineCustomElement } from 'stencil-workers/dist/components/my-component';
// defineCustomElement();
