# Hyperreal - AI Video Generation Mini App

AI-powered, text-to-hyperrealistic video generation on Farcaster.

## Features

- 🎬 **Prompt-to-Video Creation**: Transform text into hyperrealistic videos
- 🎨 **AI Video Stylist**: Intelligent prompt suggestions and style guidance
- 🖼️ **Farcaster Frame Showcase**: Share videos natively on Farcaster
- 👥 **Collaborative Creation**: Co-create and remix videos with friends
- ⚡ **Gasless Transactions**: Powered by Coinbase Paymaster
- 🎯 **Credit System**: Flexible micro-transaction model

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster MiniKit
- **Styling**: Tailwind CSS (Coinbase theme)
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
# Add your OnchainKit API key
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # React components
│   ├── Providers.tsx   # OnchainKit + React Query providers
│   ├── ConnectWallet.tsx
│   ├── PromptStudio.tsx
│   ├── VideoGallery.tsx
│   └── CreditBalance.tsx
├── layout.tsx          # Root layout
├── page.tsx            # Main page
└── globals.css         # Global styles

public/
└── .well-known/
    └── farcaster.json  # Mini App manifest
```

## Key Features Implementation

### 1. Wallet Connection
Uses OnchainKit's ConnectWallet component for seamless Base wallet integration.

### 2. Farcaster Integration
- MiniKit SDK for user context and notifications
- Frame support for native video sharing
- Collaborative features via Farcaster social graph

### 3. Credit System
Micro-transaction model with gasless purchases via Coinbase Paymaster.

### 4. AI Video Generation
Backend integration ready for AI video APIs (Stability AI, RunwayML, etc.)

## Design System

**Theme**: Coinbase (Dark Navy)
- Background: `#0a1929`
- Primary: `#0052ff`
- Text: `#e3f2fd`
- Subtle rounded borders and shadows

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## License

MIT
