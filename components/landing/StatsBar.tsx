'use client'

import { motion } from 'framer-motion'
import { fadeUp, cardStyle } from '@/lib/constants'
import Section from './Section'

export default function StatsBar() {
  return (
    <Section className="bg-surface">
      <motion.div
        variants={fadeUp}
        custom={0}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 rounded-lg px-5 md:px-8 py-8 md:py-[73px]"
        style={cardStyle(172)}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[1px] text-text-dim whitespace-nowrap">
            Supported Chains
          </span>
          <div className="flex items-center gap-3 md:gap-4">
            <img src="/assets/animation-assests/MON.svg" alt="Monad" className="w-8 h-8 md:w-[38px] md:h-[38px] rounded-full" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[1px] text-text-dim">+ More Coming Soon</span>
          </div>
        </div>

        <div className="hidden md:block w-px h-8 bg-[rgba(72,72,71,0.2)]" />
        <div className="w-full md:w-auto h-px md:h-auto bg-[rgba(72,72,71,0.2)] md:bg-transparent" />

        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-2xl md:text-[32px] font-semibold font-mono text-purple leading-8">20+</span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-[1px] text-text-dim">
            Integrations
          </span>
        </div>
      </motion.div>
    </Section>
  )
}
