'use client'

import { motion } from 'framer-motion'
import { DownloadSimple } from '@phosphor-icons/react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { fadeUp } from '@/lib/constants'

const mascots = [
  { name: 'Fong 1', file: 'Fong1.png' },
  { name: 'Fong 2', file: 'Fong2.png' },
  { name: 'Fong 3', file: 'Fong3.png' },
  { name: 'Fong 4', file: 'Fong4.png' },
  { name: 'Fong 5', file: 'Fong5.png' },
  { name: 'Fong Backpack', file: 'FongBackpack.png' },
  { name: 'Fong Madlads', file: 'FongMadlads.png' },
  { name: 'Fong a Priori', file: 'FongaPriori.png' },
]

function MascotCard({ name, file }: { name: string; file: string }) {
  const url = `/mascot/${file}`
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col items-center gap-4"
    >
      <div className="w-full aspect-square rounded-xl border border-[rgba(66,71,84,0.15)] bg-[#0f0f14] flex items-center justify-center p-6 overflow-hidden">
        <img src={url} alt={name} className="max-h-full max-w-full object-contain" />
      </div>
      <a
        href={url}
        download={file}
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-[rgba(66,71,84,0.3)] hover:border-purple/40 text-sm font-inter text-text-primary hover:text-purple-light transition"
      >
        <DownloadSimple size={16} />
        Download
      </a>
    </motion.div>
  )
}

export default function MascotClient() {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className="sticky top-0 z-50 w-full flex flex-col items-center pt-5 md:pt-10 px-4 md:px-6 pb-2"
      >
        <Nav />
      </motion.div>

      <motion.main
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1280px] mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-32"
      >
        {/* Header */}
        <motion.div variants={fadeUp} custom={0} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-16">
          <div className="flex flex-col gap-3 max-w-[640px]">
            <h1 className="text-3xl md:text-[42px] font-extrabold text-white font-sans leading-tight">
              TownSquare Mascot — Fong
            </h1>
            <p className="text-base md:text-lg text-text-primary leading-relaxed">
              Download TownSquare&apos;s mascot Fong and create amazing content.
            </p>
          </div>
          <a
            href="/mascot/TS-mascot-full-pack.zip"
            download
            className="group relative overflow-hidden shrink-0 flex items-center gap-2 bg-white text-[#121212] font-bold text-base px-6 py-3 rounded-xl"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple via-[#c791fc] via-[31%] to-pink to-[66%] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
              <DownloadSimple size={18} weight="bold" />
              Download full pack
            </span>
          </a>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={fadeUp}
          custom={1}
          className="rounded-2xl border border-[rgba(66,71,84,0.15)] bg-[rgba(15,15,20,0.5)] p-6 md:p-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {mascots.map((m) => (
              <MascotCard key={m.file} {...m} />
            ))}
          </div>
        </motion.div>
      </motion.main>

      <Footer />
    </>
  )
}
