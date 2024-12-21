import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'zustand'],
          charts: ['chart.js', 'react-chartjs-2'],
          tensorflow: ['@tensorflow/tfjs'],
          audio: ['meyda']
        }
      }
    }
  },
  server: {
    hmr: {
      timeout: 5000
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'zustand', 'chart.js']
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});