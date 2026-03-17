import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
  manifest: {
    name: "AI Agent",
    short_name: "AI Agent",
    theme_color: "#020617",
    background_color: "#020617",
    display: "standalone",
    start_url: "/",
    icons: [
      {
        src: "/icon-1.jpg",
        sizes: "192x192",
        type: "image/jpg/png"
      },
      {
        src: "/icon-2.jpg",
        sizes: "512x512",
        type: "image/jpg/png"
      }
    ]
  }
})
  ]
})