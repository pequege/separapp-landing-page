import Hero from './components/Hero'
import './App.css'
import { Box } from '@mui/material'
import ComoFunciona from './components/ComoFunciona'
import Beneficios from './components/Beneficios'
import Navbar from './components/navbar'

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
      <div style={{ scrollSnapAlign: 'start', height: '100vh' }}>
        <ComoFunciona />
      </div>
      <div style={{ scrollSnapAlign: 'start', height: '100vh' }}>
        <Beneficios />
      </div>
    </Box>
  )
}

export default App
