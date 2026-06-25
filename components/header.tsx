import Image from "next/image";
import Link from "next/link";
import { AuthButton } from "@/components/auth-button";
import { appLinks } from "@/lib/links";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-3">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/assets/logo/light.png" alt="ChadWallet" width={42} height={42} priority className="rounded-full" />
        <span className="text-lg font-black text-[#07101b] sm:text-xl">ChadWallet</span>
      </Link>
      <nav className="flex items-center gap-2 text-xs font-black uppercase sm:gap-3">
        <a
          href={appLinks.iphone}
          className="hidden h-10 items-center border border-black/10 bg-white px-4 text-[#07101b] shadow-[0_10px_24px_rgba(0,0,0,.12)] transition hover:bg-[#21f17b] md:inline-flex"
        >
          Download on App Store
        </a>
        <a
          href={appLinks.android}
          className="hidden h-10 items-center border border-black/10 bg-white px-4 text-[#07101b] shadow-[0_10px_24px_rgba(0,0,0,.12)] transition hover:bg-[#21f17b] lg:inline-flex"
        >
          Get it on Google Play
        </a>
        <Link
          href="/trade"
          className="hidden h-10 items-center border border-black/10 bg-[#07101b] px-4 text-white shadow-[0_10px_24px_rgba(0,0,0,.18)] transition hover:bg-[#21f17b] hover:text-[#07101b] sm:inline-flex"
        >
          Start Trading
        </Link>
        <AuthButton />
      </nav>
    </header>
  );
}
