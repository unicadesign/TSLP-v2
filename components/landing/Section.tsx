'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  [key: string]: unknown
}

export default function Section({ children, className = '', ...props }: SectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`w-full max-w-[1280px] mx-auto px-5 md:px-8 ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  )
}
