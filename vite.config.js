const path = require('path');
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import minify from 'vite-plugin-minify';
module.exports = {
  root: 'src',

  plugins: [
    minify({
      removeComments: true,
    }),
  ],

  build: {
    outDir: '../dist',
  },

  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  
})

