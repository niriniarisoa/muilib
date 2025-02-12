import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'//gestion des fichier .d .ts pour generer les types  

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build:{
    lib:{
      entry: 'src/main.tsx',
      name:'muilib',
      fileName:'muilib.js'
    },
    rollupOptions: {
      external:['react','react-dom'],
      output:{
        globals:{
          react:'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
