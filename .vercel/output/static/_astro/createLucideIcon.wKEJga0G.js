import{r as c,$ as A}from"./index.9AF9g4V4.js";import{_ as S,b as g,$ as P}from"./index.pGvOO22T.js";import{r as h}from"./index.uGIPC8rq.js";function B(e,n=[]){let o=[];function t(a,f){const i=c.createContext(f),u=o.length;o=[...o,f];function s(d){const{scope:l,children:m,...p}=d,x=l?.[e][u]||i,C=c.useMemo(()=>p,Object.values(p));return c.createElement(x.Provider,{value:C},m)}function $(d,l){const m=l?.[e][u]||i,p=c.useContext(m);if(p)return p;if(f!==void 0)return f;throw new Error(`\`${d}\` must be used within \`${a}\``)}return s.displayName=a+"Provider",[s,$]}const r=()=>{const a=o.map(f=>c.createContext(f));return function(i){const u=i?.[e]||a;return c.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])}};return r.scopeName=e,[t,E(r,...n)]}function E(...e){const n=e[0];if(e.length===1)return n;const o=()=>{const t=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(a){const f=t.reduce((i,{useScope:u,scopeName:s})=>{const d=u(a)[`__scope${s}`];return{...i,...d}},{});return c.useMemo(()=>({[`__scope${n.scopeName}`]:f}),[f])}};return o.scopeName=n.scopeName,o}function F(e,n,{checkForDefaultPrevented:o=!0}={}){return function(r){if(e?.(r),o===!1||!r.defaultPrevented)return n?.(r)}}function N(e){const n=c.useRef(e);return c.useEffect(()=>{n.current=e}),c.useMemo(()=>(...o)=>{var t;return(t=n.current)===null||t===void 0?void 0:t.call(n,...o)},[])}function K({prop:e,defaultProp:n,onChange:o=()=>{}}){const[t,r]=M({defaultProp:n,onChange:o}),a=e!==void 0,f=a?e:t,i=N(o),u=c.useCallback(s=>{if(a){const d=typeof s=="function"?s(e):s;d!==e&&i(d)}else r(s)},[a,e,r,i]);return[f,u]}function M({defaultProp:e,onChange:n}){const o=c.useState(e),[t]=o,r=c.useRef(t),a=N(n);return c.useEffect(()=>{r.current!==t&&(a(t),r.current=t)},[t,r,a]),o}const w=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],W=w.reduce((e,n)=>{const o=c.forwardRef((t,r)=>{const{asChild:a,...f}=t,i=a?g:n;return c.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),c.createElement(i,S({},f,{ref:r}))});return o.displayName=`Primitive.${n}`,{...e,[n]:o}},{});function Z(e,n){e&&h.flushSync(()=>e.dispatchEvent(n))}const b=globalThis?.document?c.useLayoutEffect:()=>{};function y(e,n){return c.useReducer((o,t)=>{const r=n[o][t];return r??o},e)}const O=e=>{const{present:n,children:o}=e,t=T(n),r=typeof o=="function"?o({present:t.isPresent}):c.Children.only(o),a=P(t.ref,r.ref);return typeof o=="function"||t.isPresent?c.cloneElement(r,{ref:a}):null};O.displayName="Presence";function T(e){const[n,o]=c.useState(),t=c.useRef({}),r=c.useRef(e),a=c.useRef("none"),f=e?"mounted":"unmounted",[i,u]=y(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const s=v(t.current);a.current=i==="mounted"?s:"none"},[i]),b(()=>{const s=t.current,$=r.current;if($!==e){const l=a.current,m=v(s);e?u("MOUNT"):m==="none"||s?.display==="none"?u("UNMOUNT"):u($&&l!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),b(()=>{if(n){const s=d=>{const m=v(t.current).includes(d.animationName);d.target===n&&m&&h.flushSync(()=>u("ANIMATION_END"))},$=d=>{d.target===n&&(a.current=v(t.current))};return n.addEventListener("animationstart",$),n.addEventListener("animationcancel",s),n.addEventListener("animationend",s),()=>{n.removeEventListener("animationstart",$),n.removeEventListener("animationcancel",s),n.removeEventListener("animationend",s)}}else u("ANIMATION_END")},[n,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:c.useCallback(s=>{s&&(t.current=getComputedStyle(s)),o(s)},[])}}function v(e){return e?.animationName||"none"}const R=A.useId||(()=>{});let _=0;function q(e){const[n,o]=c.useState(R());return b(()=>{e||o(t=>t??String(_++))},[e]),e||(n?`radix-${n}`:"")}const U=c.createContext(void 0);function G(e){const n=c.useContext(U);return e||n||"ltr"}/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),J=(e,n)=>{const o=c.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:a=2,absoluteStrokeWidth:f,className:i="",children:u,...s},$)=>c.createElement("svg",{ref:$,...L,width:r,height:r,stroke:t,strokeWidth:f?Number(a)*24/Number(r):a,className:["lucide",`lucide-${k(e)}`,i].join(" "),...s},[...n.map(([d,l])=>c.createElement(d,l)),...Array.isArray(u)?u:[u]]));return o.displayName=`${e}`,o};export{B as $,K as a,q as b,W as c,F as d,O as e,b as f,G as g,N as h,J as i,Z as j};