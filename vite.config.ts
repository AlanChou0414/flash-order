import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages/',
      '@routes': '/src/routes',
      '@services': '/src/services',
      '@enum': '/src/enum',
      '@utils': '/src/utils',
    }
  }
})
