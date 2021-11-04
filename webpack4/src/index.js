import { defineCustomElements } from 'stencil-workers/loader';

// WORKAROUND: COMMENT-OUT ABOVE, UNCOMMEND BELOW AND ALSO IN webpack.config.js
// import { defineCustomElements } from 'stencil-workers/loader/index.cjs';

defineCustomElements();
