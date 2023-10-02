import React from 'react'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Rout() {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
}
