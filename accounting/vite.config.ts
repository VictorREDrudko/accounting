import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/accounting/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "/src/styles/variables.scss";',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
