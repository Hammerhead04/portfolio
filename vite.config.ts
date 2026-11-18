/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const root = import.meta.dirname;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(root, "client", "src"),
    },
  },
  root: path.resolve(root, "client"),
  publicDir: path.resolve(root, "public"),
  build: {
    outDir: path.resolve(root, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["motion/react"],
        },
      },
    },
  },
  test: {
    root,
    environment: "jsdom",
    globals: true,
    setupFiles: [path.resolve(root, "vitest.setup.ts")],
    include: ["client/src/**/*.test.{ts,tsx}"],
    css: false,
  },
});
