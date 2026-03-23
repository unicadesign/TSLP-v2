'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowSquareOut, List, X, XLogo, DiscordLogo } from '@phosphor-icons/react'
import Logo from './Logo'
import { fadeUp } from '@/lib/constants'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      variants={fadeUp}
      custom={0}
      className="relative z-50 w-full max-w-[1280px] mx-auto rounded-2xl md:rounded-[22px] px-5 md:px-8 py-4 md:py-5 backdrop-blur-xl border border-purple/10 shadow-[0_24px_48px_rgba(0,0,0,0.4)]"
      style={{ background: 'rgba(15,23,42,0.4)' }}
    >
      <div className="flex items-center justify-between">
        <Logo />

        {/* Desktop nav links + CTA */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium font-sans">
          <a href="https://docs.townsq.xyz/" target="_blank" rel="noopener noreferrer" className="text-text-slate hover:text-text-primary transition inline-flex items-center gap-1.5">
            Docs <ArrowSquareOut size={14} />
          </a>
          <a href="https://x.com/TownSquarexyz" target="_blank" rel="noopener noreferrer" className="text-text-slate hover:text-text-primary transition">
            <XLogo size={18} />
          </a>
          <a href="https://discord.gg/yMRmqFzrDW" target="_blank" rel="noopener noreferrer" className="text-text-slate hover:text-text-primary transition">
            <DiscordLogo size={18} />
          </a>
          <a
            href="https://app.townsq.xyz/"
            className="bg-white text-[#121212] font-semibold text-base px-5 lg:px-6 py-3 lg:py-4 rounded-xl hover:bg-gray-100 transition"
          >
            Launch App
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-5 pb-2 text-sm font-medium font-sans">
              <a href="https://docs.townsq.xyz/" target="_blank" rel="noopener noreferrer" className="text-text-slate inline-flex items-center gap-1.5">
                Docs <ArrowSquareOut size={14} />
              </a>
              <div className="flex items-center gap-4">
                <a href="https://x.com/TownSquarexyz" target="_blank" rel="noopener noreferrer" className="text-text-slate"><XLogo size={18} /></a>
                <a href="https://discord.gg/yMRmqFzrDW" target="_blank" rel="noopener noreferrer" className="text-text-slate"><DiscordLogo size={18} /></a>
              </div>
              <a
                href="https://app.townsq.xyz/"
                className="bg-white text-[#121212] font-semibold text-base px-5 py-3 rounded-xl text-center mt-2"
              >
                Launch App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
