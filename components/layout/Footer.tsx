'use client'

import Link from 'next/link'
import type { FooterColumn } from '@/lib/types'

const columns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Yield App', href: 'https://app.townsq.xyz/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: 'https://docs.townsq.xyz/', external: true },
      { label: 'Audit Reports', href: 'https://github.com/TowneSquare/audit-reports-2025Q3', external: true },
      { label: 'Brand Assets', href: '/brandkit' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'X', href: 'https://x.com/TownSquarexyz', external: true },
      { label: 'Discord', href: 'https://discord.gg/yMRmqFzrDW', external: true },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-surface w-full">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-[rgba(68,71,87,0.15)] pt-12 md:pt-20 pb-12 md:pb-20">
        {/* Brand column */}
        <div className="flex flex-col gap-5 md:gap-6 col-span-2 md:col-span-1">
          <Link href="/"><img src="/assets/ts-logo.svg" alt="TownSquare" className="h-8" /></Link>
          <p className="text-sm font-inter text-text-muted leading-relaxed">
            Institutional curator of decentralized
            finance. Secured by the best, built for
            the bold.
          </p>
          <div className="flex flex-col gap-1">
            <Link href="/terms" className="text-[10px] font-medium font-inter text-text-darker hover:text-text-primary transition tracking-[-0.25px] leading-[15px]">
              Terms & Conditions
            </Link>
            <p className="text-[10px] font-medium font-inter text-text-darker tracking-[-0.25px] leading-[15px]">
              &copy; 2026 TownSquare. Institutional Curator of DeFi.
            </p>
          </div>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-4 md:gap-6">
            <h4 className="text-[10px] font-semibold font-inter uppercase tracking-[1px] text-purple-muted leading-[15px]">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-3 md:gap-4">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-inter text-text-muted hover:text-text-primary transition leading-5"
                    >
                      {link.label}
                    </a>
                  ) : link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      className="text-sm font-inter text-text-muted hover:text-text-primary transition leading-5"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm font-inter text-text-muted hover:text-text-primary transition leading-5"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
