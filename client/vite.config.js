// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or whatever plugin you use

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow access from network
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'cloudflow.online',
      'www.cloudflow.online'
    ]
  }
})