'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/constants'
import Section from './Section'

export default function SecuredBy() {
  return (
    <Section className="py-10 md:py-16">
      <motion.div variants={fadeUp} custom={0} className="flex flex-col gap-4 md:gap-6 items-center">
        <span className="text-[11px] font-bold uppercase tracking-[1px] text-text-dim">
          Secured By
        </span>
        <div className="flex items-center gap-10 md:gap-24 opacity-50">
          <a href="https://sherlock.xyz/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <img src="/assets/animation-assests/secured-by-logos/sherlock-logo.svg" alt="Sherlock" className="h-4 md:h-5" />
          </a>
          <a href="https://astrasec.ai/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <img src="/assets/animation-assests/secured-by-logos/AstraSec.svg" alt="AstraSec" className="h-8 md:h-10" />
          </a>
        </div>
      </motion.div>
    </Section>
  )
}
