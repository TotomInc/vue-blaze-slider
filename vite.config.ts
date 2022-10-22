import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  build: {
    outDir: "./dist",

    lib: {
      entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
      name: "vue-blaze-slider",
      fileName: (format) => `${"vue-blaze-slider"}.${format}.js`,
    },

    rollupOptions: {
      external: ["vue"],
      output: { globals: { vue: "Vue" } },
    },
  },
});
