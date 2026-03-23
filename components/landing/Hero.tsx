'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { fadeUp, assets } from '@/lib/constants'
import { useLiveStats } from '@/hooks/useLiveStats'
import CountUp from './CountUp'

export default function Hero() {
  const { stats } = useLiveStats()
  const formattedTvl = '$' + stats.tvl.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  return (
    <section
      className="relative w-full px-5 md:px-8 py-12 md:py-16 lg:py-20"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.15) 0%, rgba(18,18,18,0) 70%)',
      }}
    >
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] md:w-[856px] h-[600px] md:h-[856px] pointer-events-none">
        <img src={assets.heroGlow} alt="" className="w-[200%] h-[200%] object-cover -translate-x-1/4 -translate-y-1/4" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-[1280px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-6 md:gap-8"
        >
          <div className="flex flex-col gap-3 md:gap-4">
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="text-[36px] md:text-[48px] lg:text-[64px] font-bold leading-[1.15] text-text-primary font-sans"
            >
              Yield Markets,
              <br />
              <span className="bg-gradient-to-r from-purple via-[#c791fc] via-[31%] to-pink to-[66%] bg-clip-text text-transparent">
                Reimagined
              </span>
              <span className="text-purple-light">.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-base md:text-lg text-text-primary leading-relaxed max-w-[448px]">
              TownSquare is a decentralized leverage and yield market that makes onchain money more accessible to all.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
            <a
              href="https://app.townsq.xyz/"
              className="group relative overflow-hidden bg-white text-[#121212] font-bold text-base px-6 md:px-8 py-3 md:py-4 rounded-xl"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple via-[#c791fc] via-[31%] to-pink to-[66%] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
                Start earning
                <ArrowRight size={15} weight="bold" />
              </span>
            </a>

            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[1px] text-text-dim">
                  Total Value Locked
                </span>
                <span className="text-xl md:text-[26px] font-semibold font-mono text-text-primary leading-8 md:leading-10">
                  {formattedTvl}
                </span>
              </div>
              <div className="w-px h-10 md:h-12 bg-border-divider" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[1px] text-text-dim">
                  Active Positions
                </span>
                <span className="text-xl md:text-[26px] font-semibold font-mono text-text-primary leading-8 md:leading-10">
                  {stats.activePositions.toLocaleString()}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right chart card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full md:w-[420px] lg:w-[540px] shrink-0"
        >
          <div
            className="relative rounded-2xl md:rounded-[22px] p-1 backdrop-blur-md overflow-hidden"
            style={{
              background: 'rgba(31,31,31,0.6)',
              border: '0.926px solid rgba(255,255,255,0.05)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(144deg, rgba(146,100,248,0.1) 0%, rgba(146,100,248,0) 100%)',
              }}
            />
            <div className="absolute top-0 left-[37px] w-px h-[93px] data-stream-pulse" style={{ animationDelay: '0s' }}>
              <img src={assets.dataStream} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[93px] data-stream-pulse" style={{ animationDelay: '0.4s' }}>
              <img src={assets.dataStream} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 right-[74px] w-px h-[93px] data-stream-pulse" style={{ animationDelay: '0.8s' }}>
              <img src={assets.dataStream} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-[260px] md:h-[320px] lg:h-[389px] rounded-[inherit] overflow-hidden">
              <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-[16%_-3%_10%_0]"
              >
                <img src={assets.chartLine1} alt="" className="w-full h-full" />
              </motion.div>
              <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-[33%_-8%_21%_0]"
              >
                <img src={assets.chartLine2} alt="" className="w-full h-full" />
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 1.2 }}
                className="absolute"
                style={{ top: '14.5%', left: '36.5%', width: '2%', height: '2.7%' }}
              >
                <img src={assets.chartDot1} alt="" className="w-full h-full" />
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 1.0 }}
                className="absolute"
                style={{ top: '32.3%', left: '37.3%', width: '1.3%', height: '1.7%' }}
              >
                <img src={assets.chartDot2} alt="" className="w-full h-full" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute bottom-6 md:bottom-8 right-4 md:right-6 text-right"
            >
              <p className="text-[8px] md:text-[9px] font-semibold font-inter uppercase tracking-[0.9px] text-purple-dark">
                Protocol Health
              </p>
              <p className="text-2xl md:text-[33px] font-bold font-grotesk text-white leading-[30px] md:leading-[37px]">
                <CountUp from={0} to={stats.protocolHealth} decimals={1} duration={1.5} delay={1.3} />
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute bottom-[-20px] md:bottom-[-24px] left-2 md:left-[-37px] z-10"
          >
            <motion.div
              animate={{ y: [-2, 2] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="flex items-center gap-3 md:gap-4 p-3 md:p-5 rounded-xl md:rounded-[15px] backdrop-blur-md"
              style={{
                background: 'rgba(31,31,31,0.8)',
                border: '0.926px solid rgba(255,255,255,0.1)',
                boxShadow: '0 23px 46px -11px rgba(0,0,0,0.25)',
              }}
            >
              <img src="/assets/icons/avg-strat-apy.svg" alt="" className="w-8 h-8 md:w-[37px] md:h-[37px]" />
              <div>
                <p className="text-[7px] md:text-[8px] font-semibold font-inter uppercase tracking-[0.8px] text-[#cbc3d6]">
                  Avg Strategy APY
                </p>
                <p className="text-base md:text-[19px] font-bold font-grotesk text-white leading-5 md:leading-[26px]">
                  <CountUp from={0} to={stats.avgApy} decimals={2} duration={1.2} delay={1.5} />
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
