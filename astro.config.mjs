// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Statische Marketing-Site + E-Learning-Seite. Kein SSR nötig,
// deshalb der Default 'static' output – deploybar auf Vercel/Netlify.
export default defineConfig({
  site: 'https://boerdie.ch',
  integrations: [sitemap()],
});
