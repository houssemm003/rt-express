import React from 'react'
import { motion } from 'framer-motion'

export default function CTAButton({children, className='', ...props}){
  return (
    <motion.button
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(2,6,23,0.35)', scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`px-5 py-3 rounded-lg bg-amber-500 text-slate-900 font-semibold ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
