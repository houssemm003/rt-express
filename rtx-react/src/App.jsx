import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Fleet from './pages/Fleet'
import About from './pages/About'
import Contact from './pages/Contact'
import Layout from './components/Layout'

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/flotte" element={<Fleet/>} />
        <Route path="/a-propos" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Layout>
  )
}
