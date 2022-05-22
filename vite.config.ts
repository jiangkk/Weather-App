import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
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
