/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from 'vite-preset-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

const path = require('path');

export default defineConfig({
  plugins: [
    react({
      removeDevtoolsInProd: true,
      injectReact: true,
    }),
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }],
  },
});
