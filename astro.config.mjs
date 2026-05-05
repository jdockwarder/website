// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://julius.dev',

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      styles: ["normal"],
      weights: ["400 600"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Mono",
      cssVariable: "--font-ibm-plex-mono",
      styles: ["normal"],
      weights: ["400 700"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [preact({ compat: true }), mdx()],
});