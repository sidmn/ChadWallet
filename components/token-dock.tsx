import Link from "next/link";
import type { TokenTicker } from "@/lib/tokens";

export function TokenDock({ tokens }: { tokens: TokenTicker[] }) {
  const tickerItems = [...tokens, ...tokens];

  return (
    <section className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-[#070b12]/95 py-2 backdrop-blur">
      <div className="ticker-mask overflow-hidden">
        <div className="flex w-max animate-marquee-reverse items-center gap-2">
          {tickerItems.map((token, index) => (
            <Link
              key={`${token.mint}-${index}`}
              href={`/trade?symbol=${encodeURIComponent(token.symbol)}&mint=${encodeURIComponent(token.mint)}`}
              className="group flex h-12 min-w-40 items-center justify-between gap-4 border border-white/10 bg-white/5 px-4 text-sm font-black uppercase transition hover:border-[#21f17b] hover:bg-[#21f17b] hover:text-[#07101b]"
            >
              <span>{token.symbol}</span>
              <span className={token.change24h >= 0 ? "text-[#21f17b] group-hover:text-[#07101b]" : "text-ember group-hover:text-[#07101b]"}>
                {token.change24h >= 0 ? "+" : ""}
                {token.change24h.toFixed(1)}%
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
