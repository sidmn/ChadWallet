"use client";

import Image from "next/image";
import { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";

export function AuthButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 items-center justify-center border border-black bg-[#21f17b] px-4 text-xs font-black uppercase text-[#07101b] shadow-[0_10px_24px_rgba(0,0,0,.16)] transition hover:bg-white"
      >
        Login
      </button>
      {open ? <AuthModal onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function AuthModal({ onClose }: { onClose: () => void }) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

  if (!appId) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm">
        <AuthShell onClose={onClose}>
          <button
            type="button"
            disabled
            className="mt-6 flex w-full cursor-not-allowed items-center justify-center gap-3 border border-white/10 bg-white px-5 py-4 text-sm font-black uppercase text-[#07101b] opacity-60"
          >
            <GoogleMark />
            Continue with Google
          </button>
        </AuthShell>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm">
      <AuthShell onClose={onClose}>
        <PrivyLogin />
      </AuthShell>
    </div>
  );
}

function PrivyLogin() {
  const { authenticated, login, logout, user, ready } = usePrivy();
  const label = authenticated ? user?.google?.email ?? "Signed in" : "Continue with Google";

  return (
    <button
      type="button"
      disabled={!ready}
      onClick={() => (authenticated ? logout() : login())}
      className="mt-6 flex w-full items-center justify-center gap-3 border border-white/10 bg-white px-5 py-4 text-sm font-black uppercase text-[#07101b] transition hover:bg-[#21f17b] disabled:cursor-not-allowed disabled:opacity-60"
    >
      <GoogleMark />
      {label}
    </button>
  );
}

function AuthShell({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="w-full max-w-sm border border-white/10 bg-[#08111f] p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,.45)]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/assets/logo/dark.png" alt="ChadWallet" width={42} height={42} className="rounded-full" />
          <div>
            <h2 className="text-xl font-black">Log in</h2>
            <p className="text-sm font-semibold text-zinc-400">Use ChadWallet on web.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center border border-white/10 text-xl font-black text-zinc-300 transition hover:border-[#21f17b] hover:text-[#21f17b]"
          aria-label="Close login modal"
        >
          x
        </button>
      </div>
      {children}
    </div>
  );
}

function GoogleMark() {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-200 bg-white text-base font-black text-[#4285f4]">
      G
    </span>
  );
}
