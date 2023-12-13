import React from 'react'
import { Global } from './style_component/Global'
import Home from './pages/Home'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Context from './component/Context'

const App = () => {

  return (
    <>
      <Global />
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </>

  )
}

export default App
