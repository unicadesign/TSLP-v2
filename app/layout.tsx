import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Space_Grotesk, Inter, Manrope } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', weight: ['400', '500', '600', '700', '800'] })
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk', weight: ['700'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600'] })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', weight: ['700'] })

export const metadata: Metadata = {
  title: 'TownSquare — Decentralized Leverage & Yield Market',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${grotesk.variable} ${inter.variable} ${manrope.variable}`}>
      <body className="bg-surface min-h-screen flex flex-col items-center text-white font-sans overflow-x-clip">
        {children}
      </body>
    </html>
  )
}
