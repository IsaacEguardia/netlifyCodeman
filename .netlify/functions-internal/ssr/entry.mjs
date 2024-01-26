import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_SawoZb5m.mjs';

const _page0  = () => import('./chunks/generic_l6cz2EcP.mjs');
const _page1  = () => import('./chunks/about_OdvhZsyf.mjs');
const _page2  = () => import('./chunks/_category__WXlBfq3F.mjs');
const _page3  = () => import('./chunks/index_Ow8rTW6Q.mjs');
const _page4  = () => import('./chunks/_.._A0w3xMSr.mjs');
const _page5  = () => import('./chunks/_.._z7SMiOiw.mjs');
const _page6  = () => import('./chunks/faq_6aiDY85G.mjs');
const _page7  = () => import('./chunks/index_-oHbS8cS.mjs');
const _page8  = () => import('./chunks/_.._tY7-Rezy.mjs');
const _page9  = () => import('./chunks/index_PrPDNMG-.mjs');
const _page10  = () => import('./chunks/login_5UB_LCIO.mjs');
const _page11  = () => import('./chunks/Passwordseguros_FQnI8dmT.mjs');
const _page12  = () => import('./chunks/pricing_lnBsT-t3.mjs');
const _page13  = () => import('./chunks/register_gLMA3gpT.mjs');
const _page14  = () => import('./chunks/rss_AGtc6rjW.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/about.astro", _page1],["src/pages/blog/category/[category].astro", _page2],["src/pages/blog/index.astro", _page3],["src/pages/blog/[...slug].astro", _page4],["src/pages/docs/[...slug].astro", _page5],["src/pages/faq.astro", _page6],["src/pages/guides/index.astro", _page7],["src/pages/guides/[...slug].astro", _page8],["src/pages/index.astro", _page9],["src/pages/login.astro", _page10],["src/pages/Passwordseguros.astro", _page11],["src/pages/pricing.astro", _page12],["src/pages/register.astro", _page13],["src/pages/rss.xml.js", _page14]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
