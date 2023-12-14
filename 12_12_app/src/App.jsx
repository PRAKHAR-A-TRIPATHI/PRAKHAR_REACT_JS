import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextApi  from './services/ContextApi'
import { Global } from './style_component/Gloabal'
import Login from './pages/Login'
import Register from './pages/Register'
import Users from './pages/RoleDetails'
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
            <Route path="/role" element={<AddRole />} />
            <Route path="/role/:id" element={<UpdateRole />} />
          </Routes>
        </BrowserRouter>
      </ContextApi>
    </>
  )
}

export default App
