import React from 'react'
import { motion } from 'framer-motion'
import CTAButton from './CTAButton'

export default function Hero(){
  return (
    <section className="relative h-[72vh] md:h-[68vh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-rtx-slate/80 via-black/30 to-black/70" />
        <svg className="w-full h-full object-cover opacity-30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0%" stopColor="#0f1724" />
              <stop offset="100%" stopColor="#021025" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto h-full px-6 flex flex-col justify-center">
        <motion.h1 initial={{ y: 32, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-4xl md:text-6xl font-extrabold leading-tight text-white max-w-3xl">
          La route, <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-cyan-300">maîtrisée</span> du départ à l'arrivée
        </motion.h1>

        <motion.p initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.18, duration: 0.6 }} className="mt-6 text-lg text-white/85 max-w-2xl">
          Road Truck Express organise et exécute vos transports FTL, groupage, milkrun et vos déménagements, avec une flotte du véhicule utilitaire au semi-remorque 44T — pour des clients qui n'ont pas droit à l'approximation.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-8 flex gap-4">
          <CTAButton as="a" href="/contact">Demander un devis</CTAButton>
          <a href="/services" className="inline-flex items-center gap-3 px-5 py-3 border border-white/10 text-white rounded-md backdrop-blur-sm">Nos services</a>
        </motion.div>
      </div>
    </section>
  )
}
