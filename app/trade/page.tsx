import Link from "next/link";
import { TokenBanner } from "@/components/token-banner";
import { getFeaturedTokens } from "@/lib/tokens";

type TradePageProps = {
  searchParams: Promise<{
    symbol?: string;
    mint?: string;
  }>;
};

export const dynamic = "force-dynamic";

export default async function TradePage({ searchParams }: TradePageProps) {
  const params = await searchParams;
  const tokens = await getFeaturedTokens();
  const symbol = params.symbol?.toUpperCase() ?? "SOL";

  return (
    <main className="min-h-screen bg-[#090b12] text-zinc-50">
      <TokenBanner tokens={tokens} />
      <section className="relative flex min-h-[calc(100vh-48px)] items-center justify-center overflow-hidden px-5 py-16">
        <div className="noise pointer-events-none absolute inset-0 opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(33,241,123,.20),transparent_32rem)]" />
        <div className="relative w-full max-w-3xl text-center">
          <Link
            href="/"
            className="mb-8 inline-flex h-11 items-center border border-white/15 bg-white/10 px-5 text-sm font-semibold text-white transition hover:border-[#21f17b] hover:text-[#21f17b]"
          >
            Back to ChadWallet
          </Link>
          <p className="text-sm font-black uppercase tracking-[0.36em] text-[#21f17b]">Trading Screen</p>
          <h1 className="mt-5 text-6xl font-black uppercase leading-[0.88] text-white sm:text-8xl">
            {symbol}
            <span className="block text-[#21f17b]">Coming Soon</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            Token taps from the rotating banners land here. The full ChadWallet web terminal is coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
