import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://shibayan.jp',
  image: {
    service: {
      config: {
        jpeg: { mozjpeg: true },
        webp: { effort: 6 },
        png: { compressionLevel: 9 },
      },
    },
  },
  security: {
    csp: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
