import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    https: true,
    host: '0.0.0.0'
  },
  build: {
    outDir: path.resolve(__dirname, "docs"),
  },
  base: process.env.NODE_ENV === 'production' ? '/Weather-App/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
    }
  }, 
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    postcss: {
      plugins: [
        require('postcss-plugin-px2rem')({
            exclude: /(node_module)/,
            mediaQuery: false, 
            minPixelValue: 3
        }),
      ]
    },
    modules: {
      localsConvention: 'camelCase'
    }
  },
})
