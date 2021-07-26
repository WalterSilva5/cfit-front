/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "vite-preset-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from "vite-plugin-pwa";

const path = require("path");
export default defineConfig({
  plugins: [
    react({
      removeDevtoolsInProd: true,
      injectReact: true,
    }),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        short_name: "CARVALHOS FIT",
        name: "CARVALHOS FIT",
        icons: [
          {
            src: "./src/assets/icone.png",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon",
          },
          {
            src: "./src/assets/icone.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        start_url: "./index.html",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
      },
      workbox: {
        globDirectory: path.resolve(__dirname, "src/assets"),
        globPatterns: ["**/*.{js,css,png,jpg,gif,svg,eot,ttf,woff,woff2}"],
        swSrc: path.resolve(__dirname, "src/sw.js"),
        swDest: path.resolve(__dirname, "dist/sw.js"),
      },
    }),
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "/src") }],
  },
});
