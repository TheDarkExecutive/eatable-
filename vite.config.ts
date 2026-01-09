import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Specifically define process.env.API_KEY for the GenAI SDK
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    // Provide a fallback for process.env to prevent "process is not defined" errors
    'process.env': {}
  },
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});