import { A as AstroError, i as InvalidImageService, j as ExpectedImageOptions, E as ExpectedImage, c as createAstro, d as createComponent, k as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, l as UnknownContentCollectionError, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, f as renderComponent, u as unescapeHTML, q as renderTransition, g as renderSlot } from '../astro_yDAMJHzO.mjs';
import 'kleur/colors';
import 'clsx';
import { c as cn, b as buttonVariants, $ as $$Icon, B as Badge, f as formatDate, a as $$MainLayout, d as $$Header, M as MainNavigationMenu, S as SheetMobileNav, n as navMenuConfig, s as siteConfig, e as $$Footer, g as $$BaseLayout } from './Passwordseguros_lXrFkMie.mjs';
/* empty css                               */
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { i as isESMImportedImage, a as isLocalService, b as isRemoteImage, D as DEFAULT_HASH_PROPS, p as prependForwardSlash } from '../astro/assets-service__0QKldKc.mjs';
import { toc } from 'mdast-util-toc';
import { remark } from 'remark';
import { visit } from 'unist-util-visit';

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service__0QKldKc.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const originalPath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : resolvedOptions.src;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalPath);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalPath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$c = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/node_modules/astro/components/Image.astro", void 0);

const $$Astro$b = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///C:/Users/iescobar/Downloads/codeman%20v4/astro-nomy/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/Data-Breach.md": () => import('../Data-Breach_boMhAp2T.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"data-breach":"/src/content/blog/Data-Breach.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/Data-Breach.md": () => import('../Data-Breach_FhElUpOa.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$a = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const slug = Astro2.props.slug;
  const { title, description, pubDate, updatedDate, coverImage, category } = Astro2.props.data;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative container max-w-screen-md py-10"> <a href="/blog"${addAttribute(cn(
    buttonVariants({ variant: "ghost" }),
    "absolute left-[-200px] top-10 hidden xl:inline-flex text-muted-foreground"
  ), "class")}${addAttribute(renderTransition($$result2, "ks7i2azy", "slide", ""), "data-astro-transition-scope")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:chevron-left", "class": "mr-2 size-4" })}
Blog
</a> <article class="prose dark:prose-invert max-w-none"> <a${addAttribute(`/blog/category/${category}`, "href")}> ${renderComponent($$result2, "Badge", Badge, { "radius": "md", "className": "capitalize", "data-astro-transition-scope": renderTransition($$result2, "qiq5336j", "", "category-" + slug) }, { "default": ($$result3) => renderTemplate`${category}` })} </a> ${renderComponent($$result2, "Image", $$Image, { "class": "rounded-xl overflow-hidden my-6", "width": 1020, "height": 510, "src": coverImage, "alt": "", "data-astro-transition-scope": renderTransition($$result2, "phjumi34", "", "img-" + slug) })} <div class="flex items-center justify-between"> <span class="font-medium text-muted-foreground"${addAttribute(renderTransition($$result2, "f3cm6adb", "", "date-" + slug), "data-astro-transition-scope")}> ${formatDate(pubDate)} ${updatedDate && renderTemplate`<span>- Last updated on ${formatDate(updatedDate)}</span>`} </span> </div> <h1 class="font-heading text-4xl my-4"${addAttribute(renderTransition($$result2, "aknxxcg2", "", "title-" + slug), "data-astro-transition-scope")}> ${title} </h1> <p>${description}</p> <hr class="my-6"> ${renderSlot($$result2, $$slots["default"])} </article> </div> ` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/layouts/blog-post.astro", "self");

const $$Astro$9 = createAstro();
async function getStaticPaths$2() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$$2;
  const post = Astro2.props;
  const slug = Astro2.params.slug;
  const { Content } = await post.render();
  if (!slug || !post) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  return renderTemplate`${renderComponent($$result, "BlogPostLayout", $$BlogPost, { ...post }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/blog/[...slug].astro", void 0);

const $$file$2 = "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/blog/[...slug].astro";
const $$url$2 = "/blog/[...slug]";

const ____slug_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$2,
  file: $$file$2,
  getStaticPaths: getStaticPaths$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$Callout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Callout;
  const { icon, type = "default" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("mt-6 flex items-start rounded-md border py-3 px-4", {
    "text-blue-800 border-blue-200 bg-blue-100 dark:text-blue-200 dark:border-blue-200/40 dark:bg-blue-900/40": type === "info",
    "text-red-900 border-red-200 bg-red-100 dark:text-red-200 dark:border-red-200/30 dark:bg-red-900/40": type === "danger",
    "text-orange-800 border-orange-200 bg-orange-100 dark:text-orange-300 dark:border-orange-400/30 dark:bg-orange-400/20": type === "warning"
  }), "class")}> ${icon && renderTemplate`<span class="mr-3 text-xl font-icon-callout">${icon}</span>`} <div class="callout"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/components/callout.astro", void 0);

const $$Astro$7 = createAstro();
const $$MdxCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MdxCard;
  const { href, className, disabled, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg",
    disabled && "cursor-not-allowed opacity-60",
    className
  ), "class")}${spreadAttributes(attrs)}> <div class="flex flex-col justify-between space-y-4"> <div class="space-y-2 [&>h3]:!mt-0 [&>h4]:!mt-0 [&>p]:text-muted-foreground"> ${renderSlot($$result, $$slots["default"])} </div> </div> ${href && renderTemplate`<a${addAttribute(disabled ? "#" : href, "href")} class="absolute inset-0"> <span class="sr-only">View</span> </a>`} </div>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/components/content/mdx-card.astro", void 0);

const MdxComponents = {
  h1: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h1",
    {
      className: cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      ),
      ...props
    }
  ),
  h2: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h2",
    {
      className: cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      ),
      ...props
    }
  ),
  h3: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h3",
    {
      className: cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      ),
      ...props
    }
  ),
  h4: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h4",
    {
      className: cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      ),
      ...props
    }
  ),
  h5: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h5",
    {
      className: cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      ),
      ...props
    }
  ),
  h6: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "h6",
    {
      className: cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      ),
      ...props
    }
  ),
  a: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "a",
    {
      className: cn("font-medium underline underline-offset-4", className),
      ...props
    }
  ),
  p: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "p",
    {
      className: cn("leading-7 [&:not(:first-child)]:mt-6", className),
      ...props
    }
  ),
  ul: ({ className, ...props }) => /* @__PURE__ */ jsx("ul", { className: cn("my-6 ml-6 list-disc", className), ...props }),
  ol: ({ className, ...props }) => /* @__PURE__ */ jsx("ol", { className: cn("my-6 ml-6 list-decimal", className), ...props }),
  li: ({ className, ...props }) => /* @__PURE__ */ jsx("li", { className: cn("mt-2", className), ...props }),
  blockquote: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "blockquote",
    {
      className: cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      ),
      ...props
    }
  ),
  img: ({
    className,
    alt,
    ...props
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    /* @__PURE__ */ jsx("img", { className: cn("rounded-md border", className), alt, ...props })
  ),
  hr: ({ ...props }) => /* @__PURE__ */ jsx("hr", { className: "my-4 md:my-8", ...props }),
  table: ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: "my-6 w-full overflow-y-auto", children: /* @__PURE__ */ jsx("table", { className: cn("w-full", className), ...props }) }),
  tr: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "tr",
    {
      className: cn("m-0 border-t p-0 even:bg-muted", className),
      ...props
    }
  ),
  th: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "th",
    {
      className: cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      ),
      ...props
    }
  ),
  td: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "td",
    {
      className: cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      ),
      ...props
    }
  ),
  pre: ({ className, ...props }) => /* @__PURE__ */ jsx(
    "pre",
    {
      className: cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black p-4",
        className
      ),
      ...props
    }
  ),
  Image: $$Image,
  Callout: $$Callout,
  Card: $$MdxCard
};

const $$Astro$6 = createAstro();
const $$SidebarNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SidebarNav;
  const { items } = Astro2.props;
  const { pathname } = Astro2.url;
  return renderTemplate`${items.length ? renderTemplate`${maybeRenderHead()}<div class="w-full">${items.map((item) => renderTemplate`<div${addAttribute(cn("pb-8"), "class")}><h4 class="mb-1 rounded-md px-2 py-1 text-sm font-medium">${item.title}</h4>${item.items?.length ? renderTemplate`<div class="grid grid-flow-row auto-rows-max text-sm">${item.items.map(
    (item2) => !item2.disabled && item2.href ? renderTemplate`<a${addAttribute(item2.href, "href")}${addAttribute(cn(
      "flex w-full items-center rounded-md p-2 hover:underline",
      {
        "bg-muted": pathname === item2.href
      }
    ), "class")}${addAttribute(item2.external ? "_blank" : "", "target")}${addAttribute(item2.external ? "noreferrer" : "", "rel")}>${item2.title}</a>` : renderTemplate`<span class="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">${item2.title}</span>`
  )}</div>` : null}</div>`)}</div>` : null}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/components/layout/sidebar-nav.astro", void 0);

const $$Astro$5 = createAstro();
const $$PageHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { heading, text, className, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("space-y-4", className), "class")}${spreadAttributes(attrs)}> <h1 class="inline-block font-heading text-4xl lg:text-5xl"> ${heading} </h1> ${text && renderTemplate`<p class="text-xl text-muted-foreground">${text}</p>`} </div> <hr class="my-4">`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/components/page-header.astro", void 0);

const docsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/getting-started/"
    },
    {
      title: "Guides",
      href: "/guides"
    }
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/getting-started/"
        }
      ]
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Introduction",
          href: "/docs/documentation"
        },
        {
          title: "Contentlayer",
          href: "/docs/in-progress",
          disabled: true
        },
        {
          title: "Components",
          href: "/docs/documentation/components"
        },
        {
          title: "Code Blocks",
          href: "/docs/documentation/code-blocks"
        },
        {
          title: "Style Guide",
          href: "/docs/documentation/style-guide"
        },
        {
          title: "Search",
          href: "/docs/in-progress",
          disabled: true
        }
      ]
    },
    {
      title: "Blog",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true
        },
        {
          title: "Build your own",
          href: "/docs/in-progress",
          disabled: true
        },
        {
          title: "Writing Posts",
          href: "/docs/in-progress",
          disabled: true
        }
      ]
    },
    {
      title: "Dashboard",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true
        },
        {
          title: "Layouts",
          href: "/docs/in-progress",
          disabled: true
        },
        {
          title: "Server Components",
          href: "/docs/in-progress",
          disabled: true
        },
        {
          title: "Authentication",
          href: "/docs/in-progress",
          disabled: true
        },
        {
          title: "Database with Prisma",
          href: "/docs/in-progress",
          disabled: true
        },
        {
          title: "API Routes",
          href: "/docs/in-progress",
          disabled: true
        }
      ]
    },
    {
      title: "Marketing Site",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true
        },
        {
          title: "File Structure",
          href: "/docs/in-progress",
          disabled: true
        },
        {
          title: "Tailwind CSS",
          href: "/docs/in-progress",
          disabled: true
        },
        {
          title: "Typography",
          href: "/docs/in-progress",
          disabled: true
        }
      ]
    }
  ]
};

const $$Astro$4 = createAstro();
function getPagerForDoc(slug) {
  const flattenedLinks = [...flatten(docsConfig.sidebarNav)];
  let activeIndex = flattenedLinks.findIndex(
    (link) => `/docs/${slug}` === link?.href
  );
  activeIndex = Math.max(activeIndex, 0);
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null;
  return {
    prev,
    next
  };
}
function flatten(links) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link);
  }, []);
}
const $$Pager = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Pager;
  const { slug } = Astro2.props;
  const pager = getPagerForDoc(slug);
  if (!pager) {
    return null;
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row items-center justify-between"> ${pager?.prev && renderTemplate`<a${addAttribute(pager.prev.href, "href")}${addAttribute(cn(buttonVariants({ variant: "outline" })), "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:chevron-left", "class": "mr-2 size-4" })} ${pager.prev.title} </a>`} ${pager?.next && renderTemplate`<a${addAttribute(pager.next.href, "href")}${addAttribute(cn(buttonVariants({ variant: "outline" }), "ml-auto"), "class")}> ${pager.next.title} ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:chevron-right", "class": "ml-2 size-4" })} </a>`} </div>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/components/pager.astro", void 0);

function DashboardTableOfContents({ toc }) {
  const itemIds = toc.items ? toc.items.flatMap((item) => [item.url, item?.items?.map((item2) => item2.url)]).flat().filter(Boolean).map((id) => id?.split("#")[1]) : [];
  const activeHeading = useActiveItem(itemIds);
  if (!toc?.items) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("p", { className: "font-medium", children: "On This Page" }),
    /* @__PURE__ */ jsx(Tree, { tree: toc, activeItem: activeHeading })
  ] });
}
function useActiveItem(itemIds) {
  const [activeId, setActiveId] = React.useState("");
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );
    itemIds?.forEach((id) => {
      if (!id) {
        return;
      }
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      itemIds?.forEach((id) => {
        if (!id) {
          return;
        }
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);
  return activeId;
}
function Tree({ tree, level = 1, activeItem }) {
  return tree?.items?.length && level < 3 ? /* @__PURE__ */ jsx("ul", { className: cn("m-0 list-none", { "pl-4": level !== 1 }), children: tree.items.map((item, index) => {
    return /* @__PURE__ */ jsxs("li", { className: cn("mt-0 pt-2"), children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: item.url,
          className: cn(
            "inline-block no-underline",
            item.url === `#${activeItem}` ? "font-medium text-primary" : "text-sm text-muted-foreground"
          ),
          children: item.title
        }
      ),
      item.items?.length ? /* @__PURE__ */ jsx(Tree, { tree: item, level: level + 1, activeItem }) : null
    ] }, index);
  }) }) : null;
}

const $$Astro$3 = createAstro();
const $$DocsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DocsLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "className": "border-b" }, { "left-header": ($$result3) => renderTemplate`${renderComponent($$result3, "MainNavigationMenu", MainNavigationMenu, { "slot": "left-header", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/main-navigation-menu", "client:component-export": "MainNavigationMenu" })}`, "mobile-nav-header": ($$result3) => renderTemplate`${renderComponent($$result3, "SheetMobileNav", SheetMobileNav, { "mainNavItems": [...navMenuConfig.links], "sidebarNavItems": [
    ...navMenuConfig.infosNav,
    ...navMenuConfig.examplesNav,
    ...docsConfig.sidebarNav
  ], "slot": "mobile-nav-header", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/layout/sheet-mobile-nav", "client:component-export": "SheetMobileNav" })}`, "right-header": ($$result3) => renderTemplate`${maybeRenderHead()}<nav> <a${addAttribute(siteConfig.links.github, "href")} target="_blank" rel="noreferrer"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:github", "className": "size-8" })} <span class="sr-only">GitHub</span> </a> </nav>` })} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", $$Footer, { "className": "border-t" })} ` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/layouts/docs-layout.astro", void 0);

const textTypes = ["text", "emphasis", "strong", "inlineCode"];
function flattenNode(node) {
  const p = [];
  visit(node, (node2) => {
    if (!textTypes.includes(node2.type))
      return;
    p.push(node2.value);
  });
  return p.join(``);
}
function getItems(node, current) {
  if (!node) {
    return {};
  }
  if (node.type === "paragraph") {
    visit(node, (item) => {
      if (item.type === "link") {
        current.url = item.url;
        current.title = flattenNode(node);
      }
      if (item.type === "text") {
        current.title = flattenNode(node);
      }
    });
    return current;
  }
  if (node.type === "list") {
    current.items = node.children.map((i) => getItems(i, {}));
    return current;
  } else if (node.type === "listItem") {
    const heading = getItems(node.children[0], {});
    if (node.children.length > 1) {
      getItems(node.children[1], heading);
    }
    return heading;
  }
  return {};
}
const getToc = () => (node, file) => {
  const table = toc(node);
  file.data = getItems(table.map, {});
};
async function getTableOfContents(content) {
  const result = await remark().use(getToc).process(content);
  return result.data;
}

const $$Astro$2 = createAstro();
async function getStaticPaths$1() {
  const docs = await getCollection("docs");
  return docs.map((doc) => ({
    params: { slug: doc.slug },
    props: doc
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$1;
  const doc = Astro2.props;
  const slug = Astro2.params.slug;
  const toc = await getTableOfContents(doc.body);
  const { Content } = await doc.render();
  if (!slug || !doc) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, { "title": doc.data.title, "description": doc.data.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container flex-1"> <div class="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10"> <aside class="fixed top-18 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-8"> ${renderComponent($$result2, "DocsSidebarNav", $$SidebarNav, { "items": docsConfig.sidebarNav })} </aside> <main class="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]"> <div class="mx-auto w-full min-w-0"> ${renderComponent($$result2, "DocsPageHeader", $$PageHeader, { "heading": doc.data.title, "text": doc.data.description })} ${renderComponent($$result2, "Content", Content, { "components": MdxComponents })} <hr class="my-4 md:my-6"> ${renderComponent($$result2, "DocsPager", $$Pager, { "slug": doc.slug })} </div> <div class="hidden text-sm xl:block"> <div class="sticky top-18 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10"> ${renderComponent($$result2, "DashboardTableOfContents", DashboardTableOfContents, { "toc": toc, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/toc", "client:component-export": "DashboardTableOfContents" })} </div> </div> </main> </div> </div> ` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/docs/[...slug].astro", void 0);

const $$file$1 = "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/docs/[...slug].astro";
const $$url$1 = "/docs/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$GuidePost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GuidePost;
  const guide = Astro2.props;
  const slug = guide.slug;
  const { title, description, pubDate } = guide.data;
  const toc = await getTableOfContents(guide.body);
  return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container max-w-5xl py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20"> <article class="prose dark:prose-invert max-w-none"> <span class="font-medium text-sm text-muted-foreground"${addAttribute(renderTransition($$result2, "4gvfz6xl", "", "date-" + slug), "data-astro-transition-scope")}> ${formatDate(pubDate)} </span> <h1 class="font-heading text-4xl my-4"${addAttribute(renderTransition($$result2, "srak3jhj", "", "title-" + slug), "data-astro-transition-scope")}> ${title} </h1> <p class="text-muted-foreground"${addAttribute(renderTransition($$result2, "sugzexu7", "", "desc-" + slug), "data-astro-transition-scope")}> ${description} </p> <hr class="my-6"> ${renderSlot($$result2, $$slots["default"])} <hr class="flex md:hidden my-4"> <div class="flex md:hidden justify-start py-6 lg:py-10"> <a href="/guides"${addAttribute(cn(buttonVariants({ variant: "ghost" })), "class")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:chevron-left", "class": "mr-2 size-4" })}
See all guides
</a> </div> </article> <div class="hidden text-sm lg:block"> <div class="sticky top-18 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10"${addAttribute(renderTransition($$result2, "zb4ovzvs", "slide", ""), "data-astro-transition-scope")}> ${renderComponent($$result2, "DashboardTableOfContents", DashboardTableOfContents, { "toc": toc, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/toc", "client:component-export": "DashboardTableOfContents" })} </div> </div> </main> ` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/layouts/guide-post.astro", "self");

const $$Astro = createAstro();
async function getStaticPaths() {
  const guides = await getCollection("guides");
  return guides.map((guide) => ({
    params: { slug: guide.slug },
    props: guide
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const guide = Astro2.props;
  const slug = Astro2.params.slug;
  const { Content } = await guide.render();
  if (!slug || !guide) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  return renderTemplate`${renderComponent($$result, "GuidePostLayout", $$GuidePost, { ...guide }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, { "components": MdxComponents })} ` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/guides/[...slug].astro", void 0);

const $$file = "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/guides/[...slug].astro";
const $$url = "/guides/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, ____slug_$2 as _, getConfiguredImageService as a, $$PageHeader as b, $$DocsLayout as c, ____slug_$1 as d, ____slug_ as e, getCollection as g, imageConfig as i };
