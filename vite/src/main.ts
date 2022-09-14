// Import using loader, works out of the box
import { defineCustomElements } from 'stencil-workers/loader';
defineCustomElements();

// Manual import of component
// Breaks during build
// import { defineCustomElement } from 'stencil-workers/dist/components/my-component';
// defineCustomElement();
