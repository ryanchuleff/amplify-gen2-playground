import path from 'path'
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components'),
      'config': path.resolve(__dirname, './src/config'),
      'context': path.resolve(__dirname, './src/context'),
      'features': path.resolve(__dirname, './src/features'),
      'pages': path.resolve(__dirname, './src/pages'),
      'store': path.resolve(__dirname, './src/store'),
      'theme': path.resolve(__dirname, './src/theme'),
      'utils': path.resolve(__dirname, './src/utils'),
      './runtimeConfig': './runtimeConfig.browser',
    },

    // alias: [
    //   {
    //     find: "common",
    //     replacement: path.resolve(__dirname, "src/common"),
    //   },
    // ],
  },
})