import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://shibayan.jp',
  vite: {
    plugins: [tailwindcss()],
  },
});
