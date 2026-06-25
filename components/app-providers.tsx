"use client";

import { PrivyProvider } from "@privy-io/react-auth";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

  if (!appId) {
    return children;
  }

  return (
    <PrivyProvider
      appId={appId}
      config={{
        loginMethods: ["google"],
        appearance: {
          theme: "dark",
          accentColor: "#21f17b",
          logo: "/assets/logo/dark.png"
        },
        embeddedWallets: {
          solana: {
            createOnLogin: "users-without-wallets"
          }
        }
      }}
    >
      {children}
    </PrivyProvider>
  );
}
