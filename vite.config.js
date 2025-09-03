import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: false, // permite o uso de "ReactComponent as"
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
