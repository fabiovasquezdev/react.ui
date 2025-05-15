import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import commonjs from 'vite-plugin-commonjs'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), commonjs()],
})
