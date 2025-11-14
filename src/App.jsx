import Hero from './components/Hero'
import './App.css'
import { Box } from '@mui/material'
import ComoFunciona from './components/ComoFunciona'
import Beneficios from './components/Beneficios'
import Navbar from './components/AppBar'
import { Footer } from './components/Footer'
import Contacto from './components/Contacto'

function App() {
  return (
    <Box
      sx={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
      }}
    >
      <Navbar />
      <div style={{ scrollSnapAlign: 'start', height: '100vh' }}>
        <Hero />
      </div>
      <div style={{ scrollSnapAlign: 'start' }}>
        <ComoFunciona />
      </div>
      <div style={{ scrollSnapAlign: 'start' }}>
        <Beneficios />
      </div>
      <div style={{ scrollSnapAlign: 'start', height: '100vh' }}>
        <Contacto />
      </div>
      <div style={{ scrollSnapAlign: 'end', height: 'auto' }}>
        <Footer />
      </div>
    </Box>
  )
}

export default App
