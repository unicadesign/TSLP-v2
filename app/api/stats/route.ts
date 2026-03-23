import { NextResponse } from 'next/server'
/* eslint-disable @typescript-eslint/no-explicit-any */
const sdk = require('@townsq/mm-sdk') as any
const { TSCore, TSPool, TSOracle, MAINNET_TS_TOKEN_ID, MAINNET_TS_CHAIN_ID, NetworkType } = sdk
import { defineChain, fallback, createClient, http } from 'viem'

const RPC_URL = 'https://monad-mainnet.g.alchemy.com/v2/MXFViRBG5gYeZUI8VB8KpnmkZVLjgm1w'

const monad = defineChain({
  id: 143,
  name: 'Monad',
  nativeCurrency: { name: 'Mainnet MON Token', symbol: 'MON', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc-mainnet.monadinfra.com/rpc/4TvOS5nC96kJ0ruECksFYLGchPAELyf2'],
    },
  },
  blockExplorers: {
    default: { name: 'Monad Testnet explorer', url: 'https://mainnet-beta.monvision.io' },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 9248132,
    },
  },
  testnet: false,
})

export async function GET() {
  const provider = createClient({
    chain: monad,
    transport: fallback([
      http(RPC_URL, { batch: { wait: 100 }, retryCount: 3, timeout: 15000 }),
      http(RPC_URL),
    ]),
  })

  try {
    if (!TSCore.isInitialized()) {
      TSCore.init({
        network: NetworkType.MAINNET,
        provider: { evm: { [MAINNET_TS_CHAIN_ID]: provider } },
      })
    } else {
      TSCore.setNetwork(NetworkType.MAINNET)
      TSCore.setProvider(MAINNET_TS_CHAIN_ID, provider)
    }

    const tokenIds = Object.values(MAINNET_TS_TOKEN_ID)
    const poolResults = await Promise.allSettled(
      tokenIds.map(async (tsTokenId) => {
        const poolInfo = await TSPool.read.poolInfo(tsTokenId)
        return { tokenId: tsTokenId, poolInfo }
      })
    )

    let oraclePrices: any = {}
    try {
      oraclePrices = await TSOracle.read.oraclePrices()
    } catch (e: any) {
      console.warn('Oracle prices fetch failed:', e?.message || e)
    }

    let totalSupplied = 0
    let totalBorrowed = 0
    let weightedApySum = 0
    let totalWeight = 0
    let poolCount = 0

    for (const result of poolResults) {
      if (result.status !== 'fulfilled') continue
      const { tokenId, poolInfo } = result.value as any
      if (!poolInfo) continue

      poolCount++

      const pi = poolInfo as any
      const supply = Number(pi.totalDeposits || pi.totalSupply || pi.deposit || 0)
      const borrowed = Number(pi.totalBorrow || pi.totalBorrowed || pi.variableBorrowAmount || 0)
      const supplyRate = Number(pi.supplyRate || pi.depositRate || pi.supplyInterestRate || 0)

      const price = oraclePrices[tokenId] ? Number(oraclePrices[tokenId]) / 1e8 : 1

      const supplyUsd = supply * price / 1e18
      const borrowedUsd = borrowed * price / 1e18

      totalSupplied += supplyUsd
      totalBorrowed += borrowedUsd

      if (supplyUsd > 0 && supplyRate > 0) {
        const apyPercent = (supplyRate / 1e18) * 100
        weightedApySum += apyPercent * supplyUsd
        totalWeight += supplyUsd
      }
    }

    const avgApy = totalWeight > 0 ? weightedApySum / totalWeight : 0
    const utilization = totalSupplied > 0 ? (totalBorrowed / totalSupplied) * 100 : 0
    const protocolHealth = totalSupplied > 0 ? Math.min(99.9, 100 - utilization * 0.1) : 99.9

    const data = {
      tvl: totalSupplied,
      totalBorrowed,
      avgApy: Math.round(avgApy * 100) / 100,
      protocolHealth: Math.round(protocolHealth * 10) / 10,
      utilization: Math.round(utilization * 100) / 100,
      poolCount,
      tokenCount: tokenIds.length,
      timestamp: Date.now(),
    }

    return NextResponse.json(data, {
      headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate=300' },
    })
  } catch (error) {
    console.error('Stats API error:', error)

    return NextResponse.json({
      tvl: 720247.72,
      avgApy: 24.82,
      protocolHealth: 99.9,
      poolCount: 0,
      tokenCount: 19,
      timestamp: Date.now(),
      fallback: true,
    })
  }
}
