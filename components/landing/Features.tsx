'use client'

import { motion } from 'framer-motion'
import { fadeUp, cardStyle, assets } from '@/lib/constants'
import Section from './Section'

export default function Features() {
  return (
    <Section className="pt-10 md:pt-[52px] pb-16 md:pb-[100px]">
      <div className="flex flex-col gap-10 md:gap-[60px]">
        <motion.div variants={fadeUp} custom={0} className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-2xl md:text-[36px] font-extrabold text-white font-sans leading-tight md:leading-10">
            Yield & leverage, simplified.
          </h2>
          <p className="text-base md:text-lg text-text-primary leading-relaxed">
            Forget the complexity of manual farming. TownSquare aggregates the best opportunities
            across chains into a single institutional-grade interface.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex-1 flex flex-col justify-between rounded-lg p-6 md:p-8 overflow-hidden relative min-h-[320px] md:min-h-0"
            style={cardStyle(153)}
          >
            <div className="flex flex-col gap-5 md:gap-6">
              <div className="w-12 h-12 rounded-xl bg-purple-light/10 flex items-center justify-center">
                <img src={assets.vaultIcon} alt="" className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-[36px] font-bold text-text-primary font-sans leading-tight md:leading-9">
                Lending Vaults
              </h3>
              <p className="text-sm md:text-base font-inter text-text-muted leading-6">
                Earn passive yield on your idle assets with
                algorithmic risk management and dynamic rate adjustment.
              </p>
            </div>
            <div className="flex items-end justify-between pt-8 md:pt-12">
              <div>
                <p className="text-[36px] md:text-[48px] font-semibold font-mono text-purple-light leading-[36px] md:leading-[48px]">24.2%</p>
                <p className="text-base md:text-lg font-semibold text-text-dim leading-7">Avg APY</p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6 md:gap-8 lg:w-[465px] lg:shrink-0">
            <motion.div
              variants={fadeUp}
              custom={1}
              className="flex-1 flex flex-col justify-between rounded-lg p-6 md:p-8 min-h-[180px]"
              style={cardStyle(158)}
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <img src={assets.crossChainIcon} alt="" className="w-5 h-4" />
                <h4 className="text-xl md:text-2xl font-bold text-text-primary font-sans leading-7 md:leading-8">
                  Cross-Chain Market
                </h4>
              </div>
              <p className="text-sm md:text-base font-inter text-text-muted leading-6 mt-3">
                Seamlessly move liquidity across ecosystems with
                zero-slippage bridging.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex flex-col justify-between rounded-lg p-6 md:p-8 overflow-hidden min-h-[160px] lg:h-[189px]"
              style={cardStyle(158)}
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <img src={assets.loopIcon} alt="" className="w-4 h-4" />
                <h4 className="text-xl md:text-2xl font-bold text-text-primary font-sans leading-7 md:leading-8">
                  Loop Vaults
                </h4>
              </div>
              <p className="text-sm md:text-base font-inter text-text-muted leading-6 mt-3">
                Automated one-click leverage strategies for power users and yield farmers.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}
