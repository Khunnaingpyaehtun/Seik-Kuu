import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Correct way to replace process.env values in Vite
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ""),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || "production")
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild'
  },
  server: {
    port: 3000
  }
});