"use client";

import { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";

export function AuthButton() {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

  if (appId) {
    return <PrivyAuthControl />;
  }

  return <LoginModalButton />;
}

function PrivyAuthControl() {
  const { authenticated, login, logout, user, ready } = usePrivy();
  const [signingOut, setSigningOut] = useState(false);
  const email = user?.google?.email ?? user?.email?.address;
  const displayName = email ?? "Signed in";
  const initial = displayName.charAt(0).toUpperCase();

  useEffect(() => {
    if (!authenticated) {
      setSigningOut(false);
    }
  }, [authenticated]);

  if (!ready) {
    return <AuthStatusPill label="Checking" />;
  }

  if (authenticated && !signingOut) {
    return (
      <div className="flex h-10 items-center border border-black/10 bg-white/90 text-[#07101b] shadow-[0_10px_24px_rgba(0,0,0,.14)] backdrop-blur">
        <div className="hidden max-w-44 items-center gap-2 px-3 sm:flex">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#07101b] text-xs font-black uppercase text-[#21f17b]">
            {initial}
          </span>
          <span className="truncate text-xs font-black normal-case">{displayName}</span>
        </div>
        <button
          type="button"
          onClick={() => {
            setSigningOut(true);
            void logout();
          }}
          className="h-full border-l border-black/10 px-4 text-xs font-black uppercase transition hover:bg-[#07101b] hover:text-white"
        >
          Sign out
        </button>
      </div>
    );
  }

  if (signingOut) {
    return <AuthStatusPill label="Signing out" />;
  }

  return (
    <button
      type="button"
      onClick={() => login({ loginMethods: ["google"] })}
      className="inline-flex h-10 items-center justify-center border border-black bg-[#21f17b] px-4 text-xs font-black uppercase text-[#07101b] shadow-[0_10px_24px_rgba(0,0,0,.16)] transition hover:bg-white"
    >
      Login
    </button>
  );
}

function LoginModalButton() {
  return (
    <button
      type="button"
      disabled
      className="inline-flex h-10 cursor-not-allowed items-center justify-center border border-black bg-[#21f17b] px-4 text-xs font-black uppercase text-[#07101b] opacity-60 shadow-[0_10px_24px_rgba(0,0,0,.16)]"
    >
      Login
    </button>
  );
}

function AuthStatusPill({ label }: { label: string }) {
  return (
    <div className="inline-flex h-10 items-center gap-2 border border-black/10 bg-white/80 px-4 text-xs font-black uppercase text-[#07101b] shadow-[0_10px_24px_rgba(0,0,0,.14)] backdrop-blur">
      <span className="h-2 w-2 animate-pulse rounded-full bg-[#21f17b]" />
      {label}
    </div>
  );
}
