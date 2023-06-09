import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import "@fontsource/open-sans"; // Defaults to weight 400.

export default defineConfig({
  site: 'https://brfboken.nu',
  output: 'static',
  outDir: './docs',
  build: {
    assets: 'astro'
  },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
  ],
});
