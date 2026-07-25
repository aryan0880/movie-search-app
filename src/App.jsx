import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favourites from './pages/Favourites'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <BrowserRouter>
      <Navbar onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
