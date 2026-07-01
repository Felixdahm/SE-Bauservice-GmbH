// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sebauservice.de',
  integrations: [sitemap()],
  vite: {
    build: {
      // Skripte nicht ins HTML inlinen, sondern als eigene Datei ausliefern,
      // damit sie unter der strengen CSP (script-src 'self') erlaubt bleiben.
      assetsInlineLimit: 0,
    },
  },
});
