import React from 'react'
import Photo from '../../assets/photo.png'
import { motion } from 'framer-motion'
import './hero.scss'

export const Hero = () => {
  return (
    <div className='hero'>
      <div

        className="image-container">
        <motion.img
          initial={{ opacity: 0, scale: 0.8, x: -300}}
          animate={{ opacity: 1, scale: 1, x: 0}}
          transition={{ duration: 0.5 }}
          src={Photo} alt="" />
      </div>
    </div>
  )
}
