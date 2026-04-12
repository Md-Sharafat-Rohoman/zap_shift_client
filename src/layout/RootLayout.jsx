import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../page/Shared/Footer'
import Navbar from '../page/Shared/Navbar'

export default function RootLayout() {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
