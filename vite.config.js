import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/js/main.js'), // Path to main.js file
        app: resolve(__dirname, 'src/main.jsx'), // Path to main.jsx file
      },
    },
  },
});
