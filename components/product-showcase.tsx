import Image from "next/image";

const appScreens = [
  {
    title: "Discover",
    src: "/assets/app-store/discover.png"
  },
  {
    title: "Token",
    src: "/assets/app-store/token.png"
  },
  {
    title: "KOL",
    src: "/assets/app-store/kol.png"
  },
  {
    title: "Portfolio",
    src: "/assets/app-store/portfolio.png"
  }
];

export function ProductShowcase() {
  return (
    <section className="bg-[#090b12] px-5 py-20 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#21f17b]">Trading app preview</p>
            <h2 className="mt-4 text-5xl font-black leading-[0.92] sm:text-7xl">
              Scan the feed. Follow the smart money. Buy fast.
            </h2>
            <p className="mt-5 max-w-xl text-lg font-semibold leading-8 text-zinc-400">
              ChadWallet brings discovery, social context, token charts, and portfolio tracking into one mobile-first app.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {appScreens.map((screen) => (
              <figure key={screen.title} className="min-w-0">
                <Image
                  src={screen.src}
                  alt={`ChadWallet ${screen.title} screen`}
                  width={1242}
                  height={2688}
                  className="phone-shadow w-full"
                />
                <figcaption className="mt-3 text-center text-xs font-black uppercase text-zinc-500">
                  {screen.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="mt-20 overflow-hidden border border-white/10 bg-white/[0.03]">
          <Image
            src="/assets/flow/buy-sell-4.png"
            alt="ChadWallet buy and sell trading flow"
            width={3840}
            height={2160}
            className="w-full"
          />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[.5fr_1fr] lg:items-center">
          <div className="mx-auto w-full max-w-sm overflow-hidden border border-white/10 bg-black shadow-[0_24px_60px_rgba(0,0,0,.35)]">
            <video
              className="w-full"
              src="/assets/video/chadwallet.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#21f17b]">Live app feel</p>
            <h3 className="mt-4 text-4xl font-black leading-[0.95]">Made to move at market speed.</h3>
            <p className="mt-4 text-base font-semibold leading-7 text-zinc-400">
              The motion, dark interface, green actions, and social trading flows come straight from the product assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
