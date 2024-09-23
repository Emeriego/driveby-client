import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer';

const PageLayout = () => {
  return (
    <div className="app-wrapper">

        <Header />
        <Outlet />
        <Footer />

    </div>

  )
}

export default PageLayout
