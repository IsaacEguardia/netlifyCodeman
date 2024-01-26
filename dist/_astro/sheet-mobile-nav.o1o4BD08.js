import{r as o,j as p}from"./jsx-runtime.YG6Og3Vl.js";import{B as dt}from"./button.KLIdt4Qx.js";import{_ as $,$ as O,b as ut}from"./index.l67Luc6T.js";import{j as ft,$ as Pe,e as j,d as R,h as k,c as P,f as ht,g as vt,i as mt,a as bt,b as ne}from"./createLucideIcon.mbnv7wU9.js";import{c as W}from"./utils.aQmm6d3C.js";import{$ as pt,I as be}from"./index.4dZEx2oZ.js";import{c as gt}from"./index.-Oe1IqFG.js";/**
 * @license lucide-react v0.299.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=ft("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function St(e,[r,t]){return Math.min(t,Math.max(r,e))}function wt(e,r){return o.useReducer((t,n)=>{const a=r[t][n];return a??t},e)}const Te="ScrollArea",[_e,hn]=Pe(Te),[Et,T]=_e(Te),yt=o.forwardRef((e,r)=>{const{__scopeScrollArea:t,type:n="hover",dir:a,scrollHideDelay:c=600,...s}=e,[l,i]=o.useState(null),[h,d]=o.useState(null),[f,v]=o.useState(null),[m,w]=o.useState(null),[u,b]=o.useState(null),[g,x]=o.useState(0),[E,S]=o.useState(0),[y,M]=o.useState(!1),[N,L]=o.useState(!1),C=O(r,z=>i(z)),_=vt(a);return o.createElement(Et,{scope:t,type:n,dir:_,scrollHideDelay:c,scrollArea:l,viewport:h,onViewportChange:d,content:f,onContentChange:v,scrollbarX:m,onScrollbarXChange:w,scrollbarXEnabled:y,onScrollbarXEnabledChange:M,scrollbarY:u,onScrollbarYChange:b,scrollbarYEnabled:N,onScrollbarYEnabledChange:L,onCornerWidthChange:x,onCornerHeightChange:S},o.createElement(P.div,$({dir:_},s,{ref:C,style:{position:"relative","--radix-scroll-area-corner-width":g+"px","--radix-scroll-area-corner-height":E+"px",...e.style}})))}),xt="ScrollAreaViewport",Ct=o.forwardRef((e,r)=>{const{__scopeScrollArea:t,children:n,...a}=e,c=T(xt,t),s=o.useRef(null),l=O(r,s,c.onViewportChange);return o.createElement(o.Fragment,null,o.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),o.createElement(P.div,$({"data-radix-scroll-area-viewport":""},a,{ref:l,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),o.createElement("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},n)))}),I="ScrollAreaScrollbar",Ae=o.forwardRef((e,r)=>{const{forceMount:t,...n}=e,a=T(I,e.__scopeScrollArea),{onScrollbarXEnabledChange:c,onScrollbarYEnabledChange:s}=a,l=e.orientation==="horizontal";return o.useEffect(()=>(l?c(!0):s(!0),()=>{l?c(!1):s(!1)}),[l,c,s]),a.type==="hover"?o.createElement(Rt,$({},n,{ref:r,forceMount:t})):a.type==="scroll"?o.createElement(Pt,$({},n,{ref:r,forceMount:t})):a.type==="auto"?o.createElement(Ne,$({},n,{ref:r,forceMount:t})):a.type==="always"?o.createElement(ve,$({},n,{ref:r})):null}),Rt=o.forwardRef((e,r)=>{const{forceMount:t,...n}=e,a=T(I,e.__scopeScrollArea),[c,s]=o.useState(!1);return o.useEffect(()=>{const l=a.scrollArea;let i=0;if(l){const h=()=>{window.clearTimeout(i),s(!0)},d=()=>{i=window.setTimeout(()=>s(!1),a.scrollHideDelay)};return l.addEventListener("pointerenter",h),l.addEventListener("pointerleave",d),()=>{window.clearTimeout(i),l.removeEventListener("pointerenter",h),l.removeEventListener("pointerleave",d)}}},[a.scrollArea,a.scrollHideDelay]),o.createElement(j,{present:t||c},o.createElement(Ne,$({"data-state":c?"visible":"hidden"},n,{ref:r})))}),Pt=o.forwardRef((e,r)=>{const{forceMount:t,...n}=e,a=T(I,e.__scopeScrollArea),c=e.orientation==="horizontal",s=te(()=>i("SCROLL_END"),100),[l,i]=wt("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return o.useEffect(()=>{if(l==="idle"){const h=window.setTimeout(()=>i("HIDE"),a.scrollHideDelay);return()=>window.clearTimeout(h)}},[l,a.scrollHideDelay,i]),o.useEffect(()=>{const h=a.viewport,d=c?"scrollLeft":"scrollTop";if(h){let f=h[d];const v=()=>{const m=h[d];f!==m&&(i("SCROLL"),s()),f=m};return h.addEventListener("scroll",v),()=>h.removeEventListener("scroll",v)}},[a.viewport,c,i,s]),o.createElement(j,{present:t||l!=="hidden"},o.createElement(ve,$({"data-state":l==="hidden"?"hidden":"visible"},n,{ref:r,onPointerEnter:R(e.onPointerEnter,()=>i("POINTER_ENTER")),onPointerLeave:R(e.onPointerLeave,()=>i("POINTER_LEAVE"))})))}),Ne=o.forwardRef((e,r)=>{const t=T(I,e.__scopeScrollArea),{forceMount:n,...a}=e,[c,s]=o.useState(!1),l=e.orientation==="horizontal",i=te(()=>{if(t.viewport){const h=t.viewport.offsetWidth<t.viewport.scrollWidth,d=t.viewport.offsetHeight<t.viewport.scrollHeight;s(l?h:d)}},10);return Y(t.viewport,i),Y(t.content,i),o.createElement(j,{present:n||c},o.createElement(ve,$({"data-state":c?"visible":"hidden"},a,{ref:r})))}),ve=o.forwardRef((e,r)=>{const{orientation:t="vertical",...n}=e,a=T(I,e.__scopeScrollArea),c=o.useRef(null),s=o.useRef(0),[l,i]=o.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),h=Le(l.viewport,l.content),d={...n,sizes:l,onSizesChange:i,hasThumb:h>0&&h<1,onThumbChange:v=>c.current=v,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:v=>s.current=v};function f(v,m){return Lt(v,s.current,l,m)}return t==="horizontal"?o.createElement(Tt,$({},d,{ref:r,onThumbPositionChange:()=>{if(a.viewport&&c.current){const v=a.viewport.scrollLeft,m=pe(v,l,a.dir);c.current.style.transform=`translate3d(${m}px, 0, 0)`}},onWheelScroll:v=>{a.viewport&&(a.viewport.scrollLeft=v)},onDragScroll:v=>{a.viewport&&(a.viewport.scrollLeft=f(v,a.dir))}})):t==="vertical"?o.createElement(_t,$({},d,{ref:r,onThumbPositionChange:()=>{if(a.viewport&&c.current){const v=a.viewport.scrollTop,m=pe(v,l);c.current.style.transform=`translate3d(0, ${m}px, 0)`}},onWheelScroll:v=>{a.viewport&&(a.viewport.scrollTop=v)},onDragScroll:v=>{a.viewport&&(a.viewport.scrollTop=f(v))}})):null}),Tt=o.forwardRef((e,r)=>{const{sizes:t,onSizesChange:n,...a}=e,c=T(I,e.__scopeScrollArea),[s,l]=o.useState(),i=o.useRef(null),h=O(r,i,c.onScrollbarXChange);return o.useEffect(()=>{i.current&&l(getComputedStyle(i.current))},[i]),o.createElement(Oe,$({"data-orientation":"horizontal"},a,{ref:h,sizes:t,style:{bottom:0,left:c.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:c.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":ee(t)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.x),onDragScroll:d=>e.onDragScroll(d.x),onWheelScroll:(d,f)=>{if(c.viewport){const v=c.viewport.scrollLeft+d.deltaX;e.onWheelScroll(v),Ie(v,f)&&d.preventDefault()}},onResize:()=>{i.current&&c.viewport&&s&&n({content:c.viewport.scrollWidth,viewport:c.viewport.offsetWidth,scrollbar:{size:i.current.clientWidth,paddingStart:J(s.paddingLeft),paddingEnd:J(s.paddingRight)}})}}))}),_t=o.forwardRef((e,r)=>{const{sizes:t,onSizesChange:n,...a}=e,c=T(I,e.__scopeScrollArea),[s,l]=o.useState(),i=o.useRef(null),h=O(r,i,c.onScrollbarYChange);return o.useEffect(()=>{i.current&&l(getComputedStyle(i.current))},[i]),o.createElement(Oe,$({"data-orientation":"vertical"},a,{ref:h,sizes:t,style:{top:0,right:c.dir==="ltr"?0:void 0,left:c.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":ee(t)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.y),onDragScroll:d=>e.onDragScroll(d.y),onWheelScroll:(d,f)=>{if(c.viewport){const v=c.viewport.scrollTop+d.deltaY;e.onWheelScroll(v),Ie(v,f)&&d.preventDefault()}},onResize:()=>{i.current&&c.viewport&&s&&n({content:c.viewport.scrollHeight,viewport:c.viewport.offsetHeight,scrollbar:{size:i.current.clientHeight,paddingStart:J(s.paddingTop),paddingEnd:J(s.paddingBottom)}})}}))}),[At,De]=_e(I),Oe=o.forwardRef((e,r)=>{const{__scopeScrollArea:t,sizes:n,hasThumb:a,onThumbChange:c,onThumbPointerUp:s,onThumbPointerDown:l,onThumbPositionChange:i,onDragScroll:h,onWheelScroll:d,onResize:f,...v}=e,m=T(I,t),[w,u]=o.useState(null),b=O(r,C=>u(C)),g=o.useRef(null),x=o.useRef(""),E=m.viewport,S=n.content-n.viewport,y=k(d),M=k(i),N=te(f,10);function L(C){if(g.current){const _=C.clientX-g.current.left,z=C.clientY-g.current.top;h({x:_,y:z})}}return o.useEffect(()=>{const C=_=>{const z=_.target;w?.contains(z)&&y(_,S)};return document.addEventListener("wheel",C,{passive:!1}),()=>document.removeEventListener("wheel",C,{passive:!1})},[E,w,S,y]),o.useEffect(M,[n,M]),Y(w,N),Y(m.content,N),o.createElement(At,{scope:t,scrollbar:w,hasThumb:a,onThumbChange:k(c),onThumbPointerUp:k(s),onThumbPositionChange:M,onThumbPointerDown:k(l)},o.createElement(P.div,$({},v,{ref:b,style:{position:"absolute",...v.style},onPointerDown:R(e.onPointerDown,C=>{C.button===0&&(C.target.setPointerCapture(C.pointerId),g.current=w.getBoundingClientRect(),x.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",m.viewport&&(m.viewport.style.scrollBehavior="auto"),L(C))}),onPointerMove:R(e.onPointerMove,L),onPointerUp:R(e.onPointerUp,C=>{const _=C.target;_.hasPointerCapture(C.pointerId)&&_.releasePointerCapture(C.pointerId),document.body.style.webkitUserSelect=x.current,m.viewport&&(m.viewport.style.scrollBehavior=""),g.current=null})})))}),ue="ScrollAreaThumb",Nt=o.forwardRef((e,r)=>{const{forceMount:t,...n}=e,a=De(ue,e.__scopeScrollArea);return o.createElement(j,{present:t||a.hasThumb},o.createElement(Dt,$({ref:r},n)))}),Dt=o.forwardRef((e,r)=>{const{__scopeScrollArea:t,style:n,...a}=e,c=T(ue,t),s=De(ue,t),{onThumbPositionChange:l}=s,i=O(r,f=>s.onThumbChange(f)),h=o.useRef(),d=te(()=>{h.current&&(h.current(),h.current=void 0)},100);return o.useEffect(()=>{const f=c.viewport;if(f){const v=()=>{if(d(),!h.current){const m=kt(f,l);h.current=m,l()}};return l(),f.addEventListener("scroll",v),()=>f.removeEventListener("scroll",v)}},[c.viewport,d,l]),o.createElement(P.div,$({"data-state":s.hasThumb?"visible":"hidden"},a,{ref:i,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...n},onPointerDownCapture:R(e.onPointerDownCapture,f=>{const m=f.target.getBoundingClientRect(),w=f.clientX-m.left,u=f.clientY-m.top;s.onThumbPointerDown({x:w,y:u})}),onPointerUp:R(e.onPointerUp,s.onThumbPointerUp)}))}),Me="ScrollAreaCorner",Ot=o.forwardRef((e,r)=>{const t=T(Me,e.__scopeScrollArea),n=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&n?o.createElement(Mt,$({},e,{ref:r})):null}),Mt=o.forwardRef((e,r)=>{const{__scopeScrollArea:t,...n}=e,a=T(Me,t),[c,s]=o.useState(0),[l,i]=o.useState(0),h=!!(c&&l);return Y(a.scrollbarX,()=>{var d;const f=((d=a.scrollbarX)===null||d===void 0?void 0:d.offsetHeight)||0;a.onCornerHeightChange(f),i(f)}),Y(a.scrollbarY,()=>{var d;const f=((d=a.scrollbarY)===null||d===void 0?void 0:d.offsetWidth)||0;a.onCornerWidthChange(f),s(f)}),h?o.createElement(P.div,$({},n,{ref:r,style:{width:c,height:l,position:"absolute",right:a.dir==="ltr"?0:void 0,left:a.dir==="rtl"?0:void 0,bottom:0,...e.style}})):null});function J(e){return e?parseInt(e,10):0}function Le(e,r){const t=e/r;return isNaN(t)?0:t}function ee(e){const r=Le(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=(e.scrollbar.size-t)*r;return Math.max(n,18)}function Lt(e,r,t,n="ltr"){const a=ee(t),c=a/2,s=r||c,l=a-s,i=t.scrollbar.paddingStart+s,h=t.scrollbar.size-t.scrollbar.paddingEnd-l,d=t.content-t.viewport,f=n==="ltr"?[0,d]:[d*-1,0];return ke([i,h],f)(e)}function pe(e,r,t="ltr"){const n=ee(r),a=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,c=r.scrollbar.size-a,s=r.content-r.viewport,l=c-n,i=t==="ltr"?[0,s]:[s*-1,0],h=St(e,i);return ke([0,s],[0,l])(h)}function ke(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];const n=(r[1]-r[0])/(e[1]-e[0]);return r[0]+n*(t-e[0])}}function Ie(e,r){return e>0&&e<r}const kt=(e,r=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},n=0;return function a(){const c={left:e.scrollLeft,top:e.scrollTop},s=t.left!==c.left,l=t.top!==c.top;(s||l)&&r(),t=c,n=window.requestAnimationFrame(a)}(),()=>window.cancelAnimationFrame(n)};function te(e,r){const t=k(e),n=o.useRef(0);return o.useEffect(()=>()=>window.clearTimeout(n.current),[]),o.useCallback(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(t,r)},[t,r])}function Y(e,r){const t=k(r);ht(()=>{let n=0;if(e){const a=new ResizeObserver(()=>{cancelAnimationFrame(n),n=window.requestAnimationFrame(t)});return a.observe(e),()=>{window.cancelAnimationFrame(n),a.unobserve(e)}}},[e,t])}const Fe=yt,It=Ct,Ft=Ot,je=o.forwardRef(({className:e,children:r,...t},n)=>p.jsxs(Fe,{ref:n,className:W("relative overflow-hidden",e),...t,children:[p.jsx(It,{className:"h-full w-full rounded-[inherit]",children:r}),p.jsx(We,{}),p.jsx(Ft,{})]}));je.displayName=Fe.displayName;const We=o.forwardRef(({className:e,orientation:r="vertical",...t},n)=>p.jsx(Ae,{ref:n,orientation:r,className:W("flex touch-none select-none transition-colors",r==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",r==="horizontal"&&"h-2.5 border-t border-t-transparent p-[1px]",e),...t,children:p.jsx(Nt,{className:"relative flex-1 rounded-full bg-border"})}));We.displayName=Ae.displayName;const oe="focusScope.autoFocusOnMount",ae="focusScope.autoFocusOnUnmount",ge={bubbles:!1,cancelable:!0},jt=o.forwardRef((e,r)=>{const{loop:t=!1,trapped:n=!1,onMountAutoFocus:a,onUnmountAutoFocus:c,...s}=e,[l,i]=o.useState(null),h=k(a),d=k(c),f=o.useRef(null),v=O(r,u=>i(u)),m=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(n){let u=function(E){if(m.paused||!l)return;const S=E.target;l.contains(S)?f.current=S:F(f.current,{select:!0})},b=function(E){if(m.paused||!l)return;const S=E.relatedTarget;S!==null&&(l.contains(S)||F(f.current,{select:!0}))},g=function(E){if(document.activeElement===document.body)for(const y of E)y.removedNodes.length>0&&F(l)};document.addEventListener("focusin",u),document.addEventListener("focusout",b);const x=new MutationObserver(g);return l&&x.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",b),x.disconnect()}}},[n,l,m.paused]),o.useEffect(()=>{if(l){Se.add(m);const u=document.activeElement;if(!l.contains(u)){const g=new CustomEvent(oe,ge);l.addEventListener(oe,h),l.dispatchEvent(g),g.defaultPrevented||(Wt(Yt(ze(l)),{select:!0}),document.activeElement===u&&F(l))}return()=>{l.removeEventListener(oe,h),setTimeout(()=>{const g=new CustomEvent(ae,ge);l.addEventListener(ae,d),l.dispatchEvent(g),g.defaultPrevented||F(u??document.body,{select:!0}),l.removeEventListener(ae,d),Se.remove(m)},0)}}},[l,h,d,m]);const w=o.useCallback(u=>{if(!t&&!n||m.paused)return;const b=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,g=document.activeElement;if(b&&g){const x=u.currentTarget,[E,S]=zt(x);E&&S?!u.shiftKey&&g===S?(u.preventDefault(),t&&F(E,{select:!0})):u.shiftKey&&g===E&&(u.preventDefault(),t&&F(S,{select:!0})):g===x&&u.preventDefault()}},[t,n,m.paused]);return o.createElement(P.div,$({tabIndex:-1},s,{ref:v,onKeyDown:w}))});function Wt(e,{select:r=!1}={}){const t=document.activeElement;for(const n of e)if(F(n,{select:r}),document.activeElement!==t)return}function zt(e){const r=ze(e),t=$e(r,e),n=$e(r.reverse(),e);return[t,n]}function ze(e){const r=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const a=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||a?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)r.push(t.currentNode);return r}function $e(e,r){for(const t of e)if(!Ht(t,{upTo:r}))return t}function Ht(e,{upTo:r}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(r!==void 0&&e===r)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Bt(e){return e instanceof HTMLInputElement&&"select"in e}function F(e,{select:r=!1}={}){if(e&&e.focus){const t=document.activeElement;e.focus({preventScroll:!0}),e!==t&&Bt(e)&&r&&e.select()}}const Se=Xt();function Xt(){let e=[];return{add(r){const t=e[0];r!==t&&t?.pause(),e=we(e,r),e.unshift(r)},remove(r){var t;e=we(e,r),(t=e[0])===null||t===void 0||t.resume()}}}function we(e,r){const t=[...e],n=t.indexOf(r);return n!==-1&&t.splice(n,1),t}function Yt(e){return e.filter(r=>r.tagName!=="A")}const Ut=o.forwardRef((e,r)=>{var t;const{container:n=globalThis==null||(t=globalThis.document)===null||t===void 0?void 0:t.body,...a}=e;return n?mt.createPortal(o.createElement(P.div,$({},a,{ref:r})),n):null});let ce=0;function Vt(){o.useEffect(()=>{var e,r;const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=t[0])!==null&&e!==void 0?e:Ee()),document.body.insertAdjacentElement("beforeend",(r=t[1])!==null&&r!==void 0?r:Ee()),ce++,()=>{ce===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(n=>n.remove()),ce--}},[])}function Ee(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var D=function(){return D=Object.assign||function(r){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(r[c]=t[c])}return r},D.apply(this,arguments)};function He(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t}function Kt(e,r,t){if(t||arguments.length===2)for(var n=0,a=r.length,c;n<a;n++)(c||!(n in r))&&(c||(c=Array.prototype.slice.call(r,0,n)),c[n]=r[n]);return e.concat(c||Array.prototype.slice.call(r))}var q="right-scroll-bar-position",Q="width-before-scroll-bar",Gt="with-scroll-bars-hidden",Zt="--removed-body-scroll-bar-size";function le(e,r){return typeof e=="function"?e(r):e&&(e.current=r),e}function qt(e,r){var t=o.useState(function(){return{value:e,callback:r,facade:{get current(){return t.value},set current(n){var a=t.value;a!==n&&(t.value=n,t.callback(n,a))}}}})[0];return t.callback=r,t.facade}var ye=new WeakMap;function Qt(e,r){var t=qt(r||null,function(n){return e.forEach(function(a){return le(a,n)})});return o.useLayoutEffect(function(){var n=ye.get(t);if(n){var a=new Set(n),c=new Set(e),s=t.current;a.forEach(function(l){c.has(l)||le(l,null)}),c.forEach(function(l){a.has(l)||le(l,s)})}ye.set(t,e)},[e]),t}function Jt(e){return e}function er(e,r){r===void 0&&(r=Jt);var t=[],n=!1,a={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(c){var s=r(c,n);return t.push(s),function(){t=t.filter(function(l){return l!==s})}},assignSyncMedium:function(c){for(n=!0;t.length;){var s=t;t=[],s.forEach(c)}t={push:function(l){return c(l)},filter:function(){return t}}},assignMedium:function(c){n=!0;var s=[];if(t.length){var l=t;t=[],l.forEach(c),s=t}var i=function(){var d=s;s=[],d.forEach(c)},h=function(){return Promise.resolve().then(i)};h(),t={push:function(d){s.push(d),h()},filter:function(d){return s=s.filter(d),t}}}};return a}function tr(e){e===void 0&&(e={});var r=er(null);return r.options=D({async:!0,ssr:!1},e),r}var Be=function(e){var r=e.sideCar,t=He(e,["sideCar"]);if(!r)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=r.read();if(!n)throw new Error("Sidecar medium not found");return o.createElement(n,D({},t))};Be.isSideCarExport=!0;function rr(e,r){return e.useMedium(r),Be}var Xe=tr(),se=function(){},re=o.forwardRef(function(e,r){var t=o.useRef(null),n=o.useState({onScrollCapture:se,onWheelCapture:se,onTouchMoveCapture:se}),a=n[0],c=n[1],s=e.forwardProps,l=e.children,i=e.className,h=e.removeScrollBar,d=e.enabled,f=e.shards,v=e.sideCar,m=e.noIsolation,w=e.inert,u=e.allowPinchZoom,b=e.as,g=b===void 0?"div":b,x=He(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),E=v,S=Qt([t,r]),y=D(D({},x),a);return o.createElement(o.Fragment,null,d&&o.createElement(E,{sideCar:Xe,removeScrollBar:h,shards:f,noIsolation:m,inert:w,setCallbacks:c,allowPinchZoom:!!u,lockRef:t}),s?o.cloneElement(o.Children.only(l),D(D({},y),{ref:S})):o.createElement(g,D({},y,{className:i,ref:S}),l))});re.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};re.classNames={fullWidth:Q,zeroRight:q};var nr=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function or(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var r=nr();return r&&e.setAttribute("nonce",r),e}function ar(e,r){e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r))}function cr(e){var r=document.head||document.getElementsByTagName("head")[0];r.appendChild(e)}var lr=function(){var e=0,r=null;return{add:function(t){e==0&&(r=or())&&(ar(r,t),cr(r)),e++},remove:function(){e--,!e&&r&&(r.parentNode&&r.parentNode.removeChild(r),r=null)}}},sr=function(){var e=lr();return function(r,t){o.useEffect(function(){return e.add(r),function(){e.remove()}},[r&&t])}},Ye=function(){var e=sr(),r=function(t){var n=t.styles,a=t.dynamic;return e(n,a),null};return r},ir={left:0,top:0,right:0,gap:0},ie=function(e){return parseInt(e||"",10)||0},dr=function(e){var r=window.getComputedStyle(document.body),t=r[e==="padding"?"paddingLeft":"marginLeft"],n=r[e==="padding"?"paddingTop":"marginTop"],a=r[e==="padding"?"paddingRight":"marginRight"];return[ie(t),ie(n),ie(a)]},ur=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return ir;var r=dr(e),t=document.documentElement.clientWidth,n=window.innerWidth;return{left:r[0],top:r[1],right:r[2],gap:Math.max(0,n-t+r[2]-r[0])}},fr=Ye(),hr=function(e,r,t,n){var a=e.left,c=e.top,s=e.right,l=e.gap;return t===void 0&&(t="margin"),`
  .`.concat(Gt,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(l,"px ").concat(n,`;
  }
  body {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([r&&"position: relative ".concat(n,";"),t==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(n,`;
    `),t==="padding"&&"padding-right: ".concat(l,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(q,` {
    right: `).concat(l,"px ").concat(n,`;
  }
  
  .`).concat(Q,` {
    margin-right: `).concat(l,"px ").concat(n,`;
  }
  
  .`).concat(q," .").concat(q,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(Q," .").concat(Q,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body {
    `).concat(Zt,": ").concat(l,`px;
  }
`)},vr=function(e){var r=e.noRelative,t=e.noImportant,n=e.gapMode,a=n===void 0?"margin":n,c=o.useMemo(function(){return ur(a)},[a]);return o.createElement(fr,{styles:hr(c,!r,a,t?"":"!important")})},fe=!1;if(typeof window<"u")try{var V=Object.defineProperty({},"passive",{get:function(){return fe=!0,!0}});window.addEventListener("test",V,V),window.removeEventListener("test",V,V)}catch{fe=!1}var H=fe?{passive:!1}:!1,mr=function(e){return e.tagName==="TEXTAREA"},Ue=function(e,r){var t=window.getComputedStyle(e);return t[r]!=="hidden"&&!(t.overflowY===t.overflowX&&!mr(e)&&t[r]==="visible")},br=function(e){return Ue(e,"overflowY")},pr=function(e){return Ue(e,"overflowX")},xe=function(e,r){var t=r;do{typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&(t=t.host);var n=Ve(e,t);if(n){var a=Ke(e,t),c=a[1],s=a[2];if(c>s)return!0}t=t.parentNode}while(t&&t!==document.body);return!1},gr=function(e){var r=e.scrollTop,t=e.scrollHeight,n=e.clientHeight;return[r,t,n]},$r=function(e){var r=e.scrollLeft,t=e.scrollWidth,n=e.clientWidth;return[r,t,n]},Ve=function(e,r){return e==="v"?br(r):pr(r)},Ke=function(e,r){return e==="v"?gr(r):$r(r)},Sr=function(e,r){return e==="h"&&r==="rtl"?-1:1},wr=function(e,r,t,n,a){var c=Sr(e,window.getComputedStyle(r).direction),s=c*n,l=t.target,i=r.contains(l),h=!1,d=s>0,f=0,v=0;do{var m=Ke(e,l),w=m[0],u=m[1],b=m[2],g=u-b-c*w;(w||g)&&Ve(e,l)&&(f+=g,v+=w),l=l.parentNode}while(!i&&l!==document.body||i&&(r.contains(l)||r===l));return(d&&(a&&f===0||!a&&s>f)||!d&&(a&&v===0||!a&&-s>v))&&(h=!0),h},K=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ce=function(e){return[e.deltaX,e.deltaY]},Re=function(e){return e&&"current"in e?e.current:e},Er=function(e,r){return e[0]===r[0]&&e[1]===r[1]},yr=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},xr=0,B=[];function Cr(e){var r=o.useRef([]),t=o.useRef([0,0]),n=o.useRef(),a=o.useState(xr++)[0],c=o.useState(function(){return Ye()})[0],s=o.useRef(e);o.useEffect(function(){s.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var u=Kt([e.lockRef.current],(e.shards||[]).map(Re),!0).filter(Boolean);return u.forEach(function(b){return b.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),u.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var l=o.useCallback(function(u,b){if("touches"in u&&u.touches.length===2)return!s.current.allowPinchZoom;var g=K(u),x=t.current,E="deltaX"in u?u.deltaX:x[0]-g[0],S="deltaY"in u?u.deltaY:x[1]-g[1],y,M=u.target,N=Math.abs(E)>Math.abs(S)?"h":"v";if("touches"in u&&N==="h"&&M.type==="range")return!1;var L=xe(N,M);if(!L)return!0;if(L?y=N:(y=N==="v"?"h":"v",L=xe(N,M)),!L)return!1;if(!n.current&&"changedTouches"in u&&(E||S)&&(n.current=y),!y)return!0;var C=n.current||y;return wr(C,b,u,C==="h"?E:S,!0)},[]),i=o.useCallback(function(u){var b=u;if(!(!B.length||B[B.length-1]!==c)){var g="deltaY"in b?Ce(b):K(b),x=r.current.filter(function(y){return y.name===b.type&&y.target===b.target&&Er(y.delta,g)})[0];if(x&&x.should){b.cancelable&&b.preventDefault();return}if(!x){var E=(s.current.shards||[]).map(Re).filter(Boolean).filter(function(y){return y.contains(b.target)}),S=E.length>0?l(b,E[0]):!s.current.noIsolation;S&&b.cancelable&&b.preventDefault()}}},[]),h=o.useCallback(function(u,b,g,x){var E={name:u,delta:b,target:g,should:x};r.current.push(E),setTimeout(function(){r.current=r.current.filter(function(S){return S!==E})},1)},[]),d=o.useCallback(function(u){t.current=K(u),n.current=void 0},[]),f=o.useCallback(function(u){h(u.type,Ce(u),u.target,l(u,e.lockRef.current))},[]),v=o.useCallback(function(u){h(u.type,K(u),u.target,l(u,e.lockRef.current))},[]);o.useEffect(function(){return B.push(c),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",i,H),document.addEventListener("touchmove",i,H),document.addEventListener("touchstart",d,H),function(){B=B.filter(function(u){return u!==c}),document.removeEventListener("wheel",i,H),document.removeEventListener("touchmove",i,H),document.removeEventListener("touchstart",d,H)}},[]);var m=e.removeScrollBar,w=e.inert;return o.createElement(o.Fragment,null,w?o.createElement(c,{styles:yr(a)}):null,m?o.createElement(vr,{gapMode:"margin"}):null)}const Rr=rr(Xe,Cr);var Ge=o.forwardRef(function(e,r){return o.createElement(re,D({},e,{ref:r,sideCar:Rr}))});Ge.classNames=re.classNames;const Pr=Ge;var Tr=function(e){if(typeof document>"u")return null;var r=Array.isArray(e)?e[0]:e;return r.ownerDocument.body},X=new WeakMap,G=new WeakMap,Z={},de=0,Ze=function(e){return e&&(e.host||Ze(e.parentNode))},_r=function(e,r){return r.map(function(t){if(e.contains(t))return t;var n=Ze(t);return n&&e.contains(n)?n:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return!!t})},Ar=function(e,r,t,n){var a=_r(r,Array.isArray(e)?e:[e]);Z[t]||(Z[t]=new WeakMap);var c=Z[t],s=[],l=new Set,i=new Set(a),h=function(f){!f||l.has(f)||(l.add(f),h(f.parentNode))};a.forEach(h);var d=function(f){!f||i.has(f)||Array.prototype.forEach.call(f.children,function(v){if(l.has(v))d(v);else{var m=v.getAttribute(n),w=m!==null&&m!=="false",u=(X.get(v)||0)+1,b=(c.get(v)||0)+1;X.set(v,u),c.set(v,b),s.push(v),u===1&&w&&G.set(v,!0),b===1&&v.setAttribute(t,"true"),w||v.setAttribute(n,"true")}})};return d(r),l.clear(),de++,function(){s.forEach(function(f){var v=X.get(f)-1,m=c.get(f)-1;X.set(f,v),c.set(f,m),v||(G.has(f)||f.removeAttribute(n),G.delete(f)),m||f.removeAttribute(t)}),de--,de||(X=new WeakMap,X=new WeakMap,G=new WeakMap,Z={})}},Nr=function(e,r,t){t===void 0&&(t="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),a=r||Tr(e);return a?(n.push.apply(n,Array.from(a.querySelectorAll("[aria-live]"))),Ar(n,a,t,"aria-hidden")):function(){return null}};const qe="Dialog",[Qe,vn]=Pe(qe),[Dr,A]=Qe(qe),Or=e=>{const{__scopeDialog:r,children:t,open:n,defaultOpen:a,onOpenChange:c,modal:s=!0}=e,l=o.useRef(null),i=o.useRef(null),[h=!1,d]=bt({prop:n,defaultProp:a,onChange:c});return o.createElement(Dr,{scope:r,triggerRef:l,contentRef:i,contentId:ne(),titleId:ne(),descriptionId:ne(),open:h,onOpenChange:d,onOpenToggle:o.useCallback(()=>d(f=>!f),[d]),modal:s},t)},Mr="DialogTrigger",Lr=o.forwardRef((e,r)=>{const{__scopeDialog:t,...n}=e,a=A(Mr,t),c=O(r,a.triggerRef);return o.createElement(P.button,$({type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":me(a.open)},n,{ref:c,onClick:R(e.onClick,a.onOpenToggle)}))}),Je="DialogPortal",[kr,et]=Qe(Je,{forceMount:void 0}),Ir=e=>{const{__scopeDialog:r,forceMount:t,children:n,container:a}=e,c=A(Je,r);return o.createElement(kr,{scope:r,forceMount:t},o.Children.map(n,s=>o.createElement(j,{present:t||c.open},o.createElement(Ut,{asChild:!0,container:a},s))))},he="DialogOverlay",Fr=o.forwardRef((e,r)=>{const t=et(he,e.__scopeDialog),{forceMount:n=t.forceMount,...a}=e,c=A(he,e.__scopeDialog);return c.modal?o.createElement(j,{present:n||c.open},o.createElement(jr,$({},a,{ref:r}))):null}),jr=o.forwardRef((e,r)=>{const{__scopeDialog:t,...n}=e,a=A(he,t);return o.createElement(Pr,{as:ut,allowPinchZoom:!0,shards:[a.contentRef]},o.createElement(P.div,$({"data-state":me(a.open)},n,{ref:r,style:{pointerEvents:"auto",...n.style}})))}),U="DialogContent",Wr=o.forwardRef((e,r)=>{const t=et(U,e.__scopeDialog),{forceMount:n=t.forceMount,...a}=e,c=A(U,e.__scopeDialog);return o.createElement(j,{present:n||c.open},c.modal?o.createElement(zr,$({},a,{ref:r})):o.createElement(Hr,$({},a,{ref:r})))}),zr=o.forwardRef((e,r)=>{const t=A(U,e.__scopeDialog),n=o.useRef(null),a=O(r,t.contentRef,n);return o.useEffect(()=>{const c=n.current;if(c)return Nr(c)},[]),o.createElement(tt,$({},e,{ref:a,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:R(e.onCloseAutoFocus,c=>{var s;c.preventDefault(),(s=t.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:R(e.onPointerDownOutside,c=>{const s=c.detail.originalEvent,l=s.button===0&&s.ctrlKey===!0;(s.button===2||l)&&c.preventDefault()}),onFocusOutside:R(e.onFocusOutside,c=>c.preventDefault())}))}),Hr=o.forwardRef((e,r)=>{const t=A(U,e.__scopeDialog),n=o.useRef(!1),a=o.useRef(!1);return o.createElement(tt,$({},e,{ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:c=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,c),!c.defaultPrevented){var l;n.current||(l=t.triggerRef.current)===null||l===void 0||l.focus(),c.preventDefault()}n.current=!1,a.current=!1},onInteractOutside:c=>{var s,l;(s=e.onInteractOutside)===null||s===void 0||s.call(e,c),c.defaultPrevented||(n.current=!0,c.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const i=c.target;((l=t.triggerRef.current)===null||l===void 0?void 0:l.contains(i))&&c.preventDefault(),c.detail.originalEvent.type==="focusin"&&a.current&&c.preventDefault()}}))}),tt=o.forwardRef((e,r)=>{const{__scopeDialog:t,trapFocus:n,onOpenAutoFocus:a,onCloseAutoFocus:c,...s}=e,l=A(U,t),i=o.useRef(null),h=O(r,i);return Vt(),o.createElement(o.Fragment,null,o.createElement(jt,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:a,onUnmountAutoFocus:c},o.createElement(pt,$({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":me(l.open)},s,{ref:h,onDismiss:()=>l.onOpenChange(!1)}))),!1)}),Br="DialogTitle",Xr=o.forwardRef((e,r)=>{const{__scopeDialog:t,...n}=e,a=A(Br,t);return o.createElement(P.h2,$({id:a.titleId},n,{ref:r}))}),Yr="DialogDescription",Ur=o.forwardRef((e,r)=>{const{__scopeDialog:t,...n}=e,a=A(Yr,t);return o.createElement(P.p,$({id:a.descriptionId},n,{ref:r}))}),Vr="DialogClose",Kr=o.forwardRef((e,r)=>{const{__scopeDialog:t,...n}=e,a=A(Vr,t);return o.createElement(P.button,$({type:"button"},n,{ref:r,onClick:R(e.onClick,()=>a.onOpenChange(!1))}))});function me(e){return e?"open":"closed"}const Gr=Or,Zr=Lr,rt=Ir,nt=Fr,ot=Wr,at=Xr,ct=Ur,qr=Kr,Qr=Gr,Jr=Zr,lt=({className:e,...r})=>p.jsx(rt,{className:W(e),...r});lt.displayName=rt.displayName;const st=o.forwardRef(({className:e,...r},t)=>p.jsx(nt,{className:W("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...r,ref:t}));st.displayName=nt.displayName;const en=gt("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),it=o.forwardRef(({side:e="right",className:r,children:t,...n},a)=>p.jsxs(lt,{children:[p.jsx(st,{}),p.jsxs(ot,{ref:a,className:W(en({side:e}),r),...n,children:[t,p.jsxs(qr,{className:"absolute right-4 top-7 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[p.jsx($t,{className:"size-6"}),p.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));it.displayName=ot.displayName;const tn=o.forwardRef(({className:e,...r},t)=>p.jsx(at,{ref:t,className:W("text-lg font-semibold text-foreground",e),...r}));tn.displayName=at.displayName;const rn=o.forwardRef(({className:e,...r},t)=>p.jsx(ct,{ref:t,className:W("text-sm text-muted-foreground",e),...r}));rn.displayName=ct.displayName;const nn={name:"CodeMan",description:"Blog de programación",url:"https://codemanpty.com",ogImage:"https://codemanpty.com/og.jpg",links:{twitter:"https://www.threads.net/@isaac.escobarg",github:"https://www.threads.net/@isaac.escobarg"}};function mn({mainNavItems:e,sidebarNavItems:r}){const[t,n]=o.useState(!1),a=e?.filter((c,s,l)=>s===l.findIndex(i=>i.href===c.href&&i.title===c.title));return p.jsxs(Qr,{open:t,onOpenChange:n,children:[p.jsx(Jr,{asChild:!0,children:p.jsxs(dt,{variant:"secondary",size:"sm",className:"mr-2 h-8 px-1.5 md:hidden",children:[p.jsx(be.hamburger,{className:"size-5"}),p.jsx("span",{className:"sr-only",children:"Toggle Menu"})]})}),p.jsxs(it,{side:"left",className:"pr-0",children:[p.jsxs("a",{href:"/",className:"flex items-center",children:[p.jsx(be.logo,{className:"mr-2 size-8"}),p.jsx("span",{className:"font-bold",children:nn.name})]}),p.jsx(je,{className:"my-4 h-[calc(100vh-8rem)] pb-10 pl-10",children:p.jsxs("div",{className:"mt-2 mb-20",children:[e?.length?p.jsx("div",{className:"flex flex-col space-y-3",children:a?.map(c=>c.href&&p.jsx("a",{href:c.href,className:"text-muted-foreground",onClick:()=>c.href.startsWith("/#")?n(!1):void 0,children:c.title},c.href))}):null,r?.length?p.jsx("div",{className:"flex flex-col space-y-2",children:r.map((c,s)=>{const l=c?.items?.filter(i=>!i.disabled);return!l||l.length===0?null:p.jsxs("div",{className:"flex flex-col space-y-3 pt-6",children:[p.jsx("h4",{className:"font-medium",children:c.title}),l.map((i,h)=>p.jsx(o.Fragment,{children:i.href?p.jsx("a",{href:i.href,target:i?.external?"_blank":void 0,className:"text-muted-foreground",children:i.title}):i.title},i.href+h))]},s)})}):null]})})]})]})}export{mn as SheetMobileNav};
