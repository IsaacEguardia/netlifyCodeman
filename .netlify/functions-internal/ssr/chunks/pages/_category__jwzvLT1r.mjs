import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, q as renderTransition } from '../astro_yDAMJHzO.mjs';
import 'kleur/colors';
import 'clsx';
import { c as cn, b as buttonVariants, B as Badge, f as formatDate, h as capitalizer, a as $$MainLayout } from './Passwordseguros_lXrFkMie.mjs';
import { g as getCollection, $ as $$Image } from './__c2qsfxMb.mjs';
/* empty css                               */

async function getCategories() {
  const posts = await getCollection("blog");
  const categories = [
    ...new Set([].concat.apply(posts.map((post) => post.data.category)))
  ];
  return categories;
}
async function getPosts() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return posts;
}
async function getPostsByCategory(category) {
  const posts = (await getCollection("blog")).filter((post) => post.data.category === category).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return posts;
}
async function getGuides() {
  const guides = (await getCollection("guides")).filter((guide) => guide.data.published).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return guides;
}

const $$Astro$2 = createAstro();
const $$BlogHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogHeader;
  const categories = await getCategories();
  const { title } = Astro2.props;
  const { category } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<h1 class="inline-block font-heading text-4xl">${title}</h1> <div class="flex items-start justify-between my-6 max-md:gap-4"> <!-- <span class="flex items-center lg:w-full max-w-xs h-10 rounded-md px-2 lg:px-3 border text-muted-foreground">
    <Icon name="ri:search-line" class="size-5" />
    <span class="text-sm ml-2 hidden lg:flex">Search (coming soon)</span>
  </span> --> ${categories?.length ? renderTemplate`<ul class="flex snap-x snap-mandatory overflow-auto items-center space-x-2 lg:space-x-2.5 pb-2"> <li class="flex-shrink-0 snap-start"> <a${addAttribute(`/blog`, "href")}${addAttribute(cn(
    !category ? "select-none" : "",
    buttonVariants({
      variant: !category ? "default" : "outline"
    })
  ), "class")}>
Todas las categorías
</a> </li> ${categories.map((item) => renderTemplate`<li class="flex-shrink-0 snap-start"> <a${addAttribute(`/blog/category/${item}`, "href")}${addAttribute(cn(
    "capitalize",
    item === category ? "select-none" : "",
    buttonVariants({
      variant: item === category ? "default" : "outline"
    })
  ), "class")}> ${item} </a> </li>`)} </ul>` : renderTemplate`<div></div>`} </div> <hr class="mb-7">`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/components/blog-header.astro", void 0);

const $$Astro$1 = createAstro();
const $$BlogCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const post = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group space-y-4"> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="flex h-52 group-hover:-translate-y-2 group-hover:shadow-xl transition duration-300"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full h-full object-cover rounded-xl overflow-hidden", "width": 400, "height": 200, "src": post.data.coverImage, "alt": "descriptive text", "data-astro-transition-scope": renderTransition($$result, "ljnepo5n", "", "img-" + post.slug) })} </a> <div class="flex items-center justify-between"> <a${addAttribute(`/blog/category/${post.data.category}`, "href")}> ${renderComponent($$result, "Badge", Badge, { "radius": "md", "className": "capitalize", "data-astro-transition-scope": renderTransition($$result, "zpwvqmfl", "", "category-" + post.slug) }, { "default": ($$result2) => renderTemplate`${post.data.category}` })} </a> <span class="font-medium text-muted-foreground"${addAttribute(renderTransition($$result, "lwwqn3fc", "", "date-" + post.slug), "data-astro-transition-scope")}> ${formatDate(post.data.pubDate)} </span> </div> <div> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="group-hover:underline"> <h2 class="font-heading text-xl md:text-2xl leading-snug line-clamp-3"${addAttribute(renderTransition($$result, "6mogw5uh", "", "title-" + post.slug), "data-astro-transition-scope")}> ${post.data.title} </h2> </a> </div> </article>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/components/cards/blog-card.astro", "self");

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { category: post.data.category }
  }));
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  if (!category) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  const posts = await getPostsByCategory(category);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${capitalizer(category)} | Blog`, "description": `All posts for ${category} category` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container py-10"> ${renderComponent($$result2, "BlogHeader", $$BlogHeader, { "title": `Filtro por ${category} category` })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9 md:gap-y-16 lg:gap-x-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { ...post })}`)} </div> </section> ` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/blog/category/[category].astro", void 0);

const $$file = "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/blog/category/[category].astro";
const $$url = "/blog/category/[category]";

const _category_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogHeader as $, _category_ as _, $$BlogCard as a, getGuides as b, getPosts as g };
