import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'figma:asset/67101989f89ffc4c1feb1a8d6a3d37518ba90ff1.png': path.resolve(__dirname, './src/assets/67101989f89ffc4c1feb1a8d6a3d37518ba90ff1.png'),
      'figma:asset/5b6b143d5a60f047eba85ed840c0696a46daf3f4.png': path.resolve(__dirname, './src/assets/5b6b143d5a60f047eba85ed840c0696a46daf3f4.png'),
      'figma:asset/444321.png': path.resolve(__dirname, './src/assets/fondohero.png'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
    allowedHosts: [
      '.ngrok-free.dev' // Permite todos los subdominios de ngrok
    ]
  },
});
