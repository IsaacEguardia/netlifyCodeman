import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as addAttribute, u as unescapeHTML, f as renderComponent, F as Fragment, g as renderSlot, h as renderHead } from '../astro_yDAMJHzO.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';
import { optimize } from 'svgo';
import { AnimatePresence, motion } from 'framer-motion';
/* empty css                           */
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
/* empty css                          */
import { Slot } from '@radix-ui/react-slot';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import axios from 'axios';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatDate(date) {
  return format(date, "LLL dd, y");
}
function capitalizer(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const __vite_glob_1_0 = "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"github\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 496 512\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z\"\r\n  ></path>\r\n</svg>";

const __vite_glob_1_1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12.422 3.072c-.374.355-.828.929-1.501 1.785l-.34.433a56.28 56.28 0 0 0-.067.085c-.305.39-.587.749-.983.96c-.403.215-.854.24-1.328.266l-.104.006l-.527.03c-1.046.06-1.74.103-2.223.207c-.466.1-.536.218-.566.278c-.036.072-.084.223.111.697c.199.484.567 1.11 1.118 2.042l.279.47l.052.089c.255.428.484.814.544 1.264c.06.446-.056.883-.187 1.375l-.027.101l-.143.54c-.282 1.069-.472 1.791-.535 2.321c-.064.53.028.65.065.689l.002.002c.024.026.105.115.572.061c.448-.051 1.051-.21 1.928-.451a8.035 8.035 0 0 1-.724-.664c-.34-.365-.662-.849-.573-1.474c.09-.63.539-1 .97-1.25c.414-.237.99-.462 1.651-.721l.421-.165c.213-.084.33-.13.416-.172a.441.441 0 0 0 .074-.042a.438.438 0 0 0 .04-.073c.04-.086.085-.205.165-.418l.157-.424c.248-.665.463-1.243.695-1.66c.241-.435.604-.89 1.232-.99c.623-.1 1.112.212 1.485.544c.358.321.758.799 1.22 1.351l.291.35c.148.176.232.276.3.345a.632.632 0 0 0 .069.062l.003.002l.002.001l.01.003a.604.604 0 0 0 .08.015a6.5 6.5 0 0 0 .453.033l.453.024l.615.035c.47-.413.783-.717.978-.972c.21-.274.212-.397.202-.469c-.01-.071-.041-.208-.45-.458c-.425-.26-1.068-.53-2.037-.932l-.489-.204a44.117 44.117 0 0 0-.095-.04c-.441-.182-.858-.354-1.168-.689c-.305-.329-.455-.76-.619-1.23a24.608 24.608 0 0 0-.036-.102l-.183-.522c-.362-1.032-.607-1.726-.847-2.187c-.236-.452-.363-.472-.387-.476h-.003c-.022-.005-.145-.028-.51.319Zm7.47 8.302a5.05 5.05 0 0 0 .344-.4c.344-.449.58-.966.498-1.58c-.098-.733-.592-1.195-1.155-1.539c-.536-.327-1.29-.64-2.184-1.013l-.547-.228c-.598-.249-.68-.3-.74-.363c-.064-.07-.116-.173-.34-.81l-.202-.58c-.337-.959-.617-1.757-.913-2.325c-.302-.578-.73-1.136-1.466-1.262c-.74-.126-1.326.262-1.797.71c-.464.44-.985 1.102-1.61 1.897l-.378.481c-.416.529-.497.607-.577.65c-.074.04-.166.06-.812.097l-.527.03l-.064.004c-.965.056-1.778.103-2.39.235c-.643.139-1.263.413-1.592 1.077c-.324.652-.187 1.318.067 1.935c.245.596.671 1.317 1.184 2.183l.309.522c.337.57.386.68.4.788c.015.113-.005.24-.177.894l-.158.598c-.264.996-.482 1.82-.56 2.467c-.079.66-.042 1.35.455 1.887c.511.553 1.2.61 1.846.535c.62-.072 1.41-.29 2.347-.55l.128-.035l.598-.29l.043.039a.627.627 0 0 1 .063.067l.001.002l.001.003a6.495 6.495 0 0 1 .06.539l.033.451c.052.713.097 1.33.201 1.798c.11.49.328 1.023.89 1.306c.564.283 1.122.136 1.578-.072c.434-.198.95-.535 1.545-.922l.378-.246a6.34 6.34 0 0 1 .381-.238a.578.578 0 0 1 .07-.033l.008-.003h.013c.012 0 .036.002.079.01c.095.016.22.048.443.106l.44.115c.695.18 1.297.337 1.773.389c.495.054 1.078.022 1.523-.43c.446-.453.468-1.037.405-1.53c-.06-.476-.229-1.073-.422-1.763l-.123-.437a6.52 6.52 0 0 1-.115-.44a.598.598 0 0 1-.012-.078v-.01l.003-.009a.564.564 0 0 1 .032-.07c.043-.083.11-.19.231-.383l.24-.382c.378-.6.706-1.121.896-1.559c.2-.458.338-1.02.043-1.579a1.508 1.508 0 0 0-.688-.656Zm-6.59-1.625l.011.002c-.007 0-.01-.001-.011-.002Zm.024.007a.962.962 0 0 1 .245.176c.267.238.596.629 1.105 1.238l.256.306l.054.065c.223.268.46.555.794.722c.335.168.706.187 1.053.205l.085.005l.395.02c.79.044 1.296.073 1.645.144a.998.998 0 0 1 .292.094v.004a.95.95 0 0 1-.087.274c-.14.321-.405.746-.823 1.41l-.209.333l-.045.071c-.183.29-.383.606-.436.977c-.053.37.05.73.144 1.063l.024.082l.107.382c.214.762.35 1.251.394 1.602c.02.16.015.244.008.283a1.017 1.017 0 0 1-.286-.003c-.353-.039-.846-.165-1.613-.364l-.385-.1l-.082-.022c-.336-.088-.697-.184-1.066-.125c-.37.06-.683.264-.97.453l-.071.046l-.33.214c-.657.429-1.079.7-1.398.847a.958.958 0 0 1-.275.092h-.006a.99.99 0 0 1-.1-.289c-.077-.346-.115-.85-.173-1.637l-.028-.394l-.006-.085c-.024-.345-.05-.716-.225-1.047c-.174-.33-.466-.563-.738-.78l-.067-.053l-.31-.25c-.62-.496-1.018-.817-1.262-1.08a.982.982 0 0 1-.18-.237a.966.966 0 0 1 .228-.163c.304-.175.771-.36 1.504-.647l.366-.144l.08-.03c.32-.125.67-.26.932-.527c.263-.268.393-.62.512-.94l.03-.08l.137-.369c.274-.736.45-1.205.62-1.511a.946.946 0 0 1 .161-.231ZM8.75 14.372s.002.005.002.012c-.003-.008-.003-.012-.002-.012Zm-.002.037l-.006.012c-.001 0 0-.004.006-.012Zm9.571 4.832s.001-.005.005-.011c-.002.008-.004.011-.005.01Zm.027-.034a.027.027 0 0 1 .011-.005s-.003.003-.011.005Zm-5.009-9.46c.008-.006.012-.007.012-.006l-.012.006Z\" clip-rule=\"evenodd\"/></svg>";

const __vite_glob_1_2 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"twitter\" role=\"img\">\r\n  <path d=\"M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0\" fill=\"currentColor\"></path>\r\n</svg>";

const __vite_glob_1_3 = "<svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 20 20\" focusable=\"false\" aria-hidden=\"true\" height=\"20px\" width=\"20px\" xmlns=\"http://www.w3.org/2000/svg\">\r\n  <path fill-rule=\"evenodd\" d=\"M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z\" clip-rule=\"evenodd\" stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0px\"></path>\r\n</svg>";

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({


});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({"/src/icons/github.svg": __vite_glob_1_0,"/src/icons/stars-outline.svg": __vite_glob_1_1,"/src/icons/twitter.svg": __vite_glob_1_2,"/src/icons/two-lines.svg": __vite_glob_1_3


});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$b = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$a = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet> ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)} </svg>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$9 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$8 = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}> ${title ? renderTemplate`<title>${title}</title>` : ""} <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use> </svg>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

function useMounted() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

const SunIcon = () => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs(
  motion.svg,
  {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    initial: { scale: 0.5, opacity: 0, rotate: 90 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.2, type: "spring", stiffness: 100 }
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      rotate: 90,
      transition: { duration: 0.2 }
    },
    children: [
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5" }),
      /* @__PURE__ */ jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
      /* @__PURE__ */ jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
      /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
      /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
      /* @__PURE__ */ jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
      /* @__PURE__ */ jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
      /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
      /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
    ]
  }
) });
const MoonIcon = () => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(
  motion.svg,
  {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    initial: { scale: 0.5, opacity: 0, rotate: 90 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.2, type: "spring", stiffness: 100 }
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      rotate: 90,
      transition: { duration: 0.2 }
    },
    children: /* @__PURE__ */ jsx("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
  }
) });
function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    {
      return void 0;
    }
  });
  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };
  const mounted = useMounted();
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);
  return mounted ? /* @__PURE__ */ jsxs(
    "button",
    {
      role: "button",
      onClick: toggleTheme,
      className: "min-h-[40px] -mr-2 block focus:outline-none  px-4 ",
      children: [
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle mode" }),
        /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: theme !== "dark" ? /* @__PURE__ */ jsx(SunIcon, {}) : /* @__PURE__ */ jsx(MoonIcon, {}) })
      ]
    }
  ) : /* @__PURE__ */ jsx("div", {});
}

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(cn(className), "class")} data-astro-cid-i47g4raq> <div class="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0" data-astro-cid-i47g4raq> <div class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0" data-astro-cid-i47g4raq> <a href="/" aria-label="Astronomy homepage" data-astro-cid-i47g4raq> ${renderComponent($$result, "Icon", $$Icon, { "name": "ant-design:code-filled", "class": "size-8", "data-astro-cid-i47g4raq": true })}</a> <p class="text-center text-sm leading-loose md:text-left balance-text" data-astro-cid-i47g4raq>
Creado por${" "} <a href="https://www.linkedin.com/in/isaac-escobarg/" target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4" data-astro-cid-i47g4raq>
Isaac Escobar G.
</a> </p> </div> ${renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/theme-toggle", "client:component-export": "ThemeToggle", "data-astro-cid-i47g4raq": true })} </div> </footer>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/components/layout/footer.astro", void 0);

const siteConfig = {
  name: "CodeMan",
  description: "Blog de programación",
  url: "https://codemanpty.com",
  ogImage: "https://codemanpty.com/og.jpg",
  links: {
    twitter: "https://www.threads.net/@isaac.escobarg",
    github: "https://www.threads.net/@isaac.escobarg"
  }
};

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(cn(
    "flex items-center h-16 md:h-18 z-50 sticky top-0 bg-background",
    className
  ), "class")}> <div class="relative container flex items-center justify-between w-full"> <div class="flex items-center gap-6 md:gap-8 lg:gap-10"> <a href="/" class="hidden items-center space-x-2 md:flex"> ${renderComponent($$result, "Icon", $$Icon, { "name": "ant-design:code-filled", "class": "size-8" })} <span class="hidden font-bold sm:inline-block"> ${siteConfig.name} </span> </a> ${renderSlot($$result, $$slots["mobile-nav-header"])} <div class="hidden md:flex"> ${renderSlot($$result, $$slots["left-header"])} </div> </div> <!-- logo mobile center --> <div class="absolute top-1/2 left-1/2 -translate-x-4 -translate-y-4 md:hidden"> <a href="/" aria-label="Astronomy homepage"> ${renderComponent($$result, "Icon", $$Icon, { "name": "ant-design:code-filled", "class": "size-8" })} </a> </div> ${renderSlot($$result, $$slots["right-header"])} </div> </header>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/components/layout/header.astro", void 0);

const Icons = {
  logo: (props) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 1024 1024", children: /* @__PURE__ */ jsx("path", { fill: "black", d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3M716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8z" }) }),
  hamburger: (props) => /* @__PURE__ */ jsx(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 20 20",
      focusable: "false",
      "aria-hidden": "true",
      height: "20px",
      width: "20px",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
          clipRule: "evenodd",
          stroke: "currentColor",
          fill: "currentColor",
          strokeWidth: "0px"
        }
      )
    }
  )
};

const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 size-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-0.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      },
      radius: {
        default: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, radius, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant, radius }), className), ...props });
}

const navMenuConfig = {
  infosNav: [
    {
      title: "Contacto",
      items: [
        {
          title: "Threads (@isaac.escobarg)",
          href: "https://www.threads.net/@isaac.escobarg",
          description: "Sígueme para recibir las últimas actualizaciones y noticias.",
          external: true
        },
        {
          title: "Linkedin",
          href: "https://www.linkedin.com/in/isaac-escobarg/",
          description: "Las conexiones van más allá de los enlaces",
          external: true
        }
      ]
    }
  ],
  examplesNav: [
    {
      title: "Proyectos",
      items: [
        {
          title: "Correo Seguro",
          href: "/Passwordseguros",
          description: "Comprueba si tu Correo fue Víctima de un Databreaches"
        },
        {
          title: "Dibujo en Línea",
          href: "/#examples/ecommerce",
          description: "permita cargar dibujos realizados por niños y luego animarlos con IA",
          disabled: true
        }
      ]
    }
  ],
  links: [
    {
      title: "Blog",
      href: "/blog"
    }
  ]
};

const infos = navMenuConfig.infosNav[0];
const examples = navMenuConfig.examplesNav[0];
function MainNavigationMenu() {
  return /* @__PURE__ */ jsx(NavigationMenu, { children: /* @__PURE__ */ jsxs(NavigationMenuList, { children: [
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: infos.title }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsxs("ul", { className: "grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]", children: [
        /* @__PURE__ */ jsx("li", { className: "row-span-3 text-center mx-auto", children: /* @__PURE__ */ jsxs(
          "a",
          {
            className: "flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",
            href: "/",
            children: [
              /* @__PURE__ */ jsx(Icons.logo, { className: "size-8" }),
              /* @__PURE__ */ jsx("div", { className: "mb-2 mt-3 text-lg", children: "Isaac Escobar" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-tight text-muted-foreground", children: "Algoritmos y Café" })
            ]
          }
        ) }),
        infos.items?.map((info) => /* @__PURE__ */ jsx(ListItem, { ...info }, info.title))
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { children: examples.title }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsx("ul", { className: "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ", children: examples.items?.map((example) => /* @__PURE__ */ jsx(ListItem, { ...example }, example.title)) }) })
    ] }),
    /* @__PURE__ */ jsx(NavigationMenuItem, { children: navMenuConfig.links.map((link) => /* @__PURE__ */ jsx("a", { href: link.href, className: navigationMenuTriggerStyle(), children: link.title }, link.href)) })
  ] }) });
}
const ListItem = ({
  title,
  href,
  description,
  launched,
  disabled,
  external
}) => {
  const target = external ? "_blank" : void 0;
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: disabled ? void 0 : href,
      target,
      className: cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        disabled ? "text-muted-foreground hover:bg-transparent hover:text-muted-foreground" : ""
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-sm font-medium leading-none", children: [
          /* @__PURE__ */ jsx("span", { className: "mr-2", children: title }),
          disabled ? /* @__PURE__ */ jsx(Badge, { variant: "secondary", radius: "sm", className: "h-5 px-1.5 text-xs font-medium", children: "SOON" }) : null,
          launched ? /* @__PURE__ */ jsx(Badge, { radius: "sm", className: "h-5 px-1.5 text-xs font-medium", children: "NEW" }) : null
        ] }),
        /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: description })
      ]
    }
  ) });
};
ListItem.displayName = "ListItem";

const $$Astro$5 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro();
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const {
    title,
    description = siteConfig.description,
    image = "/og.jpg"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/jpg" href="/favicon-16x16.png"><meta name="generator"', '><!-- Font preloads --><link rel="preload" href="/fonts/calsans-semibold.woff2" as="font" type="font/woff2" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Dark mode with prevent flickering flash between navigations --><script>\nconst setDarkMode = () => {\n  const theme = (() => {\n    if (\n      typeof localStorage !== "undefined" &&\n      localStorage.getItem("theme")\n    ) {\n      return localStorage.getItem("theme");\n    }\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      return "dark";\n    }\n    return "light";\n  })();\n\n  if (theme === "light") {\n    document.documentElement.classList.remove("dark");\n  } else {\n    document.documentElement.classList.add("dark");\n  }\n  window.localStorage.setItem("theme", theme);\n};\n\nsetDarkMode();\ndocument.addEventListener("astro:after-swap", setDarkMode);\n<\/script>', ""])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}));
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/components/layout/base-head.astro", void 0);

const $$Astro$3 = createAstro();
const $$TailwindIndicator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TailwindIndicator;
  return renderTemplate`${""}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/components/tailwind-indicator.astro", void 0);

const $$Astro$2 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, bodyClass } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body${addAttribute(cn("flex flex-col min-h-screen", bodyClass), "class")}> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "TailwindIndicator", $$TailwindIndicator, {})} </body></html>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/layouts/base-layout.astro", void 0);

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx(ScrollBar, {}),
      /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(SheetPrimitive.Portal, { className: cn(className), ...props });
SheetPortal.displayName = SheetPrimitive.Portal.displayName;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-7 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(X, { className: "size-6" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

function SheetMobileNav({
  mainNavItems,
  sidebarNavItems
}) {
  const [open, setOpen] = React.useState(false);
  const mergedMainNavItems = mainNavItems?.filter(
    (item, index, self) => index === self.findIndex((t) => t.href === item.href && t.title === item.title)
  );
  return /* @__PURE__ */ jsxs(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "secondary",
        size: "sm",
        className: "mr-2 h-8 px-1.5 md:hidden",
        children: [
          /* @__PURE__ */ jsx(Icons.hamburger, { className: "size-5" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle Menu" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(SheetContent, { side: "left", className: "pr-0", children: [
      /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center", children: [
        /* @__PURE__ */ jsx(Icons.logo, { className: "mr-2 size-8" }),
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: siteConfig.name })
      ] }),
      /* @__PURE__ */ jsx(ScrollArea, { className: "my-4 h-[calc(100vh-8rem)] pb-10 pl-10", children: /* @__PURE__ */ jsxs("div", { className: "mt-2 mb-20", children: [
        mainNavItems?.length ? /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-3", children: mergedMainNavItems?.map(
          (item) => item.href && /* @__PURE__ */ jsx(
            "a",
            {
              href: item.href,
              className: "text-muted-foreground",
              onClick: () => item.href.startsWith("/#") ? setOpen(false) : void 0,
              children: item.title
            },
            item.href
          )
        ) }) : null,
        sidebarNavItems?.length ? /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-2", children: sidebarNavItems.map((item, index) => {
          const activeItems = item?.items?.filter(
            (subItem) => !subItem.disabled
          );
          if (!activeItems || activeItems.length === 0)
            return null;
          return /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-3 pt-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-medium", children: item.title }),
            activeItems.map((subItem, idx) => /* @__PURE__ */ jsx(React.Fragment, { children: subItem.href ? /* @__PURE__ */ jsx(
              "a",
              {
                href: subItem.href,
                target: subItem?.external ? "_blank" : void 0,
                className: "text-muted-foreground",
                children: subItem.title
              }
            ) : subItem.title }, subItem.href + idx))
          ] }, index);
        }) }) : null
      ] }) })
    ] })
  ] });
}

const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description, mainClass } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {}, { "left-header": ($$result3) => renderTemplate`${renderComponent($$result3, "MainNavigationMenu", MainNavigationMenu, { "slot": "left-header", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/main-navigation-menu", "client:component-export": "MainNavigationMenu" })}`, "mobile-nav-header": ($$result3) => renderTemplate`${renderComponent($$result3, "SheetMobileNav", SheetMobileNav, { "mainNavItems": [...navMenuConfig.links], "sidebarNavItems": [
    ...navMenuConfig.infosNav,
    ...navMenuConfig.examplesNav
  ], "slot": "mobile-nav-header", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/layout/sheet-mobile-nav", "client:component-export": "SheetMobileNav" })}`, "right-header": ($$result3) => renderTemplate`${maybeRenderHead()}<nav> ${renderComponent($$result3, "ThemeToggle", ThemeToggle, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/theme-toggle", "client:component-export": "ThemeToggle" })} </nav>` })} <main${addAttribute(cn(mainClass), "class")}> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/layouts/main-layout.astro", void 0);

const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "pb-4 pt-0", children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const faqData = [
  {
    id: "item-1",
    question: "¿Cómo funciona la aplicación de validación de correos comprometidos?",
    answer: "La aplicación utiliza una base de datos actualizada de correos electrónicos comprometidos. Al ingresar un correo, la aplicación realiza una verificación instantánea y te informa si el correo ha sido comprometido en alguna violación de seguridad."
  },
  {
    id: "item-2",
    question: "¿Es seguro ingresar mi correo en la aplicación?",
    answer: "Sí, la seguridad de tus datos es nuestra máxima prioridad. La aplicación utiliza cifrado seguro para proteger la información ingresada. No almacenamos ni compartimos tus datos personales ni tu dirección de correo electrónico."
  },
  {
    id: "item-3",
    question: "¿La aplicación funciona para cualquier tipo de correo electrónico?",
    answer: "Sí, la aplicación está diseñada para validar direcciones de correo electrónico de cualquier proveedor de servicios, ya sea Gmail, Outlook, Yahoo u otros. Utiliza algoritmos universales y fuentes de datos amplias para abordar la diversidad de plataformas de correo electrónico existentes."
  },
  {
    id: "item-4",
    question: "¿La validación de correos comprometidos es instantánea?",
    answer: "La velocidad de la validación puede variar según diversos factores, como la carga del servidor y la disponibilidad de las fuentes de datos. Sin embargo, nos esforzamos por proporcionar resultados de manera eficiente. La mayoría de las validaciones se completan en tiempo real, ofreciendo a los usuarios información instantánea sobre la seguridad de sus correos electrónico."
  },
  {
    id: "item-5",
    question: "¿Qué debo hacer si mi correo está comprometido?",
    answer: "Si recibes una notificación de que tu correo está comprometido, te recomendamos cambiar tu contraseña de inmediato y habilitar la autenticación de dos factores (2FA) si aún no lo has hecho. Además, verifica y actualiza la seguridad de otras cuentas vinculadas a ese correo."
  },
  {
    id: "item-6",
    question: "¿Cómo puedo informar un problema o dar sugerencias para mejorar la aplicación?",
    answer: "Puedes enviar comentarios, informar problemas o hacer sugerencias directamente desde la aplicación. También proporcionamos un correo electrónico isaac.escobar@codemanpty.com para consultas más detalladas."
  },
  {
    id: "item-7",
    question: "¿Qué debo hacer si olvidé la contraseña de mi cuenta vinculada al correo comprometido?",
    answer: "La aplicación solo muestra parte de la contraseña comprometida por motivos de seguridad. Si olvidaste la contraseña, te recomendamos seguir los procedimientos de recuperación de contraseña proporcionados por tu proveedor de servicios de correo electrónico."
  }
];
function FaqSection() {
  return /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqData.map((faqItem) => /* @__PURE__ */ jsxs(AccordionItem, { value: faqItem.id, children: [
    /* @__PURE__ */ jsx(AccordionTrigger, { children: faqItem.question }),
    /* @__PURE__ */ jsx(AccordionContent, { children: faqItem.answer })
  ] }, faqItem.id)) });
}

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const MyComponent = () => {
  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=6LfH0VwpAAAAAKVespXZQzUJI5_B341HYXsl79H-";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handleRecaptcha = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute("6LfH0VwpAAAAAKVespXZQzUJI5_B341HYXsl79H-", { action: "submit" }).then((token) => {
      });
    });
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(null);
  };
  const validateEmail = (email2) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email2);
  };
  const fetchData = async () => {
    if (!email || !validateEmail(email)) {
      setEmailError("Ingrese un correo electrónico válido");
      return;
    }
    handleRecaptcha();
    try {
      setIsLoading(true);
      const response = await axios.get(`https://us-central1-fair-catcher-343814.cloudfunctions.net/function-2?email=${email}`);
      setData(response.data);
    } catch (error2) {
      setError(error2);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-sm mx-auto items-center space-x-2", children: [
      /* @__PURE__ */ jsx(Input, { type: "email", placeholder: "Email", value: email, onChange: handleEmailChange }),
      /* @__PURE__ */ jsx(Button, { type: "submit", onClick: fetchData, disabled: isLoading, children: "Consultar" })
    ] }),
    emailError && /* @__PURE__ */ jsx("p", { className: "text-red-500", children: emailError }),
    isLoading && /* @__PURE__ */ jsx("p", { children: "Cargando..." }),
    data && data.passwords.length > 0 ? /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "paragraph-container mt-5 mb-5 ", children: [
      /* @__PURE__ */ jsx("p", { className: " mb-5", children: "Contraseñas comprometidas:" }),
      /* @__PURE__ */ jsx("ul", { className: " mt-5", children: data.passwords.map((password, index) => /* @__PURE__ */ jsx("li", { children: password }, index)) }),
      /* @__PURE__ */ jsx("p", { children: data.texto })
    ] }) }) : /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "paragraph-container mt-5", children: /* @__PURE__ */ jsx("p", { children: data && data.texto }) }) })
  ] }) });
};

const $$Astro = createAstro();
const $$Passwordseguros = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Passwordseguros;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Verifica la Seguridad de tu Correo Electr\xF3nico", "description": "Permite consultar si una cuenta fue comprometida", "mainClass": "min-h-screen container max-w-screen-md py-10" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="space-y-6 text-center mb-14"> <h1 class="font-heading text-4xl text-center ">
Verifica la Seguridad de tu Correo Electrónico
</h1> <p class="text-muted-foreground text-md ">
Comprueba si tu Correo fue Víctima de un <a href="/blog/data-breach/" rel="noreferrer" class="underline underline-offset-2">
Databreaches
</a> </p> </div> <div class="space-y-6 text-center mb-10">${renderComponent($$result2, "PasswordLeak", MyComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/api-amazon", "client:component-export": "default" })}</div> <div class="space-y-6 text-center mb-14"> <div class="space-y-6 text-center mb-14"> <p class="text-muted-foreground text-sm">
Queremos que te sientas seguro utilizando nuestro servicio. Por eso, te garantizamos que en <strong>CodeManPTY</strong> nunca solicitaremos tu contraseña. Solo necesitamos tu dirección de correo electrónico para proporcionarte información detallada sobre la seguridad de tu cuenta. Protege tu privacidad sin preocupaciones
</p> </div> </div> ${renderComponent($$result2, "FaqSection", FaqSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/faq-section", "client:component-export": "default" })} </section> ` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/Passwordseguros.astro", void 0);

const $$file = "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/Passwordseguros.astro";
const $$url = "/Passwordseguros";

const Passwordseguros = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Passwordseguros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Icon as $, Badge as B, FaqSection as F, MainNavigationMenu as M, Passwordseguros as P, SheetMobileNav as S, ThemeToggle as T, $$MainLayout as a, buttonVariants as b, cn as c, $$Header as d, $$Footer as e, formatDate as f, $$BaseLayout as g, capitalizer as h, navMenuConfig as n, siteConfig as s };
