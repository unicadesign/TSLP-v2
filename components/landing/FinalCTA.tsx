'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { fadeUp } from '@/lib/constants'
import Section from './Section'

export default function FinalCTA() {
  return (
    <Section className="border-t border-border-divider/10 pt-16 md:pt-32 pb-16 md:pb-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-8 md:gap-12"
      >
        <div className="text-center flex flex-col gap-3 md:gap-4 items-center">
          <motion.h2 variants={fadeUp} custom={0} className="text-[28px] md:text-[36px] font-bold text-white font-sans leading-tight md:leading-10">
            Start lending.
            <br />
            <span className="bg-gradient-to-r from-purple via-[#c791fc] via-[31%] to-pink to-[66%] bg-clip-text text-transparent">
              Start earning.
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-base md:text-lg font-inter text-text-muted text-center leading-relaxed max-w-[576px]">
            Join the next evolution of on-chain capital.
            <br />The obsidian nexus awaits your liquidity.
          </motion.p>
        </div>

        <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto">
          <a
            href="https://app.townsq.xyz/"
            className="group relative overflow-hidden bg-white text-[#121212] font-semibold text-base md:text-lg px-6 md:px-8 py-3.5 md:py-4 rounded-xl w-full sm:w-auto"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple via-[#c791fc] via-[31%] to-pink to-[66%] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white">
              Start earning
              <ArrowRight size={15} weight="bold" />
            </span>
          </a>
          <a
            href="https://docs.townsq.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border-divider text-text-primary font-bold text-base md:text-lg px-6 md:px-8 py-3.5 md:py-4 rounded-xl hover:border-purple/50 transition text-center w-full sm:w-auto"
          >
            Read Documentation
          </a>
        </motion.div>
      </motion.div>
    </Section>
  )
}
