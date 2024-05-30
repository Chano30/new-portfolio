import React from 'react'
import './navbar.scss'
import { animate, motion } from "framer-motion"
import Logo from '../../assets/ca_logo.svg'
import Fb from '../../assets/social-logo/fb.png'
import Ig from '../../assets/social-logo/ig.png'
import Git from '../../assets/social-logo/git.png'

export const Navbar = () => {

  const simpleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  }

  const zoomVariants = {
    initial: {},
    animate: {}
  }

  const linkItems = ['Portfolio', 'About', 'Contact']
  const socialItems = [Fb, Ig, Git]

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="logo-container">
          <motion.span
            variants={simpleVariants}
            initial='hidden'
            animate='visible'
            className='logo'
          >
            <img src={Logo} className='my_logo' />
            Christian Ardena
          </motion.span>
        </div>
        <motion.div
          variants={simpleVariants}
          initial='hidden'
          animate='visible'
          className="page-links">
          {linkItems.map((item)=> (
            <motion.a 
            whileHover={{scale: 1.2}}
            whileTap={{scale: 0.95}}
            href='' 
            key={item}>
              {item}
            </motion.a>
          ) )}
        </motion.div>
        <motion.div
          variants={simpleVariants}
          initial='hidden'
          animate='visible'
          className="social-links">
          {socialItems.map((item) => (
            <motion.a 
            key={item}
            whileHover={{scale: 1.2}}
            whileTap={{scale: 0.95}}
            href="">
            
            <img src={item} className='social-logo' />
          </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
