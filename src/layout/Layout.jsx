import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div>
        <nav>
            <NavBar/>
        </nav>

        <main className='flex content-center justify-center'>
            <div className=' py-20 min-h-screen px-10'>
            <Outlet/>
            </div>
        </main>

        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Layout