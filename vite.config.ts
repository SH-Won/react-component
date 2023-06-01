import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import {fileURLToPath} from 'node:url';
import { resolve } from 'node:path';
//"build": "tsc && vite build",
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    preserveSymlinks: false,
    extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx','scss'],
  },
  build : {
    lib : {
      entry: resolve(__dirname,'src/index.ts'),
      name: 'my-react-component',
      fileName :'my-react-component'
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  }
})
