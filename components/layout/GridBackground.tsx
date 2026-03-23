'use client'

import { useRef, useEffect } from 'react'

export default function GridBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const mask = `radial-gradient(circle 300px at ${e.clientX}px ${e.clientY}px, black 0%, transparent 70%)`
      el.style.maskImage = mask
      el.style.webkitMaskImage = mask
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        maskImage: 'radial-gradient(circle 300px at -1000px -1000px, black 0%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(circle 300px at -1000px -1000px, black 0%, transparent 70%)',
      }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(187,158,255,0.3)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}
