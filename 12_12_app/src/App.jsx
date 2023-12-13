import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextApi  from './services/ContextApi'
import { Global } from './style_component/Gloabal'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Global />
      <ContextApi>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </ContextApi>
    </>
  )
}

export default App
