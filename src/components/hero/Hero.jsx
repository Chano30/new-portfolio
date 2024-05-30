import React from 'react'
import Photo from '../../assets/photo.png'
import { motion } from 'framer-motion'
import './hero.scss'

export const Hero = () => {

  const variants = {
    visible: {opacity: 1, x: 0, transition: {staggerChildren: 0.2, duration: 0.8}},
    hidden:{opacity: 0, x: 100 }
  }

  const slidingVariants = {
    initial:{
      x:0,
    },
    animate:{
      x: "-600%",
      transition:{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 40
      }
    }
  }

  return (
    <div className='hero'>
        <motion.div 
        variants={slidingVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer">
          Web Developer Software Engineer
        </motion.div>
      <div className="wrapper">
        <motion.div 
        variants={variants}
        initial="hidden"
        animate="visible"
        className="text-container">
          <motion.h2 variants={variants}>CHANO</motion.h2>
          <motion.h6 variants={variants}>Web Developer</motion.h6>
        </motion.div>
      </div>

      <div
        className="image-container">
        <motion.img
          initial={{ opacity: 0, scale: 0.8, x: -200}}
          animate={{ opacity: 1, scale: 1, x: 0}}
          transition={{ duration: 0.5 }}
          src={Photo} alt="" />
      </div>
    </div>
  )
}
