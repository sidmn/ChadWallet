export function TradingFooter() {
  return (
    <footer className="bg-[#090b12] px-5 pb-28 pt-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl border border-white/10 bg-[#21f17b] p-8 text-[#07101b] sm:p-12">
        <p className="text-sm font-black uppercase tracking-[0.28em]">Trading opens soon</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="max-w-4xl text-5xl font-black leading-[0.9] sm:text-7xl">
            Start trading with ChadWallet when the web terminal drops.
          </h2>
          <div className="inline-flex h-14 items-center justify-center border border-[#07101b] bg-[#07101b] px-7 text-sm font-black uppercase text-white">
            Start Trading
          </div>
        </div>
      </div>
    </footer>
  );
}
