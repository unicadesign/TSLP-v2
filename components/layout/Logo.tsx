'use client'

import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/"><img src="/assets/ts-logo.svg" alt="TownSquare" className="h-7" /></Link>
  )
}
