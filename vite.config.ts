import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { VitePWA } from 'vite-plugin-pwa'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /qweather\.com/i, // 接口缓存 此处填你想缓存的接口正则匹配
            handler: 'CacheFirst',
            options: {
              cacheName: 'interface-cache',
            },
          },
          {
            urlPattern: /(.*?)\.(js|css|ts)/, // js /css /ts静态资源缓存
            handler: 'CacheFirst',
            options: {
              cacheName: 'js-css-cache',
            },
          },
          {
            urlPattern: /(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/, // 图片缓存
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
            },
          },
        ],
      },
    })
  ],
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
