import React from 'react'

export default function GlassCard({children, className=''}){
  return (
    <div className={`bg-white/6 backdrop-blur-md border border-white/6 rounded-2xl p-6 shadow-elev-md hover:scale-[1.02] transition transform-gpu ${className}`}>
      {children}
    </div>
  )
}
