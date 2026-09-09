import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import NotFound from './pages/NotFound'

function AnimatedRoutes({ searchQuery }) {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <BrowserRouter>
      <Navbar onSearch={setSearchQuery} />
      <AnimatedRoutes searchQuery={searchQuery} />
    </BrowserRouter>
  )
}

export default App
