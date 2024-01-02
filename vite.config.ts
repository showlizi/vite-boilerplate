import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import basicSsl from '@vitejs/plugin-basic-ssl';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(), 
    // basicSsl(),
    // {
    //   name: 'postcss',
    //   enforce: 'post',
    //   async transform(css, id) {
    //     if (!/\.css$/.test(id)) {
    //       return;
    //     }
    //     const { css: output } = await require('postcss')([tailwindcss, autoprefixer]).process(css);
    //     return {
    //       code: output,
    //       map: null,
    //     };
    //   },
    // },
  ],
  build: {
    outDir: './dist'
  },
  base: '/vite-boilerplate/',
});
