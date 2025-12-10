import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import autoprefixer from "autoprefixer";
import tailwindcss from "@tailwindcss/vite";
import remarkGfm from "remark-gfm";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mdx({ remarkPlugins: [remarkGfm] }),
    ViteImageOptimizer(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5000,
    host: "localhost",
    // Otimizar HMR (Hot Module Replacement)
    hmr: {
      overlay: true,
    },
  },
});
