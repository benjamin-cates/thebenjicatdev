import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import process from "process";

// https://vite.dev/config/
export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist"
  },
  resolve: {
    alias: { "/src": path.resolve(process.cwd(), "src") }
  },
  plugins: [
    react(),
  ],
})
