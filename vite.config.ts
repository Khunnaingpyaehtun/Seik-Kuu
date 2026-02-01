
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // This allows process.env to be used in the browser code
    'process.env': process.env
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  }
});
