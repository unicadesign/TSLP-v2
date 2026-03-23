'use client'

import { useState, useEffect } from 'react'
import type { LiveStats } from '@/lib/types'

const FALLBACK: LiveStats = {
  tvl: 720247.78,
  avgApy: 24.82,
  protocolHealth: 99.9,
  activePositions: 1204,
}

export function useLiveStats() {
  const [stats, setStats] = useState<LiveStats>(FALLBACK)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetchStats() {
      try {
        const res = await fetch('/api/stats')
        if (!res.ok) throw new Error('API error')
        const data = await res.json()
        if (!cancelled) {
          setStats({
            tvl: data.tvl || FALLBACK.tvl,
            avgApy: data.avgApy || FALLBACK.avgApy,
            protocolHealth: data.protocolHealth || FALLBACK.protocolHealth,
            activePositions: data.activePositions || FALLBACK.activePositions,
          })
        }
      } catch {
        // Keep fallback values
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchStats()
    return () => { cancelled = true }
  }, [])

  return { stats, loading }
}
