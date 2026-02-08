import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Gift/',   // 👈 ADD THIS
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
