'use client'

import { motion } from 'framer-motion'
import GridBackground from '@/components/layout/GridBackground'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/landing/Hero'
import SecuredBy from '@/components/landing/SecuredBy'
import Features from '@/components/landing/Features'
import DualEngine from '@/components/landing/DualEngine'
import StatsBar from '@/components/landing/StatsBar'
import LoopFlow from '@/components/landing/LoopFlow'
import LoopVaults from '@/components/landing/LoopVaults'
import FinalCTA from '@/components/landing/FinalCTA'

export default function LandingClient() {
  return (
    <>
      <GridBackground />
      <div className="relative z-[2] w-full flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="sticky top-0 z-50 w-full flex flex-col items-center pt-5 md:pt-10 px-4 md:px-6 pb-2"
        >
          <Nav />
        </motion.div>
        <Hero />
        <SecuredBy />
        <Features />
        <DualEngine />
        <StatsBar />
        <LoopFlow />
        <LoopVaults />
        <FinalCTA />
        <Footer />
      </div>
    </>
  )
}
