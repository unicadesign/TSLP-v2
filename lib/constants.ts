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

/* ── Figma asset URLs (valid ~7 days) ── */
export const assets = {
  tsSymbol: 'https://www.figma.com/api/mcp/asset/be27d290-713a-4c8d-af94-0d3dbdbc3d40',
  tsSymbolInner: 'https://www.figma.com/api/mcp/asset/ac764754-47eb-44f8-afb1-411476d0b19e',
  townsquareText: 'https://www.figma.com/api/mcp/asset/0aa5da08-54eb-4945-b803-7149e57aecdb',
  townsquareTextLight: 'https://www.figma.com/api/mcp/asset/d6ecdd2b-5d0b-43df-9d6f-06dd10858678',
  heroGlow: 'https://www.figma.com/api/mcp/asset/637fcabc-ffca-4281-9ed9-bd472287854e',
  chartLine1: 'https://www.figma.com/api/mcp/asset/f03b4c76-c1b6-4d7c-b1fa-f62d532ac29e',
  chartLine2: 'https://www.figma.com/api/mcp/asset/f63a7967-672d-4afd-916b-10d57dc3382f',
  chartDot1: 'https://www.figma.com/api/mcp/asset/1ad8aa84-2091-4a63-aec9-4dd90725f56a',
  chartDot2: 'https://www.figma.com/api/mcp/asset/305591b6-7fbe-44fc-84eb-e25ded7f2a2d',
  dataStream: 'https://www.figma.com/api/mcp/asset/57ab26db-95c9-4f44-b53c-d17fabb12cba',
  statsIcon: 'https://www.figma.com/api/mcp/asset/200bb872-7274-4cda-b0df-c47fc4b7edbb',
  arrowIcon: 'https://www.figma.com/api/mcp/asset/33ccd5e2-b9d6-4297-9c04-651583c18d3c',
  heroArrow: 'https://www.figma.com/api/mcp/asset/a7238e78-f082-48f0-b813-3346acd5b679',
  vaultIcon: 'https://www.figma.com/api/mcp/asset/c945a284-207e-49e1-a10f-73b912e6827a',
  crossChainIcon: 'https://www.figma.com/api/mcp/asset/ac30b6e6-f341-486d-beec-56dc0a40e751',
  loopIcon: 'https://www.figma.com/api/mcp/asset/97210202-2430-41cd-aef4-607dbbb3a144',
  cardArrow: 'https://www.figma.com/api/mcp/asset/e64ef8d2-9053-4125-b5e8-519cffcc19c1',
  borderSymbol: 'https://www.figma.com/api/mcp/asset/7030c9c6-0b86-4c47-b070-fe370d1e7864',
  borderSymbolInner: 'https://www.figma.com/api/mcp/asset/fd2c2809-82e9-4626-bd92-382fcc83e88f',
  chainMon: 'https://www.figma.com/api/mcp/asset/419551a5-a6c9-4f36-9a95-4b04dc33fa5b',
  feImg: 'https://www.figma.com/api/mcp/asset/fe7f3f13-d01a-4e02-aa3b-5ce4700e710f',
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
