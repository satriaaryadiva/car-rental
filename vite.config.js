import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5179,  // Ganti port jika perlu
    host: 'localhost',  // Pastikan host diatur dengan benar
    open: true,  // Membuka otomatis di browser saat server dijalankan
    hmr: true,  // Mengaktifkan hot module replacement (HMR) untuk pengembangan yang lebih cepat
  },
})
