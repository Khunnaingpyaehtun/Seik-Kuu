
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Specifically define process.env.API_KEY to satisfy the library requirement
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
    // Provide a basic polyfill for process.env to avoid ReferenceErrors
    'process.env': '({})'
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  }
});
