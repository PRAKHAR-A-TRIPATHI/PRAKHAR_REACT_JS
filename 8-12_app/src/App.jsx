import React from 'react'
import Login from "./pages/Login"
import { Global } from './style_component/Global'
import Home from './pages/Home'
import Register from './pages/Register'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Global />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/login/:number" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/:number" element={<Register />} />
          
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
