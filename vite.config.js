import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@Components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@Assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@Styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
    },
  },
});
