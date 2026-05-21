import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: /Front-End/ — localhost dev uses /
export default defineConfig(({ command }) => ({
  base:
    command === "serve"
      ? "/"
      : process.env.VITE_BASE_PATH || "/Front-End/",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 4173,
  },
}));
