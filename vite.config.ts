import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdx({ remarkPlugins: [remarkGfm] })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

