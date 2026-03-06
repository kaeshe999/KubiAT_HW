import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://script.google.com',
        changeOrigin: true,
        followRedirects: true,
        rewrite: (path) => path.replace(/^\/api/, '/macros/s/AKfycbyYx39ptxI11Ze94c0NsWrFjMYrCUVuifoJW8bVNX9QbKxcZXzFvqru3Waaw88JILHDZg/exec'),
      }
    }
  }
})
