import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ssr } from 'vite-plugin-ssr/plugin';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ssr({
      prerender: {
        // Your 12 routes — auto-generates index.html inside each folder
        routes: [
          '/',
          '/about',
          '/contact',
          '/reviews',
          '/succes_story',
          '/country/uae',
          '/country/usa',
          '/country/uk',
          '/country/canada',
          '/country/europe',
          '/country/australia',
          '/country/singapore'
        ]
      }
    })
  ],
  build: {
    outDir: 'dist'
  }
});