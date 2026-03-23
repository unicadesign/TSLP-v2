'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView, useMotionValue, useTransform, animate as fmAnimate } from 'framer-motion'

interface CountUpProps {
  from?: number
  to: number
  decimals?: number
  duration?: number
  delay?: number
  suffix?: string
}

export default function CountUp({ from = 0, to, decimals = 1, duration = 1.5, delay = 0, suffix = '%' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(from)
  const display = useTransform(count, (v: number) => v.toFixed(decimals) + suffix)
  const [text, setText] = useState(from.toFixed(decimals) + suffix)

  useEffect(() => {
    const unsubscribe = display.on('change', (v: string) => setText(v))
    return unsubscribe
  }, [display])

  useEffect(() => {
    if (inView) {
      fmAnimate(count, to, { duration, delay, ease: 'easeOut' })
    }
  }, [inView, count, to, duration, delay])

  return <span ref={ref}>{text}</span>
}
