import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    mdx({ remarkPlugins: [remarkGfm] }),
    ViteImageOptimizer({
      /* option to pass to sharp if you don't want to use SVGO,
         and it's not applied if images are already optimized. */
      // sharp: {
      //   png: {
      //     quality: 100,
      //   },
      //   jpeg: {
      //     quality: 100,
      //   },
      //   webp: {
      //     lossless: true,
      //   },
      // },
      // svgo: {
      //   multipass: true,
      //   plugins: [
      //     {
      //       name: 'preset-default',
      //       params: {
      //         overrides: {
      //           cleanupNumericValues: false,
      //           removeViewBox: false, // https://github.com/svg/svgo/issues/1128
      //         },
      //       },
      //     },
      //     'sortAttrs',
      //   ],
      // },
      // include: /\.(jpe?g|png|tiff|webp|gif|svg)$/i,
      // exclude: undefined,
      // exclude: undefined,
      // logStats: true,
      // make:`webp`, and `avif` by default.
      // default behavior is to use sharp.js to optimize images.
      // if you choose to not install sharp, then you will not get any
      // optimization done on png, jpeg, tiff, webp, gif.
      // instead, you will need to rely on svgo for svg optimization.
      // example to not use sharp:
      // sharp: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

