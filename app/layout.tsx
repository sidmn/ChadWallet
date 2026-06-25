import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/app-providers";

export const metadata: Metadata = {
  title: "ChadWallet",
  description: "A Solana wallet landing page with live token movement, Privy Google sign-in, and app store links.",
  icons: {
    icon: "/assets/logo/light.png",
    shortcut: "/assets/logo/light.png",
    apple: "/assets/logo/light.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
