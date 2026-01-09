
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Allows process.env.API_KEY to be accessed as required by the instructions
    'process.env': process.env
  },
  server: {
    port: 3000
  }
});
