'use client'

import { motion } from 'framer-motion'
import { DownloadSimple } from '@phosphor-icons/react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { fadeUp } from '@/lib/constants'

interface AssetCardProps {
  label: string
  preview: string
  bgClass?: string
  downloads: { format: string; url: string }[]
}

function AssetCard({ label, preview, bgClass = 'bg-[#1a1a2e]', downloads }: AssetCardProps) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-[rgba(66,71,84,0.15)]">
      <div className={`flex items-center justify-center h-40 md:h-48 ${bgClass}`}>
        <img src={preview} alt={label} className="max-h-16 md:max-h-20 w-auto" />
      </div>
      <div className="flex items-center justify-between bg-[#0f0f14] px-4 py-3">
        <span className="text-sm font-inter text-text-primary">{label}</span>
        <div className="flex items-center gap-2">
          {downloads.map((d) => (
            <a
              key={d.format}
              href={d.url}
              download
              className="flex items-center gap-1 text-xs font-mono text-purple hover:text-purple-light transition px-2 py-1 rounded border border-purple/20 hover:border-purple/40"
            >
              <DownloadSimple size={12} />
              {d.format}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

const tsLogoUrl = '/assets/ts-logo.svg'

const primaryAssets: AssetCardProps[] = [
  { label: 'Primary Logo — White text', preview: tsLogoUrl, bgClass: 'bg-[#121212]', downloads: [{ format: 'SVG', url: tsLogoUrl }] },
  { label: 'Primary Logomark', preview: tsLogoUrl, bgClass: 'bg-[#121212]', downloads: [{ format: 'SVG', url: tsLogoUrl }] },
  { label: 'Primary Logo — Dark text', preview: tsLogoUrl, bgClass: 'bg-white', downloads: [{ format: 'SVG', url: tsLogoUrl }] },
  { label: 'Primary Logomark', preview: tsLogoUrl, bgClass: 'bg-white', downloads: [{ format: 'SVG', url: tsLogoUrl }] },
]

const monochromeAssets: AssetCardProps[] = [
  { label: 'White Logo', preview: tsLogoUrl, bgClass: 'bg-[#121212]', downloads: [{ format: 'SVG', url: tsLogoUrl }] },
  { label: 'White Logomark', preview: tsLogoUrl, bgClass: 'bg-[#121212]', downloads: [{ format: 'SVG', url: tsLogoUrl }] },
  { label: 'Black Logo', preview: tsLogoUrl, bgClass: 'bg-white', downloads: [{ format: 'SVG', url: tsLogoUrl }] },
  { label: 'Black Logomark', preview: tsLogoUrl, bgClass: 'bg-white', downloads: [{ format: 'SVG', url: tsLogoUrl }] },
]

export default function BrandKitClient() {
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
        <motion.div variants={fadeUp} custom={0} className="flex flex-col gap-4 mb-12 md:mb-20 max-w-[640px]">
          <h1 className="text-3xl md:text-[42px] font-extrabold text-white font-sans leading-tight">
            TownSquare Brand & Media Kit
          </h1>
          <p className="text-base md:text-lg text-text-primary leading-relaxed">
            Download TownSquare logo and find everything you need here for creating content or media coverage about TownSquare.
          </p>
        </motion.div>

        <motion.section variants={fadeUp} custom={1} className="mb-12 md:mb-20">
          <h2 className="text-xl md:text-2xl font-bold text-white font-sans mb-6 md:mb-8">
            Primary Logo and Logomark
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {primaryAssets.map((asset) => (
              <AssetCard key={asset.label + asset.bgClass} {...asset} />
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeUp} custom={2} className="mb-12 md:mb-20">
          <h2 className="text-xl md:text-2xl font-bold text-white font-sans mb-6 md:mb-8">
            Monochrome Logo and Logomark
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {monochromeAssets.map((asset) => (
              <AssetCard key={asset.label + asset.bgClass} {...asset} />
            ))}
          </div>
        </motion.section>
      </motion.main>

      <Footer />
    </>
  )
}
