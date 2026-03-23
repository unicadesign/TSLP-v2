'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/constants'
import Section from './Section'

export default function LoopVaults() {
  return (
    <Section className="py-10 md:py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-[60px]"
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[448px] lg:h-[448px] shrink-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-xl border-2 border-dashed border-white/10" />
          <div
            className="absolute rounded-lg"
            style={{
              inset: '48px',
              background: 'radial-gradient(ellipse at top left, rgba(225,134,159,0.3) 0%, rgba(18,18,18,0) 69%)',
              boxShadow: 'inset 0 1px 0 1px rgba(255,255,255,0.05)',
            }}
          />
          <svg
            className="absolute pointer-events-none"
            style={{ inset: '48px', width: 'calc(100% - 96px)', height: 'calc(100% - 96px)' }}
            viewBox="0 0 312 312"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="loopBorderGrad" x1="0" y1="0" x2="312" y2="312" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF97B4" />
                <stop offset="0.4" stopColor="#FF97B4" stopOpacity="0" />
                <stop offset="0.88" stopColor="#F591AD" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <rect x="0.5" y="0.5" width="311" height="311" rx="7.5" stroke="#424754" strokeOpacity="0.15" />
            <rect
              x="0.5" y="0.5" width="311" height="311" rx="7.5"
              stroke="url(#loopBorderGrad)"
              strokeWidth="1"
              fill="none"
              style={{ animation: 'loopBorderTrace 4.5s linear infinite' }}
            />
          </svg>
          <div className="relative text-center">
            <p className="text-[36px] md:text-[48px] font-semibold font-mono text-pink leading-[36px] md:leading-[48px]">10x</p>
            <p className="text-[11px] md:text-xs font-thin font-mono text-[#c2c6d6] uppercase leading-4">Max Leverage</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} custom={1} className="flex flex-col gap-4 md:gap-6 flex-1 text-center md:text-left">
          <span className="text-[13px] md:text-[15px] font-bold text-pink uppercase tracking-[3px]">
            COMING SOON
          </span>
          <h2 className="text-2xl md:text-[36px] font-extrabold text-white font-sans leading-tight md:leading-10">
            Loop Vaults
          </h2>
          <p className="text-base md:text-lg font-inter text-text-muted leading-relaxed max-w-[425px] mx-auto md:mx-0">
            One-click leverage. Maximize your exposure to yield-bearing assets through recursive borrowing and lending automation.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  )
}
