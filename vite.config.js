import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: 'localhost', // IP que deseas usar
    port: 5173,             // Puedes cambiarlo si lo necesitas
  },
});
