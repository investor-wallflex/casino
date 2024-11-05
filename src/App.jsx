import { useState } from 'react'
import NavBar from './pages/Navbar'
import HeroSection from './pages/HeroSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <HeroSection />
    </>
  )
}

export default App
