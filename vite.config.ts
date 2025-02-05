import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  server: {
    host: '0.0.0.0', // 🔥 Expose to Render
    port: 10000, // ✅ Render automatically assigns a port, so we'll use process.env.PORT
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
