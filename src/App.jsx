
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav'
import Home from './Pages/Home'
import About from './Pages/About'
function App() {
  return (
    <>
     <Nav />
    {/* All Website Pages */}
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />
        </Routes>
    </>
   
  )
}

export default App
