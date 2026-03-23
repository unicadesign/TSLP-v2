import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, useInView, useMotionValue, animate as fmAnimate } from 'framer-motion'
import { ArrowRight, ArrowSquareOut, List, X, XLogo, DiscordLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import tsLogo from '../assets/TS logo.svg'
import avgStratApyIcon from '../assets/icons/avg-strat-apy.svg'
import { useLiveStats } from './hooks/useLiveStats'
import sherlockLogo from '../assets/animation-assests/secured-by-logos/sherlock-logo.svg'
import astraSecLogo from '../assets/animation-assests/secured-by-logos/AstraSec.svg'

/* ── Dual Engine animation assets ── */
import animTsSymbol from '../assets/animation-assests/TS symbol.svg'
import animMON from '../assets/animation-assests/MON.svg'
import animGMON from '../assets/animation-assests/gMON.svg'
import animSMON from '../assets/animation-assests/sMON.svg'
import animWETH from '../assets/animation-assests/wETH.svg'
import animUSDC from '../assets/animation-assests/USDC.svg'
import animUSD1 from '../assets/animation-assests/USD1.svg'
import animYzUSD from '../assets/animation-assests/yzUSD.svg'

/* ── Figma asset URLs (valid ~7 days) ── */
const assets = {
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
  sherlock: 'https://www.figma.com/api/mcp/asset/11753834-0964-4f02-85cc-36e3ee2c58af',
  astrasec: 'https://www.figma.com/api/mcp/asset/a29e92b2-072c-4ea9-a691-d81c938127cf',
  vaultIcon: 'https://www.figma.com/api/mcp/asset/c945a284-207e-49e1-a10f-73b912e6827a',
  crossChainIcon: 'https://www.figma.com/api/mcp/asset/ac30b6e6-f341-486d-beec-56dc0a40e751',
  loopIcon: 'https://www.figma.com/api/mcp/asset/97210202-2430-41cd-aef4-607fbbb3a144',
  cardArrow: 'https://www.figma.com/api/mcp/asset/e64ef8d2-9053-4125-b5e8-519cffcc19c1',
  borderSymbol: 'https://www.figma.com/api/mcp/asset/7030c9c6-0b86-4c47-b070-fe370d1e7864',
  borderSymbolInner: 'https://www.figma.com/api/mcp/asset/fd2c2809-82e9-4626-bd92-382fcc83e88f',
  chainEth: 'https://www.figma.com/api/mcp/asset/9f2c3c31-f44c-4b42-b0ef-5887dfbc6fe0',
  chainMon: 'https://www.figma.com/api/mcp/asset/419551a5-a6c9-4f36-9a95-4b04dc33fa5b',
  chainSol: 'https://www.figma.com/api/mcp/asset/d418fa12-a347-4b27-9d2b-600b2cb100cf',
  chainBase: 'https://www.figma.com/api/mcp/asset/966232d0-5a35-4df6-9984-75364eabf649',
  chainArb: 'https://www.figma.com/api/mcp/asset/7d19421c-5196-4bfb-a340-9a63bdb73180',
  chainImg: 'https://www.figma.com/api/mcp/asset/a7725a17-f0ca-46a9-8acb-348cf06dc33e',
  chainAptos: 'https://www.figma.com/api/mcp/asset/24313aff-4d70-40fd-a3b3-87cc8519840d',
  chainLast: 'https://www.figma.com/api/mcp/asset/1de9f053-efa8-4052-8043-141b905aee7f',
  ethVector: 'https://www.figma.com/api/mcp/asset/eadbfc1e-973e-4ca8-98fe-17d666a1d5fa',
  tokenBtc: 'https://www.figma.com/api/mcp/asset/3afdaabf-71cc-477f-b911-1f3dc3c0f339',
  tokenUsdc: 'https://www.figma.com/api/mcp/asset/a37524b8-c528-4e71-a410-84b37914b07b',
  tokenSol: 'https://www.figma.com/api/mcp/asset/952e667e-6ce6-438d-a44d-29605c739a60',
  tokenEth: 'https://www.figma.com/api/mcp/asset/589652c7-dce9-4c4d-b583-7ed32dfdd469',
  tokenSui: 'https://www.figma.com/api/mcp/asset/de543222-9c5d-443d-968e-f1502d348903',
  tokenMon: 'https://www.figma.com/api/mcp/asset/6a8d0972-d36e-4e16-beaa-11737b4a0252',
  tokenGroup: 'https://www.figma.com/api/mcp/asset/a7238e78-f082-48f0-b813-3346acd5b679',
  tokenImg: 'https://www.figma.com/api/mcp/asset/ae638e0b-8040-4d5c-9dea-7d03633ede58',
  feImg: 'https://www.figma.com/api/mcp/asset/fe7f3f13-d01a-4e02-aa3b-5ce4700e710f',
}

/* ── Animation variants ── */
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

/* ── Shared card style ── */
const cardStyle = (deg = 153) => ({
  background: `linear-gradient(${deg}deg, rgba(146,100,248,0.1) 0%, rgba(146,100,248,0) 100%)`,
  border: '1px solid rgba(66,71,84,0.15)',
  boxShadow: 'inset 0 1px 0 1px rgba(255,255,255,0.05)',
})

const modeCardStyle = {
  background: 'linear-gradient(to right, #121212, rgba(18,18,18,0.6))',
  border: '1px solid rgba(66,71,84,0.15)',
  boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
}

/* ── Reusable section wrapper ── */
function Section({ children, className = '', ...props }) {
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

/* ── Grid Background with mouse reveal (zero re-renders) ── */
function GridBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
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

/* ── Logo ── */
export function Logo() {
  return (
    <Link to="/"><img src={tsLogo} alt="TownSquare" className="h-7" /></Link>
  )
}

/* ── Navigation ── */
export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      variants={fadeUp}
      custom={0}
      className="relative z-50 w-full max-w-[1280px] mx-auto rounded-2xl md:rounded-[22px] px-5 md:px-8 py-4 md:py-5 backdrop-blur-xl border border-purple/10 shadow-[0_24px_48px_rgba(0,0,0,0.4)]"
      style={{ background: 'rgba(15,23,42,0.4)' }}
    >
      <div className="flex items-center justify-between">
        <Logo />

        {/* Desktop nav links + CTA */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium font-sans">
          <a href="https://docs.townsq.xyz/" target="_blank" rel="noopener noreferrer" className="text-text-slate hover:text-text-primary transition inline-flex items-center gap-1.5">
            Docs <ArrowSquareOut size={14} />
          </a>
          <a href="https://x.com/TownSquarexyz" target="_blank" rel="noopener noreferrer" className="text-text-slate hover:text-text-primary transition">
            <XLogo size={18} />
          </a>
          <a href="https://discord.gg/yMRmqFzrDW" target="_blank" rel="noopener noreferrer" className="text-text-slate hover:text-text-primary transition">
            <DiscordLogo size={18} />
          </a>
          <a
            href="https://app.townsq.xyz/"
            className="bg-white text-[#121212] font-semibold text-base px-5 lg:px-6 py-3 lg:py-4 rounded-xl hover:bg-gray-100 transition"
          >
            Launch App
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-5 pb-2 text-sm font-medium font-sans">
              <a href="https://docs.townsq.xyz/" target="_blank" rel="noopener noreferrer" className="text-text-slate inline-flex items-center gap-1.5">
                Docs <ArrowSquareOut size={14} />
              </a>
              <div className="flex items-center gap-4">
                <a href="https://x.com/TownSquarexyz" target="_blank" rel="noopener noreferrer" className="text-text-slate"><XLogo size={18} /></a>
                <a href="https://discord.gg/yMRmqFzrDW" target="_blank" rel="noopener noreferrer" className="text-text-slate"><DiscordLogo size={18} /></a>
              </div>
              <a
                href="https://app.townsq.xyz/"
                className="bg-white text-[#121212] font-semibold text-base px-5 py-3 rounded-xl text-center mt-2"
              >
                Launch App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

/* ── Hero Section ── */
/* ── CountUp animation helper ── */
function CountUp({ from = 0, to, decimals = 1, duration = 1.5, delay = 0, suffix = '%' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(from)
  const display = useTransform(count, (v) => v.toFixed(decimals) + suffix)
  const [text, setText] = useState(from.toFixed(decimals) + suffix)

  useEffect(() => {
    const unsubscribe = display.on('change', (v) => setText(v))
    return unsubscribe
  }, [display])

  useEffect(() => {
    if (inView) {
      fmAnimate(count, to, { duration, delay, ease: 'easeOut' })
    }
  }, [inView, count, to, duration, delay])

  return <span ref={ref}>{text}</span>
}

function Hero() {
  const { stats } = useLiveStats()
  const formattedTvl = '$' + stats.tvl.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  return (
    <section
      className="relative w-full px-5 md:px-8 py-12 md:py-16 lg:py-20"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.15) 0%, rgba(18,18,18,0) 70%)',
      }}
    >
      {/* Background glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] md:w-[856px] h-[600px] md:h-[856px] pointer-events-none">
        <img src={assets.heroGlow} alt="" className="w-[200%] h-[200%] object-cover -translate-x-1/4 -translate-y-1/4" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-[1280px] mx-auto">
        {/* Left content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-6 md:gap-8"
        >
          <div className="flex flex-col gap-3 md:gap-4">
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="text-[36px] md:text-[48px] lg:text-[64px] font-bold leading-[1.15] text-text-primary font-sans"
            >
              Yield Markets,
              <br />
              <span className="bg-gradient-to-r from-purple via-[#c791fc] via-[31%] to-pink to-[66%] bg-clip-text text-transparent">
                Reimagined
              </span>
              <span className="text-purple-light">.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-base md:text-lg text-text-primary leading-relaxed max-w-[448px]">
              TownSquare is a decentralized leverage and yield market that makes onchain money more accessible to all.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
            <a
              href="https://app.townsq.xyz/"
              className="group relative overflow-hidden bg-white text-[#121212] font-bold text-base px-6 md:px-8 py-3 md:py-4 rounded-xl"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple via-[#c791fc] via-[31%] to-pink to-[66%] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
                Start earning
                <ArrowRight size={15} weight="bold" />
              </span>
            </a>

            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[1px] text-text-dim">
                  Total Value Locked
                </span>
                <span className="text-xl md:text-[26px] font-semibold font-mono text-text-primary leading-8 md:leading-10">
                  {formattedTvl}
                </span>
              </div>
              <div className="w-px h-10 md:h-12 bg-border-divider" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[1px] text-text-dim">
                  Active Positions
                </span>
                <span className="text-xl md:text-[26px] font-semibold font-mono text-text-primary leading-8 md:leading-10">
                  {stats.activePositions.toLocaleString()}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right chart card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full md:w-[420px] lg:w-[540px] shrink-0"
        >
          {/* Chart card */}
          <div
            className="relative rounded-2xl md:rounded-[22px] p-1 backdrop-blur-md overflow-hidden"
            style={{
              background: 'rgba(31,31,31,0.6)',
              border: '0.926px solid rgba(255,255,255,0.05)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(144deg, rgba(146,100,248,0.1) 0%, rgba(146,100,248,0) 100%)',
              }}
            />
            {/* Data streams — pulsing */}
            <div className="absolute top-0 left-[37px] w-px h-[93px] data-stream-pulse" style={{ animationDelay: '0s' }}>
              <img src={assets.dataStream} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[93px] data-stream-pulse" style={{ animationDelay: '0.4s' }}>
              <img src={assets.dataStream} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 right-[74px] w-px h-[93px] data-stream-pulse" style={{ animationDelay: '0.8s' }}>
              <img src={assets.dataStream} alt="" className="w-full h-full object-cover" />
            </div>
            {/* Chart SVG area */}
            <div className="relative h-[260px] md:h-[320px] lg:h-[389px] rounded-[inherit] overflow-hidden">
              {/* Chart line 1 — draw in left to right */}
              <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-[16%_-3%_10%_0]"
              >
                <img src={assets.chartLine1} alt="" className="w-full h-full" />
              </motion.div>
              {/* Chart line 2 — draw in left to right */}
              <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-[33%_-8%_21%_0]"
              >
                <img src={assets.chartLine2} alt="" className="w-full h-full" />
              </motion.div>
              {/* Chart dot 1 — pop in */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 1.2 }}
                className="absolute"
                style={{ top: '14.5%', left: '36.5%', width: '2%', height: '2.7%' }}
              >
                <img src={assets.chartDot1} alt="" className="w-full h-full" />
              </motion.div>
              {/* Chart dot 2 — pop in */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 1.0 }}
                className="absolute"
                style={{ top: '32.3%', left: '37.3%', width: '1.3%', height: '1.7%' }}
              >
                <img src={assets.chartDot2} alt="" className="w-full h-full" />
              </motion.div>
            </div>
            {/* Protocol Health label — fade in + count up */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute bottom-6 md:bottom-8 right-4 md:right-6 text-right"
            >
              <p className="text-[8px] md:text-[9px] font-semibold font-inter uppercase tracking-[0.9px] text-purple-dark">
                Protocol Health
              </p>
              <p className="text-2xl md:text-[33px] font-bold font-grotesk text-white leading-[30px] md:leading-[37px]">
                <CountUp from={0} to={stats.protocolHealth} decimals={1} duration={1.5} delay={1.3} />
              </p>
            </motion.div>
          </div>

          {/* Floating stats card — slide up + continuous float */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute bottom-[-20px] md:bottom-[-24px] left-2 md:left-[-37px] z-10"
          >
            <motion.div
              animate={{ y: [-2, 2] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="flex items-center gap-3 md:gap-4 p-3 md:p-5 rounded-xl md:rounded-[15px] backdrop-blur-md"
              style={{
                background: 'rgba(31,31,31,0.8)',
                border: '0.926px solid rgba(255,255,255,0.1)',
                boxShadow: '0 23px 46px -11px rgba(0,0,0,0.25)',
              }}
            >
              <img src={avgStratApyIcon} alt="" className="w-8 h-8 md:w-[37px] md:h-[37px]" />
              <div>
                <p className="text-[7px] md:text-[8px] font-semibold font-inter uppercase tracking-[0.8px] text-[#cbc3d6]">
                  Avg Strategy APY
                </p>
                <p className="text-base md:text-[19px] font-bold font-grotesk text-white leading-5 md:leading-[26px]">
                  <CountUp from={0} to={stats.avgApy} decimals={2} duration={1.2} delay={1.5} />
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Secured By ── */
function SecuredBy() {
  return (
    <Section className="py-10 md:py-16">
      <motion.div variants={fadeUp} custom={0} className="flex flex-col gap-4 md:gap-6 items-center">
        <span className="text-[11px] font-bold uppercase tracking-[1px] text-text-dim">
          Secured By
        </span>
        <div className="flex items-center gap-10 md:gap-24 opacity-50">
          <a href="https://sherlock.xyz/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition"><img src={sherlockLogo} alt="Sherlock" className="h-4 md:h-5" /></a>
          <a href="https://astrasec.ai/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition"><img src={astraSecLogo} alt="AstraSec" className="h-8 md:h-10" /></a>
        </div>
      </motion.div>
    </Section>
  )
}

/* ── Features Section ── */
function Features() {
  return (
    <Section className="pt-10 md:pt-[52px] pb-16 md:pb-[100px]">
      <div className="flex flex-col gap-10 md:gap-[60px]">
        {/* Section heading */}
        <motion.div variants={fadeUp} custom={0} className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-2xl md:text-[36px] font-extrabold text-white font-sans leading-tight md:leading-10">
            Yield & leverage, simplified.
          </h2>
          <p className="text-base md:text-lg text-text-primary leading-relaxed">
            Forget the complexity of manual farming. TownSquare aggregates the best opportunities
            across chains into a single institutional-grade interface.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Lending Vaults — large card */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex-1 flex flex-col justify-between rounded-lg p-6 md:p-8 overflow-hidden relative min-h-[320px] md:min-h-0"
            style={cardStyle(153)}
          >
            <div className="flex flex-col gap-5 md:gap-6">
              <div className="w-12 h-12 rounded-xl bg-purple-light/10 flex items-center justify-center">
                <img src={assets.vaultIcon} alt="" className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-[36px] font-bold text-text-primary font-sans leading-tight md:leading-9">
                Lending Vaults
              </h3>
              <p className="text-sm md:text-base font-inter text-text-muted leading-6">
                Earn passive yield on your idle assets with
                algorithmic risk management and dynamic rate adjustment.
              </p>
            </div>
            <div className="flex items-end justify-between pt-8 md:pt-12">
              <div>
                <p className="text-[36px] md:text-[48px] font-semibold font-mono text-purple-light leading-[36px] md:leading-[48px]">24.2%</p>
                <p className="text-base md:text-lg font-semibold text-text-dim leading-7">Avg APY</p>
              </div>
            </div>
          </motion.div>

          {/* Right column — stacked cards */}
          <div className="flex flex-col gap-6 md:gap-8 lg:w-[465px] lg:shrink-0">
            {/* Cross-Chain Market */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="flex-1 flex flex-col justify-between rounded-lg p-6 md:p-8 min-h-[180px]"
              style={cardStyle(158)}
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <img src={assets.crossChainIcon} alt="" className="w-5 h-4" />
                <h4 className="text-xl md:text-2xl font-bold text-text-primary font-sans leading-7 md:leading-8">
                  Cross-Chain Market
                </h4>
              </div>
              <p className="text-sm md:text-base font-inter text-text-muted leading-6 mt-3">
                Seamlessly move liquidity across ecosystems with
                zero-slippage bridging.
              </p>
            </motion.div>

            {/* Loop Vaults */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex flex-col justify-between rounded-lg p-6 md:p-8 overflow-hidden min-h-[160px] lg:h-[189px]"
              style={cardStyle(158)}
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <img src={assets.loopIcon} alt="" className="w-4 h-4" />
                <h4 className="text-xl md:text-2xl font-bold text-text-primary font-sans leading-7 md:leading-8">
                  Loop Vaults
                </h4>
              </div>
              <p className="text-sm md:text-base font-inter text-text-muted leading-6 mt-3">
                Automated one-click leverage strategies for power users and yield farmers.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ── Dual Engine Risk Framework ── */
/* Token data for orbit animation along rectangular borders */
const middleBorderTokens = [
  { name: 'USDC', icon: animUSDC, startOffset: 0.05 },
  { name: 'wETH', icon: animWETH, startOffset: 0.22 },
  { name: 'USD1', icon: animUSD1, startOffset: 0.55 },
  { name: 'yzUSD', icon: animYzUSD, startOffset: 0.78 },
]

const innerBorderTokens = [
  { name: 'gMON', icon: animGMON, startOffset: 0.1 },
  { name: 'MON', icon: animMON, startOffset: 0.45 },
  { name: 'sMON', icon: animSMON, startOffset: 0.75 },
]

/* Calculate position on a rounded rectangle perimeter given a 0-1 progress value */
function posOnRect(progress, w, h, r) {
  // Perimeter: 4 straight edges + 4 quarter-circle arcs
  const straight = 2 * (w - 2 * r) + 2 * (h - 2 * r)
  const arcs = 2 * Math.PI * r
  const perim = straight + arcs
  let d = ((progress % 1) + 1) % 1 * perim

  const topEdge = w - 2 * r
  const rightEdge = h - 2 * r
  const bottomEdge = w - 2 * r
  const leftEdge = h - 2 * r
  const arcLen = (Math.PI / 2) * r

  // Top edge (left to right)
  if (d < topEdge) return { x: r + d, y: 0 }
  d -= topEdge
  // Top-right arc
  if (d < arcLen) { const a = d / r; return { x: w - r + Math.sin(a) * r, y: r - Math.cos(a) * r } }
  d -= arcLen
  // Right edge (top to bottom)
  if (d < rightEdge) return { x: w, y: r + d }
  d -= rightEdge
  // Bottom-right arc
  if (d < arcLen) { const a = d / r; return { x: w - r + Math.cos(a) * r, y: h - r + Math.sin(a) * r } }
  d -= arcLen
  // Bottom edge (right to left)
  if (d < bottomEdge) return { x: w - r - d, y: h }
  d -= bottomEdge
  // Bottom-left arc
  if (d < arcLen) { const a = d / r; return { x: r - Math.sin(a) * r, y: h - r + Math.cos(a) * r } }
  d -= arcLen
  // Left edge (bottom to top)
  if (d < leftEdge) return { x: 0, y: h - r - d }
  d -= leftEdge
  // Top-left arc
  { const a = d / r; return { x: r - Math.cos(a) * r, y: r - Math.sin(a) * r } }
}

function OrbitingToken({ icon, name, startOffset, w, h, r, duration, isDimmedIcon, pillBorderColor = '#474849', paused = false }) {
  const tokenRef = useRef(null)
  const progressRef = useRef(startOffset)
  const pausedRef = useRef(paused)
  pausedRef.current = paused

  useEffect(() => {
    let raf
    let last = performance.now()
    const speed = 1 / (duration * 1000)

    const tick = (now) => {
      const dt = now - last
      last = now
      if (!pausedRef.current) {
        progressRef.current = (progressRef.current + speed * dt) % 1
      }
      const pos = posOnRect(progressRef.current, w, h, r)
      if (tokenRef.current) {
        tokenRef.current.style.transform = `translate(${pos.x - 29}px, ${pos.y - 29}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [w, h, r, duration])

  return (
    <div
      ref={tokenRef}
      className="absolute top-0 left-0 w-[58px] h-[58px] rounded-full bg-[#242627] flex items-center justify-center transition-[border-color] duration-500"
      style={{ border: `1px solid ${pillBorderColor}`, willChange: 'transform' }}
    >
      <img
        src={icon}
        alt={name}
        className="w-[29px] h-[29px] rounded-full transition-opacity duration-500"
        style={{ opacity: isDimmedIcon ? 0.4 : 1 }}
      />
    </div>
  )
}

function DualEngineIllustration({ mode }) {
  const isEfficiency = mode === 'efficiency'
  const middleBorderColor = isEfficiency ? 'rgba(71,72,73,0.7)' : '#bb9eff'
  const innerBorderColor = isEfficiency ? '#9ef5ff' : '#bb9eff'
  const middleGlow = isEfficiency
    ? 'transparent'
    : 'radial-gradient(ellipse at top left, rgba(187,158,255,0.3) 0%, rgba(18,18,18,0.6) 69%)'
  const innerGlow = isEfficiency
    ? 'radial-gradient(ellipse at top left, rgba(158,245,255,0.2) 0%, rgba(18,18,18,0.6) 69%)'
    : 'transparent'
  const innerTokenBorder = isEfficiency ? '#9ef5ff' : '#bb9eff'
  const middleTokenBorder = isEfficiency ? '#474849' : '#bb9eff'

  // Middle border: padding 91px each side → inner content is (526 - 2*69) - 2*1 border ≈ 386px
  // The middle rect is 388px wide, 388px tall with 16px border-radius
  const middleW = 388
  const middleH = 388
  const middleR = 16

  // Inner border: 205px wide, 205px tall with 24px border-radius
  const innerW = 205
  const innerH = 205
  const innerR = 24

  return (
    <div
      className="relative w-full h-full rounded-2xl flex items-center justify-center"
      style={{ border: '0.853px solid rgba(71,72,73,0.7)', padding: '69px' }}
    >
      {/* Middle border */}
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
        {/* Inner border */}
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
          {/* TS Symbol center */}
          <div className="w-16 h-16">
            <img src={animTsSymbol} alt="TownSquare" className="w-full h-full" />
          </div>

          {/* Inner border tokens orbit — gMON, MON, sMON */}
          {innerBorderTokens.map((token) => (
            <OrbitingToken
              key={token.name}
              {...token}
              w={innerW}
              h={innerH}
              r={innerR}
              duration={40}
              isDimmedIcon={false}
              pillBorderColor={innerTokenBorder}
            />
          ))}
        </div>

        {/* Middle border tokens orbit — USDC, wETH, USD1, yzUSD */}
        {middleBorderTokens.map((token) => (
          <OrbitingToken
            key={token.name}
            {...token}
            w={middleW}
            h={middleH}
            r={middleR}
            duration={60}
            isDimmedIcon={isEfficiency}
            pillBorderColor={middleTokenBorder}
            paused={isEfficiency}
          />
        ))}
      </div>
    </div>
  )
}

function MobileOrbitToken({ icon, name, startOffset, w, h, r, duration, isDimmedIcon, pillBorderColor = '#474849', paused = false }) {
  const tokenRef = useRef(null)
  const progressRef = useRef(startOffset)
  const pausedRef = useRef(paused)
  pausedRef.current = paused

  useEffect(() => {
    let raf
    let last = performance.now()
    const speed = 1 / (duration * 1000)
    const tick = (now) => {
      const dt = now - last
      last = now
      if (!pausedRef.current) {
        progressRef.current = (progressRef.current + speed * dt) % 1
      }
      const pos = posOnRect(progressRef.current, w, h, r)
      if (tokenRef.current) {
        tokenRef.current.style.transform = `translate(${pos.x - 20}px, ${pos.y - 20}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [w, h, r, duration])

  return (
    <div
      ref={tokenRef}
      className="absolute top-0 left-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#242627] flex items-center justify-center transition-[border-color] duration-500"
      style={{ border: `1px solid ${pillBorderColor}`, willChange: 'transform' }}
    >
      <img
        src={icon}
        alt={name}
        className="w-5 h-5 md:w-6 md:h-6 rounded-full transition-opacity duration-500"
        style={{ opacity: isDimmedIcon ? 0.4 : 1 }}
      />
    </div>
  )
}

function DualEngineMobile({ mode }) {
  const isEfficiency = mode === 'efficiency'
  const middleBorderColor = isEfficiency ? 'rgba(71,72,73,0.7)' : '#bb9eff'
  const innerBorderColor = isEfficiency ? '#9ef5ff' : '#bb9eff'
  const middleGlow = isEfficiency ? 'transparent' : 'radial-gradient(ellipse at top left, rgba(187,158,255,0.3) 0%, rgba(18,18,18,0.6) 69%)'
  const innerGlow = isEfficiency ? 'radial-gradient(ellipse at top left, rgba(158,245,255,0.2) 0%, rgba(18,18,18,0.6) 69%)' : 'transparent'
  const innerTokenBorder = isEfficiency ? '#9ef5ff' : '#bb9eff'
  const middleTokenBorder = isEfficiency ? '#474849' : '#bb9eff'

  const outerW = 200
  const outerH = 200
  const outerR = 12
  const innerW = 120
  const innerH = 120
  const innerR = 16

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
            <img src={animTsSymbol} alt="TownSquare" className="w-full h-full" />
          </div>
          {/* Inner orbit */}
          <MobileOrbitToken icon={animMON} name="MON" startOffset={0.15} w={innerW} h={innerH} r={innerR} duration={32} isDimmedIcon={false} pillBorderColor={innerTokenBorder} />
          <MobileOrbitToken icon={animSMON} name="sMON" startOffset={0.65} w={innerW} h={innerH} r={innerR} duration={32} isDimmedIcon={false} pillBorderColor={innerTokenBorder} />
        </div>
        {/* Middle orbit */}
        <MobileOrbitToken icon={animUSDC} name="USDC" startOffset={0.1} w={outerW} h={outerH} r={outerR} duration={44} isDimmedIcon={isEfficiency} pillBorderColor={middleTokenBorder} paused={isEfficiency} />
        <MobileOrbitToken icon={animWETH} name="wETH" startOffset={0.6} w={outerW} h={outerH} r={outerR} duration={44} isDimmedIcon={isEfficiency} pillBorderColor={middleTokenBorder} paused={isEfficiency} />
      </div>
    </div>
  )
}

function DualEngine() {
  const [mode, setMode] = useState('general')
  const isGeneral = mode === 'general'

  return (
    <Section className="pt-10 md:pt-14 pb-16 md:pb-32">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12">
        {/* Left content */}
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
            {/* General Mode */}
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

            {/* Efficiency Mode */}
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

        {/* Desktop illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block w-[526px] h-[526px] shrink-0"
        >
          <DualEngineIllustration mode={mode} />
        </motion.div>

        {/* Mobile/tablet illustration */}
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

/* ── Stats Bar ── */
function StatsBar() {
  return (
    <Section className="bg-surface">
      <motion.div
        variants={fadeUp}
        custom={0}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 rounded-lg px-5 md:px-8 py-8 md:py-[73px]"
        style={cardStyle(172)}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[1px] text-text-dim whitespace-nowrap">
            Supported Chains
          </span>
          <div className="flex items-center gap-3 md:gap-4">
            <img src={animMON} alt="Monad" className="w-8 h-8 md:w-[38px] md:h-[38px] rounded-full" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[1px] text-text-dim">+ More Coming Soon</span>
          </div>
        </div>

        <div className="hidden md:block w-px h-8 bg-[rgba(72,72,71,0.2)]" />
        <div className="w-full md:w-auto h-px md:h-auto bg-[rgba(72,72,71,0.2)] md:bg-transparent" />

        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-2xl md:text-[32px] font-semibold font-mono text-purple leading-8">20+</span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-[1px] text-text-dim">
            Integrations
          </span>
        </div>
      </motion.div>
    </Section>
  )
}

/* ── 4-Step Loop Flow ── */
function LoopFlow() {
  const sectionRef = useRef(null)
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

  const steps = [
    { num: '01', title: 'Deposit Collateral', desc: 'Supply e.g. MON or shMON to the primary lending vault.' },
    { num: '02', title: 'Choose Leverage', desc: 'Borrow additional assets against your supplied collateral.' },
    { num: '03', title: 'Swap & Re-supply', desc: 'Instantly swap borrowed assets and supply them back to the vault.' },
    { num: '04', title: 'Finalized Loop', desc: 'Your position is now generating magnified yield on the full amount.' },
  ]

  return (
    <div ref={sectionRef} className="relative min-h-[250vh] lg:min-h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[268px]">
            {/* Left — Sticky heading */}
            <div className="flex flex-col gap-3 md:gap-4 shrink-0 lg:w-[300px]">
              <h2 className="text-2xl md:text-[36px] font-extrabold text-white font-sans leading-tight md:leading-10">
                The 4-Step Loop Flow
              </h2>
              <p className="text-sm md:text-base text-text-primary leading-[1.7]">
                Automated recursive leverage in a single transaction.
              </p>
            </div>

            {/* Right — Scroll-driven stepper */}
            <div className="relative flex flex-col gap-8 md:gap-12 w-full lg:w-auto">
              {/* Timeline background line — stops at last step dot */}
              <div className="absolute left-[14px] md:left-8 top-2 w-px bg-white/10" style={{ height: 'calc(100% - 3rem)' }} />
              {/* Timeline progress fill */}
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
                    {/* Dot */}
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

/* ── Loop Vaults (Coming Soon) ── */
function LoopVaults() {
  return (
    <Section className="py-10 md:py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-[60px]"
      >
        {/* 10x box with animated border */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[448px] lg:h-[448px] shrink-0 flex items-center justify-center"
        >
          {/* Outer dashed border */}
          <div className="absolute inset-0 rounded-xl border-2 border-dashed border-white/10" />
          {/* Inner card with gradient bg */}
          <div
            className="absolute rounded-lg"
            style={{
              inset: '48px',
              background: 'radial-gradient(ellipse at top left, rgba(225,134,159,0.3) 0%, rgba(18,18,18,0) 69%)',
              boxShadow: 'inset 0 1px 0 1px rgba(255,255,255,0.05)',
            }}
          />
          {/* Animated border SVG overlay */}
          <svg
            className="absolute pointer-events-none"
            style={{ inset: '48px', width: 'calc(100% - 96px)', height: 'calc(100% - 96px)' }}
            viewBox="0 0 312 312"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="loopBorderGrad" x1="0" y1="0" x2="312" y2="312" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF97B4" />
                <stop offset="0.4" stopColor="#FF97B4" stopOpacity="0" />
                <stop offset="0.88" stopColor="#F591AD" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {/* Static gray border */}
            <rect x="0.5" y="0.5" width="311" height="311" rx="7.5" stroke="#424754" strokeOpacity="0.15" />
            {/* Animated gradient trace */}
            <rect
              x="0.5" y="0.5" width="311" height="311" rx="7.5"
              stroke="url(#loopBorderGrad)"
              strokeWidth="1"
              fill="none"
              style={{ animation: 'loopBorderTrace 4.5s linear infinite' }}
            />
          </svg>
          {/* Content */}
          <div className="relative text-center">
            <p className="text-[36px] md:text-[48px] font-semibold font-mono text-pink leading-[36px] md:leading-[48px]">10x</p>
            <p className="text-[11px] md:text-xs font-thin font-mono text-[#c2c6d6] uppercase leading-4">Max Leverage</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={fadeUp} custom={1} className="flex flex-col gap-4 md:gap-6 flex-1 text-center md:text-left">
          <span className="text-[13px] md:text-[15px] font-bold text-pink uppercase tracking-[3px]">
            COMING SOON
          </span>
          <h2 className="text-2xl md:text-[36px] font-extrabold text-white font-sans leading-tight md:leading-10">
            Loop Vaults
          </h2>
          <p className="text-base md:text-lg font-inter text-text-muted leading-relaxed max-w-[425px] mx-auto md:mx-0">
            One-click leverage. Maximize your exposure to yield-bearing assets through recursive borrowing and lending automation.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  )
}

/* ── Final CTA ── */
function FinalCTA() {
  return (
    <Section className="border-t border-border-divider/10 pt-16 md:pt-32 pb-16 md:pb-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-8 md:gap-12"
      >
        <div className="text-center flex flex-col gap-3 md:gap-4 items-center">
          <motion.h2 variants={fadeUp} custom={0} className="text-[28px] md:text-[36px] font-bold text-white font-sans leading-tight md:leading-10">
            Start lending.
            <br />
            <span className="bg-gradient-to-r from-purple via-[#c791fc] via-[31%] to-pink to-[66%] bg-clip-text text-transparent">
              Start earning.
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-base md:text-lg font-inter text-text-muted text-center leading-relaxed max-w-[576px]">
            Join the next evolution of on-chain capital.
            <br />The obsidian nexus awaits your liquidity.
          </motion.p>
        </div>

        <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto">
          <a
            href="https://app.townsq.xyz/"
            className="group relative overflow-hidden bg-white text-[#121212] font-semibold text-base md:text-lg px-6 md:px-8 py-3.5 md:py-4 rounded-xl w-full sm:w-auto"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple via-[#c791fc] via-[31%] to-pink to-[66%] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white">
              Start earning
              <ArrowRight size={15} weight="bold" />
            </span>
          </a>
          <a
            href="https://docs.townsq.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border-divider text-text-primary font-bold text-base md:text-lg px-6 md:px-8 py-3.5 md:py-4 rounded-xl hover:border-purple/50 transition text-center w-full sm:w-auto"
          >
            Read Documentation
          </a>
        </motion.div>
      </motion.div>
    </Section>
  )
}

/* ── Footer ── */
export function Footer() {
  const columns = [
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

  return (
    <footer className="bg-surface w-full">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-[rgba(68,71,87,0.15)] pt-12 md:pt-20 pb-12 md:pb-20">
        {/* Brand column */}
        <div className="flex flex-col gap-5 md:gap-6 col-span-2 md:col-span-1">
          <Link to="/"><img src={tsLogo} alt="TownSquare" className="h-8" /></Link>
          <p className="text-sm font-inter text-text-muted leading-relaxed">
            Institutional curator of decentralized
            finance. Secured by the best, built for
            the bold.
          </p>
          <div className="flex flex-col gap-1">
            <Link to="/terms" className="text-[10px] font-medium font-inter text-text-darker hover:text-text-primary transition tracking-[-0.25px] leading-[15px]">
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
                      to={link.href}
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

/* ── Main Landing Page ── */
export default function LandingPage() {
  return (
    <div className="bg-surface min-h-screen flex flex-col items-center text-white font-sans overflow-x-clip relative">
      <GridBackground />
      <div className="relative z-[2] w-full flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="sticky top-0 z-50 w-full flex flex-col items-center pt-5 md:pt-10 px-4 md:px-6 pb-2"
        >
          <Nav />
        </motion.div>
        <Hero />
        <SecuredBy />
        <Features />
        <DualEngine />
        <StatsBar />
        <LoopFlow />
        <LoopVaults />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  )
}
