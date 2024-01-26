import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_yDAMJHzO.mjs';
import 'kleur/colors';
import { $ as $$UserAuthForm, a as $$AuthLayout } from './login_FXCEdGUK.mjs';
import { c as cn, b as buttonVariants } from './Passwordseguros_lXrFkMie.mjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "Register", "description": "Register" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-96"> <div class="flex flex-col space-y-2 text-center"> <h1 class="text-2xl font-semibold tracking-tight">Create an account</h1> <p class="text-sm text-muted-foreground">
Enter your email below to create your account
</p> </div> ${renderComponent($$result2, "UserAuthForm", $$UserAuthForm, {})} <p class="px-8 text-center text-sm text-muted-foreground">
By clicking continue, you agree to our${" "} <a href="/terms" class="underline underline-offset-4 hover:text-primary">
Terms of Service
</a>${" "}
and${" "} <a href="/privacy" class="underline underline-offset-4 hover:text-primary">
Privacy Policy
</a>
.
</p> </div> `, "right-corner": ($$result2) => renderTemplate`<a href="/login"${addAttribute(cn(buttonVariants({ variant: "ghost" })), "class")}>
Login
</a>` })}`;
}, "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/register.astro", void 0);

const $$file = "C:/Users/iescobar/Downloads/codeman v4/astro-nomy/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
