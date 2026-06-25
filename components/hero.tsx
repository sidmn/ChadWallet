import Image from "next/image";
import Link from "next/link";
import { appLinks } from "@/lib/links";

export function Hero() {
  return (
    <div className="grid flex-1 items-end gap-10 pb-8 pt-16 lg:grid-cols-[1fr_.86fr] lg:pt-10">
      <section className="max-w-5xl self-center">
        <h1 className="max-w-5xl text-6xl font-black leading-[0.83] text-[#07101b] sm:text-8xl lg:text-[8.9rem]">
          ChadWallet
        </h1>
        <p className="mt-7 max-w-2xl text-xl font-black leading-8 text-[#07101b] sm:text-3xl sm:leading-10">
          Catch every Solana move before it becomes the timeline.
        </p>
        <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-[#13233a]/80 sm:text-lg">
          Track wallets, follow winning traders, launch memes, buy in seconds, and keep your portfolio
          in one fast mobile trading app.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="/trade"
            className="inline-flex h-14 items-center border border-black bg-[#07101b] px-7 text-sm font-black uppercase text-white shadow-[0_16px_28px_rgba(0,0,0,.22)] transition hover:bg-[#21f17b] hover:text-[#07101b]"
          >
            Start Trading
          </Link>
          <a
            href={appLinks.iphone}
            className="inline-flex h-14 items-center border border-black/10 bg-white px-7 text-sm font-black uppercase text-[#07101b] shadow-[0_16px_28px_rgba(0,0,0,.14)] transition hover:bg-[#21f17b]"
          >
            Download App
          </a>
        </div>
      </section>
      <div className="relative min-h-[520px] self-end">
        <Image
          src="/assets/app-store/discover.png"
          alt="ChadWallet discover screen"
          width={1242}
          height={2688}
          priority
          className="phone-shadow absolute bottom-0 left-[8%] w-[48%] max-w-[270px] -rotate-6"
        />
        <Image
          src="/assets/app-store/token.png"
          alt="ChadWallet token trading screen"
          width={1242}
          height={2688}
          priority
          className="phone-shadow absolute bottom-0 right-[8%] w-[52%] max-w-[300px] rotate-6"
        />
      </div>
    </div>
  );
}
