import { TokenBanner } from "@/components/token-banner";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TokenDock } from "@/components/token-dock";
import { FeatureGrid } from "@/components/feature-grid";
import { ProductShowcase } from "@/components/product-showcase";
import { TradingFooter } from "@/components/trading-footer";
import { getFeaturedTokens } from "@/lib/tokens";

export const dynamic = "force-dynamic";

export default async function Home() {
  const tokens = await getFeaturedTokens();

  return (
    <main className="min-h-screen overflow-hidden bg-[#090b12] text-zinc-50">
      <TokenBanner tokens={tokens} />
      <section className="skywash relative min-h-[92vh] text-[#07101b]">
        <div className="noise pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col px-5 pb-16 pt-5 sm:px-8 lg:px-10">
          <Header />
          <Hero />
        </div>
      </section>
      <ProductShowcase />
      <FeatureGrid />
      <TradingFooter />
      <TokenDock tokens={tokens} />
    </main>
  );
}
