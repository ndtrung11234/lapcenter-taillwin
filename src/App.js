import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Intro from './pages/intro'
import Contact from './pages/contact'
import ProductDetail from './pages/product-detail'
import Login from './pages/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/1" element={<ProductDetail />} />
        <Route path="/login" element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App