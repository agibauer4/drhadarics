import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// BASE_PATH is set by the staging deploy (GitHub Pages serves the site from /drhadarics/).
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), svgr()],
})
