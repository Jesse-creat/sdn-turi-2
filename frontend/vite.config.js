import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

const frontendRoot = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: frontendRoot,
  build: {
    assetsDir: 'assets',
    outDir: '../dist',
    emptyOutDir: true,
  },
})
