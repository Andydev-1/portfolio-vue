import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
<<<<<<< HEAD
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
=======
>>>>>>> f73cf9e4394cdd5da92d32a8ab48aa0eee2bd59c
  }
})
