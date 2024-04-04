// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
      }
});
