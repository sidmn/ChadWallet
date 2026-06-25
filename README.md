# ChadWallet Landing

Next.js + Tailwind landing page for ChadWallet with Privy Google sign-in, Solana-focused token banners, and a coming-soon trading screen.

## Services

- Privy: set `NEXT_PUBLIC_PRIVY_APP_ID` to enable Google sign-in.
- BirdEye: set `BIRDEYE_API_KEY` to power `/api/tokens` and the rotating token banners with Solana token data.
- Alchemy: set `NEXT_PUBLIC_ALCHEMY_SOLANA_RPC_URL` for the Solana RPC endpoint used by Privy configuration.
- Supabase: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are reserved for persistence when trading opens.
- Vercel or Cloudflare Pages can deploy this as a standard Next.js app.

## Run

```bash
npm install
npm run dev
```

The trading page is available at `/trade` and token banner taps deep-link into `/trade?symbol=...&mint=...`.
