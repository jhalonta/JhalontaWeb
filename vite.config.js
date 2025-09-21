import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@configs': path.resolve(__dirname, 'src/configs'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@states': path.resolve(__dirname, 'src/states'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  }
})
