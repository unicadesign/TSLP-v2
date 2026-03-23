export interface LiveStats {
  tvl: number
  avgApy: number
  protocolHealth: number
  activePositions: number
}

export interface StatsApiResponse {
  tvl: number
  totalBorrowed: number
  avgApy: number
  protocolHealth: number
  utilization: number
  poolCount: number
  tokenCount: number
  timestamp: number
  fallback?: boolean
}

export interface FooterLink {
  label: string
  href: string
  external?: boolean
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}
