const features = [
  {
    title: "Leaderboard",
    copy: "Follow wallets and traders that are actually moving markets."
  },
  {
    title: "Feed",
    copy: "See what the space is talking about before it breaks out."
  },
  {
    title: "Alerts",
    copy: "Catch wallet moves, token spikes, and new opportunities fast."
  },
  {
    title: "One-Click Buy",
    copy: "Go from signal to position without losing the moment."
  },
  {
    title: "Portfolio",
    copy: "Track holdings, memes, rewards, and performance in one place."
  },
  {
    title: "Launch",
    copy: "Turn ideas, tweets, and memes into coins from your phone."
  }
];

export function FeatureGrid() {
  return (
    <section className="bg-[#090b12] px-5 py-20 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#21f17b]">Never miss out again</p>
          <h2 className="mt-4 text-5xl font-black leading-[0.92] sm:text-7xl">
            Built for the trades everyone else sees late.
          </h2>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#21f17b] hover:bg-white/[0.07]"
            >
              <span className="text-sm font-black text-[#21f17b]">0{index + 1}</span>
              <h3 className="mt-8 text-3xl font-black">{feature.title}</h3>
              <p className="mt-3 text-base font-semibold leading-7 text-zinc-400">{feature.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
