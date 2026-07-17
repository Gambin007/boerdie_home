// @ts-check
import { defineConfig } from 'astro/config';

// Statische Marketing-Site + E-Learning-Seite. Kein SSR nötig,
// deshalb der Default 'static' output – deploybar auf Vercel/Netlify.
export default defineConfig({
  site: 'https://boerdie.app',
});
