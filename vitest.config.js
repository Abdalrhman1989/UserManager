import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    include: ['**/*.unit.spec.{js,jsx,ts,tsx}'], // Added comma here
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./tests/setup.js'],
  },
});
