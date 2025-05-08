import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// module
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/RegisterPage" element={<RegisterPage/>} />
      <Route path="/LoginPage" element={<LoginPage/>} />
    </Routes>
  )
}

export default App
