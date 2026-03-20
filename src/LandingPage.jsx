import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'

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
  // Chain icons
  chainEth: 'https://www.figma.com/api/mcp/asset/9f2c3c31-f44c-4b42-b0ef-5887dfbc6fe0',
  chainMon: 'https://www.figma.com/api/mcp/asset/419551a5-a6c9-4f36-9a95-4b04dc33fa5b',
  chainSol: 'https://www.figma.com/api/mcp/asset/d418fa12-a347-4b27-9d2b-600b2cb100cf',
  chainBase: 'https://www.figma.com/api/mcp/asset/966232d0-5a35-4df6-9984-75364eabf649',
  chainArb: 'https://www.figma.com/api/mcp/asset/7d19421c-5196-4bfb-a340-9a63bdb73180',
  chainImg: 'https://www.figma.com/api/mcp/asset/a7725a17-f0ca-46a9-8acb-348cf06dc33e',
  chainAptos: 'https://www.figma.com/api/mcp/asset/24313aff-4d70-40fd-a3b3-87cc8519840d',
  chainLast: 'https://www.figma.com/api/mcp/asset/1de9f053-efa8-4052-8043-141b905aee7f',
  ethVector: 'https://www.figma.com/api/mcp/asset/eadbfc1e-973e-4ca8-98fe-17d666a1d5fa',
  // Token pill icons
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
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

/* ── Reusable section wrapper ── */
function Section({ children, className = '', ...props }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`w-full max-w-[1280px] mx-auto px-8 ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  )
}

/* ── Logo ── */
function Logo({ className = 'h-7' }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="relative w-[28px] h-[28px]">
        <img src={assets.tsSymbol} alt="" className="w-full h-full" />
      </div>
      <img src={assets.townsquareText} alt="TownSquare" className="h-[20px]" />
    </div>
  )
}

/* ── Navigation ── */
function Nav() {
  return (
    <motion.nav
      variants={fadeUp}
      custom={0}
      className="relative z-50 flex items-center justify-between w-full max-w-[1280px] mx-auto rounded-[22px] px-8 py-5 backdrop-blur-xl border border-purple/10 shadow-[0_24px_48px_rgba(0,0,0,0.4)]"
      style={{ background: 'rgba(15,23,42,0.4)' }}
    >
      <Logo />
      <div className="flex items-center gap-12 text-sm font-medium font-sans">
        <a href="#" className="text-pink-soft hover:text-pink transition">App</a>
        <a href="#" className="text-text-slate hover:text-text-primary transition">Community</a>
        <a href="#" className="text-text-slate hover:text-text-primary transition">Docs</a>
      </div>
      <a
        href="#"
        className="bg-purple-button text-white font-semibold text-sm px-6 py-4 rounded-xl hover:brightness-110 transition"
      >
        Launch App
      </a>
    </motion.nav>
  )
}

/* ── Hero Section ── */
function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-8 py-20">
      {/* Background glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[856px] h-[856px] pointer-events-none">
        <img src={assets.heroGlow} alt="" className="w-[200%] h-[200%] object-cover -translate-x-1/4 -translate-y-1/4" />
      </div>

      <div className="relative z-10 flex items-center gap-16 max-w-[1280px] mx-auto">
        {/* Left content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <motion.h1 variants={fadeUp} custom={0} className="text-[64px] font-bold leading-[1.2] text-text-primary font-sans">
              Yield Markets,
              <br />
              <span className="bg-gradient-to-r from-purple via-[#c791fc] via-[31%] to-pink to-[66%] bg-clip-text text-transparent">
                Reimagined
              </span>
              <span className="text-purple-light">.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-text-primary leading-relaxed max-w-[448px]">
              The global leverage and yield layer. Optimized for performance, built on deep volcanic obsidian.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} custom={2} className="flex items-center gap-8">
            <a
              href="#"
              className="flex items-center gap-4 bg-white text-[#121212] font-bold text-base px-8 py-4 rounded-xl hover:bg-gray-100 transition"
            >
              Start earning
              <ArrowRight size={15} weight="bold" />
            </a>

            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase tracking-[1px] text-text-dim">
                  Total Value Locked
                </span>
                <span className="text-[26px] font-semibold font-mono text-text-primary leading-10">
                  $720,247.78
                </span>
              </div>
              <div className="w-px h-12 bg-border-divider" />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase tracking-[1px] text-text-dim">
                  Active Positions
                </span>
                <span className="text-[26px] font-semibold font-mono text-text-primary leading-10">
                  1,204
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
          className="shrink-0 w-[540px]"
        >
          <div
            className="relative rounded-[22px] p-1 backdrop-blur-md overflow-hidden"
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
            {/* Data streams */}
            <div className="absolute top-0 left-[37px] w-px h-[93px]">
              <img src={assets.dataStream} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[93px]">
              <img src={assets.dataStream} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 right-[74px] w-px h-[93px]">
              <img src={assets.dataStream} alt="" className="w-full h-full object-cover" />
            </div>
            {/* Chart SVG area */}
            <div className="relative h-[389px] rounded-[inherit] overflow-hidden">
              <div className="absolute inset-[16%_-3%_10%_0]">
                <img src={assets.chartLine1} alt="" className="w-full h-full" />
              </div>
              <div className="absolute inset-[33%_-8%_21%_0]">
                <img src={assets.chartLine2} alt="" className="w-full h-full" />
              </div>
              <div className="absolute" style={{ top: '14.5%', left: '36.5%', width: '2%', height: '2.7%' }}>
                <img src={assets.chartDot1} alt="" className="w-full h-full" />
              </div>
              <div className="absolute" style={{ top: '32.3%', left: '37.3%', width: '1.3%', height: '1.7%' }}>
                <img src={assets.chartDot2} alt="" className="w-full h-full" />
              </div>
            </div>
            {/* Protocol Health label */}
            <div className="absolute bottom-8 right-6 text-right">
              <p className="text-[9px] font-semibold font-inter uppercase tracking-[0.9px] text-purple-dark">
                Protocol Health
              </p>
              <p className="text-[33px] font-bold font-grotesk text-white leading-[37px]">99.9%</p>
            </div>
            {/* Floating stats card */}
            <div
              className="absolute bottom-[-14px] left-[-37px] flex items-center gap-4 p-5 rounded-[15px] backdrop-blur-md"
              style={{
                background: 'rgba(31,31,31,0.6)',
                border: '0.926px solid rgba(255,255,255,0.1)',
                boxShadow: '0 23px 46px -11px rgba(0,0,0,0.25)',
              }}
            >
              <div className="flex items-center justify-center w-[37px] h-[37px] rounded-xl bg-purple-dark/20">
                <img src={assets.statsIcon} alt="" className="w-4 h-2.5" />
              </div>
              <div>
                <p className="text-[8px] font-semibold font-inter uppercase tracking-[0.8px] text-[#cbc3d6]">
                  Avg Strategy APY
                </p>
                <p className="text-[19px] font-bold font-grotesk text-white leading-[26px]">24.82%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Secured By ── */
function SecuredBy() {
  return (
    <Section className="py-4">
      <motion.div variants={fadeUp} custom={0} className="flex flex-col gap-6 items-center">
        <span className="text-[11px] font-bold uppercase tracking-[1px] text-text-dim">
          Secured By
        </span>
        <div className="flex items-center gap-24 opacity-50">
          <div className="flex items-center gap-2">
            <img src={assets.sherlock} alt="" className="w-4 h-5" />
            <span className="text-2xl font-bold font-manrope text-[#e3e4f8]">Sherlock</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={assets.astrasec} alt="" className="w-4 h-5" />
            <span className="text-2xl font-bold font-manrope text-[#e3e4f8]">AstraSec</span>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

/* ── Features Section ── */
function Features() {
  return (
    <Section className="pt-[52px] pb-[100px]">
      <div className="flex flex-col gap-[60px]">
        {/* Section heading */}
        <motion.div variants={fadeUp} custom={0} className="flex flex-col gap-6">
          <h2 className="text-[36px] font-extrabold text-white font-sans leading-10">
            Yield & leverage, simplified.
          </h2>
          <p className="text-lg text-text-primary leading-relaxed">
            Forget the complexity of manual farming. TownSquare aggregates the best opportunities
            <br />across chains into a single institutional-grade interface.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="flex gap-8">
          {/* Lending Vaults — large card */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex-1 flex flex-col justify-between rounded-lg p-8 overflow-hidden relative"
            style={{
              background: 'linear-gradient(153deg, rgba(146,100,248,0.1) 0%, rgba(146,100,248,0) 100%)',
              border: '1px solid rgba(66,71,84,0.15)',
              boxShadow: 'inset 0 1px 0 1px rgba(255,255,255,0.05)',
            }}
          >
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-purple-light/10 flex items-center justify-center">
                <img src={assets.vaultIcon} alt="" className="w-6 h-6" />
              </div>
              <h3 className="text-[36px] font-bold text-text-primary font-sans leading-9">
                Lending Vaults
              </h3>
              <p className="text-base font-inter text-text-muted leading-6">
                Earn passive yield on your idle assets with
                <br />algorithmic risk management and dynamic rate adjustment.
              </p>
            </div>
            <div className="flex items-end justify-between pt-12">
              <div>
                <p className="text-[48px] font-semibold font-mono text-purple-light leading-[48px]">24.2%</p>
                <p className="text-lg font-semibold text-text-dim leading-7">Avg APY</p>
              </div>
              <img src={assets.cardArrow} alt="" className="w-6 h-[18px]" />
            </div>
          </motion.div>

          {/* Right column — stacked cards */}
          <div className="flex flex-col gap-8 w-[465px] shrink-0">
            {/* Cross-Chain Market */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="flex-1 flex flex-col justify-between rounded-lg p-8"
              style={{
                background: 'linear-gradient(158deg, rgba(146,100,248,0.1) 0%, rgba(146,100,248,0) 100%)',
                border: '1px solid rgba(66,71,84,0.15)',
                boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
              }}
            >
              <div className="flex flex-col gap-4">
                <img src={assets.crossChainIcon} alt="" className="w-5 h-4" />
                <h4 className="text-2xl font-bold text-text-primary font-sans leading-8">
                  Cross-Chain Market
                </h4>
              </div>
              <p className="text-base font-inter text-text-muted leading-6">
                Seamlessly move liquidity across ecosystems with
                <br />zero-slippage bridging.
              </p>
            </motion.div>

            {/* Loop Vaults */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="h-[189px] flex flex-col justify-between rounded-lg p-8 overflow-hidden"
              style={{
                background: 'linear-gradient(158deg, rgba(146,100,248,0.1) 0%, rgba(146,100,248,0) 100%)',
                border: '1px solid rgba(66,71,84,0.15)',
                boxShadow: 'inset 0 1px 0 1px rgba(255,255,255,0.05)',
              }}
            >
              <div className="flex flex-col gap-4">
                <img src={assets.loopIcon} alt="" className="w-4 h-4" />
                <h4 className="text-2xl font-bold text-text-primary font-sans leading-8">
                  Loop Vaults
                </h4>
              </div>
              <p className="text-base font-inter text-text-muted leading-6">
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
function DualEngine() {
  return (
    <Section className="pt-14 pb-32">
      <div className="flex items-center justify-between">
        {/* Left content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8 w-[616px]"
        >
          <div className="flex flex-col gap-6">
            <motion.h2 variants={fadeUp} custom={0} className="text-[36px] font-extrabold text-white font-sans leading-10">
              Dual Engine Risk Framework
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-base text-text-primary leading-[1.7]">
              Unlike global margin systems, TownSquare utilizes isolated risk
              pods. A volatility event in one asset cannot liquidate your unrelated positions, ensuring a safer leverage environment for institutional users.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} custom={2} className="flex flex-col gap-6">
            {/* General Mode — selected */}
            <div
              className="rounded-lg border-l-4 border-l-purple overflow-hidden h-[121px]"
            >
              <div
                className="flex items-center justify-between h-full px-8 py-12 rounded-lg"
                style={{
                  background: 'linear-gradient(to right, #121212, rgba(18,18,18,0.6))',
                  border: '1px solid rgba(66,71,84,0.15)',
                  boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
                }}
              >
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-xl font-bold text-purple font-sans leading-7">General Mode</h4>
                  <p className="text-base text-text-primary leading-[1.7]">Bluechip cross-asset lending</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold font-mono text-purple leading-8">80% LTV</p>
                  <p className="text-[11px] font-bold text-purple uppercase leading-[15px]">Maximum Stability</p>
                </div>
              </div>
            </div>

            {/* Efficiency Mode */}
            <div className="rounded-lg overflow-hidden h-[107px]">
              <div
                className="flex items-center justify-between h-full px-8 py-6 rounded-lg"
                style={{
                  background: 'linear-gradient(to right, #121212, rgba(18,18,18,0.6))',
                  border: '1px solid rgba(66,71,84,0.15)',
                  boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
                }}
              >
                <div className="flex flex-col gap-0.5 w-[314px]">
                  <h4 className="text-xl font-bold text-cyan font-sans leading-7">Efficiency Mode</h4>
                  <p className="text-base text-text-primary leading-[1.7]">Correlated asset pairs (e.g. shMON/MON)</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold font-mono text-cyan leading-8">95% LTV</p>
                  <p className="text-[11px] font-bold text-cyan uppercase leading-[15px]">High Capital Efficiency</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — TS symbol with orbiting tokens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-[388px] h-[525px] rounded-2xl flex items-center justify-center p-[69px] shrink-0"
          style={{
            border: '0.853px solid rgba(71,72,73,0.7)',
          }}
        >
          {/* Inner bordered circle with gradient */}
          <div
            className="relative rounded-2xl border border-purple p-[91px]"
            style={{
              background: 'radial-gradient(ellipse at top left, rgba(187,158,255,0.3) 0%, rgba(18,18,18,0.6) 69%)',
              boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Innermost circle */}
            <div className="rounded-3xl border border-purple p-[71px]">
              <div className="relative w-16 h-16">
                <img src={assets.borderSymbol} alt="" className="w-full h-full" />
              </div>
            </div>

            {/* Floating token pills */}
            {[
              { top: '68px', left: '17%', icon: assets.tokenEth },
              { top: '154px', right: '18%', icon: assets.tokenSol },
              { top: '-30px', right: '3%', icon: assets.tokenImg },
              { top: '267px', left: '-7%', icon: assets.tokenBtc },
              { top: '267px', left: '28%', icon: assets.tokenUsdc },
              { top: '349px', right: '7%', icon: assets.tokenMon },
              { top: '-30px', left: '6%', icon: assets.tokenSui },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-[58px] h-[58px] rounded-full bg-[#242627] border border-[#474849] flex items-center justify-center"
                style={{ top: pos.top, left: pos.left, right: pos.right }}
              >
                <img src={pos.icon} alt="" className="w-[29px] h-[29px] rounded-full" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

/* ── Stats Bar ── */
function StatsBar() {
  const chains = [
    assets.chainEth,
    assets.chainMon,
    assets.chainSol,
    assets.chainBase,
    assets.chainArb,
    assets.chainImg,
    assets.chainAptos,
    assets.chainLast,
  ]

  return (
    <Section className="px-8">
      <motion.div
        variants={fadeUp}
        custom={0}
        className="flex items-center justify-between rounded-lg px-8 py-[73px]"
        style={{
          background: 'linear-gradient(172deg, rgba(146,100,248,0.1) 0%, rgba(146,100,248,0) 100%)',
          border: '1px solid rgba(66,71,84,0.15)',
          boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
        }}
      >
        <div className="flex items-center gap-8">
          <span className="text-sm font-bold uppercase tracking-[1px] text-text-dim">
            Supported Chains
          </span>
          <div className="flex items-center gap-[7px]">
            {chains.map((src, i) => (
              <img key={i} src={src} alt="" className="w-[38px] h-[38px] rounded-full" />
            ))}
          </div>
        </div>

        <div className="w-px h-8 bg-[rgba(72,72,71,0.2)]" />

        <div className="flex items-center gap-4">
          <span className="text-[32px] font-semibold font-mono text-purple leading-8">20+</span>
          <span className="text-sm font-bold uppercase tracking-[1px] text-text-dim">
            Integrations
          </span>
        </div>
      </motion.div>
    </Section>
  )
}

/* ── 4-Step Loop Flow ── */
function LoopFlow() {
  const steps = [
    {
      num: '01',
      title: 'Deposit Collateral',
      desc: 'Supply MON or shMON to the primary lending vault.',
      active: true,
    },
    {
      num: '02',
      title: 'Chose leverage',
      desc: 'Borrow additional assets against your supplied collateral.',
      active: false,
    },
    {
      num: '03',
      title: 'Swap & Re-supply',
      desc: 'Instantly swap borrowed assets and supply them back to the vault.',
      active: false,
    },
    {
      num: '04',
      title: 'Finalized Loop',
      desc: 'Your position is now generating magnified yield on the full amount.',
      active: false,
    },
  ]

  return (
    <Section className="pt-20 pb-16">
      <div className="flex items-start gap-[268px]">
        {/* Left heading */}
        <motion.div variants={fadeUp} custom={0} className="flex flex-col gap-4 shrink-0">
          <h2 className="text-[36px] font-extrabold text-white font-sans leading-10">
            The 4-Step Loop Flow
          </h2>
          <p className="text-base text-text-primary leading-[1.7]">
            Automated recursive leverage in a single transaction.
          </p>
        </motion.div>

        {/* Right stepper */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex flex-col gap-12"
        >
          {/* Vertical line */}
          <div className="absolute left-8 top-2 bottom-2 w-px bg-white/10" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="relative pl-24 pb-8"
            >
              {/* Dot */}
              <div
                className={`absolute left-6 top-1 rounded-full ${
                  step.active
                    ? 'w-4 h-4 bg-purple shadow-[0_0_0_4px_rgba(59,130,246,0.2)]'
                    : 'w-2 h-2 bg-[#334155] ml-1'
                }`}
              />

              <div className="flex flex-col gap-1.5">
                <span
                  className={`text-xs font-mono uppercase tracking-[1.2px] leading-4 ${
                    step.active ? 'font-semibold text-purple' : 'font-normal text-text-dark'
                  }`}
                >
                  Step {step.num}
                </span>
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-bold text-text-bright font-sans leading-7">
                    {step.title}
                  </h4>
                  <p
                    className={`text-base leading-[1.7] ${
                      step.active ? 'text-text-primary' : 'text-text-dark text-sm leading-5'
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

/* ── Loop Vaults (Coming Soon) ── */
function LoopVaults() {
  return (
    <Section className="py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center gap-[60px]"
      >
        {/* Left — 10x box */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="relative w-[448px] h-[448px] shrink-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-xl border-2 border-dashed border-white/10" />
          <div
            className="absolute rounded-lg"
            style={{
              inset: '68px',
              background: 'radial-gradient(ellipse at top left, rgba(225,134,159,0.3) 0%, rgba(18,18,18,0) 69%)',
              border: '1px solid rgba(66,71,84,0.15)',
              boxShadow: 'inset 0 1px 0 1px rgba(255,255,255,0.05)',
            }}
          />
          <div className="relative text-center">
            <p className="text-[48px] font-semibold font-mono text-pink leading-[48px]">10x</p>
            <p className="text-xs font-thin font-mono text-[#c2c6d6] uppercase leading-4">Max Leverage</p>
          </div>
        </motion.div>

        {/* Right content */}
        <motion.div variants={fadeUp} custom={1} className="flex flex-col gap-6 flex-1">
          <span className="text-[15px] font-bold text-pink uppercase tracking-[3px]">
            COMING SOON
          </span>
          <h2 className="text-[36px] font-extrabold text-white font-sans leading-10">
            Loop Vaults
          </h2>
          <p className="text-lg font-inter text-text-muted leading-relaxed max-w-[425px]">
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
    <Section className="border-t border-border-divider/10 pt-32 pb-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-12"
      >
        <div className="text-center flex flex-col gap-4 items-center">
          <motion.h2 variants={fadeUp} custom={0} className="text-[36px] font-bold text-white font-sans leading-10">
            Start lending.
            <br />
            <span className="bg-gradient-to-r from-purple via-[#c791fc] via-[31%] to-pink to-[66%] bg-clip-text text-transparent">
              Start earning
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-lg font-inter text-text-muted text-center leading-relaxed max-w-[576px]">
            Join the next evolution of on-chain capital.
            <br />The obsidian nexus awaits your liquidity.
          </motion.p>
        </div>

        <motion.div variants={fadeUp} custom={2} className="flex items-center gap-6">
          <a
            href="#"
            className="flex items-center gap-2 bg-purple-dark text-white font-semibold text-lg px-8 py-4 rounded-xl hover:brightness-110 transition"
          >
            Start earning
            <ArrowRight size={15} weight="bold" />
          </a>
          <a
            href="#"
            className="border border-border-divider text-text-primary font-bold text-lg px-8 py-4 rounded-xl hover:border-purple/50 transition"
          >
            Read Documentation
          </a>
        </motion.div>
      </motion.div>
    </Section>
  )
}

/* ── Footer ── */
function Footer() {
  const columns = [
    {
      title: 'Product',
      links: ['Yield App', 'Leverage Vaults', 'Governance'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Audit Reports', 'Brand Assets'],
    },
    {
      title: 'Connect',
      links: ['Twitter (X)', 'Discord', 'Telegram'],
    },
  ]

  return (
    <footer className="bg-surface w-full">
      <div className="max-w-[1280px] mx-auto grid grid-cols-4 gap-12 border-t border-[rgba(68,71,87,0.15)] pt-20 pb-20">
        {/* Brand column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-1 h-8">
            <div className="relative w-[32px] h-[32px]">
              <img src={assets.tsSymbol} alt="" className="w-full h-full" />
            </div>
            <img src={assets.townsquareTextLight} alt="TownSquare" className="h-[24px]" />
          </div>
          <p className="text-sm font-inter text-text-muted leading-relaxed">
            Institutional curator of decentralized
            <br />finance. Secured by the best, built for
            <br />the bold.
          </p>
          <p className="text-[10px] font-medium font-inter text-text-darker tracking-[-0.25px] leading-[15px]">
            &copy; 2024 TownSquare. Institutional Curator of DeFi.
          </p>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-6">
            <h4 className="text-[10px] font-semibold font-inter uppercase tracking-[1px] text-purple-muted leading-[15px]">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-4">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm font-inter text-text-muted hover:text-text-primary transition leading-5">
                    {link}
                  </a>
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
    <div className="bg-surface min-h-screen flex flex-col items-center text-white font-sans">
      {/* Navigation */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center pt-10"
      >
        <Nav />
      </motion.div>

      {/* Hero */}
      <Hero />

      {/* Secured By */}
      <SecuredBy />

      {/* Features */}
      <Features />

      {/* Dual Engine */}
      <DualEngine />

      {/* Stats Bar */}
      <StatsBar />

      {/* Loop Flow */}
      <LoopFlow />

      {/* Loop Vaults */}
      <LoopVaults />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}
