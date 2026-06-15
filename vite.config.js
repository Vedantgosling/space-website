import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [], // <-- Added this placeholder array to make Cloudflare happy!
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        explore: resolve(__dirname, 'explore.html'),
        gallery: resolve(__dirname, 'gallery.html'),
      },
    },
  },
});