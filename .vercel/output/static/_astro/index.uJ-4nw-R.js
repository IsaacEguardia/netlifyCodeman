import{j as E}from"./jsx-runtime.pwZL9jDf.js";import{$ as S,_ as j}from"./index.pGvOO22T.js";import{r}from"./index.9AF9g4V4.js";import{h as g,c as z,d as $,j as _}from"./createLucideIcon.wKEJga0G.js";const J={logo:t=>E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024",children:E.jsx("path",{fill:"black",d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3M716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8z"})}),hamburger:t=>E.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20",focusable:"false","aria-hidden":"true",height:"20px",width:"20px",xmlns:"http://www.w3.org/2000/svg",...t,children:E.jsx("path",{fillRule:"evenodd",d:"M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd",stroke:"currentColor",fill:"currentColor",strokeWidth:"0px"})})};function U(t,e=globalThis?.document){const i=g(t);r.useEffect(()=>{const o=n=>{n.key==="Escape"&&i(n)};return e.addEventListener("keydown",o),()=>e.removeEventListener("keydown",o)},[i,e])}const y="dismissableLayer.update",H="dismissableLayer.pointerDownOutside",M="dismissableLayer.focusOutside";let x;const A=r.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Q=r.forwardRef((t,e)=>{var i;const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:n,onPointerDownOutside:d,onFocusOutside:v,onInteractOutside:l,onDismiss:u,...b}=t,a=r.useContext(A),[c,L]=r.useState(null),f=(i=c?.ownerDocument)!==null&&i!==void 0?i:globalThis?.document,[,R]=r.useState({}),k=S(e,s=>L(s)),m=Array.from(a.layers),[F]=[...a.layersWithOutsidePointerEventsDisabled].slice(-1),I=m.indexOf(F),w=c?m.indexOf(c):-1,W=a.layersWithOutsidePointerEventsDisabled.size>0,O=w>=I,B=K(s=>{const h=s.target,P=[...a.branches].some(p=>p.contains(h));!O||P||(d?.(s),l?.(s),s.defaultPrevented||u?.())},f),D=N(s=>{const h=s.target;[...a.branches].some(p=>p.contains(h))||(v?.(s),l?.(s),s.defaultPrevented||u?.())},f);return U(s=>{w===a.layers.size-1&&(n?.(s),!s.defaultPrevented&&u&&(s.preventDefault(),u()))},f),r.useEffect(()=>{if(c)return o&&(a.layersWithOutsidePointerEventsDisabled.size===0&&(x=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),a.layersWithOutsidePointerEventsDisabled.add(c)),a.layers.add(c),C(),()=>{o&&a.layersWithOutsidePointerEventsDisabled.size===1&&(f.body.style.pointerEvents=x)}},[c,f,o,a]),r.useEffect(()=>()=>{c&&(a.layers.delete(c),a.layersWithOutsidePointerEventsDisabled.delete(c),C())},[c,a]),r.useEffect(()=>{const s=()=>R({});return document.addEventListener(y,s),()=>document.removeEventListener(y,s)},[]),r.createElement(z.div,j({},b,{ref:k,style:{pointerEvents:W?O?"auto":"none":void 0,...t.style},onFocusCapture:$(t.onFocusCapture,D.onFocusCapture),onBlurCapture:$(t.onBlurCapture,D.onBlurCapture),onPointerDownCapture:$(t.onPointerDownCapture,B.onPointerDownCapture)}))});function K(t,e=globalThis?.document){const i=g(t),o=r.useRef(!1),n=r.useRef(()=>{});return r.useEffect(()=>{const d=l=>{if(l.target&&!o.current){let b=function(){T(H,i,u,{discrete:!0})};const u={originalEvent:l};l.pointerType==="touch"?(e.removeEventListener("click",n.current),n.current=b,e.addEventListener("click",n.current,{once:!0})):b()}else e.removeEventListener("click",n.current);o.current=!1},v=window.setTimeout(()=>{e.addEventListener("pointerdown",d)},0);return()=>{window.clearTimeout(v),e.removeEventListener("pointerdown",d),e.removeEventListener("click",n.current)}},[e,i]),{onPointerDownCapture:()=>o.current=!0}}function N(t,e=globalThis?.document){const i=g(t),o=r.useRef(!1);return r.useEffect(()=>{const n=d=>{d.target&&!o.current&&T(M,i,{originalEvent:d},{discrete:!1})};return e.addEventListener("focusin",n),()=>e.removeEventListener("focusin",n)},[e,i]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function C(){const t=new CustomEvent(y);document.dispatchEvent(t)}function T(t,e,i,{discrete:o}){const n=i.originalEvent.target,d=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:i});e&&n.addEventListener(t,e,{once:!0}),o?_(n,d):n.dispatchEvent(d)}export{Q as $,J as I};