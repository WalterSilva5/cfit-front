/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from 'vite-preset-react';

export default defineConfig({
  plugins: [
    react({
      removeDevtoolsInProd: true,
      injectReact: true,
    }),
  ],
  proxy: {
    host: true,
  },
});
