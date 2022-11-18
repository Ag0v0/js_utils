/*
 * @Description:
 * @Autor: Ag
 * @Date: 2022-05-31 10:03:46
 * @LastEditors: Ag
 * @LastEditTime: 2022-11-18 17:14:03
 */
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    outDir: 'lib',
    rollupOptions: {
      input: 'main.js',
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
