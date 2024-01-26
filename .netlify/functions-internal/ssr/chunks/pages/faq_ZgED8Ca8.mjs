import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_yDAMJHzO.mjs';
import 'kleur/colors';
import 'clsx';
import { F as FaqSection, a as $$MainLayout } from './Passwordseguros_lXrFkMie.mjs';

const $$Astro = createAstro();
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "FAQ", "description": "Frequently Asked Questions", "mainClass": "min-h-screen container max-w-screen-md py-10" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="space-y-6 text-center mb-14"> <h1 class="font-heading text-4xl text-center">
Preguntas frecuentes
</h1> <p class="text-muted-foreground text-md">
Explore our comprehensive FAQ to find quick answers to common inquiries.
        If you need further assistance, don't hesitate to contact our support
        team for personalized help.
</p> </div> ${renderComponent($$result2, "FaqSection", FaqSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/faq-section", "client:component-export": "default" })} </section> ` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/faq.astro", void 0);

const $$file = "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/faq.astro";
const $$url = "/faq";

export { $$Faq as default, $$file as file, $$url as url };
