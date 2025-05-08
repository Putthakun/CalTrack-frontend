import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// module
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/RegisterPage" element={<RegisterPage/>} />
    </Routes>
  )
}

export default App
