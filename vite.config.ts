import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig((config) => {
  console.log({ config });
  return {
    plugins: [react()],
    base: config.mode === 'development' ? './' : '/dengue',
  }
})
