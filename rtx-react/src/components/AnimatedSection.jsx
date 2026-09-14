import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AnimatedSection({children, className=''}){
  const controls = useAnimation()
  const [ref, inView] = useInView({threshold: 0.15, triggerOnce: true})

  React.useEffect(()=>{ if(inView) controls.start('visible') },[controls, inView])

  const container = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, duration: 0.6 } }
  }
  const item = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }

  return (
    <motion.section ref={ref} initial="hidden" animate={controls} variants={container} className={className}>
      {React.Children.map(children, child => <motion.div variants={item}>{child}</motion.div>)}
    </motion.section>
  )
}
