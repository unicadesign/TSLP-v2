'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

const steps = [
  { num: '01', title: 'Deposit Collateral', desc: 'Supply e.g. MON or shMON to the primary lending vault.' },
  { num: '02', title: 'Choose Leverage', desc: 'Borrow additional assets against your supplied collateral.' },
  { num: '03', title: 'Swap & Re-supply', desc: 'Instantly swap borrowed assets and supply them back to the vault.' },
  { num: '04', title: 'Finalized Loop', desc: 'Your position is now generating magnified yield on the full amount.' },
]

export default function LoopFlow() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const lineProgress = useTransform(scrollYProgress, [0, 0.95], ['0%', '100%'])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v < 0.25) setActiveStep(0)
    else if (v < 0.50) setActiveStep(1)
    else if (v < 0.75) setActiveStep(2)
    else setActiveStep(3)
  })

  return (
    <div ref={sectionRef} className="relative min-h-[250vh] lg:min-h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[268px]">
            <div className="flex flex-col gap-3 md:gap-4 shrink-0 lg:w-[300px]">
              <h2 className="text-2xl md:text-[36px] font-extrabold text-white font-sans leading-tight md:leading-10">
                The 4-Step Loop Flow
              </h2>
              <p className="text-sm md:text-base text-text-primary leading-[1.7]">
                Automated recursive leverage in a single transaction.
              </p>
            </div>

            <div className="relative flex flex-col gap-8 md:gap-12 w-full lg:w-auto">
              <div className="absolute left-[14px] md:left-8 top-2 w-px bg-white/10" style={{ height: 'calc(100% - 3rem)' }} />
              <motion.div
                className="absolute left-[14px] md:left-8 top-2 w-px origin-top"
                style={{ height: lineProgress, background: 'linear-gradient(to bottom, #bb9eff, #c791fc 31%, #ff6b9d 66%)' }}
              />

              {steps.map((step, i) => {
                const isActive = i === activeStep
                const isCompleted = i < activeStep
                const isUpcoming = i > activeStep

                return (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: isUpcoming ? 0.35 : 1,
                      y: isUpcoming ? 6 : 0,
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="relative pl-10 md:pl-24 pb-4 md:pb-8"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : isCompleted ? 0.75 : 0.5,
                        backgroundColor: isActive || isCompleted
                          ? (i === 0 ? '#bb9eff' : i === 1 ? '#c791fc' : i === 2 ? '#d87de0' : '#ff6b9d')
                          : '#334155',
                        boxShadow: isActive
                          ? `0 0 0 4px ${i === 0 ? 'rgba(187,158,255,0.25)' : i === 3 ? 'rgba(255,107,157,0.25)' : 'rgba(199,145,252,0.25)'}`
                          : '0 0 0 0px rgba(187,158,255,0)',
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      className="absolute top-1 w-4 h-4 rounded-full left-[6px] md:left-6"
                    />

                    <div className="flex flex-col gap-1">
                      <motion.span
                        animate={{
                          color: isActive || isCompleted ? '#bb9eff' : 'rgba(255,255,255,0.3)',
                        }}
                        transition={{ duration: 0.3 }}
                        className={`text-[11px] md:text-xs font-mono uppercase tracking-[1.2px] leading-4 ${
                          isActive || isCompleted ? 'font-semibold' : 'font-normal'
                        }`}
                      >
                        Step {step.num}
                      </motion.span>
                      <motion.h4
                        animate={{
                          color: isUpcoming ? 'rgba(255,255,255,0.35)' : '#f1f5f9',
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-lg md:text-xl font-bold font-sans leading-7"
                      >
                        {step.title}
                      </motion.h4>
                      <motion.p
                        animate={{
                          color: isActive || isCompleted ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)',
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-sm md:text-base leading-[1.7]"
                      >
                        {step.desc}
                      </motion.p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
