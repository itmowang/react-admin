import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react(),
  ] as PluginOption[],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build:{
    outDir:'docs'
  },
  server: {
    port: 8081,
  },
  preview: {
    port: 3000,
  },
});
