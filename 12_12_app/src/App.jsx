import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextApi  from './services/ContextApi'
import { Global } from './style_component/Gloabal'
import Login from './pages/Login'
import Register from './pages/Register'
import Users from './userroles/Users'
import AddRole from './userroles/AddRole'
import UpdateRole from './userroles/UpdateRole'

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
            <Route path="/user" element={<Users />} />
            <Route path="/adduser" element={<AddRole />} />
            <Route path="/edit" element={<UpdateRole />} />
            <Route path="/edit/:id" element={<UpdateRole />} />
          </Routes>
        </BrowserRouter>
      </ContextApi>
    </>
  )
}

export default App
