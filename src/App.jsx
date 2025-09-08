import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Footer from './components/Footer'

function App() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box flex="1" pt="80px">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
