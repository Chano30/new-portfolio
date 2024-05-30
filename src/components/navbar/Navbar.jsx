import React from 'react'
import './navbar.scss'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="contact-link">
          Logo Christian Ardena
        </div>
        <div className="page-links">
          <a href="">Portfolio</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div className="social-links">
          <a href="">Facebook</a>
          <a href="">Twitter</a>
          <a href="">IG</a>
        </div>
      </div>
    </div>
  )
}
