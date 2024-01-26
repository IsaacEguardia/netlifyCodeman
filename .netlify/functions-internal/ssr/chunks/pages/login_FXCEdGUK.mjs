import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, g as renderSlot, e as addAttribute } from '../astro_yDAMJHzO.mjs';
import 'kleur/colors';
import 'clsx';
import { T as ThemeToggle, $ as $$Icon, s as siteConfig, g as $$BaseLayout, c as cn, b as buttonVariants } from './Passwordseguros_lXrFkMie.mjs';

const $$Astro$2 = createAstro();
const $$UserAuthForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$UserAuthForm;
  return renderTemplate`${maybeRenderHead()}<div class="h-56 border rounded-lg flex justify-center items-center text-muted-foreground">Auth form soon</div>`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/components/forms/user-auth-form.astro", void 0);

const $$Astro$1 = createAstro();
const $$AuthLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AuthLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"> <div class="absolute right-4 top-4 md:right-8 md:top-8"> ${renderSlot($$result2, $$slots["right-corner"])} </div> <div class="absolute right-8 bottom-4 md:right-12 md:bottom-8"> ${renderComponent($$result2, "ThemeToggle", ThemeToggle, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/theme-toggle", "client:component-export": "ThemeToggle" })} </div> <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"> <div class="absolute inset-0 bg-foreground dark:bg-background/50"></div> <div class="relative z-20 flex items-center text-lg font-medium"> <a href="/" class="hidden items-center space-x-2 md:flex"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ant-design:code-filled", "class": "size-8" })} <span class="hidden font-bold sm:inline-block"> ${siteConfig.name} </span> </a> </div> <div class="relative z-20 mt-auto"> <blockquote class="space-y-2"> <p class="text-lg">
&ldquo;This library has saved me countless hours of work and helped
            me deliver stunning designs to my clients faster than ever
            before.&rdquo;
</p> <footer class="text-sm">Sofia Davis</footer> </blockquote> </div> </div> <div class="md:p-8"> ${renderSlot($$result2, $$slots["default"])} </div> </div> ` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/layouts/auth-layout.astro", void 0);

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "Login", "description": "Login" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-96"> <div class="flex flex-col space-y-2 text-center"> <h1 class="text-2xl font-semibold tracking-tight">Welcome back !</h1> <p class="text-sm text-muted-foreground">
Enter your email below to create your account
</p> </div> ${renderComponent($$result2, "UserAuthForm", $$UserAuthForm, {})} <p class="px-8 text-center text-sm text-muted-foreground">
By clicking continue, you agree to our${" "} <a href="/terms" class="underline underline-offset-4 hover:text-primary">
Terms of Service
</a>${" "}
and${" "} <a href="/privacy" class="underline underline-offset-4 hover:text-primary">
Privacy Policy
</a>
.
</p> </div> `, "right-corner": ($$result2) => renderTemplate`<a href="/register"${addAttribute(cn(buttonVariants({ variant: "ghost" })), "class")}>
Sign up
</a>` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/login.astro", void 0);

const $$file = "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/login.astro";
const $$url = "/login";

const login = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$UserAuthForm as $, $$AuthLayout as a, login as l };
