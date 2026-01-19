import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/TechyGuide-React",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'pages-forschools': [
            './src/ForschoolsPages/AI-RoboticLabCBSE.jsx',
            './src/ForschoolsPages/AI-RoboticLabICSE.jsx',
            './src/ForschoolsPages/StemLab.jsx',
            './src/ForschoolsPages/StemTinkeringLab.jsx',
            './src/ForschoolsPages/CompositeSkillLab.jsx',
            './src/ForschoolsPages/WorkshopPage.jsx'
          ],
          'pages-products': [
            './src/productPages/I-BoT.jsx',
            './src/productPages/TeBoT.jsx',
            './src/productPages/E-Blox.jsx',
            './src/productPages/AddOnKit.jsx'
          ],
          'pages-main': [
            './src/coursesPage.jsx',
            './src/ShopPage.jsx',
            './src/FranchisePage.jsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 750,
    minify: true
  },
  server: {
    preTransformRequests: true
  }
})
