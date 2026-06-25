import Link from "next/link";
import type { TokenTicker } from "@/lib/tokens";

export function TokenBanner({ tokens }: { tokens: TokenTicker[] }) {
  const tickerItems = [...tokens, ...tokens];

  return (
    <div className="ticker-mask sticky top-0 z-30 h-12 overflow-hidden border-b border-white/10 bg-[#070b12]/95 backdrop-blur">
      <div className="flex h-full w-max animate-marquee items-center">
        {tickerItems.map((token, index) => (
          <TickerToken key={`${token.symbol}-${index}`} token={token} />
        ))}
      </div>
    </div>
  );
}

function TickerToken({ token }: { token: TokenTicker }) {
  const changeIsUp = token.change24h >= 0;

  return (
    <Link
      href={`/trade?symbol=${encodeURIComponent(token.symbol)}&mint=${encodeURIComponent(token.mint)}`}
      className="group flex h-12 items-center gap-2 border-r border-white/10 px-5 text-sm font-black uppercase transition hover:bg-[#21f17b] hover:text-[#07101b]"
    >
      <span>{token.symbol}</span>
      <span className="text-zinc-400 group-hover:text-[#07101b]">${formatPrice(token.price)}</span>
      <span className={changeIsUp ? "text-[#21f17b] group-hover:text-[#07101b]" : "text-ember group-hover:text-[#07101b]"}>
        {changeIsUp ? "+" : ""}
        {token.change24h.toFixed(2)}%
      </span>
    </Link>
  );
}

function formatPrice(price: number) {
  if (price >= 100) {
    return price.toFixed(2);
  }

  if (price >= 1) {
    return price.toFixed(3);
  }

  return price.toFixed(5);
}
