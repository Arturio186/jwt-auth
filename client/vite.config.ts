import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#interfaces' : '/src/interfaces',
      '#pages' : '/src/pages',
      '#routes' : '/src/routes',
      '#utils' : '/src/utils'
    }
  }
})
