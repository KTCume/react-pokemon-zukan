import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { useMemo } from 'react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})