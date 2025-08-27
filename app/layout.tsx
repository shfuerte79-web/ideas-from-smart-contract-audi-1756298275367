import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Health Monitor",
    "one_liner": "AI that continuously monitors smart contracts for vulnerabilities post-deployment.",
    "why_now": "With the rise of DeFi, the frequency of attacks on smart contracts necessitates constant vigilance.",
    "novel_mechanism": "Ongoing behavioral analysis of contracts using historical transaction data.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Proactive alerting for potential exploits",
      "Integration with existing wallets for user alerts"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "real-time monitoring",
        "alert system",
        "user dashboard"
      ],
      "tools": [
        "Next.js",
        "Firebase",
        "n8n"
      ],
      "data_bootstrap": [
        "public blockchain datasets",
        "synthetic attack patterns via LLM"
      ],
      "risk": [
        "limited initial user base",
        "data accuracy"
      ],
      "mitigation": [
        "incentivized early adopters",
        "collaboration with blockchain communities"
      ]
    },
    "go_to_market": {
      "hooks": [
        "demonstrate a successful detection of a recent attack"
      ],
      "channels": [
        "ProductHunt",
        "Reddit",
        "Discord"
      ],
      "pricing": {
        "free": "basic alerts",
        "pro": "advanced analytics",
        "business": "team dashboards"
      }
    },
    "moat": [
      "first-mover advantage",
      "community-driven trust",
      "data-driven insights"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "It leverages real-time data, unlike traditional one-off audit tools, creating continuous value for users."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}