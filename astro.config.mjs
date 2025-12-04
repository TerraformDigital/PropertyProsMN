import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import { loadEnv } from 'vite';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV || 'development',
  process.cwd(),
  ''
);

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
      dataset: PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
  ],
});
