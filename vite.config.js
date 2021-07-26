/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from 'vite-preset-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePWA } from 'vite-plugin-pwa'

const path = require('path');
export default defineConfig({
  plugins: [
    react({
      removeDevtoolsInProd: true,
      injectReact: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',  
      manifest: {
        // content of manifest
      },
      workbox: {
        // workbox options for generateSW
      }
    }),
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }],
  },
});