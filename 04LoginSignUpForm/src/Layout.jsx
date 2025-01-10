import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import {Outlet} from "react-router-dom";
import Login from './components/Login'

function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <main className='flex-grow'>
        <Outlet/>
       
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
