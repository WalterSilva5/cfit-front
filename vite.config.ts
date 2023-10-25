import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import Svgr from "vite-plugin-svgr";

const __dirname = path.resolve(path.dirname(""));

export default defineConfig({
  plugins: [
    Svgr(),
    react({}),
  ],
  server: {
    host: true,
    port: 3001,
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "/src"),
      },
    ],
  },
  esbuild: {
    loader: "tsx",
    include: /src\/.*\.tsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".ts": "tsx",
      },
    },
  },
});
