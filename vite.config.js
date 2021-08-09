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
      strategies: {
        refresh: reactRefresh,
      },
      manifest: {
        name: 'CFIT MUSCULAÇÃO',
        short_name: 'CFIT MUSCULAÇÃO',
        description: 'CFIT MUSCULAÇÃO E AULAS DE DANÇA',
        icons: [
          {
            src: path.join('./src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            type: 'image/png',
          },
        ],
        start_url: '.',
        orientation: 'portrait',
        lang: 'pt-BR',
      },
      workbox: {
        globDirectory: path.join(__dirname, 'assets'),
        globPatterns: [
          '**/*.{html,js,css,png,jpg,gif,svg,json}',
        ],
        swSrc: './service-worker.js',
        swDest: './service-worker.js',
      },
    }),
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }],
  },
});
