'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, modeCardStyle, middleBorderTokens, innerBorderTokens, posOnRect } from '@/lib/constants'
import Section from './Section'

/* ── Orbiting Token ── */
interface OrbitingTokenProps {
  icon: string
  name: string
  startOffset: number
  w: number
  h: number
  r: number
  duration: number
  isDimmedIcon: boolean
  pillBorderColor?: string
  paused?: boolean
  size?: number
}

function OrbitingToken({ icon, name, startOffset, w, h, r, duration, isDimmedIcon, pillBorderColor = '#474849', paused = false, size = 58 }: OrbitingTokenProps) {
  const tokenRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef(startOffset)
  const pausedRef = useRef(paused)
  pausedRef.current = paused

  const half = size / 2

  useEffect(() => {
    let raf: number
    let last = performance.now()
    const speed = 1 / (duration * 1000)

    const tick = (now: number) => {
      const dt = now - last
      last = now
      if (!pausedRef.current) {
        progressRef.current = (progressRef.current + speed * dt) % 1
      }
      const pos = posOnRect(progressRef.current, w, h, r)
      if (tokenRef.current) {
        tokenRef.current.style.transform = `translate(${pos.x - half}px, ${pos.y - half}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [w, h, r, duration, half])

  const iconSize = Math.round(size / 2)

  return (
    <div
      ref={tokenRef}
      className="absolute top-0 left-0 rounded-full bg-[#242627] flex items-center justify-center transition-[border-color] duration-500"
      style={{ width: size, height: size, border: `1px solid ${pillBorderColor}`, willChange: 'transform' }}
    >
      <img
        src={icon}
        alt={name}
        className="rounded-full transition-opacity duration-500"
        style={{ width: iconSize, height: iconSize, opacity: isDimmedIcon ? 0.4 : 1 }}
      />
    </div>
  )
}

/* ── Desktop Illustration ── */
function DualEngineIllustration({ mode }: { mode: string }) {
  const isEfficiency = mode === 'efficiency'
  const middleBorderColor = isEfficiency ? 'rgba(71,72,73,0.7)' : '#bb9eff'
  const innerBorderColor = isEfficiency ? '#9ef5ff' : '#bb9eff'
  const middleGlow = isEfficiency ? 'transparent' : 'radial-gradient(ellipse at top left, rgba(187,158,255,0.3) 0%, rgba(18,18,18,0.6) 69%)'
  const innerGlow = isEfficiency ? 'radial-gradient(ellipse at top left, rgba(158,245,255,0.2) 0%, rgba(18,18,18,0.6) 69%)' : 'transparent'
  const innerTokenBorder = isEfficiency ? '#9ef5ff' : '#bb9eff'
  const middleTokenBorder = isEfficiency ? '#474849' : '#bb9eff'

  const middleW = 388, middleH = 388, middleR = 16
  const innerW = 205, innerH = 205, innerR = 24

  return (
    <div
      className="relative w-full h-full rounded-2xl flex items-center justify-center"
      style={{ border: '0.853px solid rgba(71,72,73,0.7)', padding: '69px' }}
    >
      <div
        className="relative rounded-2xl transition-all duration-500"
        style={{
          border: `1px solid ${middleBorderColor}`,
          background: middleGlow,
          boxShadow: !isEfficiency ? 'inset 0 1px 0 0 rgba(255,255,255,0.05)' : 'none',
          padding: '91px',
          width: middleW,
          height: middleH,
        }}
      >
        <div
          className="relative rounded-3xl transition-all duration-500"
          style={{
            border: `1px solid ${innerBorderColor}`,
            background: innerGlow,
            width: innerW,
            height: innerH,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: isEfficiency ? '0 0 12px rgba(158,245,255,0.15), inset 0 1px 0 0 rgba(255,255,255,0.05)' : 'none',
          }}
        >
          <div className="w-16 h-16">
            <img src="/assets/animation-assests/ts-symbol.svg" alt="TownSquare" className="w-full h-full" />
          </div>
          {innerBorderTokens.map((token) => (
            <OrbitingToken key={token.name} {...token} w={innerW} h={innerH} r={innerR} duration={40} isDimmedIcon={false} pillBorderColor={innerTokenBorder} />
          ))}
        </div>

        {middleBorderTokens.map((token) => (
          <OrbitingToken key={token.name} {...token} w={middleW} h={middleH} r={middleR} duration={60} isDimmedIcon={isEfficiency} pillBorderColor={middleTokenBorder} paused={isEfficiency} />
        ))}
      </div>
    </div>
  )
}

/* ── Mobile Illustration ── */
function DualEngineMobile({ mode }: { mode: string }) {
  const isEfficiency = mode === 'efficiency'
  const middleBorderColor = isEfficiency ? 'rgba(71,72,73,0.7)' : '#bb9eff'
  const innerBorderColor = isEfficiency ? '#9ef5ff' : '#bb9eff'
  const middleGlow = isEfficiency ? 'transparent' : 'radial-gradient(ellipse at top left, rgba(187,158,255,0.3) 0%, rgba(18,18,18,0.6) 69%)'
  const innerGlow = isEfficiency ? 'radial-gradient(ellipse at top left, rgba(158,245,255,0.2) 0%, rgba(18,18,18,0.6) 69%)' : 'transparent'
  const innerTokenBorder = isEfficiency ? '#9ef5ff' : '#bb9eff'
  const middleTokenBorder = isEfficiency ? '#474849' : '#bb9eff'

  const outerW = 200, outerH = 200, outerR = 12
  const innerW = 120, innerH = 120, innerR = 16

  return (
    <div
      className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-2xl flex items-center justify-center transition-all duration-500"
      style={{ border: '0.853px solid rgba(71,72,73,0.7)' }}
    >
      <div
        className="relative rounded-xl transition-all duration-500"
        style={{ border: `1px solid ${middleBorderColor}`, background: middleGlow, width: outerW, height: outerH, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div
          className="relative rounded-2xl transition-all duration-500"
          style={{
            border: `1px solid ${innerBorderColor}`,
            background: innerGlow,
            width: innerW, height: innerH,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: isEfficiency ? '0 0 10px rgba(158,245,255,0.15)' : 'none',
          }}
        >
          <div className="w-10 h-10 md:w-14 md:h-14">
            <img src="/assets/animation-assests/ts-symbol.svg" alt="TownSquare" className="w-full h-full" />
          </div>
          <OrbitingToken icon="/assets/animation-assests/MON.svg" name="MON" startOffset={0.15} w={innerW} h={innerH} r={innerR} duration={32} isDimmedIcon={false} pillBorderColor={innerTokenBorder} size={40} />
          <OrbitingToken icon="/assets/animation-assests/sMON.svg" name="sMON" startOffset={0.65} w={innerW} h={innerH} r={innerR} duration={32} isDimmedIcon={false} pillBorderColor={innerTokenBorder} size={40} />
        </div>
        <OrbitingToken icon="/assets/animation-assests/USDC.svg" name="USDC" startOffset={0.1} w={outerW} h={outerH} r={outerR} duration={44} isDimmedIcon={isEfficiency} pillBorderColor={middleTokenBorder} paused={isEfficiency} size={40} />
        <OrbitingToken icon="/assets/animation-assests/wETH.svg" name="wETH" startOffset={0.6} w={outerW} h={outerH} r={outerR} duration={44} isDimmedIcon={isEfficiency} pillBorderColor={middleTokenBorder} paused={isEfficiency} size={40} />
      </div>
    </div>
  )
}

/* ── Main DualEngine Section ── */
export default function DualEngine() {
  const [mode, setMode] = useState('general')
  const isGeneral = mode === 'general'

  return (
    <Section className="pt-10 md:pt-14 pb-16 md:pb-32">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:gap-8 w-full lg:w-[616px]"
        >
          <div className="flex flex-col gap-4 md:gap-6">
            <motion.h2 variants={fadeUp} custom={0} className="text-2xl md:text-[36px] font-extrabold text-white font-sans leading-tight md:leading-10">
              Dual Engine Risk Framework
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-sm md:text-base text-text-primary leading-[1.7]">
              Unlike global margin systems, TownSquare utilizes isolated risk
              pods. A volatility event in one asset cannot liquidate your unrelated positions, ensuring a safer leverage environment for institutional users.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} custom={2} className="flex flex-col gap-4 md:gap-6">
            <button
              onClick={() => setMode('general')}
              className={`rounded-lg overflow-hidden text-left transition-all duration-300 ${isGeneral ? 'border-l-4 border-l-purple' : 'border-l-4 border-l-transparent'}`}
            >
              <div
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between h-full px-5 md:px-8 py-5 md:py-8 rounded-lg gap-3 sm:gap-0 transition-all duration-300 ${isGeneral ? 'scale-[1.02]' : ''}`}
                style={modeCardStyle}
              >
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-lg md:text-xl font-bold text-purple font-sans leading-7">General Mode</h4>
                  <p className="text-sm md:text-base text-text-primary leading-[1.7]">Bluechip cross-asset lending</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-xl md:text-2xl font-semibold font-mono text-purple leading-8">80% LTV</p>
                  <p className="text-[11px] font-bold text-purple uppercase leading-[15px]">Maximum Stability</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setMode('efficiency')}
              className={`rounded-lg overflow-hidden text-left transition-all duration-300 ${!isGeneral ? 'border-l-4 border-l-cyan' : 'border-l-4 border-l-transparent'}`}
            >
              <div
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between h-full px-5 md:px-8 py-5 md:py-6 rounded-lg gap-3 sm:gap-0 transition-all duration-300 ${!isGeneral ? 'scale-[1.02]' : ''}`}
                style={modeCardStyle}
              >
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-lg md:text-xl font-bold text-cyan font-sans leading-7">Efficiency Mode</h4>
                  <p className="text-sm md:text-base text-text-primary leading-[1.7]">Correlated asset pairs (e.g. shMON/MON)</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-xl md:text-2xl font-semibold font-mono text-cyan leading-8">95% LTV</p>
                  <p className="text-[11px] font-bold text-cyan uppercase leading-[15px]">High Capital Efficiency</p>
                </div>
              </div>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block w-[526px] h-[526px] shrink-0"
        >
          <DualEngineIllustration mode={mode} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex lg:hidden w-full justify-center"
        >
          <DualEngineMobile mode={mode} />
        </motion.div>
      </div>
    </Section>
  )
}
