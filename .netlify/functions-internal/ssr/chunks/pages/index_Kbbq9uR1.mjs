import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute, q as renderTransition } from '../astro_yDAMJHzO.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getPosts, $ as $$BlogHeader, a as $$BlogCard, b as getGuides } from './_category__jwzvLT1r.mjs';
import { a as $$MainLayout, f as formatDate, c as cn, b as buttonVariants, s as siteConfig } from './Passwordseguros_lXrFkMie.mjs';
/* empty css                               */
import { b as $$PageHeader, c as $$DocsLayout } from './__c2qsfxMb.mjs';

const $$Astro$3 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  const posts = await getPosts();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container py-10"> ${renderComponent($$result2, "BlogHeader", $$BlogHeader, { "title": "Blog" })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9 md:gap-y-11 lg:gap-y-16 lg:gap-x-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { ...post })}`)} </div> </section> ` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/blog/index.astro", void 0);

const $$file$2 = "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/blog/index.astro";
const $$url$2 = "/blog";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$GuideCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GuideCard;
  const slug = Astro2.props.slug;
  const guide = Astro2.props.data;
  return renderTemplate`${maybeRenderHead()}<article class="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"> ${guide.featured && renderTemplate`<span class="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium">
Featured
</span>`} <div class="flex flex-col justify-between space-y-4"> <div class="space-y-2"> <h2 class="font-heading text-2xl"${addAttribute(renderTransition($$result, "r4up6nez", "", "title-" + slug), "data-astro-transition-scope")}> ${guide.title} </h2> ${guide.description && renderTemplate`<p class="text-muted-foreground"${addAttribute(renderTransition($$result, "zoreth3s", "", "desc-" + slug), "data-astro-transition-scope")}> ${guide.description} </p>`} </div> ${guide.pubDate && renderTemplate`<span class="font-medium text-sm text-muted-foreground"${addAttribute(renderTransition($$result, "aomflevs", "", "date-" + slug), "data-astro-transition-scope")}> ${formatDate(guide.pubDate)} </span>`} </div> <a${addAttribute(`/guides/${slug}/`, "href")} class="absolute inset-0"> <span class="sr-only">View</span> </a> </article>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/components/cards/guide-card.astro", "self");

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const guides = await getGuides();
  return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, { "title": "Blog", "description": "Lorem ipsum dolor sit amet" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container max-w-6xl py-10"> ${renderComponent($$result2, "DocsPageHeader", $$PageHeader, { "heading": "Guides", "text": "This section includes end-to-end guides for developing Astro v4 apps." })} ${guides?.length ? renderTemplate`<div class="grid gap-4 md:grid-cols-2 md:gap-6"> ${guides.map((guide) => renderTemplate`${renderComponent($$result2, "GuideCard", $$GuideCard, { ...guide })}`)} </div>` : renderTemplate`<p>No guides published.</p>`} </section> ` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/guides/index.astro", void 0);

const $$file$1 = "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/guides/index.astro";
const $$url$1 = "/guides";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Astronomy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="space-y-6 pb-12  lg:py-10"> <div class="container flex max-w-[64rem] flex-col items-center gap-5 text-center"> <a href="https://www.threads.net/@isaac.escobarg"${addAttribute(cn(buttonVariants({ variant: "outline", size: "sm" })), "class")} target="_blank">
Sigueme en
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24"><path fill="currentColor" d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098c1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015c-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164c1.43 1.783 3.631 2.698 6.54 2.717c2.623-.02 4.358-.631 5.8-2.045c1.647-1.613 1.618-3.593 1.09-4.798c-.31-.71-.873-1.3-1.634-1.75c-.192 1.352-.622 2.446-1.284 3.272c-.886 1.102-2.14 1.704-3.73 1.79c-1.202.065-2.361-.218-3.259-.801c-1.063-.689-1.685-1.74-1.752-2.964c-.065-1.19.408-2.285 1.33-3.082c.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757c-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32l-1.757-1.18c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388c.108.046.216.094.321.142c1.49.7 2.58 1.761 3.154 3.07c.797 1.82.871 4.79-1.548 7.158c-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021c-1.836.103-2.98.946-2.916 2.143c.067 1.256 1.452 1.839 2.784 1.767c1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221"></path></svg> </a> <h1 class="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl !leading-[1.1] text-balance">
El arte de la
<span class="text-gradient_indigo-purple">
Programación <span class="font-sans font-bold"></span><span class="font-sans font-bold">+</span>Enfrentamiento Bugs
</span> </h1> <p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-balance">
Desde ideas innovadoras hasta soluciones prácticas, cada proyecto cuenta una historia de habilidad y dedicación.
</p> <div class="flex justify-center space-x-2 md:space-x-4"> <a href="mailto:isaac.escobar@codemanpty.com"${addAttribute(cn(buttonVariants({ size: "lg" })), "class")}>
Contacto
</a> <a${addAttribute(siteConfig.links.github, "href")} target="_blank" rel="noreferrer"${addAttribute(cn(buttonVariants({ variant: "outline", size: "lg" }), "px-4"), "class")}> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg> </a> </div> </div> </section> <section id="open-source" class="container py-6 md:py-8 lg:py-16"> <div class="mx-auto flex max-w-[48rem] flex-col items-center justify-center gap-3 text-center"> <h4 class="font-heading text-xl md:text-4xl">
Verifica la Seguridad de tu Correo Electrónico
</h4> <p class="max-w-[85%] leading-normal text-muted-foreground text-sm md:text-base md:leading-6">
A nadie le gusta la idea de que su información personal sea accesible sin permiso. Con la creciente frecuencia de databreaches, es fundamental que todos tomemos medidas para protegernos.
</p> <p class="max-w-[85%] leading-normal text-muted-foreground text-sm md:text-base md:leading-6"></p> <a href="/Passwordseguros" rel="noreferrer" class="underline underline-offset-2">
Comprueba si tu Correo fue Víctima de un Databreaches
</a>
.
 </div> </section> ` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/index.astro", void 0);

const $$file = "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
