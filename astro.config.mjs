import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions"; // Import the Netlify adapter

// https://astro.build/config
export default defineConfig({
  site: "https://codemanpty.com", // Update this with your Netlify site domain
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "github-dark-dimmed" },
      gfm: true,
    }),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  adapter: netlify(), // Use the Netlify adapter
});
