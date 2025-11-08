import Hero from './components/Hero'
import './App.css'
import { Box } from '@mui/material'
import ComoFunciona from './components/ComoFunciona'
import Beneficios from './components/Beneficios'
import Navbar from './components/navbar'
import { Footer } from './components/Footer'

function App() {
  return (
    <Box
      sx={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
      }}
    >
      <div style={{ scrollSnapAlign: 'start', height: '100vh' }}>
        <Navbar />
        <Hero />
      </div>
      <div style={{ scrollSnapAlign: 'start' }}>
        <ComoFunciona />
      </div>
      <div style={{ scrollSnapAlign: 'start' }}>
        <Beneficios />
      </div>
      <div style={{ scrollSnapAlign: 'end', height: 'auto' }}>
        <Footer />
      </div>
    </Box>
  )
}

export default App
