import type { Variants } from 'framer-motion'

/* ── Animation variants ── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

/* ── Shared card style ── */
export const cardStyle = (deg: number = 153) => ({
  background: `linear-gradient(${deg}deg, rgba(146,100,248,0.1) 0%, rgba(146,100,248,0) 100%)`,
  border: '1px solid rgba(66,71,84,0.15)',
  boxShadow: 'inset 0 1px 0 1px rgba(255,255,255,0.05)',
})

export const modeCardStyle = {
  background: 'linear-gradient(to right, #121212, rgba(18,18,18,0.6))',
  border: '1px solid rgba(66,71,84,0.15)',
  boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
}

export const assets = {
  chartLine1: '/assets/hero/chart-line-1.svg',
  chartLine2: '/assets/hero/chart-line-2.svg',
  dataStream: '/assets/hero/data-stream.png',
  vaultIcon: '/assets/icons/vault.svg',
  crossChainIcon: '/assets/icons/cross-chain.svg',
  loopIcon: '/assets/icons/loop.svg',
}

/* ── Dual Engine token arrays ── */
export interface TokenDef {
  name: string
  icon: string
  startOffset: number
}

export const middleBorderTokens: TokenDef[] = [
  { name: 'USDC', icon: '/assets/animation-assests/USDC.svg', startOffset: 0.05 },
  { name: 'wETH', icon: '/assets/animation-assests/wETH.svg', startOffset: 0.22 },
  { name: 'USD1', icon: '/assets/animation-assests/USD1.svg', startOffset: 0.55 },
  { name: 'yzUSD', icon: '/assets/animation-assests/yzUSD.svg', startOffset: 0.78 },
]

export const innerBorderTokens: TokenDef[] = [
  { name: 'gMON', icon: '/assets/animation-assests/gMON.svg', startOffset: 0.1 },
  { name: 'MON', icon: '/assets/animation-assests/MON.svg', startOffset: 0.45 },
  { name: 'sMON', icon: '/assets/animation-assests/sMON.svg', startOffset: 0.75 },
]

/* ── Position on rounded rectangle perimeter ── */
export function posOnRect(progress: number, w: number, h: number, r: number) {
  const straight = 2 * (w - 2 * r) + 2 * (h - 2 * r)
  const arcs = 2 * Math.PI * r
  const perim = straight + arcs
  let d = ((progress % 1) + 1) % 1 * perim

  const topEdge = w - 2 * r
  const rightEdge = h - 2 * r
  const bottomEdge = w - 2 * r
  const leftEdge = h - 2 * r
  const arcLen = (Math.PI / 2) * r

  if (d < topEdge) return { x: r + d, y: 0 }
  d -= topEdge
  if (d < arcLen) { const a = d / r; return { x: w - r + Math.sin(a) * r, y: r - Math.cos(a) * r } }
  d -= arcLen
  if (d < rightEdge) return { x: w, y: r + d }
  d -= rightEdge
  if (d < arcLen) { const a = d / r; return { x: w - r + Math.cos(a) * r, y: h - r + Math.sin(a) * r } }
  d -= arcLen
  if (d < bottomEdge) return { x: w - r - d, y: h }
  d -= bottomEdge
  if (d < arcLen) { const a = d / r; return { x: r - Math.sin(a) * r, y: h - r + Math.cos(a) * r } }
  d -= arcLen
  if (d < leftEdge) return { x: 0, y: h - r - d }
  d -= leftEdge
  const a = d / r
  return { x: r - Math.cos(a) * r, y: r - Math.sin(a) * r }
}
