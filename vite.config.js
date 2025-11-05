import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ✅ Removed vite-plugin-static-site (not needed)
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: { outDir: 'dist' }
})
