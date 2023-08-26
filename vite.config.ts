import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
  ] as PluginOption[],
  resolve: {
    alias: {
      "@": "/src",
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
  server: {
    port: 8081,
  },
  preview: {
    port: 3000,
  },
});
