export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/login_FXCEdGUK.mjs').then(n => n.l);

export { page };
