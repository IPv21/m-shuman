import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
      //base: '/m-shuman/',
      server: {
        port: 3000,
        open: true,
      },
    }
  } else {
    // command === 'build'
    return {
      plugins: [react()],
      base: '/m-shuman/',
      server: {
        port: 3000,
        open: true,
      },
    }
  }
})
