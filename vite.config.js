// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "dist",
  },
  base: "/dist/", // Ensure this matches your deployment setup

  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // Your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
