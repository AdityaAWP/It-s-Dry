import React from 'react'
import Navbar from '../template/Navbar'
import Footer from '../template/Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Layout
