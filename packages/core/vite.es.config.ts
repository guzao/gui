/// <reference types="vitest" />
import { resolve } from 'path';
import dts from 'vite-plugin-dts'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
console.log(resolve(__dirname, "./index.ts"));

export default defineConfig({
  plugins: [
    vue(), 
    dts({
      tsconfigPath: '../../tsconfig.build.json'
    })
  ],
  build: {
    outDir: "dist/es",
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "GUI",
      fileName: "index",
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator"
      ],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "style.css") {
            return "index.css";
          }
          return chunkInfo.name as string;
        },
      },
    },
  }
});
