import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  ssr: {
    // CJS packages must be bundled for the Node ESM prerender script
    noExternal: ['react-helmet-async'],
  },
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
  build: {
    outDir: isSsrBuild ? 'dist-ssr' : 'dist',
    sourcemap: false,
    cssMinify: true,
    rollupOptions: {
      // manualChunks conflicts with the SSR build, where react is external
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              router: ['react-router-dom'],
            },
          },
    },
  },
}));
