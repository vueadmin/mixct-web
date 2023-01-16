import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      {
        find: '@',
        replacement: pathResolve('src')
      }
    }
  }
})
